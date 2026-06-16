import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#0a0a0a',
slate: '#2C3E50',
teal: '#1A9C9C',
}
},
animation: {
'slow-spin': 'spin 20s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // 1. Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursor-dot');
        const interactives = document.querySelectorAll('.interactive, a, button');

        document.addEventListener('mousemove', (e) => {
            // Update position with slight delay for outer ring, instant for inner dot (if separated, here using one div)
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });

        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('scale-150', 'bg-brand-teal/10');
                cursor.classList.remove('border-brand-teal/40');
                cursor.classList.add('border-brand-teal');
                cursorDot.classList.add('scale-0');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('scale-150', 'bg-brand-teal/10');
                cursor.classList.add('border-brand-teal/40');
                cursor.classList.remove('border-brand-teal');
                cursorDot.classList.remove('scale-0');
            });
        });

        // 2. Scroll Reveal Animations via Intersection Observer
        const revealElements = document.querySelectorAll('.reveal-up');
        
        // Initial state
        revealElements.forEach(el => {
            el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // 3. 3D Tilt Effect on Cards
        const tiltCards = document.querySelectorAll('.tilt-card');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max tilt 5 degrees
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s ease';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease'; // Fast transition while moving
            });
        });

        // 4. Number Counter Animation
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    const suffix = entry.target.getAttribute('data-suffix') || '';
                    const duration = 2000; // 2 seconds
                    const frameRate = 1000 / 60;
                    const totalFrames = Math.round(duration / frameRate);
                    let frame = 0;

                    const updateCounter = () => {
                        frame++;
                        const progress = frame / totalFrames;
                        // Ease out quart
                        const easeProgress = 1 - Math.pow(1 - progress, 4);
                        const currentCount = Math.round(target * easeProgress);

                        if (frame < totalFrames) {
                            entry.target.innerText = currentCount.toLocaleString() + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            entry.target.innerText = target.toLocaleString() + suffix;
                        }
                    };
                    
                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));

        // 5. Navbar Scrolled State
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#0a0a0a]/80');
                navbar.classList.remove('border-b-0');
            } else {
                navbar.classList.remove('bg-[#0a0a0a]/80');
                navbar.classList.add('border-b-0');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed w-8 h-8 rounded-full border border-brand-teal/40 pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center backdrop-blur-[1px]" id="cursor">
<div className="w-1.5 h-1.5 bg-brand-teal rounded-full shadow-[0_0_10px_rgba(26,156,156,0.8)] transition-transform duration-300" id="cursor-dot"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-card border-b-0 border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex flex-col items-start cursor-pointer group">
<div className="flex items-center gap-1">

<div className="relative w-8 h-8 mr-2">
<div className="absolute inset-0 border-t-4 border-l-4 border-brand-slate transform -skew-x-12"></div>
<div className="absolute inset-0 border-b-4 border-r-4 border-brand-teal transform -skew-x-12 translate-x-2 translate-y-2"></div>
</div>
<span className="font-sans text-2xl tracking-tighter text-white font-medium uppercase group-hover:text-brand-teal transition-colors duration-300">Fitnexus</span>
</div>
<div className="flex items-center gap-2 mt-0.5 w-full">
<div className="h-[1px] bg-zinc-600 flex-grow"></div>
<span className="text-xs tracking-widest text-zinc-400 uppercase">Studio</span>
<div className="h-[1px] bg-zinc-600 flex-grow"></div>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
<a className="hover:text-white transition-colors relative group py-2" href="#facilities">
                    Facilities
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group py-2" href="#philosophy">
                    Philosophy
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group py-2" href="#membership">
                    Membership
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<button className="relative group overflow-hidden rounded-full p-[1px] text-sm tracking-wide interactive">
<span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-slate opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></span>
<div className="relative px-6 py-2.5 bg-[#0a0a0a] rounded-full text-white group-hover:bg-opacity-0 transition-all duration-300">
                    Join Now
                </div>
</button>
</div>
</nav>

<header className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div><div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/80 to-[#080808]"></div>
<div className="grid-bg absolute inset-0 opacity-20"></div>

<div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-brand-teal/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-slate/40 rounded-full blur-[100px] mix-blend-screen animate-float" style={{animationDelay: '-3s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] border-[0.5px] border-white/5 rounded-full animate-slow-spin style={{}}" rotatex(60deg);"="" transform:=""></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] border-[0.5px] border-brand-teal/10 rounded-full animate-slow-spin" style={{animationDirection: 'reverse', transform: 'perspective(1000px) rotateX(60deg)'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 reveal-up">
<span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-zinc-300">Mumbai's Premier Fitness Hub</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-[8rem] tracking-tighter text-white leading-[0.9] font-normal mb-8 reveal-up" style={{transitionDelay: '100ms'}}>
                Perform.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">Recover.</span><br/>
                Dominate.
            </h1>
<p className="max-w-2xl text-xl md:text-2xl text-zinc-400 font-light tracking-tight mb-12 reveal-up" style={{transitionDelay: '200ms'}}>
                An engineered ecosystem where uncompromising luxury meets absolute physical transformation.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6 reveal-up" style={{transitionDelay: '300ms'}}>
<button className="relative group overflow-hidden rounded-full p-[1px] interactive">
<span className="absolute inset-0 bg-gradient-to-r from-brand-teal via-white to-brand-slate opacity-100 group-hover:rotate-180 transition-transform duration-1000 ease-in-out"></span>
<div className="relative px-8 py-4 bg-[#0a0a0a] rounded-full text-white flex items-center gap-2 transition-colors duration-300 group-hover:bg-brand-teal/10">
<span className="text-base tracking-wide">Claim Your Free Trial</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs tracking-widest uppercase text-zinc-500">Discover</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-brand-teal to-transparent"></div>
</div>
</header>

<section className="py-40 relative border-t border-white/5 bg-[#0a0a0a]" id="philosophy">
<div className="max-w-5xl mx-auto px-6 text-center reveal-up">
<h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-tight font-normal">
                The most complete wellness ecosystem ever built in Mumbai.
            </h2>
</div>
</section>

<section className="py-24 relative bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-10 group tilt-card interactive reveal-up" style={{transitionDelay: '0ms'}}>
<div className="w-14 h-14 rounded-2xl bg-brand-slate/20 flex items-center justify-center mb-8 border border-white/5 group-hover:border-brand-teal/50 transition-colors duration-500">
<i className="w-7 h-7 text-white group-hover:text-brand-teal transition-colors duration-500" data-lucide="activity"></i>
</div>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4 font-normal">Peak Performance</h3>
<p className="text-zinc-400 text-base leading-relaxed font-light">
                        Biomechanical excellence achieved through state-of-the-art gym floors, Olympic standard pools, and dynamic courts.
                    </p>
</div>

<div className="glass-card rounded-3xl p-10 group tilt-card interactive reveal-up" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-2xl bg-brand-slate/20 flex items-center justify-center mb-8 border border-white/5 group-hover:border-brand-teal/50 transition-colors duration-500">
<i className="w-7 h-7 text-white group-hover:text-brand-teal transition-colors duration-500" data-lucide="wind"></i>
</div>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4 font-normal">Deep Recovery</h3>
<p className="text-zinc-400 text-base leading-relaxed font-light">
                        Accelerate cellular repair with our premium sauna, integrated spa, and clinical physiotherapy suites.
                    </p>
</div>

<div className="glass-card rounded-3xl p-10 group tilt-card interactive reveal-up" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-2xl bg-brand-slate/20 flex items-center justify-center mb-8 border border-white/5 group-hover:border-brand-teal/50 transition-colors duration-500">
<i className="w-7 h-7 text-white group-hover:text-brand-teal transition-colors duration-500" data-lucide="users"></i>
</div>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4 font-normal">Kinetic Community</h3>
<p className="text-zinc-400 text-base leading-relaxed font-light">
                        Energy is contagious. Connect in our high-octane group studios, boxing rings, and specialized MMA zones.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0a0a0a]" id="facilities">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div>
<h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-white mb-4 font-normal">The Arsenal</h2>
<p className="text-xl text-zinc-400 font-light">10+ specialized zones. Infinite possibilities.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-brand-teal mt-4 md:mt-0 cursor-pointer interactive group">
<span className="text-sm tracking-wide">Explore All</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[240px]">

<div className="md:col-span-2 lg:col-span-3 row-span-2 glass-card rounded-3xl relative overflow-hidden group interactive tilt-card reveal-up"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=3464&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-br from-brand-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl text-white tracking-tight mb-2 font-normal">State-of-the-art Gym</h3>
<p className="text-zinc-400 text-base hidden md:block group-hover:text-zinc-300 transition-colors">Precision equipment engineered for elite performance.</p>
</div>
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="dumbbell"></i>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-3 glass-card rounded-3xl relative overflow-hidden group interactive tilt-card reveal-up" style={{transitionDelay: '100ms'}}><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519315901367-f34f9274ce1c?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-bl from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
<div className="flex justify-between items-end">
<h3 className="text-2xl text-white tracking-tight font-normal">Olympic Pool</h3>
<i className="w-6 h-6 text-brand-teal transform group-hover:-translate-y-1 transition-transform" data-lucide="waves"></i>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl relative overflow-hidden group interactive tilt-card reveal-up" style={{transitionDelay: '200ms'}}><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfc47db4fc?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full">
<div className="flex justify-between items-end">
<h3 className="text-2xl text-white tracking-tight font-normal">Boxing &amp; MMA</h3>
<i className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="target"></i>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl relative overflow-hidden group interactive tilt-card reveal-up" style={{transitionDelay: '300ms'}}><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full">
<div className="flex justify-between items-end">
<h3 className="text-2xl text-white tracking-tight font-normal">Squash &amp; Badminton</h3>
<i className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="circle-dot"></i>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-3xl relative overflow-hidden group interactive tilt-card reveal-up" style={{transitionDelay: '400ms'}}><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=3403&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-slate/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full">
<div className="flex flex-col justify-end h-full">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="mountain"></i>
</div>
<h3 className="text-3xl text-white tracking-tight mb-2 font-normal">Wall Climbing</h3>
<p className="text-zinc-400 text-base">Defy gravity. Build functional strength.</p>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-4 glass-card rounded-3xl relative overflow-hidden group interactive tilt-card reveal-up" style={{transitionDelay: '500ms'}}><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div><div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-between p-8 z-10">
<div>
<h3 className="text-3xl text-white tracking-tight mb-2 font-normal flex items-center gap-3">
                                Sauna &amp; Spa <span className="text-brand-teal text-xl tracking-normal border border-brand-teal/30 px-2 py-0.5 rounded-full">+ Physio</span>
</h3>
<p className="text-zinc-400 text-base">Comprehensive athletic recovery protocols.</p>
</div>
<i className="w-10 h-10 text-brand-teal/50 group-hover:text-brand-teal transition-colors duration-500" data-lucide="flame"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#080808] border-y border-white/5 overflow-hidden"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div><div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-brand-teal/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="reveal-up pt-8 md:pt-0">
<div className="font-serif text-6xl md:text-7xl tracking-tighter text-white mb-2 flex justify-center items-center">
<span className="counter" data-suffix="+" data-target="2000">0</span>
</div>
<p className="text-sm tracking-widest uppercase text-zinc-500">Active Members</p>
</div>
<div className="reveal-up pt-8 md:pt-0" style={{transitionDelay: '100ms'}}>
<div className="font-serif text-6xl md:text-7xl tracking-tighter text-white mb-2 flex justify-center items-center">
<span className="counter" data-suffix="" data-target="15">0</span>
</div>
<p className="text-sm tracking-widest uppercase text-zinc-500">Expert Coaches</p>
</div>
<div className="reveal-up pt-8 md:pt-0" style={{transitionDelay: '200ms'}}>
<div className="font-serif text-6xl md:text-7xl tracking-tighter text-white mb-2 flex justify-center items-center">
<span className="counter" data-suffix="" data-target="12">0</span>
</div>
<p className="text-sm tracking-widest uppercase text-zinc-500">World-Class Facilities</p>
</div>
</div>

<div className="mt-32 max-w-3xl mx-auto text-center reveal-up">
<i className="w-8 h-8 text-brand-teal/40 mx-auto mb-8" data-lucide="quote"></i>
<p className="font-serif text-2xl md:text-3xl tracking-tight text-white leading-relaxed mb-8 font-normal">
                    "This isn't just a gym. It's an architectural masterpiece designed to push your limits. The integration of squash courts, climbing walls, and a dedicated recovery spa makes it unmatched in Mumbai."
                </p>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10"></div>
<div className="text-left">
<div className="text-white text-base">Rahul Desai</div>
<div className="text-zinc-500 text-sm">Member since 2022</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center text-center"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=3540&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div><div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(26,156,156,0.1),_transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 reveal-up">
<h2 className="font-serif text-6xl md:text-8xl tracking-tighter text-white mb-8 font-normal">
                Your first session is on us.
            </h2>
<p className="text-xl text-zinc-400 font-light mb-12">
                Experience the nexus of performance and luxury. Zero friction. Absolute transformation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">

<button className="relative group overflow-hidden rounded-full p-[1px] w-full sm:w-auto interactive">
<span className="absolute inset-0 bg-gradient-to-r from-brand-teal via-[#4DEEEA] to-brand-slate opacity-100 group-hover:scale-105 transition-transform duration-500 animate-pulse-slow"></span>
<div className="relative px-10 py-5 bg-[#0a0a0a] rounded-full text-white flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-brand-teal/10">
<span className="text-lg tracking-wide">Claim Your Free Trial</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</div>
</button>

<button className="px-10 py-5 rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto interactive">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-lg tracking-wide">WhatsApp Us</span>
</button>
</div>
</div>
</section>

<footer className="py-12 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-sans text-xl tracking-tighter text-zinc-500 font-medium uppercase">Fitnexus</span>
</div>
<div className="text-sm text-zinc-600">
                © 2024 Fitnexus Studio Mumbai. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors interactive" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors interactive" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>



    </>
  );
}
