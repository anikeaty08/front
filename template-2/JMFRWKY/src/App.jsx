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

    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

                                const btn = document.querySelector('.glow-btn');
                          btn.addEventListener('mousemove', (e) => {
                            const rect = btn.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            btn.style.setProperty('--x', x + 'px');
                            btn.style.setProperty('--y', y + 'px');
                          });
                            
}

{

        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) {
                lucide.createIcons();
            }

            // Counter Animation Function
            function animateCounters() {
                const counters = document.querySelectorAll('.counter');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const counter = entry.target;
                            const target = parseInt(counter.getAttribute('data-target'));
                            const suffix = counter.getAttribute('data-suffix') || '';
                            const duration = 2000; // Animation duration in ms
                            const startTime = performance.now();

                            function updateCounter(currentTime) {
                                const elapsedTime = currentTime - startTime;
                                const progress = Math.min(elapsedTime / duration, 1);
                                
                                // Easing function for smooth animation
                                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                                
                                let current;
                                if (suffix === '%') {
                                    current = (target * easeOutQuart).toFixed(2);
                                } else if (suffix === 'M+') {
                                    current = (target / 1000000 * easeOutQuart).toFixed(1);
                                } else {
                                    current = Math.floor(target * easeOutQuart);
                                }
                                
                                counter.textContent = current + suffix;
                                
                                if (progress < 1) {
                                    requestAnimationFrame(updateCounter);
                                }
                            }
                            
                            requestAnimationFrame(updateCounter);
                            observer.unobserve(counter);
                        }
                    });
                }, {
                    threshold: 0.5
                });

                counters.forEach(counter => {
                    observer.observe(counter);
                });
            }

            // Initialize counter animation
            animateCounters();
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
      <div className="spline-container absolute top-0 w-full h-1200 -z-10">
<div data-us-project="5lHoGfe3FLqHAGyFDn3C" style={{width: `full`, height: `900px`}}></div>

</div>

<header className="fixed top-4 left-4 right-4 z-50 fade-in">
<div className="max-w-7xl mx-auto">
<div className="h-14 flex glass-effect bg-white/5 border-white/10 border rounded-full pr-3 pl-3 items-center justify-between">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
<svg className="lucide lucide-hexagon h-4 w-4 text-white" data-icon-replaced="true" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-lg font-medium sf-pro-display">Nexus Studio</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Sign In</button>
<button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
                        Get Started
                    </button>
</div>
<button className="md:hidden p-2">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</header>

<div className="max-w-full sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pt-40 pr-4 pl-4">
<div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
</div>
<div className="max-w-4xl text-left mt-10 mb-10 justify-end">
<div className="slide-up inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8">
<div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
<span className="text-sm font-medium">Trusted by 2M+ developers worldwide</span>
</div>
<h1 className="slide-up stagger-1 text-5xl sm:text-6xl lg:text-7xl sf-pro-display tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-light" style={{}}>
                    Think different.
                    Build exceptional.
                </h1>
<p className="slide-up stagger-2 max-w-2xl leading-relaxed text-lg font-normal text-white/60 mb-12 ml-0">
                    The most advanced development platform designed for teams who refuse to compromise on quality. Every line of code, every deployment, perfected.
                </p>
<div className="slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-start">
<title>Purple Glow-Follow Button</title>

<button className="glow-btn" style={{'--x': `147.5882568359375px`, '--y': `32.68756103515625px`}}>
<span className="icon-box">

<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(17, 24, 39)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
                            Get Started
                          </button>

<button className="hover:bg-white/30 transition-all flex gap-2 font-medium bg-[#000000] border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 items-center">
<svg className="lucide lucide-monitor h-5 w-5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20"></rect><line></line><line></line></svg>
                        Watch Demo
                    </button>
</div>
</div>

<section className="pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="stagger-2 glass-effect relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 blur-in">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 rounded-full bg-cyan-500"></div>
</div>
<span className="text-sm text-white/50">Nexus Cloud IDE</span>
</div>
<div className="flex items-center gap-2">
<div className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
<svg className="lucide lucide-zap h-3 w-3 inline mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Live
                        </div>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3 space-y-2">
<div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-4">Project Explorer</div>
<div className="space-y-1">
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-folder h-4 w-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm">nexus-app</span>
</div>
<div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-folder h-4 w-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm">components</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 bg-blue-500/10 border border-blue-500/20 rounded-lg cursor-pointer">
<svg className="lucide lucide-file-code h-4 w-4 text-orange-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span className="text-sm text-blue-300">Dashboard.tsx</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-file-code h-4 w-4 text-orange-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span className="text-sm">Analytics.tsx</span>
</div>
<div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-folder h-4 w-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm">api</span>
</div>
<div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-server h-4 w-4 text-cyan-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20"></rect><rect height="8" rx="2" ry="2" width="20"></rect><line></line><line></line></svg>
<span className="text-sm">routes.ts</span>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-database h-4 w-4 text-purple-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path></path><path></path></svg>
<span className="text-sm">database.config</span>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<svg className="lucide lucide-settings h-4 w-4 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-sm">nexus.config.json</span>
</div>
</div>
</aside>

<main className="lg:col-span-6">
<div className="bg-gray-950/80 border border-white/10 rounded-2xl overflow-hidden">

<div className="flex items-center gap-1 p-2 border-b border-white/10 bg-gray-900/50">
<div className="flex gap-2 bg-blue-500/20 border-blue-500/30 border rounded-lg pt-2 pr-4 pb-2 pl-4 items-center">
<i className="h-3 w-3 text-blue-400" data-lucide="react" strokeWidth="1.5"></i>
<span className="text-xs text-blue-300">Dashboard.tsx</span>
<svg className="lucide lucide-x h-3 w-3 text-white/40 hover:text-white cursor-pointer" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<button className="p-2 hover:bg-white/5 rounded-lg">
<svg className="lucide lucide-plus h-4 w-4 text-white/40" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>

<div className="leading-7 min-h-96 relative text-sm font-mono pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-4 space-y-1">
<div className="flex animate-typing-1">
<span className="text-white/30 w-8 text-right mr-4">1</span>
<span className="typing-text" data-text="import React, { useState, useEffect } from 'react'"><span className="text-purple-300">React</span><span className="text-white/60">,</span> <span className="text-white/60">{"{"}</span> <span className="text-blue-300">useState</span><span className="text-white/60">,</span> <span className="text-blue-300">useEffect</span> <span className="text-white/60">{"}"}</span> <span className="text-purple-400">from</span> <span className="text-cyan-400-cursor">|</span>
</span></div>
<div className="flex animate-typing-2">
<span className="text-white/30 w-8 text-right mr-4">2</span>
<span className="typing-text" data-delay="1000"><span className="text-purple-400">import</span> <span className="text-white/60">{"{"}</span> <span className="text-blue-300white/60">,</span> <span className="text-blue-300">MetricsPanel</span> <span className="text-white/60">{"}"}</span> <span className="text-purple-400">from</span> <span className="text-cyan-400">'@</span></span></div>
<div className="flex animate-typing-3">
<span className="text-white/30 w-8 text-right mr-4">3</span>
<span></span>
<span className="text-white/30 w-8 text-right mr-4">4</span>
<span className="typing-text" data-delay="2000"><span className="text-orange-300">interface</span> <span className="text-blue-300">DashboardProps</span> <span className="text-white/60">{"{"}</span></span>
</div>
<div className="flex animate-typing-5">
<span className="text-white/30 w-8 text-right mr-4">5</span>
<span className="ml-4 typing-text" data-delay="2500"><span className="text-blue-300">userId</span><span className="text-white/60">:</span> <span className="text-orange-300">string</span></span>
</div>
<div className="flex animate-typing-6">
<span className="text-white/30 w-8 text-right mr-4">6</span>
<span className="ml-4 typing-text" data-delay="3000"><span className="text-blue-300">theme</span><span className="text-white/60">?:</span> <span className="text-cyan-400">'light'</span> class="text-green-400"{">"}'dark'</span>
</div>
<div className="flex animate-typing-7">
<span className="text-white/30 w-8 text-right mr-4">7</span>
<span className="typing-text" data-delay="3500"><span className="text-white/60">{"}"}</span></span>
</div>
<div className="flex animate-typing-8">
<span className="text-white/30 w-8 text-right mr-4">8</span>
<span></span>
</div>
<div className="flex animate-typing-9">
<span className="text-white/30 w-8 text-right mr-4">9</span>
<span className="typing-text" data-delay="4000"><span className="text-purple-400">export</span> <span className="text-purple-400">const</span> <span className="text-blue-300">Dashboard</span><span className="text-white/60">:</span> <span className="text-orange-300">React.FC</span><span className="text-white/60">{"<"}</span><span className="text-orange-300">DashboardProps</span><span className="text-white/60">{">"}</span> <span className="text-white/60">=</span> <span className="text-white/60">({"{"}</span> <span className="text-blue-300">userId</span><span className="text-white/60">,</span> <span className="text-blue-300">theme</span> <span className="text-white/60">=</span> <span className="text-cyan-400">'dark'</span> <span className="text-white/60">{"}"})</span> <span className="text-purple-400">={">"}</span> <span className="text-white<div class=" flex="">
<span className="text-white/30 w-8 text-right mr-4">10</span>
<span className="ml-4 typing-text" data-delay="5000"><span className="text-purple-400">const</span> <span className="text-white/60">[</span><span className="text-blue-300">metrics</span><span className="text-white/60">,</span> <span className="text-blue-">]</span> <span className="text-white/60">=</span> <span className="text-yellow-300">useState</span><span className="text-white/60">{"<"}</span><span className="text-orange-300">MetricsData</span><span className="text-white/60">{">"}(</span><span className="text-purple-400">null</span><span className="text-white/60">)</span></span>
</span></span></div>
<div className="flex animate-typing-11">
<span className="text-white/30 w-8 text-right mr-4">11</span>
<span className="ml-4 typing-text" data-delay="5500"><span className="text-purple-400">const</span> <span className="text-white/60">[</span><span className="text-blue-300">isLoading</span><span className="text-white/60">,</span><span className="text-white/60">]</span> class="text-yellow-300"{">"}useState</span><span className="text-white/60">(</span><span className="text-purple-400">true</span><span className="text-<div class=" flex="">
<span className="text-white/30 w-8 text-right mr-4">12</span>
<span></span>
</span></div>
<div className="flex animate-typing-13">
<span className="text-white/30 w-8 text-right mr-4">13</span>
<span className="ml-4 typing-text" data-delay="6000"><span className="text-yellow-white/60">(()</span> <span className="text-purple-400">={">"}</span> <span className="text-white/60">{"{"}</span></span>
</div>
<div className="flex animate-typing-14">
<span className="text-white/30 w-8 text-right mr-4">14</span>
<span className="ml-8 typing-text" data-delay="6500"><span className="text-blue-300">fetchUserMetrics</span><span className="text-white/60">(</span><span className="text-blue-300">userId</span><span className="text-white/60">)</span></span>
</div>
<div className="flex animate-typing-15">
<span className="text-white/30 w-8 text-right mr-4">15</span>
<span className="ml-12 typing-text" data-delay="7000"><span className="text-white/60">.</span><span className="text-yellow-300">then</span><span className="text-white/60">(</span><span className="text-blue-300">setMetrics</span><span className="text-white/60">)</span></span>
</div>
<div className="flex animate-typing-16">
<span className="text-white/30 w-8 text-right mr-4">16</span>
<span className="ml-12 typing-text" data-delay="7500"><span className="text-white/60">.</span><span className="text-yellow-300">finally</span><span className="text-white/60">(()</span> <span className="text-purple-400">={">"}</span> <span className="text-blue-300">setIsLoading</span><span className="text-white/60">(</span><span className="text-purple-400">false</span><span className="text-white/60">))</span></span>
</div>
</div>

</div>
</div>

<div className="mt-6 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold sf-pro-display">Analytics Dashboard Pro</h3>
<p className="text-sm text-white/50">by Enterprise Team • Updated 3 minutes ago</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2">
<svg className="lucide lucide-star h-3 w-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                                    2.3k
                                </button>
<button className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2">
<svg className="lucide lucide-git-branch h-3 w-3" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><circle cx="18" cy="6"></circle><circle cx="6" cy="18"></circle><path></path></svg>
                                    Fork
                                </button>
</div>
</div>
</main>

<aside className="lg:col-span-3 space-y-4">

<div className="bg-gray-950/80 border border-white/10 rounded-xl">
<div className="flex items-center justify-between p-3 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-terminal h-4 w-4 text-cyan-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-sm font-medium">Terminal</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
<span className="text-xs text-cyan-400">Live</span>
</div>
</div>
<div className="p-3 font-mono text-xs space-y-2 h-48 overflow-y-auto">
<div className="text-cyan-400">→ nexus dev --hot-reload</div>
<div className="text-white/60">🚀 Starting Nexus development server...</div>
<div className="text-blue-400">✓ TypeScript compiler ready</div>
<div className="text-blue-400">✓ Hot module replacement enabled</div>
<div className="text-cyan-400">✓ Server running on https://localhost:3000</div>
<div className="text-purple-400">✓ GraphQL playground available</div>
<div className="text-yellow-400">⚡ Watching for file changes...</div>
<div className="text-white/40">Dashboard.tsx compiled in 847ms</div>
<div className="text-cyan-400">→ nexus test --watch</div>
<div className="text-cyan-400">✅ 47 tests passed</div>
<div className="text-white/40">Code coverage: 94.3%</div>
<div className="text-blue-400">→ Ready for production deployment</div>
</div>
</div>

<div className="bg-gray-950/80 border border-white/10 rounded-xl">
<div className="flex items-center justify-between p-3 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-eye h-4 w-4 text-blue-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-sm font-medium">Live Preview</span>
</div>
<button className="p-1 hover:bg-white/10 rounded">
<svg className="lucide lucide-external-link h-3 w-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
<div className="p-3 space-y-3">
<div className="bg-blue-500/20 rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium">Performance</span>
<span className="text-xs text-cyan-400">98/100</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="h-1 rounded-full bg-cyan-400" style={{width: `98%`}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Bundle Size</span>
<span className="text-cyan-400">2.4MB ↓12%</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Load Time</span>
<span className="text-blue-400">1.2s</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Lighthouse</span>
<span className="text-purple-400">A+</span>
</div>
</div>
</div>
</div>
</aside>
</div>

<div className="absolute bottom-4 right-4 flex gap-2">
<button className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3">
<svg className="lucide lucide-play w-[20px] h-[20px] text-neutral-50" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3">
<svg className="lucide lucide-share h-5 w-5" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-20">
<h2 className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light" style={{}}>
                    Trusted by industry leaders.
                </h2>
<p className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto">
                    See how forward-thinking companies use Nexus Studio to build exceptional digital experiences.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="fade-in stagger-3 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
<div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
<img alt="Modern office space with developers" className="w-full h-full object-cover card-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7c582f0-2e26-487e-ae18-fee9da10561d_800w.jpg" />
<div className="absolute top-4 left-4">
<div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                                Case Study
                            </div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-trending-up h-5 w-5 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="">
<h3 className="font-semibold sf-pro-display">TechCorp Inc.</h3>
<p className="text-sm text-white/70">Fortune 500 Company</p>
</div>
</div>
</div>
</div>
<div className="p-8 card-content">
<h4 className="text-xl font-semibold sf-pro-display mb-4">300% faster deployments</h4>
<p className="text-white/60 mb-6 leading-relaxed">
                            "Nexus Studio transformed our development workflow. We went from weekly deployments to multiple deployments per day, with zero downtime."
                        </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_320w.jpg)] bg-cover rounded-full"></div>
<div className="">
<p className="text-sm font-medium">Sarah Chen</p>
<p className="text-xs text-white/50">VP of Engineering</p>
</div>
</div>
<svg className="lucide lucide-arrow-right h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>

<div className="fade-in stagger-4 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
<div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
<img alt="Collaborative team meeting" className="w-full h-full object-cover card-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36460156-d7ce-43aa-89af-e013fb87ccfc_800w.jpg" />
<div className="absolute top-4 left-4">
<div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                                Case Study
                            </div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-users w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold sf-pro-display">StartupX</h3>
<p className="text-sm text-white/70">Y Combinator Startup</p>
</div>
</div>
</div>
</div>
<div className="p-8 card-content">
<h4 className="text-xl font-semibold sf-pro-display mb-4">10x team productivity</h4>
<p className="text-white/60 mb-6 leading-relaxed">
                            "As a growing startup, Nexus Studio gave us enterprise-grade tools without the complexity. Our team can focus on building, not infrastructure."
                        </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg)] bg-cover rounded-full"></div>
<div className="">
<p className="text-sm font-medium">Alex Rodriguez</p>
<p className="text-xs text-white/50">CTO & Co-founder</p>
</div>
</div>
<svg className="lucide lucide-arrow-right h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>

<div className="fade-in stagger-5 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden">
<div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
<img alt="Data visualization dashboard" className="w-full h-full object-cover card-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_800w.jpg" />
<div className="absolute top-4 left-4">
<div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                                Case Study
                            </div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<div className="">
<h3 className="font-semibold sf-pro-display">DataFlow Pro</h3>
<p className="text-sm text-white/70">Analytics Platform</p>
</div>
</div>
</div>
</div>
<div className="p-8 card-content">
<h4 className="text-xl font-semibold sf-pro-display mb-4">99.99% uptime achieved</h4>
<p className="text-white/60 mb-6 leading-relaxed">
                            "Mission-critical analytics platform serving millions of users. Nexus Studio's reliability and monitoring tools ensure we never miss a beat."
                        </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg)] bg-cover rounded-full" style={{}}></div>
<div className="">
<p className="text-sm font-medium">Maya Patel</p>
<p className="text-xs text-white/50">Head of Platform</p>
</div>
</div>
<svg className="lucide lucide-arrow-right h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2" data-suffix="M+" data-target="2000000" style={{}}>2.0M+</div>
<div className="text-white/60">Active Developers</div>
</div>
<div className="text-center">
<div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2" data-suffix="%" data-target="99.99" style={{}}>99.00%</div>
<div className="text-white/60">Platform Uptime</div>
</div>
<div className="text-center">
<div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2" data-suffix="M+" data-target="50000000" style={{}}>50.0M+</div>
<div className="text-white/60">Monthly Deployments</div>
</div>
<div className="text-center">
<div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2" data-suffix="+" data-target="200" style={{}}>200+</div>
<div className="text-white/60">Global Edge Locations</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light" style={{}}>
                    Engineered for excellence.
                </h2>
<p className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto">
                    Every feature designed with the same attention to detail you'd expect from a premium experience.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="fade-in stagger-3 group hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-zap h-6 w-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h3 className="text-xl font-semibold sf-pro-display mb-4">Lightning Performance</h3>
<p className="text-white/60 leading-relaxed">Experience sub-millisecond response times with our globally distributed edge network and intelligent caching.</p>
</div>
<div className="fade-in stagger-4 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-shield-check h-6 w-6 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<h3 className="text-xl font-semibold sf-pro-display mb-4">Enterprise Security</h3>
<p className="text-white/60 leading-relaxed">Bank-grade encryption, SOC 2 Type II compliance, and advanced threat protection built into every layer.</p>
</div>
<div className="fade-in stagger-5 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-globe h-6 w-6 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</div>
<h3 className="text-xl font-semibold sf-pro-display mb-4">Global Scale</h3>
<p className="text-white/60 leading-relaxed">Deploy instantly to 200+ edge locations worldwide. Your users get the fastest experience, anywhere.</p>
</div>
<div className="fade-in stagger-6 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-brain h-6 w-6 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="text-xl font-semibold sf-pro-display mb-4">AI-Powered Insights</h3>
<p className="text-white/60 leading-relaxed">Machine learning algorithms optimize your deployments, predict issues, and suggest performance improvements.</p>
</div>
<div className="fade-in stagger-4 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-layers h-6 w-6 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<h3 className="text-xl font-semibold sf-pro-display mb-4">Seamless Integration</h3>
<p className="text-white/60 leading-relaxed">Connect with your favorite tools and services through our comprehensive API and webhook ecosystem.</p>
</div>
<div className="fade-in stagger-5 group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
<div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-users h-6 w-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<h3 className="text-xl font-semibold sf-pro-display mb-4">Team Collaboration</h3>
<p className="text-white/60 leading-relaxed">Built for teams. Real-time collaboration, advanced permissions, and integrated communication tools.</p>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="slide-up bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-16">
<h2 className="text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light" style={{}}>
                    Ready to build the future?
                </h2>
<p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                    Join the developers who choose excellence. Start your journey with Nexus Studio today.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="glow-btn" style={{'--x': `37.5882568359375px`, '--y': `19.68756103515625px`}}>Start Building<span className="icon-box">

<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(17, 24, 39)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span></button>
<button className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
<svg className="lucide lucide-phone h-5 w-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        Schedule a Call
                    </button>
</div>
<p className="text-sm text-white/40 mt-6">
                    Free 14-day trial. No credit card required. Cancel anytime.
                </p>
</div>
</div>
</section>

<footer className="border-white/10 border-t pt-16 pb-16">
<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
<svg className="lucide lucide-hexagon h-4 w-4 text-white" data-icon-replaced="true" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-xl font-semibold sf-pro-display">Nexus Studio</span>
</div>
<p className="text-white/60 mb-6 max-w-md">
                        The development platform that empowers teams to create extraordinary digital experiences with uncompromising quality.
                    </p>
<div className="flex gap-4">
<button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
<svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" width="4"></rect><circle cx="4" cy="4"></circle></svg>
</button>
</div>
</div>
<div>
<h5 className="font-semibold mb-6">Platform</h5>
<ul className="space-y-3 text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Cloud IDE</a></li>
<li><a className="hover:text-white transition-colors" href="#">Deployment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Monitoring</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold mb-6">Solutions</h5>
<ul className="space-y-3 text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Startups</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-white transition-colors" href="#">Agencies</a></li>
<li><a className="hover:text-white transition-colors" href="#">E-commerce</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold mb-6">Support</h5>
<ul className="space-y-3 text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<p className="text-white/40 text-sm">© 2024 Nexus Studio, Inc. All rights reserved.</p>
<div className="flex gap-6 text-white/40 text-sm mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>

</div>
    </>
  );
}
