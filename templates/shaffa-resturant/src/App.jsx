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



        // Initialize Icons
        lucide.createIcons();

        // 3D Tilt Effect Logic
        document.addEventListener('mousemove', (e) => {
            const heroContent = document.getElementById('hero-content');
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            // Calculate rotation based on mouse position
            // Small values for subtle effect
            const yRotation = ((clientX / innerWidth) - 0.5) * 10; // -5 to 5 degrees
            const xRotation = ((clientY / innerHeight) - 0.5) * -10; // -5 to 5 degrees
            
            if(heroContent) {
                heroContent.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            }

            // Parallax for floating elements
            const floatingElements = document.querySelectorAll('.animate-float, .animate-float-delayed');
            floatingElements.forEach((el, index) => {
                const speed = index + 1;
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                el.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/90', 'shadow-lg');
            } else {
                nav.classList.remove('bg-black/90', 'shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 transition-all duration-500 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">
<i className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-500" data-lucide="crown"></i>
<span className="text-xl font-serif tracking-widest font-medium text-white group-hover:text-amber-200 transition-colors">SHAFFA</span>
</div>
<div className="hidden md:flex gap-8 items-center text-xs font-sans tracking-widest uppercase text-neutral-400">
<a className="hover:text-amber-300 transition-colors duration-300" href="#about">Our Story</a>
<a className="hover:text-amber-300 transition-colors duration-300" href="#menu">Menu</a>
<a className="hover:text-amber-300 transition-colors duration-300" href="#experience">Experience</a>
<a className="hover:text-amber-300 transition-colors duration-300" href="#reviews">Reviews</a>
</div>
<button className="bg-white/5 hover:bg-amber-900/20 border border-amber-500/30 text-amber-100 px-6 py-2 text-xs uppercase tracking-widest transition-all hover:scale-105 rounded-sm backdrop-blur-md">
                Reserve
            </button>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden perspective-container flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-neutral-950">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[120px]"></div>

<div className="smoke"></div>
</div>

<div className="relative z-10 text-center px-4 preserve-3d transition-transform duration-100 ease-out" id="hero-content">
<div className="mb-4 text-amber-500/60 font-serif italic text-lg animate-fade-in-up">Welcome to</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tighter text-white mb-2 leading-none">
<span className="block text-gradient-gold drop-shadow-2xl">SHAFFA</span>
</h1>
<h2 className="text-3xl md:text-5xl font-serif font-light text-amber-100/40 mb-8 mt-[-10px]">
                ਸ਼ਾਫ੍ਫਾ
            </h2>
<p className="max-w-md mx-auto text-neutral-400 font-sans text-sm md:text-base leading-relaxed tracking-wide mb-10 border-l border-amber-500/30 pl-4 text-left backdrop-blur-sm bg-black/20 p-4 rounded-r-lg shadow-2xl transform translate-z-10">
                A Regal Indian Fine-Dining Experience in Chandigarh. <br/>
                Where cinematic lighting meets artistic culinary mastery.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center transform translate-z-20">
<button className="group relative px-8 py-3 bg-amber-600/10 border border-amber-500/50 text-amber-100 overflow-hidden transition-all hover:border-amber-400">
<div className="absolute inset-0 w-0 bg-amber-500/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative text-xs uppercase tracking-widest font-medium group-hover:text-white flex items-center gap-2">
                        Reserve a Table <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-3 bg-transparent border border-white/10 text-neutral-300 hover:bg-white/5 transition-all text-xs uppercase tracking-widest">
                    Explore Menu
                </button>
</div>
</div>

<div className="absolute top-1/4 left-10 md:left-20 w-32 h-32 opacity-20 pointer-events-none animate-float">
<div className="w-full h-full border border-amber-500/30 rounded-full rotate-45"></div>
</div>
<div className="absolute bottom-1/4 right-10 md:right-20 w-24 h-24 opacity-20 pointer-events-none animate-float-delayed">
<div className="w-full h-full border border-emerald-500/30 rounded-full rotate-12"></div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Scroll to Enter</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
</div>
</header>

<section className="relative py-32 bg-neutral-950 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="relative z-10 grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="bg-neutral-900 rounded-sm overflow-hidden h-64 w-full shadow-2xl shadow-black/50 group">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-1000"></div>
</div>
<div className="bg-neutral-900 rounded-sm overflow-hidden h-48 w-full shadow-2xl shadow-black/50 group">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-1000"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-neutral-900 rounded-sm overflow-hidden h-48 w-full shadow-2xl shadow-black/50 group">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-1000"></div>
</div>
<div className="bg-neutral-900 rounded-sm overflow-hidden h-64 w-full shadow-2xl shadow-black/50 group">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1595855799307-5ee3f48d8865?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-1000"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-amber-600/10 blur-[100px] z-0"></div>
</div>
<div className="order-1 md:order-2 text-left space-y-8">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-amber-500"></div>
<span className="text-amber-500 text-xs tracking-widest uppercase">The Ambience</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                    Where Royal Heritage <br/>
<span className="text-neutral-500">Meets Modern Artistry</span>
</h2>
<p className="text-neutral-400 font-sans leading-relaxed">
                    Step into an environment curated for the senses. Plush seating, dim gold lighting, and the subtle aroma of coal-fired grills create an atmosphere of intimate luxury. Inspired by the royal kitchens of India and the mystique of Arabia.
                </p>
<div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
<div>
<span className="block text-2xl font-serif text-amber-200">2,500+</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">5-Star Reviews</span>
</div>
<div>
<span className="block text-2xl font-serif text-amber-200">4.9</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Rating</span>
</div>
<div>
<span className="block text-2xl font-serif text-amber-200">Sector 26</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Chandigarh</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080808]" id="menu">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 mb-20 text-center">
<span className="text-amber-500 text-xs tracking-widest uppercase mb-4 block">Signature Creations</span>
<h2 className="text-4xl font-serif text-white">Culinary Masterpieces</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative card-3d bg-white/5 border border-white/5 p-6 rounded-sm backdrop-blur-sm cursor-pointer overflow-visible">
<div className="relative w-48 h-48 mx-auto -mt-16 mb-6">
<div className="absolute inset-0 bg-black rounded-full shadow-2xl shadow-black/80"></div>

<div className="absolute inset-2 rounded-full overflow-hidden plate-spin">
<img alt="Dal Bukhara" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="text-center space-y-2">
<h3 className="text-xl font-serif text-amber-100">Dal Bukhara</h3>
<p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">Slow-cooked black lentils simmered overnight with cream and butter.</p>
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-amber-400 text-sm font-medium">₹595</span>
</div>
</div>
</div>

<div className="group relative card-3d bg-white/5 border border-white/5 p-6 rounded-sm backdrop-blur-sm cursor-pointer">
<div className="relative w-48 h-48 mx-auto -mt-16 mb-6">
<div className="absolute inset-0 bg-black rounded-full shadow-2xl shadow-black/80"></div>
<div className="absolute inset-2 rounded-full overflow-hidden plate-spin" style={{animationDelay: '-10s'}}>
<img alt="Paneer Lababdar" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-center space-y-2">
<h3 className="text-xl font-serif text-amber-100">Paneer Lababdar</h3>
<p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">Cottage cheese cubes in a rich, creamy tomato and cashew gravy.</p>
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-amber-400 text-sm font-medium">₹645</span>
</div>
</div>
</div>

<div className="group relative card-3d bg-white/5 border border-white/5 p-6 rounded-sm backdrop-blur-sm cursor-pointer">
<div className="relative w-48 h-48 mx-auto -mt-16 mb-6">
<div className="absolute inset-0 bg-black rounded-full shadow-2xl shadow-black/80"></div>
<div className="absolute inset-2 rounded-full overflow-hidden plate-spin" style={{animationDelay: '-25s'}}>
<img alt="Charminar Biryani" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-center space-y-2">
<h3 className="text-xl font-serif text-amber-100">Charminar Biryani</h3>
<p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">Aromatic basmati rice layered with saffron, spices and tender meat.</p>
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-amber-400 text-sm font-medium">₹895</span>
</div>
</div>
</div>

<div className="group relative card-3d bg-white/5 border border-white/5 p-6 rounded-sm backdrop-blur-sm cursor-pointer">
<div className="relative w-48 h-48 mx-auto -mt-16 mb-6">
<div className="absolute inset-0 bg-black rounded-full shadow-2xl shadow-black/80"></div>
<div className="absolute inset-2 rounded-full overflow-hidden plate-spin" style={{animationDelay: '-40s'}}>
<img alt="Gobhi Adraki" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-center space-y-2">
<h3 className="text-xl font-serif text-amber-100">Gobhi Adraki</h3>
<p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">Cauliflower florets tossed with ginger juliennes and fresh spices.</p>
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-amber-400 text-sm font-medium">₹525</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 flex justify-center items-center overflow-hidden">
<div className="relative w-full max-w-5xl px-6">
<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<button className="text-3xl md:text-5xl font-serif text-neutral-700 hover:text-amber-200 transition-all duration-500 hover:scale-110">Starters</button>
<span className="text-3xl md:text-5xl font-serif text-neutral-800">•</span>
<button className="text-3xl md:text-5xl font-serif text-neutral-700 hover:text-amber-200 transition-all duration-500 hover:scale-110">Grills</button>
<span className="text-3xl md:text-5xl font-serif text-neutral-800">•</span>
<button className="text-3xl md:text-5xl font-serif text-white transition-all duration-500 hover:scale-110 shadow-amber-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">Mains</button>
<span className="text-3xl md:text-5xl font-serif text-neutral-800">•</span>
<button className="text-3xl md:text-5xl font-serif text-neutral-700 hover:text-amber-200 transition-all duration-500 hover:scale-110">Breads</button>
<span className="text-3xl md:text-5xl font-serif text-neutral-800">•</span>
<button className="text-3xl md:text-5xl font-serif text-neutral-700 hover:text-amber-200 transition-all duration-500 hover:scale-110">Desserts</button>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-neutral-950 to-emerald-950/20" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-serif text-white">Guest Experiences</h2>
<div className="flex items-center gap-2 mt-2">
<div className="flex text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-neutral-400">4.9 (2,543 Reviews)</span>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 border border-white/10 rounded-full hover:bg-white/10 text-white transition-colors"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 border border-white/10 rounded-full hover:bg-white/10 text-white transition-colors"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 backdrop-blur-md p-8 border border-white/5 rounded-sm hover:border-amber-500/30 transition-colors">
<i className="w-8 h-8 text-amber-500/20 mb-4" data-lucide="quote"></i>
<p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6">"Absolutely regal. The lighting, the presentation of the Dal Bukhara, everything felt like a scene from a movie. Best fine dining in Sector 26."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-serif text-amber-200">RK</div>
<div>
<span className="block text-white text-xs font-medium">Rajesh K.</span>
<span className="block text-neutral-500 text-[10px]">Local Guide</span>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-md p-8 border border-white/5 rounded-sm hover:border-amber-500/30 transition-colors transform md:-translate-y-4">
<i className="w-8 h-8 text-amber-500/20 mb-4" data-lucide="quote"></i>
<p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6">"The Arabic-Indian fusion is executed perfectly. The platters are huge and the service is impeccable. A hidden gem."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-serif text-amber-200">SM</div>
<div>
<span className="block text-white text-xs font-medium">Simran M.</span>
<span className="block text-neutral-500 text-[10px]">Food Blogger</span>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-md p-8 border border-white/5 rounded-sm hover:border-amber-500/30 transition-colors">
<i className="w-8 h-8 text-amber-500/20 mb-4" data-lucide="quote"></i>
<p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6">"Shaffa isn't just dinner, it's an event. The cocktails complement the spicy grills perfectly. Highly recommend the Biryani."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-serif text-amber-200">AD</div>
<div>
<span className="block text-white text-xs font-medium">Amit D.</span>
<span className="block text-neutral-500 text-[10px]">Verified Visit</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<h2 className="text-4xl font-serif text-white">Secure Your Table</h2>
<p className="text-neutral-400 text-sm">Reservations are highly recommended for weekend dining.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-neutral-500">Date</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm" type="date"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-neutral-500">Guests</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm [&amp;&gt;option]:bg-neutral-900">
<option>2 Guests</option>
<option>4 Guests</option>
<option>6+ Guests</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-neutral-500">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm" placeholder="Enter your name" type="text"/>
</div>

<div className="flex items-center gap-4 py-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-neutral-600 rounded-sm custom-checkbox transition-all" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Birthday / Anniversary?</span>
</label>
</div>
<button className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-serif uppercase tracking-widest text-sm transition-colors shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)]" type="button">
                        Confirm Reservation
                    </button>
</form>
</div>

<div className="space-y-8 relative">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-900/20 rounded-full blur-[80px]"></div>
<div className="bg-white/5 border border-white/5 p-8 rounded-sm backdrop-blur-sm relative z-10">
<h3 className="text-xl font-serif text-amber-200 mb-6">Contact &amp; Location</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-neutral-400 mt-1" data-lucide="map-pin"></i>
<div>
<span className="block text-white text-sm">SCO 29, Madhya Marg</span>
<span className="block text-neutral-400 text-sm">Sector 26, Chandigarh</span>
</div>
</li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-neutral-400" data-lucide="phone"></i>
<span className="text-white text-sm">072888 07000</span>
</li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-neutral-400" data-lucide="clock"></i>
<span className="text-neutral-400 text-sm">Daily: 12:00 PM – 11:30 PM</span>
</li>
</ul>

<div className="mt-8 w-full h-48 bg-neutral-900 rounded-sm border border-white/5 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/76.7973,30.7333,14,0,60/600x300?access_token=Pk.placeholder')] bg-cover opacity-50 transition-opacity group-hover:opacity-70"></div>

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center opacity-30">
<span className="text-xs uppercase tracking-widest text-white">View on Map</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-amber-500 rounded-full relative shadow-[0_0_20px_rgba(245,158,11,1)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<h2 className="text-2xl font-serif text-white tracking-widest">SHAFFA</h2>
<div className="flex gap-6 text-neutral-500">
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
<p className="text-xs text-neutral-600 uppercase tracking-wider">© 2024 Shaffa Chandigarh.</p>
</div>
</footer>


    </>
  );
}
