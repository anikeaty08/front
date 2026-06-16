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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        !function () {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: !1 };
        var i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        i.onload = function () {
          if (!window.UnicornStudio.isInitialized) {
            UnicornStudio.init();
            window.UnicornStudio.isInitialized = !0;
          }
        };
        (document.head || document.body).appendChild(i);
      }
    }();
    


        // 1. LIGHTER SMOOTH SCROLL CONFIG
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Connect GSAP to Lenis
        gsap.registerPlugin(ScrollTrigger);
        
        // 2. Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');
        const viewTriggers = document.querySelectorAll('.view-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverTriggers.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        viewTriggers.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('view-cursor'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('view-cursor'));
        });

        // 3. CANVAS ANIMATION
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let streams = [];
        const gap = 40; 

        class Stream {
            constructor(x) {
                this.x = x;
                this.y = Math.random() * height;
                this.speed = Math.random() * 2 + 0.5;
                this.length = Math.random() * 100 + 50;
                this.opacity = Math.random() * 0.3 + 0.05;
            }
            update(mouseY) {
                this.y -= this.speed;
                if (this.y + this.length < 0) {
                    this.y = height + Math.random() * 100;
                    this.speed = Math.random() * 2 + 0.5;
                }
            }
            draw(ctx) {
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, 0);
                ctx.lineTo(this.x, height);
                ctx.stroke();

                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(this.x - 1, this.y, 3, this.length);
            }
        }

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            streams = [];
            for (let x = gap / 2; x < width; x += gap) {
                streams.push(new Stream(x));
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            streams.forEach(s => {
                s.update();
                s.draw(ctx);
            });
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();

        // 4. Hero Text Mask Animation
        const headings = document.querySelectorAll('.mask-text span');
        headings.forEach((h, i) => {
            gsap.to(h, {
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: i * 0.1
            });
        });

        gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to(".animate-fade-up", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });

        // 5. The Portal Animation
        const tlPortal = gsap.timeline({
            scrollTrigger: {
                trigger: "#portal-container",
                start: "top top",
                end: "+=100%", 
                scrub: true,
                pin: true,
            }
        });

        tlPortal.to("#portal-image", {
            width: "100%",
            height: "100%",
            ease: "none"
        });

        // 6. Horizontal Scroll
        const horizontalSection = document.getElementById('horizontal-scroll-section');
        const horizontalTrack = document.getElementById('horizontal-track');
        let scrollAmount = horizontalTrack.scrollWidth - window.innerWidth;

        gsap.to(horizontalTrack, {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: horizontalSection,
                start: "top top",
                end: () => `+=${scrollAmount}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        // 7. Testimonial Parallax
        const testimonialSection = document.querySelector('#testimonials');
        const cols = document.querySelectorAll('.testimonial-col');

        cols.forEach((col) => {
            const speed = col.dataset.speed;
            gsap.to(col, {
                y: () => (speed * 100), 
                ease: "none",
                scrollTrigger: {
                    trigger: testimonialSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // 8. 3D Card Tilt
        const cards3d = document.querySelectorAll('.card-3d-wrap');
        cards3d.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                const inner = card.querySelector('.card-3d-inner');
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                const inner = card.querySelector('.card-3d-inner');
                inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="aura-background-component inset-0 pointer-events-none z-0 fixed" data-alpha-mask="80" style="mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>



<div id="cursor" style={{left: '508px', top: '3px'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-transform duration-300" id="navbar">
<div className="max-w-[1600px] mx-auto flex items-center justify-between glass rounded-full px-8 py-4">
<a className="flex items-center gap-3 group hover-trigger" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
<svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="font-display font-bold tracking-tight text-lg text-white">PULSE<span className="font-light text-neutral-500">BOARD</span></span>
</a>
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger" href="#work">Work</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger" href="#testimonials">Stories</a>
</div>
<button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors hover-trigger">
                Start Project
            </button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden z-10 pr-6 pl-6 relative items-center justify-center">

<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" height="974" id="hero-canvas" width="1778"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 z-0 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 hover-trigger opacity-0 animate-fade-in" style={{opacity: '1'}}>
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">Global Agency</span>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.95] mb-12 mix-blend-difference">
<span className="mask-text"><span className="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>ENGINEERING</span></span>
<span className="mask-text"><span className="text-neutral-500" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>DIGITAL</span></span>
<span className="mask-text"><span className="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>PERFECTION</span></span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-12 border-t border-white/10 pt-8 opacity-0 animate-fade-up" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<p className="text-neutral-400 text-sm max-w-xs text-left">
                    We build high-performance operational systems for forward-thinking brands.
                </p>
<div className="flex gap-12 mt-6 md:mt-0">
<div className="text-left">
<div className="text-2xl font-display font-bold">120+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Systems Built</div>
</div>
<div className="text-left">
<div className="text-2xl font-display font-bold">$2B+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Value Generated</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[150vh]" id="work">
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridRowStart: 'auto', gridColumnStart: 'auto', gridRowEnd: 'auto', gridColumnEnd: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1779px', height: '1948px', padding: '0px 0px 974px'}}><div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#030303]" id="portal-container" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1778.823486px', width: '1778.823486px', maxHeight: '974.117615px', height: '974.117615px', padding: '0px', transform: 'translate(0px, 0px)'}}>
<div className="relative w-full h-full flex items-center justify-center">
<div className="w-[30%] h-[40%] overflow-hidden relative" id="portal-image" style={{height: '40.0033%', width: '29.9966%'}}>
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover grayscale-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40">
<h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter mix-blend-overlay">SELECTEDWORKS</h2>
</div>
</div>
</div>
</div></div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridRowStart: 'auto', gridColumnStart: 'auto', gridRowEnd: 'auto', gridColumnEnd: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1779px', height: '1601px', padding: '0px 0px 709px'}}><section className="relative bg-[#030303] overflow-hidden" id="horizontal-scroll-section" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1778.823486px', width: '1778.823486px', maxHeight: '891.746277px', height: '891.746277px', padding: '0px', transform: 'translate(0px, 0px)'}}>
<div className="py-12 px-6 border-b border-white/10 flex justify-between items-end">
<h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">Featured Case Studies</h3>
<span className="text-xs text-white">SCROLL DOWN ↓</span>
</div>
<div className="flex flex-nowrap h-[80vh] items-center pl-6 md:pl-24 gap-12 md:gap-32 w-max" id="horizontal-track" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>

<div className="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger">
<div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
<img alt="Project 1" className="w-full h-full object-cover grayscale-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a906012b-00b9-4610-82f7-f1a6ef3453d0_1600w.jpg"/>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<h4 className="text-3xl font-display font-medium text-white">Vanguard Tower</h4>
<p className="text-neutral-500 text-sm mt-1">Real Estate Architecture</p>
</div>
<div className="text-white text-lg font-display">01</div>
</div>
</div>
<div className="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger">
<div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
<img alt="Project 2" className="w-full h-full object-cover grayscale-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32017361-6e8f-4ec6-a109-c74c79273ec4_1600w.webp"/>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<h4 className="text-3xl font-display font-medium text-white">Cyber Systems</h4>
<p className="text-neutral-500 text-sm mt-1">Fintech Dashboard</p>
</div>
<div className="text-white text-lg font-display">02</div>
</div>
</div>
<div className="group relative w-[80vw] md:w-[40vw] flex-shrink-0 cursor-none view-trigger pr-24">
<div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
<img alt="Project 3" className="w-full h-full object-cover grayscale-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ca1e73a-69c6-49d2-b4d2-339c3a121dda_1600w.webp"/>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<h4 className="text-3xl font-display font-medium text-white">Orbital Labs</h4>
<p className="text-neutral-500 text-sm mt-1">Space Tech Interface</p>
</div>
<div className="text-white text-lg font-display">03</div>
</div>
</div>
</div>
</section></div>

<section className="py-40 px-6 relative z-10 bg-[#050509] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
<div className="sticky top-32 h-fit">
<h2 className="text-6xl font-display font-medium text-white mb-8">Our <br/>Expertise</h2>
<p className="text-neutral-400 text-lg max-w-md mb-12">
                        We don't just design; we engineer outcomes. Our methodology combines rigorous data analysis with world-class aesthetic execution.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-white">
<span className="h-[1px] w-8 bg-white"></span> System Architecture
                        </li>
<li className="flex items-center gap-4 text-neutral-500">
<span className="h-[1px] w-8 bg-neutral-800"></span> UI/UX Design
                        </li>
<li className="flex items-center gap-4 text-neutral-500">
<span className="h-[1px] w-8 bg-neutral-800"></span> Full-Stack Development
                        </li>
</ul>
</div>
<div className="flex flex-col gap-12">

<div className="card-3d-wrap group h-[450px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="card-element relative w-full h-64 border border-white/10 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center">

<div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 animate-scan"></div>

<div className="absolute w-24 h-24 border border-white/10 rounded-full flex items-center justify-center z-10">
<div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>

<svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
<line stroke="white" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="30%"></line>
<line stroke="white" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="30%"></line>
<line stroke="white" strokeWidth="1" x1="50%" x2="50%" y1="50%" y2="80%"></line>

<circle className="animate-pulse" cx="20%" cy="30%" fill="white" r="3"></circle>
<circle className="animate-pulse" cx="80%" cy="30%" fill="white" r="3" style={{animationDelay: '0.5s'}}></circle>
<circle className="animate-pulse" cx="50%" cy="80%" fill="white" r="3" style={{animationDelay: '1s'}}></circle>
</svg>

<div className="absolute bottom-3 left-4 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                                    System Status: ActiveNodes: 3/3
                                </div>
</div>

<div className="card-element relative z-10">
<h3 className="text-3xl font-display font-medium text-white mb-2">Strategy &amp; Architecture</h3>
<p className="text-neutral-500 max-w-sm">Technical discovery, data modeling, and infrastructure roadmap planning.</p>
</div>
</div>
</div>

<div className="card-3d-wrap group h-[450px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100% 40px'}}></div>

<div className="card-element relative w-full h-64 mb-6 perspective-1000">

<div className="absolute top-10 left-10 w-[80%] h-40 border border-white/5 bg-white/[0.02] rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>

<div className="absolute inset-0 w-[90%] h-52 bg-[#050505] border border-white/10 rounded-xl mx-auto shadow-2xl overflow-hidden transform transition-transform group-hover:-translate-y-2">

<div className="h-8 border-b border-white/5 bg-white/[0.03] flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>

<div className="p-4 font-mono text-[10px] text-neutral-400 space-y-2">
<div className="flex gap-2">
<span className="text-purple-400">const</span>
<span className="text-blue-400">initSystem</span>
<span className="text-white">=</span>
<span className="text-yellow-300">async</span>
<span className="text-white">() =&gt; {</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-purple-400">await</span>
<span className="text-white">db.connect(</span>
<span className="text-green-400">'pulse_v2'</span>
<span className="text-white">);</span>
</div>
<div className="pl-4 flex gap-2 items-center">
<span className="text-neutral-500">// Deploying modules...</span>
</div>
<div className="pl-4 bg-white/10 h-3 rounded w-0 animate-type"></div>
<div className="text-white">}</div>
</div>
</div>

<div className="absolute -bottom-2 -right-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-[-5deg] group-hover:rotate-0 transition-transform">
                                    v2.0.4 Ready
                                </div>
</div>

<div className="card-element relative z-10">
<h3 className="text-3xl font-display font-medium text-white mb-2">Development</h3>
<p className="text-neutral-500 max-w-sm">Next-js, WebGL, and scalable backend systems built for speed.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative border-t border-white/10 overflow-hidden" id="testimonials">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">Voices of Industry</h2>
<p className="text-neutral-500 uppercase tracking-widest text-xs">Trusted by leaders worldwide</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[800px] overflow-hidden relative fade-mask">
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>

<div className="flex flex-col gap-8 testimonial-col" data-speed="0.5" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"PulseBoard transformed our fragmented workflow into a singular source of truth. The ROI was immediate."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dbcdf02-39a2-4c13-95f7-3118cc995fa0_320w.webp"/>
</div>
<div>
<div className="text-white text-sm font-medium">David Chen</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CTO, Nexus</div>
</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Elegant, fast, and incredibly robust. It feels like software from the future."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
</div>
<div>
<div className="text-white text-sm font-medium">Sarah Miller</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">VP Design, Stripe</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 testimonial-col -mt-24" data-speed="-0.8" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Finally, an agency that understands that code quality is just as important as visual aesthetics."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a1ae5f-c842-4ee9-a912-505fc66a1ee0_320w.webp"/>
</div>
<div>
<div className="text-white text-sm font-medium">Elena K.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Product Lead, Linear</div>
</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Scaling our infrastructure was a nightmare until PulseBoard stepped in. Flawless execution."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
</div>
<div>
<div className="text-white text-sm font-medium">Tom Hiddleston</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CEO, Vercel</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 testimonial-col" data-speed="0.6" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"We needed a partner who could handle complexity. PulseBoard delivered simplicity through complexity."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden grayscale-img">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_320w.jpg"/>
</div>
<div>
<div className="text-white text-sm font-medium">James O.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Head of Eng, Uber</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-[#050509] border-t border-white/5 pt-24 pb-12">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

<div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">

<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="font-display font-bold tracking-tight text-lg text-white">PULSE<span className="font-light text-neutral-500">BOARD</span></span>
</a>
<p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                        Engineering the digital nervous system for global brands. London, New York, Tokyo.
                    </p>
</div>

<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Work</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">News</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Socials</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-2 p-1 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2024 PulseBoard Agency. All Rights Reserved.
                </div>
<div className="flex gap-6 text-[10px] text-neutral-600 uppercase tracking-widest">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
