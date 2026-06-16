import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav');
        const closeBtn = document.getElementById('close-mobile');

        mobileBtn.addEventListener('click', () => {
            mobileNav.style.display = 'flex';
            gsap.fromTo(mobileNav, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        });
        closeBtn.addEventListener('click', () => {
            gsap.to(mobileNav, { opacity: 0, duration: 0.3, onComplete: () => mobileNav.style.display = 'none' });
        });

        // Three.js Scene
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);
        container.appendChild(renderer.domElement);

        // Adaptive particle count
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 8000 : 25000;
        const secondaryCount = isMobile ? 3000 : 10000;

        // Simplex Noise Implementation (simplified)
        class SimplexNoise {
            constructor() {
                this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
                this.p = [];
                for (let i = 0; i < 256; i++) this.p[i] = Math.floor(Math.random() * 256);
                this.perm = [];
                for (let i = 0; i < 512; i++) this.perm[i] = this.p[i & 255];
            }
            dot(g, x, y, z) { return g[0]*x + g[1]*y + g[2]*z; }
            noise3d(x, y, z) {
                const F3 = 1/3, G3 = 1/6;
                let s = (x+y+z)*F3;
                let i = Math.floor(x+s), j = Math.floor(y+s), k = Math.floor(z+s);
                let t = (i+j+k)*G3;
                let X0 = i-t, Y0 = j-t, Z0 = k-t;
                let x0 = x-X0, y0 = y-Y0, z0 = z-Z0;
                let i1,j1,k1,i2,j2,k2;
                if(x0>=y0){if(y0>=z0){i1=1;j1=0;k1=0;i2=1;j2=1;k2=0;}else if(x0>=z0){i1=1;j1=0;k1=0;i2=1;j2=0;k2=1;}else{i1=0;j1=0;k1=1;i2=1;j2=0;k2=1;}}else{if(y0<z0){i1=0;j1=0;k1=1;i2=0;j2=1;k2=1;}else if(x0<z0){i1=0;j1=1;k1=0;i2=0;j2=1;k2=1;}else{i1=0;j1=1;k1=0;i2=1;j2=1;k2=0;}}
                let x1=x0-i1+G3,y1=y0-j1+G3,z1=z0-k1+G3;
                let x2=x0-i2+2*G3,y2=y0-j2+2*G3,z2=z0-k2+2*G3;
                let x3=x0-1+3*G3,y3=y0-1+3*G3,z3=z0-1+3*G3;
                let ii=i&255,jj=j&255,kk=k&255;
                let gi0=this.perm[ii+this.perm[jj+this.perm[kk]]]%12;
                let gi1=this.perm[ii+i1+this.perm[jj+j1+this.perm[kk+k1]]]%12;
                let gi2=this.perm[ii+i2+this.perm[jj+j2+this.perm[kk+k2]]]%12;
                let gi3=this.perm[ii+1+this.perm[jj+1+this.perm[kk+1]]]%12;
                let n0=0,n1=0,n2=0,n3=0;
                let t0=0.6-x0*x0-y0*y0-z0*z0;
                if(t0>=0){t0*=t0;n0=t0*t0*this.dot(this.grad3[gi0],x0,y0,z0);}
                let t1=0.6-x1*x1-y1*y1-z1*z1;
                if(t1>=0){t1*=t1;n1=t1*t1*this.dot(this.grad3[gi1],x1,y1,z1);}
                let t2=0.6-x2*x2-y2*y2-z2*z2;
                if(t2>=0){t2*=t2;n2=t2*t2*this.dot(this.grad3[gi2],x2,y2,z2);}
                let t3=0.6-x3*x3-y3*y3-z3*z3;
                if(t3>=0){t3*=t3;n3=t3*t3*this.dot(this.grad3[gi3],x3,y3,z3);}
                return 32*(n0+n1+n2+n3);
            }
        }

        const simplex = new SimplexNoise();

        // Main Particle System
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const originalPositions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const radius = Math.random() * 50 + 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi) - 20;

            originalPositions[i3] = positions[i3];
            originalPositions[i3 + 1] = positions[i3 + 1];
            originalPositions[i3 + 2] = positions[i3 + 2];

            velocities[i3] = (Math.random() - 0.5) * 0.01;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;

            // Color distribution: blue, purple, cyan
            const colorChoice = Math.random();
            if (colorChoice < 0.4) {
                colors[i3] = 0; colors[i3+1] = 0.5 + Math.random()*0.3; colors[i3+2] = 1;
            } else if (colorChoice < 0.7) {
                colors[i3] = 0.4 + Math.random()*0.2; colors[i3+1] = 0; colors[i3+2] = 0.8 + Math.random()*0.2;
            } else {
                colors[i3] = 0; colors[i3+1] = 0.7 + Math.random()*0.3; colors[i3+2] = 0.8 + Math.random()*0.2;
            }

            sizes[i] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Custom Shader Material
        const vertexShader = `
            attribute float size;
            varying vec3 vColor;
            varying float vDist;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                vDist = -mvPosition.z;
                gl_PointSize = size * (200.0 / -mvPosition.z);
                gl_PointSize = max(gl_PointSize, 0.5);
                gl_Position = projectionMatrix * mvPosition;
            }
        `;

        const fragmentShader = `
            varying vec3 vColor;
            varying float vDist;
            void main() {
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;
                float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                float fog = exp(-vDist * 0.015);
                float glow = exp(-dist * 4.0) * 0.5;
                vec3 finalColor = vColor + vColor * glow;
                gl_FragColor = vec4(finalColor, alpha * fog * 0.8);
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            vertexColors: true,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Secondary smaller particles for depth
        const secGeom = new THREE.BufferGeometry();
        const secPos = new Float32Array(secondaryCount * 3);
        const secColors = new Float32Array(secondaryCount * 3);
        const secSizes = new Float32Array(secondaryCount);

        for (let i = 0; i < secondaryCount; i++) {
            const i3 = i * 3;
            secPos[i3] = (Math.random() - 0.5) * 120;
            secPos[i3 + 1] = (Math.random() - 0.5) * 120;
            secPos[i3 + 2] = (Math.random() - 0.5) * 120 - 30;

            secColors[i3] = 0.3; secColors[i3+1] = 0.5; secColors[i3+2] = 0.9;
            secSizes[i] = Math.random() * 0.8 + 0.2;
        }

        secGeom.setAttribute('position', new THREE.BufferAttribute(secPos, 3));
        secGeom.setAttribute('color', new THREE.BufferAttribute(secColors, 3));
        secGeom.setAttribute('size', new THREE.BufferAttribute(secSizes, 1));

        const secMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            vertexColors: true,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        const secParticles = new THREE.Points(secGeom, secMaterial);
        scene.add(secParticles);

        // Nebula clusters
        for (let c = 0; c < 5; c++) {
            const nebulaGeom = new THREE.BufferGeometry();
            const nCount = isMobile ? 500 : 2000;
            const nPos = new Float32Array(nCount * 3);
            const nCol = new Float32Array(nCount * 3);
            const nSizes = new Float32Array(nCount);

            const cx = (Math.random() - 0.5) * 40;
            const cy = (Math.random() - 0.5) * 30;
            const cz = -Math.random() * 40 - 10;

            const hue = Math.random();

            for (let i = 0; i < nCount; i++) {
                const i3 = i * 3;
                const r = Math.random() * 8;
                const t = Math.random() * Math.PI * 2;
                const p = Math.acos(2 * Math.random() - 1);

                nPos[i3] = cx + r * Math.sin(p) * Math.cos(t);
                nPos[i3 + 1] = cy + r * Math.sin(p) * Math.sin(t);
                nPos[i3 + 2] = cz + r * Math.cos(p);

                if (hue < 0.33) {
                    nCol[i3] = 0; nCol[i3+1] = 0.3; nCol[i3+2] = 1;
                } else if (hue < 0.66) {
                    nCol[i3] = 0.5; nCol[i3+1] = 0; nCol[i3+2] = 1;
                } else {
                    nCol[i3] = 0; nCol[i3+1] = 0.8; nCol[i3+2] = 0.8;
                }

                nSizes[i] = Math.random() * 3 + 1;
            }

            nebulaGeom.setAttribute('position', new THREE.BufferAttribute(nPos, 3));
            nebulaGeom.setAttribute('color', new THREE.BufferAttribute(nCol, 3));
            nebulaGeom.setAttribute('size', new THREE.BufferAttribute(nSizes, 1));

            const nebulaMat = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                vertexColors: true,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            });

            const nebula = new THREE.Points(nebulaGeom, nebulaMat);
            scene.add(nebula);
        }

        // Mouse tracking
        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;

        document.addEventListener('mousemove', (e) => {
            targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        // Touch support
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                targetMouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
                targetMouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
            }
        });

        // Scroll tracking
        let scrollProgress = 0;
        let targetScroll = 0;

        window.addEventListener('scroll', () => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            targetScroll = window.scrollY / maxScroll;
        });

        // Click ripple
        let rippleOrigin = new THREE.Vector3(0, 0, 0);
        let rippleTime = -10;

        document.addEventListener('click', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = -(e.clientY / window.innerHeight - 0.5) * 2;
            rippleOrigin.set(x * 20, y * 20, camera.position.z - 10);
            rippleTime = 0;
        });

        // Animation
        let time = 0;

        function animate() {
            requestAnimationFrame(animate);
            time += 0.003;

            // Smooth mouse interpolation
            mouseX += (targetMouseX - mouseX) * 0.03;
            mouseY += (targetMouseY - mouseY) * 0.03;

            // Smooth scroll interpolation
            scrollProgress += (targetScroll - scrollProgress) * 0.05;

            // Camera parallax
            camera.position.x = mouseX * 2;
            camera.position.y = -mouseY * 1.5;
            camera.position.z = 5 - scrollProgress * 50;
            camera.lookAt(mouseX * 0.5, -mouseY * 0.3, camera.position.z - 15);

            // Ripple effect
            if (rippleTime >= 0) {
                rippleTime += 0.02;
            }

            // Update main particles with noise field
            const posArr = particles.geometry.attributes.position.array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;

                const ox = originalPositions[i3];
                const oy = originalPositions[i3 + 1];
                const oz = originalPositions[i3 + 2];

                // Noise-based flow
                const noiseScale = 0.02;
                const nx = simplex.noise3d(ox * noiseScale + time, oy * noiseScale, oz * noiseScale) * 1.5;
                const ny = simplex.noise3d(ox * noiseScale, oy * noiseScale + time, oz * noiseScale) * 1.5;
                const nz = simplex.noise3d(ox * noiseScale, oy * noiseScale, oz * noiseScale + time) * 0.8;

                posArr[i3] = ox + nx;
                posArr[i3 + 1] = oy + ny;
                posArr[i3 + 2] = oz + nz;

                // Ripple distortion
                if (rippleTime >= 0 && rippleTime < 3) {
                    const dx = posArr[i3] - rippleOrigin.x;
                    const dy = posArr[i3 + 1] - rippleOrigin.y;
                    const dz = posArr[i3 + 2] - rippleOrigin.z;
                    const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
                    const rippleRadius = rippleTime * 15;
                    const rippleWidth = 5;
                    const rippleStrength = Math.exp(-((dist - rippleRadius) * (dist - rippleRadius)) / (rippleWidth * rippleWidth));
                    const fade = Math.max(0, 1 - rippleTime / 3);

                    if (dist > 0.01) {
                        posArr[i3] += (dx / dist) * rippleStrength * 2 * fade;
                        posArr[i3 + 1] += (dy / dist) * rippleStrength * 2 * fade;
                        posArr[i3 + 2] += (dz / dist) * rippleStrength * 1 * fade;
                    }
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;

            // Rotate secondary particles slowly
            secParticles.rotation.y = time * 0.15;
            secParticles.rotation.x = Math.sin(time * 0.5) * 0.05;

            // Global slow rotation
            particles.rotation.y = time * 0.08;

            renderer.render(scene, camera);
        }

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // GSAP entrance animations
        gsap.fromTo('#ui-overlay', { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.5 });

        // CTA button interaction
        const ctaBtn = document.getElementById('cta-btn');
        ctaBtn.addEventListener('mouseenter', () => {
            gsap.to(ctaBtn, { scale: 1.05, duration: 0.3 });
        });
        ctaBtn.addEventListener('mouseleave', () => {
            gsap.to(ctaBtn, { scale: 1, duration: 0.3 });
        });

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.glass-panel').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="webgl-container" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0'}}><canvas height="598" style={{display: 'block', width: '926px', height: '598px'}} width="926"></canvas></div>

<div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '1', pointerEvents: 'none', background: 'radial-gradient(ellipse at 50% 0%, rgba(88,40,220,0.15) 0%, transparent 60%),radial-gradient(ellipse at 20% 80%, rgba(0,180,255,0.08) 0%, transparent 50%),radial-gradient(ellipse at 80% 60%, rgba(120,0,255,0.06) 0%, transparent 40%)'}}></div>

<div style={{position: 'fixed', bottom: '0', left: '0', width: '100%', height: '40%', zIndex: '1', pointerEvents: 'none', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)'}}></div>

<div id="aurora" style={{position: 'fixed', top: '-20%', left: '-10%', width: '120%', height: '50%', zIndex: '1', pointerEvents: 'none', opacity: '0.4', background: 'linear-gradient(135deg, rgba(0,200,255,0.2) 0%, rgba(120,0,255,0.15) 50%, rgba(0,100,255,0.1) 100%)', filter: 'blur(80px)', animation: 'auroraMove 12s ease-in-out infinite alternate'}}></div>
<style>
        @keyframes auroraMove {
            0% { transform: translateX(-5%) translateY(0%) rotate(0deg); }
            100% { transform: translateX(5%) translateY(5%) rotate(3deg); }
        }
        @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(0,180,255,0.4), 0 0 40px rgba(120,0,255,0.2), inset 0 0 20px rgba(0,180,255,0.1); }
            50% { box-shadow: 0 0 30px rgba(0,180,255,0.6), 0 0 60px rgba(120,0,255,0.3), inset 0 0 30px rgba(0,180,255,0.15); }
        }
        @keyframes floatUp {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderGlow {
            0%, 100% { border-color: rgba(0,180,255,0.2); }
            50% { border-color: rgba(120,0,255,0.4); }
        }
        .glass-panel {
            background: rgba(10,10,30,0.35);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.08);
        }
        .nav-link {
            position: relative;
            transition: all 0.3s ease;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            width: 0;
            height: 1px;
            background: linear-gradient(90deg, rgba(0,180,255,0.8), rgba(120,0,255,0.8));
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .nav-link:hover {
            color: rgba(0,200,255,0.9);
        }
        .cta-button {
            animation: glowPulse 3s ease-in-out infinite;
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            transform: scale(1.05);
            background: linear-gradient(135deg, rgba(0,180,255,0.3) 0%, rgba(120,0,255,0.3) 100%);
        }
        .scroll-indicator {
            animation: floatUp 2s ease-in-out infinite;
        }
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
    </style>

<div className="" id="ui-overlay" style={{position: 'relative', zIndex: '10', minHeight: '300vh'}}>

<nav className="" style={{position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '100', animation: 'fadeInUp 1s ease 0.3s both'}}>
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between" style={{padding: '1.25rem 1.5rem'}}>

<div className="flex items-center gap-2">
<div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg,#00b4ff,#7800ff)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<span className="text-white font-semibold text-sm tracking-tighter">D</span>
</div>
<span className="font-semibold tracking-tight text-base text-white">Dot Impacts</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-normal" href="#" style={{color: 'rgba(255,255,255,0.9)'}}>Home</a>
<a className="nav-link text-sm font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>Solutions</a>
<a className="nav-link text-sm font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>AI Tools</a>
<a className="nav-link text-sm font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>Portfolio</a>
<a className="nav-link text-sm font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>Contact</a>
</div>

<button className="md:hidden flex flex-col gap-1.5 p-2" id="mobile-menu-btn" style={{background: 'none', border: 'none', cursor: 'pointer'}}>
<span style={{width: '20px', height: '1.5px', background: 'rgba(255,255,255,0.7)', display: 'block', transition: 'all 0.3s'}}></span>
<span style={{width: '16px', height: '1.5px', background: 'rgba(255,255,255,0.7)', display: 'block', transition: 'all 0.3s'}}></span>
</button>
</div>
</nav>

<div className="glass-panel md:hidden" id="mobile-nav" style={{position: 'fixed', top: '0px', left: '0px', width: '100%', height: '100%', zIndex: '99', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', display: 'none'}}>
<button id="close-mobile" style={{position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: 'rgba(255,255,255,0.7)'}} width="28"></iconify-icon>
</button>
<a className="text-lg font-normal" href="#" style={{color: 'rgba(255,255,255,0.9)'}}>Home</a>
<a className="text-lg font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>Solutions</a>
<a className="text-lg font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>AI Tools</a>
<a className="text-lg font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>Portfolio</a>
<a className="text-lg font-normal" href="#" style={{color: 'rgba(255,255,255,0.5)'}}>Contact</a>
</div>

<section className="flex flex-col items-center justify-center" style={{minHeight: '100vh', padding: '6rem 1.5rem 4rem'}}>
<div className="text-center max-w-3xl mx-auto" style={{animation: 'fadeInUp 1.2s ease 0.6s both'}}>

<div className="glass-panel inline-flex items-center gap-2 rounded-full mb-8" style={{padding: '0.4rem 1rem', animation: 'borderGlow 4s ease-in-out infinite'}}>
<span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#00b4ff', boxShadow: '0 0 8px #00b4ff'}}></span>
<span className="text-xs font-normal" style={{color: 'rgba(255,255,255,0.6)'}}>Engineering Digital Impact</span>
</div>

<h1 className="leading-tight font-semibold tracking-tight mb-6" style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', background: 'linear-gradient(135deg, #ffffff 0%, rgba(0,200,255,0.9) 50%, rgba(150,80,255,0.8) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Enter the Impact<br/>Universe
        </h1>

<p className="text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto" style={{color: 'rgba(255,255,255,0.45)'}}>
            Where Technology, AI, and Creativity Converge — building extraordinary digital experiences that reshape
            industries.
        </p>

<button className="cta-button inline-flex items-center gap-3 rounded-full cursor-pointer" id="cta-btn" style={{padding: '0.85rem 2.25rem', background: 'linear-gradient(135deg, rgba(0,180,255,0.15) 0%, rgba(120,0,255,0.15) 100%)', border: '1px solid rgba(0,180,255,0.3)', color: '#fff', fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.01em'}}>
<span>Enter the Impact</span>
<iconify-icon icon="solar:arrow-right-linear" style={{color: 'rgba(0,200,255,0.9)'}} width="18"></iconify-icon>
</button>

<div className="scroll-indicator mt-16 flex flex-col items-center gap-2" style={{padding: '0.4rem 1rem', animation: 'borderGlow 4s ease-in-out infinite'}}>
<span className="text-xs font-normal" style={{color: 'rgba(255,255,255,0.4)'}}>Scroll to explore</span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{color: 'rgba(0,180,255,0.6)'}} width="20"></iconify-icon>
</div>
</div>
</section>

<section className="flex flex-col items-center justify-center" style={{minHeight: '100vh', padding: '4rem 1.5rem'}}>
<div className="max-w-5xl mx-auto w-full">
<div className="text-center mb-16" style={{animation: 'fadeInUp 0.8s ease both'}}>
<h2 className="tracking-tight font-semibold text-3xl md:text-4xl mb-4" style={{color: 'rgba(255,255,255,0.9)'}}>
                        Our Capabilities
                    </h2>
<p className="text-sm font-light" style={{color: 'rgba(255,255,255,0.35)', maxWidth: '28rem', margin: '0 auto'}}>
                        Leveraging cutting-edge technology to create meaningful digital transformations.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel rounded-2xl p-6 group" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.background='rgba(10,10,30,0.35)'" onmouseover="this.style.borderColor='rgba(0,180,255,0.2)';this.style.background='rgba(10,10,30,0.5)'" style={{transition: '0.4s', cursor: 'pointer', borderColor: 'rgba(255, 255, 255, 0.08)', background: 'rgba(10, 10, 30, 0.35)'}}>
<div className="mb-5" style={{width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(0,180,255,0.15),rgba(0,180,255,0.05))', border: '1px solid rgba(0,180,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:cpu-bolt-linear" style={{color: 'rgba(0,200,255,0.8)'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-base tracking-tight mb-2" style={{color: 'rgba(255,255,255,0.9)'}}>AI Engineering</h3>
<p className="text-xs font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.35)'}}>Custom AI solutions that learn, adapt, and deliver measurable results for complex business challenges.</p>
</div>

<div className="glass-panel rounded-2xl p-6" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.background='rgba(10,10,30,0.35)'" onmouseover="this.style.borderColor='rgba(120,0,255,0.2)';this.style.background='rgba(10,10,30,0.5)'" style={{transition: '0.4s', cursor: 'pointer'}}>
<div className="mb-5" style={{width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(120,0,255,0.15),rgba(120,0,255,0.05))', border: '1px solid rgba(120,0,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:code-square-linear" style={{color: 'rgba(150,80,255,0.8)'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-base tracking-tight mb-2" style={{color: 'rgba(255,255,255,0.9)'}}>Digital Products</h3>
<p className="text-xs font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.35)'}}>End-to-end product development with immersive interfaces and performance-first architecture.</p>
</div>

<div className="glass-panel rounded-2xl p-6" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.background='rgba(10,10,30,0.35)'" onmouseover="this.style.borderColor='rgba(0,255,200,0.2)';this.style.background='rgba(10,10,30,0.5)'" style={{transition: '0.4s', cursor: 'pointer'}}>
<div className="mb-5" style={{width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(0,255,200,0.15),rgba(0,255,200,0.05))', border: '1px solid rgba(0,255,200,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:pallete-2-linear" style={{color: 'rgba(0,255,200,0.8)'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-base tracking-tight mb-2" style={{color: 'rgba(255,255,255,0.9)'}}>Creative Strategy</h3>
<p className="text-xs font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.35)'}}>Data-driven creative direction that merges aesthetics with conversion-optimized design systems.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col items-center justify-center" style={{minHeight: '60vh', padding: '4rem 1.5rem'}}>
<div className="max-w-4xl mx-auto w-full">
<div className="glass-panel rounded-2xl p-8 md:p-12" style={{padding: '0.4rem 1rem', animation: 'borderGlow 4s ease-in-out infinite'}}>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="">
<div className="font-semibold text-3xl md:text-4xl tracking-tight mb-1" style={{background: 'linear-gradient(135deg,#00c8ff,#7800ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>150+</div>
<div className="text-xs font-light" style={{color: 'rgba(255,255,255,0.35)'}}>Projects Delivered</div>
</div>
<div>
<div className="font-semibold text-3xl md:text-4xl tracking-tight mb-1" style={{background: 'linear-gradient(135deg,#00c8ff,#7800ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>40+</div>
<div className="text-xs font-light" style={{color: 'rgba(255,255,255,0.35)'}}>AI Models Deployed</div>
</div>
<div>
<div className="font-semibold text-3xl md:text-4xl tracking-tight mb-1" style={{background: 'linear-gradient(135deg,#00c8ff,#7800ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>98%</div>
<div className="text-xs font-light" style={{color: 'rgba(255,255,255,0.35)'}}>Client Retention</div>
</div>
<div>
<div className="font-semibold text-3xl md:text-4xl tracking-tight mb-1" style={{background: 'linear-gradient(135deg,#00c8ff,#7800ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>12</div>
<div className="text-xs font-light" style={{color: 'rgba(255,255,255,0.35)'}}>Countries Served</div>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
