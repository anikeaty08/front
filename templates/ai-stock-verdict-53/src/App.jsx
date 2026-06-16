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



        // --- 1. Flashlight Effect ---
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- 2. Carousel Logic ---
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            // Re-trigger text animation for the new active slide
            const title = slides[index].querySelector('.animated-title');
            if(title) animateText(title);
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);
        document.getElementById('nextBtnMob').addEventListener('click', nextSlide);
        document.getElementById('prevBtnMob').addEventListener('click', prevSlide);

        // Auto rotation
        setInterval(nextSlide, 8000);

        // --- 3. Scroll Animation (Intersection Observer) ---
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible if we don't want it to toggle
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // --- 4. Text Animation Splitter ---
        function animateText(element) {
            // Check if already processed to avoid duplication
            if(element.querySelector('.char-reveal')) return; 
            
            const text = element.innerText;
            element.innerHTML = '';
            
            // Create a wrapper for overflow hidden if needed, 
            // but for this effect we just need inline-block spans
            const wrapper = document.createElement('div');
            wrapper.className = 'overflow-hidden inline-flex gap-[1px]'; // keep words together-ish
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.className = 'char-reveal';
                // If space, preserve width
                if (char === ' ') span.style.width = '0.3em';
                
                const inner = document.createElement('span');
                inner.innerText = char;
                inner.style.animationDelay = `${index * 0.05}s`;
                
                span.appendChild(inner);
                element.appendChild(span);
            });
        }

        // Initialize text animation for first slide
        document.querySelectorAll('.animated-title').forEach(el => animateText(el));

        // --- 5. Background Columns Generator ---
        const colContainer = document.getElementById('bgColumns');
        const colCount = Math.floor(window.innerWidth / 40); // One column every ~40px
        for(let i=0; i<colCount; i++) {
            const col = document.createElement('div');
            col.className = 'bg-column';
            col.style.animationDelay = `${i * 0.05}s`;
            colContainer.appendChild(col);
        }

        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-column-container justify-center gap-8 px-4" id="bgColumns">

<div className="bg-column" style={{animationDelay: '0s'}}></div><div className="bg-column" style={{animationDelay: '0.05s'}}></div><div className="bg-column" style={{animationDelay: '0.1s'}}></div><div className="bg-column" style={{animationDelay: '0.15s'}}></div><div className="bg-column" style={{animationDelay: '0.2s'}}></div><div className="bg-column" style={{animationDelay: '0.25s'}}></div><div className="bg-column" style={{animationDelay: '0.3s'}}></div><div className="bg-column" style={{animationDelay: '0.35s'}}></div><div className="bg-column" style={{animationDelay: '0.4s'}}></div><div className="bg-column" style={{animationDelay: '0.45s'}}></div><div className="bg-column" style={{animationDelay: '0.5s'}}></div><div className="bg-column" style={{animationDelay: '0.55s'}}></div><div className="bg-column" style={{animationDelay: '0.6s'}}></div><div className="bg-column" style={{animationDelay: '0.65s'}}></div><div className="bg-column" style={{animationDelay: '0.7s'}}></div><div className="bg-column" style={{animationDelay: '0.75s'}}></div><div className="bg-column" style={{animationDelay: '0.8s'}}></div><div className="bg-column" style={{animationDelay: '0.85s'}}></div><div className="bg-column" style={{animationDelay: '0.9s'}}></div><div className="bg-column" style={{animationDelay: '0.95s'}}></div><div className="bg-column" style={{animationDelay: '1s'}}></div><div className="bg-column" style={{animationDelay: '1.05s'}}></div><div className="bg-column" style={{animationDelay: '1.1s'}}></div><div className="bg-column" style={{animationDelay: '1.15s'}}></div><div className="bg-column" style={{animationDelay: '1.2s'}}></div><div className="bg-column" style={{animationDelay: '1.25s'}}></div><div className="bg-column" style={{animationDelay: '1.3s'}}></div><div className="bg-column" style={{animationDelay: '1.35s'}}></div><div className="bg-column" style={{animationDelay: '1.4s'}}></div><div className="bg-column" style={{animationDelay: '1.45s'}}></div><div className="bg-column" style={{animationDelay: '1.5s'}}></div><div className="bg-column" style={{animationDelay: '1.55s'}}></div><div className="bg-column" style={{animationDelay: '1.6s'}}></div><div className="bg-column" style={{animationDelay: '1.65s'}}></div><div className="bg-column" style={{animationDelay: '1.7s'}}></div><div className="bg-column" style={{animationDelay: '1.75s'}}></div></div>

<section className="h-screen w-full snap-start relative flex flex-col items-center justify-center overflow-hidden p-6">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse duration-[4s]"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse duration-[5s]"></div>
<div className="contrast-150 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0 brightness-100"></div>
</div>

<div className="relative z-10 w-full max-w-sm aspect-[3/4] group perspective-1000">

<div className="w-full h-full relative" id="carouselWrapper">

<div className="carousel-slide spotlight-card rounded-[2rem] card-shadow border border-white/5 flex flex-col overflow-hidden bg-neutral-900/60 backdrop-blur-2xl" data-stock="UBER" style={{-MouseX: '-415.0999755859375px', -MouseY: '-239.8000030517578px'}}>

<div className="bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9946eb6e-f3c2-4237-882b-234490a4caa6_800w.webp)] bg-cover border-white/5 border-b pt-8 pr-8 pb-4 pl-8 relative">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
<div className="relative z-10">
<div className="flex mb-4 justify-center">
<span className="inline-flex items-center justify-center text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full">
<svg className="lucide lucide-car" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
</span>
</div>
<h1 className="text-2xl font-black text-white tracking-tight font-geist mb-2 animated-title"><span className="char-reveal"><span style={{animationDelay: '0s'}}>A</span></span><span className="char-reveal"><span style={{animationDelay: '0.05s'}}>I</span></span><span className="char-reveal" style={{width: '0.3em'}}><span style={{animationDelay: '0.1s'}}> </span></span><span className="char-reveal"><span style={{animationDelay: '0.15s'}}>V</span></span><span className="char-reveal"><span style={{animationDelay: '0.2s'}}>e</span></span><span className="char-reveal"><span style={{animationDelay: '0.25s'}}>r</span></span><span className="char-reveal"><span style={{animationDelay: '0.3s'}}>d</span></span><span className="char-reveal"><span style={{animationDelay: '0.35s'}}>i</span></span><span className="char-reveal"><span style={{animationDelay: '0.4s'}}>c</span></span><span className="char-reveal"><span style={{animationDelay: '0.45s'}}>t</span></span><span className="char-reveal"><span style={{animationDelay: '0.5s'}}>:</span></span><span className="char-reveal" style={{width: '0.3em'}}><span style={{animationDelay: '0.55s'}}> </span></span><span className="char-reveal"><span style={{animationDelay: '0.6s'}}>U</span></span><span className="char-reveal"><span style={{animationDelay: '0.65s'}}>B</span></span><span className="char-reveal"><span style={{animationDelay: '0.7s'}}>E</span></span><span className="char-reveal"><span style={{animationDelay: '0.75s'}}>R</span></span></h1>
<p className="text-sm font-medium text-neutral-300">Ride-share &amp; Delivery Outlook</p>
</div>
</div>

<div className="flex-1 flex flex-col relative z-10">

<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent absolute top-1/2 -translate-y-1/2"></div>
<div className="border-beam-btn bg-neutral-950 border border-white/10 text-[10px] font-bold text-neutral-400 px-4 py-1.5 rounded-full uppercase tracking-widest pointer-events-auto cursor-pointer hover:text-white transition-colors">
                                VS
                            </div>
</div>

<div className="flex-1 flex flex-row group/gemini hover:bg-blue-900/5 transition-colors duration-500 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 pr-8 pl-8 relative items-center justify-between">
<div className="flex flex-col items-start gap-1">
<div className="flex items-center gap-2 text-blue-400 mb-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
<span className="uppercase text-[10px] font-bold tracking-wide">Gemini</span>
</div>
<span className="text-xs font-light text-neutral-300 font-mono">Autonomy Integration</span>
</div>
<div className="text-right">
<span className="block text-4xl font-semibold tracking-tighter text-blue-100 text-glow-blue">52%</span>
</div>
</div>

<div className="flex-1 flex flex-row group/gpt hover:bg-emerald-900/5 transition-colors duration-500 bg-gradient-to-br from-[#3bf748]/5 via-[#0fb880]/0 to-[#44e975]/5 pr-8 pl-8 relative items-center justify-between">
<div className="flex flex-col gap-1 items-start">
<div className="flex items-center gap-2 text-emerald-400 mb-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-[10px] font-bold tracking-wide uppercase">ChatGPT</span>
</div>
<span className="text-xs font-light text-neutral-300 font-mono">Regulator Risks</span>
</div>
<div className="text-right">
<span className="block text-4xl font-semibold tracking-tighter text-emerald-100 text-glow-green">48%</span>
</div>
</div>
</div>
</div>

<div className="carousel-slide spotlight-card rounded-[2rem] card-shadow border border-white/5 flex flex-col overflow-hidden bg-neutral-900/60 backdrop-blur-2xl" data-stock="NVDA" style={{-MouseX: '-415.0999755859375px', -MouseY: '-239.8000030517578px'}}>
<div className="bg-center text-center bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover border-white/5 border-b pt-8 pr-8 pb-4 pl-8 relative">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative z-10">
<div className="flex mb-4 justify-center">
<span className="inline-flex items-center justify-center text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full">
<svg className="lucide lucide-chip" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h3"></path><path d="M2 15h3"></path><path d="M5 5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></path><path d="M9 9h6"></path><path d="M9 13h6"></path><path d="M19 9h3"></path><path d="M19 15h3"></path></svg>
</span>
</div>
<h1 className="text-2xl font-black text-white tracking-tight font-geist mb-2 animated-title"><span className="char-reveal"><span style={{animationDelay: '0s'}}>A</span></span><span className="char-reveal"><span style={{animationDelay: '0.05s'}}>I</span></span><span className="char-reveal" style={{width: '0.3em'}}><span style={{animationDelay: '0.1s'}}> </span></span><span className="char-reveal"><span style={{animationDelay: '0.15s'}}>V</span></span><span className="char-reveal"><span style={{animationDelay: '0.2s'}}>e</span></span><span className="char-reveal"><span style={{animationDelay: '0.25s'}}>r</span></span><span className="char-reveal"><span style={{animationDelay: '0.3s'}}>d</span></span><span className="char-reveal"><span style={{animationDelay: '0.35s'}}>i</span></span><span className="char-reveal"><span style={{animationDelay: '0.4s'}}>c</span></span><span className="char-reveal"><span style={{animationDelay: '0.45s'}}>t</span></span><span className="char-reveal"><span style={{animationDelay: '0.5s'}}>:</span></span><span className="char-reveal" style={{width: '0.3em'}}><span style={{animationDelay: '0.55s'}}> </span></span><span className="char-reveal"><span style={{animationDelay: '0.6s'}}>N</span></span><span className="char-reveal"><span style={{animationDelay: '0.65s'}}>V</span></span><span className="char-reveal"><span style={{animationDelay: '0.7s'}}>D</span></span><span className="char-reveal"><span style={{animationDelay: '0.75s'}}>A</span></span></h1>
<p className="text-sm font-medium text-neutral-300">Hardware &amp; AI Infrastructure</p>
</div>
</div>
<div className="flex-1 flex flex-col relative z-10">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent absolute top-1/2 -translate-y-1/2"></div>
<div className="border-beam-btn bg-neutral-950 border border-white/10 text-[10px] font-bold text-neutral-400 px-4 py-1.5 rounded-full uppercase tracking-widest pointer-events-auto cursor-pointer hover:text-white transition-colors">VS</div>
</div>
<div className="flex-1 flex flex-row hover:bg-blue-900/5 transition-colors duration-500 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 pr-8 pl-8 relative items-center justify-between">
<div className="flex flex-col items-start gap-1">
<div className="flex items-center gap-2 text-blue-400 mb-1"><span className="uppercase text-[10px] font-bold tracking-wide">Gemini</span></div>
<span className="text-xs font-light text-neutral-300 font-mono">Dominance</span>
</div>
<div className="text-right"><span className="block text-4xl font-semibold tracking-tighter text-blue-100 text-glow-blue">88%</span></div>
</div>
<div className="flex-1 flex flex-row hover:bg-emerald-900/5 transition-colors duration-500 bg-gradient-to-br from-[#3bf748]/5 via-[#0fb880]/0 to-[#44e975]/5 pr-8 pl-8 relative items-center justify-between">
<div className="flex flex-col gap-1 items-start">
<div className="flex items-center gap-2 text-emerald-400 mb-1"><span className="text-[10px] font-bold tracking-wide uppercase">ChatGPT</span></div>
<span className="text-xs font-light text-neutral-300 font-mono">Valuation</span>
</div>
<div className="text-right"><span className="block text-4xl font-semibold tracking-tighter text-emerald-100 text-glow-green">12%</span></div>
</div>
</div>
</div>

<div className="carousel-slide spotlight-card rounded-[2rem] card-shadow border border-white/5 flex flex-col overflow-hidden bg-neutral-900/60 backdrop-blur-2xl" data-stock="TSLA" style={{-MouseX: '-415.0999755859375px', -MouseY: '-239.8000030517578px'}}>
<div className="bg-center text-center bg-[url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover border-white/5 border-b pt-8 pr-8 pb-4 pl-8 relative">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="relative z-10">
<div className="flex mb-4 justify-center">
<span className="inline-flex items-center justify-center text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full">
<svg className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</span>
</div>
<h1 className="text-2xl font-black text-white tracking-tight font-geist mb-2 animated-title"><span className="char-reveal"><span style={{animationDelay: '0s'}}>A</span></span><span className="char-reveal"><span style={{animationDelay: '0.05s'}}>I</span></span><span className="char-reveal" style={{width: '0.3em'}}><span style={{animationDelay: '0.1s'}}> </span></span><span className="char-reveal"><span style={{animationDelay: '0.15s'}}>V</span></span><span className="char-reveal"><span style={{animationDelay: '0.2s'}}>e</span></span><span className="char-reveal"><span style={{animationDelay: '0.25s'}}>r</span></span><span className="char-reveal"><span style={{animationDelay: '0.3s'}}>d</span></span><span className="char-reveal"><span style={{animationDelay: '0.35s'}}>i</span></span><span className="char-reveal"><span style={{animationDelay: '0.4s'}}>c</span></span><span className="char-reveal"><span style={{animationDelay: '0.45s'}}>t</span></span><span className="char-reveal"><span style={{animationDelay: '0.5s'}}>:</span></span><span className="char-reveal" style={{width: '0.3em'}}><span style={{animationDelay: '0.55s'}}> </span></span><span className="char-reveal"><span style={{animationDelay: '0.6s'}}>T</span></span><span className="char-reveal"><span style={{animationDelay: '0.65s'}}>S</span></span><span className="char-reveal"><span style={{animationDelay: '0.7s'}}>L</span></span><span className="char-reveal"><span style={{animationDelay: '0.75s'}}>A</span></span></h1>
<p className="text-sm font-medium text-neutral-300">EV &amp; Robotics</p>
</div>
</div>
<div className="flex-1 flex flex-col relative z-10">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent absolute top-1/2 -translate-y-1/2"></div>
<div className="border-beam-btn bg-neutral-950 border border-white/10 text-[10px] font-bold text-neutral-400 px-4 py-1.5 rounded-full uppercase tracking-widest pointer-events-auto cursor-pointer hover:text-white transition-colors">VS</div>
</div>
<div className="flex-1 flex flex-row hover:bg-blue-900/5 transition-colors duration-500 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 pr-8 pl-8 relative items-center justify-between">
<div className="flex flex-col items-start gap-1">
<div className="flex items-center gap-2 text-blue-400 mb-1"><span className="uppercase text-[10px] font-bold tracking-wide">Gemini</span></div>
<span className="text-xs font-light text-neutral-300 font-mono">FSD Growth</span>
</div>
<div className="text-right"><span className="block text-4xl font-semibold tracking-tighter text-blue-100 text-glow-blue">65%</span></div>
</div>
<div className="flex-1 flex flex-row hover:bg-emerald-900/5 transition-colors duration-500 bg-gradient-to-br from-[#3bf748]/5 via-[#0fb880]/0 to-[#44e975]/5 pr-8 pl-8 relative items-center justify-between">
<div className="flex flex-col gap-1 items-start">
<div className="flex items-center gap-2 text-emerald-400 mb-1"><span className="text-[10px] font-bold tracking-wide uppercase">ChatGPT</span></div>
<span className="text-xs font-light text-neutral-300 font-mono">Delivery Miss</span>
</div>
<div className="text-right"><span className="block text-4xl font-semibold tracking-tighter text-emerald-100 text-glow-green">35%</span></div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-12 -translate-y-1/2 z-30 hidden md:block">
<button className="p-2 text-white/20 hover:text-white hover:bg-white/5 rounded-full transition-all hover:scale-110" id="prevBtn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
<div className="absolute top-1/2 -right-12 -translate-y-1/2 z-30 hidden md:block">
<button className="hover:text-white hover:bg-white/5 transition-all hover:scale-110 text-white/20 rounded-full pt-2 pr-2 pb-2 pl-2" id="nextBtn">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="absolute -bottom-16 left-0 right-0 p-4 flex justify-between items-center z-30">
<button className="md:hidden text-white/40 p-2" id="prevBtnMob"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<span className="text-[10px] uppercase flex items-center justify-center gap-2 font-light text-neutral-400 tracking-widest animate-pulse">
                    Swipe or Scroll <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</span>
<button className="md:hidden text-white/40 p-2" id="nextBtnMob"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="absolute bottom-6 left-0 right-0 w-full overflow-hidden marquee-container pointer-events-none">
<div className="marquee-content text-neutral-600">

<div className="flex gap-8 items-center text-sm font-semibold tracking-widest uppercase opacity-40">
<span>Bloomberg</span><span>Reuters</span><span>Nasdaq</span><span>AlphaVantage</span><span>Morningstar</span><span>S&amp;P Global</span><span>FactSet</span>
<span>Bloomberg</span><span>Reuters</span><span>Nasdaq</span><span>AlphaVantage</span><span>Morningstar</span><span>S&amp;P Global</span><span>FactSet</span>
<span>Bloomberg</span><span>Reuters</span><span>Nasdaq</span><span>AlphaVantage</span><span>Morningstar</span><span>S&amp;P Global</span><span>FactSet</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full snap-start relative flex items-center justify-center overflow-hidden p-6 bg-neutral-950">
<div className="opacity-30 z-0 absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-purple-900/10 to-transparent w-[600px] h-[600px] absolute top-0 right-0 blur-3xl"></div>
</div>
<div className="z-10 aspect-[3/4] card-shadow flex flex-col bg-neutral-900/40 w-full max-w-sm border-blue-500/20 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl spotlight-card reveal-on-scroll" style={{-MouseX: '-405.5px', -MouseY: '-1186.5px'}}>
<div className="flex mb-8 items-center justify-between reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-900/20">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
<span className="text-xs font-medium text-blue-400 tracking-wide">GEMINI 1.5</span>
</div>
</div>
<div className="mb-8 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<h2 className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">Verdict</h2>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-medium tracking-tight text-white">BUY</span>
<span className="h-px w-8 bg-blue-500/50"></span>
<span className="text-sm font-light text-neutral-400">Aggressive</span>
</div>
</div>
<div className="flex-1 relative reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
<div className="pl-6 space-y-6">
<div className="">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Technical Synergy</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                            Deep learning models indicate a breakout pattern. The integration of autonomous logistics is a defensible moat against localized competition.
                        </p>
</div>
<div className="">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Sentiment Data</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                            Alternative data from satellite imagery and credit card transaction volume suggests 14% QoQ growth.
                        </p>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-[10px] text-blue-400/60 font-light reveal-on-scroll" style={{transitionDelay: '400ms'}}>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="">Confidence Score: 8.5/10</span>
</div>
</div>
</section>

<section className="min-h-screen w-full snap-start relative flex items-center justify-center overflow-hidden p-6 bg-neutral-950">
<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-green-900/10 to-transparent blur-3xl"></div>
</div>
<div className="aspect-[3/4] card-shadow flex flex-col bg-neutral-900/40 w-full max-w-sm z-10 border-emerald-500/20 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl spotlight-card reveal-on-scroll" style={{-MouseX: '-405.5px', -MouseY: '-2135.5px'}}>
<div className="flex items-center justify-between mb-8 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="p-3 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl shadow-lg shadow-emerald-900/20">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
<span className="text-xs font-medium text-emerald-400 tracking-wide">GPT-4o</span>
</div>
</div>
<div className="mb-8 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<h2 className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-2">Verdict</h2>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-medium tracking-tight text-white">HOLD</span>
<span className="h-px w-8 bg-emerald-500/50"></span>
<span className="text-sm font-light text-neutral-400">Defensive</span>
</div>
</div>
<div className="flex-1 relative reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
<div className="pl-6 space-y-6">
<div className="">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Macro Headwinds</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                            Consumer discretionary spending is tightening. The risk/reward ratio at current P/E multiples is unfavorable compared to treasury yields.
                        </p>
</div>
<div className="">
<h3 className="text-sm font-medium text-neutral-200 mb-2">Competitive Moat</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                            While dominant, pricing power is capped by new entrants in key Asian markets. Wait for a pullback to 200-day EMA.
                        </p>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-[10px] text-emerald-400/60 font-light reveal-on-scroll" style={{transitionDelay: '400ms'}}>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span>Risk Factor: High</span>
</div>
</div>
</section>


    </>
  );
}
