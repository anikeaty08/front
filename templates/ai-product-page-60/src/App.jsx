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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Animations and smooth scroll setup (Keep this working for the design)
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-bar", { width: "100%", duration: 1.2, ease: "power2.inOut" })
            .to("#loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.1 })
            .to(".hero-anim", { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4");

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');
        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
            });
            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.2;
                cursorY += (mouseY - cursorY) * 0.2;
                cursorCircle.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
            });
        }

        // ==========================================
        // BEGINNER AI WORKFLOW LOGIC
        // ==========================================

        // 1. Grab all our HTML elements so JavaScript can talk to them
        const form = document.getElementById('ai-form');
        const input = document.getElementById('product-input');
        const generateBtn = document.getElementById('generate-btn');
        const generateText = document.getElementById('generate-text');
        
        const loadingState = document.getElementById('loading-state');
        const outputState = document.getElementById('output-state');
        const aiOutputText = document.getElementById('ai-output-text');
        
        const resetBtn = document.getElementById('reset-btn');

        // 2. Listen for the user submitting the form (clicking button OR hitting Enter)
        form.addEventListener('submit', function(event) {
            
            // EXTREMELY IMPORTANT: This stops the page from reloading.
            // If the page reloads, everything breaks and resets!
            event.preventDefault(); 

            // Grab the text the user typed
            const userText = input.value;

            // Optional: Don't do anything if they left it blank
            if (userText === "") {
                return;
            }

            // 3. UI Update: Disable the button and show the Loading State
            input.disabled = true;
            generateBtn.disabled = true;
            generateText.textContent = "Working...";
            
            // Hide output (if it was visible) and show loading
            outputState.classList.add('hidden');
            loadingState.classList.remove('hidden');
            loadingState.classList.add('flex');

            // 4. Simulate the AI processing
            // In a real app, you would ask your AI server here. 
            // We use setTimeout to wait 2 seconds (2000 milliseconds) to pretend.
            setTimeout(function() {
                
                // 5. Build the AI's response
                // This is our minimal working example "Hello world"
                const aiResponse = "Hello world! You asked me to write about: " + userText;

                // Put the AI response directly into the text element on screen
                aiOutputText.textContent = aiResponse;

                // 6. UI Update: Hide Loading State, Show Output State
                loadingState.classList.add('hidden');
                loadingState.classList.remove('flex');
                outputState.classList.remove('hidden');

                // Add a smooth fade-in animation to the output box
                gsap.fromTo(outputState, 
                    { y: 20, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.5 }
                );

            }, 2000); // 2 seconds delay
        });

        // Extra: A button to let you try it again easily
        resetBtn.addEventListener('click', function() {
            outputState.classList.add('hidden');
            input.value = "";
            input.disabled = false;
            generateBtn.disabled = false;
            generateText.textContent = "Generate";
            input.focus();
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
      
<div className="loader" id="loader">
<div className="flex gap-2 mb-6 items-center">
<iconify-icon className="text-indigo-500" height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<span className="font-semibold text-2xl tracking-tight text-white">DropAI</span>
</div>
<div className="w-48 h-px overflow-hidden bg-zinc-800">
<div className="loader-bar" id="loader-bar"></div>
</div>
</div>
<div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block"></div>
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
<div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors duration-300">
<iconify-icon className="text-zinc-300 group-hover:text-indigo-400 transition-colors" height="18" icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-base tracking-tight">DropAI</span>
</a>
<div className="glass rounded-full px-4 py-1.5 flex items-center gap-3">
<span className="text-xs font-medium text-zinc-400">Free Plan</span>
<div className="h-3 w-px bg-zinc-800"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-indigo-400" height="16" icon="solar:bolt-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-200">Ready</span>
</div>
</div>
</div>
</nav>
<main className="flex-1 relative z-10 flex flex-col items-center pt-40 pb-24 px-6 w-full max-w-4xl mx-auto">
<div className="text-center w-full mb-12" id="hero-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8 hero-anim opacity-0 translate-y-4">
<iconify-icon className="text-indigo-400" height="14" icon="solar:stars-linear" width="14"></iconify-icon>
                AI-Powered Copywriter
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white text-balance mb-6 leading-[1.1] hero-anim opacity-0 translate-y-4">
                Build your product page <br className="hidden md:block"/>
<span className="text-zinc-500">in seconds.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 font-normal max-w-xl mx-auto mb-10 text-balance hero-anim opacity-0 translate-y-4">
                Paste any product link or name, and DropAI will generate a high-converting page instantly. Focus on sales, not writing.
            </p>

<form className="w-full max-w-2xl mx-auto relative group hero-anim opacity-0 translate-y-4" id="ai-form">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative flex flex-col md:flex-row items-center gap-2 p-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-2xl focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all duration-300">
<div className="flex-1 flex items-center gap-3 px-4 w-full">
<iconify-icon className="text-zinc-500" height="20" icon="solar:link-linear" width="20"></iconify-icon>
<input autocomplete="off" className="w-full bg-transparent border-none text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-0 py-3" id="product-input" placeholder="e.g., Posture Corrector Pro..." required="" type="text"/>
</div>
<button className="w-full md:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer" id="generate-btn" type="submit">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" id="generate-icon" strokeWidth="1.5" width="18"></iconify-icon>
<span id="generate-text">Generate</span>
</button>
</div>
</form>
</div>

<div className="w-full max-w-3xl hidden flex-col items-center mt-8" id="loading-state">
<div className="flex items-center gap-3 text-sm font-medium text-zinc-400 mb-8">
<iconify-icon className="animate-spin text-indigo-500" height="20" icon="solar:spinner-linear" width="20"></iconify-icon>
                AI is thinking...
            </div>

<div className="w-full glass rounded-2xl p-8 space-y-6 border border-zinc-800/50">
<div className="h-8 w-3/4 rounded-lg animate-shimmer"></div>
<div className="h-4 w-1/2 rounded-md animate-shimmer mb-8"></div>
<div className="space-y-3">
<div className="h-3 w-full rounded-md animate-shimmer"></div>
<div className="h-3 w-5/6 rounded-md animate-shimmer"></div>
</div>
</div>
</div>

<div className="w-full max-w-3xl hidden mt-4" id="output-state">
<div className="glass rounded-2xl p-6 md:p-10 border border-zinc-800 relative group">
<div className="mb-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">AI Response</h3>

<p className="text-lg md:text-xl text-indigo-400 font-medium leading-relaxed" id="ai-output-text"></p>
</div>
<div className="pt-8 border-t border-zinc-800 text-center mt-8">
<div className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors" id="reset-btn">
                        Try Another
                    </div>
</div>
</div>
</div>
</main>


    </>
  );
}
