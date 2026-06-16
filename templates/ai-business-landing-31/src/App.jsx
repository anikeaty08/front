import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();

        // Looping Typewriter effect
        (function() {
            const phrases = [
                "Quickly Make Smarter Business Decisions",
                "Automate Workflows With Intelligent AI",
                "Scale Your Operations Effortlessly",
                "Unlock Real-Time Financial Insights"
            ];
            const el = document.getElementById('typewriter-text');
            const subtitle = document.getElementById('subtitle-text');
            const buttons = document.getElementById('buttons-row');
            
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let subtitleShown = false;
            
            const typeSpeed = 55;
            const deleteSpeed = 30;
            const pauseAfterType = 2000;
            const pauseAfterDelete = 400;

            function tick() {
                const currentPhrase = phrases[phraseIndex];
                
                if (!isDeleting) {
                    el.textContent = currentPhrase.substring(0, charIndex + 1);
                    charIndex++;
                    
                    if (charIndex === currentPhrase.length) {
                        isDeleting = true;
                        
                        if (!subtitleShown) {
                            subtitleShown = true;
                            subtitle.style.animationPlayState = 'running';
                            subtitle.style.animationDelay = '0.1s';
                            buttons.style.animationPlayState = 'running';
                            buttons.style.animationDelay = '0.3s';
                        }
                        
                        setTimeout(tick, pauseAfterType);
                        return;
                    }
                    
                    const variance = Math.random() * 30 - 10;
                    const nextSpeed = currentPhrase.charAt(charIndex - 1) === ' ' ? typeSpeed + 40 : typeSpeed + variance;
                    setTimeout(tick, Math.max(25, nextSpeed));
                    
                } else {
                    el.textContent = currentPhrase.substring(0, charIndex - 1);
                    charIndex--;
                    
                    if (charIndex === 0) {
                        isDeleting = false;
                        phraseIndex = (phraseIndex + 1) % phrases.length;
                        setTimeout(tick, pauseAfterDelete);
                        return;
                    }
                    
                    const accel = Math.max(15, deleteSpeed - (currentPhrase.length - charIndex) * 0.5);
                    setTimeout(tick, accel);
                }
            }

            setTimeout(tick, 400);
        })();

        // 3D tilt + spotlight micro interaction on Net Worth card
        const card = document.querySelector('.net-worth-card');
        const spotlight = document.getElementById('card-spotlight');
        
        if (card) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `translateY(-14px) scale(1.03) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                if (spotlight) {
                    spotlight.style.background = `radial-gradient(250px circle at ${x}px ${y}px, rgba(99,102,241,0.1), transparent 60%)`;
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                if (spotlight) {
                    spotlight.style.background = 'radial-gradient(200px circle at 50% 50%, rgba(99,102,241,0.08), transparent 60%)';
                }
            });

            const worthValue = card.querySelector('.worth-value');
            const originalValue = '$1,202,211.54';
            let animFrameId = null;

            card.addEventListener('mouseenter', () => {
                if (animFrameId) cancelAnimationFrame(animFrameId);
                
                let current = 0;
                const target = 1202211.54;
                const duration = 1000;
                const startTime = performance.now();

                function animateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress) * Math.cos((progress * 10 - 0.75) * ((2 * Math.PI) / 3));
                    current = target * Math.min(eased, 1);
                    
                    worthValue.textContent = '$' + current.toLocaleString('en-US', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                    });

                    if (progress < 1) {
                        animFrameId = requestAnimationFrame(animateCount);
                    }
                }
                animFrameId = requestAnimationFrame(animateCount);
            });

            card.addEventListener('mouseleave', () => {
                if (animFrameId) cancelAnimationFrame(animFrameId);
                worthValue.textContent = originalValue;
            });
        }

        // === Violet Card 3D Tilt + Spotlight ===
        const violetCard = document.getElementById('violet-card');
        const violetSpotlight = document.getElementById('violet-spotlight');

        if (violetCard) {
            violetCard.addEventListener('mousemove', (e) => {
                const rect = violetCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -6;
                const rotateY = ((x - centerX) / centerX) * 6;

                violetCard.style.transform = `translateY(-12px) scale(1.02) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                if (violetSpotlight) {
                    violetSpotlight.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
                }
            });

            violetCard.addEventListener('mouseleave', () => {
                violetCard.style.transform = '';
                if (violetSpotlight) {
                    violetSpotlight.style.background = 'radial-gradient(250px circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)';
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="8dH3WnYdxsenOolYGHB0"></div>

</div></div>

<div className="absolute inset-0 z-0 bg-pattern opacity-60 pointer-events-none"></div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
<svg className="w-full h-full min-w-[1200px]" fill="none" viewbox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
<path d="M-100 300 C 150 200, 300 450, 500 300 C 700 150, 850 400, 1050 300 C 1250 200, 1400 350, 1600 300" opacity="0.6" stroke="#fbd38d" strokeWidth="2"></path>
<path d="M-50 350 C 200 450, 350 200, 550 350 C 750 500, 900 250, 1100 350 C 1300 450, 1450 300, 1650 350" opacity="0.8" stroke="#fb923c" strokeWidth="2"></path>
</svg>
</div>

<header className="lg:px-10 flex max-w-[1600px] z-50 mt-0 mr-auto mb-0 ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2">
<div className="text-indigo-500 flex items-center justify-center w-8 h-8">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M14 8V4M14 20v-4M4 12h16"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight font-geist">Pursue</span>
</div>
<nav className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-md px-2 py-1.5 rounded-full border border-neutral-200/50 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<a className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-normal transition-colors font-geist" href="#">Home</a>
<a className="text-neutral-600 hover:text-neutral-900 px-5 py-2 rounded-full text-sm font-normal transition-colors font-geist" href="#">About</a>
<a className="text-neutral-600 hover:text-neutral-900 px-5 py-2 rounded-full text-sm font-normal transition-colors font-geist" href="#">Service</a>
<a className="text-neutral-600 hover:text-neutral-900 px-5 py-2 rounded-full text-sm font-normal transition-colors font-geist" href="#">Pricing</a>
<div className="w-px h-4 bg-neutral-300 mx-2"></div>
<button className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-900 px-3 py-2 text-sm font-normal transition-colors font-geist">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
                English
                <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</nav>
<a className="login-btn hover:bg-black hidden sm:block text-sm font-normal text-white font-geist bg-[#1c1c1c] rounded-xl pt-2.5 pr-6 pb-2.5 pl-6 relative overflow-visible" href="#">Login</a>
<button className="md:hidden text-neutral-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<main className="z-0 lg:mr-auto lg:ml-aut lg:mt-0 lg:pl-10 lg:pr-10 lg:mb-0 lg:pt-12 lg:pb-0 max-w-[1500px] mt-12 mr-auto mb-0 ml-aut pt-24 pr-10 pb-32 pl-10 relative">
<div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-12 gap-x-0 gap-y-x-16 items-start">

<div className="flex flex-col xl:col-span-5 z-30 max-w-2xl relative gap-x-4 gap-y-8">
<h1 className="leading-[1.05] sm:text-6xl lg:text-6xl text-5xl font-semibold text-neutral-800 tracking-tighter font-geist w-800 max-w-3xl perspective-midrange" id="typewriter-heading" style={{minHeight: '3.2em'}}>
<span className="typewriter-cursor" id="typewriter-text"></span>
</h1>
<p className="leading-relaxed text-lg text-neutral-500 font-geist max-w-lg fade-in-up" id="subtitle-text" style={{opacity: '0', animationPlayState: 'paused'}}>Equip your team with smart tools that automate tasks, reveal insights, and keep you moving forward with ease.</p>
<div className="flex flex-wrap mt-0 mb-0 pb-0 gap-x-4 gap-y-8 items-center fade-in-up" id="buttons-row" style={{opacity: '0', animationPlayState: 'paused'}}>
<button className="flex hover:bg-white hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 transition-all duration-300 ease-out text-base font-normal text-neutral-900 font-geist bg-white/80 border-neutral-200 border rounded-2xl pt-3.5 pr-7 pb-3.5 pl-7 shadow-sm backdrop-blur-sm items-center justify-center">
                        Watch a Demo
                    </button>
<button className="flex hover:bg-[#9475DE] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#9475DE]/30 transition-all duration-300 ease-out shadow-black/10 text-base font-normal text-white font-geist bg-[#1c1c1c] rounded-2xl pt-3.5 pr-7 pb-3.5 pl-7 shadow-lg items-center justify-center">
                        Get Started
                    </button>
</div>
</div>

<div className="xl:col-span-7 sm:h-[600px] lg:h-[700px] flex xl:justify-end xl:pr-12 w-full max-w-4xl pr-12 relative items-center">

<div className="violet-card flex flex-col xl:right-10 sm:w-[420px] sm:h-[420px] sm:p-10 bg-gradient-to-bl from-violet-400 to-violet-600 w-[300px] h-[300px] z-10 rounded-[2.5rem] px-8 py-8 absolute right-[5%] shadow-2xl justify-center" id="violet-card" style={{transformStyle: 'preserve-3d'}}>

<div className="violet-border-glow"></div>

<div className="violet-inner-glow absolute inset-0 rounded-[2.5rem] pointer-events-none z-[1]" style={{background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)'}}></div>

<div className="violet-spotlight absolute inset-0 rounded-[2.5rem] pointer-events-none z-[2]" id="violet-spotlight" style={{background: 'radial-gradient(250px circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)'}}></div>

<div className="violet-shimmer"></div>

<div className="violet-ring absolute pointer-events-none z-[3]" style={{top: '-30px', right: '-30px', width: '120px', height: '120px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%'}}></div>

<div className="v-sparkle-1 absolute top-6 right-8 w-3 h-3 z-[6] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(255,255,255,0.7)"></path></svg>
</div>
<div className="v-sparkle-2 absolute top-14 right-16 w-2 h-2 z-[6] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(253,224,71,0.6)"></path></svg>
</div>
<div className="v-sparkle-3 absolute bottom-20 left-10 w-2.5 h-2.5 z-[6] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(255,255,255,0.5)"></path></svg>
</div>
<div className="v-sparkle-4 absolute bottom-32 right-10 w-1.5 h-1.5 z-[6] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(196,181,253,0.7)"></path></svg>
</div>
<div className="v-sparkle-5 absolute top-28 left-6 w-2 h-2 z-[6] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(255,255,255,0.4)"></path></svg>
</div>

<div className="v-particle-1 absolute w-1.5 h-1.5 rounded-full bg-white/40 z-[6] pointer-events-none" style={{bottom: '30%', left: '20%', opacity: '0'}}></div>
<div className="v-particle-2 absolute w-1 h-1 rounded-full bg-yellow-200/50 z-[6] pointer-events-none" style={{bottom: '40%', right: '25%', opacity: '0'}}></div>
<div className="v-particle-3 absolute w-2 h-2 rounded-full bg-white/30 z-[6] pointer-events-none" style={{bottom: '20%', left: '50%', opacity: '0'}}></div>
<div className="v-particle-4 absolute w-1 h-1 rounded-full bg-violet-200/50 z-[6] pointer-events-none" style={{bottom: '50%', right: '15%', opacity: '0'}}></div>

<div className="violet-dots bg-lime-500 opacity-10 absolute top-0 right-0 bottom-0 left-0 rounded-[2.5rem]" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="z-10 relative space-y-4">
<span className="violet-logo text-xl font-semibold text-white/90 tracking-tight font-geist inline-block">Pursue</span>
<h2 className="violet-heading leading-tight sm:text-5xl text-3xl font-semibold text-white tracking-tight font-geist">Let <span className="highlight-word">AI</span> Handle the Routine Tasks: <span className="highlight-word">Automate</span> and <span className="highlight-word">Connect</span> Seamlessly</h2>
</div>
</div>

<div className="balance-card sm:-right-[2%] xl:-right-[5%] sm:w-72 z-20 bg-white/25 opacity-95 w-64 border-white/60 border rounded-3xl pt-5 pr-5 pb-5 pl-5 absolute top-[8%] right-[0%] shadow-[0_8px_32px_rgb(0,0,0,0.06)] backdrop-blur-2xl [--fx-filter:blur(10px)_liquid-glass(1.4,10)_saturate(1.4)_noise(0.5,1,0)_contrast(1.15)]">
<p className="text-sm text-neutral-500 mb-1 font-geist">Balance</p>
<div className="flex items-center justify-between">
<span className="sm:text-2xl text-xl font-semibold text-neutral-900 tracking-tight font-geist">+145,89 USD</span>
<span className="bg-neutral-500 text-white text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1 font-geist">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i>
                            10%
                        </span>
</div>
</div>

<div className="net-worth-card sm:-right-[2%] xl:-right-[5%] sm:w-72 bg-white/25 opacity-95 w-64 z-[70] border-white/60 border rounded-3xl pt-5 pr-5 pb-5 pl-5 absolute top-[62%] right-[18%] left-12 shadow-[0_8px_32px_rgb(0,0,0,0.06)] backdrop-blur-2xl [--fx-filter:blur(10px)_liquid-glass(1.4,10)_saturate(1.4)_noise(0.5,1,0)_contrast(1.15)]" style={{transformStyle: 'preserve-3d', cursor: 'pointer', overflow: 'visible'}}>

<div className="card-border-glow absolute -inset-[1px] rounded-[1.6rem] pointer-events-none z-0" style={{background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(34,211,238,0.2), rgba(99,102,241,0.1))', filter: 'blur(1px)'}}></div>

<div className="card-inner-glow absolute inset-0 rounded-[1.5rem] pointer-events-none z-[1]" style={{background: 'radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)'}}></div>

<div className="card-spotlight absolute inset-0 rounded-[1.5rem] pointer-events-none z-[2]" id="card-spotlight" style={{background: 'radial-gradient(200px circle at 50% 50%, rgba(99,102,241,0.08), transparent 60%)'}}></div>

<div className="shimmer-bar absolute inset-0 rounded-[1.5rem] pointer-events-none z-[3]"></div>

<div className="sparkle-1 absolute top-3 right-4 w-2 h-2 z-[5] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(99,102,241,0.5)"></path></svg>
</div>
<div className="sparkle-2 absolute top-8 right-12 w-1.5 h-1.5 z-[5] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(34,211,238,0.5)"></path></svg>
</div>
<div className="sparkle-3 absolute bottom-16 left-6 w-1.5 h-1.5 z-[5] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(99,102,241,0.4)"></path></svg>
</div>
<div className="sparkle-4 absolute bottom-24 right-6 w-1 h-1 z-[5] pointer-events-none" style={{opacity: '0'}}>
<svg fill="none" viewbox="0 0 16 16"><path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="rgba(167,139,250,0.5)"></path></svg>
</div>

<div className="flex items-center justify-between relative z-20 mb-0.5">
<p className="text-sm text-neutral-500 font-geist">Total Net Worth</p>
<div className="pct-badge flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-medium px-2 py-0.5 rounded-full border border-emerald-100 transition-all duration-300">
<i className="w-3 h-3 hover-arrow" data-lucide="trending-up" strokeWidth="2"></i>
            +12.4%
        </div>
</div>
<div className="flex gap-2 z-20 mb-1 relative gap-x-2 gap-y-2 items-baseline">
<span className="worth-value sm:text-3xl text-2xl font-semibold text-neutral-950 tracking-tight font-geist transition-all duration-300">$1,202,211.54</span>
<span className="text-sm text-neutral-500 font-medium font-geist">USD</span>
</div>
<p className="btc-label text-xs text-neutral-400 mb-6 font-geist relative z-20 transition-all duration-300">~21,211.22 BTC</p>

<div className="flex items-end gap-1.5 w-full mb-4 no-scrollbar relative z-20" style={{height: '80px', overflow: 'visible', paddingTop: '28px'}}>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$42K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '35%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$54K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '45%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$36K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '30%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$60K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '50%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$72K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '60%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$48K</div>
<div className="chart-bar bg-blue-500/90 w-full max-w-[8px] rounded-t-sm transition-all duration-300" style={{height: '40%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$84K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '70%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$96K</div>
<div className="chart-bar w-full max-w-[8px] bg-blue-500/90 rounded-t-sm transition-all duration-300" style={{height: '80%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$78K</div>
<div className="chart-bar w-full max-w-[8px] bg-cyan-400/90 rounded-t-sm transition-all duration-300" style={{height: '65%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$90K</div>
<div className="chart-bar w-full max-w-[8px] bg-cyan-400/90 rounded-t-sm transition-all duration-300" style={{height: '75%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$102K</div>
<div className="chart-bar w-full max-w-[8px] bg-cyan-400/90 rounded-t-sm transition-all duration-300" style={{height: '85%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$108K</div>
<div className="chart-bar w-full max-w-[8px] bg-cyan-400/90 rounded-t-sm transition-all duration-300" style={{height: '90%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$96K</div>
<div className="chart-bar w-full max-w-[8px] bg-indigo-400/80 rounded-t-sm transition-all duration-300" style={{height: '80%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$84K</div>
<div className="chart-bar w-full max-w-[8px] bg-indigo-400/60 rounded-t-sm transition-all duration-300" style={{height: '70%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$72K</div>
<div className="chart-bar w-full max-w-[8px] bg-indigo-400/40 rounded-t-sm transition-all duration-300" style={{height: '60%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$60K</div>
<div className="chart-bar w-full max-w-[8px] bg-indigo-400/30 rounded-t-sm transition-all duration-300" style={{height: '50%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$48K</div>
<div className="chart-bar w-full max-w-[8px] bg-indigo-400/20 rounded-t-sm transition-all duration-300" style={{height: '40%'}}></div>
</div>
<div className="chart-bar-wrapper relative flex flex-col items-center justify-end flex-1" style={{height: '100%'}}>
<div className="chart-tooltip absolute -top-7 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded-md font-geist whitespace-nowrap z-[100] shadow-lg" style={{fontFeatureSettings: '\'tnum\''}}>$36K</div>
<div className="chart-bar w-full max-w-[8px] bg-indigo-400/10 rounded-t-sm transition-all duration-300" style={{height: '30%'}}></div>
</div>
</div>

<div className="flex items-center gap-3 text-xs text-neutral-500 mt-2 relative z-20">
<div className="flex items-center gap-1 font-geist">
<span className="legend-dot w-1.5 h-3 bg-blue-500 rounded-sm transition-all duration-300"></span>BTC
        </div>
<div className="flex items-center gap-1 font-geist">
<span className="legend-dot w-1.5 h-3 bg-cyan-400 rounded-sm transition-all duration-300"></span>ETH
        </div>
<div className="flex items-center gap-1 font-geist">
<span className="legend-dot w-1.5 h-3 bg-indigo-400 rounded-sm transition-all duration-300"></span>USDT
        </div>
<div className="flex items-center gap-1 font-geist">
<span className="legend-dot w-1.5 h-3 bg-neutral-300 rounded-sm transition-all duration-300"></span>Other
        </div>
</div>
</div>

<div className="employees-card sm:bottom-[10%] sm:-right-[5%] xl:-right-[10%] flex flex-col z-20 bg-white/40 w-40 border-white/60 border rounded-[1.5rem] pt-5 pr-5 pb-5 pl-5 absolute right-[0%] bottom-[5%] shadow-[0_8px_32px_rgb(0,0,0,0.06)] backdrop-blur-2xl items-start">
<div className="bg-indigo-500/20 p-2 rounded-lg">
<i className="w-4 h-4 text-indigo-600" data-lucide="users" strokeWidth="2"></i>
</div>
<div className="">
<div className="text-3xl tracking-tight text-neutral-900 font-geist font-semibold">20K</div>
<div className="text-xs text-neutral-500 mt-0.5 font-geist">Active employees</div>
</div>
<button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors ml-auto mt-2 border border-neutral-100">
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</main>
<div className="absolute bottom-10 left-6 lg:left-10 z-30 flex flex-col gap-2">
<div className="flex gap-3 items-center"></div>
</div>


    </>
  );
}
