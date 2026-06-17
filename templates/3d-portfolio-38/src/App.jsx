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



        const projects = [
            {
                title: "Chronos",
                category: "Interface Design",
                image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Apex",
                category: "Identity System",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Vessel",
                category: "Architecture",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Echo",
                category: "Audio Visualizer",
                image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Prism",
                category: "Design System",
                image: "https://images.unsplash.com/photo-1506784926709-22f1ec7520d2?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Nebula",
                category: "AI Research",
                image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Flux",
                category: "Finance App",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
            },
            {
                title: "Horizon",
                category: "Travel",
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
            }
        ];

        const scene = document.getElementById('scene-world');
        const scrollContainer = document.getElementById('scroll-container');
        
        // Configuration
        const Z_GAP = 500; // Distance between cards
        const INITIAL_Z = -1000; // Start point
        const CARD_WIDTH = 450; 
        const CARD_HEIGHT = 600;

        // Generate Cards
        projects.forEach((project, i) => {
            const el = document.createElement('div');
            el.className = `absolute rounded-xl card-glass overflow-hidden will-change-transform`;
            el.style.width = `${CARD_WIDTH}px`;
            el.style.height = `${CARD_HEIGHT}px`;
            
            // Random slight offsets for organic "stack" feel
            // We store these as data attributes to apply in the loop
            // We want them centered mostly, so small variance
            const rX = (Math.random() - 0.5) * 40; 
            const rY = (Math.random() - 0.5) * 40;
            const rRot = (Math.random() - 0.5) * 5; // Slight tilt

            el.dataset.x = rX;
            el.dataset.y = rY;
            el.dataset.rot = rRot;
            el.dataset.baseZ = -(i * Z_GAP); // e.g. 0, -500, -1000...

            el.innerHTML = `
                <div class="relative w-full h-full group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="">
                    
                    <!-- Overlay gradient -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                    
                    <!-- Text Content -->
                    <div class="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="px-2 py-0.5 rounded border border-white/30 text-[10px] font-semibold tracking-wider text-white/90 uppercase bg-black/10 backdrop-blur-sm">
                                ${project.category}
                            </span>
                        </div>
                        <h3 class="text-3xl font-medium text-white tracking-tight">${project.title}</h3>
                    </div>
                </div>
                <!-- Specular Highlight Border -->
                <div class="absolute inset-0 rounded-xl border border-white/20 pointer-events-none z-20"></div>
            `;

            scene.appendChild(el);
        });

        // Initialize Icons
        lucide.createIcons();

        // Animation Loop
        let currentScroll = 0;
        let targetScroll = 0;

        scrollContainer.addEventListener('scroll', (e) => {
            const maxScroll = scrollContainer.scrollHeight - window.innerHeight;
            const scrollProgress = scrollContainer.scrollTop / maxScroll;
            
            // Total distance to travel = (number of items * gap) + extra buffer
            const totalDistance = (projects.length * Z_GAP) + 1500; 
            targetScroll = scrollProgress * totalDistance;
        });

        function animate() {
            // Smooth lerp
            currentScroll += (targetScroll - currentScroll) * 0.08;

            const cards = Array.from(scene.children);
            
            // Rotate the entire scene slightly based on scroll velocity or just static tilt
            // A static tilt gives it that nice "isometric" feel without logic complexity
            // We use standard CSS for the container tilt
            scene.style.transform = `rotateX(5deg) rotateY(-5deg) rotateZ(2deg)`; 

            cards.forEach((card) => {
                const baseZ = parseFloat(card.dataset.baseZ);
                const x = parseFloat(card.dataset.x);
                const y = parseFloat(card.dataset.y);
                const rot = parseFloat(card.dataset.rot);

                // Calculate current Z position
                // As we scroll (currentScroll increases), items move towards camera (positive Z)
                const z = baseZ + currentScroll;

                // Opacity Logic:
                // 1. Fade in when far away (> -2000)
                // 2. Stay visible near camera
                // 3. Fade out quickly as it passes camera (> 200)
                let opacity = 0;
                
                if (z > 600) {
                    opacity = 0; // Passed behind camera
                } else if (z > 0) {
                    // Close to passing camera: Fade out
                    opacity = 1 - (z / 600);
                } else if (z > -2500) {
                    // Approaching from distance: Full visible
                    // Optional: Fade in from deep distance
                    opacity = 1;
                    if (z < -1500) {
                         opacity = 1 - ((-z - 1500) / 1000);
                    }
                } else {
                    opacity = 0; // Too far away
                }

                card.style.opacity = Math.max(0, opacity);
                
                // Visibility optimization
                card.style.display = opacity <= 0.01 ? 'none' : 'block';

                if (opacity > 0.01) {
                    // Apply Transform
                    // We keep X/Y fixed (with small random offset) and move primarily in Z
                    card.style.transform = `
                        translate3d(${x}px, ${y}px, ${z}px) 
                        rotate(${rot}deg)
                    `;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

    
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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
<div className="flex items-center gap-6 pointer-events-auto">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-900 rounded-full"></div>
<span className="text-sm font-semibold tracking-tight">KROFT®</span>
</div>
<div className="h-4 w-[1px] bg-neutral-300 mx-2"></div>
<div className="flex gap-1 bg-white/50 backdrop-blur-md p-1 rounded-full border border-neutral-200/50 shadow-sm">
<button className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-neutral-100 text-xs font-medium text-neutral-900 tracking-wide">Work</button>
<button className="px-4 py-1.5 rounded-full hover:bg-neutral-100/50 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide">Studio</button>
<button className="px-4 py-1.5 rounded-full hover:bg-neutral-100/50 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide">About</button>
</div>
</div>
<div className="flex gap-4 pointer-events-auto">
<button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</nav>

<div className="fixed bottom-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-end pointer-events-none text-xs font-medium tracking-wide text-neutral-400">
<div className="pointer-events-auto flex flex-col gap-1">
<span className="text-neutral-900">SCROLL TO EXPLORE</span>
<span>Based in San Francisco</span>
</div>
<div className="pointer-events-auto text-right">
<p>INDEX 2024</p>
</div>
</div>


<div className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden z-40" id="scroll-container">
<div className="h-[600vh]"></div>
</div>

<div className="fixed inset-0 w-full h-full flex items-center justify-center perspective-view overflow-hidden pointer-events-none z-0">

<div className="relative w-full h-full preserve-3d flex items-center justify-center transition-transform duration-100 ease-out will-change-transform" id="scene-world">

</div>
</div>


    </>
  );
}
