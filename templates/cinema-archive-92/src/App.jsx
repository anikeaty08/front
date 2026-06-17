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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Initialize Icons
        lucide.createIcons();

        // Data
        const movies = [
            { id: 1, title: "High and Low", jp: "天国と地獄", year: "1963", color: "bg-blue-900", spineColor: "bg-blue-900", textColor: "text-blue-100", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop" },
            { id: 2, title: "Red Beard", jp: "赤ひげ", year: "1965", color: "bg-red-950", spineColor: "bg-red-900", textColor: "text-red-100", img: "https://images.unsplash.com/photo-1596727147705-54a9d0993b78?q=80&w=600&auto=format&fit=crop" },
            { id: 3, title: "Stray Dog", jp: "野良犬", year: "1949", color: "bg-amber-900", spineColor: "bg-amber-950", textColor: "text-amber-100", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop" },
            { id: 4, title: "Seven Samurai", jp: "七人の侍", year: "1954", color: "bg-zinc-800", spineColor: "bg-zinc-900", textColor: "text-white", img: "https://images.unsplash.com/photo-1509281373149-e957c629640d?q=80&w=600&auto=format&fit=crop" },
            { id: 5, title: "Throne of Blood", jp: "蜘蛛巣城", year: "1957", color: "bg-red-700", spineColor: "bg-red-800", textColor: "text-white", img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=600&auto=format&fit=crop" },
            { id: 6, title: "Yojimbo", jp: "用心棒", year: "1961", color: "bg-emerald-900", spineColor: "bg-emerald-950", textColor: "text-emerald-100", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop" },
            { id: 7, title: "Ran", jp: "乱", year: "1985", color: "bg-indigo-900", spineColor: "bg-indigo-950", textColor: "text-indigo-100", img: "https://images.unsplash.com/photo-1533613220913-1807f5812083?q=80&w=600&auto=format&fit=crop" },
            { id: 8, title: "Dreams", jp: "夢", year: "1990", color: "bg-purple-900", spineColor: "bg-purple-950", textColor: "text-purple-100", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop" },
            { id: 9, title: "Ikiru", jp: "生きる", year: "1952", color: "bg-stone-800", spineColor: "bg-stone-900", textColor: "text-stone-100", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=600&auto=format&fit=crop" }
        ];

        let activeIndex = 4; // Start with middle item active

        const container = document.getElementById('gallery-container');
        const titleEl = document.getElementById('movie-title');
        const jpEl = document.getElementById('movie-jp');
        const yearEl = document.getElementById('movie-year');

        function render() {
            container.innerHTML = '';
            
            movies.forEach((movie, index) => {
                const isActive = index === activeIndex;
                
                // Container for the item
                const item = document.createElement('div');
                // Basic styling
                item.className = `
                    relative cursor-pointer transition-all duration-500 ease-out group vhs-scene
                    ${isActive ? 'w-[320px] z-10 mx-8 scale-105' : 'w-12 hover:w-14 opacity-60 hover:opacity-100 z-0 grayscale hover:grayscale-0'}
                `;
                item.style.height = isActive ? '480px' : '440px';
                
                // Click handler
                item.onclick = () => {
                    if (activeIndex !== index) {
                        activeIndex = index;
                        render();
                        updateInfo();
                    }
                };

                // Inner Card (The Tape/Box)
                const card = document.createElement('div');
                card.className = `vhs-case w-full h-full relative shadow-2xl ${isActive ? 'active' : ''}`;

                if (isActive) {
                    // --- ACTIVE STATE (Full Box Art) ---
                    card.innerHTML = `
                        <!-- Front Face -->
                        <div class="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden rounded-sm border-r border-white/10">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover opacity-90" alt="${movie.title}">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 mix-blend-multiply"></div>
                            
                            <!-- Texture Overlay -->
                            <div class="absolute inset-0 distress"></div>

                            <!-- Box Content -->
                            <div class="absolute top-6 left-0 w-full text-center z-10">
                                <span class="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-sm font-medium tracking-widest">MASTERPIECE COLLECTION</span>
                            </div>
                            
                            <div class="absolute bottom-12 left-6 right-6 z-10">
                                <h3 class="text-3xl font-serif text-white leading-none mb-2 drop-shadow-lg">${movie.title.toUpperCase()}</h3>
                                <p class="text-xs text-zinc-300 font-mono tracking-widest">${movie.jp} // DIR. YAMAMOTO</p>
                            </div>

                            <!-- VHS Sticker Details -->
                            <div class="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-32 border border-white/20 rounded flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                <div class="vertical-text text-[9px] tracking-widest text-zinc-400 font-mono">VHS-HQ-Stereo</div>
                            </div>
                        </div>

                        <!-- 3D Spine Side (simulated) -->
                        <div class="absolute top-0 bottom-0 -left-[16px] w-8 bg-zinc-950 border-r border-zinc-800 transform origin-right -rotate-y-90 flex flex-col items-center py-4 overflow-hidden" style="transform: rotateY(-90deg) translateX(-16px);">
                             <div class="flex-1 vertical-text text-xs tracking-[0.2em] text-zinc-500 font-medium uppercase">${movie.title}</div>
                             <div class="mt-4 w-4 h-4 rounded-full bg-red-600/50"></div>
                        </div>
                    `;
                } else {
                    // --- INACTIVE STATE (Spine View) ---
                    // We simulate the spine look.
                    card.innerHTML = `
                        <div class="w-full h-full ${movie.spineColor} relative overflow-hidden border-l border-r border-white/5 shadow-lg flex flex-col items-center py-6 justify-between transition-colors">
                            
                            <!-- Top Logos/Icons -->
                            <div class="flex flex-col items-center gap-2">
                                <div class="w-6 h-6 border border-white/20 flex items-center justify-center">
                                    <span class="text-[8px] font-bold text-white/50">VHS</span>
                                </div>
                                <div class="w-full h-[1px] bg-white/10"></div>
                            </div>

                            <!-- Vertical Title -->
                            <div class="flex-1 flex items-center justify-center py-4">
                                <h4 class="vertical-text text-sm sm:text-base font-medium tracking-widest uppercase ${movie.textColor} whitespace-nowrap drop-shadow-md">
                                    ${movie.title}
                                </h4>
                            </div>

                            <!-- Texture -->
                            <div class="absolute inset-0 distress opacity-30"></div>
                            
                            <!-- Scuff Marks (CSS) -->
                            <div class="absolute top-20 left-0 w-full h-12 bg-black/20 blur-sm rotate-3 transform"></div>
                            <div class="absolute bottom-32 left-0 w-full h-8 bg-white/5 blur-sm -rotate-6 transform"></div>

                            <!-- Bottom Number/Code -->
                            <div class="flex flex-col items-center gap-2">
                                <span class="vertical-text text-[9px] text-white/40 font-mono">NTSC-J</span>
                                <div class="w-5 h-8 bg-white/10 rounded-sm flex items-center justify-center">
                                    <span class="text-[8px] font-bold text-white/80">${movie.year.substring(2)}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }

                item.appendChild(card);
                container.appendChild(item);
            });
        }

        function updateInfo() {
            const movie = movies[activeIndex];
            
            // Animate Text Changes
            const panel = document.getElementById('info-panel');
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                titleEl.textContent = movie.title;
                jpEl.textContent = movie.jp;
                yearEl.textContent = movie.year;
                
                panel.style.opacity = '1';
                panel.style.transform = 'translateY(0)';
            }, 200);
        }

        // Arrow Navigation
        document.getElementById('prev-btn').addEventListener('click', () => {
            if (activeIndex > 0) {
                activeIndex--;
                render();
                updateInfo();
            }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            if (activeIndex < movies.length - 1) {
                activeIndex++;
                render();
                updateInfo();
            }
        });

        // Initial Render
        render();
        updateInfo();

    
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
      

<header className="w-full px-8 py-6 flex justify-between items-center z-20 relative border-b border-zinc-900/50">
<button className="group flex items-center gap-3 text-xs tracking-widest hover:text-white transition-colors">
<div className="border border-zinc-700 px-2 py-1 rounded group-hover:border-zinc-500 transition-colors">BACK</div>
<span className="opacity-60 text-[10px]">ARCHIVE VIEW</span>
</button>
<div className="flex flex-col items-center text-center">
<h1 className="text-sm tracking-[0.2em] text-zinc-100 font-medium">
<span className="text-red-600 font-serif italic pr-1">The</span>
                YAMAMOTO
                <span className="text-zinc-500 text-[10px] block mt-1 tracking-widest">COLLECTION</span>
</h1>
</div>
<div className="text-xs tracking-widest opacity-60">
            CAREER 1950 — 1998
        </div>
</header>

<nav className="w-full flex justify-center py-8 z-20 relative">
<div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-lg backdrop-blur-sm border border-zinc-800/50">
<button className="px-4 py-1.5 text-xs bg-zinc-100 text-zinc-950 font-medium rounded shadow-sm transition-all">ALL</button>
<button className="px-4 py-1.5 text-xs hover:bg-zinc-800 hover:text-white transition-all rounded text-zinc-500">1950s</button>
<button className="px-4 py-1.5 text-xs hover:bg-zinc-800 hover:text-white transition-all rounded text-zinc-500">1960s</button>
<button className="px-4 py-1.5 text-xs hover:bg-zinc-800 hover:text-white transition-all rounded text-zinc-500">1970s</button>
<button className="px-4 py-1.5 text-xs hover:bg-zinc-800 hover:text-white transition-all rounded text-zinc-500">1980s</button>
</div>
</nav>

<main className="flex-1 relative flex flex-col justify-center items-center w-full perspective-container">

<div className="relative w-full h-[500px] flex items-center justify-center gap-4 px-12 overflow-x-auto no-scrollbar mask-edges" id="gallery-container">

</div>

<div className="absolute bottom-0 left-0 w-full pb-8 pt-12 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent z-30 flex flex-col items-center justify-end pointer-events-none">

<div className="w-full absolute top-1/2 -translate-y-1/2 flex justify-between px-12 pointer-events-auto">
<button className="p-3 rounded-full hover:bg-zinc-900/80 transition text-zinc-500 hover:text-white" id="prev-btn">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full hover:bg-zinc-900/80 transition text-zinc-500 hover:text-white" id="next-btn">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="text-center space-y-3 pointer-events-auto transition-all duration-500" id="info-panel">
<h2 className="text-4xl font-serif tracking-tight text-zinc-100" id="movie-title">Shadows of the Ronin</h2>
<div className="flex items-center justify-center gap-3 text-xs tracking-widest text-red-500/90">
<span id="movie-jp">浪人の影</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-zinc-400" id="movie-year">1958</span>
</div>
</div>

<div className="w-full flex justify-between px-8 mt-12 text-[10px] tracking-widest text-zinc-600 uppercase">
<p>© Archive Rights Reserved.</p>
<div className="flex gap-4">
<span className="hover:text-zinc-400 cursor-pointer transition">FB</span>
<span className="hover:text-zinc-400 cursor-pointer transition">TW</span>
<span className="hover:text-zinc-400 cursor-pointer transition">IG</span>
</div>
</div>
</div>
</main>


    </>
  );
}
