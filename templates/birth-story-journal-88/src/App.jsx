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
colors: {
primary: '#ffb996',
secondary: '#fff7eb',
surface: '#ffffff',
text: '#1a1a1a',
subtle: '#8a8a8a',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
animation: {
'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-out': 'slideOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-up': 'fadeUp 0.5s ease-out forwards',
},
keyframes: {
slideIn: {
'0%': { opacity: '0', transform: 'translateX(10px)' },
'100%': { opacity: '1', transform: 'translateX(0)' },
},
slideOut: {
'0%': { opacity: '1', transform: 'translateX(0)' },
'100%': { opacity: '0', transform: 'translateX(-10px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons();

        // Data for simulation
        const promptsData = [
            {
                title: "How did your support system make you feel during early labor?",
                desc: "Think about partners, family, or medical staff who were present.",
                placeholder: "My partner was incredibly calm...",
                progress: "4 / 9",
                width: "44%"
            },
            {
                title: "What do you remember most clearly about the moment labor began?",
                desc: "Capture the details of the time, the place, and your very first thought.",
                placeholder: "It was a Tuesday morning...",
                progress: "3 / 9",
                width: "33%"
            },
            {
                title: "Describe the first moment you saw your baby.",
                desc: "The emotions, the sounds, and the immediate connection.",
                placeholder: "Time seemed to stop...",
                progress: "5 / 9",
                width: "55%"
            }
        ];

        let currentIndex = 1; // Start at index 1

        function toggleDrawer() {
            const drawer = document.getElementById('drawer');
            const overlay = document.getElementById('drawer-overlay');
            const isClosed = drawer.classList.contains('translate-x-full');

            if (isClosed) {
                drawer.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                drawer.classList.add('translate-x-full');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function updateContent(index, direction) {
            const container = document.getElementById('prompt-content');
            const title = document.getElementById('prompt-title');
            const desc = document.getElementById('prompt-desc');
            const input = document.getElementById('prompt-input');
            const progressText = document.getElementById('progress-text');
            const progressBar = document.getElementById('progress-bar');
            
            // 1. Fade out / Slide out
            container.style.opacity = '0';
            container.style.transform = direction === 'next' ? 'translateX(-10px)' : 'translateX(10px)';
            container.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

            setTimeout(() => {
                // 2. Change Content
                const data = promptsData[index];
                title.textContent = data.title;
                desc.textContent = data.desc;
                input.placeholder = data.placeholder;
                input.value = ""; // Clear input
                progressText.textContent = data.progress;
                progressBar.style.width = data.width;

                // 3. Reset position for entry
                container.style.transition = 'none';
                container.style.transform = direction === 'next' ? 'translateX(10px)' : 'translateX(-10px)';
                
                // Force reflow
                void container.offsetWidth;

                // 4. Fade in / Slide in
                container.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                container.style.opacity = '1';
                container.style.transform = 'translateX(0)';
                
            }, 300);
        }

        function nextPrompt() {
            // Sparkle effect
            const sparkle = document.getElementById('sparkle');
            sparkle.classList.remove('scale-x-0');
            
            setTimeout(() => {
                sparkle.classList.add('scale-x-0');
                if (currentIndex < promptsData.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop for demo
                }
                updateContent(currentIndex, 'next');
            }, 200);
        }

        function prevPrompt() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = promptsData.length - 1; // Loop for demo
            }
            updateContent(currentIndex, 'prev');
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
      

<header className="w-full bg-secondary pt-4 pb-2 px-4 flex flex-col shrink-0 z-20">
<div className="flex justify-between items-center mb-4">
<button className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors group" onclick="prevPrompt()">
<i className="w-6 h-6 text-text group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
</button>
<h1 className="text-lg font-medium tracking-tight text-text">Birth Story</h1>
<button className="p-2 -mr-2 hover:bg-black/5 rounded-full transition-colors relative" onclick="toggleDrawer()">
<i className="w-6 h-6 text-text" data-lucide="align-right"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-secondary"></span>
</button>
</div>

<div className="w-full flex items-center gap-3">
<div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[33%] rounded-full transition-all duration-500 ease-out" id="progress-bar"></div>
</div>
<span className="text-xs text-subtle font-medium tabular-nums" id="progress-text">3 / 9</span>
</div>
</header>

<nav className="px-4 py-2 w-full z-10 shrink-0">
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="px-4 py-1.5 bg-text text-white rounded-full text-xs font-medium whitespace-nowrap shadow-sm ring-1 ring-transparent transition-all">
                All
            </button>
<button className="px-4 py-1.5 bg-white text-subtle border border-black/5 hover:border-black/10 hover:text-text rounded-full text-xs font-medium whitespace-nowrap shadow-sm transition-all">
                Quick Wins
            </button>
<button className="px-4 py-1.5 bg-white text-subtle border border-black/5 hover:border-black/10 hover:text-text rounded-full text-xs font-medium whitespace-nowrap shadow-sm transition-all">
                Deep Reflections
            </button>
</div>
</nav>

<main className="flex-1 overflow-y-auto px-4 pb-48 pt-2 relative no-scrollbar w-full">

<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] p-6 sm:p-8 max-w-lg mx-auto relative overflow-hidden group transition-all duration-500 mb-4">

<div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 transition-transform duration-700 origin-left" id="sparkle"></div>

<div className="content-enter" id="prompt-content">
<div className="mb-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-amber-900/60 text-[10px] font-semibold tracking-wider uppercase mb-4">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                        Reflection
                    </span>
<h2 className="text-2xl sm:text-3xl font-serif text-text leading-tight tracking-tight mb-2" id="prompt-title">
                        What do you remember most clearly about the moment labor began?
                    </h2>
<p className="text-subtle text-sm leading-relaxed" id="prompt-desc">
                        Capture the details of the time, the place, and your very first thought.
                    </p>
</div>
<div className="relative group/input">
<textarea className="w-full min-h-[160px] bg-secondary/50 hover:bg-secondary focus:bg-white border-0 rounded-xl p-4 text-base text-text placeholder-subtle/50 resize-none focus:ring-2 focus:ring-primary/50 transition-all outline-none leading-relaxed" id="prompt-input" placeholder="It was a Tuesday morning..."></textarea>
<div className="absolute bottom-3 right-3 text-[10px] text-subtle/40 pointer-events-none font-medium">
                        Markdown supported
                    </div>
</div>

<div className="mt-8 flex flex-col gap-3">
<button className="w-full py-3.5 bg-primary hover:bg-[#ffad85] active:scale-[0.98] text-text font-medium rounded-xl shadow-sm shadow-primary/20 flex items-center justify-center gap-2 transition-all group/btn" onclick="nextPrompt()">
<span>Save &amp; Next</span>
<i className="w-4 h-4 opacity-60 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<div className="grid grid-cols-2 gap-3">
<button className="w-full py-3 bg-white border border-black/5 hover:bg-gray-50 text-subtle hover:text-text font-medium text-sm rounded-xl transition-colors">
                            Skip
                        </button>
<button className="w-full py-3 bg-transparent hover:bg-black/5 text-subtle/70 hover:text-red-400 font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="eye-off"></i>
                            Not Interested
                        </button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] p-6 sm:p-8 max-w-lg mx-auto relative overflow-hidden mb-8">
<div className="flex flex-col gap-1 mb-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-serif text-text tracking-tight">Birth Story Photos</h3>
</div>
<p className="text-sm text-subtle">Recommended: 5–12 photos</p>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">

<div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-sm">
<img alt="Memory" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>

<div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-sm">
<img alt="Memory" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-sm">
<img alt="Memory" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<button className="aspect-square rounded-xl border-2 border-dashed border-black/10 hover:border-primary/50 bg-secondary/30 hover:bg-secondary/60 flex flex-col items-center justify-center gap-2 text-subtle hover:text-primary transition-all">
<i className="w-6 h-6 opacity-60" data-lucide="plus"></i>
</button>
</div>
<div className="flex items-center justify-between pt-2 border-t border-black/5">
<span className="text-xs font-semibold text-subtle">3 of 12 added</span>
<button className="text-xs font-medium text-text hover:text-primary transition-colors flex items-center gap-1">
                    Manage
                    <i className="w-3 h-3" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="h-8 w-full"></div>
</main>

<div className="fixed bottom-[5.5rem] right-4 z-30 pointer-events-none flex justify-end w-full px-4 max-w-screen-xl mx-auto">
<button className="pointer-events-auto shadow-[0_8px_24px_rgb(0,0,0,0.12)] bg-text text-white pl-4 pr-5 py-3 rounded-full flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-transform group ring-1 ring-white/20">
<i className="w-4 h-4" data-lucide="camera"></i>
<div className="flex flex-col items-start leading-none">
<span className="text-xs font-semibold tracking-wide">Add Photos</span>
<span className="text-[10px] text-white/60 font-medium mt-0.5">5–12 recommended</span>
</div>
</button>
</div>

<nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-black/5 pb-safe pt-2 px-2 z-20 shadow-[0_-4px_20px_rgb(0,0,0,0.02)]">
<div className="flex justify-around items-center max-w-lg mx-auto">
<button className="flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-subtle hover:text-text hover:bg-black/5 transition-all group">
<i className="w-5 h-5 mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="home"></i>
<span className="text-[10px] font-medium tracking-tight">Home</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-text bg-secondary/50 transition-all group relative">
<div className="absolute inset-x-4 -top-2 h-0.5 bg-primary rounded-full"></div>
<i className="w-5 h-5 mb-0.5 stroke-[2]" data-lucide="book-open"></i>
<span className="text-[10px] font-semibold tracking-tight">Journal</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-subtle hover:text-text hover:bg-black/5 transition-all group">
<i className="w-5 h-5 mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="image"></i>
<span className="text-[10px] font-medium tracking-tight">Memories</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 p-2 rounded-xl text-subtle hover:text-text hover:bg-black/5 transition-all group">
<i className="w-5 h-5 mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="user"></i>
<span className="text-[10px] font-medium tracking-tight">Profile</span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-overlay" onclick="toggleDrawer()"></div>
<aside className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-surface shadow-2xl z-50 transform translate-x-full slide-panel flex flex-col" id="drawer">
<div className="p-5 flex items-center justify-between border-b border-black/5 bg-secondary/30">
<h3 className="font-medium text-text tracking-tight">Chapter Overview</h3>
<button className="p-2 hover:bg-black/5 rounded-full transition-colors text-subtle hover:text-text" onclick="toggleDrawer()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="px-2 pt-2 pb-4">
<div className="bg-gradient-to-br from-secondary/80 to-secondary/30 rounded-xl p-3.5 flex items-center justify-between border border-primary/10 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-secondary">
<i className="w-4 h-4" data-lucide="image"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-text">3 photos added</span>
<span className="text-[10px] text-subtle">Chapter: Early Labor</span>
</div>
</div>
<div className="h-1.5 w-12 bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-primary w-1/4"></div>
</div>
</div>
</div>
<div className="px-4 py-2">
<div className="flex items-center justify-between text-xs font-medium text-subtle uppercase tracking-wider mb-2">
<span>Completed</span>
<span className="text-primary">3</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-transparent">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 border border-green-200">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-sm text-subtle line-through decoration-primary/30">Early labor signs</span>
</div>
</div>
</div>
</aside>


    </>
  );
}
