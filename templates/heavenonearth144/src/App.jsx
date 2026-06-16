import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['Cinzel', 'serif'],
sans: ['Inter', 'sans-serif'],
},
colors: {
cream: {
50: '#FFFEFA',
100: '#FFFBF0',
200: '#FDF3D8',
300: '#FAE8B8',
},
gold: {
50: '#FFFAEB',
100: '#FEEFC3',
200: '#FDE68A',
300: '#FCD34D',
400: '#FBBF24',
500: '#F59E0B',
600: '#D97706',
700: '#B45309',
800: '#92400E',
900: '#78350F',
950: '#451A03',
},
emerald: {
800: '#064E3B',
900: '#064E3B',
950: '#022C22',
}
},
backgroundImage: {
'golden-glow': 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%)',
'divine-light': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFBF0 100%)',
'shimmer-gradient': 'linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%)',
},
boxShadow: {
'soft-gold': '0 4px 30px -5px rgba(251, 191, 36, 0.15)',
'glow-card': '0 10px 40px -10px rgba(251, 191, 36, 0.25)',
'glow-button': '0 0 20px rgba(245, 158, 11, 0.4)',
},
animation: {
'float-slow': 'float 8s ease-in-out infinite',
'float-medium': 'float 6s ease-in-out infinite',
'float-fast': 'float 4s ease-in-out infinite',
'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer-slide': 'shimmerSlide 3s infinite linear',
'rotate-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
pulseGlow: {
'0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(251, 191, 36, 0.2)' },
'50%': { opacity: '.7', boxShadow: '0 0 25px rgba(251, 191, 36, 0.5)' },
},
shimmerSlide: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(200%)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // 1. Intersection Observer for Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // Select elements to reveal
        document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => {
            observer.observe(el);
        });

        // 2. Roadmap Line Animation
        const roadmapObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.getElementById('roadmap-line').classList.add('active');
                }
            });
        }, { threshold: 0.2 });
        
        roadmapObserver.observe(document.getElementById('roadmap-container'));

        // 3. Parallax Background & Floating Particles
        const heroBg = document.getElementById('hero-bg');
        const particleContainer = document.getElementById('particles-container');

        // Generate Particles
        function createParticles() {
            const particleCount = 20;
            for (let i = 0; i < particleCount; i++) {
                const p = document.createElement('div');
                p.classList.add('particle');
                
                // Randomize position and size
                const size = Math.random() * 4 + 1; // 1px to 5px
                p.style.width = `${size}px`;
                p.style.height = `${size}px`;
                p.style.left = `${Math.random() * 100}%`;
                p.style.top = `${Math.random() * 100}%`;
                
                // Randomize animation delays
                p.style.animationDelay = `${Math.random() * 5}s`;
                p.style.animationDuration = `${10 + Math.random() * 20}s`; // Slow drift
                
                particleContainer.appendChild(p);
            }
        }
        createParticles();

        // Scroll Parallax Logic
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                // Subtle Parallax for Hero BG
                heroBg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
            }
        });

        // 4. Navbar transition on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-soft-gold', 'bg-white/90');
                navbar.classList.remove('bg-cream-100/70');
            } else {
                navbar.classList.remove('shadow-soft-gold', 'bg-white/90');
                navbar.classList.add('bg-cream-100/70');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full w-full" id="particles-container">

</div>

<nav className="fixed top-0 w-full z-50 bg-cream-100/70 backdrop-blur-xl border-b border-gold-900/5 transition-all duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group relative" href="#">
<div className="absolute inset-0 bg-gold-400/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<div className="relative font-serif text-xl tracking-tighter text-gold-950 font-semibold group-hover:text-gold-700 transition-colors flex items-center duration-300">
<i className="w-5 h-5 mr-2 text-gold-500 fill-gold-100 group-hover:rotate-180 transition-transform duration-1000 ease-out" data-lucide="sun"></i>
                    HEAVEN ON EARTH <span className="text-gold-600 ml-1 font-bold">144</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-gold-600 transition-colors duration-300 relative group" href="#vision">
                    Vision
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full opacity-50"></span>
</a>
<a className="hover:text-gold-600 transition-colors duration-300 relative group" href="#movement">
                    Movement
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full opacity-50"></span>
</a>
<a className="hover:text-gold-600 transition-colors duration-300 relative group" href="#app">
                    App
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full opacity-50"></span>
</a>
<a className="hover:text-gold-600 transition-colors duration-300 relative group" href="#roadmap">
                    Roadmap
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full opacity-50"></span>
</a>
<a className="hover:text-gold-600 transition-colors duration-300 relative group" href="#support">
                    Support
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full opacity-50"></span>
</a>
</div>

<a className="hidden md:block btn-glow bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-500 shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 relative z-10" href="#join">
                Join the Movement
            </a>

<button className="md:hidden text-gold-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-linear scale-110" id="hero-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&amp'}}></div>

<div className="absolute inset-0 bg-gradient-to-r from-cream-100/95 via-cream-100/70 to-cream-100/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-transparent to-gold-200/10 mix-blend-overlay"></div>

<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.1)_0%,_transparent_50%)] animate-spin-slow opacity-60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full py-20">

<div className="space-y-8">
<div className="reveal-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-gold-200/50 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
</span>
<span className="text-xs font-semibold tracking-widest uppercase text-gold-800/80">Global Activation</span>
</div>
<h1 className="reveal-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-gold-950 leading-[1.05] tracking-tight drop-shadow-sm">
                    Heaven on Earth <br/> Begins Within You
                </h1>
<p className="reveal-up delay-200 text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-xl">
                    Join a global movement to awaken 144,000 beacons of light on Earth. Step out of the darkness and let your inner sun rise.
                </p>
<div className="reveal-up delay-300 text-stone-600 text-sm leading-relaxed max-w-lg border-l-2 border-gold-400/50 pl-4 bg-gradient-to-r from-gold-50/50 to-transparent py-3 rounded-r-lg backdrop-blur-sm">
                    Heaven on Earth 144 is a living field of light. Through music, nature, and sacred journeys, we invite you to remember who you truly are.
                </div>
<div className="reveal-up delay-500 flex flex-col sm:flex-row gap-4 pt-4">
<a className="btn-glow flex items-center justify-center bg-gold-600 hover:bg-gold-700 text-white text-base font-semibold py-3.5 px-8 rounded-full transition-all duration-500 shadow-[0_4px_20px_rgba(217,119,6,0.3)] hover:shadow-[0_10px_30px_rgba(217,119,6,0.4)] hover:-translate-y-1 animate-pulse-glow" href="#join">
                        Join the Movement
                    </a>
<a className="flex items-center justify-center border border-gold-300/50 bg-white/40 hover:bg-white/80 text-gold-900 text-base font-medium py-3.5 px-8 rounded-full transition-all duration-500 backdrop-blur-md hover:shadow-lg hover:border-gold-300 group" href="#video">
<i className="w-5 h-5 mr-2 text-gold-600 group-hover:scale-110 transition-transform duration-300" data-lucide="play-circle"></i>
                        Watch 144k Rising
                    </a>
</div>

<div className="reveal-up delay-500 flex flex-wrap gap-3 pt-6 border-t border-gold-900/5">
<div className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/40 border border-gold-100/50 shadow-sm hover:bg-white/70 transition-colors duration-300 cursor-default">
<div className="relative">
<i className="w-3 h-3 text-gold-600 relative z-10" data-lucide="sun"></i>
<div className="absolute inset-0 bg-gold-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
</div>
<span className="text-xs text-stone-600 font-medium group-hover:text-gold-800 transition-colors">144,000 Beacons</span>
</div>
<div className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/40 border border-gold-100/50 shadow-sm hover:bg-white/70 transition-colors duration-300 cursor-default">
<div className="relative">
<i className="w-3 h-3 text-emerald-600 relative z-10" data-lucide="globe-2"></i>
<div className="absolute inset-0 bg-emerald-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
</div>
<span className="text-xs text-stone-600 font-medium group-hover:text-emerald-800 transition-colors">Global Resonance</span>
</div>
<div className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/40 border border-gold-100/50 shadow-sm hover:bg-white/70 transition-colors duration-300 cursor-default">
<div className="relative">
<i className="w-3 h-3 text-purple-600 relative z-10" data-lucide="music"></i>
<div className="absolute inset-0 bg-purple-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
</div>
<span className="text-xs text-stone-600 font-medium group-hover:text-purple-800 transition-colors">Sacred Sound</span>
</div>
</div>
</div>

<div className="reveal-scale delay-300 relative group cursor-pointer lg:justify-self-end mt-8 lg:mt-0 perspective-1000">

<div className="animate-float-slow">
<div className="absolute -inset-4 bg-gradient-to-r from-gold-400/30 to-emerald-400/30 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-80 transition duration-1000 will-change-opacity"></div>
<div className="relative w-full max-w-md aspect-[4/3] bg-cream-200 rounded-2xl overflow-hidden shadow-2xl shadow-gold-900/10 border border-white/60 ring-1 ring-gold-100 transform transition-transform duration-700 group-hover:scale-[1.02]">
<img alt="Sunlight in Forest" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-gold-950/10 group-hover:bg-gold-950/0 transition-colors duration-700">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<p className="font-serif text-lg text-white font-medium drop-shadow-md text-center">144k Rising - Official Video</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="vision">
<div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cream-100 to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 space-y-4 relative">
<div className="light-wave opacity-60"></div>
<h2 className="reveal-up font-serif text-3xl md:text-4xl text-gold-950 tracking-tight">Our Vision and Mission</h2>
<p className="reveal-up delay-100 text-stone-500 max-w-2xl mx-auto font-light text-lg">
                    We are here to remember Heaven on Earth, not as a distant dream, but as a living reality we co-create together.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="reveal-up delay-200 group p-8 rounded-2xl bg-cream-50 border border-gold-100 shadow-soft-gold hover:shadow-glow-card hover:-translate-y-2 transition-all duration-700 ease-out">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-6 border border-gold-200 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6" data-lucide="eye"></i>
</div>
<h3 className="font-serif text-2xl text-gold-900 mb-4 tracking-tight">Vision</h3>
<p className="text-stone-600 leading-relaxed font-light">
                        A world where millions of hearts are awakened to their Inner Heaven, where love is our default state, and where humanity lives in harmony with itself, with Earth, and with the Divine.
                    </p>
</div>

<div className="reveal-up delay-300 group p-8 rounded-2xl bg-cream-50 border border-gold-100 shadow-soft-gold hover:shadow-glow-card hover:-translate-y-2 transition-all duration-700 ease-out">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-6 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6" data-lucide="compass"></i>
</div>
<h3 className="font-serif text-2xl text-gold-900 mb-4 tracking-tight">Mission</h3>
<p className="text-stone-600 leading-relaxed font-light">
                        To activate 144,000 radiant beings across the planet who live from the heart, embody their divine essence, and become beacons of Heaven on Earth in their families, communities, and creative work.
                    </p>
</div>
</div>
<div className="reveal-up delay-500 mt-12 text-center">
<p className="text-gold-700/80 text-sm max-w-3xl mx-auto italic font-medium relative inline-block">
<span className="absolute -left-4 -top-4 text-4xl text-gold-200 opacity-50 serif">"</span>
                    Every person who says yes to their Inner Heaven becomes a point of light on the planetary grid. When enough of us remember together, the field of Heaven on Earth becomes impossible to ignore.
                    <span className="absolute -right-4 -bottom-4 text-4xl text-gold-200 opacity-50 serif">"</span>
</p>
</div>
</div>
</section>

<section className="py-24 bg-cream-100 relative overflow-hidden" id="movement">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold-100/30 to-transparent rounded-full blur-2xl opacity-50 animate-float-slow"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 relative">
<div className="light-wave opacity-50"></div>
<span className="reveal-up text-gold-600 text-xs font-bold tracking-widest uppercase mb-3 block">Core Foundations</span>
<h2 className="reveal-up delay-100 font-serif text-3xl md:text-4xl text-gold-950 tracking-tight">The Three Pillars</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-up delay-100 group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-sm hover:shadow-glow-card transition-all duration-700 hover:-translate-y-2">
<div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
<i className="w-8 h-8 text-gold-500 stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-serif text-gold-900 mb-3 tracking-tight group-hover:text-gold-600 transition-colors">Inner Heaven</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        The primary temple is within. Through meditation, breathwork, and honest self-inquiry, we remember our true nature and reconnect with the love that has always been here.
                    </p>
</div>

<div className="reveal-up delay-200 group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-sm hover:shadow-glow-card transition-all duration-700 hover:-translate-y-2">
<div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
<i className="w-8 h-8 text-emerald-500 stroke-[1.5]" data-lucide="network"></i>
</div>
<h3 className="text-xl font-serif text-gold-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">Collective Field</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Every heart that awakens contributes to a larger field of resonance. Together we amplify a grid of light across the planet, influencing consciousness beyond the individual.
                    </p>
</div>

<div className="reveal-up delay-300 group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-sm hover:shadow-glow-card transition-all duration-700 hover:-translate-y-2">
<div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
<i className="w-8 h-8 text-purple-500 stroke-[1.5]" data-lucide="hand-heart"></i>
</div>
<h3 className="text-xl font-serif text-gold-900 mb-3 tracking-tight group-hover:text-purple-700 transition-colors">Embodied Service</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Heaven on Earth is not an escape. It is a call to live as love in action, in our relationships, creations, communities, and the way we show up each day.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gold-900/5 overflow-hidden" id="video">
<div className="max-w-5xl mx-auto px-6 text-center relative">
<div className="light-wave opacity-40"></div>
<h2 className="reveal-up font-serif text-3xl md:text-4xl text-gold-950 tracking-tight mb-4">Experience the Frequency</h2>
<p className="reveal-up delay-100 text-stone-600 mb-12 max-w-xl mx-auto font-light">
                Begin with the transmission carried in the music. The song '144k Rising' is a call to every soul who remembers they came here for something more.
            </p>
<div className="reveal-scale delay-200 relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-gold-100 aspect-video group">

<div className="absolute inset-0 overflow-hidden">
<img alt="Music Video Background" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-gold-900/10 group-hover:bg-gold-900/0 transition-colors duration-700 cursor-pointer">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-30"></div>
<div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)] group-hover:scale-110 transition-transform duration-500 z-10">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<span className="mt-6 text-sm font-bold tracking-widest uppercase text-white drop-shadow-md opacity-80 group-hover:opacity-100 transition-opacity duration-300">Play Transmission</span>
</div>
</div>
<p className="reveal-up delay-300 mt-8 text-sm text-stone-500 italic">Listen not only with your ears, but with your heart. Let the light within you respond.</p>
</div>
</section>

<section className="py-24 bg-cream-100 relative" id="app">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl reveal-up">
<h2 className="font-serif text-3xl md:text-4xl text-gold-950 tracking-tight mb-4">What We Are Building Now</h2>
<p className="text-stone-600 font-light text-lg">
                        Heaven on Earth 144 is being built in real time. We are in active creation of the foundations that will support thousands of people in embodying their Inner Heaven each day.
                    </p>
</div>
<div className="reveal-up delay-100 flex items-center gap-2 bg-emerald-100/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-emerald-800 font-bold uppercase tracking-widest">Active Creation</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal-up delay-100 col-span-1 lg:col-span-2 bg-white border border-gold-100 rounded-2xl p-8 relative overflow-hidden group shadow-sm hover:shadow-glow-card transition-all duration-700 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-6 z-10">
<span className="px-3 py-1 rounded-full bg-gold-100 border border-gold-200 text-[10px] font-bold uppercase tracking-wider text-gold-600 shadow-sm">
                            In Development
                        </span>
</div>
<div className="relative z-10 mb-8 mt-2">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform duration-500">
<i className="w-7 h-7" data-lucide="smartphone"></i>
</div>
</div>
<h3 className="relative z-10 text-xl font-serif text-gold-900 mb-3 group-hover:text-gold-700 transition-colors">Heaven on Earth 144 App</h3>
<p className="relative z-10 text-stone-600 text-sm leading-relaxed mb-6">
                        A daily portal to activate your inner light, track your resonance, connect with a global field of practice, and receive guided journeys that anchor Heaven on Earth in your everyday life.
                    </p>
</div>

<div className="reveal-up delay-200 bg-white border border-gold-100 rounded-2xl p-8 relative group hover:shadow-glow-card transition-all duration-700 hover:-translate-y-1">
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                        Coming Soon
                    </div>
<div className="w-12 h-12 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-500 bg-emerald-50 rounded-full">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-lg font-serif text-gold-900 mb-3">Heart Resonance Community</h3>
<p className="text-stone-600 text-xs leading-relaxed">
                        A monthly sanctuary for live activations, group meditations, Q&amp;A sessions, and a community of souls devoted to living from the heart.
                    </p>
</div>

<div className="reveal-up delay-300 bg-white border border-gold-100 rounded-2xl p-8 relative group hover:shadow-glow-card transition-all duration-700 hover:-translate-y-1">
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                        Coming Soon
                    </div>
<div className="w-12 h-12 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-500 bg-purple-50 rounded-full">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-serif text-gold-900 mb-3">The 5-Second Shift</h3>
<p className="text-stone-600 text-xs leading-relaxed">
                        A simple, potent practice that helps you shift from overthinking and stress back into presence and inner peace in just a few breaths.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gold-100 relative" id="roadmap">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 relative">
<div className="light-wave opacity-50"></div>
<h2 className="reveal-up font-serif text-3xl md:text-4xl text-gold-950 tracking-tight mb-4">Roadmap to Heaven on Earth</h2>
<p className="reveal-up delay-100 text-stone-500 font-light text-sm">This is a living roadmap. It evolves as the movement grows.</p>
</div>
<div className="relative space-y-12 pl-8 md:pl-0" id="roadmap-container">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-100 -translate-x-1/2"></div>

<div className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300 -translate-x-1/2 roadmap-line-fill z-0" id="roadmap-line"></div>

<div className="reveal-up delay-100 relative md:flex items-center justify-between group">
<div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-6 order-1">
<span className="text-gold-600 text-xs font-bold tracking-widest uppercase">Phase 1</span>
<h3 className="text-xl font-serif text-gold-900 mt-1 mb-2">The Signal</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                            Release the Heaven on Earth music, the '144k Rising' video, and the first transmissions. Open the hub site and build the initial circle of resonance.
                        </p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-gold-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(251,191,36,0.6)] order-2 scale-100 group-hover:scale-125 transition-transform duration-300"></div>
<div className="md:w-[45%] pl-6 order-3 hidden md:block"></div>
</div>

<div className="reveal-up delay-300 relative md:flex items-center justify-between group">
<div className="md:w-[45%] pr-6 order-1 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-white border-2 border-stone-300 -translate-x-1/2 z-10 order-2 group-hover:border-gold-500 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.4)] transition-all duration-300"></div>
<div className="md:w-[45%] pl-6 order-3">
<span className="text-stone-400 group-hover:text-gold-600 transition-colors text-xs font-bold tracking-widest uppercase">Phase 2</span>
<h3 className="text-xl font-serif text-stone-800 mt-1 mb-2 group-hover:text-gold-900 transition-colors">The Foundations</h3>
<p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-600 transition-colors">
                            Launch the first guided practices. Refine the Iboga Source retreat ecosystem. Begin app development and open doors for founding members.
                        </p>
</div>
</div>

<div className="reveal-up delay-500 relative md:flex items-center justify-between group">
<div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-6 order-1">
<span className="text-stone-400 group-hover:text-gold-600 transition-colors text-xs font-bold tracking-widest uppercase">Phase 3</span>
<h3 className="text-xl font-serif text-stone-800 mt-1 mb-2 group-hover:text-gold-900 transition-colors">The Heart Network</h3>
<p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-600 transition-colors">
                            Activate the Heart Resonance Community, roll out the app MVP, and create regular online and in-person gatherings.
                        </p>
</div>
<div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-white border-2 border-stone-300 -translate-x-1/2 z-10 order-2 group-hover:border-gold-500 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.4)] transition-all duration-300"></div>
<div className="md:w-[45%] pl-6 order-3 hidden md:block"></div>
</div>

<div className="reveal-up delay-700 relative md:flex items-center justify-between group">
<div className="md:w-[45%] pr-6 order-1 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-white border-2 border-stone-300 -translate-x-1/2 z-10 order-2 group-hover:border-gold-500 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.4)] transition-all duration-300"></div>
<div className="md:w-[45%] pl-6 order-3">
<span className="text-stone-400 group-hover:text-gold-600 transition-colors text-xs font-bold tracking-widest uppercase">Phase 4</span>
<h3 className="text-xl font-serif text-stone-800 mt-1 mb-2 group-hover:text-gold-900 transition-colors">Global Resonance</h3>
<p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-600 transition-colors">
                            Scale the movement. 144,000 beacons of light actively practicing, creating, and anchoring Heaven on Earth in every domain of life.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-cream-100 via-white to-gold-50/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
<div className="reveal-up">
<h2 className="font-serif text-3xl md:text-4xl text-gold-950 tracking-tight mb-4">Already Alive Now</h2>
<p className="text-stone-600 max-w-xl font-light text-lg">
                        Even as new elements are being built, some parts of this vision are already active and available.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="reveal-up delay-100 bg-white border border-gold-100 rounded-2xl p-8 flex flex-col items-start hover:shadow-glow-card transition-all duration-500 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6" data-lucide="flower-2"></i>
</div>
<h3 className="text-2xl font-serif text-gold-900 mb-3">Iboga Source</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-8 flex-grow">
                        A sacred container for deep inner journeys with the Iboga medicine, focused on dissolving what blocks your light and reconnecting you to your true self.
                    </p>
<a className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold text-sm transition-colors group-hover:translate-x-2 duration-300" href="#">
                        Visit Iboga Source 
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="reveal-up delay-200 bg-white border border-gold-100 rounded-2xl p-8 flex flex-col items-start hover:shadow-glow-card transition-all duration-500 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<h3 className="text-2xl font-serif text-gold-900 mb-3">1:1 Sessions &amp; Journeys</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-8 flex-grow">
                        Personalized sessions that weave energy work, breathwork, and intuitive guidance to help you release old patterns and anchor into a new way of being.
                    </p>
<a className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold text-sm transition-colors group-hover:translate-x-2 duration-300" href="#contact">
                        Inquire About Sessions
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="support">
<div className="absolute inset-0 bg-golden-glow opacity-30 animate-pulse-glow"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-6 reveal-up">
<h2 className="font-serif text-3xl md:text-4xl text-gold-950 tracking-tight">Support the Movement</h2>
<p className="text-stone-600 text-lg font-light leading-relaxed">
                    If your heart feels a yes, you can help build this foundation. Your support allows us to develop the app, produce more music and meditations, and make this work available to more people worldwide.
                </p>
<div className="flex items-start gap-4 p-4 rounded-xl bg-gold-50/50 border border-gold-100 backdrop-blur-sm">
<i className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0 animate-pulse" data-lucide="sparkles"></i>
<p className="text-sm text-gold-800 italic font-medium">
                        "Every contribution, whether small or large, helps to anchor Heaven on Earth in very practical ways. You are not just donating. You are co-creating the field."
                    </p>
</div>
</div>

<div className="reveal-up delay-200 bg-white border border-gold-100 rounded-2xl p-8 shadow-2xl shadow-gold-100/50 relative group">
<div className="absolute inset-0 bg-gradient-to-b from-cream-100/50 to-transparent rounded-2xl pointer-events-none"></div>
<div className="absolute -inset-[1px] bg-gradient-to-r from-gold-200 to-transparent rounded-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-gold-900 font-semibold">Make a Contribution</h3>
<i className="w-5 h-5 text-gold-400" data-lucide="credit-card"></i>
</div>
<div className="grid grid-cols-4 gap-3 mb-6">
<button className="py-3 rounded-lg border border-stone-200 hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 text-stone-600 font-medium transition-all duration-300 text-sm hover:scale-105">$11</button>
<button className="py-3 rounded-lg border border-gold-400 bg-gold-400 text-white font-semibold transition-all duration-300 text-sm shadow-md hover:scale-105 hover:bg-gold-500">$33</button>
<button className="py-3 rounded-lg border border-stone-200 hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 text-stone-600 font-medium transition-all duration-300 text-sm hover:scale-105">$77</button>
<button className="py-3 rounded-lg border border-stone-200 hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 text-stone-600 font-medium transition-all duration-300 text-sm hover:scale-105">$144</button>
</div>
<div className="mb-6">
<label className="block text-xs text-stone-500 uppercase tracking-widest mb-2 font-semibold">Custom Amount</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-serif">$</span>
<input className="w-full pl-8 pr-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300" placeholder="0.00" type="text"/>
</div>
</div>
<button className="btn-glow w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-gold-200 hover:shadow-gold-300 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                        Support Now <i className="w-4 h-4 fill-white/20" data-lucide="heart"></i>
</button>
<p className="text-center text-[10px] text-stone-400 mt-4">
                        Secure payment powered by Stripe. Donations support development &amp; infrastructure.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream-100 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<div className="light-wave opacity-40"></div>
<h2 className="reveal-up font-serif text-3xl md:text-4xl text-gold-950 tracking-tight mb-4">Answer the Call to Co-Create</h2>
<p className="reveal-up delay-100 text-stone-600 text-sm">
                    This is not meant to be built by one person. Heaven on Earth 144 is a movement, and movements thrive when many gifts come together.
                </p>
</div>
<form className="space-y-6 reveal-up delay-200">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="text-xs text-stone-500 uppercase tracking-wide font-semibold group-focus-within:text-emerald-600 transition-colors">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-stone-200 text-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 outline-none hover:border-stone-300" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-xs text-stone-500 uppercase tracking-wide font-semibold group-focus-within:text-emerald-600 transition-colors">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-stone-200 text-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 outline-none hover:border-stone-300" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-stone-500 uppercase tracking-wide font-semibold">How would you like to contribute?</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 bg-white cursor-pointer hover:border-gold-400 hover:bg-gold-50 transition-colors duration-300">
<input className="accent-gold-500 rounded w-4 h-4 border-stone-300" type="checkbox"/>
<span className="text-sm text-stone-600">Developer</span>
</label>
<label className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 bg-white cursor-pointer hover:border-gold-400 hover:bg-gold-50 transition-colors duration-300">
<input className="accent-gold-500 rounded w-4 h-4" type="checkbox"/>
<span className="text-sm text-stone-600">Designer</span>
</label>
<label className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 bg-white cursor-pointer hover:border-gold-400 hover:bg-gold-50 transition-colors duration-300">
<input className="accent-gold-500 rounded w-4 h-4" type="checkbox"/>
<span className="text-sm text-stone-600">Musician</span>
</label>
<label className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 bg-white cursor-pointer hover:border-gold-400 hover:bg-gold-50 transition-colors duration-300">
<input className="accent-gold-500 rounded w-4 h-4" type="checkbox"/>
<span className="text-sm text-stone-600">Marketer</span>
</label>
<label className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 bg-white cursor-pointer hover:border-gold-400 hover:bg-gold-50 transition-colors duration-300">
<input className="accent-gold-500 rounded w-4 h-4" type="checkbox"/>
<span className="text-sm text-stone-600">Community</span>
</label>
<label className="flex items-center gap-2 p-3 rounded-lg border border-stone-200 bg-white cursor-pointer hover:border-gold-400 hover:bg-gold-50 transition-colors duration-300">
<input className="accent-gold-500 rounded w-4 h-4" type="checkbox"/>
<span className="text-sm text-stone-600">Other</span>
</label>
</div>
</div>
<div className="space-y-2 group">
<label className="text-xs text-stone-500 uppercase tracking-wide font-semibold group-focus-within:text-emerald-600 transition-colors">Share your resonance</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-white border border-stone-200 text-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 outline-none hover:border-stone-300 transition-all" placeholder="Tell us a bit about your skills and why this movement speaks to you..." rows="4"></textarea>
</div>
<button className="btn-glow w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-100 hover:shadow-emerald-200 hover:-translate-y-0.5">
                    I Want to Help Build Heaven on Earth
                </button>
</form>
</div>
</section>

<section className="py-24 bg-white border-t border-gold-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/3 reveal-up">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl border-2 border-white ring-1 ring-gold-200 group">
<img alt="Alek - Founder" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 to-transparent"></div>
</div>
</div>
<div className="md:w-2/3 space-y-6 reveal-up delay-200">
<span className="text-gold-600 text-xs font-bold tracking-widest uppercase">About the Founder</span>
<h2 className="font-serif text-4xl text-gold-950 tracking-tight">Meet Alek</h2>
<div className="space-y-4 text-stone-600 font-light leading-relaxed text-lg">
<p>
                            Alek is a facilitator of deep transformation, a musician, and a lover of God and life. After a powerful spiritual awakening in his early twenties, he devoted himself to understanding how to guide people from suffering back into their natural state of clarity, love, and joy.
                        </p>
<p>
                            Through years of personal work, plant medicine ceremonies, Iboga facilitation, breathwork, and energy healing, Alek has supported many souls in reconnecting to their true essence. Heaven on Earth 144 is the next evolution of that work. It is not about one person, but about a collective remembrance.
                        </p>
</div>
<div className="flex items-center gap-2 text-sm text-stone-500 pt-4">
<i className="w-4 h-4 text-gold-500 animate-bounce" data-lucide="map-pin"></i>
<span>Based in Mexico, serving a global community.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#2C1810] relative overflow-hidden group" id="join">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=2094&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay transition-transform duration-[10s] group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-[#2C1810]"></div>

<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.05),transparent)] animate-shimmer-slide"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
<i className="w-12 h-12 text-gold-400 mx-auto mb-8 stroke-[1] animate-rotate-slow" data-lucide="sun"></i>
<h2 className="reveal-up font-serif text-4xl md:text-5xl text-white tracking-tight mb-6">Join the Field of Light</h2>
<p className="reveal-up delay-100 text-orange-100/80 mb-8 font-light text-lg">
                If you feel your heart responding, you are already part of this movement. Receive new songs, meditations, transmissions, and updates as Heaven on Earth 144 unfolds.
            </p>
<form className="reveal-up delay-200 flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
<input className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white focus:border-gold-400 focus:bg-white/15 outline-none text-sm text-center sm:text-left placeholder-white/40 transition-all duration-300" placeholder="Your Name" type="text"/>
<input className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white focus:border-gold-400 focus:bg-white/15 outline-none text-sm text-center sm:text-left placeholder-white/40 transition-all duration-300" placeholder="Email Address" type="email"/>
<button className="bg-gold-500 hover:bg-white hover:text-gold-950 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] animate-pulse-glow">
                    Join
                </button>
</form>
<p className="reveal-up delay-300 text-xs text-orange-200/50">No spam, only light. Unsubscribe at any time.</p>
</div>
</section>

<footer className="bg-[#1a0f0a] py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="text-center md:text-left">
<div className="font-serif text-lg tracking-tighter text-stone-300 font-medium mb-2 flex items-center justify-center md:justify-start">
                        HEAVEN ON EARTH <span className="text-gold-500 ml-1">144</span>
</div>
<p className="text-stone-600 text-xs">Inner Heaven, Global Resonance.</p>
</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-gold-400 transition-colors duration-300" href="#vision">Vision</a>
<a className="hover:text-gold-400 transition-colors duration-300" href="#roadmap">Roadmap</a>
<a className="hover:text-gold-400 transition-colors duration-300" href="#support">Support</a>
<a className="hover:text-gold-400 transition-colors duration-300" href="#">Iboga Source</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-stone-500 hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-stone-500 hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2023 Heaven on Earth 144. All rights reserved.</p>
<p>For retreat and ceremony inquiries, please visit <a className="text-stone-500 hover:text-gold-400 underline decoration-stone-700" href="#">Iboga Source</a>.</p>
</div>
</div>
</footer>



    </>
  );
}
