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
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
gray: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-grid mask-image-gradient"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white font-medium tracking-tight flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-gradient-to-br from-white to-gray-500 rounded flex items-center justify-center text-black text-[10px] font-bold group-hover:rotate-12 transition-transform">
                    R
                </div>
<span>renative</span>
</a>
<div className="flex items-center gap-6 text-sm font-light">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hidden sm:flex items-center gap-1.5 text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5 transition-all" href="mailto:hello@example.com">
<span>Contact</span>
<iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Available for freelance
                </div>
<h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">native</span> <br/>
                    mobile experiences.
                </h1>
<p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
                    I build high-performance iOS and Android applications using React Native, Expo, and Reanimated. Obsessed with 60fps animations and pixel-perfect UI.
                </p>
<div className="flex items-center gap-4">
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                        View Projects
                        <iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-lg text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
                        GitHub
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-gray-500">
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:react" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:typescript-icon" width="24"></iconify-icon>
<iconify-icon className="opacity-50 hover:text-white transition-all" icon="simple-icons:expo" width="24"></iconify-icon>
<iconify-icon className="opacity-50 hover:text-yellow-500 transition-all" icon="simple-icons:firebase" width="24"></iconify-icon>
</div>
</div>

<div className="relative flex justify-center lg:justify-end perspective-[1000px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px]"></div>

<div className="relative w-[280px] h-[580px] bg-gray-950 rounded-[3rem] border-[6px] border-gray-800 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out group overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2 px-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-800/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-900/20 animate-pulse"></div>
</div>

<div className="w-full h-full bg-gray-900 overflow-hidden relative font-sans">

<div className="pt-14 px-6 pb-4 flex justify-between items-end border-b border-white/5 bg-gray-900/90 backdrop-blur sticky top-0 z-10">
<div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Total Balance</div>
<div className="text-2xl font-medium text-white tracking-tight">$14,230.50</div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20"></div>
</div>

<div className="p-6">
<div className="flex items-end gap-1 h-24 mb-6">
<div className="flex-1 bg-white/5 rounded-t hover:bg-indigo-500/50 transition-colors h-[40%]"></div>
<div className="flex-1 bg-white/5 rounded-t hover:bg-indigo-500/50 transition-colors h-[70%]"></div>
<div className="flex-1 bg-white/5 rounded-t hover:bg-indigo-500/50 transition-colors h-[50%]"></div>
<div className="flex-1 bg-indigo-500 rounded-t shadow-[0_0_15px_rgba(99,102,241,0.5)] h-[85%]"></div>
<div className="flex-1 bg-white/5 rounded-t hover:bg-indigo-500/50 transition-colors h-[60%]"></div>
<div className="flex-1 bg-white/5 rounded-t hover:bg-indigo-500/50 transition-colors h-[45%]"></div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:arrow-down-left" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-white font-medium">Stripe Deposit</div>
<div className="text-[10px] text-gray-500">Today, 10:23 AM</div>
</div>
<div className="text-xs text-emerald-400 font-medium">+$1,200</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
<iconify-icon icon="lucide:shopping-bag" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-white font-medium">Apple Store</div>
<div className="text-[10px] text-gray-500">Yesterday</div>
</div>
<div className="text-xs text-white font-medium">-$999</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs text-white font-medium">Subscription</div>
<div className="text-[10px] text-gray-500">Aug 24</div>
</div>
<div className="text-xs text-white font-medium">-$12.00</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-950/90 backdrop-blur border-t border-white/5 flex items-center justify-around px-2">
<div className="p-2 text-white"><iconify-icon icon="lucide:home" width="20"></iconify-icon></div>
<div className="p-2 text-gray-600"><iconify-icon icon="lucide:pie-chart" width="20"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 mb-4">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
<div className="p-2 text-gray-600"><iconify-icon icon="lucide:wallet" width="20"></iconify-icon></div>
<div className="p-2 text-gray-600"><iconify-icon icon="lucide:user" width="20"></iconify-icon></div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 bg-gray-900 border border-white/10 rounded-xl p-4 shadow-2xl hidden lg:block backdrop-blur-md bg-opacity-95 w-72 rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="font-mono text-[10px] leading-relaxed">
<span className="token-keyword">const</span> <span className="token-function">App</span> = () =&gt; {<br/>
                          <span className="token-keyword">return</span> (<br/>
                            &lt;<span className="token-tag">View</span> <span className="token-attr">style</span>={styles.c}&gt;<br/>
                              &lt;<span className="token-tag">Text</span>&gt;<span className="token-string">Hello World</span>&lt;/<span className="token-tag">Text</span>&gt;<br/>
                            &lt;/<span className="token-tag">View</span>&gt;<br/>
                          );<br/>
                        };
                    </div>
</div>
</div>
</div>
</main>

<section className="py-20 border-t border-white/5 bg-gray-950/50" id="stack">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">Technical Arsenal</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
<iconify-icon className="text-indigo-400 mb-3" icon="lucide:layers" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">React Native CLI</h3>
<p className="text-xs text-gray-500 font-light">Native module integration &amp; linking</p>
</div>

<div className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
<iconify-icon className="text-yellow-400 mb-3" icon="lucide:zap" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Expo Router</h3>
<p className="text-xs text-gray-500 font-light">File-based routing &amp; deep linking</p>
</div>

<div className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
<iconify-icon className="text-rose-400 mb-3" icon="lucide:move" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">Reanimated 3</h3>
<p className="text-xs text-gray-500 font-light">Complex 60fps gestures &amp; animations</p>
</div>

<div className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
<iconify-icon className="text-emerald-400 mb-3" icon="lucide:database" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm mb-1">WatermelonDB</h3>
<p className="text-xs text-gray-500 font-light">Offline-first synchronization</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Featured Projects</h2>
<p className="text-gray-500 font-light text-sm">Selected mobile applications shipped to the stores.</p>
</div>
<a className="text-sm text-white hover:text-gray-300 hidden md:flex items-center gap-1 transition-colors" href="#">
                    See all archive <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl bg-gray-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all">

<div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>

<div className="w-32 h-[120%] bg-black rounded-t-[2rem] border-t-[4px] border-x-[4px] border-gray-800 shadow-2xl transform group-hover:translate-y-[-10px] transition-transform duration-500 mt-10">
<div className="w-full h-full bg-gray-800 rounded-t-[1.7rem] overflow-hidden relative">
<div className="absolute top-20 left-4 right-4 h-2 bg-white/10 rounded-full"></div>
<div className="absolute top-24 left-4 w-12 h-2 bg-white/10 rounded-full"></div>
<div className="absolute top-32 left-4 right-4 h-32 bg-indigo-500/20 rounded-lg border border-indigo-500/30"></div>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-white font-medium text-lg">FinTrack Pro</h3>
<div className="flex gap-2">
<span className="text-[10px] border border-white/10 px-2 py-0.5 rounded text-gray-400">iOS</span>
<span className="text-[10px] border border-white/10 px-2 py-0.5 rounded text-gray-400">Android</span>
</div>
</div>
<p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                            A personal finance tracker built with Expo and Skia for high-performance charts. Features biometric auth and iCloud sync.
                        </p>
<div className="flex items-center gap-4 text-xs font-medium text-white">
<a className="hover:underline decoration-gray-600 underline-offset-4" href="#">View Case Study</a>
<a className="text-gray-500 hover:text-white transition-colors flex items-center gap-1" href="#">
                                App Store <iconify-icon icon="lucide:external-link" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-gray-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all">

<div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>

<div className="flex gap-4 mt-10">
<div className="w-24 h-[120%] bg-black rounded-t-[1.5rem] border-t-[4px] border-x-[4px] border-gray-800 shadow-2xl transform group-hover:translate-y-[-5px] transition-transform duration-500">
<div className="w-full h-full bg-gray-800 rounded-t-[1.2rem] p-2">
<div className="w-full h-full bg-emerald-900/20 rounded-t-lg"></div>
</div>
</div>
<div className="w-24 h-[120%] bg-black rounded-t-[1.5rem] border-t-[4px] border-x-[4px] border-gray-800 shadow-2xl transform group-hover:translate-y-[-15px] transition-transform duration-700">
<div className="w-full h-full bg-gray-800 rounded-t-[1.2rem] p-2">
<div className="w-full h-full bg-white/5 rounded-t-lg"></div>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-white font-medium text-lg">HabitZen</h3>
<div className="flex gap-2">
<span className="text-[10px] border border-white/10 px-2 py-0.5 rounded text-gray-400">Expo</span>
<span className="text-[10px] border border-white/10 px-2 py-0.5 rounded text-gray-400">TypeScript</span>
</div>
</div>
<p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                            Social habit tracking app with real-time updates via WebSockets. Integrates with Apple HealthKit and Google Fit.
                        </p>
<div className="flex items-center gap-4 text-xs font-medium text-white">
<a className="hover:underline decoration-gray-600 underline-offset-4" href="#">View Case Study</a>
<a className="text-gray-500 hover:text-white transition-colors flex items-center gap-1" href="#">
                                GitHub <iconify-icon icon="lucide:github" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium text-white tracking-tight">Clean Code, Performant Apps</h2>
<p className="text-gray-500 mt-2 text-sm font-light">I write maintainable, type-safe code that scales.</p>
</div>

<div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl font-mono text-xs md:text-sm">

<div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="text-gray-500 text-xs">useAnimation.ts</div>
<div className="w-10"></div>
</div>

<div className="p-6 overflow-x-auto text-gray-300 leading-6">
<div>
<span className="token-keyword">import</span> { <span className="token-function">useSharedValue</span>, <span className="token-function">withSpring</span> } <span className="token-keyword">from</span> <span className="token-string">'react-native-reanimated'</span>;
                    </div>
<div className="mt-2">
<span className="token-keyword">export const</span> <span className="token-function">useCardAnimation</span> = () =&gt; {
                    </div>
<div className="pl-4">
<span className="token-keyword">const</span> <span className="token-attr">offset</span> = <span className="token-function">useSharedValue</span>(0);
                    </div>
<div className="pl-4 mt-1">
<span className="token-comment">// Handle gesture interactions</span>
</div>
<div className="pl-4">
<span className="token-keyword">const</span> <span className="token-function">startAnimation</span> = () =&gt; {
                    </div>
<div className="pl-8">
<span className="token-attr">offset</span>.value = <span className="token-function">withSpring</span>(<span className="token-keyword">Math</span>.<span className="token-function">random</span>() * 255, {
                    </div>
<div className="pl-12">
<span className="token-attr">damping</span>: 10,
                    </div>
<div className="pl-12">
<span className="token-attr">stiffness</span>: 90
                    </div>
<div className="pl-8">
                        });
                    </div>
<div className="pl-4">
                        };
                    </div>
<div className="pl-4 mt-2">
<span className="token-keyword">return</span> { offset, startAnimation };
                    </div>
<div>
                        };
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-gray-950">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="text-white font-medium tracking-tight text-lg">renative</span>
<p className="text-gray-500 text-xs mt-1 font-light">Building for the mobile web &amp; stores.</p>
</div>
<div className="flex gap-6 text-sm font-light text-gray-400">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<div className="text-xs text-gray-600 font-light">
                © 2024. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
