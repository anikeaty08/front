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



        // Initialize Icons
        lucide.createIcons();

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 relative flex items-center justify-center text-orange-500 group-hover:text-orange-400 transition-colors drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]">
<i className="w-full h-full stroke-[1.5]" data-lucide="crown"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-orange-100 transition-colors font-display tracking-widest uppercase mt-1">
                    HOOP KINGZ
                </span>
</a>

<div className="hidden md:flex items-center gap-8 text-base font-normal text-neutral-400">
<a className="hover:text-orange-400 transition-colors" href="#about">About</a>
<a className="hover:text-orange-400 transition-colors" href="#programs">Programs</a>
<a className="hover:text-orange-400 transition-colors" href="#join">Join</a>
<a className="hover:text-orange-400 transition-colors" href="#parents">Parents</a>
</div>

<div className="flex items-center gap-6">
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#join">
                    START TRAINING
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-orange-950/40 via-neutral-950 to-neutral-950">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
<div className="container mx-auto px-6 text-center z-10 fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex gap-2 bg-neutral-900/80 border-neutral-800 border rounded-full mb-10 py-1.5 px-4 shadow-lg backdrop-blur-sm items-center">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
<span className="text-sm font-medium tracking-wide text-neutral-400">
                    NEXT CAMP OPENING SOON
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05] max-w-5xl mx-auto">
                Top elite basketball <br className="hidden md:block"/>
<span className="text-orange-gradient font-display uppercase tracking-widest font-normal">training</span>
                for all ages
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Develop your skills, build character, and elevate your game with expert coaching. Welcome to the kingdom.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold tracking-tight overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#join">
<div className="absolute inset-0 w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-2 text-base">
                        Join Our Kingdom
                        <i className="w-4 h-4 stroke-[2px]" data-lucide="arrow-right"></i>
</span>
</a>
<a className="px-8 py-4 text-neutral-300 border border-neutral-800 rounded-full font-medium tracking-tight hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-all bg-black/30 backdrop-blur-sm text-base" href="#about">
                    Discover Our Method
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600 z-20">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</section>

<div className="border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<span className="text-sm font-semibold tracking-[0.2em] text-neutral-600 uppercase">
                Equipping Athletes For
            </span>
<div className="text-xl font-display uppercase tracking-widest text-neutral-400">HIGH SCHOOL</div>
<div className="text-xl font-display uppercase tracking-widest text-neutral-400">COLLEGE LEVEL</div>
<div className="text-xl font-display uppercase tracking-widest text-neutral-400">PRO LEAGUES</div>
<div className="text-xl font-display uppercase tracking-widest text-neutral-400">LIFE</div>
</div>
</div>

<section className="py-24 md:py-32 relative z-20 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-16 uppercase tracking-wider">
<span className="text-orange-500">About Us</span>
<span className="text-neutral-700">/</span>
<span>The Hoop Kingz Way</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
<div className="fade-in-up">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                        More than just <br/>
<span className="text-neutral-600">a game of runs.</span>
</h2>
<div className="space-y-6 text-neutral-400 leading-relaxed text-lg font-light">
<p>
                            This academy is about becoming your best self in not only basketball but as a person as well, basketball is not just a game it is a reflection of yourself and it is training not just as a good player but as a player with character.
                        </p>
<p>
                            Our methodology combines the flair of USA basketball and the structured team play of local Malaysian basketball, creating well-rounded athletes ready for any environment.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
<div>
<div className="text-5xl font-display tracking-wide text-orange-500/90 mb-1">500+</div>
<div className="text-sm text-neutral-500 font-semibold uppercase tracking-widest">Athletes Trained</div>
</div>
<div>
<div className="text-5xl font-display tracking-wide text-orange-500/90 mb-1">10+</div>
<div className="text-sm text-neutral-500 font-semibold uppercase tracking-widest">Years Experience</div>
</div>
</div>
</div>

<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-red-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
<div className="flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] bg-neutral-900/80 h-[450px] border-white/5 border rounded-2xl p-8 relative shadow-2xl backdrop-blur-md justify-between">
<div className="absolute top-0 right-0 p-4 opacity-[0.03]">
<i className="w-64 h-64 text-white stroke-[1]" data-lucide="dribbble"></i>
</div>
<div className="z-10">
<div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-orange-500 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-3xl font-medium text-white mb-3 tracking-tight">
                                Character First
                            </h3>
<p className="text-neutral-400 text-base max-w-sm font-light">
                                We believe how you act off the court dictates how far you'll go on it. Discipline, respect, and hard work are our core pillars.
                            </p>
</div>

<div className="relative w-full h-40 border-t-2 border-x-2 border-orange-500/20 rounded-t-full mt-8 overflow-hidden group-hover:border-orange-500/40 transition-colors duration-500">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 border-2 border-orange-500/20 rounded-full group-hover:border-orange-500/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-full bg-orange-500/20 group-hover:bg-orange-500/40 transition-colors duration-500"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">

<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/60 hover:border-orange-500/20 transition duration-300 group">
<div className="text-orange-500 mb-6 bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-white text-xl font-medium mb-3 tracking-tight">Skill Development</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        Structured drills and progressive training that build fundamental and advanced basketball skills.
                    </p>
</div>

<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/60 hover:border-orange-500/20 transition duration-300 group">
<div className="text-orange-500 mb-6 bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-white text-xl font-medium mb-3 tracking-tight">Team Culture</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        We build athletes who respect the game, their teammates, and the process of getting better every day.
                    </p>
</div>

<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/60 hover:border-orange-500/20 transition duration-300 group">
<div className="text-orange-500 mb-6 bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="trophy"></i>
</div>
<h3 className="text-white text-xl font-medium mb-3 tracking-tight">Competitive Edge</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        Tournament-ready players who thrive under pressure. We prepare athletes for real game situations.
                    </p>
</div>

<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/60 hover:border-orange-500/20 transition duration-300 group">
<div className="text-orange-500 mb-6 bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="activity"></i>
</div>
<h3 className="text-white text-xl font-medium mb-3 tracking-tight">Athletic Growth</h3>
<p className="text-neutral-400 text-base leading-relaxed font-light">
                        Speed, agility, and conditioning integrated into every session. Complete athlete development.
                    </p>
</div>
</div>

<div className="border-t border-white/5 pt-24">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">
                            Leadership
                        </span>
<h3 className="text-3xl font-medium text-white tracking-tight">Meet the Coaches</h3>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="group">
<div className="bg-neutral-900 rounded-xl aspect-[4/5] mb-5 overflow-hidden relative border border-white/5">
<img alt="Johannes Chang" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-4 justify-center">
<span className="text-white hover:text-orange-400 cursor-pointer"><i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i></span>
<span className="text-white hover:text-orange-400 cursor-pointer"><i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i></span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-xl tracking-tight">Johannes Chang</h4>
<p className="text-neutral-500 text-sm uppercase tracking-wider font-semibold mt-1">
                            Head Coach / Founder
                        </p>
</div>

<div className="group">
<div className="bg-neutral-900 rounded-xl aspect-[4/5] mb-5 overflow-hidden relative border border-white/5">
<img alt="Marcus Thorne" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-4 justify-center">
<span className="text-white hover:text-orange-400 cursor-pointer"><i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i></span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-xl tracking-tight">Marcus Thorne</h4>
<p className="text-neutral-500 text-sm uppercase tracking-wider font-semibold mt-1">
                            Skill Development
                        </p>
</div>

<div className="group">
<div className="bg-neutral-900 rounded-xl aspect-[4/5] mb-5 overflow-hidden relative border border-white/5">
<img alt="David Chen" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{objectPosition: 'top'}}/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-4 justify-center">
<span className="text-white hover:text-orange-400 cursor-pointer"><i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i></span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-xl tracking-tight">David Chen</h4>
<p className="text-neutral-500 text-sm uppercase tracking-wider font-semibold mt-1">
                            Strength &amp; Conditioning
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#111111] relative z-20 border-t border-white/5" id="join">
<div className="max-w-6xl mx-auto px-6 text-center">
<span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                GET STARTED
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-wide text-white uppercase mb-24">
                HOW TO JOIN OUR KINGDOM
            </h2>
<div className="relative flex flex-col md:flex-row justify-between items-start gap-16 md:gap-4">

<div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-white/10 z-0"></div>

<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-24 h-24 rounded-full border border-orange-500/30 bg-[#161616] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,88,12,0.05)] hover:border-orange-500 hover:scale-105 transition-all duration-300">
<i className="text-orange-500 w-8 h-8 stroke-[1.5]" data-lucide="user-plus"></i>
</div>
<div className="text-orange-700/80 font-display font-medium text-3xl mb-3">01</div>
<h3 className="text-white font-display font-medium text-2xl uppercase tracking-wider mb-4">CREATE AN ACCOUNT</h3>
<p className="text-neutral-400 text-base font-light leading-relaxed max-w-[280px]">
                        Sign up on the Hoop Coach App and register your child's profile in minutes.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-24 h-24 rounded-full border border-orange-500/30 bg-[#161616] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,88,12,0.05)] hover:border-orange-500 hover:scale-105 transition-all duration-300">
<i className="text-orange-500 w-8 h-8 stroke-[1.5]" data-lucide="calendar-check"></i>
</div>
<div className="text-orange-700/80 font-display font-medium text-3xl mb-3">02</div>
<h3 className="text-white font-display font-medium text-2xl uppercase tracking-wider mb-4">CHOOSE A PROGRAM</h3>
<p className="text-neutral-400 text-base font-light leading-relaxed max-w-[280px]">
                        Browse our age-appropriate programs, select classes, and book your preferred schedule.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-24 h-24 rounded-full border border-orange-500/30 bg-[#161616] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,88,12,0.05)] hover:border-orange-500 hover:scale-105 transition-all duration-300">
<i className="text-orange-500 w-8 h-8 stroke-[1.5]" data-lucide="dumbbell"></i>
</div>
<div className="text-orange-700/80 font-display font-medium text-3xl mb-3">03</div>
<h3 className="text-white font-display font-medium text-2xl uppercase tracking-wider mb-4">START TRAINING</h3>
<p className="text-neutral-400 text-base font-light leading-relaxed max-w-[280px]">
                        Show up, train hard, and watch your child grow into a confident, skilled athlete.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden bg-[#050505] z-20" id="parents">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Trusted by Parents
            </h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-500 mb-6">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-base mb-8 leading-relaxed font-light">
                        "My son has grown so much since joining Hoop Kingz. The coaching is professional, supportive, and genuinely focused on building better athletes and people."
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-sm font-semibold text-white border border-white/10">
                        SM
                    </div>
<div>
<div className="text-white font-medium text-sm">Sarah M.</div>
<div className="text-neutral-500 text-sm">Parent</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-500 mb-6">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-base mb-8 leading-relaxed font-light">
                        "Coach Johannes brings an energy and expertise that's rare to find. The app makes managing schedules and payments incredibly easy."
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-sm font-semibold text-white border border-white/10">
                        DL
                    </div>
<div>
<div className="text-white font-medium text-sm">David L.</div>
<div className="text-neutral-500 text-sm">Parent</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-500 mb-6">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-base mb-8 leading-relaxed font-light">
                        "The structured programs and clear progression paths give us confidence that our daughter is getting the best training available."
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-sm font-semibold text-white border border-white/10">
                        MT
                    </div>
<div>
<div className="text-white font-medium text-sm">Michael T.</div>
<div className="text-neutral-500 text-sm">Parent</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 relative z-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center justify-between mb-12">
<div>
<span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Social
                    </span>
<h2 className="text-3xl font-medium tracking-tight text-white">On The Court</h2>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
                    Follow @HoopKingz
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex bg-white/5 w-full rounded-xl pt-2 pr-2 pb-2 pl-2 justify-center">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-0" frameborder="0" height="640" id="instagram-embed-0" scrolling="no" src="https://www.instagram.com/p/DUUXpxmEhO4/embed/?cr=1&amp;v=14&amp;wp=440&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A0%2C%22os%22%3A125.39999997615814%2C%22ls%22%3A10%2C%22le%22%3A10%7D" style={{background: 'white', maxWidth: '100%', width: '100%', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>

<div className="w-full flex justify-center bg-white/5 rounded-xl p-2">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-1" frameborder="0" height="640" id="instagram-embed-1" scrolling="no" src="https://www.instagram.com/p/DT9M_NfkrYj/embed/?cr=1&amp;v=14&amp;wp=440&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A1%2C%22os%22%3A126.39999997615814%2C%22ls%22%3A10%2C%22le%22%3A10%7D" style={{background: 'white', maxWidth: '100%', width: '100%', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>

<div className="w-full flex justify-center bg-white/5 rounded-xl p-2">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-2" frameborder="0" height="640" id="instagram-embed-2" scrolling="no" src="https://www.instagram.com/p/DQtNv-Ykjz2/embed/?cr=1&amp;v=14&amp;wp=440&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A2%2C%22os%22%3A127%2C%22ls%22%3A10%2C%22le%22%3A10%7D" style={{background: 'white', maxWidth: '100%', width: '100%', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>

<div className="w-full flex justify-center bg-white/5 rounded-xl p-2">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-3" frameborder="0" height="532" id="instagram-embed-3" scrolling="no" src="https://www.instagram.com/p/DJ4bOIfS_tr/embed/?cr=1&amp;v=14&amp;wp=440&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A3%2C%22os%22%3A700.3999999761581%2C%22ls%22%3A10%2C%22le%22%3A10%7D" style={{background: 'white', maxWidth: '100%', width: '100%', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
<a className="mt-8 sm:hidden flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
                Follow @HoopKingz
            </a>
</div>

</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 z-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 mb-6 group" href="#">
<div className="w-6 h-6 relative flex items-center justify-center text-neutral-400 group-hover:text-orange-500 transition-colors">
<i className="w-full h-full stroke-[2]" data-lucide="crown"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white font-display tracking-widest uppercase mt-1">
                            HOOP KINGZ
                        </span>
</a>
<p className="text-neutral-500 text-base max-w-sm mb-8 leading-relaxed font-light">
                        Elevating the game. Building character on and off the court. Elite basketball training for all ages.
                    </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="youtube"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="facebook"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Platform</h4>
<ul className="space-y-4 text-base text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#programs">Programs</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#join">Get App</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Legal</h4>
<ul className="space-y-4 text-base text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Waiver Form</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-neutral-600">
                    © 2024 Hoop Kingz Academy. All rights reserved.
                </div>
<div className="text-sm text-neutral-700 font-semibold tracking-widest uppercase">
                    Designed for Greatness
                </div>
</div>
</div>
</footer>


    </>
  );
}
