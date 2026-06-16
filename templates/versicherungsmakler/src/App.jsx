import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Initialize Icons
    lucide.createIcons();

    // --- 1. Background Column Animation Generation ---
    const bgContainer = document.getElementById('bg-curtain');
    const cols = 12; 
    for(let i=0; i<cols; i++){
        const col = document.createElement('div');
        col.className = 'bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5';
        // Staggered clip reveal
        col.style.animation = `clipColReveal 1.2s cubic-bezier(0.8, 0, 0.2, 1) forwards`;
        col.style.animationDelay = `${i * 0.05}s`;
        bgContainer.appendChild(col);
    }

    // --- 2. Text Split Animation ---
    function splitTextToSpans(selector, delayStart = 0) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            const text = el.textContent.trim();
            el.innerHTML = '';
            el.style.opacity = '1'; 
            
            [...text].forEach((char, index) => {
                const wrapper = document.createElement('span');
                wrapper.className = 'char-wrapper';
                // preserve space width
                if(char === ' ') wrapper.style.width = '0.3em';
                
                const inner = document.createElement('span');
                inner.className = 'char-reveal';
                inner.textContent = char;
                inner.style.animationDelay = `${delayStart + (index * 0.03)}s`;
                
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
            });
        });
    }

    // Split Main Hero Title
    splitTextToSpans('.split-text', 0.5); 

    // Split Logos (Letter by Letter)
    document.querySelectorAll('.logo-text').forEach((logo, idx) => {
        const text = logo.textContent;
        logo.innerHTML = '';
        [...text].forEach((char, charIdx) => {
            const wrapper = document.createElement('span');
            wrapper.className = 'char-wrapper';
            const inner = document.createElement('span');
            inner.className = 'char-reveal';
            inner.textContent = char;
            inner.style.animationDelay = `${2.0 + (idx * 0.2) + (charIdx * 0.05)}s`;
            wrapper.appendChild(inner);
            logo.appendChild(wrapper);
        });
    });

    // --- 3. Team Carousel Logic (Preserved 3D Effect) ---
    const cards = document.querySelectorAll('.team-card');
    let currentIndex = 0;
    const totalCards = cards.length;

    function updateCards() {
        cards.forEach((card, index) => {
            // Determine position relative to current
            let offset = (index - currentIndex + totalCards) % totalCards;
            
            if (offset === 0) {
                // Center / Active
                card.style.transform = 'translateX(0) scale(1) translateZ(0)';
                card.style.zIndex = '30';
                card.style.opacity = '1';
                card.style.filter = 'blur(0px)';
                card.classList.remove('pointer-events-none');
            } else if (offset === 1) {
                // Right
                card.style.transform = 'translateX(50%) scale(0.85) translateZ(-50px)';
                card.style.zIndex = '10';
                card.style.opacity = '0.3';
                card.style.filter = 'blur(2px)';
                card.classList.add('pointer-events-none');
            } else if (offset === 2) {
                // Left 
                card.style.transform = 'translateX(-50%) scale(0.85) translateZ(-50px)';
                card.style.zIndex = '10';
                card.style.opacity = '0.3';
                card.style.filter = 'blur(2px)';
                card.classList.add('pointer-events-none');
            }
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCards();
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCards();
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        nextCard();
        resetTimer();
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        prevCard();
        resetTimer();
    });

    // Auto Loop
    let timer = setInterval(nextCard, 5000);
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextCard, 5000);
    }

    // Init state
    updateCards();

    // --- 4. Portfolio Filtering Logic ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden-item');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.classList.add('hidden-item');
                    }, 300); // Wait for transition
                }
            });
        });
    });


    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 fixed w-full h-screen top-0 blur-xl hue-rotate-15 saturate-50" data-alpha-mask="49" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 49%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 49%, transparent)'}}><div className="aura-background-component -z-10 w-full h-full absolute top-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="fixed z-0 grid grid-cols-12 pointer-events-none w-full h-full top-0 right-0 bottom-0 left-0" id="bg-curtain">

<div className="bg-[#1a1a1a] opacity-10 w-full h-full border-white/5 border-r" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] opacity-10 w-full h-full border-white/5 border-r" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] opacity-10 w-full h-full border-white/5 border-r" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] opacity-10 w-full h-full border-white/5 border-r" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] opacity-10 w-full h-full border-white/5 border-r" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] opacity-10 w-full h-full border-white/5 border-r" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.05s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.1s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.15s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.2s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.25s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.3s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.35s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.4s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.45s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.5s 1 normal forwards running clipColReveal'}}></div><div className="bg-[#1a1a1a] h-full w-full opacity-10 border-r border-white/5" style={{animation: '1.2s cubic-bezier(0.8, 0, 0.2, 1) 0.55s 1 normal forwards running clipColReveal'}}></div></div>

<main className="xl:rounded-[2rem] xl:p-10 overflow-hidden flex flex-col xl:max-w-[90rem] xl:shadow-2xl z-10 bg-[#0F0F0F] w-full border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none" style={{}}>

<div className="pointer-events-none w-full h-full absolute top-0 left-0" style={{}}></div>

<nav className="relative z-20 flex flex-wrap items-center justify-between gap-6 mb-10 animate-fade-in" style={{}}>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center border border-white/10">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[0.6rem] uppercase font-medium text-neutral-500 tracking-[0.2em]">Versicherungsmakler in Ulm</span>
</div>
</div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.15em] uppercase text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#">Privat</a>
<a className="hover:text-white transition-colors duration-300" href="#">Gewerbe</a>
<a className="hover:text-white transition-colors duration-300" href="#">Über Uns</a>
<a className="hover:text-white transition-colors duration-300" href="#">Magazin</a>
</div>
<div className="flex gap-4 items-center">
<button className="group relative px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden">
<span className="relative z-10 text-xs font-medium tracking-widest uppercase text-white flex items-center gap-2">
                        Beratungstermin
                        <svg className="lucide lucide-arrow-right w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</nav>

<div className="flex-grow flex flex-col md:py-0 lg:h-[600px] border-y overflow-hidden group h-[400px] border-white/5 rounded-2xl mt-4 mb-8 pt-0 pb-0 relative justify-center" style={{}}>
<div className="z-0 absolute top-0 right-0 bottom-0 left-0">

<img alt="Ulm Architecture" className="group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-50 w-full h-full object-cover grayscale-0 -translate-y-16 scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3700e25b-071b-4ff4-b195-e9a725ce7e43_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-transparent"></div>
</div>
<div className="md:px-16 flex flex-col w-full h-full z-10 pr-8 pl-8 relative justify-center">
<div className="mb-6 animate-fade-in" style={{animationDelay: '1.2s', opacity: '0', animationFillMode: 'forwards'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/80">Digital &amp; Persönlich</span>
</div>
</div>

<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white tracking-tight mix-blend-screen max-w-5xl" id="hero-title">
<span className="block opacity-90 split-text" style={{opacity: '1'}}><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.5s'}}>Z</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.53s'}}>u</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.56s'}}>k</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.59s'}}>u</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.62s'}}>n</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.65s'}}>f</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.68s'}}>t</span></span></span>
<span className="block italic font-light text-white/60 ml-8 md:ml-16 split-text" style={{opacity: '1'}}><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.5s'}}>S</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.53s'}}>i</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.56s'}}>c</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.59s'}}>h</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.62s'}}>e</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.65s'}}>r</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.68s'}}>n</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '0.71s'}}>.</span></span></span>
</h1>
<p className="mt-8 max-w-lg text-sm md:text-base text-neutral-400 leading-relaxed tracking-wide font-light animate-fade-in" style={{animationDelay: '1.5s', opacity: '0', animationFillMode: 'forwards'}}>
                    Ihr unabhängiger Versicherungsmakler in Ulm. Wir analysieren Risiken, optimieren Portfolios und schaffen echte Sicherheit für Privat- und Gewerbekunden.
                </p>

<div className="absolute bottom-10 left-8 md:left-16 right-8 flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-6 animate-fade-in gap-4" style={{animationDelay: '1.8s', opacity: '0', animationFillMode: 'forwards'}}>
<span className="text-[0.6rem] uppercase tracking-widest text-neutral-600 font-semibold">Starke Partner Netzwerke</span>
<div className="flex items-center gap-8 opacity-50 transition-all duration-500" id="logo-container">
<span className="text-xs font-sans font-semibold tracking-tight logo-text hover:text-white transition-colors cursor-default"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2s'}}>A</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.05s'}}>L</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.1s'}}>L</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.15s'}}>I</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.2s'}}>A</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.25s'}}>N</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.3s'}}>Z</span></span></span>
<span className="text-xs font-sans font-semibold tracking-wide logo-text hover:text-white transition-colors cursor-default"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.2s'}}>A</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.25s'}}>X</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.3s'}}>A</span></span></span>
<span className="text-xs font-sans font-semibold tracking-widest logo-text hover:text-white transition-colors cursor-default"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.4s'}}>R</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.45s'}}>+</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.5s'}}>V</span></span></span>
<span className="text-xs font-sans font-semibold logo-text hover:text-white transition-colors cursor-default"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.6s'}}>B</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.65s'}}>A</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.7s'}}>R</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.75s'}}>T</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.8s'}}>E</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.85s'}}>N</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.9s'}}>I</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '2.95s'}}>A</span></span></span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 z-20 relative mb-6">

<div className="lg:col-span-7 flex flex-col gap-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-white/10 rounded-xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[200px]">
<div className="flex justify-between items-start">
<div className="p-2.5 bg-white/5 rounded-lg text-white/80 border border-white/5">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Privatvorsorge</h3>
<p className="text-xs text-neutral-400 leading-relaxed tracking-wide">Individuelle Konzepte für Gesundheit, Vermögen und Familie.</p>
</div>
</div>

<div className="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-white/10 rounded-xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[200px]">
<div className="flex justify-between items-start">
<div className="p-2.5 bg-white/5 rounded-lg text-white/80 border border-white/5">
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Gewerbe</h3>
<p className="text-xs text-neutral-400 leading-relaxed tracking-wide">Maßgeschneiderte Risikoanalysen für Unternehmen und Startups.</p>
</div>
</div>
</div>

<div className="group bg-[#161616] hover:bg-[#1A1A1A] border border-white/5 hover:border-white/10 rounded-xl p-6 transition-all duration-500 cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6 flex-grow">
<div className="flex flex-col gap-2 max-w-sm">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-white/5 rounded-lg text-white/80 border border-white/5">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Digitaler Ordner</h3>
</div>
<p className="text-xs text-neutral-400 leading-relaxed tracking-wide mt-2">
                            Verwalten Sie Ihre Verträge digital. Kein Papierkram, volle Transparenz. Zugriff jederzeit via App.
                        </p>
</div>
<div className="w-full md:w-auto">
<div className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-xs font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center">
                            Login
                        </div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-gradient-to-b from-[#131313] to-[#0F0F0F] border border-white/10 rounded-xl p-8 flex flex-col relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col">
<span className="text-[0.6rem] font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-4 block">Erstgespräch</span>
<h3 className="text-2xl font-heading text-white mb-2 tracking-tight">Anfrage starten.</h3>
<p className="text-xs text-neutral-500 mb-8">Unverbindlich und datensicher.</p>
<form className="flex flex-col gap-4 flex-grow justify-center">
<div className="grid grid-cols-2 gap-3">
<div className="relative">
<input className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black/50 transition-all" placeholder="Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black/50 transition-all" placeholder="E-Mail" type="email"/>
</div>
</div>

<div className="space-y-3 mt-2">
<label className="text-[0.65rem] uppercase tracking-widest text-neutral-500 font-semibold">Themenbereich</label>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 cursor-pointer group/check">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center transition-all group-hover/check:border-neutral-500">
<svg className="text-black opacity-0 transform scale-50 transition-all duration-200" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-300 group-hover/check:text-white transition-colors">Versicherungscheck &amp; Optimierung</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/check">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center transition-all group-hover/check:border-neutral-500">
<svg className="text-black opacity-0 transform scale-50 transition-all duration-200" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-300 group-hover/check:text-white transition-colors">Altersvorsorge &amp; Finanzen</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/check">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center transition-all group-hover/check:border-neutral-500">
<svg className="text-black opacity-0 transform scale-50 transition-all duration-200" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-300 group-hover/check:text-white transition-colors">Baufinanzierung</span>
</label>
</div>
</div>
<button className="mt-4 w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group-hover:gap-3 transition-all" type="button">
                            Anfrage Senden
                            <svg className="lucide lucide-send w-3 h-3" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</div>
</div>

<div className="w-full relative mt-4 border border-white/5 rounded-2xl bg-[#131313] overflow-hidden p-8 lg:p-12 z-20">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="text-2xl font-heading italic text-white">Unser Team</h2>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider">Kompetenz vor Ort in Ulm</p>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white/50" id="prevBtn">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white/50" id="nextBtn">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="relative h-[380px] w-full flex items-center justify-center perspective-1000">

<div className="team-card absolute w-full max-w-[340px] bg-[#1A1A1A] border border-white/10 p-1 rounded-xl shadow-xl card-enter" data-index="0" style={{transform: 'translateX(-50%) scale(0.85) translateZ(-50px)', zIndex: '10', opacity: '0.3', filter: 'blur(2px)'}}>
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<h4 className="text-base text-white font-medium">Thomas Weber</h4>
<p className="text-[0.6rem] text-neutral-400 uppercase tracking-widest mt-0.5">Versicherungsmakler</p>
</div>
</div>
<div className="p-4">
<p className="text-xs text-neutral-400 leading-relaxed">Experte für gewerbliche Risiken und betriebliche Altersvorsorge. Seit 15 Jahren in Ulm tätig.</p>
</div>
</div>

<div className="team-card absolute w-full max-w-[340px] bg-[#1A1A1A] border border-white/10 p-1 rounded-xl shadow-xl card-enter" data-index="1" style={{transform: 'translateX(0px) scale(1) translateZ(0px)', zIndex: '30', opacity: '1', filter: 'blur(0px)'}}>
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<h4 className="text-base text-white font-medium">Sabine Müller</h4>
<p className="text-[0.6rem] text-neutral-400 uppercase tracking-widest mt-0.5">Privatkunden &amp; Vorsorge</p>
</div>
</div>
<div className="p-4">
<p className="text-xs text-neutral-400 leading-relaxed">Spezialisiert auf private Absicherung und Baufinanzierung. Ihre Ansprechpartnerin für langfristige Planung.</p>
</div>
</div>

<div className="team-card absolute w-full max-w-[340px] bg-[#1A1A1A] border border-white/10 p-1 rounded-xl shadow-xl card-enter" data-index="2" style={{transform: 'translateX(50%) scale(0.85) translateZ(-50px)', zIndex: '10', opacity: '0.3', filter: 'blur(2px)'}}>
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<h4 className="text-base text-white font-medium">Michael Klein</h4>
<p className="text-[0.6rem] text-neutral-400 uppercase tracking-widest mt-0.5">Schadenmanagement</p>
</div>
</div>
<div className="p-4">
<p className="text-xs text-neutral-400 leading-relaxed">Schnelle Hilfe im Schadensfall. Klärt Ansprüche und koordiniert die Abwicklung mit Versicherern.</p>
</div>
</div>
</div>
</div>

<div className="w-full relative mt-8 pt-12 border-t border-white/5 z-20">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h2 className="text-2xl font-heading italic text-white">Versicherungssparten</h2>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider">Unser Portfolio im Überblick</p>
</div>

<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="filter-btn active px-4 py-1.5 rounded-full border border-white/10 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-400 hover:text-white hover:border-white/20 transition-all" data-filter="all">Alle</button>
<button className="filter-btn px-4 py-1.5 rounded-full border border-white/5 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-500 hover:text-white hover:border-white/20 transition-all" data-filter="sach">Sachwerte</button>
<button className="filter-btn px-4 py-1.5 rounded-full border border-white/5 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-500 hover:text-white hover:border-white/20 transition-all" data-filter="person">Personen</button>
<button className="filter-btn px-4 py-1.5 rounded-full border border-white/5 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-500 hover:text-white hover:border-white/20 transition-all" data-filter="finance">Finanzen</button>
<button className="filter-btn px-4 py-1.5 rounded-full border border-white/5 text-[0.65rem] uppercase tracking-widest font-semibold text-neutral-500 hover:text-white hover:border-white/20 transition-all" data-filter="gewerbe">Gewerbe</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="portfolio-grid">

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="sach">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-file-check-2 w-6 h-6 stroke-[1.5]" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Sachversicherung</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="person">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-shield w-6 h-6 stroke-[1.5]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Altersvorsorge</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="finance">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-hand-coins w-6 h-6 stroke-[1.5]" data-lucide="hand-coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Investment</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="sach">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-car-front w-6 h-6 stroke-[1.5]" data-lucide="car-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">KFZ &amp; Flottenvers.</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="person">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-briefcase w-6 h-6 stroke-[1.5]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Berufsunfähigkeitsvers.</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="person">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-activity w-6 h-6 stroke-[1.5]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Krankenversicherung</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="sach">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-zap w-6 h-6 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Strom &amp; Gas</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="gewerbe">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-store w-6 h-6 stroke-[1.5]" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Gewerbliche Vers.</span>
</div>

<div className="portfolio-item group relative p-8 bg-[#161616] border border-white/5 hover:border-white/20 rounded-xl flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:bg-[#1A1A1A] cursor-pointer" data-category="finance">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
<svg className="lucide lucide-landmark w-6 h-6 stroke-[1.5]" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white tracking-wide transition-colors">Finanzierung</span>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300 z-20">
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white font-heading">Versicherungsmakler in Ulm</span>
<p className="text-[0.65rem] uppercase tracking-widest text-neutral-500">Münsterplatz 1, 89073 Ulm</p>
</div>
<div className="flex gap-6 text-[0.6rem] uppercase tracking-widest text-neutral-500">
<a className="hover:text-white" href="#">Impressum</a>
<a className="hover:text-white" href="#">Datenschutz</a>
<a className="hover:text-white" href="#">Erstinformation</a>
</div>
</div>
</main>


    </>
  );
}
