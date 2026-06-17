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



          !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
        


      // Initialize Lucide icons
      lucide.createIcons();

      // Cursor follow and glow effect
      const cursorGlow = document.getElementById('cursorGlow');
      const cursorDot = document.getElementById('cursorDot');
      const revealArea = document.getElementById('revealArea');
      const gridPattern = document.getElementById('gridPattern');
      const dotsPattern = document.getElementById('dotsPattern');
      const contentMask = document.getElementById('contentMask');

      // --- HERO FLOATING ICONS LOGIC ---
      const heroSection = document.getElementById('hero-section');
      const floatingContainer = document.getElementById('floating-icons-container');
      let isHeroThrottled = false;

      // Pre-define icons available in lucide-react/lucide for randomness
      const floatingIconNames = ['hexagon', 'triangle', 'circle', 'star', 'zap', 'gem', 'cross', 'box', 'flower-2', 'snowflake', 'sun'];

      heroSection.addEventListener('mousemove', (e) => {
        if (isHeroThrottled) return;

        // Check if cursor is actually inside hero bounds (just in case event bubbles)
        const rect = heroSection.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;

        isHeroThrottled = true;
        setTimeout(() => isHeroThrottled = false, 150); // Emit every 150ms

        createFloatingIcon(e.clientX - rect.left, e.clientY - rect.top);
      });

      function createFloatingIcon(x, y) {
        if (!lucide || !lucide.icons) return;

        const el = document.createElement('div');
        const size = Math.floor(Math.random() * 40) + 60; // 60px to 100px
        const rotation = Math.floor(Math.random() * 360);
        const iconName = floatingIconNames[Math.floor(Math.random() * floatingIconNames.length)];

        // Style element
        el.className = 'absolute flex items-center justify-center text-white/20 pointer-events-none z-0';
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.setProperty('--rotation', rotation + 'deg');

        // Use Lucide to get SVG string
        const svgString = lucide.icons[iconName]
            ? lucide.icons[iconName].toSvg({
                class: 'w-full h-full drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]',
                'stroke-width': 1.5
              })
            : '';

        el.innerHTML = svgString;

        // Animation CSS inline to handle clean-up
        el.style.animation = 'floatUp 2s ease-out forwards';

        floatingContainer.appendChild(el);

        // Remove after animation
        setTimeout(() => {
            if(el.parentNode) el.parentNode.removeChild(el);
        }, 2000);
      }

      // --- EXISTING PATTERN GENERATION ---
      function generateGrid() {
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const gridSpacing = 60;
          gridPattern.innerHTML = '';
          for (let x = 0; x <= windowWidth; x += gridSpacing) {
              const line = document.createElement('div');
              line.className = 'grid-line vertical';
              line.style.left = x + 'px';
              line.style.top = '0px';
              gridPattern.appendChild(line);
          }
          for (let y = 0; y <= windowHeight; y += gridSpacing) {
              const line = document.createElement('div');
              line.className = 'grid-line horizontal';
              line.style.top = y + 'px';
              line.style.left = '0px';
              gridPattern.appendChild(line);
          }
      }

      function generateDots() {
          const numberOfDots = 400;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          dotsPattern.innerHTML = '';
          for (let i = 0; i < numberOfDots; i++) {
              const dot = document.createElement('div');
              dot.className = 'dot';
              dot.style.left = Math.random() * windowWidth + 'px';
              dot.style.top = Math.random() * windowHeight + 'px';
              dotsPattern.appendChild(dot);
          }
      }

      function revealElements(x, y) {
          const revealRadius = 350;
          const gridLines = gridPattern.querySelectorAll('.grid-line');
          gridLines.forEach(line => {
              const lineRect = line.getBoundingClientRect();
              let distance;
              if (line.classList.contains('vertical')) {
                  distance = Math.abs(x - (lineRect.left + lineRect.width / 2));
              } else {
                  distance = Math.abs(y - (lineRect.top + lineRect.height / 2));
              }
              if (distance < revealRadius) {
                  line.style.opacity = Math.max(0, 0.4 - (distance / revealRadius));
              } else {
                  line.style.opacity = '0';
              }
          });
          const dots = dotsPattern.querySelectorAll('.dot');
          dots.forEach(dot => {
              const dotRect = dot.getBoundingClientRect();
              const dotX = dotRect.left + dotRect.width / 2;
              const dotY = dotRect.top + dotRect.height / 2;
              const distance = Math.sqrt(Math.pow(x - dotX, 2) + Math.pow(y - dotY, 2));
              if (distance < revealRadius) {
                  dot.style.opacity = Math.max(0, 0.6 - (distance / revealRadius));
              } else {
                  dot.style.opacity = '0';
              }
          });
      }

      function createMaskEffect(x, y) {
          const maskRadius = 350;
          const maskStyle = `radial-gradient(circle ${maskRadius}px at ${x}px ${y}px, transparent 0%, transparent 20%, rgba(5, 5, 5, 0.85) 70%)`;
          contentMask.style.background = maskStyle;
      }

      document.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;
          cursorGlow.style.left = x + 'px';
          cursorGlow.style.top = y + 'px';
          cursorDot.style.left = x + 'px';
          cursorDot.style.top = y + 'px';
          revealArea.style.left = x + 'px';
          revealArea.style.top = y + 'px';
          revealElements(x, y);
          createMaskEffect(x, y);
      });

      document.addEventListener('mouseover', (e) => {
          if (e.target.matches('button, a, [role="button"], .group')) {
              cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
              cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
              cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%)';
          }
      });

      document.addEventListener('mouseout', (e) => {
          if (e.target.matches('button, a, [role="button"], .group')) {
              cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
              cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
              cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 20%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)';
          }
      });

      document.addEventListener('mouseleave', () => {
          cursorGlow.style.opacity = '0';
          cursorDot.style.opacity = '0';
          contentMask.style.background = 'rgba(5, 5, 5, 0.85)';
          const allElements = [...gridPattern.querySelectorAll('.grid-line'), ...dotsPattern.querySelectorAll('.dot')];
          allElements.forEach(el => el.style.opacity = '0');
      });

      document.addEventListener('mouseenter', () => {
          cursorGlow.style.opacity = '1';
          cursorDot.style.opacity = '1';
      });

      window.addEventListener('load', () => {
          generateGrid();
          generateDots();
      });

      window.addEventListener('resize', () => {
          generateGrid();
          generateDots();
      });
    


      document.addEventListener("DOMContentLoaded", () => {
              // --- HERO VIDEO LOGIC ---
              const heroContainer = document.getElementById("hero-video-container");
              const heroVideo = document.getElementById("hero-showreel");

              if (heroVideo) {
                heroVideo.muted = true;
                heroVideo.loop = true;
                heroVideo.playsInline = true;

                // Intersection Observer for Auto-play when in view
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      heroVideo.play().catch(() => {});
                    } else {
                      heroVideo.pause();
                    }
                  });
                }, { threshold: 0.1 });
                observer.observe(heroVideo);
              }

              if (heroContainer) {
                let ticking = false;
                const updateTransform = () => {
                  const scrolled = window.scrollY;
                  const progress = Math.min(scrolled / 800, 1);
                  const ease = 1 - Math.pow(1 - progress, 3);
                  const scale = 0.9 + (ease * 0.2);
                  const rotateX = 20 - (ease * 15);
                  heroContainer.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
                  ticking = false;
                };
                window.addEventListener("scroll", () => {
                  if (!ticking) {
                    window.requestAnimationFrame(updateTransform);
                    ticking = true;
                  }
                }, { passive: true });
              }

              // --- FIXED 3D ORBIT ANIMATION ---
              const orbitScene = document.getElementById('orbit-scene');
              if (orbitScene) {
                const cards = Array.from(orbitScene.querySelectorAll('.orbit-card'));
                let angle = 0;
                let isHovered = false;
                const radiusX = 420;
                const radiusZ = 180;
                const speed = 0.001;
                const hoverSpeed = 0.0002;

                orbitScene.addEventListener('mouseenter', () => isHovered = true);
                orbitScene.addEventListener('mouseleave', () => isHovered = false);

                function animate() {
                  angle += isHovered ? hoverSpeed : speed;
                  cards.forEach((card, index) => {
                    const offset = (Math.PI * 2 / cards.length) * index;
                    const a = angle + offset;
                    const x = Math.cos(a) * radiusX;
                    const z = Math.sin(a) * radiusZ;
                    const y = Math.sin(a * 2) * 30;
                    const zNorm = (z + radiusZ) / (2 * radiusZ);
                    const scale = 0.6 + (0.4 * zNorm);
                    const opacity = 0.5 + (0.5 * zNorm);
                    const zIndex = Math.round(z);
                    card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                    card.style.opacity = opacity;
                    card.style.zIndex = zIndex;
                  });
                  requestAnimationFrame(animate);
                }
                animate();
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div data-us-project="B29kZcv0xd3yf3mg5n8d" style={{width: '1440px', height: '900px'}}></div>
</div>
</div>


<div className="cursor-glow" id="cursorGlow" style={{opacity: '0', left: '389px', top: '7px', transform: 'translate(-50%, -50%) scale(1)', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 20%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)'}}></div>
<div className="cursor-dot" id="cursorDot" style={{opacity: '0', left: '389px', top: '7px', transform: 'translate(-50%, -50%) scale(1)'}}></div>
<div className="reveal-area" id="revealArea" style={{left: '389px', top: '7px'}}></div>

<div className="grid-pattern" id="gridPattern"><div className="grid-line vertical" style={{left: '0px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '60px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '120px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '180px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '240px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '300px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '360px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '420px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '480px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '540px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '600px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '660px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '720px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '780px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '840px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '900px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '960px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1020px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1080px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1140px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1200px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1260px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1320px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1380px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1440px', top: '0px'}}></div><div className="grid-line vertical" style={{left: '1500px', top: '0px'}}></div><div className="grid-line horizontal" style={{top: '0px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '60px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '120px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '180px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '240px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '300px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '360px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '420px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '480px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '540px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '600px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '660px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '720px', left: '0px'}}></div><div className="grid-line horizontal" style={{top: '780px', left: '0px'}}></div></div>

<nav className="sticky top-0 left-0 z-50 w-full border-b border-gray-800/30 bg-black/80 backdrop-blur-md animate-[fadeDown_0.8s_ease-out_0.1s_both] opacity-0">

<div className="flex md:px-10 max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df4dfbf1-a4f1-4cdc-a9d1-0e7ce5d60dbd_1600w.png)] bg-cover rounded" href="#" style={{}}></a>

<div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-gray-400">
<a className="hover:text-white transition-colors duration-300" href="#">
        Work
      </a>
<a className="hover:text-white transition-colors duration-300" href="#">
        Expertise
      </a>
<a className="hover:text-white transition-colors duration-300" href="#">
        Studio
      </a>
<a className="hover:text-white transition-colors duration-300" href="#">
        Insights
      </a>
</div>

<a className="rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-white transition hover:bg-white/10" href="#">
      Start Project
    </a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden lg:px-12 lg:pt-44 z-10 pt-20 pr-6 pb-20 pl-6 relative justify-center" id="hero-section">

<div className="absolute inset-0 pointer-events-none z-0" id="floating-icons-container">
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '93px', height: '93px', left: '1310px', top: '1028px', '--rotation': '113deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '84px', height: '84px', left: '1305px', top: '1093px', '--rotation': '313deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '997px', top: '0px', '--rotation': '236deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '74px', height: '74px', left: '264px', top: '90px', '--rotation': '278deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '79px', height: '79px', left: '413px', top: '278px', '--rotation': '128deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '84px', height: '84px', left: '514px', top: '1065px', '--rotation': '287deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '99px', height: '99px', left: '762px', top: '1188px', '--rotation': '290deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '601px', top: '56px', '--rotation': '245deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '68px', height: '68px', left: '592px', top: '144px', '--rotation': '147deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '94px', height: '94px', left: '586px', top: '159px', '--rotation': '159deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '60px', height: '60px', left: '586px', top: '158px', '--rotation': '329deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div>
<div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '98px', height: '98px', left: '686px', top: '796px', '--rotation': '320deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '63px', height: '63px', left: '1158px', top: '1351px', '--rotation': '28deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '92px', height: '92px', left: '1162px', top: '1356px', '--rotation': '63deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '71px', height: '71px', left: '1177px', top: '694px', '--rotation': '329deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '82px', height: '82px', left: '1035px', top: '604px', '--rotation': '237deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '80px', height: '80px', left: '1438px', top: '1018px', '--rotation': '115deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '92px', height: '92px', left: '1471px', top: '1018px', '--rotation': '176deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '62px', height: '62px', left: '1218px', top: '1245px', '--rotation': '253deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div --rotation:="" 0s="" 1="" 1252px;="" 180deg;="" 2s="" ;="" animation:="" className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" ease-out="" floatup;"="" forwards="" normal="" running="" top:=""></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '94px', height: '94px', left: '633px', top: '846px', '--rotation': '172deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '66px', height: '66px', left: '498px', top: '601px', '--rotation': '294deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '492px', top: '577px', '--rotation': '240deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '86px', height: '86px', left: '1128px', top: '1008px', '--rotation': '142deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '93px', height: '93px', left: '1692px', top: '910px', '--rotation': '51deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '62px', height: '62px', left: '1700px', top: '913px', '--rotation': '213deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '81px', height: '81px', left: '1982px', top: '1215px', '--rotation': '289deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '68px', height: '68px', left: '1982px', top: '1215px', '--rotation': '269deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '74px', height: '74px', left: '222px', top: '252px', '--rotation': '62deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '74px', height: '74px', left: '404px', top: '786px', '--rotation': '235deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '65px', height: '65px', left: '1207px', top: '583px', '--rotation': '226deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '64px', height: '64px', left: '1273px', top: '631px', '--rotation': '196deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '88px', height: '88px', left: '1496px', top: '1259px', '--rotation': '258deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '77px', height: '77px', left: '1128px', top: '516px', '--rotation': '304deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '75px', height: '75px', left: '636px', top: '724px', '--rotation': '21deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '92px', height: '92px', left: '921px', top: '627px', '--rotation': '8deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '1208px', top: '653px', '--rotation': '2deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '65px', height: '65px', left: '1198px', top: '642px', '--rotation': '209deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '86px', height: '86px', left: '952px', top: '34px', '--rotation': '287deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '80px', height: '80px', left: '643px', top: '25px', '--rotation': '244deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '992px', top: '440px', '--rotation': '87deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '96px', height: '96px', left: '1245px', top: '935px', '--rotation': '66deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '1662px', top: '511px', '--rotation': '39deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '69px', height: '69px', left: '927px', top: '150px', '--rotation': '338deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '69px', height: '69px', left: '927px', top: '150px', '--rotation': '90deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '67px', height: '67px', left: '1779px', top: '517px', '--rotation': '18deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '81px', height: '81px', left: '2047px', top: '279px', '--rotation': '347deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '98px', height: '98px', left: '1145px', top: '303px', '--rotation': '177deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '82px', height: '82px', left: '0px', top: '282px', '--rotation': '116deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '98px', height: '98px', left: '1331px', top: '656px', '--rotation': '161deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '65px', height: '65px', left: '1366px', top: '703px', '--rotation': '261deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '90px', height: '90px', left: '1387px', top: '645px', '--rotation': '288deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '61px', height: '61px', left: '1212px', top: '1px', '--rotation': '315deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '91px', height: '91px', left: '1254px', top: '25px', '--rotation': '180deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '94px', height: '94px', left: '1310px', top: '113px', '--rotation': '91deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '60px', height: '60px', left: '1243px', top: '119px', '--rotation': '33deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '77px', height: '77px', left: '1459px', top: '1118px', '--rotation': '272deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '88px', height: '88px', left: '1459px', top: '1117px', '--rotation': '215deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '99px', height: '99px', left: '598px', top: '110px', '--rotation': '73deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '72px', height: '72px', left: '1374px', top: '91px', '--rotation': '196deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '69px', height: '69px', left: '1467px', top: '99px', '--rotation': '319deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '84px', height: '84px', left: '559px', top: '17px', '--rotation': '310deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '74px', height: '74px', left: '635px', top: '375px', '--rotation': '115deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div><div className="absolute flex items-center justify-center text-white/20 pointer-events-none z-0" style={{width: '73px', height: '73px', left: '634px', top: '363px', '--rotation': '129deg', animation: '2s ease-out 0s 1 normal forwards running floatUp'}}></div></div>
<div className="max-w-7xl mx-auto w-full relative z-10">

<div className="z-20 text-center mb-16 relative">
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-semibold tracking-tighter mb-10 text-[#0f0f0f]">
<div className="animate-[fadeUp_0.8s_ease-out_0.5s_both] opacity-0">
<span className="electric-text" data-text="DIGITAL" style={{'--delay': '0.6s'}}>DIGITAL</span>
</div>
<div className="animate-[fadeUp_0.8s_ease-out_0.7s_both] opacity-0">
<span className="electric-text" data-text="ALCHEMY" style={{'--delay': '0.8s'}}>ALCHEMY</span>
</div>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light animate-[fadeUp_0.8s_ease-out_0.9s_both] opacity-0">
            We are a global creative agency. We blend strategy, design, and
            technology to build brands that defy convention.
          </p>
<div className="flex flex-col sm:flex-row gap-6 animate-[fadeUp_0.8s_ease-out_1.1s_both] opacity-0 gap-x-6 gap-y-6 items-center justify-center">
<button className="group uppercase transition-all duration-300 hover:scale-105 text-sm font-medium text-black tracking-widest bg-white rounded-full pt-4 pr-10 pb-4 pl-10">View Work</button>
<span className=""><a className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#contact" style={{zIndex: '2'}}>
<span className="group-hover:translate-x-1 transition-transform duration-300 z-[1] relative">Get in touch</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right relative z-[1] w-4 h-4 text-sky-100 group-hover:translate-x-2 transition-transform duration-300" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(224, 242, 254)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{animation: 'pulse 2s ease-in-out infinite'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
</a></span>
</div>
</div>

<div className="animate-[fadeUp_1s_ease-out_1.3s_both] group opacity-0 w-full mt-8 mr-auto ml-auto relative perspective-[2000px]">

<div className="relative w-full transition-transform duration-75 ease-out origin-center transform-style-3d will-change-transform" id="hero-video-container" style={{transform: 'rotateX(5deg) scale(1.1)'}}>

<div className="relative rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/10 shadow-2xl ring-1 ring-white/5">

<div className="h-10 bg-neutral-900/90 backdrop-blur flex items-center justify-between px-4 border-b border-white/5 select-none">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/50 border border-white/5 text-[10px] text-gray-500 font-mono">
<svg className="lucide lucide-lock w-3 h-3 opacity-50" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
      lumina.design/tool
    </div>
<div className="flex gap-3">
<div className="w-4 h-4 rounded bg-white/10"></div>
<div className="w-4 h-4 rounded bg-white/10"></div>
</div>
</div>

<div className="flex h-[600px] relative">

<div className="w-14 border-r border-white/5 bg-neutral-900/50 flex flex-col items-center py-4 gap-4 hidden sm:flex">
<div className="w-8 h-8 rounded bg-white/10 mb-4"></div>
<div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/50"></div>
<div className="w-8 h-8 rounded bg-white/5"></div>
<div bg-gradient-to-br="" className="w-8 h-8 rounded bg-&lt;/div&gt; &lt;div class=" from-purple-500="" h-8="" mt-auto="" rounded-full="" to-indigo-500"="" w-8=""></div>
</div>

<div className="flex-1 relative bg-[#050505] overflow-hidden group/canvas">

<div className="flex bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="relative w-full h-full max-h-[520px] rounded-lg shadow-2xl overflow-hidden ring-1 ring-white/10 bg-black group/video">
<video className="w-full h-full object-cover" id="main-video" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ed1a1eb-ca88-4c25-99b4-e9fdc9377e6d_3840w.webp" preload="metadata" src=""></video>
<div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
<button aria-label="Play Video" className="pointer-events-auto w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/30 active:scale-95 shadow-2xl cursor-pointer" data-state="paused" onclick="
        event.preventDefault();
        event.stopPropagation();
        const v = document.getElementById('main-video');
        if (!v) return false;

        if (v.paused) {
          v.play();
          this.setAttribute('data-state','playing');
        } else {
          v.pause();
          this.setAttribute('data-state','paused');
        }
        return false;
      " type="button">

<svg className="icon-play w-8 h-8 ml-1" fill="currentColor" viewbox="0 0 24 24">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>

<svg className="icon-pause w-8 h-8 hidden" fill="currentColor" viewbox="0 0 24 24">
<rect height="16" rx="1" width="4" x="6" y="4"></rect>
<rect height="16" rx="1" width="4" x="14" y="4"></rect>
</svg>
</button>
</div>
<style>
    /* Toggle icons without injecting SVG via innerHTML */
    button[data-state="playing"] .icon-play { display: none; }
    button[data-state="playing"] .icon-pause { display: block; }
    button[data-state="paused"] .icon-play { display: block; }
    button[data-state="paused"] .icon-pause { display: none; }
  </style>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent opacity-50 blur-3xl pointer-events-none -z-10 transform scale-x-90"></div>
</div>
</div>
<div className="flex opacity-60 my-24 px-4 items-end justify-between">
<div className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
    Based in San Francisco
  </div>
<div className="text-xs text-gray-500 uppercase tracking-widest">
    Working Globally
  </div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 lg:px-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mr-auto ml-auto">

<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white max-w-4xl leading-[0.95]">
        Our Expertise
      </h2>
<div className="max-w-md flex flex-col gap-6 lg:pt-2">
<p className="text-lg text-neutral-400 font-light leading-relaxed">
          We don't just build websites; we build ecosystems. Our approach integrates rigorous strategy with immersive design.
        </p>
<a className="group inline-flex items-center text-white font-medium hover:text-neutral-300 transition-colors" href="#">
          View all services 
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">

<div className="absolute inset-0 flex items-center justify-center opacity-80 perspective-[1000px]">
<div className="relative w-32 h-32 transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-[-10px]">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl transform -translate-x-4 -translate-y-2 -rotate-[15deg] backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:-translate-x-8 group-hover:-rotate-[20deg]"></div>

<div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent border border-white/15 rounded-2xl transform translate-x-0 translate-y-0 -rotate-[5deg] backdrop-blur-[4px] transition-transform duration-500 delay-75 ease-out group-hover:rotate-0"></div>

<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent border border-white/20 rounded-2xl transform translate-x-4 translate-y-2 rotate-[5deg] backdrop-blur-[6px] shadow-2xl transition-transform duration-500 delay-150 ease-out group-hover:translate-x-8 group-hover:rotate-[15deg] flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-indigo-500/20 blur-xl"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-indigo-200 transition-colors">Strategy &amp; Branding</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">Positioning, identity systems, and voice definition.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">

<div className="absolute inset-0 overflow-hidden flex items-center justify-center">
<div className="relative w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500">

<div className="absolute top-1/4 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transform -rotate-12 translate-x-[-10%] group-hover:translate-x-[10%] transition-transform duration-[2s] ease-in-out"></div>
<div className="absolute top-1/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-12 translate-x-[-20%] group-hover:translate-x-[5%] transition-transform duration-[2.5s] ease-in-out delay-75"></div>
<div className="absolute top-1/2 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-12 translate-x-[-15%] group-hover:translate-x-[15%] transition-transform duration-[1.8s] ease-in-out delay-100"></div>
<div className="absolute top-2/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-12 translate-x-[-5%] group-hover:translate-x-[20%] transition-transform duration-[2.2s] ease-in-out delay-150"></div>

<div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="absolute top-[40%] right-[20%] text-[10px] font-mono text-emerald-500/60 opacity-0 group-hover:opacity-00">
                120fps
             </div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-emerald-200 transition-colors">Design</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">UI/UX design, motion graphics, and 3D visualization.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">

<div className="absolute inset-0 flex items-center justify-center perspective-[800px] overflow-hidden">
<div className="relative transform rotate-x-[60deg] rotate-z-[45deg] scale-75 group-hover:scale-90 transition-transform duration-700 ease-out">

<div className="w-48 h-48 border border-white/10 bg-white/5 grid grid-cols-4 grid-rows-4 rounded-lg shadow-2xl">
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5 bg-rose-500/10 transition-colors duration-300 group-hover:bg-rose-500/20"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div></div>
</div>

<div className="absolute -top-10 left-10 w-16 h-16 bg-[#1A1A1A] border border-white/20 rounded-xl shadow-2xl transform translate-z-20 group-hover:translate-z-40 transition-transform duration-500 ease-out flex items-center justify-center">
<svg className="text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>

<div className="absolute top-1/2 left-1/2 w-0.5 h-20 bg-gradient-to-b from-rose-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 group-hover:h-32 transition-all duration-700 ease-out origin-top"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-rose-200 transition-colors">Development</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">Scalable architecture, API integration, and performance.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-40 h-40 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-white/5 scale-100 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-4 rounded-full border border-white/5 scale-100 group-hover:scale-110 transition-transform duration-700 delay-75 ease-out"></div>
<div className="absolute inset-8 rounded-full border border-white/10 scale-100 group-hover:scale-105 transition-transform duration-700 delay-150 ease-out border-dashed opacity-50"></div>

<div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] opacity-30">
<div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2"></div>
<div className="absolute left-0 top-1/2 w-2 h-0.5 bg-white -translate-y-1/2"></div>
<div className="absolute right-0 top-1/2 w-2 h-0.5 bg-white -translate-y-1/2"></div>
</div>

<div className="w-16 h-16 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-blue-200 transition-colors">Production</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">Copywriting, photography, and video production.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div></div></section>


<section className="z-10 flex flex-col overflow-hidden bg-[#0a0a0a] w-full h-[900px] relative perspective-dramatic items-center justify-center">
<style>
        @keyframes orbit-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
        .orbit-ring {
            animation: orbit-rotate 60s linear infinite;
        }
        .orbit-item-fix {
            animation: orbit-counter-rotate 60s linear infinite;
        }
        .text-giant {
            font-size: clamp(4rem, 15vw, 11rem);
            line-height: 0.85;
        }
      </style>

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>

<div className="z-10 flex md:scale-100 transition-transform duration-500 absolute top-0 right-0 bottom-0 left-0 scale-[0.55] items-center justify-center">
<style>
          @keyframes marquee-up {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
          }
          @keyframes marquee-down {
              0% { transform: translateY(-50%); }
              100% { transform: translateY(0); }
          }
          .animate-marquee-up {
              animation: marquee-up 60s linear infinite;
          }
          .animate-marquee-down {
              animation: marquee-down 60s linear infinite;
          }
          .animate-marquee-up:hover, .animate-marquee-down:hover {
              animation-play-state: paused;
          }
        </style>

<div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
<div className="flex flex-col items-center">
<h2 className="text-[clamp(4rem,12vw,11rem)] leading-[0.85] uppercase flex flex-col items-center font-semibold text-white tracking-tighter text-center mix-blend-difference z-10">
<span className="block">Selected</span>
<span className="block">Archive</span>
</h2>
<div className="mt-10 flex items-center gap-6">
<div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20"></div>
<span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
                Visual Productions 2024
              </span>
<div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20"></div>
</div>
</div>
</div>
<div className="relative h-[900px] w-[1100px] overflow-hidden">

<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center gap-10 transform -rotate-12 scale-110 origin-center">

<div className="flex flex-col gap-10 animate-marquee-up will-change-transform">

<div className="group relative h-80 w-80 cursor-pointer overflow-hidden rounded-[2.5rem] bg-white border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="flex h-full w-full items-center justify-center">
<span className="font-sans text-5xl font-black tracking-tight text-blue-600">
                    We Are™
                  </span>
</div>
</div>

<div className="h-80 w-80 cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 p-5 shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-zinc-800 p-4">
<div className="flex gap-4">
<div className="h-12 w-12 rounded-xl bg-zinc-700"></div>
<div className="h-12 flex-1 rounded-xl bg-zinc-700/50"></div>
</div>
<div className="flex-1 rounded-xl bg-zinc-700/30"></div>
<div className="h-10 w-2/3 rounded-xl bg-zinc-700/30"></div>
</div>
</div>

<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#4F46 &lt;h3 class=" font-sans="" font-semibold="" lowercase"="" text-6xl="" text-white="" tracking-tight="">
                  jalao
                
              </div>

<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#f97316] shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<svg className="h-36 w-36 text-white" fill="currentColor" viewbox="0 0 24 24">
<circle className="" cx="12" cy="12" fill="white" fillOpacity="0.2" r="10"></circle>
<path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="white"></path>
<path className="" d="M9.5 14a2.5 2.5 0 0 0 5 0" stroke="white" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>

<div className="group cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.05] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 w-80 h-80 border-white/10 border rounded-[2.5rem] relative shadow-2xl">
<div className="flex w-full h-full items-center justify-center">
<span className="font-sans text-5xl font-black tracking-tight text-blue-600">
                    We Are™
                  </span>
</div>
</div>
<div className="h-80 w-80 cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 p-5 shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-zinc-800 p-4">
<div className="h-12 w-12 rounded-xl bg-zinc-700"></div>
<div className="flex-1 rounded-xl bg-zinc-700/30"></div>
</div>
</div>
<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#4F46E5] shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<h3 className="font-sans text-6xl font-semibold tracking-tight text-white lowercase">
                  jalao
                </h3>
</div>
<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#F97316] shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<svg className="h-36 w-36 text-white" fill="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="white" fillOpacity="0.2" r="10"></circle>
<path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="white"></path>
<path d="M9.5 14a2.5 2.5 0 0 0 5 0" stroke="white" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="flex flex-col gap-10 animate-marquee-down will-change-transform">

<div className="flex h-80 w-80 cursor-pointer flex-col overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-500 to-rose-600 p-8 shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="mb-8 flex w-full justify-between">
<div className="h-4 w-16 rounded-full bg-white/40"></div>
<div className="h-4 w-8 rounded-full bg-white/40"></div>
</div>
<div className="w-full flex-1 rounded-3xl border border-white/10 bg-white/20 backdrop-blur-sm"></div>
</div>

<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-black shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="border-4 border-white px-6 py-3 text-4xl font-semibold tracking-[0.2em] text-white">
                  NC-17
                </div>
</div>

<div className="relative h-80 w-80 cursor-pointer overflow-hidden rounded-[2.5rem] border border-slate-800 bg-[#0f172a] shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<img alt="" className="h-full w-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07563de6-325c-493d-98c8-4ff5d879ad8d_1600w.webp" style={{}}/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/50 bg-blue-500/20 backdrop-blur-md">
<svg aria-hidden="true" className="lucide lucide-trending-up h-10 w-10 text-blue-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
</div>

<div className="flex cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.05] bg-[#43302b] w-80 h-80 border-white/5 border rounded-[2.5rem] shadow-2xl items-center justify-center">
<span className="whitespace-nowrap -rotate-90 text-5xl font-medium tracking-wider text-[#dcbdb3]">
                  GoStan
                </span>
</div>

<div className="flex h-80 w-80 cursor-pointer flex-col overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-500 to-rose-600 p-8 shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="w-full flex-1 rounded-3xl border border-white/10 bg-white/20 backdrop-blur-sm"></div>
</div>
<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-black shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<div className="border-4 border-white px-6 py-3 text-4xl font-semibold tracking-[0.2em] text-white">
                  NC-17
                </div>
</div>
<div className="relative h-80 w-80 cursor-pointer overflow-hidden rounded-[2.5rem] border border-slate-800 bg-[#0f172a] shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<img alt="" className="h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66ba04e3-a11d-4e47-bbf1-4983bcb1fd07_1600w.webp" style={{}}/>
</div>
<div className="flex h-80 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#43302b] shadow-2xl transition-all duration-500 hover:scale-[1.05]">
<span className="whitespace-nowrap -rotate-90 text-5xl font-medium tracking-wider text-[#dcbdb3]">
                  GoStan
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-neutral-950 py-24 px-6 md:px-12 overflow-hidden selection:bg-indigo-500/30">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05__1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto border border-white/10 bg-black/40 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-8 md:p-12 lg:p-20 flex flex-col justify-between">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Self-driving product operations</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-md">
                        Streamline your product development workflows with AI assistance for routine, manual tasks.
                    </p>
</div>

<div className="relative w-full max-w-md rounded-xl bg-[#0F0F0F] border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-colors duration-500">

<div className="flex items-center gap-2.5 px-5 py-4 border-b border-white/5 bg-white/[0.01]">
<svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
<span className="text-sm font-medium text-neutral-400">Triage Intelligence</span>
</div>
<div className="p-5 space-y-6">

<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">Suggestions</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 bg-white/5 rounded-md pl-1 pr-2 py-1 border border-white/5">
<div className="w-4 h-4 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">
<svg className="w-full h-full text-neutral-400" fill="currentColor" viewbox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
</div>
<span className="text-xs text-neutral-300 font-medium">nan</span>
</div>
<div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-md px-2 py-1 border border-white/5 opacity-50">
<svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
<span className="text-xs text-neutral-400">Mobile App...</span>
</div>
<div className="flex items-center gap-2 bg-white/5 rounded-md px-2 py-1 border border-white/5 opacity-50">
<svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-xs text-neutral-400">Slack</span>
</div>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="bg-neutral-900/50 rounded-lg p-4 border border-white/5 space-y-3">
<div className="text-xs font-medium text-white">Why this assignee was suggested</div>
<p className="text-xs text-neutral-400 leading-relaxed font-light">
                                This person was the assignee on previous issues related to performance problems in the mobile app launch flow.
                            </p>

<div className="pt-2 flex items-center gap-3 border-t border-white/5 mt-3">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-medium">Alternatives</span>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 bg-neutral-800 rounded px-1.5 py-0.5 border border-white/5 hover:bg-neutral-700 transition-colors cursor-pointer">
<div className="w-3.5 h-3.5 rounded-full bg-neutral-600"></div>
<span className="text-[10px] text-neutral-400">yann</span>
</div>
<div className="flex items-center gap-1.5 bg-neutral-800 rounded px-1.5 py-0.5 border border-white/5 hover:bg-neutral-700 transition-colors cursor-pointer">
<div className="w-3.5 h-3.5 rounded-full bg-neutral-600"></div>
<span className="text-[10px] text-neutral-400">erin</span>
</div>
</div>
</div>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#222] border border-white/10 text-neutral-200 text-sm font-medium py-2.5 rounded-lg transition-all group-hover:border-white/20 active:scale-[0.98]">
<svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Accept suggestion
                        </button>
</div>
</div>
</div>

<div className="md:p-12 lg:p-20 flex flex-col bg-[#0A0A0A] pt-8 pr-8 pb-8 pl-8 justify-between">
<style>
        @keyframes scroll-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
            animation: scroll-vertical 30s linear infinite;
        }
        /* Pause on hover for better readability */
        .group:hover .animate-scroll-vertical {
            animation-play-state: paused;
        }
    </style>
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Linear MCP</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-md">
            Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.
        </p>
</div>

<div className="relative w-full max-w-md h-[360px] rounded-xl bg-[#080808] border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-colors duration-500 flex flex-col">

<div className="absolute inset-0 overflow-hidden">
<div className="w-full animate-scroll-vertical">

<div className="p-6 font-mono text-[11px] leading-6 opacity-60 select-none">
<div className="text-neutral-500 mb-2">// mcp.linear.app/sse</div>
<div className="text-rose-400">"mcpServers"<span className="text-neutral-500">:</span> <span className="text-neutral-300">{</span></div>
<div className="pl-4 text-purple-400">"linear"<span className="text-neutral-500">:</span> <span className="text-neutral-300">{</span></div>
<div className="pl-8 text-blue-400">"command"<span className="text-neutral-500">:</span> <span className="text-emerald-400">"npx"</span><span className="text-neutral-500">,</span></div>
<div className="pl-8 text-blue-400">"args"<span className="text-neutral-500">:</span> <span className="text-neutral-300">[</span></div>
<div className="pl-12 text-emerald-400">"-y"<span className="text-neutral-500">,</span></div>
<div className="pl-12 text-emerald-400">"@linear/mcp-server"</div>
<div className="pl-8 text-neutral-300">],</div>
<div className="pl-8 text-blue-400">"env"<span className="text-neutral-500">:</span> <span className="text-neutral-300">{</span></div>
<div className="pl-12 text-orange-400">"LINEAR_API_KEY"<span className="text-neutral-500">:</span> <span className="text-emerald-400">"lin_api_..."</span></div>
<div className="pl-8 text-neutral-300">}</div>
<div className="pl-4 text-neutral-300">}</div>
<div className="text-neutral-300">}</div>

<div className="h-12"></div>
</div>

<div className="p-6 font-mono text-[11px] leading-6 opacity-60 select-none">
<div className="text-neutral-500 mb-2">// mcp.linear.app/sse</div>
<div className="text-rose-400">"mcpServers"<span className="text-neutral-500">:</span> <span className="text-neutral-300">{</span></div>
<div className="pl-4 text-purple-400">"linear"<span className="text-neutral-500">:</span> <span className="text-neutral-300">{</span></div>
<div className="pl-8 text-blue-400">"command"<span className="text-neutral-500">:</span> <span className="text-emerald-400">"npx"</span><span className="text-neutral-500">,</span></div>
<div className="pl-8 text-blue-400">"args"<span className="text-neutral-500">:</span> <span className="text-neutral-300">[</span></div>
<div className="pl-12 text-emerald-400">"-y"<span className="text-neutral-500">,</span></div>
<div className="pl-12 text-emerald-400">"@linear/mcp-server"</div>
<div className="pl-8 text-neutral-300">],</div>
<div className="pl-8 text-blue-400">"env"<span className="text-neutral-500">:</span> <span className="text-neutral-300">{</span></div>
<div className="pl-12 text-orange-400">"LINEAR_API_KEY"<span className="text-neutral-500">:</span> <span className="text-emerald-400">"lin_api_..."</span></div>
<div className="pl-8 text-neutral-300">}</div>
<div className="pl-4 text-neutral-300">}</div>
<div className="text-neutral-300">}</div>

<div className="h-12"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none z-10"></div>

<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
<div className="bg-[#161616] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-sm ring-1 ring-white/5 transition-transform duration-500 group-hover:-translate-y-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-0.5 h-4 bg-white/50 animate-pulse"></div>
<span className="text-neutral-400 text-sm font-light">Ask anything</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-[10px] text-neutral-300 transition-colors">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                        Attach
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-[10px] text-neutral-300 transition-colors">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                        Search
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-[10px] text-neutral-300 transition-colors">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2a6 6 0 0 1 6 6c0 7-3 9-3 9h-6s-3-2-3-9a6 6 0 0 1 6-6Z"></path><path d="M9 21h6"></path><path d="M11 16a2 2 0 0 0 2-2"></path></svg>
                        Reason
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 lg:px-12 overflow-hidden bg-black border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto relative">
<div className="text-center mb-20 md:mb-32">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Loved by the best
          </h2>
<p className="text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Join thousands of developers and designers who rely on us to power
            their workflows.
          </p>
</div>

<div className="hidden lg:flex group/fan h-[600px] relative perspective-[1000px] items-center justify-center">

<div className="absolute w-[300px] h-[420px] left-1/2 top-1/2 p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out origin-center -translate-x-[calc(50%+280px)] -translate-y-[calc(50%-40px)] -rotate-12 hover:z-50 hover:rotate-0 hover:scale-110 hover:-translate-y-[calc(50%+60px)] hover:bg-neutral-900 hover:border-white/20 hover:shadow-2xl group-hover/fan:opacity-40 hover:!opacity-100 cursor-default will-change-transform z-0">
<div className="absolute top-6 right-6 text-white/5">
<svg className="lucide lucide-figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 23H12v-3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</div>
<div className="flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-center text-sm font-bold w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_3840w.webp)] bg-cover border-neutral-500/20 border rounded-full items-center justify-center">
</div>
<div className="">
<div className="text-white font-medium text-sm">David Park</div>
<div className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
          Engineer, Figma
        </div>
</div>
</div>
<p className="text-gray-300 text-base leading-relaxed font-light">
      "Syncing design tokens has never been smoother. It automates
      the tedious parts of our workflow perfectly."
    </p>
</div>
<div className="text-white/10 text-xs font-mono self-end">01</div>
</div>
</div>

<div className="absolute w-[300px] h-[420px] left-1/2 top-1/2 p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out origin-center -translate-x-[calc(50%+140px)] -translate-y-[calc(50%-10px)] -rotate-6 hover:z-50 hover:rotate-0 hover:scale-110 hover:-translate-y-[calc(50%+60px)] hover:bg-neutral-900 hover:border-white/20 hover:shadow-2xl group-hover/fan:opacity-40 hover:!opacity-100 cursor-default will-change-transform z-10">
<div className="absolute top-6 right-6 text-white/5">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<div className="relative flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-center text-sm font-bold w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f18cafe-cddc-47be-bc85-f2bfd4dca484_320w.png)] bg-cover border-neutral-500/20 border rounded-full items-center justify-center">
</div>
<div>
<div className="text-white font-medium text-sm">Alex Smith</div>
<div className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
        Design Lead, Stripe
      </div>
</div>
</div>
<p className="text-gray-300 text-base leading-relaxed font-light">
    "This platform completely transformed how we handle our design
    system. The sync capabilities are simply magical."
  </p>
<div className="absolute right-0 bottom-0 text-white/10 text-xs font-mono">02</div>
</div>
</div>

<div className="absolute w-[300px] h-[420px] left-1/2 top-1/2 p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out origin-center -translate-x-1/2 -translate-y-[calc(50%+20px)] rotate-0 hover:z-50 hover:scale-110 hover:-translate-y-[calc(50%+80px)] hover:bg-neutral-900 hover:border-white/20 hover:shadow-2xl group-hover/fan:opacity-40 hover:!opacity-100 cursor-default will-change-transform z-20">
<div className="absolute top-6 right-6 text-white/5">
<svg className="" fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<div className="flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-center text-sm font-bold w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed2a66ab-9146-465b-aec7-f5be6e36dea7_320w.webp)] bg-cover border-neutral-500/20 border rounded-full items-center justify-center" style={{}}></div>
<div className="">
<div className="text-white font-medium text-sm">
          Sarah Jones
        </div>
<div className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
          CTO, Linear
        </div>
</div>
</div>
<p className="text-gray-300 text-base leading-relaxed font-light">
      "I've never seen a tool that balances power and simplicity so
      well. It has become the backbone of our development process."
    </p>
</div>
<div className="text-white/10 text-xs font-mono self-end">03</div>
</div>
</div>

<div className="absolute w-[300px] h-[420px] left-1/2 top-1/2 p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out origin-center -translate-x-[calc(50%-140px)] -translate-y-[calc(50%-10px)] rotate-6 hover:z-50 hover:rotate-0 hover:scale-110 hover:-translate-y-[calc(50%+60px)] hover:bg-neutral-900 hover:border-white/20 hover:shadow-2xl group-hover/fan:opacity-40 hover:!opacity-100 cursor-default will-change-transform z-10">
<div className="absolute top-6 right-6 text-white/5">
<svg className="" fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<div className="flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-center text-sm font-bold w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp)] bg-cover border-neutral-500/20 border rounded-full items-center justify-center"></div>
<div className="">
<div className="text-white font-medium text-sm">
                      Marcus Reed
                    </div>
<div className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
                      Engineer, Vercel
                    </div>
</div>
</div>
<p className="text-gray-300 text-base leading-relaxed font-light">
                  "The component library alone saved us months of work. It's
                  beautiful, accessible, and incredibly easy to customize."
                </p>
</div>
<div className="text-white/10 text-xs font-mono self-end">04</div>
</div>
</div>

<div className="absolute w-[300px] h-[420px] left-1/2 top-1/2 p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out origin-center -translate-x-[calc(50%-280px)] -translate-y-[calc(50%-40px)] rotate-12 hover:z-50 hover:rotate-0 hover:scale-110 hover:-translate-y-[calc(50%+60px)] hover:bg-neutral-900 hover:border-white/20 hover:shadow-2xl group-hover/fan:opacity-40 hover:!opacity-100 cursor-default will-change-transform z-0">
<div className="absolute top-6 right-6 text-white/5">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div className="flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-center text-sm font-bold w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0413dc82-d7c0-447d-aaa9-87ce398bca83_320w.webp)] bg-cover border-neutral-500/20 border rounded-full items-center justify-center"></div>
<div className="">
<div className="text-white font-medium text-sm">
                      Elena Rodriguez
                    </div>
<div className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
                      Product Design, Raycast
                    </div>
</div>
</div>
<p className="text-gray-300 text-base leading-relaxed font-light">
                  "Fast, efficient, and beautiful. It's the standard for modern
                  web applications. Highly recommended."
                </p>
</div>
<div className="text-white/10 text-xs font-mono self-end">05</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:hidden">

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  AS
                </div>
<div>
<div className="text-white font-medium">Alex Smith</div>
<div className="text-gray-500 text-xs uppercase tracking-widest">
                    Design Lead, Stripe
                  </div>
</div>
</div>
<p className="text-gray-400">
                "This platform completely transformed how we handle our design
                system."
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-sm">
                  SJ
                </div>
<div>
<div className="text-white font-medium">Sarah Jones</div>
<div className="text-gray-500 text-xs uppercase tracking-widest">
                    CTO, Linear
                  </div>
</div>
</div>
<p className="text-gray-400">
                "I've never seen a tool that balances power and simplicity so
                well."
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  MR
                </div>
<div>
<div className="text-white font-medium">Marcus Reed</div>
<div className="text-gray-500 text-xs uppercase tracking-widest">
                    Engineer, Vercel
                  </div>
</div>
</div>
<p className="text-gray-400">
                "The component library alone saved us months of work. It's
                beautiful."
              </p>
</div>
</div>

<div className="bg">
<div className="overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex gap-4 mb-4 gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                  DP
                </div>
<div>
<div className="text-white font-medium">David Park</div>
<div className="text-gray-500 text-xs uppercase tracking-widest">
                    Engineer, Figma
                  </div>
</div>
</div>
<p className="text-gray-400">
                "Syncing design tokens has never been smoother. It automates
                everything."
              </p>
</div>
</div>

<div className="overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-sm">
                  ER
                </div>
<div>
<div className="text-white font-medium">Elena Rodriguez</div>
<div className="text-gray-500 text-xs uppercase tracking-widest">
                    Product Design, Raycast
                  </div>
</div>
</div>
<p className="text-gray-400">
                "Fast, efficient, and beautiful. It's the standard for modern
                apps."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-40 px-6 lg:px-12 border-t border-white/5 bg-white text-black">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
          LET'S BUILDTHE EXTRAORDINARY
        </h2>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
<button className="bg-black text-white px-12 py-5 rounded-full font-medium text-sm uppercase tracking-widest transition-transform hover:scale-105">
            Start a Project
          </button>
<button className="border border-black/20 px-12 py-5 rounded-full font-medium text-sm uppercase tracking-widest transition-colors hover:bg-black hover:text-white">
            hello@lumina.agency
          </button>
</div>
</div>
</section>

<footer className="z-10 lg:px-12 bg-black border-white/10 border-t pt-20 pr-6 pb-20 pl-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start gap-20">
<div className="lg:w-1/3">
<div className="text-2xl font-bold tracking-tighter text-white mb-6">
              Lumina.
            </div>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A creative agency dedicated to the art of digital transformation.
              We create work that matters.
            </p>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12 w-full">
<div className="">
<h4 className="text-white text-xs uppercase tracking-widest mb-6">
                Sitemap
              </h4>
<ul className="space-y-4 text-sm text-gray-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Work
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Expertise
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Studio
                  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs uppercase tracking-widest mb-6">
                Social
              </h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Instagram
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Twitter
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    LinkedIn
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">
                Legal
              </h4>
<ul className="space-y-4 text-sm text-gray-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Terms
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/5 text-center md:text-left">
<span className="text-xs text-gray-600 uppercase tracking-widest">
            © 2024 Lumina Agency. All Rights Reserved.
          </span>
</div>
</div>
</footer>
<style>
      @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>



    </>
  );
}
