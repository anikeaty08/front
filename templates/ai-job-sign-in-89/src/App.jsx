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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const words = ["Career Move", "AI Role", "Tech Job"];
            let i = 0;
            let timer;
            const el = document.getElementById('typewriter');
            
            function typingEffect() {
                let word = words[i].split('');
                var loopTyping = function() {
                    if (word.length > 0) {
                        el.innerHTML += word.shift();
                        timer = setTimeout(loopTyping, 100);
                    } else {
                        timer = setTimeout(deletingEffect, 2500);
                    }
                };
                loopTyping();
            }

            function deletingEffect() {
                let word = el.innerHTML.split('');
                var loopDeleting = function() {
                    if (word.length > 0) {
                        word.pop();
                        el.innerHTML = word.join('');
                        timer = setTimeout(loopDeleting, 50);
                    } else {
                        i = (i + 1) % words.length;
                        timer = setTimeout(typingEffect, 500);
                    }
                };
                loopDeleting();
            }
            
            // Start the effect
            setTimeout(typingEffect, 1000);
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
      
<div className="min-h-screen flex flex-col lg:flex-row">

<div className="lg:w-1/2 bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-between p-8 lg:p-12 lg:pr-24 min-h-[40vh] lg:min-h-screen">

<div className="absolute top-1/4 left-1/4 w-96 aspect-square bg-[#a3e635]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 aspect-square bg-[#a3e635]/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="absolute w-1.5 h-1.5 bg-[#a3e635] rounded-full opacity-40 animate-float-slow" style={{left: '10%', top: '15%'}}></div>
<div className="absolute w-1.5 h-1.5 bg-[#a3e635] rounded-full opacity-40 animate-float-fast" style={{left: '50%', top: '75%'}}></div>
<div className="absolute w-1.5 h-1.5 bg-[#a3e635] rounded-full opacity-40 animate-float-medium" style={{left: '80%', top: '40%'}}></div>
<div className="absolute w-1.5 h-1.5 bg-[#a3e635] rounded-full opacity-40 animate-float-slow" style={{left: '60%', top: '20%'}}></div>
<div className="absolute w-1.5 h-1.5 bg-[#a3e635] rounded-full opacity-40 animate-float-fast" style={{left: '30%', top: '85%'}}></div>

<div className="relative z-10">
<div className="flex items-center gap-2">
<span className="text-white font-semibold text-2xl tracking-tighter">devfound</span>
<div className="w-2 h-2 bg-[#a3e635] rounded-full animate-pulse"></div>
</div>
</div>

<div className="relative z-10 flex flex-col my-auto w-full pt-12 pb-12">
<div className="max-w-2xl">
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tighter h-32 sm:h-36 lg:h-48 xl:h-56">
<span className="text-white">Ensure a fast and</span><br/>
<span className="text-white">successful journey</span><br/>
<span className="flex items-center mt-1 lg:mt-2 whitespace-nowrap">
<span className="text-white mr-2 lg:mr-3">to your next</span>
<span className="text-[#a3e635]" id="typewriter"></span>
<span className="inline-block w-1 h-8 sm:h-10 lg:h-12 xl:h-14 bg-[#a3e635] ml-1.5 align-middle cursor-blink"></span>
</span>
</h1>
<p className="text-neutral-400 text-lg mt-6 mb-10 max-w-md leading-relaxed font-normal">
                        Log in to track your applications, get tailored AI opportunities, and move faster toward your next role.
                    </p>
</div>

<div className="relative w-full max-w-lg mt-4 hidden md:block animate-float-slow">
<div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden shadow-2xl">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#a3e635]/20 flex items-center justify-center text-[#a3e635]">
<iconify-icon className="text-xl" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-white font-medium text-sm">Top Matches for You</div>
<div className="text-neutral-400 text-xs mt-0.5">Based on your latest profile</div>
</div>
</div>
<div className="text-xs font-medium px-3 py-1 rounded-full bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20 tracking-wide">
                                Live
                            </div>
</div>

<div className="space-y-3 relative z-10">

<div className="bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Senior AI Engineer</div>
<div className="text-neutral-400 text-xs flex items-center gap-2 mt-1">
<span>OpenAI</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>$180k - $250k</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-[#a3e635] text-sm font-medium">98% Match</span>
</div>
</div>

<div className="bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">ML Researcher</div>
<div className="text-neutral-400 text-xs flex items-center gap-2 mt-1">
<span>DeepMind</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>$160k - $220k</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-[#a3e635] text-sm font-medium">95% Match</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 -bottom-6 bg-[#0a0a0a] border border-[#a3e635]/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 z-20 animate-float-medium">
<div className="w-12 h-12 rounded-full bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635]">
<iconify-icon className="text-2xl" icon="solar:case-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-white text-xl font-semibold tracking-tight">10k+</div>
<div className="text-neutral-400 text-xs mt-0.5">Active AI Jobs</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 text-neutral-500 text-xs font-medium">
                © 2026 devfound. All rights reserved.
            </div>

<div className="absolute right-0 top-0 bottom-0 w-16 hidden lg:block border-l border-white/5 bg-[#0a0a0a] z-0 overflow-hidden scrolling-edge group">

<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

<div className="animate-scroll-v flex flex-col items-center pt-8">

<div className="flex flex-col items-center gap-8 pb-8 text-[#a3e635]/20 group-hover:text-[#a3e635]/40 transition-colors duration-500">
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex flex-col items-center gap-8 pb-8 text-[#a3e635]/20 group-hover:text-[#a3e635]/40 transition-colors duration-500">
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#a3e635] transition-colors cursor-crosshair" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12 min-h-screen relative">
<div className="w-full max-w-md">
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 p-8 lg:p-10">

<div className="space-y-2 mb-8 text-center sm:text-left">
<h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tighter">Welcome back to devfound</h2>
<p className="text-neutral-500 text-sm">Sign in to continue from where you left off</p>
</div>

<button className="w-full bg-white hover:bg-neutral-50 text-neutral-700 py-3 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-3 transition-all border border-neutral-200 shadow-sm mb-6 focus:outline-none focus:ring-4 focus:ring-neutral-100">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
                        Sign in with Google
                    </button>

<div className="relative mb-6">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-neutral-100"></div>
</div>
<div className="relative flex justify-center text-xs">
<span className="px-4 bg-white text-neutral-400 font-medium tracking-wide uppercase">OR</span>
</div>
</div>

<form className="space-y-4">

<div>
<input className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 transition-all focus:border-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-100" placeholder="Email" required="" type="email"/>
</div>

<div className="relative">
<input className="w-full px-4 py-3 pr-12 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 transition-all focus:border-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-100" placeholder="Password" required="" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors flex items-center justify-center" type="button">
<iconify-icon className="text-lg" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between pt-1 pb-2">
<label className="flex items-center gap-2.5 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 bg-white peer-checked:bg-[#0a0a0a] peer-checked:border-[#0a0a0a] transition-all flex items-center justify-center shadow-sm group-hover:border-neutral-400">
<iconify-icon className="text-white text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-800 transition-colors">Remember me</span>
</label>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#">Forgot password?</a>
</div>

<button className="w-full bg-[#0a0a0a] text-white py-3 px-4 rounded-xl text-sm font-medium transition-all hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-200 shadow-md" type="submit">
                            SIGN IN
                        </button>
</form>

<div className="mt-8 text-center text-xs">
<div className="text-neutral-500">
                            Not a member? 
                            <a className="text-neutral-900 font-medium hover:text-[#a3e635] transition-colors ml-1" href="#">Sign up now</a>
</div>
<div className="mt-3">
<a className="text-neutral-400 hover:text-neutral-700 transition-colors" href="#">Didn't receive confirmation?</a>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
