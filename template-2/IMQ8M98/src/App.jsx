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



        const container = document.getElementById('container');
        const config = {
            particleCount: 200,
            particleSpread: 10,
            speed: 0.1,
            particleBaseSize: 100,
            particleColors: ['#ffffff', '#ffffff'],
            moveParticlesOnHover: true,
            alphaParticles: false,
            disableRotation: false
        };
        function hexToRgb(hex) {
            hex = hex.replace(/^#/, "");
            if (hex.length === 3) {
                hex = hex.split("").map(c => c + c).join("");
            }
            const int = parseInt(hex, 16);
            return [
                ((int >> 16) & 255) / 255,
                ((int >> 8) & 255) / 255,
                (int & 255) / 255
            ];
        }
        const vertexShader = `
            attribute vec4 random;
            attribute vec3 color;
            uniform float uTime;
            uniform float uSpread;
            uniform float uBaseSize;
            uniform float uSizeRandomness;
            varying vec4 vRandom;
            varying vec3 vColor;
            void main() {
                vRandom = random;
                vColor = color;
                vec3 pos = position * uSpread;
                pos.z *= 10.0;
                vec4 mPos = modelMatrix * vec4(pos, 1.0);
                float t = uTime;
                mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
                mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
                mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
                vec4 mvPos = viewMatrix * mPos;
                gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
                gl_Position = projectionMatrix * mvPos;
            }
        `;
        const fragmentShader = `
            precision highp float;
            uniform float uTime;
            uniform float uAlphaParticles;
            varying vec4 vRandom;
            varying vec3 vColor;
            void main() {
                vec2 uv = gl_PointCoord.xy;
                float d = length(uv - vec2(0.5));
                if(uAlphaParticles < 0.5) {
                    if(d > 0.5) {
                        discard;
                    }
                    gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
                } else {
                    float circle = smoothstep(0.5, 0.4, d) * 0.8;
                    gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
                }
            }
        `;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        camera.position.z = 20;
        const count = config.particleCount;
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count * 4);
        const colors = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            let x, y, z, len;
            do {
                x = Math.random() * 2 - 1;
                y = Math.random() * 2 - 1;
                z = Math.random() * 2 - 1;
                len = x * x + y * y + z * z;
            } while (len > 1 || len === 0);
            const r = Math.cbrt(Math.random());
            positions.set([x * r, y * r, z * r], i * 3);
            randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
            const col = hexToRgb(config.particleColors[Math.floor(Math.random() * config.particleColors.length)]);
            colors.set(col, i * 3);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('random', new THREE.BufferAttribute(randoms, 4));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uSpread: { value: config.particleSpread },
                uBaseSize: { value: config.particleBaseSize },
                uSizeRandomness: { value: 1 },
                uAlphaParticles: { value: config.alphaParticles ? 1 : 0 }
            },
            transparent: true,
            depthTest: false
        });
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);
        const mouse = { x: 0, y: 0 };
        if (config.moveParticlesOnHover) {
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
            });
        }
        let elapsed = 0;
        let lastTime = performance.now();
        function animate(currentTime) {
            requestAnimationFrame(animate);
            const delta = currentTime - lastTime;
            lastTime = currentTime;
            elapsed += delta * config.speed;
            material.uniforms.uTime.value = elapsed * 0.001;
            if (config.moveParticlesOnHover) {
                particles.position.x = -mouse.x;
                particles.position.y = -mouse.y;
            }
            if (!config.disableRotation) {
                particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
                particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
                particles.rotation.z += 0.01 * config.speed;
            }
            renderer.render(scene, camera);
        }
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        animate(performance.now());
    


        const IMGS = [
            "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80"
        ];

        class HorizontalRollingGallery {
            constructor(options = {}) {
                this.autoplay = options.autoplay || true;
                this.pauseOnHover = options.pauseOnHover || true;
                this.images = options.images || IMGS;
                this.cylinder = document.getElementById('galleryCylinder');
                this.rotation = 0;
                this.isDragging = false;
                this.dragStart = 0;
                this.dragFactor = 0.3;
                this.isSmallScreen = window.innerWidth <= 640;
                this.init();
                this.setupEventListeners();
            }
            init() {
                this.updateDimensions();
                this.createGalleryFaces();
                if (this.autoplay) this.startAutoplay();
            }
            updateDimensions() {
                this.cylinderWidth = this.isSmallScreen ? 1600 : 2400;
                this.faceCount = this.images.length;
                this.faceWidth = (this.cylinderWidth / this.faceCount) * 1.2;
                this.radius = this.cylinderWidth / (2 * Math.PI);
                this.cylinder.style.width = `${this.cylinderWidth}px`;
            }
            createGalleryFaces() {
                this.cylinder.innerHTML = '';
                this.images.forEach((url, i) => {
                    const face = document.createElement('div');
                    face.className = 'gallery-face group absolute flex items-center justify-center p-[4%]';
                    face.style.width = `${this.faceWidth}px`;
                    face.style.height = '400px';
                    face.style.transform = `rotateY(${(360 / this.faceCount) * i}deg) translateZ(${this.radius}px)`;

                    const glassFrame = document.createElement('div');
                    glassFrame.className = 'glass-frame flex items-center justify-center rounded-[24px] transition-transform duration-300 ease-out group-hover:scale-105 shadow-lg';
                    glassFrame.style.width = '280px';
                    glassFrame.style.height = '320px';
                    glassFrame.style.overflow = 'hidden';

                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = 'person gallery';
                    img.className = 'pointer-events-none h-full w-full rounded-[20px] object-cover';
                    img.draggable = false;

                    glassFrame.appendChild(img);
                    face.appendChild(glassFrame);
                    this.cylinder.appendChild(face);
                });
            }
            updateRotation() {
                this.cylinder.style.transform = `rotateY(${this.rotation}deg)`;
            }
            startAutoplay() {
                this.cylinder.classList.add('gallery-spinning');
            }
            stopAutoplay() {
                this.cylinder.classList.remove('gallery-spinning');
            }
            setupEventListeners() {
                this.cylinder.addEventListener('mousedown', this.handleMouseDown.bind(this));
                document.addEventListener('mousemove', this.handleMouseMove.bind(this));
                document.addEventListener('mouseup', this.handleMouseUp.bind(this));
                this.cylinder.addEventListener('touchstart', this.handleTouchStart.bind(this));
                document.addEventListener('touchmove', this.handleTouchMove.bind(this));
                document.addEventListener('touchend', this.handleTouchEnd.bind(this));
                if (this.pauseOnHover) {
                    this.cylinder.addEventListener('mouseenter', () => {
                        if (this.autoplay) this.stopAutoplay();
                    });
                    this.cylinder.addEventListener('mouseleave', () => {
                        if (this.autoplay && !this.isDragging) this.startAutoplay();
                    });
                }
                window.addEventListener('resize', () => {
                    this.isSmallScreen = window.innerWidth <= 640;
                    this.updateDimensions();
                    this.createGalleryFaces();
                });
            }
            handleMouseDown(e) {
                this.isDragging = true;
                this.dragStart = e.clientX;
                this.stopAutoplay();
                e.preventDefault();
            }
            handleMouseMove(e) {
                if (!this.isDragging) return;
                const deltaX = e.clientX - this.dragStart;
                this.rotation += deltaX * this.dragFactor;
                this.updateRotation();
                this.dragStart = e.clientX;
            }
            handleMouseUp() {
                if (!this.isDragging) return;
                this.isDragging = false;
                if (this.autoplay) {
                    setTimeout(() => this.startAutoplay(), 100);
                }
            }
            handleTouchStart(e) {
                this.isDragging = true;
                this.dragStart = e.touches[0].clientX;
                this.stopAutoplay();
                e.preventDefault();
            }
            handleTouchMove(e) {
                if (!this.isDragging) return;
                const deltaX = e.touches[0].clientX - this.dragStart;
                this.rotation += deltaX * this.dragFactor;
                this.updateRotation();
                this.dragStart = e.touches[0].clientX;
                e.preventDefault();
            }
            handleTouchEnd() {
                if (!this.isDragging) return;
                this.isDragging = false;
                if (this.autoplay) {
                    setTimeout(() => this.startAutoplay(), 100);
                }
            }
        }

        new HorizontalRollingGallery({
            autoplay: true,
            pauseOnHover: true
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
      

<div id="container"></div>

<div className="absolute inset-0 flex items-center justify-center w-full h-screen min-h-screen pointer-events-none" style={{zIndex: `10`}}>
<div className="relative flex items-center justify-center w-full h-full">
<div className="absolute left-0 top-0 w-[120px] h-full z-20 gradient-left pointer-events-none"></div>
<div className="absolute right-0 top-0 w-[120px] h-full z-20 gradient-right pointer-events-none"></div>
<div className="flex w-full h-[400px] items-center justify-center gallery-container pointer-events-auto">
<div className="gallery-cylinder flex items-center justify-center gallery-spinning" id="galleryCylinder" style={{width: `2400px`, transform: `rotateY(0deg)`}}></div>
</div>
</div>
</div>





    </>
  );
}
