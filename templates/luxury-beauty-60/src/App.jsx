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



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Loader Animation
        const loaderTimeline = gsap.timeline();
        
        loaderTimeline.to('.loader-text', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        })
        .to('.loader-line', {
            width: '100px',
            duration: 0.8,
            ease: 'power2.inOut'
        })
        .to('.loader-screen', {
            yPercent: -100,
            duration: 1,
            ease: 'power3.inOut',
            delay: 0.5
        })
        .to('.fade-up-element', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, "-=0.5");

        // Service Cards Hover Tilt Effect (JS implementation for smoother feel than pure CSS)
        const tiltCards = document.querySelectorAll('.tilt-card');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;
                
                gsap.to(card.querySelector('.glass-card'), {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.5,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.glass-card'), {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });

        // Scroll Reveal Animations
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section.querySelectorAll('h2, h3, p'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                },
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out"
            });
        });

        // Before/After Slider Logic
        const sliderContainer = document.getElementById('ba-slider');
        const topImageDiv = document.getElementById('ba-top-image');
        const handle = document.getElementById('ba-handle');
        const topImgInner = document.getElementById('ba-top-img-inner');
        let isDragging = false;

        function updateSlider(x) {
            const rect = sliderContainer.getBoundingClientRect();
            let pos = x - rect.left;
            
            // Constrain
            if (pos < 0) pos = 0;
            if (pos > rect.width) pos = rect.width;
            
            // Update widths/pos
            topImageDiv.style.width = `${pos}px`;
            handle.style.left = `${pos}px`;
            
            // Keep inner image fixed so it doesn't squish, just reveals
            // We set the inner image width to match the container width via CSS already (w-[600px] or specific logic)
            // But to be responsive we sync it:
            topImgInner.style.width = `${rect.width}px`;
        }

        sliderContainer.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        });
        
        // Initial setup for slider width
        window.addEventListener('resize', () => {
             const rect = sliderContainer.getBoundingClientRect();
             topImgInner.style.width = `${rect.width}px`;
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('glass', 'border-white/10');
            } else {
                nav.classList.remove('glass', 'border-white/10');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor"></div>

<div className="loader-screen">
<div className="text-center">
<h1 className="text-4xl md:text-6xl text-white tracking-tight mb-4 font-light overflow-hidden">
<span className="inline-block loader-text opacity-0 translate-y-full">LUMIÈRE</span>
</h1>
<div className="h-[1px] w-0 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto loader-line"></div>
</div>
</div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-rose-500/10 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30rem] h-[30rem] bg-fuchsia-500/5 rounded-full blur-[80px]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-2xl font-serif font-medium tracking-tight text-white magnetic-target hover-trigger relative group" href="#">
                LUMIÈRE
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-light text-slate-300 hover:text-white transition-colors hover-trigger" href="#services">Services</a>
<a className="text-sm font-light text-slate-300 hover:text-white transition-colors hover-trigger" href="#about">About</a>
<a className="text-sm font-light text-slate-300 hover:text-white transition-colors hover-trigger" href="#gallery">Gallery</a>
<a className="text-sm font-light text-slate-300 hover:text-white transition-colors hover-trigger" href="#pricing">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<button className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all duration-300 group hover:scale-105 hover-trigger relative overflow-hidden">
<span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="text-xs font-medium tracking-wide uppercase text-white relative z-10">Book Appointment</span>
<iconify-icon className="text-rose-300 relative z-10" icon="solar:calendar-linear" width="16"></iconify-icon>
</button>
<button className="md:hidden text-white hover-trigger">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

<div className="relative z-10 space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 backdrop-blur-sm fade-up-element opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium tracking-wider text-rose-200 uppercase">Premium Styling Experience</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-slate-400 animate-gradient-text tracking-tighter fade-up-element opacity-0">
                    Elevate Your <br/>
<span className="italic font-light text-rose-300/90">Signature</span> Style
                </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed fade-up-element opacity-0">
                    Where precision meets luxury. Experience avant-garde hair styling and beauty treatments in an environment designed for your comfort.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 fade-up-element opacity-0">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-rose-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover-trigger">
                        Explore Services
                    </button>
<button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-medium tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover-trigger group">
<iconify-icon className="group-hover:text-rose-300 transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Showreel
                    </button>
</div>
</div>

<div className="relative h-[600px] hidden lg:block perspective-1000 group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] glass-card rounded-[40px] z-10 flex flex-col justify-between p-6 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 preserve-3d float-anim shadow-2xl shadow-rose-900/20 border-t border-white/20">
<div className="h-64 w-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl overflow-hidden relative">
<img alt="Model" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2 translate-z-10">
<div className="h-1 w-12 bg-rose-400 rounded-full"></div>
<h3 className="text-2xl font-serif">The Cut</h3>
<p className="text-xs text-slate-400">Precision styling tailored to your unique facial structure.</p>
</div>
<div className="flex justify-between items-center border-t border-white/10 pt-4">
<span className="text-lg font-serif italic">$85</span>
<div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-20 right-10 p-6 glass rounded-2xl float-anim-delayed backdrop-blur-xl border border-rose-500/20 z-20 shadow-lg shadow-rose-500/10">
<iconify-icon className="text-rose-300" icon="solar:scissors-square-linear" strokeWidth="1" width="48"></iconify-icon>
</div>

<div className="absolute bottom-32 left-0 p-5 glass rounded-2xl float-anim backdrop-blur-xl border border-purple-500/20 z-20 shadow-lg shadow-purple-500/10" style={{animationDuration: '8s'}}>
<iconify-icon className="text-purple-300" icon="solar:cosmetic-linear" strokeWidth="1" width="40"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
<span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-rose-400 to-transparent"></div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center group hover-trigger">
<h3 className="text-4xl md:text-5xl font-serif text-white mb-2 counter" data-target="15">0</h3>
<p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest group-hover:text-rose-300 transition-colors">Years Experience</p>
</div>
<div className="text-center group hover-trigger">
<h3 className="text-4xl md:text-5xl font-serif text-white mb-2 counter" data-target="2500">0</h3>
<p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest group-hover:text-rose-300 transition-colors">Happy Clients</p>
</div>
<div className="text-center group hover-trigger">
<h3 className="text-4xl md:text-5xl font-serif text-white mb-2 counter" data-target="12">0</h3>
<p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest group-hover:text-rose-300 transition-colors">Master Stylists</p>
</div>
<div className="text-center group hover-trigger">
<h3 className="text-4xl md:text-5xl font-serif text-white mb-2 counter" data-target="48">0</h3>
<p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest group-hover:text-rose-300 transition-colors">Awards Won</p>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-serif mb-4 tracking-tight">Curated Services</h2>
<div className="h-1 w-20 bg-rose-500/50 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">

<div className="group h-[450px] relative preserve-3d hover:z-20 cursor-pointer tilt-card">

<div className="absolute inset-0 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-2 border-t border-white/10">
<div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 text-rose-300">
<iconify-icon icon="solar:scissors-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-serif mb-2">Hair Styling</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Precision cuts, coloring, and styling tailored to your lifestyle and face shape.</p>
<span className="text-rose-300 text-sm uppercase tracking-wider font-medium">Starts at $80</span>
</div>

<div className="absolute -inset-4 bg-rose-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
</div>

<div className="group h-[450px] relative preserve-3d hover:z-20 cursor-pointer tilt-card mt-0 md:-mt-8">
<div className="absolute inset-0 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-2 border-t border-white/10 bg-white/[0.03]">
<div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-300">
<iconify-icon icon="solar:cosmetic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-serif mb-2">Facial Treatments</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Rejuvenating organic facials that restore your skin's natural glow and vitality.</p>
<span className="text-purple-300 text-sm uppercase tracking-wider font-medium">Starts at $120</span>
</div>
<div className="absolute -inset-4 bg-purple-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
</div>

<div className="group h-[450px] relative preserve-3d hover:z-20 cursor-pointer tilt-card">
<div className="absolute inset-0 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-2 border-t border-white/10">
<div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 text-amber-200">
<iconify-icon icon="solar:beard-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-serif mb-2">Grooming &amp; Shave</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Classic hot towel shaves and beard sculpting for the modern gentleman.</p>
<span className="text-amber-200 text-sm uppercase tracking-wider font-medium">Starts at $55</span>
</div>
<div className="absolute -inset-4 bg-amber-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-rose-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

<div className="slider-container" id="ba-slider">

<img alt="After" className="slider-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden" id="ba-top-image" style={{borderRight: '2px solid white'}}>
<img alt="Before" className="absolute top-0 left-0 max-w-none h-full w-[500px] lg:w-[600px] object-cover" id="ba-top-img-inner" src="https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase">Before</div>
</div>

<div className="slider-handle left-1/2" id="ba-handle">
<div className="slider-button hover-trigger">
<iconify-icon icon="solar:arrows-left-right-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase">After</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl md:text-5xl font-serif tracking-tight">Transformation <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-300">Unveiled</span></h2>
<p className="text-slate-400 font-light leading-relaxed">
                    Witness the artistry of our master stylists. We don't just cut hair; we sculpt confidence and reveal the best version of you. Our transformative sessions are designed to align with your personality.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon>
                        Personalized Consultation
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon>
                        Premium Organic Products
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon>
                        Scalp Health Analysis
                    </li>
</ul>
<button className="mt-8 px-8 py-3 rounded-full border border-white/20 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover-trigger">
                    View Gallery
                </button>
</div>
</div>
</section>

<section className="py-20 bg-black" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-serif">Visual Diaries</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors hover-trigger">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors hover-trigger">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2078&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
<div>
<p className="text-rose-300 text-xs font-bold uppercase tracking-widest mb-1">Coloring</p>
<h4 className="text-xl font-serif text-white">Platinum Blonde Balayage</h4>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<div>
<p className="text-rose-300 text-xs font-bold uppercase tracking-widest mb-1">Styling</p>
<h4 className="text-lg font-serif text-white">Gentleman's Cut</h4>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-2xl">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-950" id="pricing">

<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
<div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[0%] right-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif mb-4">Investment Menu</h2>
<p className="text-slate-400 font-light">Transparent pricing for exceptional quality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-3xl border-t border-white/10 relative group hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-xl font-serif text-white mb-2">Essential</h3>
<div className="text-3xl font-light text-rose-200 mb-6">$85<span className="text-sm text-slate-500 font-sans ml-1">/ visit</span></div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Standard Cut &amp; Style</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Wash &amp; Condition</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Beverage Service</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider hover-trigger">Choose</button>
</div>

<div className="glass-card p-8 rounded-3xl border-t border-rose-500/30 relative group hover:-translate-y-4 transition-transform duration-500 bg-rose-500/5">
<div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 to-purple-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-xl rounded-tr-3xl">Popular</div>
<h3 className="text-xl font-serif text-white mb-2">Signature</h3>
<div className="text-3xl font-light text-rose-200 mb-6">$145<span className="text-sm text-slate-500 font-sans ml-1">/ visit</span></div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Precision Cut &amp; Texture</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Scalp Massage Treatment</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Beard/Brow Grooming</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Premium Product Styling</li>
</ul>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all text-sm uppercase tracking-wider hover-trigger">Choose</button>
</div>

<div className="glass-card p-8 rounded-3xl border-t border-white/10 relative group hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-xl font-serif text-white mb-2">Luxe</h3>
<div className="text-3xl font-light text-rose-200 mb-6">$220<span className="text-sm text-slate-500 font-sans ml-1">/ visit</span></div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Full Color / Highlights</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Deep Conditioning Mask</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Full Restyle Consultation</li>
<li className="flex gap-3 text-sm text-slate-300"><iconify-icon className="text-rose-400" icon="solar:check-read-linear"></iconify-icon> Take-home Product Kit</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider hover-trigger">Choose</button>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card rounded-[40px] p-10 md:p-20 relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-10 -mr-10 text-rose-500/10 rotate-12">
<iconify-icon icon="solar:quote-up-bold" width="200"></iconify-icon>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<div className="flex justify-center gap-1 mb-6 text-amber-300">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-serif leading-relaxed mb-8">"LUMIÈRE isn't just a salon; it's a sanctuary. The attention to detail and the technological approach to analyzing my hair needs was unlike anything I've experienced."</h3>
<div className="flex items-center justify-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-300/50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-white font-medium">Elena Rodriguez</p>
<p className="text-xs text-slate-400 uppercase tracking-wider">Fashion Director</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Ready to Transform?</h2>
<p className="text-slate-400 mb-10 max-w-xl mx-auto">Book your appointment today and step into a world of refined beauty and relaxation.</p>
<button className="group relative px-10 py-5 rounded-full bg-white text-black font-semibold text-lg overflow-hidden hover-trigger">
<span className="relative z-10">Schedule Appointment</span>
<div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-purple-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
<div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-rose-300 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
</section>

<footer className="border-t border-white/10 pt-20 pb-10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-2xl font-serif text-white block mb-6" href="#">LUMIÈRE</a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Redefining luxury beauty through innovation and artistry. Visit our flagship studio.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black hover:-translate-y-1 transition-all hover-trigger" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black hover:-translate-y-1 transition-all hover-trigger" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Menu</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-rose-300 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#">Stylists</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-rose-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#">Cancellation Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Visit Us</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-rose-300" icon="solar:map-point-linear"></iconify-icon>
<span>1205 Fifth Avenue,<br/>New York, NY 10029</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-rose-300" icon="solar:phone-linear"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2023 Lumière Salon. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Designed for Excellence</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
