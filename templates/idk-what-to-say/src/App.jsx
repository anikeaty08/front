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



        // --- Falling Petals Logic ---
        function createPetal() {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10s
            petal.style.width = Math.random() * 15 + 10 + 'px';
            petal.style.height = petal.style.width;
            petal.style.backgroundColor = ['#FFB6C1', '#FFC0CB', '#E6E6FA', '#FFF0F5'][Math.floor(Math.random() * 4)];
            
            document.body.appendChild(petal);

            setTimeout(() => {
                petal.remove();
            }, 10000);
        }
        setInterval(createPetal, 300);

        // --- Cursor Heart Trail ---
        document.addEventListener('mousemove', (e) => {
            if(Math.random() > 0.8) { // Don't spam hearts
                const heart = document.createElement('div');
                heart.classList.add('cursor-heart');
                heart.innerHTML = '❤';
                heart.style.left = e.clientX + 'px';
                heart.style.top = e.clientY + 'px';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 1000);
            }
        });

        // --- Intersection Observer for Animations ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- Typewriter Effect ---
        const text = "From the moment our paths crossed, my world became brighter. You are my best friend, my confidant, and my greatest love. I promise to cherish you, honor you, and walk beside you through every season of life.";
        const typeWriterElement = document.getElementById('typewriter');
        let i = 0;

        const typeObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && i === 0) {
                function type() {
                    if (i < text.length) {
                        typeWriterElement.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, 50);
                    }
                }
                type();
            }
        });
        typeObserver.observe(document.querySelector('#typewriter').parentElement);

        // --- Music Player Toggle ---
        const musicBtn = document.getElementById('music-btn');
        const audio = document.getElementById('bg-music');
        const bars = document.querySelectorAll('.bar');
        
        let isPlaying = false;
        musicBtn.addEventListener('click', () => {
            if (!isPlaying) {
                audio.play().catch(e => console.log("Audio play failed interaction required"));
                bars.forEach(b => b.style.animation = "sound 0.5s linear infinite alternate");
                // Randomize animation delays
                bars[0].style.animationDelay = "0s";
                bars[1].style.animationDelay = "0.2s";
                bars[2].style.animationDelay = "0.4s";
            } else {
                audio.pause();
                bars.forEach(b => b.style.animation = "none");
            }
            isPlaying = !isPlaying;
        });

        // --- The "No" Button Logic ---
        const btnNo = document.getElementById('btn-no');
        const btnYes = document.getElementById('btn-yes');
        
        btnNo.addEventListener('mouseover', (e) => {
            const container = btnNo.parentElement;
            const containerRect = container.getBoundingClientRect();
            const btnRect = btnNo.getBoundingClientRect();
            
            // Calculate limits to keep inside the container/section reasonably
            // For mobile compatibility, we use simpler logic or disable on touch
            if (window.innerWidth > 768) {
                const x = Math.random() * (window.innerWidth - btnRect.width) - (window.innerWidth/2) + btnRect.width;
                const y = Math.random() * (window.innerHeight - btnRect.height) - (window.innerHeight/2) + btnRect.height;
                
                btnNo.style.position = 'fixed'; // Break out of flow temporarily
                btnNo.style.left = Math.max(20, Math.min(window.innerWidth - 100, e.clientX + (Math.random() > 0.5 ? 100 : -100))) + 'px';
                btnNo.style.top = Math.max(20, Math.min(window.innerHeight - 50, e.clientY + (Math.random() > 0.5 ? 100 : -100))) + 'px';
            }
        });

        // --- The "Yes" Celebration ---
        btnYes.addEventListener('click', () => {
            // Confetti
            var duration = 3000;
            var end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#B76E79', '#800020', '#FFFDD0']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#B76E79', '#800020', '#FFFDD0']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

            // Overlay Fade In
            const overlay = document.getElementById('celebration-overlay');
            overlay.classList.remove('hidden');
            overlay.classList.add('flex');
            
            // Play joyful music segment or effect (optional, here we just let bg music continue)
            
            setTimeout(() => {
                overlay.style.opacity = '1';
                // More intense confetti burst
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#FFB6C1', '#FFF']
                });
            }, 100);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<audio id="bg-music" loop="">
<source src="https://cdn.pixabay.com/download/audio/2022/10/25/audio_4780e0c0d1.mp3?filename=romantic-piano-124970.mp3" type="audio/mpeg"/>
</audio>

<nav className="fixed top-6 right-6 z-50 flex gap-4">
<button className="glass rounded-full w-12 h-12 flex items-center justify-center text-[#800020] hover:bg-white transition-all duration-500 shadow-lg group" id="music-btn">
<div className="flex items-end gap-1 h-4" id="music-bars">
<span className="bar w-1 bg-[#800020] h-1 rounded-full transition-all"></span>
<span className="bar w-1 bg-[#800020] h-2 rounded-full transition-all"></span>
<span className="bar w-1 bg-[#800020] h-1 rounded-full transition-all"></span>
</div>
</button>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#FFFDD0] via-[#FFE4E1] to-[#E6E6FA] opacity-80 z-[-1]"></div>

<div className="absolute inset-0 z-0 opacity-40" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="relative z-10 text-center px-4 space-y-6 reveal active">
<div className="inline-block animate-bounce mb-4">
<iconify-icon className="text-rose-400 text-5xl md:text-7xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="font-serif text-lg md:text-xl tracking-widest text-rose-800 uppercase opacity-80">A Special Question</h2>
<h1 className="font-script text-6xl md:text-8xl text-[#800020] leading-none drop-shadow-sm">
                Will You Go On<br/>A Date With Me?
            </h1>
<p className="font-serif text-lg md:text-2xl text-rose-900/80 italic max-w-2xl mx-auto mt-6">
                "In all the world, there is no heart for me like yours. Let's make a new memory together."
            </p>
<div className="pt-12">
<a className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-[#800020] transition duration-300 ease-out border border-[#800020]/30 rounded-full glass shadow-md hover:scale-105" href="#story">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#B76E79] group-hover:translate-x-0 ease">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-[#800020] transition-all duration-300 transform group-hover:translate-x-full ease">Look Back With Me</span>
<span className="relative invisible">Look Back With Me</span>
</a>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 overflow-hidden" id="story">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#800020] mb-4">Our Journey</h2>
<div className="w-24 h-px bg-rose-300 mx-auto"></div>
</div>
<div className="relative space-y-12">

<div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-rose-200 transform md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal group">
<div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 md:text-right">
<h3 className="font-serif text-3xl text-[#800020]">2021</h3>
<p className="font-light text-rose-900/80 mt-1">When we met</p>
</div>
<div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#FFFDD0] border border-rose-200 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
<iconify-icon className="text-rose-500 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="hidden md:block w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal group">
<div className="hidden md:block w-1/2"></div>
<div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#FFFDD0] border border-rose-200 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
<iconify-icon className="text-rose-500 text-xl" icon="solar:lips-linear"></iconify-icon>
</div>
<div className="w-full md:w-1/2 pl-16 md:pl-12 text-left">
<h3 className="font-serif text-3xl text-[#800020]">2022</h3>
<p className="font-light text-rose-900/80 mt-1">F block 1st kiss</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal group">
<div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 md:text-right">
<h3 className="font-serif text-3xl text-[#800020]">2023</h3>
<p className="font-light text-rose-900/80 mt-1">Saying "I love you"</p>
</div>
<div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#FFFDD0] border border-rose-200 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
<iconify-icon className="text-rose-500 text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
<div className="hidden md:block w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal group">
<div className="hidden md:block w-1/2"></div>
<div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#FFFDD0] border border-rose-200 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
<iconify-icon className="text-rose-500 text-xl" icon="solar:infinity-linear"></iconify-icon>
</div>
<div className="w-full md:w-1/2 pl-16 md:pl-12 text-left">
<h3 className="font-serif text-3xl text-[#800020]">2023 - 2024</h3>
<p className="font-light text-rose-900/80 mt-1">Coming into a relationship</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-serif text-4xl md:text-5xl text-center text-[#800020] mb-16 reveal tracking-tight">Why I Love You</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group h-80 perspective-1000 cursor-pointer reveal transition-all delay-100">
<div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">

<div className="absolute w-full h-full bg-[#FFFDD0] rounded-2xl backface-hidden flex flex-col items-center justify-center border border-rose-100 p-8 text-center">
<iconify-icon className="text-rose-400 text-5xl mb-4" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl text-rose-900">Your Smile</h3>
<p className="text-xs uppercase tracking-widest text-rose-400 mt-2">Hover to see</p>
</div>

<div className="absolute w-full h-full bg-[#B76E79] rounded-2xl backface-hidden rotate-y-180 flex items-center justify-center p-8 text-center">
<p className="font-serif text-white text-lg leading-relaxed">"It lights up even my darkest days and makes everything feel possible."</p>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 cursor-pointer reveal transition-all delay-200">
<div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">

<div className="absolute w-full h-full bg-[#FFFDD0] rounded-2xl backface-hidden flex flex-col items-center justify-center border border-rose-100 p-8 text-center">
<iconify-icon className="text-rose-400 text-5xl mb-4" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl text-rose-900">Your Kindness</h3>
<p className="text-xs uppercase tracking-widest text-rose-400 mt-2">Hover to see</p>
</div>

<div className="absolute w-full h-full bg-[#800020] rounded-2xl backface-hidden rotate-y-180 flex items-center justify-center p-8 text-center">
<p className="font-serif text-white text-lg leading-relaxed">"The way you care for others inspires me to be a better person every single day."</p>
</div>
</div>
</div>

<div className="group h-80 perspective-1000 cursor-pointer reveal transition-all delay-300">
<div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">

<div className="absolute w-full h-full bg-[#FFFDD0] rounded-2xl backface-hidden flex flex-col items-center justify-center border border-rose-100 p-8 text-center">
<iconify-icon className="text-rose-400 text-5xl mb-4" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl text-rose-900">Our Future</h3>
<p className="text-xs uppercase tracking-widest text-rose-400 mt-2">Hover to see</p>
</div>

<div className="absolute w-full h-full bg-[#B76E79] rounded-2xl backface-hidden rotate-y-180 flex items-center justify-center p-8 text-center">
<p className="font-serif text-white text-lg leading-relaxed">"I cannot imagine a single day of my future without you by my side."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-20 left-10 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
<div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="glass p-8 md:p-12 rounded-xl shadow-2xl border border-white/50">
<div className="text-center mb-8">
<iconify-icon className="text-4xl text-[#800020] mb-4" icon="solar:letter-linear"></iconify-icon>
<h2 className="font-serif text-3xl text-[#800020]">To You</h2>
</div>
<div className="font-serif text-lg md:text-xl text-rose-900 leading-loose min-h-[200px]">
<span className="typewriter" id="typewriter"></span>
</div>
<div className="text-right mt-8">
<p className="font-script text-3xl text-[#800020]">Always Yours</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
<div className="absolute inset-0 bg-gradient-to-t from-rose-100 to-transparent opacity-50 z-[-1]"></div>
<div className="glass max-w-lg w-full p-8 md:p-12 rounded-2xl shadow-2xl text-center border-t border-white/80 reveal">
<div className="mb-8">
<iconify-icon className="text-6xl text-[#B76E79] animate-bounce" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h2 className="font-script text-5xl md:text-6xl text-[#800020] mb-8 drop-shadow-sm leading-tight">Will You Go On<br/>A Date With Me?</h2>
<p className="font-light text-rose-800 mb-10 text-sm md:text-base">Just you, me, and a moment to cherish.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 relative h-20">
<button className="px-10 py-3 bg-[#800020] text-white rounded-full font-serif text-lg hover:bg-rose-800 hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-1" id="btn-yes">
                    Yes, I'd Love To!
                </button>
<button className="px-10 py-3 bg-transparent border border-rose-300 text-rose-400 rounded-full font-serif text-lg hover:bg-rose-50 transition-all duration-300 absolute md:static" id="btn-no">
                    No
                </button>
</div>
</div>
</section>
<footer className="py-12 text-center text-rose-900/40 text-sm font-light">
<p className="flex items-center justify-center gap-2">
            Made with <iconify-icon className="text-rose-400" icon="solar:heart-bold"></iconify-icon> for You
        </p>
</footer>

<div className="fixed inset-0 bg-black/80 z-[100] hidden flex-col items-center justify-center text-white opacity-0 transition-opacity duration-1000" id="celebration-overlay">
<h1 className="font-script text-7xl md:text-9xl text-[#FFB6C1] mb-6 drop-shadow-lg text-center">It's a Date!</h1>
<p className="font-serif text-2xl text-center text-rose-100 max-w-xl px-4">I can't wait to see you.</p>
<button className="mt-12 px-8 py-2 border border-white/30 rounded-full hover:bg-white/10 transition" onclick="location.reload()">Replay Memory</button>
</div>


    </>
  );
}
