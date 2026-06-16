import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
100: '#F9F1D8',
300: '#E5C985',
400: '#D4AF37',
500: '#C5A028',
600: '#AA8C2C',
900: '#5C4B13',
},
beige: {
50: '#FAF9F6',
100: '#F5F5DC',
200: '#E8E4D9',
900: '#1A1915',
},
void: '#050505',
charcoal: '#0F0F0F',
},
fontFamily: {
serif: ['Cinzel', 'serif'],
sans: ['Manrope', 'sans-serif'],
},
letterSpacing: {
'cinema': '0.2em',
'widest-plus': '0.3em',
},
backgroundImage: {
'vignette': 'radial-gradient(circle, transparent 40%, #050505 140%)',
'glass': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
'gold-gradient': 'linear-gradient(135deg, #F9F1D8 0%, #D4AF37 100%)'
}
}
}
}



        (function() {
            const canvas = document.getElementById('grid-canvas-hero');
            const ctx = canvas.getContext('2d');
            let width, height;
            let animationFrameId;

            // Configuration
            const config = {
                gridColor: 'rgba(212, 175, 55, 0.15)', // Gold-400 with low opacity
                shimmerColor: '#F9F1D8', // Gold-100
                speed: 2,
                focalLength: 300,
                lineSpacing: 100, // Distance between horizontal lines in 3D space
                verticalLineCount: 30, // Number of vertical lines
                verticalLineSpacing: 150,
                maxZ: 2000,
                yOffset: 200 // Lowers the floor
            };

            // State
            let offsetZ = 0;
            const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
            const shimmers = [];

            // Resize Handler
            function resize() {
                width = canvas.parentElement.offsetWidth;
                height = canvas.parentElement.offsetHeight;
                
                // Handle High DPI
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
            }

            // Mouse Interaction
            canvas.parentElement.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                // Normalized mouse coordinates (-1 to 1)
                mouse.targetX = ((e.clientX - rect.left) / width) * 2 - 1;
                mouse.targetY = ((e.clientY - rect.top) / height) * 2 - 1;
            });
            
            canvas.parentElement.addEventListener('mouseleave', () => {
                mouse.targetX = 0;
                mouse.targetY = 0;
            });

            // Shimmer Class
            class Shimmer {
                constructor() {
                    this.reset();
                }

                reset() {
                    this.active = false;
                    this.type = Math.random() > 0.5 ? 'vertical' : 'horizontal';
                    this.lineIndex = 0; // Index of the line it travels on
                    this.progress = 0; // 0 to 1
                    this.speed = 0.01 + Math.random() * 0.02;
                    this.length = 0.1 + Math.random() * 0.2; // Length of tail
                }

                spawn(verticalCount, maxZ, lineSpacing) {
                    this.active = true;
                    this.type = Math.random() > 0.6 ? 'vertical' : 'horizontal';
                    this.progress = 0                        this.lineIndex = Math.floor(Math.random() * verticalCount * 2) - verticalCount;
                    } else {
                        // Pick a random Z depth for horizontal shimmer (starts at far Z)
                        this.zStart = maxZ; 
                    }
                }
            }

            // Initialize pool of shimmers
            for(let i=0; i<15; i++) shimmers.push(new Shimmer());

            // Project 3D point to 2D
            function project(x, y, z) {
                const perspective = config.focalLength / (config.focalLength + z);
                const cx = width / 2;
                const cy = height / 2;
                return {
                    x: cx + x * perspective,
                    y: cy + y * perspective,
                    scale: perspective
                };
            }

            // Animation Loop
            function animate() {
                // Smooth mouse interpolation
                mouse.x += (mouse.targetX - mouse.x) * 0.05;
                mouse.y += (mouse.targetY - mouse.y) * 0.05;

                ctx.clearRect(0, 0, width, height);

                // Update Z offset for movement
                offsetZ = (offsetZ + config.speed) % config.lineSpacing;

                const cx = width / 2;
                const cy = height / 2;

                // Dynamic Perspective Origin based on mouse
                const originX = cx - mouse.x * 200;
                const originY = cy - mouse.y * 100;
                const horizonY = cy + mouse.y * 50; // Horizon moves slightly
                
                // Determine 3D space boundaries
                const floorY = config.yOffset; 

                ctx.save();
                // Apply a slight tilt based on mouse Y
                
                // Draw Vertical Lines (Perspective)
                ctx.strokeStyle = config.gridColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                
                for (let i = -config.verticalLineCount; i <= config.verticalLineCount; i++) {
                    const x = i * config.verticalLineSpacing;
                    
                    // Add parallax to X based on mouse
                    const xParallax = x - (mouse.x * z * 0.5); // Simplified parallax
                    
                    // Start point (near camera)
                    const p1 = project(x, floorY, -100);
                    // End point (far horizon)
                    const p2 = project(x, floorY, config.maxZ);
                    
                    // Adjust vanishing point interactively
                    const vanishingX = originX;
                    const vanishingY = horizonY;

                    // Manual projection interpolation for smoother vanishing point control
                    const scale1 = config.focalLength / (config.focalLength - 100);
                    const screenX1 = cx + x * scale1 - (mouse.x * 50); // Parallax factor
                    const screenY1 = cy + floorY * scale1 + (mouse.y * 50);

                    const scale2 = config.focalLength / (config.focalLength + config.maxZ);
                    const screenX2 = vanishingX + x * scale2 * 0.1; // Converge to custom vanishing point
                    const screenY2 = vanishingY;

                    ctx.moveTo(screenX1, screenY1);
                    ctx.lineTo(screenX2, screenY2);
                }
                ctx.stroke();

                // Draw Horizontal Lines (Movement)
                for (let z = config.lineSpacing - offsetZ; z < config.maxZ; z += config.lineSpacing) {
                    const opacity = 1 - (z / config.maxZ); // Fade out in distance
                    if (opacity <= 0) continue;

                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.15})`;
                    
                    const pLeft = project(-config.verticalLineCount * config.verticalLineSpacing * 2, floorY, z);
                    const pRight = project(config.verticalLineCount * config.verticalLineSpacing * 2, floorY, z);

                    // Adjust Y based on mouse tilt (simple approximate)
                    const yAdjusted = pLeft.y + (mouse.y * 50 * (1 - opacity));

                    ctx.beginPath();
                    ctx.moveTo(0, yAdjusted);
                    ctx.lineTo(width, yAdjusted);
                    ctx.stroke();
                }

                // Draw Shimmers
                if (Math.random() < 0.05) {
                    const inactive = shimmers.find(s => !s.active);
                    if (inactive) inactive.spawn(config.verticalLineCount, config.maxZ, config.lineSpacing);
                }

                shimmers.forEach(s => {
                    if (!s.active) return;

                    ctx.strokeStyle = config.shimmerColor;
                    ctx.lineWidth = 2;
                    ctx.lineCap = 'round';
                    
                    if (s.type === 'vertical') {
                        // Shimmer traveling AWAY from camera on vertical line
                        s.progress += s.speed;
                        if ( Z depth -100 to maxZ
                        const zCurrent = -100 + s.progress * (config.maxZ + 100);
                        const zTail = zCurrent - (s.length * config.maxZ);
                        
                        const x = s.lineIndex * config.verticalLineSpacing;
                        
                        // Using same projection logic as lines
                        const scaleHead = config.focalLength / (config.focalLength + zCurrent);
                        const scaleTail = config.focalLength / (config.focalLength + Math.max(-100, zTail));
                        
                        const screenXHead = cx + x * scaleHead - (mouse.x * 50);
                        const screenYHead = cy + floorY * scaleHead + (mouse.y * 50);
                        
                        // Interpolate to vanishing point for tail
                        const screenXTail = cx + x * scaleTail - (mouse.x * 50);
                        const screenYTail = cy + floorY * scaleTail + (mouse.y * 50);
                        
                        const alpha = (1 - s.progress) * 0.8;
                        ctx.strokeStyle = `rgba(249, 241, 216, ${alpha})`;
                        
                        ctx.beginPath();
                        ctx.moveTo(screenXHead, screenYHead);
                        ctx.lineTo(screenXTail, screenYTail);
                        ctx.stroke();

                        // Add Glow
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = '#D4AF37';
                        ctx.stroke();
                        ctx.shadowBlur = 0;

                    } else {
                        // Shimmer traveling ACROSS on a horizontal line (actually we'll make it travel forward in Z for effect "Coming Out")
                        // Wait, prompt says "Coming out of it towards camera".
                        // Let's make horizontal shimmers travel along a horizontal line at a specific Z
                        
                        s.progress += s.speed; // moving left to right
                        if (s.progress > 1) s.active = false;

                        // Fixed Z for this shimmer pass
                        const z = s.zStart || 500;
                        s.zStart = (s.zStart || 500) - config.speed; // Move with grid

                        if (s.zStart < -100) s.active = false;
                        
                        const widthRange = config.verticalLineCount * config.verticalLineSpacing * 2;
                        const xCurrent = -widthRange/2 + s.progress * widthRange;
                        const xTail = xCurrent - (s.length * widthRange);
                        
                        const scale = config.focalLength / (config.focalLength + s.zStart);
                        const screenY = cy + floorY * scale + (mouse.y * 50);
                        
                        const screenXHead = cx + xCurrent * scale - (mouse.x * 50);
                        const screenXTail = cx + xTail * scale - (mouse.x * 50);
                        
                        const alpha = (1 - (s.zStart/config.maxZ)) * 0.8;
                        ctx.strokeStyle = `rgba(249, 241, 216, ${alpha})`;
                        
                        ctx.beginPath();
                        ctx.moveTo(screenXHead, screenY);
                        ctx.lineTo(screenXTail, screenY);
                        ctx.stroke();
                    }
                });

                ctx.restore();
                animationFrameId = requestAnimationFrame(animate);
            }

            // Init
            window.addEventListener('resize', resize);
            resize();
            animate();
            
            // Cleanup if element removed (MutationObserver handled externally usually, but good practice)
        })();
    


        {
            "imports": {
                "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
            }
        }
    


        // --- 1. Hero Parallax Effect ---
        const heroSection = document.getElementById('hero');
        const heroBg = document.querySelector('.hero-bg-container');
        
        heroSection.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = heroSection;
            const { clientX: x, clientY: y } = e;
            
            // Calculate movement (inverted)
            const xMove = (x / width) * -30 + 15;
            const yMove = (y / height) * -20 + 10;
            
            heroBg.style.transform = `scale(1.1) translate(${xMove}px, ${yMove}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroBg.style.transform = `scale(1.1) translate(0px, 0px)`;
        });

        // --- 2. Slider Logic ---
        function scrollSlider(direction) {
            const container = document.getElementById('film-scroll-container');
            const scrollAmount = 400; // Approx card width
            container.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }

        // --- 3. Interactive Seating Logic ---
        const seatMap = document.getElementById('seat-map');
        const rows = 6;
        const seatsPerRow = [8, 10, 10, 12, 12, 14]; // Staggered layout
        let selectedSeats = [];
        const seatPrice = 25.00;

        // Generate Grid
        seatsPerRow.forEach((count, rowIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'flex gap-2 md:gap-3';
            
            // Row Letter
            const rowLabel = String.fromCharCode(65 + rowIndex); // A, B, C...

            for (let i = 0; i < count; i++) {
                const seat = document.createElement('button');
                const isOccupied = Math.random() < 0.2; // 20% chance of being taken
                
                seat.className = `w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat 
                    ${isOccupied 
                        ? 'occupied border-white/5 text-white/10' 
                        : 'available border-white/20 text-white/30 cursor-pointer'}`;
                
                seat.innerText = `${rowLabel}${i+1}`;
                
                if (!isOccupied) {
                    seat.onclick = () => toggleSeat(seat, `${rowLabel}${i+1}`);
                }
                
                rowDiv.appendChild(seat);
            }
            seatMap.appendChild(rowDiv);
        });

        function toggleSeat(seatEl, seatId) {
            if (seatEl.classList.contains('selected')) {
                seatEl.classList.remove('selected');
                seatEl.classList.add('available');
                selectedSeats = selectedSeats.filter(id => id !== seatId);
            } else {
                seatEl.classList.remove('available');
                seatEl.classList.add('selected');
                selectedSeats.push(seatId);
            }
            updateSelectionPanel();
        }

        function updateSelectionPanel() {
            const display = document.getElementById('selected-seats-display');
            const totalDisplay = document.getElementById('total-price');
            
            if (selectedSeats.length === 0) {
                display.innerText = '-';
                totalDisplay.innerText = '$0.00';
            } else {
                display.innerText = selectedSeats.join(', ');
                totalDisplay.innerText = `$${(selectedSeats.length * seatPrice).toFixed(2)}`;
            }
        }
        
        // Initial icon setup
        lucide.createIcons();
    


        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

        // --- Three.js Background (Sleek Noise Gradient) ---
        const canvas = document.querySelector('#canvas-bg');
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // Custom Shader for sleek, dark, moving atmosphere
        const planeGeo = new THREE.PlaneGeometry(2, 2);
        const planeMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform vec2 uResolution;
                varying vec2 vUv;

                // Noise function
                float random (in vec2 _st) {
                    return fract(sin(dot(_st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }

                // Gradient noise
                float noise (in vec2 st) {
                    vec2 i = floor(st);
                    vec2 f = fract(st);

                    float a = random(i);
                    float b = random(i + vec2(1.0, 0.0));
                    float c = random(i + vec2(0.0, 1.0));
                    float d = random(i + vec2(1.0, 1.0));

                    vec2 u = f * f * (3.0 - 2.0 * f);

                    return mix(a, b, u.x) +
                            (c - a)* u.y * (1.0 - u.x) +
                            (d - b) * u.x * u.y;
                }

                #define OCTAVES 4
                float fbm (in vec2 st) {
                    float value = 0.0;
                    float amplitude = .5;
                    float frequency = 0.;
                    for (int i = 0; i < OCTAVES; i++) {
                        value += amplitude * noise(st);
                        st *= 2.;
                        amplitude *= .5;
                    }
                    return value;
                }

                void main() {
                    vec2 st = gl_FragCoord.xy/uResolution.xy;
                    
                    // Very slow moving fog/light
                    vec2 q = vec2(0.);
                    q.x = fbm( st + 0.05*uTime);
                    q.y = fbm( st + vec2(1.0));

                    vec2 r = vec2(0.);
                    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
                    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime);

                    float f = fbm(st+r);

                    // Colors: Dark Void to Subtle Gold
                    vec3 color = mix(vec3(0.02, 0.02, 0.02),
                                    vec3(0.05, 0.04, 0.01),
                                    clamp((f*f)*4.0,0.0,1.0));

                    // Add grain
                    float grain = random(st * uTime) * 0.03;
                    color += grain;

                    // Vignette
                    float d = distance(vUv, vec2(0.5));
                    color *= (1.0 - d * 0.5);

                    gl_FragColor = vec4(color, 1.0);
                }
            `
        });

        const plane = new THREE.Mesh(planeGeo, planeMat);
        scene.add(plane);

        // GSAP Animations
        const tl = gsap.timeline();
        
        tl.to('.animate-text-reveal', {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5
        })
        .to('.animate-hero-title', {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: 'power4.out'
        }, "-=1")
        .to('.animate-fade-in', {
            opacity: 1,
            duration: 1,
            stagger: 0.2
        }, "-=1");

        // Loop
        function animate(time) {
            planeMat.uniforms.uTime.value = time * 0.0005;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate(0);

        // Resize
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            planeMat.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.pexels.com/download/video/3134589/"></video></div>

<div id="canvas-bg"><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas><canvas data-engine="three.js r160" height="902" style={{display: 'block', width: '1440px', height: '902px'}} width="1440"></canvas></div>

<div className="fixed inset-0 pointer-events-none bg-vignette z-0"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300 border-b border-white/5 bg-void/70 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto flex justify-between items-center">
<a className="font-serif text-lg font-bold tracking-widest text-gold-100 hover:text-gold-500 transition-colors uppercase z-50" href="#">
                Lumière
            </a>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-widest text-beige-200/70 hover:text-gold-300 transition-colors" href="#films">Films</a>
<a className="text-xs uppercase tracking-widest text-beige-200/70 hover:text-gold-300 transition-colors" href="#experience">Experience</a>
<a className="text-xs uppercase tracking-widest text-beige-200/70 hover:text-gold-300 transition-colors" href="#membership">Membership</a>
</div>
<button className="relative group px-6 py-2 overflow-hidden border border-gold-500/30 hover:border-gold-500 transition-all duration-500">
<div className="absolute inset-0 w-0 bg-gold-500/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative text-[10px] font-semibold uppercase tracking-widest text-gold-300 group-hover:text-gold-100 flex items-center gap-2">
                    My Account
                </span>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden group" id="hero">

<div className="hero-bg-container absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center opacity-40 z-0 grayscale mix-blend-screen" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1517604931442-71053e683597?q=80&amp', transform: 'scale(1.1) translate(0px, 0px)'}}>
</div>
<div className="z-0 absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<canvas className="block opacity-80 mix-blend-screen w-full h-full" id="grid-canvas-hero"></canvas>

<div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void pointer-events-none"></div>

</div>
<div className="relative z-10 space-y-8 max-w-5xl pointer-events-none">
<div className="overflow-hidden">
<p className="text-gold-500 text-[10px] font-semibold tracking-[0.3em] uppercase opacity-0 translate-y-full animate-text-reveal">
                    Sanctuary of Sound &amp; Vision
                </p>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-beige-100 opacity-0 scale-95 animate-hero-title leading-none">
                CINEMATIC <span className="italic font-light text-gold-300">VOID</span>
</h1>
<div className="max-w-lg mx-auto pt-4 opacity-0 animate-fade-in delay-500 pointer-events-auto">
<p className="text-beige-200/60 text-sm font-light leading-relaxed">
                    Move your cursor to explore the depth of the auditorium. Experience movies as they were meant to be seen.
                </p>
<div className="mt-8 flex justify-center gap-6">
<a className="text-[10px] uppercase hover:bg-gold-500 hover:text-void hover:border-gold-500 transition-all duration-300 tracking-widest border-white/20 border pt-3 pr-8 pb-3 pl-8" href="#films">
    View Showtimes
</a>
</div>
</div>
</div>
</header>

<section className="z-10 bg-stone-950 border-white/5 border-t py-24 relative backdrop-blur-sm" id="films">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end max-w-screen-2xl mx-auto">
<div className="">
<h2 className="font-serif text-3xl md:text-4xl text-beige-100 mb-2 tracking-tight">Now Showing</h2>
<p className="text-beige-200/40 text-[10px] tracking-widest uppercase">Curated Selections for the discerning eye</p>
</div>
<div className="flex gap-4">
<button className="p-4 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-all active:scale-95 group" onclick="scrollSlider(-1)">
<svg className="lucide lucide-arrow-left w-4 h-4 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-4 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-all active:scale-95 group" onclick="scrollSlider(1)">
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth" id="film-scroll-container">

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer relative">
<div className="aspect-[2/3] relative overflow-hidden bg-charcoal mb-6">
<img alt="Film" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=1925&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[10px] bg-gold-500 text-void px-2 py-1 font-bold tracking-widest uppercase mb-2 inline-block">Premiere</span>
<h3 className="font-serif text-2xl text-beige-100 mt-2">The Last Emperor</h3>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer relative">
<div className="aspect-[2/3] relative overflow-hidden bg-charcoal mb-6">
<img alt="Film" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2059&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[10px] border border-white/30 text-white px-2 py-1 font-bold tracking-widest uppercase mb-2 inline-block">Sci-Fi</span>
<h3 className="font-serif text-2xl text-beige-100 mt-2">Metropolis</h3>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer relative">
<div className="aspect-[2/3] relative overflow-hidden bg-charcoal mb-6">
<img alt="Film" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dfe6392-0af6-46f2-9e5a-bf08ef1372d4_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[10px] border border-white/30 text-white px-2 py-1 font-bold tracking-widest uppercase mb-2 inline-block">Romance</span>
<h3 className="font-serif text-2xl text-beige-100 mt-2">In The Mood For Love</h3>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer relative">
<div className="aspect-[2/3] relative overflow-hidden bg-charcoal mb-6">
<img alt="Film" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[10px] border border-white/30 text-white px-2 py-1 font-bold tracking-widest uppercase mb-2 inline-block">Classic</span>
<h3 className="font-serif text-2xl text-beige-100 mt-2">La Dolce Vita</h3>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-stone-950 px-6 py-32 relative" id="experience">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-beige-100 mb-4 tracking-tight">Reserve Your <span className="text-gold-500 italic">Sanctuary</span></h2>
<p className="text-beige-200/50 text-xs font-light">Select your preferred seating and customize your experience.</p>
</div>
<div className="flex flex-col lg:flex-row gap-12 items-start">

<div className="w-full lg:w-2/3 bg-void border border-white/5 p-8 md:p-12 relative overflow-hidden rounded-sm">

<div className="w-3/4 mx-auto h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16 shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative">
<div className="absolute top-4 w-full text-center text-[10px] text-white/20 uppercase tracking-[0.5em]">Screen</div>
</div>

<div className="flex flex-col gap-4 items-center justify-center" id="seat-map">

<div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">A2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">A8</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">B4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">B10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">C9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">C10</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">D9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">D12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">E8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">E12</button></div><div className="flex gap-2 md:gap-3"><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F1</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F2</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F3</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F4</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F5</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F6</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F7</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F8</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F9</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F10</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F11</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat occupied border-white/5 text-white/10">F12</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F13</button><button className="w-6 h-6 md:w-8 md:h-8 border rounded-t-lg text-[8px] flex items-center justify-center seat available border-white/20 text-white/30 cursor-pointer">F14</button></div></div>
<div className="flex justify-center gap-8 mt-16 border-t border-white/5 pt-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 border border-white/20 rounded-t-sm"></div>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Available</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-gold-500 rounded-t-sm"></div>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Selected</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-white/10 rounded-t-sm"></div>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Occupied</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/3 space-y-8 sticky top-32">
<div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
<h3 className="font-serif text-xl mb-6 text-gold-100">Selection</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-xs text-beige-200/60 border-b border-white/5 pb-2">
<span>Film</span>
<span className="text-white">La Dolce Vita</span>
</div>
<div className="flex justify-between text-xs text-beige-200/60 border-b border-white/5 pb-2">
<span>Time</span>
<span className="text-white">20:00, Hall 1</span>
</div>
<div className="flex justify-between text-xs text-beige-200/60 border-b border-white/5 pb-2">
<span>Seats</span>
<span className="text-gold-500 font-bold" id="selected-seats-display">-</span>
</div>
</div>
<div className="space-y-4">
<h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Add-ons</h4>
<label className="flex items-center justify-between group cursor-pointer">
<span className="text-xs text-beige-200 group-hover:text-gold-300 transition-colors">Champagne Service</span>
<input className="accent-gold-500 w-4 h-4 bg-transparent border-white/20 rounded-none" type="checkbox"/>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<span className="text-xs text-beige-200 group-hover:text-gold-300 transition-colors">Truffle Popcorn</span>
<input className="accent-gold-500 w-4 h-4 bg-transparent border-white/20 rounded-none" type="checkbox"/>
</label>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
<div>
<span className="block text-[10px] uppercase text-white/40">Total</span>
<span className="font-serif text-2xl text-gold-500" id="total-price">$0.00</span>
</div>
<button className="bg-gold-500 hover:bg-gold-300 text-void px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                Confirm
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 z-10 border-white/5 border-t px-6 py-32 relative" id="membership">
<div className="max-w-4xl mx-auto text-center mb-20">
<h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight">The <span className="text-gold-500">Gold</span> Standard</h2>
<p className="text-beige-200/50 font-light">Elevate your cinema lifestyle with our curated membership tiers.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

<div className="membership-card group relative p-1 bg-gradient-to-b from-white/10 to-transparent border border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-void/90 m-[1px]"></div> 
<div className="relative p-8 h-full flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-white/40 group-hover:text-gold-500 group-hover:border-gold-500/50 transition-colors">
<svg className="lucide lucide-film w-5 h-5" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Silver</span>
<h3 className="font-serif text-3xl mb-6 text-beige-100">$49<span className="text-sm font-sans text-white/30 font-light">/mo</span></h3>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
<ul className="text-xs text-beige-200/60 space-y-4 mb-8 font-light flex-grow">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 2 Tickets Monthly</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 10% Concession Discount</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Online Booking</li>
</ul>
<button className="w-full py-3 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">Select Plan</button>
</div>
</div>

<div className="membership-card group relative p-1 bg-gradient-to-b from-gold-500/50 to-transparent border border-gold-500/20 overflow-hidden shadow-2xl shadow-gold-900/10 md:-mt-8 md:mb-8">
<div className="absolute inset-0 bg-void/90 m-[1px]"></div>
<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
<div className="relative p-10 h-full flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center mb-6 text-gold-500 bg-gold-500/5">
<svg className="lucide lucide-crown w-5 h-5" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 mb-2">Gold Class</span>
<h3 className="font-serif text-4xl mb-6 text-gold-100">$99<span className="text-sm font-sans text-gold-500/50 font-light">/mo</span></h3>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-6"></div>
<ul className="text-xs text-beige-200/80 space-y-4 mb-8 font-light flex-grow">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Standard Screenings</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 2 IMAX Tickets</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority Seating</li>
</ul>
<button className="w-full py-3 bg-gold-500 text-void font-bold text-[10px] uppercase tracking-widest hover:bg-gold-300 transition-all">Select Plan</button>
</div>
</div>

<div className="membership-card group relative p-1 bg-gradient-to-b from-white/10 to-transparent border border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-void/90 m-[1px]"></div>
<div className="relative p-8 h-full flex flex-col items-center text-center z-10">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-white/40 group-hover:text-gold-500 group-hover:border-gold-500/50 transition-colors">
<svg className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Platinum</span>
<h3 className="font-serif text-3xl mb-6 text-beige-100">$199<span className="text-sm font-sans text-white/30 font-light">/mo</span></h3>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
<ul className="text-xs text-beige-200/60 space-y-4 mb-8 font-light flex-grow">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited All Access</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Private Box Reservation</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-3 h-3 text-gold-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Valet Parking</li>
</ul>
<button className="w-full py-3 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">Select Plan</button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-black py-20 px-6">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
<div className="text-center md:text-left">
<h4 className="font-serif text-2xl text-gold-100 tracking-widest uppercase mb-4">Lumière</h4>
<p className="text-white/30 text-xs max-w-xs leading-relaxed font-light">
                    Redefining the cinematic experience through luxury, technology, and timeless storytelling.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4 text-center md:text-left">
<span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Social</span>
<a className="text-xs text-white/50 hover:text-white transition-colors font-light" href="#">Instagram</a>
<a className="text-xs text-white/50 hover:text-white transition-colors font-light" href="#">Twitter</a>
<a className="text-xs text-white/50 hover:text-white transition-colors font-light" href="#">Letterboxd</a>
</div>
<div className="flex flex-col gap-4 text-center md:text-left">
<span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Company</span>
<a className="text-xs text-white/50 hover:text-white transition-colors font-light" href="#">Locations</a>
<a className="text-xs text-white/50 hover:text-white transition-colors font-light" href="#">Private Events</a>
<a className="text-xs text-white/50 hover:text-white transition-colors font-light" href="#">Careers</a>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/20 uppercase tracking-widest">© 2024 Lumière Cinemas.</p>
<div className="flex gap-6">
<p className="text-[10px] text-white/20 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Privacy</p>
<p className="text-[10px] text-white/20 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Terms</p>
</div>
</div>
</footer>







    </>
  );
}
