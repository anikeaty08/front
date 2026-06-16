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



        lucide.createIcons();

        // PARTICLE ANIMATION SCRIPT
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const particleCount = 60; // Adjust for density
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: null, y: null };

        // Resize handling
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Mouse interaction
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Very slow speed
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse repulsion (subtle)
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 0.5;
                        const directionY = forceDirectionY * force * 0.5;
                        this.vx -= directionX;
                        this.vy -= directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, " + (0.5 * (1 - this.y/height)) + ")"; // Fade out at bottom
                ctx.fill();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connections first
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        let opacityValue = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = 'rgba(255, 255, 255,' + (opacityValue * 0.1) + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        init();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="fixed top-0 right-0 bottom-0 left-0">
<canvas className="opacity-40 w-full h-full" height="1263" id="particleCanvas" width="2560"></canvas>
</div>

<div className="fixed bg-slate-900/40 top-0 right-0 bottom-0 left-0"></div>

<aside className="fixed z-[999] bg-[#050505] transition-all duration-300 ease-in-out group overflow-hidden shadow-2xl flex bottom-0 left-0 w-full h-16 border-t border-white/5 flex-row items-center justify-between md:bottom-auto md:top-0 md:left-0 md:w-20 md:h-screen md:flex-col md:border-r md:border-t-0 md:hover:w-64">
<div className="hidden overflow-hidden flex-shrink-0 md:flex bg-[#000000] w-full h-20 border-white/5 border-b relative items-center justify-center">
<img alt="Logo" className="absolute left-20 h-10 w-auto max-w-[140px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1333a4b5-0468-463a-83f4-c814fa001874_3840w.jpg"/>
</div>
<nav className="flex flex-row w-full h-full items-center justify-around bg-transparent pt-0 pb-0 md:flex-col md:justify-start md:h-full md:w-full md:py-6 md:gap-2">
<a className="group/link flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:h-14 md:w-full p-0 text-[#FF5722] md:border-l-2 md:border-[#FF5722] border-transparent relative hover:bg-white/5 md:hover:bg-transparent transition-all" href="#hero">
<div className="flex items-center justify-center flex-shrink-0 md:w-20 md:h-14">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 21 14 3"></path>
<path d="M20.5 21 10 3"></path>
<path d="M15.5 21 12 15l-3.5 6"></path>
<path className="" d="M2 21h20"></path>
</svg>
</div>
<span className="text-[9px] md:text-sm font-medium whitespace-nowrap md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-[-10px] group-hover:translate-x-0">Dla Turysty</span>
</a>
<a className="group/link flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:h-14 md:w-full p-0 text-zinc-400 hover:text-[#FF5722] md:hover:bg-white/[0.02] transition-all duration-300 md:hover:border-[#FF5722]/50 md:border-l-2 md:border-transparent relative" href="#oferta">
<div className="flex items-center justify-center flex-shrink-0 md:w-20 md:h-14">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
</path>
<path className="" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<span className="text-[9px] md:text-sm whitespace-nowrap md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-[-10px] group-hover:translate-x-0 font-medium">Oferta</span>
</a>
<a className="group/link flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start md:h-14 md:w-full hover:text-[#FF5722] md:hover:bg-white/[0.02] transition-all duration-300 md:hover:border-[#FF5722]/50 md:border-l-2 md:border-transparent text-zinc-400 w-full pt-0 pr-0 pb-0 pl-0 relative" href="#zalety">
<div className="flex items-center justify-center flex-shrink-0 md:w-20 md:h-14">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"></path>
<path className="" d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9">
</path>
<path d="m2 13 6 6"></path>
</svg>
</div>
<span className="text-[9px] md:text-sm font-medium whitespace-nowrap md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-[-10px] group-hover:translate-x-0">Zalety</span>
</a>
<a className="group/link flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:h-14 md:w-full p-0 text-zinc-400 hover:text-[#FF5722] md:hover:bg-white/[0.02] transition-all duration-300 md:hover:border-[#FF5722]/50 md:border-l-2 md:border-transparent relative" href="#cennik">
<div className="flex items-center justify-center flex-shrink-0 md:w-20 md:h-14">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="12" x2="12" y1="2" y2="22"></line>
<path className="" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<span className="text-[9px] md:text-sm font-medium whitespace-nowrap md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-[-10px] group-hover:translate-x-0">Cennik</span>
</a>
<a className="group/link flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:h-14 md:w-full p-0 text-zinc-400 hover:text-[#FF5722] md:hover:bg-white/[0.02] transition-all duration-300 md:hover:border-[#FF5722]/50 md:border-l-2 md:border-transparent relative" href="#regulamin">
<div className="flex items-center justify-center flex-shrink-0 md:w-20 md:h-14">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
<path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M7 21h10"></path>
</svg>
</div>
<span className="text-[9px] md:text-sm font-medium whitespace-nowrap md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-[-10px] group-hover:translate-x-0">Regulamin</span>
</a>
<a className="md:mt-auto group/link flex-1 md:flex-none flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:h-20 md:w-full p-0 text-zinc-400 hover:text-[#FF5722] md:hover:bg-white/[0.02] transition-all duration-300 md:hover:border-[#FF5722]/50 md:border-l-2 md:border-transparent relative" href="#kontakt">
<div className="flex items-center justify-center flex-shrink-0 md:w-20 md:h-14">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
</div>
<span className="text-[9px] md:text-sm font-medium whitespace-nowrap md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-[-10px] group-hover:translate-x-0">Kontakt</span>
</a>
</nav>
</aside>

<main className="flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory md:snap-none z-10 md:ml-20 bg-transparent w-full h-full ml-0 relative" style={{}}>

<section className="min-h-screen flex flex-col md:px-16 overflow-hidden snap-start pr-8 pl-8 relative justify-center items-center py-20 lg:py-0" id="hero" style={{}}><div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" style={{}}>

</div>

<div className="bg-right border-none bg-center w-[180px] h-[64px] z-50 absolute top-[40px] right-[40px]"></div>

<div className="select-none absolute top-0 right-0 bottom-0 left-0">
<img alt="Sudety Mountains" className="object-bottom bg-center opacity-40 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab2fb911-cc16-47d7-baa9-7774fa7bcf53_3840w.png"/>
<div className="bg-gradient-to-t from-[#000000] via-[#ca5c02]/10 to-black/0 absolute top-0 right-0 bottom-0 left-0 scale-100">
</div>
<div className="bg-gradient-to-br from-white/10 to-white/0 absolute top-0 right-0 bottom-0 left-0 pointer-events-none" style={{}}></div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none hidden lg:block" style={{}}>

</div>

<div className="animate-fade z-20 max-w-4xl mr-2 ml-2 relative flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
<div className="inline-flex self-center md:self-start bg-white/5 border-white/10 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
<span className="uppercase text-xs font-semibold text-zinc-300 tracking-wide">Wersja 1.3 </span>
</div>
<h1 className="leading-[1.1] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white font-manrope w-full mt-2 mb-2">APLIKACJA    <span className="whitespace-nowrap display-inline-block text-[#FF5722] font-roboto pr-2 scale-100">LOCAL LUP</span></h1><p className="leading-relaxed sm:text-lg md:text-xl text-base font-light text-slate-300 max-w-lg mt-6 mb-8">Odkryj lokalne atrakcje i promocje w jednym miejscu. Przewodnik po Ziemi Kłodzkiej w Twojej kieszeni.</p>

<div className="flex flex-col sm:flex-row mb-10 gap-x-4 gap-y-4 items-center md:items-start w-full justify-center md:justify-start">

<a className="group flex items-center gap-3 hover:bg-zinc-900 hover:border-white/40 transition-all duration-300 min-w-[180px] hover:shadow-md hover:scale-[1.02] bg-center sm:w-auto z-[100] bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f86ba07-935c-4fed-87df-134b74724531_800w.jpg)] bg-cover border-2 rounded-lg pt-10 pr-4 pb-3 pl-4 relative shadow-sm" href="https://play.google.com/store/apps/details?id=com.locallup&amp;hl=pl" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col items-start"></div>
</a>
<a className="group flex items-center gap-3 hover:bg-zinc-900 hover:border-white/40 transition-all duration-300 min-w-[180px] hover:shadow-md hover:scale-[1.02] bg-center sm:w-auto bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b15a303-a438-42c2-8638-eb19c4da6644_800w.jpg)] bg-cover border-2 rounded-lg pt-10 pr-4 pb-3 pl-4 relative shadow-sm" href="https://apps.apple.com/pl/app/local-lup/id6749843126?l=pl" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col items-start"></div>
</a>
</div>

<div className="flex items-center gap-6 justify-center md:justify-start w-full">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
</button>
</div>
</div>

<div className="lg:absolute lg:w-auto lg:h-[700px] lg:top-[15%] lg:right-[10%] lg:mt-0 order-last lg:order-none flex z-30 w-full h-auto mt-[40px] relative perspective-distant justify-center">
<style className="">
                    @keyframes softFloat {
                        0%, 100% { transform: translateY(0) rotateY(-12deg) rotateX(2deg); }
                        50% { transform: translateY(-20px) rotateY(-12deg) rotateX(2deg); }
                    }
                </style>

<div className="lg:pt-24 lg:pb-24 lg:pr-6 lg:pl-6 flex lg:block max-w-7xl z-10 relative justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="border-[6px] overflow-hidden hover:rotate-0 transition-transform duration-700 ease-out bg-center lg:w-[340px] lg:h-[680px] lg:aspect-auto lg:rounded-[3rem] lg:right-4 lg:rotate-[-2deg] bg-[#0a0a0a] w-[300px] h-[600px] mx-auto mt-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/beaa07d3-a663-4a2d-a32f-c8d0d3c971b7_800w.jpg)] bg-cover border-[#1a1a1a] rounded-[2.5rem] relative shadow-2xl rotate-0">
<div className="-translate-x-1/2 flex lg:w-32 lg:h-7 z-50 bg-black w-28 h-7 rounded-b-2xl absolute top-0 left-1/2 items-center justify-center">
</div>
<div className="flex flex-col">
<div className="pr-4 pb-4 pl-4">
</div>
</div>
</div>

<div className="hidden lg:flex flex-col justify-center gap-2 pl-0 lg:pl-12">




</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#050505]/70 to-[#050505] z-10 pointer-events-none backdrop-blur-[2px]"></div>
</section>


<section className="snap-start md:px-16 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#000000] via-[#000000]/60 to-[#000000]/60 z-20 pt-24 pr-8 pb-24 pl-8 relative" id="oferta" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-6xl mx-auto" style={{}}>
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<h2 className="font-manrope text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Główne funkcje</h2>
<p className="text-zinc-500 max-w-sm">Wszystko czego potrzebujesz, aby oszczędzić czas i pieniądze</p>
</div>
<a className="hover:text-white transition-colors flex items-center gap-2 text-sm font-medium text-[#FF5722]" href="#">
                        Zobacz pełną specyfikację <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3" style={{}}>

<div className="group p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-300">
<div className="w-12 h-12 bg-[#FF5722]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF5722]/20 transition-colors">
<svg className="lucide lucide-map w-6 h-6 text-[#FF5722] stroke-[1.5]" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Mapy </h3>
<p className="leading-relaxed text-sm text-zinc-500">Wyszukuj interesujące Cię obiekty gastronomiczne, usługi i wiele innych</p>
</div>

<div className="group p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-300">
<div className="w-12 h-12 bg-[#FF5722]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF5722]/20 transition-colors">
<svg className="lucide lucide-compass w-6 h-6 text-[#FF5722] stroke-[1.5]" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Gry terenowe</h3>
<p className="leading-relaxed text-sm text-zinc-500">Rozwiązuj questy, zdobywaj punkty za odwiedzone atrakcje i wymieniaj je na nagrody u naszych partnerów.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-300">
<div className="w-12 h-12 bg-[#FF5722]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF5722]/20 transition-colors">
<svg className="lucide lucide-calendar w-6 h-6 text-[#FF5722] stroke-[1.5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Wydarzenia</h3>
<p className="leading-relaxed text-sm text-zinc-500">Bądź na bieżąco z lokalnymi wydarzeniami, koncerty, festyny i inne</p>
</div>
</div>
</div>
</section>

<section className="snap-start md:px-16 bg-[#050505]/95 z-20 border-[#000000] border-t pt-24 pr-8 pb-24 pl-8 relative" id="zalety">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="font-manrope text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    Dlaczego warto wybrać <span className="text-[#FF5722]">Local Lup</span>?
                </h2>
<p className="leading-relaxed text-lg text-slate-50 mb-8">
                    Dzięki interaktywnym grom terenowym i lokalnym poleceniom odkryjesz miejsca, o których nie piszą w
                    zwykłych przewodnikach, skorzystasz z promocji. Poznaj region aktywnie i bez nudy.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px]">
<svg className="w-5 h-5 text-[#FF5722]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Baza lokalnych usług i atrakcji</h4>
<p className="text-xs text-zinc-600 mt-1">odkrywaj i oszczędzaj</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px]">
<svg className="w-5 h-5 text-[#FF5722]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Gry terenowe</h4>
<p className="text-xs text-zinc-600 mt-1">zwiedzaj grając</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px]">
<svg className="w-5 h-5 text-[#FF5722]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Społeczność podróżników</h4>
<p className="text-xs text-zinc-600 mt-1">poznaj nowych uzytkownikow</p>
</div>
</div>
</div>
</div>
<div className="w-full min-h-[600px] flex flex-col items-center justify-center relative perspective-distant">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF5722]/30 via-[#FF5722]/5 to-transparent opacity-80 blur-[80px] pointer-events-none transform translate-y-12 scale-110"></div>

<div className="border-[6px] transition-transform duration-700 ease-out transform hover:rotate-0 hover:scale-[1.02] flex flex-col group z-10 overflow-hidden bg-[#050505] w-[300px] h-[600px] border-[#1a1a1a] ring-[#FF5722]/20 ring-1 rounded-[3.5rem] relative shadow-2xl mx-auto scale-90 lg:scale-100 -rotate-y-15 items-center justify-center">
<div className="absolute top-32 -left-[7px] w-[5px] h-10 bg-[#1a1a1a] rounded-l-md border-l border-zinc-800 z-30"></div>
<div className="absolute top-48 -left-[7px] w-[5px] h-16 bg-[#1a1a1a] rounded-l-md border-l border-zinc-800 z-30"></div>
<div className="absolute top-40 -right-[7px] w-[5px] h-24 bg-[#1a1a1a] rounded-r-md border-r border-zinc-800 z-30"></div>
<div className="-translate-x-1/2 bg-black w-28 h-7 z-40 rounded-full absolute top-2 left-1/2"></div>
<div className="absolute inset-[4px] rounded-[3.1rem] overflow-hidden bg-black z-10">
<img alt="App Interface" className="w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d3366cc-75c2-4a82-a360-a7d21e8237ce_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="snap-start md:px-16 z-20 bg-[#050505]/95 border-white/5 border-t pt-24 pr-8 pb-24 pl-8 relative" id="cennik">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight font-manrope mb-4">Wybierz swój plan
        </h2>
<p className="text-zinc-500">Przejrzyste zasady. Możesz anulować w dowolnym momencie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6 items-stretch">
<div className="flex flex-col bg-[#0a0a0a]/80 h-full border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="mb-4">
<h3 className="font-medium text-white mb-2">FREE</h3>
<div className="flex gap-1 gap-x-1 gap-y-1 items-baseline">
<span className="text-3xl font-bold text-white">0 zł</span>
<span className="text-zinc-500 text-sm">/ mies</span>
</div>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">
Dostęp do map</li>
<li className="flex text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">
Wydarzenia</li>
<li className="flex text-sm text-zinc-400 gap-x-3 gap-y-3 items-center"> Wybrane gry terenowe</li>
<li className="flex text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">Reklamy</li>
</ul>
</div>
<div className="flex flex-col bg-[#0a0a0a]/90 h-full border-[#FF5722] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_30px_rgba(255,87,34,0.1)] backdrop-blur-sm">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5722] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Popularne</div>
<div className="mb-4">
<h3 className="font-medium text-[#FF5722] mb-2">PREMIUM</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">29.99 zł</span>
<span className="text-sm text-orange-600">/ miesiąc</span>
</div>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex gap-3 text-sm text-zinc-300 gap-x-3 gap-y-3 items-center">Dostęp do map</li>
<li className="flex text-sm text-zinc-300 gap-x-3 gap-y-3 items-center">Wydarzenia</li>
<li className="flex gap-3 text-sm text-zinc-300 gap-x-3 gap-y-3 items-center">Wszystkie gry terenowe</li>
<li className="flex text-sm text-zinc-300 gap-x-3 gap-y-3 items-center">Brak reklam</li>
</ul>
</div>
<div className="flex flex-col bg-[#0a0a0a]/80 h-full border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
<div className="mb-4">
<h3 className="font-medium text-white mb-2">PREMIUM</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">19.99 zł</span>
<span className="text-sm text-zinc-500">/ tydzień</span>
</div>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex gap-3 text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">Dostęp do map</li>
<li className="flex gap-3 text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">Wydarzenia</li>
<li className="flex text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">Wszystkie gry terenowe</li>
<li className="flex text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">Brak reklam</li>
</ul>
</div>
</div>
</div>
</section>

<section className="md:px-16 snap-start z-20 bg-[#050505]/95 border-white/5 border-t pt-24 pr-8 pb-24 pl-8 relative" id="kontakt">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<h2 className="text-3xl font-semibold text-white tracking-tight font-manrope mb-2">Napisz do nas</h2>
<p className="text-zinc-500 mb-8 text-sm">Masz pytania? Chętnie pomożemy.</p>
<form className="space-y-4">
<div className="">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Email</label>
<input className="focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-all text-sm text-white bg-zinc-900/50 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="twoj@email.com" type="email"/>
</div>
<div className="">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Wiadomość</label>
<textarea className="focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-all text-sm text-white bg-zinc-900/50 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="W czym możemy pomóc?" rows="4"></textarea>
</div>
<button className="hover:bg-zinc-200 transition-colors md:w-auto text-sm font-semibold text-black bg-white w-full rounded-lg pt-3 pr-6 pb-3 pl-6" type="button">Wyślij wiadomość</button>
</form>
</div>

<div className="flex flex-col justify-between">
<div className="">
<h3 className="text-white font-medium mb-4">Lokalizacja</h3>
<p className="leading-relaxed text-sm text-zinc-500 mb-8">Local Lup Sp. z o.o.<br/> ul. Lutycka 11<br/> 57-300 Kłodzko</p>
<h3 className="text-white font-medium mb-4">Social Media</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#FF5722] hover:border-[#FF5722] transition-all" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#FF5722] hover:border-[#FF5722] transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#FF5722] hover:border-[#FF5722] transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 text-xs text-zinc-600">
                            © 2024 Local Lup. Wszelkie prawa zastrzeżone.
                        </div>
</div>
</div>
</div>
</section>

<section className="md:px-16 snap-start z-20 bg-[#050505]/95 border-white/5 border-t px-8 py-24 relative" id="regulamin">
<div className="max-w-4xl mx-auto font-manrope">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div className="">
<h2 className="text-3xl font-semibold text-white tracking-tight">REGULAMIN APLIKACJI</h2>
<div className="h-1 w-24 bg-[#FF5722] mt-2 rounded-full"></div>
</div>
<button className="group flex hover:bg-[#1a1a1a] transition-all duration-200 bg-[#111111] border-white/10 border rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-file-down w-4 h-4 text-[#FF5722] stroke-[1.5]" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
<span className="text-sm font-medium text-white group-hover:text-zinc-200">Pobierz PDF</span>
</button>
</div>

<div className="w-full bg-[#111111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="max-h-[600px] overflow-y-auto p-8 regulamin-scroll text-sm leading-7 text-zinc-300 font-light">
<div className="space-y-6">
<div className="">
<h3 className="text-white font-medium mb-2">§1 Postanowienia Ogólne</h3>
<p className="text-zinc-400">1. Niniejszy regulamin określa zasady korzystania z aplikacji mobilnej "Local Lup", zwanej dalej Aplikacją. Operatorem Aplikacji jest Local Lup Sp. z o.o. z siedzibą w Jeleniej Górze. <br/>2. Korzystanie z Aplikacji jest równoznaczne z akceptacją niniejszego Regulaminu. Użytkownik zobowiązany jest do przestrzegania postanowień Regulaminu od momentu rozpoczęcia korzystania z Usług.<br/>3. Aplikacja przeznaczona jest dla użytkowników poszukujących informacji turystycznych, map szlaków oraz ostrzeżeń pogodowych w rejonie Sudetów.</p>
</div>
<div className="">
<h3 className="text-white font-medium mb-2">§2 Wymagania Techniczne</h3>
<p className="text-zinc-400">1. Do prawidłowego działania Aplikacji niezbędne jest urządzenie mobilne z systemem operacyjnym Android w wersji co najmniej 8.0 lub iOS w wersji co najmniej 13.0.<br/>2. Wymagane jest aktywne połączenie z siecią Internet w celu pobierania danych mapowych oraz aktualizacji statusów pogodowych.<br/>3. Korzystanie z funkcji GPS może znacząco wpływać na zużycie baterii urządzenia. Zaleca się posiadanie powerbanku podczas dłuższych wycieczek.<br/>4. Operator nie ponosi odpowiedzialności za nieprawidłowe działanie Aplikacji wynikające z niespełnienia wymagań technicznych.</p>
</div>
<div className="">
<h3 className="text-white font-medium mb-2">§3 Odpowiedzialność i Bezpieczeństwo</h3>
<p className="text-zinc-400">1. Operator dokłada wszelkich starań, aby dane prezentowane w Aplikacji były aktualne i rzetelne. Jednakże, ze względu na specyfikę warunków górskich, informacje o szlakach i pogodzie mają charakter wyłącznie pomocniczy.<br/>2. Użytkownik podejmuje decyzje o wyjściu w góry na własną odpowiedzialność, uwzględniając własne umiejętności oraz aktualne warunki atmosferyczne.<br/>3. Aplikacja nie zastępuje zdrowego rozsądku, tradycyjnej mapy papierowej, kompasu ani profesjonalnego sprzętu górskiego.<br/>4. Ostrzeżenia GOPR prezentowane w aplikacji pobierane są z zewnętrznych systemów i mogą występować opóźnienia w ich aktualizacji.</p>
</div>
<div className="">
<h3 className="text-white font-medium mb-2">§4 Ochrona Danych Osobowych</h3>
<p className="text-zinc-400">1. Administratorem danych osobowych Użytkowników jest Operator.<br/>2. Dane przetwarzane są wyłącznie w celu realizacji usług świadczonych drogą elektroniczną, zgodnie z Polityką Prywatności oraz przepisami RODO.<br/>3. Aplikacja zbiera dane lokalizacyjne wyłącznie w celu świadczenia usług nawigacji i wyświetlania pozycji na mapie. Dane te nie są udostępniane podmiotom trzecim w celach marketingowych.<br/>4. Użytkownik ma prawo wglądu do swoich danych, ich edycji oraz żądania ich usunięcia.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">§5 Płatności i Subskrypcje</h3>
<p className="text-zinc-400">1. Aplikacja oferuje usługi w modelu Freemium. Podstawowe funkcje są bezpłatne.<br/>2. Funkcje zaawansowane (mapy offline, brak reklam) dostępne są w ramach płatnej subskrypcji PRO.<br/>3. Opłaty pobierane są za pośrednictwem sklepów Google Play lub Apple App Store zgodnie z ich regulaminami.<br/>4. Subskrypcja odnawia się automatycznie, chyba że użytkownik zrezygnuje z niej co najmniej 24 godziny przed końcem okresu rozliczeniowego.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">§6 Postanowienia Końcowe</h3>
<p className="text-zinc-400">1. Operator zastrzega sobie prawo do zmiany Regulaminu. O zmianach użytkownicy zostaną poinformowani poprzez komunikat w Aplikacji.<br/>2. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego.<br/>3. Wszelkie spory wynikłe na tle korzystania z Aplikacji rozstrzygane będą przez sąd właściwy dla siedziby Operatora.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
