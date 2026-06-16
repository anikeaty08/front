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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            
            gsap.registerPlugin(ScrollTrigger);

            // 1. NAVBAR MORPH LOGIC
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.remove('bg-transparent', 'text-[#F2F0E9]', 'border-transparent');
                    nav.classList.add('bg-white/80', 'backdrop-blur-md', 'text-[#1A1A1A]', 'border-[#1A1A1A]/10');
                    nav.querySelector('button').classList.replace('bg-white/10', 'bg-[#1A1A1A]');
                    nav.querySelector('button').classList.replace('text-[#F2F0E9]', 'text-[#F2F0E9]');
                    nav.querySelector('button').classList.replace('border-white/10', 'border-transparent');
                } else {
                    nav.classList.add('bg-transparent', 'text-[#F2F0E9]', 'border-transparent');
                    nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'text-[#1A1A1A]', 'border-[#1A1A1A]/10');
                    nav.querySelector('button').classList.replace('bg-[#1A1A1A]', 'bg-white/10');
                    nav.querySelector('button').classList.replace('border-transparent', 'border-white/10');
                }
            });

            // 2. HERO GSAP FADE UP
            gsap.fromTo('.hero-anim', 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );

            // 3. ACADEMY SHUFFLER
            const cards = Array.from(document.querySelectorAll('.shuffler-card'));
            let order = [0, 1, 2];
            
            function updateCards() {
                cards.forEach((card, i) => {
                    const posIndex = order.indexOf(i);
                    const yOffset = posIndex * 20; 
                    const scale = 1 - (posIndex * 0.08);
                    const opacity = 1 - (posIndex * 0.4);
                    const zIndex = 3 - posIndex;
                    
                    card.style.transform = `translateY(${yOffset}px) scale(${scale})`;
                    card.style.opacity = opacity;
                    card.style.zIndex = zIndex;
                });
            }
            updateCards(); 
            setInterval(() => {
                order.unshift(order.pop());
                updateCards();
            }, 3000);

            // 4. MOCK CURSOR SCHEDULE PREVIEW
            const cursor = document.getElementById('mock-cursor');
            const targetDay = document.getElementById('target-day');
            const saveBtn = document.getElementById('save-btn');
            
            setTimeout(() => {
                const tlCursor = gsap.timeline({ repeat: -1, repeatDelay: 1 });
                
                const containerRect = cursor.parentElement.getBoundingClientRect();
                const dayRect = targetDay.getBoundingClientRect();
                const btnRect = saveBtn.getBoundingClientRect();
                
                const dayX = dayRect.left - containerRect.left + (dayRect.width/2);
                const dayY = dayRect.top - containerRect.top + (dayRect.height/2);
                
                const btnX = btnRect.left - containerRect.left + (btnRect.width/2);
                const btnY = btnRect.top - containerRect.top + (btnRect.height/2);

                tlCursor
                    .to(cursor, { top: dayY, left: dayX, duration: 1.5, ease: "power2.inOut" })
                    .to(cursor, { scale: 0.8, duration: 0.1 }) 
                    .to(targetDay, { backgroundColor: '#CC5833', duration: 0.2 }, "<") 
                    .to(cursor, { scale: 1, duration: 0.1 }) 
                    .to(cursor, { top: btnY, left: btnX, duration: 1, ease: "power2.inOut", delay: 0.5 })
                    .to(cursor, { scale: 0.8, duration: 0.1 }) 
                    .to(saveBtn, { scale: 0.95, duration: 0.1 }, "<")
                    .to(cursor, { scale: 1, duration: 0.1 }) 
                    .to(saveBtn, { scale: 1, duration: 0.1 }, "<")
                    .to(cursor, { top: '80%', left: '80%', duration: 1.5, ease: "power2.inOut", delay: 0.5 })
                    .to(targetDay, { backgroundColor: '#F2F0E9', duration: 0.5 }, "-=1"); 
            }, 1000);

            // 5. PHILOSOPHY SPLIT TEXT REVEAL
            function setupSplitText(selector) {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    const text = el.innerText;
                    el.innerHTML = '';
                    const words = text.split(' ');
                    words.forEach((word, index) => {
                        const wordWrap = document.createElement('span');
                        wordWrap.className = 'word-wrap';
                        const wordInner = document.createElement('span');
                        wordInner.className = 'word-inner';
                        wordInner.innerText = word + (index < words.length - 1 ? '\u00A0' : ''); 
                        wordWrap.appendChild(wordInner);
                        el.appendChild(wordWrap);
                    });
                });
            }
            
            setupSplitText('.reveal-text');
            setupSplitText('.reveal-text-main');

            gsap.utils.toArray('.reveal-text .word-inner').forEach((word, i) => {
                gsap.to(word, {
                    y: '0%',
                    ease: 'power3.out',
                    duration: 1,
                    scrollTrigger: {
                        trigger: '#manifesto',
                        start: 'top 60%',
                    },
                    delay: i * 0.05
                });
            });

            gsap.utils.toArray('.reveal-text-main .word-inner').forEach((word, i) => {
                gsap.to(word, {
                    y: '0%',
                    ease: 'power4.out',
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: '#manifesto',
                        start: 'top 50%',
                    },
                    delay: (i * 0.08) + 0.3
                });
            });

            // Parallax BG
            gsap.to('#parallax-bg', {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '#manifesto',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // 6. PROGRAM STICKY STACKING ARCHIVE
            const protocolCards = gsap.utils.toArray('.protocol-card');
            
            protocolCards.forEach((card, i) => {
                if (i === 0) return; 
                
                const prevCard = protocolCards[i - 1];
                const prevContent = prevCard.querySelector('.protocol-content');
                
                gsap.to(prevContent, {
                    scale: 0.9,
                    filter: 'blur(10px)',
                    opacity: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                });
            });

            // 7. TECHNIQUE VIEWER ANIMATION (Subtle breathing/stance shift)
            gsap.to("#wireframe-figure", {
                y: 3,
                scaleY: 0.98,
                transformOrigin: "center bottom",
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut"
            });
            gsap.to("#arm-left", { rotation: -5, transformOrigin: "right bottom", repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
            gsap.to("#arm-right", { rotation: 5, transformOrigin: "left bottom", repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl bg-transparent text-[#F2F0E9] border border-transparent" id="navbar">
<div className="font-['Outfit',sans-serif] font-normal tracking-[0.15em] text-sm uppercase">
            SUNNAH SKILLS
        </div>
<div className="hidden md:flex items-center gap-8 font-normal text-xs tracking-wide uppercase">
<a className="hover:opacity-70 transition-opacity" href="#programs">Programs</a>
<a className="hover:opacity-70 transition-opacity" href="#schedule">Schedule</a>
<a className="hover:opacity-70 transition-opacity" href="#manifesto">About</a>
<a className="hover:opacity-70 transition-opacity" href="#enrollment">Contact</a>
</div>
<button className="font-normal text-xs uppercase tracking-wide px-5 py-2.5 rounded-full backdrop-blur-sm transition-colors border bg-white/10 hover:bg-white/20 border-white/10">
            Join Now
        </button>
</nav>

<header className="relative h-[100dvh] w-full overflow-hidden flex items-end">
<div className="absolute inset-0 w-full h-full">
<img alt="Martial Arts Training" className="w-full h-full object-cover object-center grayscale brightness-75 contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#2E4036]/50 via-[#2E4036]/80 to-[#1A1A1A]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32">
<div className="max-w-4xl hero-content">
<p className="hero-anim text-[#CC5833] font-['JetBrains_Mono',monospace] text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#CC5833] animate-pulse"></span>
                    System Initialized
                </p>
<h1 className="flex flex-col gap-2">
<span className="hero-anim font-['Outfit',sans-serif] font-normal text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-[#F2F0E9] leading-none">
                        Built Through
                    </span>
<span className="hero-anim font-['Cormorant_Garamond',serif] italic font-normal text-6xl md:text-8xl lg:text-[8rem] tracking-tight text-[#F2F0E9] leading-none mt-2 pr-4">
                        Discipline.
                    </span>
</h1>
<p className="hero-anim mt-10 text-[#F2F0E9]/70 font-['Plus_Jakarta_Sans',sans-serif] font-light text-sm md:text-base max-w-lg leading-relaxed">
                    Train the body. Shape the character. Brazilian Jiu-Jitsu, archery, outdoor skills, and bullyproofing taught through a structured youth development system.
                </p>
<div className="hero-anim mt-12 flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3.5 rounded-full bg-[#CC5833] text-[#F2F0E9] text-xs font-normal uppercase tracking-wide hover:bg-[#CC5833]/90 transition-colors">
                        Explore Programs
                    </button>
<button className="px-8 py-3.5 rounded-full border border-[#F2F0E9]/20 text-[#F2F0E9] text-xs font-normal uppercase tracking-wide hover:bg-[#F2F0E9]/10 transition-colors">
                        View Schedule
                    </button>
</div>
</div>
</div>
</header>

<section className="py-32 bg-[#F2F0E9] relative z-20 rounded-t-[3rem] -mt-10 overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="font-['Outfit',sans-serif] font-normal text-3xl md:text-5xl tracking-tight text-[#1A1A1A]">Academy Telemetry</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-[#2E4036]/10 rounded-[2rem] p-8 h-[28rem] relative flex flex-col bg-white">
<div className="flex items-center justify-between mb-8">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#2E4036] uppercase tracking-wider">Snapshot</span>
<iconify-icon className="text-xl text-[#2E4036]/50" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative flex-1 flex justify-center items-center mt-4 perspective-[1000px]" id="shuffler-container">

<div className="shuffler-card absolute w-full max-w-[200px] bg-[#F2F0E9] border border-[#2E4036]/10 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-2">
<span className="text-xs text-[#1A1A1A]/60 uppercase tracking-wide">Active Roster</span>
<span className="font-['Cormorant_Garamond',serif] italic text-4xl text-[#2E4036]">85+</span>
</div>
<div className="shuffler-card absolute w-full max-w-[200px] bg-[#F2F0E9] border border-[#2E4036]/10 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-2">
<span className="text-xs text-[#1A1A1A]/60 uppercase tracking-wide">Age Range</span>
<span className="font-['Cormorant_Garamond',serif] italic text-4xl text-[#2E4036]">6–17</span>
</div>
<div className="shuffler-card absolute w-full max-w-[200px] bg-[#F2F0E9] border border-[#2E4036]/10 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-2">
<span className="text-xs text-[#1A1A1A]/60 uppercase tracking-wide">Parent Rating</span>
<span className="font-['Cormorant_Garamond',serif] italic text-4xl text-[#2E4036]">4.9/5</span>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-[2rem] p-8 h-[28rem] flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 wireframe-grid opacity-30"></div>
<div className="scanner-line"></div>
<div className="flex items-center justify-between mb-auto relative z-10">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#CC5833] animate-pulse shadow-[0_0_8px_rgba(204,88,51,0.6)]"></span>
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#F2F0E9]/70 uppercase tracking-wider">Technique Viewer</span>
</div>
<iconify-icon className="text-xl text-[#F2F0E9]/30" icon="solar:body-shape-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="relative z-10 h-full flex items-center justify-center mt-4">
<svg className="w-full h-full max-w-[180px] drop-shadow-[0_0_12px_rgba(204,88,51,0.3)]" viewbox="0 0 200 200">

<circle cx="100" cy="100" fill="none" r="80" stroke="#2E4036" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="100" cy="100" fill="none" r="40" stroke="#2E4036" strokeWidth="0.5"></circle>

<g fill="none" id="wireframe-figure" stroke="#CC5833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">

<path d="M 60 140 L 100 110 L 140 140" stroke="#F2F0E9" stroke-opacity="0.3"></path>
<circle cx="100" cy="110" fill="#F2F0E9" opacity="0.3" r="3" stroke="none"></circle>

<path d="M 100 160 L 70 120 L 95 90" id="leg-left"></path>
<path d="M 100 160 L 130 120 L 105 90" id="leg-right"></path>
<path d="M 100 160 L 100 80" id="torso"></path>
<path d="M 100 90 L 60 70" id="arm-left"></path>
<path d="M 100 90 L 140 70" id="arm-right"></path>

<circle cx="100" cy="160" fill="#CC5833" r="2.5"></circle> 
<circle className="node-active" cx="100" cy="80" fill="#CC5833" r="3.5"></circle> 
<circle cx="70" cy="120" fill="#CC5833" r="2"></circle> 
<circle cx="130" cy="120" fill="#CC5833" r="2"></circle> 
<circle cx="60" cy="70" fill="#CC5833" r="2"></circle> 
<circle cx="140" cy="70" fill="#CC5833" r="2"></circle> 
</g>
</svg>

<div className="absolute bottom-4 left-0 right-0 flex justify-between px-2 font-['JetBrains_Mono',monospace] text-[9px] text-[#F2F0E9]/50 uppercase">
<span>Base: Locked</span>
<span className="text-[#CC5833]">Posture: 98%</span>
</div>
</div>
</div>

<div className="border border-[#2E4036]/10 rounded-[2rem] p-8 h-[28rem] flex flex-col relative overflow-hidden bg-white" id="schedule">
<div className="flex items-center justify-between mb-8">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#2E4036] uppercase tracking-wider">Schedule</span>
<iconify-icon className="text-xl text-[#2E4036]/50" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="grid grid-cols-7 gap-1.5 w-full mt-4">
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">S</div>
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">M</div>
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">T</div>
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">W</div>
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">T</div>
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">F</div>
<div className="text-[10px] text-center text-[#1A1A1A]/40 mb-2 font-['Outfit',sans-serif]">S</div>

<div className="aspect-square rounded-md bg-[#F2F0E9] border border-[#2E4036]/5"></div>
<div className="aspect-square rounded-md bg-[#2E4036]/5 border border-[#2E4036]/10 relative"><span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-[#CC5833]"></span></div>
<div className="aspect-square rounded-md bg-[#F2F0E9] border border-[#2E4036]/5 relative" id="target-day"></div>
<div className="aspect-square rounded-md bg-[#2E4036]/5 border border-[#2E4036]/10 relative"><span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-[#CC5833]"></span></div>
<div className="aspect-square rounded-md bg-[#F2F0E9] border border-[#2E4036]/5"></div>
<div className="aspect-square rounded-md bg-[#2E4036]/5 border border-[#2E4036]/10 relative"><span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-[#2E4036]"></span></div>
<div className="aspect-square rounded-md bg-[#F2F0E9] border border-[#2E4036]/5"></div>
</div>
<div className="mt-4 text-[10px] font-['Plus_Jakarta_Sans',sans-serif] text-[#1A1A1A]/60 flex flex-col gap-1.5">
<div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#CC5833]"></span> BJJ Fundamentals</div>
<div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2E4036]"></span> Archery Skills</div>
</div>
<div className="mt-auto pt-4 flex justify-between items-center border-t border-[#2E4036]/5">
<div className="text-xs text-[#1A1A1A]/60 font-light">Current Block</div>
<div className="text-[10px] uppercase tracking-wider font-normal bg-[#2E4036] text-[#F2F0E9] px-4 py-2 rounded-full transition-transform" id="save-btn">View Full</div>
</div>

<svg className="absolute w-5 h-5 drop-shadow-md z-20 pointer-events-none" fill="none" id="mock-cursor" style={{top: '80%', left: '80%', transform: 'translate(-50%, -50%)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L10.3704 21.8385C10.603 22.4897 11.5367 22.4716 11.7423 21.8122L14.2885 13.6331C14.3828 13.3303 14.6158 13.0907 14.9163 12.9877L23.0134 10.213C23.6661 9.9894 23.6698 9.05607 23.018 8.82855L4 4Z" fill="#1A1A1A" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#1A1A1A] text-[#F2F0E9] relative overflow-hidden rounded-[3rem] mx-2 md:mx-6 my-10" id="manifesto">

<div className="absolute inset-0 z-0">
<img alt="Forest Texture" className="w-full h-[120%] object-cover opacity-20 filter grayscale" id="parallax-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1A1A1A]/80 mix-blend-multiply"></div>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<p className="font-['JetBrains_Mono',monospace] text-sm text-[#2E4036] mb-12 uppercase tracking-widest font-normal">The Philosophy</p>
<h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl md:text-3xl text-[#F2F0E9]/50 mb-8 font-light tracking-tight reveal-text">
                Most programs keep children busy.
            </h3>
<h2 className="font-['Cormorant_Garamond',serif] italic font-normal text-4xl md:text-6xl lg:text-[5.5rem] tracking-tight leading-[1.1] text-[#F2F0E9] reveal-text-main mt-4">
                We build discipline.
            </h2>
<p className="mt-10 font-['Plus_Jakarta_Sans',sans-serif] font-light text-[#F2F0E9]/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed reveal-text">
                Strength without character is incomplete. Character without training is fragile. Sunnah Skills develops confidence, restraint, and capability through serious, structured training.
            </p>
</div>
</section>

<section className="relative bg-[#F2F0E9] pb-32" id="programs">
<div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
<h2 className="font-['Outfit',sans-serif] font-normal text-3xl md:text-5xl tracking-tight text-[#1A1A1A]">Core Curriculum</h2>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '10'}}>
<div className="protocol-content w-full max-w-5xl border border-[#2E4036]/10 rounded-[3rem] h-[80vh] shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative bg-white">
<div className="flex-1 z-10">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#2E4036] uppercase tracking-wider mb-4 block">Discipline 01</span>
<h3 className="font-['Outfit',sans-serif] font-normal text-4xl tracking-tight text-[#1A1A1A] mb-6">Brazilian Jiu-Jitsu</h3>
<p className="text-[#1A1A1A]/70 font-['Plus_Jakarta_Sans',sans-serif] font-light text-sm md:text-base max-w-md leading-relaxed mb-6">
                        The ultimate physical metaphor for problem-solving. We teach leverage over force, composure under intense pressure, and discipline through rigorous repetition.
                    </p>
<ul className="text-xs font-['JetBrains_Mono',monospace] text-[#1A1A1A]/50 space-y-2 uppercase tracking-wide">
<li>+ Leverage Mechanics</li>
<li>+ Pressure Composure</li>
<li>+ Technical Escapes</li>
</ul>
</div>
<div className="flex-1 relative h-full flex items-center justify-center min-h-[300px]">
<svg className="w-64 h-64 text-[#2E4036]/10 animate-spin-slow" viewbox="0 0 200 200">
<path d="M100 20 C140 20, 180 60, 180 100 C180 140, 140 180, 100 180 C60 180, 20 140, 20 100 C20 60, 60 20, 100 20 Z" fill="none" stroke="currentColor" stroke-dasharray="10 10" strokeWidth="2"></path>
<path d="M100 40 C130 40, 160 70, 160 100 C160 130, 130 160, 100 160 C70 160, 40 130, 40 100 C40 70, 70 40, 100 40 Z" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="100" cy="20" fill="#CC5833" opacity="0.5" r="4"></circle>
<circle cx="100" cy="180" fill="#CC5833" opacity="0.5" r="4"></circle>
</svg>
<iconify-icon className="text-7xl text-[#1A1A1A] absolute opacity-20" icon="solar:shield-user-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '20'}}>
<div className="protocol-content w-full max-w-5xl bg-[#2E4036] border border-[#1A1A1A]/20 rounded-[3rem] h-[80vh] shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative text-[#F2F0E9]">
<div className="flex-1 z-10">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#CC5833] uppercase tracking-wider mb-4 block">Discipline 02</span>
<h3 className="font-['Outfit',sans-serif] font-normal text-4xl tracking-tight text-[#F2F0E9] mb-6">Archery</h3>
<p className="text-[#F2F0E9]/70 font-['Plus_Jakarta_Sans',sans-serif] font-light text-sm md:text-base max-w-md leading-relaxed mb-6">
                        Mastery of the mind and breath. Archery demands patience, perfect biomechanical alignment, and stillness under absolute focus.
                    </p>
<ul className="text-xs font-['JetBrains_Mono',monospace] text-[#F2F0E9]/50 space-y-2 uppercase tracking-wide">
<li>+ Biomechanical Alignment</li>
<li>+ Breath Control</li>
<li>+ Target Fixation</li>
</ul>
</div>
<div className="flex-1 relative w-full h-full min-h-[300px] bg-[#1A1A1A]/40 rounded-3xl overflow-hidden flex items-center justify-center border border-[#F2F0E9]/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,26,26,0.8)_100%)]"></div>
<svg className="w-full h-full absolute opacity-20" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="#F2F0E9" strokeWidth="0.5"></circle>
<circle cx="100" cy="100" fill="none" r="60" stroke="#F2F0E9" strokeWidth="0.5"></circle>
<circle cx="100" cy="100" fill="none" r="40" stroke="#F2F0E9" strokeWidth="0.5"></circle>
<line stroke="#F2F0E9" stroke-dasharray="2 4" strokeWidth="0.5" x1="100" x2="100" y1="0" y2="200"></line>
<line stroke="#F2F0E9" stroke-dasharray="2 4" strokeWidth="0.5" x1="0" x2="200" y1="100" y2="100"></line>
</svg>
<iconify-icon className="text-7xl text-[#CC5833] z-10" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '30'}}>
<div className="protocol-content w-full max-w-5xl bg-[#1A1A1A] border border-[#2E4036]/20 rounded-[3rem] h-[80vh] shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative text-[#F2F0E9]">
<div className="flex-1 z-10">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#2E4036] uppercase tracking-wider mb-4 block">Discipline 03</span>
<h3 className="font-['Outfit',sans-serif] font-normal text-4xl tracking-tight text-[#F2F0E9] mb-6">Outdoor Skills</h3>
<p className="text-[#F2F0E9]/70 font-['Plus_Jakarta_Sans',sans-serif] font-light text-sm md:text-base max-w-md leading-relaxed mb-6">
                        Returning to the origin of human capability. Developing practical readiness, deep resilience, and leadership through teamwork and problem solving in nature.
                    </p>
<ul className="text-xs font-['JetBrains_Mono',monospace] text-[#F2F0E9]/50 space-y-2 uppercase tracking-wide">
<li>+ Practical Readiness</li>
<li>+ Environmental Resilience</li>
<li>+ Group Leadership</li>
</ul>
</div>
<div className="flex-1 relative w-full h-full flex items-center justify-center min-h-[300px]">
<svg className="w-full h-full opacity-30" viewbox="0 0 200 200">

<path d="M20 100 Q 60 50, 100 100 T 180 100" fill="none" stroke="#2E4036" strokeWidth="2"></path>
<path d="M10 120 Q 50 70, 90 120 T 190 120" fill="none" stroke="#2E4036" strokeWidth="1"></path>
<path d="M30 80 Q 70 30, 110 80 T 170 80" fill="none" stroke="#2E4036" strokeWidth="1"></path>
<path d="M 0 100 L 200 100" fill="none" stroke="#CC5833" stroke-dasharray="4 4" strokeWidth="0.5"></path>
<circle cx="100" cy="100" fill="#CC5833" r="3"></circle>
</svg>
<iconify-icon className="absolute text-5xl text-[#F2F0E9]/50" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '40'}}>
<div className="protocol-content w-full max-w-5xl bg-[#CC5833] border border-[#1A1A1A]/20 rounded-[3rem] h-[80vh] shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative text-[#F2F0E9]">
<div className="flex-1 z-10">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#1A1A1A]/60 uppercase tracking-wider mb-4 block">Discipline 04</span>
<h3 className="font-['Outfit',sans-serif] font-normal text-4xl tracking-tight text-[#F2F0E9] mb-6">Bullyproofing</h3>
<p className="text-[#F2F0E9]/90 font-['Plus_Jakarta_Sans',sans-serif] font-light text-sm md:text-base max-w-md leading-relaxed mb-6">
                        Confidence is the best defense. We instill strong posture, verbal de-escalation, precise distance awareness, and the physical capability for self-protection.
                    </p>
<ul className="text-xs font-['JetBrains_Mono',monospace] text-[#1A1A1A]/60 space-y-2 uppercase tracking-wide">
<li>+ Verbal De-escalation</li>
<li>+ Distance Management</li>
<li>+ Defensive Posture</li>
</ul>
</div>
<div className="flex-1 relative w-full h-full flex items-center justify-center min-h-[300px]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border-2 border-[#F2F0E9]/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute w-48 h-48 rounded-full border border-[#F2F0E9]/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
<iconify-icon className="text-8xl text-[#1A1A1A]/40 z-10 relative" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F2F0E9]" id="enrollment">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-['Outfit',sans-serif] font-normal text-3xl md:text-5xl tracking-tight text-[#1A1A1A] mb-4">Enrollment Tracks</h2>
<p className="text-[#1A1A1A]/60 font-['Plus_Jakarta_Sans',sans-serif] font-light text-sm">Select the appropriate development stage for your child.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="border border-[#1A1A1A]/10 rounded-[2rem] p-10 flex flex-col items-start shadow-sm bg-white h-full">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#1A1A1A]/50 uppercase tracking-wider mb-2">Ages 6–9</span>
<h4 className="font-['Outfit',sans-serif] text-2xl text-[#1A1A1A] mb-2 font-normal">Foundations</h4>
<p className="text-xs font-light text-[#1A1A1A]/60 mb-8 border-b border-[#1A1A1A]/10 pb-6 w-full">Focus, basic coordination, and introduction to discipline.</p>
<ul className="space-y-4 text-sm font-light text-[#1A1A1A]/70 mb-10 w-full flex-grow">
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> Intro to BJJ Mechanics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> Bullyproof Posture Basics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> 2x Sessions / Week</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#1A1A1A]/20 text-xs uppercase tracking-wide font-normal hover:bg-[#1A1A1A] hover:text-[#F2F0E9] transition-colors mt-auto">Learn More</button>
</div>

<div className="bg-[#2E4036] text-[#F2F0E9] border border-[#2E4036] rounded-[2.5rem] p-12 flex flex-col items-start shadow-2xl relative transform md:scale-105 z-10 h-[105%]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CC5833] text-[#F2F0E9] text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-['JetBrains_Mono',monospace]">Core Focus</div>
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#F2F0E9]/50 uppercase tracking-wider mb-2">Ages 10–13</span>
<h4 className="font-['Outfit',sans-serif] text-3xl text-[#F2F0E9] mb-2 font-normal">Development</h4>
<p className="text-xs font-light text-[#F2F0E9]/60 mb-8 border-b border-[#F2F0E9]/10 pb-6 w-full">Technical growth, active pressure testing, and real-world application.</p>
<ul className="space-y-4 text-sm font-light text-[#F2F0E9]/80 mb-10 w-full flex-grow">
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Advanced BJJ Concepts</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Archery &amp; Alignment Focus</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Live De-escalation Drills</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> 3x Sessions / Week</li>
</ul>
<button className="magnetic-btn w-full py-4 rounded-full bg-[#CC5833] text-[#F2F0E9] text-xs uppercase tracking-wide font-normal mt-auto">View Schedule</button>
</div>

<div className="border border-[#1A1A1A]/10 rounded-[2rem] p-10 flex flex-col items-start shadow-sm bg-white h-full">
<span className="font-['JetBrains_Mono',monospace] text-xs text-[#1A1A1A]/50 uppercase tracking-wider mb-2">Ages 14–17</span>
<h4 className="font-['Outfit',sans-serif] text-2xl text-[#1A1A1A] mb-2 font-normal">Leadership</h4>
<p className="text-xs font-light text-[#1A1A1A]/60 mb-8 border-b border-[#1A1A1A]/10 pb-6 w-full">Advanced capability, outdoor reliance, and guiding younger peers.</p>
<ul className="space-y-4 text-sm font-light text-[#1A1A1A]/70 mb-10 w-full flex-grow">
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> Competitive BJJ Prep (Opt)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> Outdoor Survival Skills</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> Mentorship Roles</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2E4036]" icon="solar:check-circle-linear"></iconify-icon> Unlimited Sessions</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#1A1A1A]/20 text-xs uppercase tracking-wide font-normal hover:bg-[#1A1A1A] hover:text-[#F2F0E9] transition-colors mt-auto">Contact Us</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#1A1A1A]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h3 className="font-['Outfit',sans-serif] text-2xl md:text-3xl text-[#1A1A1A] tracking-tight font-normal">Parent Validation</h3>
<p className="font-['JetBrains_Mono',monospace] text-xs text-[#2E4036] uppercase tracking-wider mt-2">Verified Output</p>
</div>
<div className="flex gap-2">
<iconify-icon className="text-2xl text-[#CC5833]" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-2xl text-[#CC5833]" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-2xl text-[#CC5833]" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-2xl text-[#CC5833]" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-2xl text-[#CC5833]" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-[1.5rem] bg-[#F2F0E9] border border-[#1A1A1A]/5">
<p className="font-['Cormorant_Garamond',serif] text-lg text-[#1A1A1A] leading-relaxed italic mb-6">"The change in his posture alone is remarkable. He approaches conflict with calm now, not anger. It's truly structured discipline."</p>
<div className="flex items-center justify-between mt-auto">
<div className="font-['Outfit',sans-serif] text-sm text-[#1A1A1A]">Sarah M.</div>
<div className="text-[10px] font-['JetBrains_Mono',monospace] text-[#1A1A1A]/40 uppercase tracking-widest">Ages 10-13</div>
</div>
</div>
<div className="p-8 rounded-[1.5rem] bg-[#1A1A1A] text-[#F2F0E9]">
<p className="font-['Cormorant_Garamond',serif] text-lg text-[#F2F0E9] leading-relaxed italic mb-6">"Unlike regular after-school sports, there is a clear philosophical framework here. They aren't just sweating; they are learning resilience."</p>
<div className="flex items-center justify-between mt-auto">
<div className="font-['Outfit',sans-serif] text-sm text-[#F2F0E9]">David R.</div>
<div className="text-[10px] font-['JetBrains_Mono',monospace] text-[#F2F0E9]/40 uppercase tracking-widest">Ages 14-17</div>
</div>
</div>
<div className="p-8 rounded-[1.5rem] bg-[#F2F0E9] border border-[#1A1A1A]/5">
<p className="font-['Cormorant_Garamond',serif] text-lg text-[#1A1A1A] leading-relaxed italic mb-6">"The bullyproofing program gave my daughter the exact words and stance she needed. I feel so much more confident sending her to school."</p>
<div className="flex items-center justify-between mt-auto">
<div className="font-['Outfit',sans-serif] text-sm text-[#1A1A1A]">Aisha K.</div>
<div className="text-[10px] font-['JetBrains_Mono',monospace] text-[#1A1A1A]/40 uppercase tracking-widest">Ages 6-9</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-[#F2F0E9] rounded-t-[4rem] pt-24 pb-12 px-6 relative z-10">
<div className="max-w-7xl mx-auto mb-24 text-center">
<h2 className="font-['Outfit',sans-serif] font-normal text-4xl md:text-6xl tracking-tight text-[#F2F0E9] mb-10">Begin the Training.</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 rounded-full bg-[#CC5833] text-[#F2F0E9] text-xs font-normal uppercase tracking-wide hover:bg-[#CC5833]/90 transition-colors">
                    Explore Programs
                </button>
<button className="px-8 py-4 rounded-full border border-[#F2F0E9]/20 text-[#F2F0E9] text-xs font-normal uppercase tracking-wide hover:bg-[#F2F0E9]/10 transition-colors">
                    Contact Us
                </button>
<button className="px-8 py-4 rounded-full border border-transparent text-[#F2F0E9]/70 hover:text-[#F2F0E9] text-xs font-normal uppercase tracking-wide transition-colors">
                    About Us
                </button>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-20 gap-10 border-t border-[#F2F0E9]/10 pt-20">
<div>
<div className="font-['Outfit',sans-serif] font-normal tracking-[0.15em] text-xl uppercase mb-6">SUNNAH SKILLS</div>
<div className="flex items-center gap-3 mt-4">
<span className="w-2 h-2 rounded-full bg-[#CC5833] animate-pulse shadow-[0_0_8px_rgba(204,88,51,0.6)]"></span>
<span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#F2F0E9]/50 uppercase tracking-widest">Enrollment Open</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-24 text-xs font-['Plus_Jakarta_Sans',sans-serif] font-light text-[#F2F0E9]/70">
<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono',monospace] uppercase text-[#2E4036] tracking-wider mb-2 text-[10px]">Location</span>
<p>124 Main Training Hall<br/>Metro District, NY 10012</p>
</div>
<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono',monospace] uppercase text-[#2E4036] tracking-wider mb-2 text-[10px]">Structure</span>
<p>Ages 6 to 17<br/>Mon - Sat Schedules<br/>4 Core Disciplines</p>
</div>
<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono',monospace] uppercase text-[#2E4036] tracking-wider mb-2 text-[10px]">Connect</span>
<p>info@sunnahskills.com<br/>+1 (555) 234-5678</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#F2F0E9]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-['JetBrains_Mono',monospace] text-[#F2F0E9]/30 uppercase tracking-widest">
<p>© 2024 Sunnah Skills Academy. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-[#F2F0E9]/80 transition-colors" href="#">Terms</a>
<a className="hover:text-[#F2F0E9]/80 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>



    </>
  );
}
