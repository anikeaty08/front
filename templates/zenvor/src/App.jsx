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



        document.addEventListener("DOMContentLoaded", () => {
            const canvas = document.getElementById('webgl-canvas');
            
            // Renderer setup
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            
            // Scene & Camera
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            // Handle Resize
            function resize() {
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                
                if(material.uniforms) {
                    material.uniforms.uResolution.value.set(width, height);
                }
            }
            window.addEventListener('resize', resize);
            
            // Create Particle System
            const particleCount = 15000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const randoms = new Float32Array(particleCount);

            // Distribute particles mainly in a vertical column
            for (let i = 0; i < particleCount; i++) {
                const spreadX = (Math.random() - 0.5) * 80;
                const x = Math.sign(spreadX) * Math.pow(Math.abs(spreadX) / 40, 2) * 40; 
                const y = (Math.random() - 0.5) * 100;
                const z = (Math.random() - 0.5) * 40 - 10;

                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;

                randoms[i] = Math.random();
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

            // Custom Shader Material 
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uMouse: { value: new THREE.Vector2(0,0) },
                    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                },
                vertexShader: `
                    uniform float uTime;
                    uniform vec2 uMouse;
                    attribute float aRandom;
                    varying float vAlpha;
                    varying vec3 vPos;

                    void main() {
                        vPos = position;
                        
                        // Breathing motion
                        vec3 pos = position;
                        pos.y += sin(uTime * 0.5 + aRandom * 10.0) * 2.0;
                        
                        // Parallax effect
                        pos.x += uMouse.x * (pos.z + 20.0) * 0.05;
                        pos.y += uMouse.y * (pos.z + 20.0) * 0.05;

                        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                        
                        // Size attenuation
                        gl_PointSize = (1.5 + aRandom * 2.0) * (50.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;

                        // Depth fade alpha calculation
                        float depthAlpha = smoothstep(-40.0, 10.0, pos.z);
                        
                        // Center concentration alpha (fade out on X edges)
                        float centerAlpha = smoothstep(40.0, 5.0, abs(pos.x));
                        
                        vAlpha = depthAlpha * centerAlpha * (0.3 + aRandom * 0.7);
                    }
                `,
                fragmentShader: `
                    varying float vAlpha;
                    varying vec3 vPos;
                    uniform float uTime;

                    void main() {
                        // Make it a circular dot
                        float dist = length(gl_PointCoord - vec2(0.5));
                        if (dist > 0.5) discard;

                        // Adapted colors to Original Orange Theme
                        vec3 color = vec3(0.976, 0.451, 0.086); // Base orange (#f97316)
                        
                        float centerIntensity = smoothstep(10.0, 0.0, abs(vPos.x));
                        vec3 highlightColor = vec3(0.992, 0.729, 0.455); // Highlight orange
                        color = mix(color, highlightColor, centerIntensity * 0.5);

                        // Soft edge for particle
                        float alphaMultiplier = smoothstep(0.5, 0.2, dist);
                        
                        // Matrix-like vertical banding pulse
                        float bandPulse = sin(vPos.y * 0.5 - uTime * 2.0) * 0.5 + 0.5;

                        gl_FragColor = vec4(color, vAlpha * alphaMultiplier * (0.5 + bandPulse * 0.5));
                    }
                `,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);

            // Mouse tracking for parallax
            let mouseX = 0;
            let mouseY = 0;
            let targetMouseX = 0;
            let targetMouseY = 0;

            document.addEventListener('mousemove', (e) => {
                targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
                targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            });

            // Animation Loop
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);

                const elapsedTime = clock.getElapsedTime();
                material.uniforms.uTime.value = elapsedTime;

                // Smooth mouse interpolation
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;
                material.uniforms.uMouse.value.set(mouseX, mouseY);

                // Slow rotation of entire system for subtle drift
                particles.rotation.y = Math.sin(elapsedTime * 0.1) * 0.05;

                renderer.render(scene, camera);
            }

            resize();
            animate();
        });
    


        const initMotionSystem = () => {
            const cards = document.querySelectorAll('.job-card');
            if (!cards.length) return;
            const isMobile = window.innerWidth < 768;
            
            // Header reveal
            gsap.from(".gsap-reveal", {
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.1
            });

            // Card Initialization & Entrance
            cards.forEach((card, i) => {
                const targetX = isMobile ? parseFloat(card.dataset.mtx) : parseFloat(card.dataset.tx);
                const targetY = isMobile ? parseFloat(card.dataset.mty) : parseFloat(card.dataset.ty);
                
                card.baseX = targetX;
                card.baseY = targetY;

                gsap.fromTo(card, 
                    { x: 0, y: 0, scale: 0.8, opacity: 0, z: -200, rotationX: 0, rotationY: 0 },
                    { 
                        x: targetX, 
                        y: targetY, 
                        scale: 1, 
                        opacity: 1, 
                        z: 0, 
                        duration: 1.4, 
                        ease: "elastic.out(1, 0.7)", 
                        delay: 0.3 + (i * 0.1) 
                    }
                );
            });

            let mouseX = 0;
            let mouseY = 0;
            document.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
                mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            });

            // Continuous Organic Breathing & Parallax Loop
            const renderFloat = () => {
                requestAnimationFrame(renderFloat);
                const t = performance.now() * 0.001;

                cards.forEach((card, i) => {
                    const pX = parseFloat(card.dataset.phasex) || i;
                    const pY = parseFloat(card.dataset.phasey) || i;
                    const speed = parseFloat(card.dataset.speed) || 1;
                    
                    const waveY = Math.sin(t * speed + pY) * 12;
                    const waveX = Math.cos(t * speed * 0.8 + pX) * 8;
                    
                    const rotZ = Math.sin(t * speed * 0.4 + i) * 1.5;
                    const rotXTilt = Math.sin(t * speed * 0.6 + pX) * 3 + (mouseY * -8);
                    const rotYTilt = Math.cos(t * speed * 0.5 + pY) * 3 + (mouseX * 8);

                    const paraX = mouseX * (15 + i * 5);
                    const paraY = mouseY * (15 + i * 5);

                    gsap.set(card, {
                        x: card.baseX + waveX + paraX,
                        y: card.baseY + waveY + paraY,
                        rotationX: rotXTilt,
                        rotationY: rotYTilt,
                        rotationZ: rotZ,
                        transformPerspective: 1000
                    });
                });
            };
            
            setTimeout(renderFloat, 1500);
        };

        window.addEventListener('DOMContentLoaded', initMotionSystem);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="wrapper">

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
            .gradient-blur {
                position: fixed;
                z-index: 5;
                inset: 0 0 auto 0;
                height: 12%;
                pointer-events: none;
            }
            .gradient-blur>div,
            .gradient-blur::before,
            .gradient-blur::after {
                position: absolute;
                inset: 0;
            }
            .gradient-blur::before {
                content: "";
                z-index: 1;
                backdrop-filter: blur(0.5px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
            }
            .gradient-blur>div:nth-of-type(1) {
                z-index: 2;
                backdrop-filter: blur(1px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
            }
            .gradient-blur>div:nth-of-type(2) {
                z-index: 3;
                backdrop-filter: blur(2px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
            }
            .gradient-blur>div:nth-of-type(3) {
                z-index: 4;
                backdrop-filter: blur(4px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
            }
            .gradient-blur>div:nth-of-type(4) {
                z-index: 5;
                backdrop-filter: blur(8px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
            }
            .gradient-blur>div:nth-of-type(5) {
                z-index: 6;
                backdrop-filter: blur(16px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
            }
            .gradient-blur>div:nth-of-type(6) {
                z-index: 7;
                backdrop-filter: blur(32px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
            }
            .gradient-blur::after {
                content: "";
                z-index: 8;
                backdrop-filter: blur(64px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
            }
        </style>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-80" height="2042" id="webgl-canvas" style={{width: '2048px', height: '1021px'}} width="4096"></canvas>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
<div className="w-[200%] md:w-full h-[150%] absolute -top-1/4 vertical-flare blur-3xl opacity-60 mix-blend-screen"></div>
<div className="w-[2px] h-full absolute top-0 bg-gradient-to-b from-transparent via-orange-200 to-transparent opacity-40 blur-[2px]"></div>
<div className="w-[10px] h-full absolute top-0 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-30 blur-md"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex flex-col border-x border-white/[0.04] bg-grid-pattern bg-noise">

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 z-20"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 z-20"></div>
<div className="relative z-10 w-full flex flex-col">

<nav className="flex w-full max-w-[1200px] mx-auto py-4 px-6 sticky top-6 z-50 bg-[#080808]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 p-[1px]">
<div className="w-full h-full bg-[#080808] rounded-full flex items-center justify-center">
<iconify-icon className="text-orange-400 text-sm" icon="solar:programming-linear"></iconify-icon>
</div>
</div>
<span className="text-xl font-medium text-white tracking-tight">Zenvor</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-light text-[#D4D4D4]">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="hidden md:block bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl text-sm font-medium uppercase tracking-[0.35px] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] leading-5">
              Start Project
            </button>
<button className="md:hidden text-[#D4D4D4] hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="pt-[96px] pb-16 text-center relative px-6">
<h1 className="text-6xl font-medium tracking-tight mb-8 leading-none text-white max-w-4xl mx-auto">
              Build Your Digital<br/>Presence <span className="text-accent">Easily</span>
</h1>
<p className="text-xl font-light text-[#D4D4D4] max-w-2xl mx-auto mb-12 leading-7">
              Empower your brand with cutting-edge web development, seamless design, and scalable infrastructure solutions.
            </p>
<div className="flex justify-center mb-24">
<div className="flex items-center bg-[#080808]/80 backdrop-blur-md border border-[#404040] rounded-xl p-1.5 w-full max-w-lg transition-colors focus-within:border-orange-500">
<input className="bg-transparent border-none outline-none text-white px-5 py-3 w-full text-sm placeholder-[#636363] font-light" placeholder="Your Email" type="email"/>
<button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl text-sm font-medium uppercase tracking-[0.35px] whitespace-nowrap transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                  Get Started
                </button>
</div>
</div>

<div className="flex w-screen max-w-6xl mr-auto ml-auto pt-40 pb-40 items-center justify-center xl:pt-0">
<div className="w-full h-[700px] max-w-6xl max-h-[95vh] rounded-[24px] pt-[1px] pr-[1px] pb-[1px] pl-[1px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 55%, transparent)'}}>
<div className="flex flex-col overflow-hidden bg-[#080808]/95 w-full h-full border-[#262626] border rounded-[23px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-xl">

<div className="flex bg-[#141414]/50 border-[#262626] border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#404040]"></div>
<div className="w-3 h-3 rounded-full bg-[#636363]"></div>
<div className="w-3 h-3 rounded-full bg-[#979797]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-[#262626] transition-colors">
<svg className="h-4 w-4 text-[#979797]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-[#262626] flex flex-col bg-[#080808]/80">

<div className="p-4 border-b border-[#262626]">
<a className="inline-flex items-center justify-start gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 p-[1px]">
<div className="w-full h-full bg-[#080808] rounded-lg flex items-center justify-center">
<svg className="h-4 w-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg>
</div>
</div>
<span className="font-medium text-white tracking-tight">Zenvor</span>
</a>
<div className="text-xs text-[#979797] mt-1 pl-10 font-light">Web Agency Platform</div>
</div>

<nav className="flex-1 overflow-y-auto">
<div className="px-3 pt-3">
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-orange-500 bg-orange-500/10 border border-orange-500/30 font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                Dashboard
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors mt-1 border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                Projects
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors mt-1 border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Templates
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors mt-1 border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                Analytics
              </a>
</div>
<div className="px-3 pt-6">
<div className="text-xs uppercase tracking-widest text-[#636363] mb-2 px-3 font-medium">Recent Builds</div>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                Fintech Dashboard
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                Retail E-commerce
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                Healthcare Portal
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                SaaS Landing Page
              </a>
</div>
<div className="px-3 pt-6 pb-4">
<div className="text-xs uppercase tracking-widest text-[#636363] mb-2 px-3 font-medium">Resources</div>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                Documentation
              </a>
<a className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent font-medium">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                Settings
              </a>
</div>
</nav>

<div className="border-t border-[#262626] p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-[#979797]">Build Minutes</span>
<span className="text-xs font-medium text-white">450 / 500</span>
</div>
<div className="w-full h-1.5 bg-[#141414] rounded-full overflow-hidden border border-[#262626]">
<div className="h-full bg-gradient-to-r from-orange-500 to-orange-400" style={{width: '90%'}}></div>
</div>
<button className="mt-3 w-full rounded-xl px-3 py-2 text-sm font-medium text-[#D4D4D4] bg-[#141414] border border-[#404040] hover:border-orange-500 hover:text-orange-500 transition-colors">
              Upgrade Plan
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#080808]/40 backdrop-blur-sm">

<div className="flex items-center justify-between border-b border-[#262626] px-6 py-4 bg-[#080808]/50">
<div className="flex items-center gap-3">
<h1 className="text-xl font-medium tracking-tight text-white">Project Library</h1>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent hover:border-[#262626]">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                Billing
              </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium text-[#D4D4D4] hover:bg-[#141414] hover:text-white transition-colors border border-transparent hover:border-[#262626]">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect height="5" rx="2" width="18" x="3" y="3"></rect><line x1="10" x2="10" y1="12" y2="17"></line><line x1="14" x2="14" y1="12" y2="17"></line></svg>
                Deployments
              </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6">
<div className="grid grid-cols-2 gap-4 mb-6">

<div className="group relative aspect-video rounded-xl overflow-hidden border border-[#262626] hover:border-orange-500 transition-colors">
<img alt="Project 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        Preview
                      </button>
<button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-3 left-3">
<span className="text-xs rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur px-2.5 py-1 text-green-500 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live
                  </span>
</div>
</div>

<div className="group relative aspect-video rounded-xl overflow-hidden border border-[#262626] hover:border-orange-500 transition-colors">
<img alt="Project 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        Preview
                      </button>
<button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-3 left-3">
<span className="text-xs rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur px-2.5 py-1 text-orange-500 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> Building
                  </span>
</div>
</div>

<div className="group relative aspect-video rounded-xl overflow-hidden border border-[#262626] hover:border-orange-500 transition-colors">
<img alt="Project 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        Preview
                      </button>
<button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-3 left-3">
<span className="text-xs rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur px-2.5 py-1 text-green-500 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live
                  </span>
</div>
</div>

<div className="group relative aspect-video rounded-xl overflow-hidden border border-[#262626] hover:border-orange-500 transition-colors">
<img alt="Project 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2">
<button className="flex-1 rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        Preview
                      </button>
<button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</div>
<div className="absolute top-3 left-3">
<span className="text-xs rounded-full border border-[#404040] bg-[#141414]/80 backdrop-blur px-2.5 py-1 text-[#979797] font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#636363]"></span> Draft
                  </span>
</div>
</div>
</div>

<div className="rounded-xl border border-[#262626] bg-[#141414] p-5">
<div className="flex items-start justify-between mb-3">
<div className="text-sm font-medium text-white">Project Brief</div>
<button className="p-1.5 rounded-lg hover:bg-[#262626] border border-transparent hover:border-[#404040] transition-colors">
<svg className="h-4 w-4 text-[#979797]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
<p className="text-sm text-[#D4D4D4] leading-relaxed font-light">
                Modern e-commerce platform with seamless checkout, real-time inventory sync, dynamic product filtering, responsive UI components, and a high-performance headless frontend architecture.
              </p>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-xs rounded-md border border-[#404040] bg-[#212121] px-2.5 py-1.5 text-[#D4D4D4] font-medium">React</span>
<span className="text-xs rounded-md border border-[#404040] bg-[#212121] px-2.5 py-1.5 text-[#D4D4D4] font-medium">Next.js</span>
<span className="text-xs rounded-md border border-[#404040] bg-[#212121] px-2.5 py-1.5 text-[#D4D4D4] font-medium">Tailwind CSS</span>
</div>
</div>
</div>

<div className="border-t border-[#262626] p-6 bg-[#080808]/50">
<div className="rounded-xl border border-[#262626] bg-[#141414] focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-colors shadow-inner">
<div className="px-5 py-4">
<textarea className="w-full bg-transparent text-sm font-light placeholder-[#636363] text-white focus:outline-none resize-none" placeholder="Describe the web application you want to build..." rows="3"></textarea>
</div>
<div className="flex items-center justify-between border-t border-[#262626] px-5 py-4">
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-[#D4D4D4] bg-[#212121] border border-[#404040] hover:border-orange-500 hover:text-orange-500 transition-colors">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    Figma Import
                  </button>
<button className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-[#D4D4D4] bg-[#212121] border border-[#404040] hover:border-orange-500 hover:text-orange-500 transition-colors">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                    Use Template
                  </button>
</div>
<button className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-[#080808] bg-white hover:bg-gray-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] transition-all uppercase tracking-[0.35px]">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  Deploy Site
                </button>
</div>
</div>
</div>
</main>

<aside className="w-80 border-l border-[#262626] flex flex-col bg-[#080808]/80">
<div className="px-5 py-4 border-b border-[#262626]">
<div className="text-base font-medium tracking-tight text-white">Project Config</div>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="">
<label className="text-xs text-[#979797] uppercase tracking-widest font-medium mb-3 block">Framework</label>
<div className="space-y-2">
<button className="w-full text-left px-4 py-3 rounded-xl text-sm text-orange-500 bg-orange-500/10 border border-orange-500/30">
<div className="font-medium">Next.js 14</div>
<div className="text-xs text-orange-500/70 mt-1">App Router, Server Actions</div>
</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-sm text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">
<div className="font-medium">React SPA</div>
<div className="text-xs text-[#636363] mt-1">Vite, Client-side routing</div>
</button>
</div>
</div>

<div>
<label className="text-xs text-[#979797] uppercase tracking-widest font-medium mb-3 block">Database</label>
<div className="grid grid-cols-2 gap-2">
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-orange-500 border border-orange-500/30 bg-orange-500/10">PostgreSQL</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">MySQL</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">MongoDB</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Redis</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">SQLite</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Supabase</button>
</div>
</div>

<div className="">
<label className="text-xs text-[#979797] uppercase tracking-widest font-medium mb-3 block">Hosting Tier</label>
<div className="space-y-2">
<button className="w-full text-left px-4 py-3 rounded-xl text-sm text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">
<div className="flex items-center justify-between">
<span className="font-medium">Basic</span>
<span className="text-xs text-[#636363]">Shared Edge</span>
</div>
</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-sm text-orange-500 border border-orange-500/30 bg-orange-500/10">
<div className="flex items-center justify-between">
<span className="font-medium">Pro</span>
<span className="text-xs text-orange-500/70">Dedicated Edge</span>
</div>
</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-sm text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">
<div className="flex items-center justify-between">
<span className="font-medium">Enterprise</span>
<span className="text-xs text-[#636363]">Custom Cluster</span>
</div>
</button>
</div>
</div>

<div className="">
<label className="text-xs text-[#979797] uppercase tracking-widest font-medium mb-3 block">UI Framework</label>
<div className="space-y-2">
<button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-orange-500 border border-orange-500/30 bg-orange-500/10">Tailwind CSS</button>
<button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Shadcn UI</button>
<button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Chakra UI</button>
<button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">MUI</button>
<button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Custom CSS</button>
</div>
</div>

<div>
<label className="text-xs text-[#979797] uppercase tracking-widest font-medium mb-3 block">Environments</label>
<div className="grid grid-cols-4 gap-2">
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Dev</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Stg</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#D4D4D4] bg-[#141414] hover:border-[#404040] border border-[#262626] transition-colors">Prd</button>
<button className="px-3 py-2.5 rounded-xl text-sm font-medium text-orange-500 border border-orange-500/30 bg-orange-500/10">All</button>
</div>
</div>

<div className="pt-4 border-t border-[#262626]">
<button className="flex items-center gap-2 text-sm font-medium text-[#D4D4D4] hover:text-white transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
                Advanced Settings
              </button>
</div>
</div>
</aside>
</div>
</div>
</div>
</div><div className="flex w-full h-[450px] max-w-5xl mt-12 mr-auto ml-auto relative items-center justify-center">

<div className="absolute left-0 md:left-[5%] top-[45%] p-[1px] rounded-[24px] transform -rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 hidden md:block shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808]/95 backdrop-blur-md rounded-[23px] p-6 w-[320px]">
<div className="flex justify-between items-start mb-6">
<div className="">
<div className="flex items-baseline gap-3 mb-1">
<span className="text-xl font-medium tracking-tight text-white">124,592</span>
<span className="text-sm font-light text-[#979797]">(Visits)</span>
</div>
</div>
</div>
<div className="flex justify-between text-sm items-end font-light">
<div className="">
<p className="text-[#979797] mb-1">Conversion</p>
<p className="text-green-500 font-normal">+14.80%</p>
</div>
<div>
<p className="text-[#979797] mb-1">Top Sources</p>
<div className="flex items-center gap-4 text-[#D4D4D4]">
<div className="flex items-center gap-1.5"><iconify-icon className="text-orange-400" icon="solar:magnifer-linear"></iconify-icon> <span>SEO</span></div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-orange-500" icon="solar:link-linear"></iconify-icon> <span>Direct</span></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 p-[1px] rounded-[24px] transform hover:-translate-y-2 transition-transform duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] w-full max-w-[420px]" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-[40px] w-full">
<div className="bg-[#141414] rounded-xl p-5 mb-3 flex justify-between items-center border border-[#262626]">
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight mb-2 text-white">0.6s</span>
<span className="text-sm font-light text-[#979797]">LCP Score</span>
</div>
<div className="flex flex-col items-end gap-2">
<button className="flex items-center gap-2 bg-[#212121] hover:bg-[#262626] rounded-xl px-4 py-2 text-sm font-light border border-[#404040] transition-colors text-white">
<iconify-icon className="text-orange-500" icon="solar:window-frame-linear"></iconify-icon>
                        Client <iconify-icon className="text-[#979797]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<span className="text-xs font-light text-[#979797]">Status: Fast</span>
</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#212121] border border-[#404040] rounded-full p-3 z-20 hover:bg-[#262626] cursor-pointer transition-colors shadow-[0_4px_12px_0_rgba(249,115,22,0.3)]">
<iconify-icon className="text-[#D4D4D4]" icon="solar:sort-vertical-linear"></iconify-icon>
</div>
<div className="bg-[#141414] rounded-xl p-5 mt-3 flex justify-between items-center border border-[#262626]">
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight mb-2 text-white">99.9%</span>
<span className="text-sm font-light text-[#979797]">Last 30 Days</span>
</div>
<div className="flex flex-col items-end gap-2">
<button className="flex items-center gap-2 bg-[#212121] hover:bg-[#262626] rounded-xl px-4 py-2 text-sm font-light border border-[#404040] transition-colors text-white">
<iconify-icon className="text-orange-400" icon="solar:server-linear"></iconify-icon>
                        Server <iconify-icon className="text-[#979797]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<span className="text-xs font-light text-orange-400">Status: Active</span>
</div>
</div>
</div>
</div>

<div className="absolute right-0 md:right-[5%] top-[35%] p-[1px] rounded-[24px] transform rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 hidden md:block shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808]/95 backdrop-blur-md rounded-[23px] p-6 w-[280px]">
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#141414] transition-colors mb-2 border border-transparent hover:border-[#262626]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#212121] border border-[#262626] flex items-center justify-center">
<iconify-icon className="text-[#D4D4D4]" icon="solar:code-circle-linear"></iconify-icon></div>
<div className="text-left">
<p className="text-sm font-normal text-white">React Core
                          <span className="text-[#979797] font-light text-xs">(UI)</span></p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-normal text-white">Active</p>
<p className="text-xs font-light text-green-500 flex items-center justify-end gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Valid</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#141414] transition-colors border border-transparent hover:border-[#262626]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#212121] border border-[#262626] flex items-center justify-center">
<iconify-icon className="text-orange-300" icon="solar:pallete-2-linear"></iconify-icon></div>
<div className="text-left">
<p className="text-sm font-normal text-white">Tailwind
                          <span className="text-[#979797] font-light text-xs">(CSS)</span></p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-normal text-white">Active</p>
<p className="text-xs font-light text-[#979797] flex items-center justify-end gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Valid</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full border-t border-white/[0.04] overflow-hidden flex flex-col min-h-screen bg-[#080808]/40 backdrop-blur-sm z-10">

<div className="absolute inset-y-0 left-1/4 w-px bg-white/[0.02] pointer-events-none hidden lg:block z-0"></div>
<div className="absolute inset-y-0 right-1/4 w-px bg-white/[0.02] pointer-events-none hidden lg:block z-0"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.02] pointer-events-none z-0"></div>

<div className="w-full border-b border-white/[0.04] flex justify-between items-center px-6 py-4 relative z-20">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316] animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-[#979797] font-medium">Float Space System</span>
</div>
<div className="text-xs text-[#979797] font-medium tracking-widest uppercase">Grid Active</div>
</div>

<header className="gsap-reveal relative z-20 flex flex-col items-center justify-center pt-24 pb-16 w-full max-w-2xl mx-auto text-center px-6" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<h2 className="text-5xl font-medium text-white tracking-tight mb-5 leading-none">Weightless Career<br/><span className="text-accent">Exploration</span></h2>
<p className="text-[#D4D4D4] text-sm font-light max-w-md mx-auto leading-5">Interact with open roles in a responsive, tactile environment. Cards exist as multi-layered physical objects drifting through computational space.</p>
</header>

<div className="relative w-full flex-1 min-h-[900px] md:min-h-[700px] perspective-[2000px] z-20" id="float-container">

<div className="job-card absolute left-1/2 top-1/2 -ml-[140px] -mt-[80px] w-[280px] h-[160px] cursor-grab group select-none" data-mtx="0" data-mty="-360" data-phasex="0.2" data-phasey="1.5" data-speed="0.7" data-tx="-320" data-ty="-200" style={{transformStyle: 'preserve-3d', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'perspective(1000px) translate(-320px, -200px) rotate(0.786791deg) rotateY(-5.853894deg) rotateX(-0.004197deg)'}}>
<div className="absolute inset-0 rounded-[24px] translate-y-[18px] translate-x-[4px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:translate-y-[24px] group-hover:translate-x-[8px] group-hover:scale-[0.98]" style={{background: 'linear-gradient(-30deg, #F97316, transparent, #EA580C)', opacity: '0.8'}}></div>
<div className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl rounded-[24px] border border-[#262626] p-[22px] flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-translate-x-1" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start" style={{transform: 'translateZ(20px)'}}>
<div className="">
<h3 className="text-white font-medium text-lg leading-tight tracking-tight">Senior Motion<br/>Designer</h3>
<p className="text-[#979797] text-xs uppercase tracking-widest mt-2 font-light">Remote • Full-time</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#404040] shadow-sm overflow-hidden bg-[#141414] shrink-0">
<img alt="Hiring Manager" className="w-full h-full object-cover opacity-80 mix-blend-lighten grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg"/>
</div>
</div>
<div className="flex items-end justify-between" style={{transform: 'translateZ(10px)'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#141414] border border-[#262626] text-orange-400 text-xs font-light tracking-wide">Creative</span>
<span className="text-[#636363] text-xs uppercase tracking-widest">Posted 2d ago</span>
</div>
<iconify-icon className="text-[#636363] text-xl group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="job-card absolute left-1/2 top-1/2 -ml-[140px] -mt-[80px] w-[280px] h-[160px] cursor-grab group select-none" data-mtx="0" data-mty="-180" data-phasex="1.8" data-phasey="0.3" data-speed="0.8" data-tx="300" data-ty="-140" style={{transformStyle: 'preserve-3d', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'perspective(1000px) translate(300px, -140px) rotate(1.497279deg) rotateY(-2.721598deg) rotateX(-1.418857deg)'}}>
<div className="absolute inset-0 rounded-[24px] translate-y-[18px] translate-x-[4px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:translate-y-[24px] group-hover:translate-x-[8px] group-hover:scale-[0.98]" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)', opacity: '0.8'}}></div>
<div className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl rounded-[24px] border border-[#262626] p-[22px] flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-translate-x-1" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start" style={{transform: 'translateZ(20px)'}}>
<div>
<h3 className="text-white font-medium text-lg leading-tight tracking-tight">Design Systems<br/>Lead</h3>
<p className="text-[#979797] text-xs uppercase tracking-widest mt-2 font-light">NY • Hybrid</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#404040] shadow-sm overflow-hidden bg-[#141414] shrink-0">
<img alt="Hiring Manager" className="w-full h-full object-cover opacity-80 mix-blend-lighten grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
</div>
<div className="flex items-end justify-between" style={{transform: 'translateZ(10px)'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#141414] border border-[#262626] text-white text-xs font-light tracking-wide">Product</span>
<span className="text-[#636363] text-xs uppercase tracking-widest">Posted 4d ago</span>
</div>
<iconify-icon className="text-[#636363] text-xl group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="job-card absolute left-1/2 top-1/2 -ml-[140px] -mt-[80px] w-[280px] h-[160px] cursor-grab group select-none z-10" data-mtx="0" data-mty="0" data-phasex="0.8" data-phasey="2.1" data-speed="0.6" data-tx="0" data-ty="30" style={{transformStyle: 'preserve-3d', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'perspective(1000px) translate(0px, 30px) rotate(0.929494deg) rotateY(-6.813596deg) rotateX(0.421071deg)'}}>
<div className="absolute inset-0 rounded-[24px] translate-y-[18px] translate-x-[4px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:translate-y-[24px] group-hover:translate-x-[8px] group-hover:scale-[0.98]" style={{background: 'linear-gradient(-30deg, #EA580C, transparent, #9A3412)', opacity: '0.8'}}></div>
<div className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl rounded-[24px] border border-[#262626] p-[22px] flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8),_inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-translate-x-1" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start" style={{transform: 'translateZ(20px)'}}>
<div className="">
<h3 className="text-white font-medium text-lg leading-tight tracking-tight">Creative<br/>Technologist</h3>
<p className="text-[#979797] text-xs uppercase tracking-widest mt-2 font-light">Remote • Contract</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#404040] shadow-sm overflow-hidden bg-[#141414] shrink-0">
<img alt="Hiring Manager" className="w-full h-full object-cover opacity-80 mix-blend-lighten grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_800w.jpg"/>
</div>
</div>
<div className="flex items-end justify-between" style={{transform: 'translateZ(10px)'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#141414] border border-[#262626] text-[#D4D4D4] text-xs font-light tracking-wide">Engineering</span>
<span className="text-[#636363] text-xs uppercase tracking-widest">Posted 1w ago</span>
</div>
<iconify-icon className="text-[#636363] text-xl group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="job-card absolute left-1/2 top-1/2 -ml-[140px] -mt-[80px] w-[280px] h-[160px] cursor-grab group select-none" data-mtx="0" data-mty="180" data-phasex="2.5" data-phasey="0.9" data-speed="0.9" data-tx="-260" data-ty="180" style={{transformStyle: 'preserve-3d', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'perspective(1000px) translate(-260px, 180px) rotate(-0.807335deg) rotateY(-4.756987deg) rotateX(-3.805652deg)'}}>
<div className="absolute inset-0 rounded-[24px] translate-y-[18px] translate-x-[4px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:translate-y-[24px] group-hover:translate-x-[8px] group-hover:scale-[0.98]" style={{background: 'linear-gradient(-30deg, #FFEDD5, transparent, #FDBA74)', opacity: '0.8'}}></div>
<div className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl rounded-[24px] border border-[#262626] p-[22px] flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-translate-x-1" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start" style={{transform: 'translateZ(20px)'}}>
<div className="">
<h3 className="text-white font-medium text-lg leading-tight tracking-tight">Frontend<br/>Architect</h3>
<p className="text-[#979797] text-xs uppercase tracking-widest mt-2 font-light">SF • Full-time</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#404040] shadow-sm overflow-hidden bg-[#141414] shrink-0">
<img alt="Hiring Manager" className="w-full h-full object-cover opacity-80 mix-blend-lighten grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg"/>
</div>
</div>
<div className="flex items-end justify-between" style={{transform: 'translateZ(10px)'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#141414] border border-[#262626] text-orange-500 text-xs font-light tracking-wide">Core Tech</span>
<span className="text-[#636363] text-xs uppercase tracking-widest">Posted 2w ago</span>
</div>
<iconify-icon className="text-[#636363] text-xl group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="job-card absolute left-1/2 top-1/2 -ml-[140px] -mt-[80px] w-[280px] h-[160px] cursor-grab group select-none" data-mtx="0" data-mty="360" data-phasex="0.5" data-phasey="3.2" data-speed="0.75" data-tx="280" data-ty="220" style={{transformStyle: 'preserve-3d', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'perspective(1000px) translate(280px, 220px) rotate(-1.489071deg) rotateY(-6.206864deg) rotateX(0.376318deg)'}}>
<div className="absolute inset-0 rounded-[24px] translate-y-[18px] translate-x-[4px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:translate-y-[24px] group-hover:translate-x-[8px] group-hover:scale-[0.98]" style={{background: 'linear-gradient(-30deg, #C2410C, transparent, #F97316)', opacity: '0.8'}}></div>
<div className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl rounded-[24px] border border-[#262626] p-[22px] flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-translate-x-1" style={{transformStyle: 'preserve-3d'}}>
<div className="flex justify-between items-start" style={{transform: 'translateZ(20px)'}}>
<div>
<h3 className="text-white font-medium text-lg leading-tight tracking-tight">Product<br/>Strategist</h3>
<p className="text-[#979797] text-xs uppercase tracking-widest mt-2 font-light">Remote • Full-time</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#404040] shadow-sm overflow-hidden bg-[#141414] shrink-0">
<img alt="Hiring Manager" className="w-full h-full object-cover opacity-80 mix-blend-lighten grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_800w.jpg"/>
</div>
</div>
<div className="flex items-end justify-between" style={{transform: 'translateZ(10px)'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#141414] border border-[#262626] text-orange-300 text-xs font-light tracking-wide">Strategy</span>
<span className="text-[#636363] text-xs uppercase tracking-widest">Posted 3w ago</span>
</div>
<iconify-icon className="text-[#636363] text-xl group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full border-t border-white/[0.04] flex justify-center items-center py-6 mt-auto relative z-20">
<p className="text-xs text-[#979797] uppercase tracking-widest font-normal">Scroll to explore</p>
</div>
</section>
<div className="max-w-[1200px] w-full mx-auto px-6">

<section className="py-10 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
<div className="">
<h3 className="text-sm font-normal text-[#D4D4D4] uppercase tracking-[0.025em] mb-3">Global Reach</h3>
<p className="text-5xl font-medium text-white tracking-tight mb-2">120+</p>
<p className="text-sm font-light text-[#979797]">Projects Launched</p>
</div>
<div className="">
<h3 className="text-sm font-normal text-[#D4D4D4] uppercase tracking-[0.025em] mb-3">Client Revenue</h3>
<p className="text-5xl font-medium text-white tracking-tight mb-2">$1B+</p>
<p className="text-sm font-light text-[#979797]">Generated for our partners</p>
</div>
<div className="">
<h3 className="text-sm font-normal text-[#D4D4D4] uppercase tracking-[0.025em] mb-3">Platform Reliability</h3>
<p className="text-5xl font-medium text-white tracking-tight mb-2">3M+</p>
<p className="text-sm font-light text-[#979797]">Lines of Code Written</p>
</div>
</div>
</section>

<section className="pt-[96px] pb-[96px]">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="leading-none text-5xl font-medium text-white tracking-tight max-w-xl">Building the <span className="text-accent transition-colors duration-300 hover:text-orange-400">Future</span> of Digital Innovation</h2>
<p className="text-sm font-light text-[#D4D4D4] md:text-right leading-5">
                  Beyond Templates,<br/>Towards Custom Excellence
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-[1px] rounded-[24px] group hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-500 cursor-pointer" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-[40px] flex flex-col h-[420px] transition-colors duration-500 group-hover:bg-[#0d0d0d]">
<h3 className="text-xl font-normal text-white mb-3 leading-7">Built for Performance</h3>
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-5">Optimized codebases and lightning-fast load times for maximum conversion.</p>
<div className="mt-auto bg-[#141414] rounded-xl border border-[#262626] p-6 flex items-center justify-center relative h-48 overflow-hidden inset-shadow-[0_1px_0_0_rgba(255,255,255,0.05)] group-hover:border-[#404040] transition-colors duration-500">
<div className="absolute inset-x-6 bottom-0 top-12 border border-[#404040] rounded-t-xl bg-[#212121] flex gap-4 p-4 transform group-hover:translate-y-2 transition-transform duration-500">
<div className="w-full h-full border border-[#262626] rounded-md bg-[#262626]/50 group-hover:bg-[#404040]/50 transition-colors duration-500"></div>
<div className="w-full h-full border border-[#262626] rounded-md bg-[#262626]/50 group-hover:bg-[#404040]/50 transition-colors duration-500"></div>
</div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center z-10 shadow-[0_4px_12px_0_rgba(249,115,22,0.3)] transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_8px_20px_0_rgba(249,115,22,0.4)] transition-all duration-500">
<iconify-icon className="text-2xl text-white" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="p-[1px] rounded-[24px] group hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-500 cursor-pointer" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-[40px] flex flex-col items-center justify-between text-center relative overflow-hidden h-[420px] transition-colors duration-500 group-hover:bg-[#0d0d0d]">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none transform group-hover:scale-110 group-hover:opacity-40 transition-all duration-700">
<svg fill="none" height="100%" viewbox="0 0 400 400" width="100%">
<path className="group-hover:stroke-orange-400 transition-colors duration-500" d="M200 200 L120 100" stroke="#F97316" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="group-hover:stroke-white transition-colors duration-500" d="M200 200 L280 120" stroke="#FDBA74" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle className="transform origin-center transition-transform duration-500 group-hover:scale-125" cx="200" cy="200" fill="#fff" r="4"></circle>
<circle className="transition-colors duration-500 group-hover:stroke-orange-500" cx="120" cy="100" fill="#141414" r="16" stroke="#404040"></circle>
<circle className="transition-colors duration-500 group-hover:fill-orange-400" cx="280" cy="120" fill="#F97316" r="16"></circle>
</svg>
</div>
<div className="relative z-10 w-full mt-auto">
<h3 className="text-xl font-normal text-white mb-6 leading-7 transform transition-transform duration-500 group-hover:-translate-y-1">Full-Stack Expertise</h3>
<button className="w-full bg-white text-black py-4 rounded-xl text-sm font-medium uppercase tracking-[0.35px] flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] transform group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.7)]">
                                                See Our Stack
                                            </button>
</div>
</div>
</div>

<div className="p-[1px] rounded-[24px] group hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-500 cursor-pointer" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-[40px] flex flex-col h-[420px] transition-colors duration-500 group-hover:bg-[#0d0d0d]">
<h3 className="text-xl font-normal text-white mb-3 leading-7">Scalable Systems</h3>
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-5">Future-proof architectures ready to grow alongside your business.</p>
<div className="mt-auto bg-[#141414] rounded-xl border border-[#262626] p-6 flex items-center justify-center relative h-48 overflow-hidden inset-shadow-[0_1px_0_0_rgba(255,255,255,0.05)] group-hover:border-[#404040] transition-colors duration-500">
<div className="absolute inset-x-8 bottom-0 top-16 border border-[#404040] rounded-t-xl bg-[#212121] flex flex-col gap-3 p-4 transform group-hover:translate-y-2 transition-transform duration-500">
<div className="w-full h-8 border border-[#262626] rounded-md bg-[#262626]/50 group-hover:bg-[#404040]/50 transition-colors duration-500"></div>
<div className="w-full h-8 border border-[#262626] rounded-md bg-[#262626]/50 group-hover:bg-[#404040]/50 transition-colors duration-500"></div>
</div>
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center z-10 shadow-[0_4px_12px_0_rgba(249,115,22,0.3)] transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_8px_20px_0_rgba(249,115,22,0.4)] transition-all duration-500">
<iconify-icon className="text-2xl text-white" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 border-white/[0.04] border-t pt-[96px] pb-[96px] gap-x-16 gap-y-16 items-center">

<div className="aspect-square rounded-[24px] pt-[1px] pr-[1px] pb-[1px] pl-[1px] transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.35)] cursor-pointer" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="flex flex-col overflow-hidden group bg-gradient-to-b from-[#141414] to-[#080808] h-full rounded-[23px] pt-10 pr-10 pb-10 pl-10 relative items-center justify-center">
<div className="absolute inset-0 bg-orange-500/5 blur-[80px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 animate-pulse">
</div>
<div className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2.5 rounded-xl text-white text-sm font-normal flex items-center gap-2 mb-12 shadow-[0_4px_12px_0_rgba(249,115,22,0.3)] transform group-hover:-translate-y-2 transition-transform duration-500">
<iconify-icon className="animate-spin" icon="solar:widget-linear" style={{animationDuration: '4s'}}></iconify-icon> Component Library
    </div>
<div className="flex justify-center items-end relative w-full h-[240px] perspective-normal">
<div className="absolute left-[15%] bottom-0 w-32 h-44 bg-[#212121] rounded-xl border border-[#404040] -rotate-[10deg] overflow-hidden transform group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:-rotate-[20deg] hover:!scale-110 hover:!rotate-0 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:z-30 transition-all duration-500 flex flex-col cursor-pointer">
<div className="h-[75%] bg-[#141414] p-2 flex items-center justify-center group/icon overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-[#636363] text-3xl transition-all duration-500 group-hover:text-orange-400 group-hover/icon:scale-125 relative z-10" icon="solar:window-frame-linear"></iconify-icon>
</div>
<div className="h-[25%] bg-[#262626] flex items-center px-3 text-xs font-light text-[#D4D4D4] border-t border-[#404040] transition-colors duration-300 group-hover:text-white group-hover:bg-[#303030]">
          AuthModal
        </div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-44 h-56 bg-[#212121] rounded-xl border border-[#404040] z-20 overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-8 group-hover:scale-105 hover:!scale-110 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.35)] hover:z-30 transition-all duration-500 flex flex-col cursor-pointer">
<div className="h-[75%] bg-orange-500/10 p-2 flex items-center justify-center relative overflow-hidden group/icon">
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-orange-500/50 text-4xl transition-all duration-500 group-hover:text-orange-500 group-hover:scale-110 group-hover/icon:-translate-y-2 relative z-10" icon="solar:devices-linear"></iconify-icon>
</div>
<div className="h-[25%] bg-[#262626] flex items-center justify-center px-3 text-sm font-normal text-white border-t border-[#404040] transition-colors duration-300 group-hover:bg-[#303030]">
          HeroHeader <span className="text-orange-400 font-medium ml-1.5 text-xs animate-pulse shadow-[0_0_8px_#f97316] bg-orange-500/20 px-1.5 py-0.5 rounded">#UI</span>
</div>
</div>
<div className="absolute right-[15%] bottom-0 w-32 h-44 bg-[#212121] rounded-xl border border-[#404040] rotate-[10deg] overflow-hidden transform group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:rotate-[20deg] hover:!scale-110 hover:!rotate-0 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:z-30 transition-all duration-500 flex flex-col cursor-pointer">
<div className="h-[75%] bg-[#141414] p-2 flex items-center justify-center group/icon overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-[#636363] text-3xl transition-all duration-500 group-hover:text-orange-400 group-hover/icon:scale-125 relative z-10" icon="solar:list-linear"></iconify-icon>
</div>
<div className="h-[25%] bg-[#262626] flex items-center px-3 text-xs font-light text-[#D4D4D4] border-t border-[#404040] transition-colors duration-300 group-hover:text-white group-hover:bg-[#303030]">
          DataGrid
        </div>
</div>
</div>
</div>
</div>

<div className="">
<h2 className="text-5xl font-medium tracking-tight mb-6 leading-none text-white">
                  Showcase Your<br/><span className="text-accent">Brand Identity</span>
</h2>
<p className="text-sm font-light text-[#D4D4D4] mb-10 leading-5 max-w-md">
                  Craft pixel-perfect digital experiences that captivate users and elevate your brand across the web.
                </p>
<button className="bg-transparent text-[#D4D4D4] border border-[#404040] px-6 py-4 rounded-xl text-sm font-normal uppercase tracking-[0.35px] hover:border-orange-500 hover:text-orange-500 transition-all">
                  View Portfolio
                </button>
</div>
</section>

<section className="py-[96px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="order-2 md:order-1">
<h2 className="text-5xl font-medium tracking-tight mb-6 leading-none text-white">
                  Integrate &amp; Connect<br/>Your <span className="text-accent">Tools</span>
</h2>
<p className="text-sm font-light text-[#D4D4D4] mb-10 leading-5 max-w-md">
                  Seamlessly connect your web application with the marketing, sales, and analytics tools you love.
                </p>
<button className="bg-transparent text-[#D4D4D4] border border-[#404040] px-6 py-4 rounded-xl text-sm font-normal uppercase tracking-[0.35px] hover:border-orange-500 hover:text-orange-500 transition-all">
                  See Integrations
                </button>
</div>

<div className="order-1 md:order-2 perspective-normal group cursor-pointer">
<div className="aspect-square rounded-[24px] pt-[1px] pr-[1px] pb-[1px] pl-[1px] transform-style-preserve-3d transition-all duration-700 ease-out group-hover:rotate-x-5 group-hover:-rotate-y-5 group-hover:-translate-y-4 group-hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.35)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="flex bg-gradient-to-b from-[#141414] to-[#080808] h-full rounded-[23px] pt-10 pr-10 pb-10 pl-10 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px]"></div>
<div className="bg-[#212121] border border-[#404040] rounded-xl p-5 w-full max-w-sm flex flex-col gap-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] relative z-10 transition-transform duration-700">
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#262626] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg cursor-pointer border border-transparent hover:border-[#404040] group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center border border-[#404040] transition-colors group-hover/item:border-[#636363]">
<iconify-icon className="text-[#D4D4D4] transition-colors group-hover/item:text-white" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-[#D4D4D4] group-hover/item:text-white transition-colors">Shopify</span>
</div>
<div className="w-10 h-6 bg-[#141414] rounded-full flex items-center p-1 border border-[#404040] group-hover/item:border-[#636363] transition-colors">
<div className="w-4 h-4 bg-[#636363] rounded-full group-hover/item:bg-[#979797] transition-colors"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-[#262626]/30 border border-orange-500/30 relative overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(249,115,22,0.25)] group/active cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 shadow-[0_0_12px_#f97316]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover/active:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)] transform transition-transform duration-500 group-hover/active:rotate-12 group-hover/active:scale-110">
<iconify-icon className="text-white text-lg" icon="solar:card-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-white">Stripe</span>
</div>
<div className="w-10 h-6 bg-orange-500 rounded-full flex items-center justify-end p-1 shadow-[0_0_10px_rgba(249,115,22,0.3)] relative z-10">
<div className="absolute right-1 w-4 h-4 bg-white rounded-full animate-ping opacity-60"></div>
<div className="w-4 h-4 bg-white rounded-full relative z-10"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#262626] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg cursor-pointer border border-transparent hover:border-[#404040] group/item">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center border border-[#404040] transition-colors group-hover/item:border-[#636363]">
<iconify-icon className="text-[#D4D4D4] transition-colors group-hover/item:text-white" icon="solar:database-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-[#D4D4D4] group-hover/item:text-white transition-colors">Supabase</span>
</div>
<div className="w-10 h-6 bg-[#141414] rounded-full flex items-center p-1 border border-[#404040] group-hover/item:border-[#636363] transition-colors">
<div className="w-4 h-4 bg-[#636363] rounded-full group-hover/item:bg-[#979797] transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[96px] text-center">
<h2 className="text-5xl font-medium tracking-tight mb-6 leading-none text-white">
                Built for People,<br/><span className="text-accent">Powered by Code</span>
</h2>
<p className="leading-5 text-sm font-light text-[#D4D4D4] max-w-md mr-auto mb-16 ml-auto">Innovation starts together. Join hundreds leading the way.</p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left auto-rows-[minmax(180px,auto)]">
<div className="p-[1px] rounded-[24px] col-span-1 md:col-span-1" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-8 flex flex-col justify-between h-full hover:bg-[#0D0D0D] transition-colors">
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-5">"Working with this agency feels like unlocking
                      hidden potential. It's smooth, fast, and highly communicative."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-[#212121] flex items-center justify-center border border-[#404040]">
<iconify-icon className="text-[#D4D4D4]" icon="solar:laptop-linear"></iconify-icon></div>
<span className="text-sm font-normal text-white">Nexus Tech</span>
</div>
</div>
</div>
<div className="p-[1px] rounded-[24px] col-span-1 md:col-span-1" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-8 flex flex-col justify-between h-full hover:bg-[#0D0D0D] transition-colors">
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-5">Finally, a development team that puts code quality
                      first. We can scale our business with peace of mind.</p>
<div className="flex items-center justify-between mt-auto">
<div>
<p className="text-sm font-normal text-white">Elena R.</p>
<p className="text-xs font-light text-[#979797]">Lead Engineer</p>
</div>
</div>
</div>
</div>
<div className="p-[1px] rounded-[24px] col-span-1 md:col-span-1" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-8 flex flex-col justify-center items-center text-center h-full hover:bg-[#0D0D0D] transition-colors">
<h4 className="text-5xl font-medium tracking-tight mb-3 text-white">100K+</h4>
<p className="text-sm font-light text-[#979797]">lines of code deployed weekly.</p>
</div>
</div>
<div className="p-[1px] rounded-[24px] col-span-1 md:col-span-1" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-8 flex flex-col justify-between h-full hover:bg-[#0D0D0D] transition-colors">
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-5">"The transparent development process helps us track every milestone.
                      No blind spots in the timeline."</p>
<div className="flex items-center justify-between mt-auto">
<div>
<p className="text-sm font-normal text-white">Daniel R.</p>
<p className="text-xs font-light text-[#979797]">Product Manager</p>
</div>
</div>
</div>
</div>
<div className="p-[1px] rounded-[24px] col-span-1 md:col-span-2" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-8 flex flex-col justify-between h-full hover:bg-[#0D0D0D] transition-colors">
<p className="text-sm font-light text-[#D4D4D4] mb-8 leading-5 max-w-md">Managing multiple web properties used to be messy. Now
                      we have a unified, scalable system and connect to APIs in one place—it feels effortless.</p>
<div className="flex items-center justify-between mt-auto">
<div className="">
<p className="text-sm font-normal text-white">Sofia M.</p>
<p className="text-xs font-light text-[#979797]">Creative Director</p>
</div>
</div>
</div>
</div>
<div className="p-[1px] rounded-[24px] col-span-1 md:col-span-2" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] p-8 flex flex-col justify-center h-full hover:bg-[#0D0D0D] transition-colors relative overflow-hidden">
<div className="relative z-10">
<h4 className="text-5xl font-medium tracking-tight mb-3 text-white">250+</h4>
<p className="text-sm font-light text-[#979797] mb-6">clients already scaling their businesses with us.</p>
<div className="inline-flex items-center gap-2 text-xs font-normal text-orange-500">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Growing stronger
                      </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[96px] my-10 flex justify-center">
<div className="p-[1px] rounded-[24px] w-full" style={{background: 'linear-gradient(-30deg, #FDBA74, transparent, #F97316)'}}>
<div className="bg-[#080808] rounded-[23px] py-16 px-10 flex flex-col items-center justify-center text-center relative overflow-hidden h-full">
<div className="absolute inset-0 bg-gradient-to-b from-[#2e150b]/20 to-transparent z-0"></div>
<div className="relative z-10">
<h2 className="text-5xl font-medium tracking-tight mb-6 leading-none text-white">
                      Ready to Build Your<br/>Next Big Project?
                    </h2>
<p className="text-sm font-light text-[#D4D4D4] mb-10 leading-5">Join the digital vanguard today.</p>
<button className="bg-white hover:bg-gray-100 text-black px-6 py-4 rounded-xl text-sm font-medium uppercase tracking-[0.35px] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                      Start Building
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-white/[0.04] flex flex-col md:flex-row text-sm font-light text-[#979797] border-t pt-10 pb-10 gap-x-8 gap-y-8 items-center justify-between">
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center hover:bg-[#212121] hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center hover:bg-[#212121] hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-10">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<span className="text-[#404040]">|</span>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</footer>
</div>
</div>

<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 z-20"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 z-20"></div>
</div>





    </>
  );
}
