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



        // Custom Cursor - Faster response
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursorDot');
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX - 3 + 'px';
            cursorDot.style.top = mouseY - 3 + 'px';
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Hover effects for cursor
        document.querySelectorAll('a, button, .magnetic-btn, .tilt-card').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
        
        // Magnetic Button Effect - Snappier
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
        
        // 3D Tilt Effect - More responsive
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 25;
                const rotateY = (centerX - x) / 25;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
        
        // Floating Particles - Fewer, faster
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full bg-emerald-400/15';
            particle.style.width = Math.random() * 3 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`;
            particle.style.animationDelay = `-${Math.random() * 3}s`;
            particlesContainer.appendChild(particle);
        }
        
        // Scroll Reveal Animation - Faster
        const revealSections = document.querySelectorAll('.reveal-section');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        revealSections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            revealObserver.observe(section);
        });
        
        // Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }
        
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        
        // Nav background on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.03)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor" id="cursor"></div>
<div className="cursor-dot" id="cursorDot"></div>

<div className="noise"></div>

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-morph"></div>
<div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-morph" style={{animationDelay: '-2.5s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-morph" style={{animationDelay: '-1s'}}></div>
<div className="absolute inset-0 hero-bg-grid opacity-40"></div>
<div id="particles"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 glass fast-transition">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight group" href="#">
<span className="relative">
                    hmmmza
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
</span>
<span className="text-gradient">.dev</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm text-neutral-400 hover:text-neutral-100 transition-all duration-150 relative group" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-200"></span>
</a>
<a className="nav-link text-sm text-neutral-400 hover:text-neutral-100 transition-all duration-150 relative group" href="#projects">
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-200"></span>
</a>
<a className="nav-link text-sm text-neutral-400 hover:text-neutral-100 transition-all duration-150 relative group" href="#skills">
                    Skills
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-200"></span>
</a>
<a className="nav-link text-sm text-neutral-400 hover:text-neutral-100 transition-all duration-150 relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-200"></span>
</a>
</div>
<a className="magnetic-btn hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-neutral-950 text-sm font-medium rounded-full transition-all duration-200 animate-pulse-glow" href="#contact">
                Let's Talk
                <span className="iconify" data-icon="lucide:sparkles" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="md:hidden text-neutral-400 hover:text-neutral-100 fast-transition" onclick="toggleMenu()">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 glass-strong hidden flex-col items-center justify-center gap-8" id="mobileMenu">
<a className="text-2xl text-neutral-200 hover:text-gradient transition-all duration-200" href="#about" onclick="toggleMenu()">About</a>
<a className="text-2xl text-neutral-200 hover:text-gradient transition-all duration-200" href="#projects" onclick="toggleMenu()">Projects</a>
<a className="text-2xl text-neutral-200 hover:text-gradient transition-all duration-200" href="#skills" onclick="toggleMenu()">Skills</a>
<a className="text-2xl text-neutral-200 hover:text-gradient transition-all duration-200" href="#contact" onclick="toggleMenu()">Contact</a>
<button className="absolute top-4 right-6 text-neutral-400 hover:text-neutral-100 transition-colors duration-150" onclick="toggleMenu()">
<span className="iconify" data-icon="lucide:x" data-width="28" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8 animate-reveal stagger-1">
<span className="relative flex h-3 w-3">
<span className="animate-ping-fast absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
<span className="text-sm text-emerald-400 font-medium">Available for freelance</span>
</div>

<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 animate-reveal stagger-2">
<span className="block">Building digital</span>
<span className="text-gradient relative inline-block">
                    experiences
                    <svg className="absolute -bottom-2 left-0 w-full" fill="none" viewbox="0 0 300 12">
<path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="url(#gradient)" strokeLinecap="round" strokeWidth="3"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10b981"></stop>
<stop offset="50%" stop-color="#06b6d4"></stop>
<stop offset="100%" stop-color="#8b5cf6"></stop>
</lineargradient>
</defs>
</svg>
</span>
<span className="block">that matter</span>
</h1>

<p className="text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-reveal stagger-3">
                Hi, I'm <span className="text-neutral-100 font-medium">Hamza</span> — a full-stack developer passionate about crafting 
                <span className="text-emerald-400">clean</span>, <span className="text-cyan-400">performant</span>, and 
                <span className="text-violet-400">user-centric</span> web applications.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal stagger-4">
<a className="magnetic-btn group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-100 hover:bg-white text-neutral-950 font-medium rounded-full transition-all duration-200 relative overflow-hidden" href="#projects">
<span className="relative z-10">Explore My Work</span>
<span className="iconify relative z-10 group-hover:translate-y-1 transition-transform duration-200" data-icon="lucide:arrow-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
<div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
</a>
<a className="magnetic-btn group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-white/10 rounded-full transition-all duration-200" href="https://github.com/hmmmza" target="_blank">
<span className="iconify group-hover:rotate-12 transition-transform duration-200" data-icon="lucide:github" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    GitHub Profile
                </a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" style={{animationDuration: '1.5s'}}>
<div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center pt-2">
<div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute top-1/4 left-10 animate-float hidden lg:block" style={{animationDelay: '-0.5s'}}>
<div className="w-14 h-14 glass rounded-2xl flex items-center justify-center rotate-12 hover-lift">
<span className="iconify text-emerald-400" data-icon="lucide:code-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute top-1/3 right-16 animate-float hidden lg:block" style={{animationDelay: '-1.5s'}}>
<div className="w-12 h-12 glass rounded-2xl flex items-center justify-center -rotate-6 hover-lift">
<span className="iconify text-cyan-400" data-icon="lucide:terminal" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-1/3 left-20 animate-float hidden lg:block" style={{animationDelay: '-1s'}}>
<div className="w-10 h-10 glass rounded-xl flex items-center justify-center rotate-6 hover-lift">
<span className="iconify text-violet-400" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-1/4 right-24 animate-float hidden lg:block" style={{animationDelay: '-2s'}}>
<div className="w-12 h-12 glass rounded-2xl flex items-center justify-center -rotate-12 hover-lift">
<span className="iconify text-amber-400" data-icon="lucide:rocket" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</section>

<div className="glow-line max-w-4xl mx-auto"></div>

<section className="py-32 px-6 relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="perspective-container reveal-section">
<div className="tilt-card relative group">
<div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-violet-500/20 p-1 animate-morph">
<div className="w-full h-full rounded-3xl bg-neutral-900/80 backdrop-blur-xl flex items-center justify-center overflow-hidden relative">
<div className="text-[180px] font-bold tracking-tighter text-gradient animate-float">H</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit" style={{animationDuration: '10s'}}>
<div className="w-9 h-9 glass rounded-xl flex items-center justify-center">
<span className="iconify text-emerald-400" data-icon="lucide:braces" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit" style={{animationDuration: '14s', animationDelay: '-3s'}}>
<div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
<span className="iconify text-cyan-400" data-icon="lucide:database" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit" style={{animationDuration: '18s', animationDelay: '-7s'}}>
<div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
<span className="iconify text-violet-400" data-icon="lucide:cloud" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="card-shine rounded-3xl"></div>
</div>
</div>

<div className="absolute -right-6 top-1/4 glass rounded-2xl p-4 animate-float hidden md:block" style={{animationDelay: '-0.5s'}}>
<div className="text-2xl font-bold text-gradient">50+</div>
<div className="text-xs text-neutral-500">Projects</div>
</div>
<div className="absolute -left-6 bottom-1/4 glass rounded-2xl p-4 animate-float hidden md:block" style={{animationDelay: '-1.5s'}}>
<div className="text-2xl font-bold text-gradient">3+</div>
<div className="text-xs text-neutral-500">Years Exp.</div>
</div>
</div>
</div>

<div className="reveal-section">
<span className="inline-block text-sm text-emerald-400 font-medium uppercase tracking-widest mb-4 relative">
<span className="absolute -left-8 top-1/2 w-6 h-px bg-emerald-400"></span>
                        About Me
                    </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
                        Turning <span className="text-gradient">ideas</span> into<br/>reality through code
                    </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        I'm a developer based in the digital realm, focused on building modern web applications that solve real problems. With expertise spanning front-end and back-end technologies, I create seamless experiences from concept to deployment.
                    </p>
<p className="text-lg text-neutral-400 leading-relaxed mb-10">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open source, and continuously learning to stay at the cutting edge of web development.
                    </p>

<div className="grid sm:grid-cols-2 gap-4">
<div className="glass rounded-2xl p-5 hover-lift group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
<span className="iconify text-emerald-400" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold mb-2">Fast &amp; Optimized</h3>
<p className="text-sm text-neutral-500">Performance-first approach for lightning-fast experiences</p>
</div>
<div className="glass rounded-2xl p-5 hover-lift group">
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
<span className="iconify text-cyan-400" data-icon="lucide:palette" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold mb-2">Beautiful Design</h3>
<p className="text-sm text-neutral-500">Pixel-perfect interfaces that delight users</p>
</div>
<div className="glass rounded-2xl p-5 hover-lift group">
<div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
<span className="iconify text-violet-400" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold mb-2">Secure &amp; Reliable</h3>
<p className="text-sm text-neutral-500">Built with security best practices in mind</p>
</div>
<div className="glass rounded-2xl p-5 hover-lift group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
<span className="iconify text-amber-400" data-icon="lucide:refresh-cw" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold mb-2">Scalable</h3>
<p className="text-sm text-neutral-500">Architecture that grows with your needs</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="projects">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-section">
<span className="inline-block text-sm text-emerald-400 font-medium uppercase tracking-widest mb-4">Portfolio</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                    Featured <span className="text-gradient">Projects</span>
</h2>
</div>
<div className="space-y-8">

<div className="perspective-container reveal-section">
<div className="tilt-card glass rounded-3xl overflow-hidden hover-lift group">
<div className="grid lg:grid-cols-2">
<div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_50%)]"></div>
<span className="iconify text-emerald-400/30 group-hover:text-emerald-400/60 group-hover:scale-110 transition-all duration-300" data-icon="lucide:layout-dashboard" data-width="100" style={{strokeWidth: '1'}}></span>
<div className="card-shine"></div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full">Featured</span>
<span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-full">2024</span>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">SaaS Analytics Dashboard</h3>
<p className="text-neutral-400 leading-relaxed mb-6">A comprehensive analytics platform with real-time data visualization, custom reporting, and AI-powered insights for business intelligence.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 glass text-sm rounded-full">React</span>
<span className="px-3 py-1.5 glass text-sm rounded-full">TypeScript</span>
<span className="px-3 py-1.5 glass text-sm rounded-full">Node.js</span>
<span className="px-3 py-1.5 glass text-sm rounded-full">PostgreSQL</span>
</div>
<div className="flex items-center gap-4">
<a className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-neutral-950 font-medium rounded-full transition-all duration-200" href="#">
                                        View Live
                                        <span className="iconify" data-icon="lucide:external-link" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-150" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18" style={{strokeWidth: '1.5'}}></span>
                                        Source
                                    </a>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="perspective-container reveal-section">
<div className="tilt-card glass rounded-3xl overflow-hidden hover-lift group h-full">
<div className="aspect-video bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.2),transparent_50%)]"></div>
<span className="iconify text-violet-400/30 group-hover:text-violet-400/60 group-hover:scale-110 transition-all duration-300" data-icon="lucide:shopping-bag" data-width="70" style={{strokeWidth: '1'}}></span>
<div className="card-shine"></div>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold tracking-tight mb-3">E-Commerce Platform</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-5">Full-featured online store with Stripe payments, inventory management, and real-time order tracking.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full">Next.js</span>
<span className="px-2.5 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full">Stripe</span>
<span className="px-2.5 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full">Prisma</span>
</div>
<a className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-150 group/link" href="#">
                                    View Project
                                    <span className="iconify group-hover/link:translate-x-1 transition-transform duration-150" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>

<div className="perspective-container reveal-section">
<div className="tilt-card glass rounded-3xl overflow-hidden hover-lift group h-full">
<div className="aspect-video bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.2),transparent_50%)]"></div>
<span className="iconify text-orange-400/30 group-hover:text-orange-400/60 group-hover:scale-110 transition-all duration-300" data-icon="lucide:bot" data-width="70" style={{strokeWidth: '1'}}></span>
<div className="card-shine"></div>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold tracking-tight mb-3">AI Chat Application</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-5">Intelligent conversational interface with context awareness, powered by cutting-edge language models.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full">Python</span>
<span className="px-2.5 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full">FastAPI</span>
<span className="px-2.5 py-1 bg-neutral-800/50 text-neutral-400 text-xs rounded-full">OpenAI</span>
</div>
<a className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-150 group/link" href="#">
                                    View Project
                                    <span className="iconify group-hover/link:translate-x-1 transition-transform duration-150" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-16 reveal-section">
<a className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 glass hover:bg-white/5 rounded-full transition-all duration-200 group" href="https://github.com/hmmmza" target="_blank">
<span>View All Projects on GitHub</span>
<span className="iconify group-hover:translate-x-1 transition-transform duration-150" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="skills">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 reveal-section">
<span className="inline-block text-sm text-emerald-400 font-medium uppercase tracking-widest mb-4">Expertise</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                    Technologies I <span className="text-gradient">Master</span>
</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal-section">
<div className="col-span-2 row-span-2 perspective-container">
<div className="tilt-card glass rounded-3xl p-8 h-full hover-lift group relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
<span className="iconify text-emerald-400" data-icon="lucide:code-2" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
<p className="text-neutral-400 mb-6">Building responsive, performant, and accessible user interfaces with modern frameworks and tools.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-neutral-800/50 text-sm rounded-full">React</span>
<span className="px-3 py-1.5 bg-neutral-800/50 text-sm rounded-full">Next.js</span>
<span className="px-3 py-1.5 bg-neutral-800/50 text-sm rounded-full">TypeScript</span>
<span className="px-3 py-1.5 bg-neutral-800/50 text-sm rounded-full">Tailwind</span>
</div>
</div>
<div className="card-shine rounded-3xl"></div>
</div>
</div>
<div className="perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group text-center">
<span className="iconify mx-auto mb-4 text-cyan-400 icon-hover inline-block" data-icon="lucide:server" data-width="36" style={{strokeWidth: '1.5'}}></span>
<div className="font-medium">Node.js</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
<div className="perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group text-center">
<span className="iconify mx-auto mb-4 text-violet-400 icon-hover inline-block" data-icon="lucide:database" data-width="36" style={{strokeWidth: '1.5'}}></span>
<div className="font-medium">PostgreSQL</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
<div className="perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group text-center">
<span className="iconify mx-auto mb-4 text-amber-400 icon-hover inline-block" data-icon="lucide:terminal" data-width="36" style={{strokeWidth: '1.5'}}></span>
<div className="font-medium">Python</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
<div className="perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group text-center">
<span className="iconify mx-auto mb-4 text-rose-400 icon-hover inline-block" data-icon="lucide:git-branch" data-width="36" style={{strokeWidth: '1.5'}}></span>
<div className="font-medium">Git</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
<div className="col-span-2 perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300"></div>
<div className="relative z-10 flex items-center gap-6">
<div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
<span className="iconify text-cyan-400" data-icon="lucide:cloud" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Cloud &amp; DevOps</h3>
<p className="text-sm text-neutral-400">AWS, Docker, CI/CD, Kubernetes</p>
</div>
</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
<div className="perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group text-center">
<span className="iconify mx-auto mb-4 text-emerald-400 icon-hover inline-block" data-icon="lucide:figma" data-width="36" style={{strokeWidth: '1.5'}}></span>
<div className="font-medium">Figma</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
<div className="perspective-container">
<div className="tilt-card glass rounded-2xl p-6 h-full hover-lift group text-center">
<span className="iconify mx-auto mb-4 text-blue-400 icon-hover inline-block" data-icon="lucide:container" data-width="36" style={{strokeWidth: '1.5'}}></span>
<div className="font-medium">Docker</div>
<div className="card-shine rounded-2xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contact">
<div className="max-w-4xl mx-auto text-center reveal-section">
<span className="inline-block text-sm text-emerald-400 font-medium uppercase tracking-widest mb-4">Get in Touch</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
                Let's Create Something<br/><span className="text-gradient">Amazing Together</span>
</h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'm always excited to work on innovative ideas. Let's turn your vision into reality.
            </p>

<div className="perspective-container">
<div className="tilt-card glass rounded-3xl p-8 md:p-12 hover-lift relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-violet-500/5"></div>
<div className="relative z-10">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-neutral-950 font-medium rounded-full transition-all duration-200" href="mailto:hello@hmmmza.dev">
<span className="iconify" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                hello@hmmmza.dev
                            </a>
<a className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-white/10 rounded-full transition-all duration-200" href="https://linkedin.com/in/hmmmza" target="_blank">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                LinkedIn
                            </a>
</div>

<div className="flex items-center justify-center gap-6">
<a className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:scale-110 transition-all duration-150" href="https://github.com/hmmmza" target="_blank">
<span className="iconify" data-icon="lucide:github" data-width="22" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-150" href="https://twitter.com/hmmmza" target="_blank">
<span className="iconify" data-icon="lucide:twitter" data-width="22" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neutral-400 hover:text-violet-400 hover:scale-110 transition-all duration-150" href="https://discord.gg/hmmmza" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="22" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neutral-400 hover:text-pink-400 hover:scale-110 transition-all duration-150" href="https://dribbble.com/hmmmza" target="_blank">
<span className="iconify" data-icon="lucide:dribbble" data-width="22" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="card-shine rounded-3xl"></div>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-neutral-800/50 relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<a className="text-xl font-semibold tracking-tight" href="#">
                hmmmza<span className="text-gradient">.dev</span>
</a>
<p className="text-sm text-neutral-500">© 2024 hmmmza.dev. Crafted with passion ✨</p>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                All systems operational
            </div>
</div>
</footer>


    </>
  );
}
