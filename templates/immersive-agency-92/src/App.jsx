import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Setup Scene
            const canvas = document.createElement('canvas');
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.zIndex = '0';
            canvas.style.pointerEvents = 'none';
            document.body.insertBefore(canvas, document.body.firstChild);

            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x050505, 0.012);

            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 45;

            const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Upgraded Particle Spine (80,000 particles)
            const particleCount = 80000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            const color1 = new THREE.Color('#7D5FFF'); // Purple
            const color2 = new THREE.Color('#00F2FF'); // Cyan
            const color3 = new THREE.Color('#FF007A'); // Pink

            for(let i = 0; i < particleCount; i++) {
                // Taller distribution for scroll depth
                const y = (Math.random() - 0.5) * 150; 
                
                // Simulating Simplex Noise field driving particle position via compound trigonometry
                const noiseOffset = Math.sin(y * 0.05) * Math.cos(y * 0.1) * 6;
                const twist = y * 0.04;
                
                // Concentrated core with sparse outer layer
                const radiusDist = Math.pow(Math.random(), 2); 
                const radius = radiusDist * 12 + noiseOffset + 1.5;
                const theta = Math.random() * Math.PI * 2;

                positions[i*3] = Math.cos(theta + twist) * radius;
                positions[i*3+1] = y;
                positions[i*3+2] = Math.sin(theta + twist) * radius;

                // Color mapping based on depth and radial position
                let mixedColor = color1.clone().lerp(color2, (y + 75) / 150);
                if (radiusDist > 0.7) mixedColor.lerp(color3, 0.6);
                
                colors[i*3] = mixedColor.r;
                colors[i*3+1] = mixedColor.g;
                colors[i*3+2] = mixedColor.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 0.035, // Smaller particles due to high density
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.45,
                depthWrite: false
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);

            // Interaction & Animation Logic
            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX) * 0.0003;
                mouseY = (event.clientY - windowHalfY) * 0.0003;
            });

            // Scroll Velocity & Position tracking
            let scrollY = window.scrollY;
            let lastScrollY = scrollY;
            let scrollVelocity = 0;
            let targetScrollVelocity = 0;

            window.addEventListener('scroll', () => {
                scrollY = window.scrollY;
                targetScrollVelocity = (scrollY - lastScrollY) * 0.0015;
                lastScrollY = scrollY;
            });

            const clock = new THREE.Clock();

            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                // Mouse Parallax Lerping
                targetX += (mouseX - targetX) * 0.05;
                targetY += (mouseY - targetY) * 0.05;
                
                // Scroll Velocity Lerping (Momentum)
                scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.1;
                targetScrollVelocity *= 0.9; // Friction

                // Complex Interaction: Scroll drives rotation, mouse drives tilt
                particles.rotation.x = targetY + (scrollY * 0.0002);
                
                // Base spin + Mouse influence + Scroll Velocity impact
                particles.rotation.y += 0.0008 + (targetX * 0.01) + scrollVelocity;
                
                // Move camera slightly based on scroll depth
                camera.position.y = -(scrollY * 0.015);
                
                // Subtle breathing effect on whole structure
                particles.scale.setScalar(1 + Math.sin(elapsedTime * 0.5) * 0.02);

                renderer.render(scene, camera);
            };

            animate();

            // Handle Resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<header className="md:hidden fixed top-0 left-0 w-full p-6 border-b border-white/[0.1] backdrop-blur-md bg-[#050505]/50 z-40 flex justify-between items-center">
<div className="text-lg font-bold tracking-[-0.02em]">AGENCY.</div>
<iconify-icon className="text-2xl text-white/70" icon="solar:hamburger-menu-linear"></iconify-icon>
</header>

<nav className="hidden md:flex fixed left-0 top-0 h-screen w-[280px] border-r border-white/[0.1] flex-col justify-between p-10 z-30 backdrop-blur-xl bg-[#050505]/40">
<div className="text-2xl font-bold tracking-[-0.02em]">AGENCY.</div>
<ul className="flex flex-col gap-8 w-full" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<li className="group cursor-pointer flex items-center gap-4 text-xs text-white/60 tracking-[0.15em] uppercase glitch-hover">
<span className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#00F2FF] transition-all duration-300 ease-out"></span>
                Websites
            </li>
<li className="group cursor-pointer flex items-center gap-4 text-xs text-white/60 tracking-[0.15em] uppercase glitch-hover">
<span className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#7D5FFF] transition-all duration-300 ease-out"></span>
                Installations
            </li>
<li className="group cursor-pointer flex items-center gap-4 text-xs text-white/60 tracking-[0.15em] uppercase glitch-hover">
<span className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#FF007A] transition-all duration-300 ease-out"></span>
                XR/VR/AI
            </li>
<li className="group cursor-pointer flex items-center gap-4 text-xs text-white/60 tracking-[0.15em] uppercase glitch-hover">
<span className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#00F2FF] transition-all duration-300 ease-out"></span>
                Multiplayer
            </li>
<li className="group cursor-pointer flex items-center gap-4 text-xs text-white/60 tracking-[0.15em] uppercase glitch-hover">
<span className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#7D5FFF] transition-all duration-300 ease-out"></span>
                Games
            </li>
</ul>
<div className="relative w-full mt-auto pt-10 group" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-xs tracking-[0.15em] text-white focus:outline-none focus:border-[#00F2FF] transition-colors placeholder:text-white/30 uppercase" placeholder="SEARCH..." type="text"/>
<iconify-icon className="absolute right-0 top-0 text-lg text-white/40 group-focus-within:text-[#00F2FF] transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
</nav>

<main className="w-full md:ml-[280px] min-h-screen relative z-20 p-6 pt-28 md:p-16 lg:p-24 flex flex-col justify-start items-center">
<div className="w-full max-w-5xl mb-24 md:mb-32 mt-10 md:mt-20">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Creative Digital <br/> Experiences.
            </h1>
<p className="text-sm md:text-base text-white/60 max-w-lg font-normal leading-relaxed">
                Blending story, art, and technology. We are in-house makers using industry-leading web toolsets for unparalleled quality and performance.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">

<div className="md:col-span-2 glass-card group relative rounded-2xl p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:bg-white/[0.05] overflow-hidden cursor-crosshair flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="absolute inset-0 bg-gradient-to-r from-[#00F2FF]/0 via-transparent to-[#7D5FFF]/0 group-hover:from-[#00F2FF]/10 group-hover:to-[#7D5FFF]/10 transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"></div>
<div className="relative z-10 max-w-xl">
<span className="inline-block text-xs tracking-[0.15em] text-white uppercase px-4 py-2 rounded-full border border-white/20 mb-8" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Featured // 01</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00F2FF] transition-all duration-500">IBM Harmonic State</h2>
<p className="text-sm text-white/60 leading-relaxed font-normal">
                        Interactive audio-visual installation translating quantum computing concepts into generative musical landscapes.
                    </p>
</div>
<button className="relative z-10 flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-white hover:text-[#00F2FF] transition-colors duration-300" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    Explore
                    <iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>

<div className="glass-card group relative rounded-2xl p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:bg-white/[0.05] overflow-hidden cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-br from-[#7D5FFF]/0 to-[#FF007A]/0 group-hover:from-[#7D5FFF]/10 group-hover:to-[#FF007A]/10 transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="text-xs tracking-[0.15em] text-[#7D5FFF] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>WebXR</span>
<iconify-icon className="text-2xl text-white/40 group-hover:text-white transition-colors duration-500" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-3 group-hover:text-[#7D5FFF] transition-colors duration-500">Harry Potter:<br/>Discover Your Patronus</h2>
<p className="text-sm text-white/60 leading-relaxed font-normal">
                        Immersive WebGL journey utilizing real-time fluid simulation and spatial audio.
                    </p>
</div>
</div>

<div className="glass-card group relative rounded-2xl p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:bg-white/[0.05] overflow-hidden cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-br from-[#00F2FF]/0 to-[#7D5FFF]/0 group-hover:from-[#00F2FF]/10 group-hover:to-[#7D5FFF]/10 transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="text-xs tracking-[0.15em] text-[#00F2FF] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Multiplayer</span>
<iconify-icon className="text-2xl text-white/40 group-hover:text-white transition-colors duration-500" icon="solar:papercraft-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-3 group-hover:text-[#00F2FF] transition-colors duration-500">Google<br/>Paper Planes</h2>
<p className="text-sm text-white/60 leading-relaxed font-normal">
                        Synchronized global multiplayer experience connecting millions through WebSockets.
                    </p>
</div>
</div>

<div className="glass-card group relative rounded-2xl p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:bg-white/[0.05] overflow-hidden cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF007A]/0 to-[#7D5FFF]/0 group-hover:from-[#FF007A]/10 group-hover:to-[#7D5FFF]/10 transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="text-xs tracking-[0.15em] text-[#FF007A] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>E-Commerce</span>
<iconify-icon className="text-2xl text-white/40 group-hover:text-white transition-colors duration-500" icon="solar:cart-large-2-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-3 group-hover:text-[#FF007A] transition-colors duration-500">Adidas<br/>Chile 20</h2>
<p className="text-sm text-white/60 leading-relaxed font-normal">
                        Next-generation digital lookbook blending 3D photogrammetry with seamless commerce logic.
                    </p>
</div>
</div>

<div className="glass-card group relative rounded-2xl p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:bg-white/[0.05] overflow-hidden cursor-crosshair">
<div className="absolute inset-0 bg-gradient-to-br from-[#00FF66]/0 to-[#00F2FF]/0 group-hover:from-[#00FF66]/10 group-hover:to-[#00F2FF]/10 transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="text-xs tracking-[0.15em] text-[#00FF66] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Interactive</span>
<iconify-icon className="text-2xl text-white/40 group-hover:text-white transition-colors duration-500" icon="solar:gamepad-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-3 group-hover:text-[#00FF66] transition-colors duration-500">Xbox<br/>2203 Years</h2>
<p className="text-sm text-white/60 leading-relaxed font-normal">
                        Data-driven narrative summarizing 2,203 years of aggregate player gameplay into a personalized web story.
                    </p>
</div>
</div>

<div className="md:col-span-2 mt-16 glass-card relative rounded-2xl p-8 md:p-16 border-t-2 border-t-[#7D5FFF]/50 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#7D5FFF] opacity-[0.05] blur-[100px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00F2FF] opacity-[0.05] blur-[100px] rounded-full"></div>
<div className="relative z-10 max-w-xl">
<h3 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-white">The Lab.</h3>
<p className="text-sm text-white/60 leading-relaxed font-normal">
                        Our home for innovation. Where high-experimental prototypes, fluid simulations, and core engine tests evolve into production-ready deployments.
                    </p>
</div>
<button className="relative z-10 px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-[#00F2FF] transition-colors duration-300 whitespace-nowrap" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    Enter Lab
                </button>
</div>
</div>
</main>



    </>
  );
}
