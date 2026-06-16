import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        // Custom Cursor Logic
        const cursorDot = document.getElementById("cursor-dot");
        const cursorOutline = document.getElementById("cursor-outline");

        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay (animation via CSS transition matches update rate closely enough for simple effect, or we use requestAnimationFrame for smoother lag)
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover states for cursor
        document.querySelectorAll('a, button, .cursor-pointer').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // Typewriter / Text Rotator
        const roles = ["Web Designer", "Graphic Designer", "Creative Coder", "Digital Creator"];
        let roleIndex = 0;
        const roleElement = document.getElementById("typewriter-text");

        function rotateText() {
            roleElement.style.opacity = 0;
            setTimeout(() => {
                roleElement.textContent = roles[roleIndex];
                roleElement.style.opacity = 1;
                roleIndex = (roleIndex + 1) % roles.length;
            }, 500);
        }
        
        // Initial set
        roleElement.textContent = roles[0];
        roleElement.style.transition = "opacity 0.5s ease-in-out";
        setInterval(rotateText, 3000);

        // Three.js 3D Background
        const canvas = document.querySelector('#bg-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 700;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15; // Spread
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xebbf5c, // Gold-ish
            transparent: true,
            opacity: 0.8,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);

        // Add subtle geometric shapes (Icosahedron)
        const geoGeometry = new THREE.IcosahedronGeometry(1, 0);
        const geoMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x444444, 
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const geoMesh = new THREE.Mesh(geoGeometry, geoMaterial);
        geoMesh.position.x = 3;
        scene.add(geoMesh);

        const geoMesh2 = new THREE.Mesh(geoGeometry, geoMaterial);
        geoMesh2.position.x = -3;
        geoMesh2.scale.set(0.5, 0.5, 0.5);
        scene.add(geoMesh2);

        camera.position.z = 3;

        // Mouse interaction for parallax
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = event.clientX / window.innerWidth - 0.5;
            mouseY = event.clientY / window.innerHeight - 0.5;
        });

        // Animate
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            // Rotate particles
            particlesMesh.rotation.y = elapsedTime * 0.05;
            particlesMesh.rotation.x = mouseY * 0.5;
            particlesMesh.rotation.y += mouseX * 0.5;

            // Floating geometry
            geoMesh.rotation.x += 0.005;
            geoMesh.rotation.y += 0.005;
            geoMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.2 + 1; // Float up/down

            geoMesh2.rotation.x -= 0.005;
            geoMesh2.rotation.y -= 0.005;
            geoMesh2.position.y = Math.cos(elapsedTime * 0.7) * 0.2 - 1;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Intersection Observer for Fade In Animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // 3D Tilt Effect Logic (Vanilla JS)
        const card = document.getElementById('profile-card');
        if(card) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot"></div>
<div id="cursor-outline"></div>

<canvas id="bg-canvas"></canvas>

<nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-black/20" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl tracking-tighter font-semibold text-white group flex items-center gap-2" href="#">
<span className="iconify text-amber-400 group-hover:rotate-90 transition-transform duration-500" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="24"></span>
                MS.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#projects">Portfolio</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
</div>
<a className="hidden md:block px-5 py-2 text-xs font-semibold tracking-wide text-black bg-white rounded-full hover:bg-amber-400 transition-colors duration-300" href="#contact">
                Let's Talk
            </a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="z-10 text-center space-y-6 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-amber-300 tracking-wide animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Available for Freelance
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-none">
<span className="block text-neutral-400 text-lg md:text-2xl font-normal tracking-normal mb-2">Hello, I am</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-600 glow-gold font-display">
                    Mohd Subhan
                </span>
</h1>
<div className="h-8 md:h-10 overflow-hidden relative">
<div className="text-lg md:text-2xl text-neutral-300 font-light tracking-wide" id="typewriter-text">

</div>
</div>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                I design visually powerful, performance-driven digital experiences that blend creativity with modern technology. Creating the future, one pixel at a time.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
<a className="group relative px-8 py-3 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:scale-105" href="#projects">
<span className="relative z-10">View Portfolio</span>
<div className="absolute inset-0 bg-amber-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>
<a className="px-8 py-3 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all" href="#contact">
                    Hire Me
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
<span className="iconify" data-icon="lucide:chevrons-down" data-strokeWidth="1.5" data-width="24"></span>
</div>
</section>

<section className="py-24 px-6 relative max-w-7xl mx-auto fade-in-section" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10 transform group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm tilt-card" id="profile-card">
<img alt="Mohd Subhan" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" src="https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/602905681_844065638606512_615413257261496638_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=1d70fc&amp;_nc_ohc=2a24_SvIIs8Q7kNvwFPVTsm&amp;_nc_oc=Adr8ElmBCCZLKURAjVQa_1opGPXN-vRhHAN9FCYHjD9KA4QPnDY9YNQIpvVFPex9yZwMz5fMkNksK-JieCPlV74W&amp;_nc_zt=23&amp;_nc_ht=scontent-del2-3.xx&amp;_nc_gid=z0DHg_IHapBzbkf7xQloxQ&amp;_nc_ss=7a3a8&amp;oh=00_Af00gtB8bbH2mzU_JFE5DPeg_rFwn-F34yuDmp2Chjg4Yg&amp;oe=69D41049"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center gap-4 tilt-content">
<span className="p-2 bg-amber-500/20 rounded-lg text-amber-400 border border-amber-500/30">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</span>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Based In</p>
<p className="text-sm font-medium text-white">Miranpur Katra, Shahjahanpur</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Designing the <span className="text-neutral-500 italic font-display">unimaginable.</span>
</h2>
<p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-6">
                        I am a passionate creative professional with expertise in web design, graphic design, and coding. My focus is on clean UI, powerful branding, and user-centric design that leaves a lasting impression.
                    </p>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
<div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-1">45+</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Projects</p>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-1">4+</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Years Exp.</p>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-1">100%</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Satisfaction</p>
</div>
</div>

<div className="flex gap-6 pt-4 text-neutral-600">
<span className="iconify hover:text-cyan-400 transition-colors" data-icon="lucide:code-2" data-width="24"></span>
<span className="iconify hover:text-purple-400 transition-colors" data-icon="lucide:palette" data-width="24"></span>
<span className="iconify hover:text-amber-400 transition-colors" data-icon="lucide:monitor" data-width="24"></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950/50" id="skills">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end fade-in-section">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Technical <span className="text-amber-400">Arsenal</span>
</h2>
<p className="text-neutral-500 text-sm mt-4 md:mt-0 max-w-md text-right">
                    Tools and technologies I use to bring ideas to life.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 fade-in-section">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-cyan-400">
<span className="iconify" data-icon="lucide:layout" data-width="24"></span>
</div>
<span className="text-2xl font-bold text-white/20 group-hover:text-white transition-colors">95%</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">Web Design &amp; UI/UX</h3>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden relative z-10">
<div className="bg-cyan-500 h-full rounded-full w-[95%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
</div>
</div>
<div className="group relative p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 fade-in-section">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-amber-400">
<span className="iconify" data-icon="lucide:code" data-width="24"></span>
</div>
<span className="text-2xl font-bold text-white/20 group-hover:text-white transition-colors">90%</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">HTML, CSS, JS</h3>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden relative z-10">
<div className="bg-amber-500 h-full rounded-full w-[90%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
<div className="group relative p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 fade-in-section">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
<div className="relative z-10 flex items-start justify-between mb-4">
<div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-purple-400">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
</div>
<span className="text-2xl font-bold text-white/20 group-hover:text-white transition-colors">85%</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">Photoshop &amp; CorelDRAW</h3>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden relative z-10">
<div className="bg-purple-500 h-full rounded-full w-[85%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5" id="services">
<div className="px-6 max-w-7xl mx-auto mb-10 fade-in-section">
<h2 className="text-sm font-semibold tracking-widest text-amber-400 uppercase mb-2">My Expertise</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white">Premium Services</h3>
</div>
<div className="flex gap-6 overflow-x-auto px-6 pb-10 hide-scroll snap-x snap-mandatory fade-in-section">

<div className="min-w-[300px] md:min-w-[400px] snap-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-500/50 transition-colors group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-amber-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
<span className="iconify" data-icon="lucide:globe" data-width="24"></span>
</div>
<h4 className="text-xl font-medium text-white mb-3">Portfolio Websites</h4>
<p className="text-sm text-neutral-400 leading-relaxed">High-end, responsive personal portfolio websites with 3D elements and smooth animations.</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-cyan-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<h4 className="text-xl font-medium text-white mb-3">Business Branding</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Complete identity design including logos, color palettes, and typography guidelines.</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-colors group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-purple-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
<span className="iconify" data-icon="lucide:pen-tool" data-width="24"></span>
</div>
<h4 className="text-xl font-medium text-white mb-3">Graphic Design</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Creative posters, banners, and social media graphics that capture attention.</p>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-pink-500/50 transition-colors group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-pink-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
</div>
<h4 className="text-xl font-medium text-white mb-3">Social Media Assets</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Engaging visuals tailored for Instagram, LinkedIn, and Facebook marketing campaigns.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
<div className="text-center mb-16 fade-in-section">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Selected Works</h2>
<div className="flex flex-wrap justify-center gap-4">
<button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-amber-400 transition-colors">All</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-transparent text-neutral-400 text-xs font-medium hover:text-white hover:border-white/30 transition-colors">Web Design</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-transparent text-neutral-400 text-xs font-medium hover:text-white hover:border-white/30 transition-colors">Branding</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-transparent text-neutral-400 text-xs font-medium hover:text-white hover:border-white/30 transition-colors">UI Concepts</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-xl overflow-hidden cursor-pointer fade-in-section">
<div className="absolute inset-0 bg-neutral-900/40 z-10 transition-all duration-500 group-hover:bg-neutral-900/80 backdrop-blur-[2px] group-hover:backdrop-blur-sm"></div>
<img alt="Project" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="text-amber-400 text-xs tracking-widest uppercase mb-2">Web Design</span>
<h3 className="text-2xl font-semibold text-white mb-2">Fintech Dashboard</h3>
<p className="text-sm text-neutral-400 mb-6 line-clamp-2">A futuristic banking interface designed for clarity and speed.</p>
<button className="w-max flex items-center gap-2 text-sm font-medium text-white border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors">
                        View Project <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer fade-in-section lg:mt-12">
<div className="absolute inset-0 bg-neutral-900/40 z-10 transition-all duration-500 group-hover:bg-neutral-900/80 backdrop-blur-[2px] group-hover:backdrop-blur-sm"></div>
<img alt="Project" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="text-cyan-400 text-xs tracking-widest uppercase mb-2">Branding</span>
<h3 className="text-2xl font-semibold text-white mb-2">Neon Identity</h3>
<p className="text-sm text-neutral-400 mb-6 line-clamp-2">Complete visual identity for a cyberpunk themed clothing brand.</p>
<button className="w-max flex items-center gap-2 text-sm font-medium text-white border-b border-cyan-400 pb-0.5 hover:text-cyan-400 transition-colors">
                        View Project <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer fade-in-section">
<div className="absolute inset-0 bg-neutral-900/40 z-10 transition-all duration-500 group-hover:bg-neutral-900/80 backdrop-blur-[2px] group-hover:backdrop-blur-sm"></div>
<img alt="Project" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="text-purple-400 text-xs tracking-widest uppercase mb-2">Graphic Design</span>
<h3 className="text-2xl font-semibold text-white mb-2">Tech Expo Posters</h3>
<p className="text-sm text-neutral-400 mb-6 line-clamp-2">Series of promotional materials for a global technology summit.</p>
<button className="w-max flex items-center gap-2 text-sm font-medium text-white border-b border-purple-400 pb-0.5 hover:text-purple-400 transition-colors">
                        View Project <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 fade-in-section">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white">Client Voices</h2>
</div>
<div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-black shadow-lg shadow-amber-500/20">
<span className="iconify" data-icon="lucide:quote" data-width="20"></span>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light italic leading-relaxed mb-6">
                    "Subhan transformed our vague ideas into a stunning digital reality. The attention to detail and smooth animations on our new site have significantly increased our client engagement. Truly a premium service."
                </p>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<h5 className="text-white font-medium text-sm">Alex Johnson</h5>
<p className="text-neutral-500 text-xs">CEO, TechNova</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto fade-in-section" id="contact">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Let's work <br/> <span className="text-neutral-600">together.</span></h2>
<p className="text-neutral-400 mb-10 max-w-md">
                    Have a project in mind? I'm always interested in discussing new ideas and opportunities.
                </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="mailto:hello@mohdsubhan.com">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase">Email Me</p>
<p className="text-white group-hover:text-amber-400 transition-colors">hello@mohdsubhan.com</p>
</div>
</a>
<div className="flex gap-4 pt-6">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
</div>

<form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
<div className="group relative">
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors" placeholder="Name" type="text"/>
</div>
<div className="group relative">
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors" placeholder="Email" type="email"/>
</div>
<div className="group relative">
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors" placeholder="Message" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-amber-400 transition-colors relative overflow-hidden" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h3 className="text-xl font-bold text-white tracking-tight">MS.</h3>
<p className="text-neutral-500 text-xs mt-1">Creating digital masterpieces.</p>
</div>
<div className="flex gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-neutral-600 text-xs">
                © 2026 Mohd Subhan | Designed with Creativity &amp; Code
            </p>
</div>
</footer>


    </>
  );
}
