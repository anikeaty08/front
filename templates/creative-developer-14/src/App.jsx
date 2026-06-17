import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // --- 1. SETUP LENIS SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- 2. THREE.JS SETUP ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Background color logic: Off-white fog
        scene.background = new THREE.Color(0xf4f4f4);
        scene.fog = new THREE.FogExp2(0xf4f4f4, 0.02);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(2, 5, 5);
        scene.add(dirLight);

        // --- 3. SHADERS (The Core Logic) ---

        // Helper to generate textures for projects
        function createTexture(text) {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#e5e5e5';
            ctx.fillRect(0, 0, 512, 512);
            
            // Abstract pattern
            ctx.strokeStyle = '#cccccc';
            ctx.lineWidth = 2;
            for(let i=0; i<10; i++) {
                ctx.beginPath();
                ctx.arc(Math.random()*512, Math.random()*512, 50 + Math.random()*100, 0, Math.PI*2);
                ctx.stroke();
            }

            ctx.fillStyle = '#1a1a1a';
            ctx.font = 'bold 60px Inter';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, 256, 256);

            const texture = new THREE.CanvasTexture(canvas);
            return texture;
        }

        const textures = [
            createTexture('VERCEL'),
            createTexture('LINEAR'),
            createTexture('STRIPE'),
            createTexture('NIKE')
        ];
        
        // Base uniform values
        const uniforms = {
            uTime: { value: 0 },
            uScroll: { value: 0 }, // 0 = Cloth, 1 = Sphere
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uHover: { value: 0 }, // Intensity of hover distortion
            uTexture: { value: textures[0] }, // Current project texture
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        };

        const vertexShader = `
            uniform float uTime;
            uniform float uScroll;
            uniform vec2 uMouse;
            uniform float uHover;
            
            varying vec2 vUv;
            varying float vElevation;
            varying vec3 vNormal;

            // Simplex Noise (Simplified for single file)
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vUv = uv;

                // --- 1. PLANE STATE (The Cloth) ---
                vec3 planePos = position;
                
                // Add "Silk" Waves
                float noise = snoise(vec2(position.x * 0.8 + uTime * 0.2, position.y * 0.6 + uTime * 0.1));
                float wave = sin(position.y * 2.0 + uTime) * 0.2;
                
                // Mouse Interaction (Ripple) on Plane
                float dist = distance(uv, uMouse);
                float mouseRipple = smoothstep(0.5, 0.0, dist) * sin(dist * 20.0 - uTime * 5.0) * 0.3;
                
                planePos.z += noise * 0.5 + wave + mouseRipple;

                // --- 2. SPHERE STATE (The Morph) ---
                // Mathematically mapping a plane grid to sphere coordinates
                // u = longitude, v = latitude
                float phi = (uv.x) * 3.14159265 * 2.0;
                float theta = (uv.y) * 3.14159265;
                float radius = 1.5;

                vec3 spherePos;
                spherePos.x = radius * sin(theta) * cos(phi);
                spherePos.y = radius * cos(theta);
                spherePos.z = radius * sin(theta) * sin(phi);

                // Add distortion to Sphere based on Hover
                spherePos += normal * (snoise(spherePos.xy * 2.0 + uTime) * uHover * 0.3);

                // --- 3. MIXING ---
                // Smooth blend between Plane and Sphere based on scroll
                float mixFactor = smoothstep(0.0, 1.0, uScroll);
                vec3 finalPos = mix(planePos, spherePos, mixFactor);

                vElevation = planePos.z;
                vNormal = normal; // Simplified normal approximation

                gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
            }
        `;

        const fragmentShader = `
            uniform sampler2D uTexture;
            uniform float uScroll;
            
            varying vec2 vUv;
            varying float vElevation;

            void main() {
                // Silk Color (Off-white/Silver)
                vec3 silkColor = vec3(0.95, 0.95, 0.97);
                
                // Shadows based on elevation
                float shadow = smoothstep(-1.0, 1.0, vElevation);
                vec3 color = mix(vec3(0.85), silkColor, shadow);

                // Texture from Projects (only visible when morphing to sphere)
                vec4 texColor = texture2D(uTexture, vUv);
                
                // Mix Texture in based on scroll (Sphere reveals project)
                vec3 finalColor = mix(color, texColor.rgb, uScroll * 0.9); // 0.9 to keep some material feel

                // Add subtle lighting feel
                finalColor += vec3(0.05); 

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        // Create Mesh
        // High segment plane for smooth cloth simulation
        const geometry = new THREE.PlaneGeometry(6, 6, 64, 64);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            side: THREE.DoubleSide,
            wireframe: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // --- 4. INTERACTION LOGIC ---

        // Mouse Move
        const mouse = new THREE.Vector2();
        window.addEventListener('mousemove', (e) => {
            // Normalized coordinates for shader
            mouse.x = e.clientX / window.innerWidth;
            mouse.y = 1.0 - (e.clientY / window.innerHeight);
            
            // Lerp uniform for smoothness
            // We do this in the render loop usually, but direct set is fine for now
            // Adding a target logic in render loop for smoother drag
        });

        let targetMouse = new THREE.Vector2(0.5, 0.5);

        window.addEventListener('mousemove', (e) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
        });


        // Scroll Logic
        let scrollProgress = 0;
        
        lenis.on('scroll', (e) => {
            // Calculate scroll percentage relative to viewport height
            // We want the morph to happen as we leave the hero and enter projects
            const scrollY = e.animatedScroll; // Lenis scroll value
            const windowH = window.innerHeight;
            
            // Normalize scroll: 0 at top, 1 when we reach projects
            let p = Math.min(Math.max(scrollY / windowH, 0), 1);
            scrollProgress = p;
        });

        // Hover Projects Logic
        const projectItems = document.querySelectorAll('.project-item');
        let targetHover = 0;
        let currentTextureIndex = 0;

        projectItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                targetHover = 1;
                const index = parseInt(item.getAttribute('data-index'));
                if(currentTextureIndex !== index) {
                    material.uniforms.uTexture.value = textures[index];
                    currentTextureIndex = index;
                }
            });
            item.addEventListener('mouseleave', () => {
                targetHover = 0;
            });
        });


        // --- 5. RENDER LOOP ---
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            // Update Uniforms
            material.uniforms.uTime.value = elapsedTime;
            
            // Smooth Scroll Morphing
            // Easing the scroll value into the shader
            material.uniforms.uScroll.value += (scrollProgress - material.uniforms.uScroll.value) * 0.05;

            // Smooth Mouse
            material.uniforms.uMouse.value.x += (targetMouse.x - material.uniforms.uMouse.value.x) * 0.05;
            material.uniforms.uMouse.value.y += (targetMouse.y - material.uniforms.uMouse.value.y) * 0.05;

            // Smooth Hover Distortion
            material.uniforms.uHover.value += (targetHover - material.uniforms.uHover.value) * 0.1;

            // Rotate mesh slightly if in sphere mode
            if(material.uniforms.uScroll.value > 0.1) {
                mesh.rotation.y = elapsedTime * 0.1;
                mesh.rotation.z = 0;
            } else {
                // Reset rotation when back to cloth
                mesh.rotation.y += (0 - mesh.rotation.y) * 0.05;
                // Add slight tilt based on mouse X for cloth
                mesh.rotation.z = (targetMouse.x - 0.5) * 0.1;
                mesh.rotation.x = (targetMouse.y - 0.5) * 0.1;
            }

            // Adjust Z position based on morph (Pull sphere back a bit or push cloth forward)
            // Cloth is at z=0. Sphere radius 1.5.
            
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<main className="relative z-10">

<header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center mix-blend-exclusion z-50 pointer-events-none">
<div className="text-sm font-medium tracking-tighter uppercase pointer-events-auto cursor-pointer">
                Sørensen.
            </div>
<nav className="pointer-events-auto">
<button className="text-sm font-medium tracking-tight hover:opacity-50 transition-opacity">Menu</button>
</nav>
</header>

<section className="h-screen w-full flex flex-col justify-center items-center relative pointer-events-none">
<div className="max-w-[90vw] text-center mix-blend-difference text-[#f4f4f4]">
<h1 className="text-[clamp(4rem,12vw,12rem)] font-medium leading-[0.85] tracking-tighter uppercase">
                    Interactive<br/>Materiality
                </h1>
<p className="mt-8 text-lg font-light tracking-tight opacity-80 max-w-md mx-auto normal-case">
                    Lead Creative Developer specializing in WebGL &amp; micro-interactions.
                </p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference text-[#f4f4f4]">
<span className="text-xs uppercase tracking-widest opacity-60">Scroll</span>
<i className="w-4 h-4 opacity-60 animate-bounce" data-lucide="arrow-down"></i>
</div>
</section>

<section className="min-h-screen w-full py-32 px-4 md:px-12 relative" id="projects">
<div className="max-w-7xl mx-auto">
<div className="mb-24 border-b border-neutral-300 pb-4 flex justify-between items-end">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Selected Works</span>
<span className="text-xs font-medium text-neutral-500">01 — 04</span>
</div>
<div className="flex flex-col">

<article className="group py-12 border-b border-neutral-200 transition-all hover:border-neutral-900 cursor-none project-item" data-index="0">
<div className="flex flex-col md:flex-row justify-between md:items-baseline gap-4">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-300 group-hover:text-[#1a1a1a] transition-colors duration-500">
                                Vercel Analytics
                            </h2>
<div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm tracking-tight font-medium">Fintech</span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>

<article className="group py-12 border-b border-neutral-200 transition-all hover:border-neutral-900 cursor-none project-item" data-index="1">
<div className="flex flex-col md:flex-row justify-between md:items-baseline gap-4">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-300 group-hover:text-[#1a1a1a] transition-colors duration-500">
                                Linear Mobile
                            </h2>
<div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm tracking-tight font-medium">Productivity</span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>

<article className="group py-12 border-b border-neutral-200 transition-all hover:border-neutral-900 cursor-none project-item" data-index="2">
<div className="flex flex-col md:flex-row justify-between md:items-baseline gap-4">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-300 group-hover:text-[#1a1a1a] transition-colors duration-500">
                                Stripe Press
                            </h2>
<div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm tracking-tight font-medium">E-Commerce</span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>

<article className="group py-12 border-b border-neutral-200 transition-all hover:border-neutral-900 cursor-none project-item" data-index="3">
<div className="flex flex-col md:flex-row justify-between md:items-baseline gap-4">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-300 group-hover:text-[#1a1a1a] transition-colors duration-500">
                                Nike Lab
                            </h2>
<div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm tracking-tight font-medium">Fashion</span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="py-24 px-8 text-center">
<div className="text-sm font-medium text-neutral-400 tracking-tight">
                © 2024 Sørensen. Minimalist WebGL Experience.
            </div>
</footer>
</main>



    </>
  );
}
