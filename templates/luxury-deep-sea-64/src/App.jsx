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



        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    


        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        varying vec2 vUv;

        // Simple noise function
        float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
            vec2 uv = vUv;
            
            // Refraction/Liquid Effect
            float distortion = sin(uv.y * 10.0 + time * 0.5) * 0.05;
            distortion += sin(uv.x * 8.0 - time * 0.3) * 0.03;
            
            // Mouse interaction
            float distToMouse = distance(uv, mouse);
            float mouseEffect = smoothstep(0.4, 0.0, distToMouse);
            
            vec3 color1 = vec3(0.007, 0.043, 0.101); // African Nightscape
            vec3 color2 = vec3(0.019, 0.019, 0.019); // Absolute Void
            vec3 bio = vec3(0.0, 0.96, 1.0); // Bioluminescence
            
            float bgMix = smoothstep(0.0, 1.0, uv.y + distortion);
            vec3 baseColor = mix(color1, color2, bgMix);
            
            // Add mouse trail "ink"
            baseColor += bio * mouseEffect * 0.2;
            
            // Vignette
            float vignette = 1.0 - smoothstep(0.5, 1.5, distance(uv, vec2(0.5)));
            baseColor *= vignette;

            gl_FragColor = vec4(baseColor, 1.0);
        }
    


        // WebGL Setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl'), antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const uniforms = {
            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            mouse: { value: new THREE.Vector2(0.5, 0.5) }
        };

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Interaction state
        let targetMouseX = 0.5;
        let targetMouseY = 0.5;
        let currentMouseX = 0.5;
        let currentMouseY = 0.5;

        window.addEventListener('mousemove', (e) => {
            targetMouseX = e.clientX / window.innerWidth;
            targetMouseY = 1.0 - (e.clientY / window.innerHeight);
        });

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        });

        // Scroll Tracking
        const gaugeFill = document.getElementById('gaugeFill');
        const depthDisplay = document.getElementById('depthDisplay');
        const parallaxLayers = document.querySelectorAll('.parallax-layer');

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
            const depth = Math.floor(scrollPercent * 10924);
            
            // Update Gauge
            gaugeFill.style.height = `${scrollPercent * 100}%`;
            depthDisplay.innerText = `${depth.toString().padStart(4, '0')}m`;

            // Parallax
            parallaxLayers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed'));
                layer.style.transform = `translateY(${window.scrollY * speed}px)`;
            });
        });

        // Animation Loop
        function animate(t) {
            requestAnimationFrame(animate);
            
            // Smooth mouse movement
            currentMouseX += (targetMouseX - currentMouseX) * 0.05;
            currentMouseY += (targetMouseY - currentMouseY) * 0.05;
            uniforms.mouse.value.set(currentMouseX, currentMouseY);

            uniforms.time.value = t / 1000;
            renderer.render(scene, camera);
        }

        window.onload = () => {
            animate(0);
        };
    
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
      
<div className="noise-overlay"></div>
<canvas id="webgl"></canvas>

<div className="pressure-gauge hidden md:flex">
<span className="monospaced-label">PRESS.</span>
<div className="gauge-bar">
<div className="gauge-fill" id="gaugeFill" style={{height: '0%'}}></div>
</div>
<span className="text-[10px] text-[#00F5FF]" id="depthDisplay">0000m</span>
</div>
<nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-start pointer-events-none">
<div className="pointer-events-auto">
<span className="block text-xs font-light tracking-[0.4em] opacity-50">EST. 1924</span>
<div className="serif text-3xl font-bold">THE HADAL</div>
</div>
<div className="text-right pointer-events-auto hidden md:block">
<div className="monospaced-label">COORDINATES: 11.3493° N, 142.1996° E</div>
<div className="monospaced-label">STATUS: SUBMERGED</div>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex items-center px-8 md:px-24">
<div className="max-w-5xl">
<span className="section-tag pulse">Initiating Descent Protocol</span>
<h1 className="text-6xl md:text-[12rem] leading-[0.85] serif mb-12 italic">The Abyss <br/>is <span className="text-[#00F5FF]">Calling.</span></h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
<div className="glass-panel">
<p className="text-sm leading-relaxed opacity-80">
                            Private Abyssal Exploration for the select few. We navigate the silence of the trenches where history dissolves and the weight of the ocean becomes the only reality.
                        </p>
</div>
<div className="flex items-end justify-end">
<div className="monospaced-label text-right border-r border-cyan-500 pr-4">
                            CRUSH DEPTH: 11,000M<br/>
                            TEMPERATURE: 1°C<br/>
                            VISIBILITY: 0.00%
                        </div>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-32 px-8 md:px-24 relative overflow-hidden">
<div className="flex flex-col md:flex-row gap-24 items-center">
<div className="w-full md:w-1/2 relative">
<div className="absolute -top-10 -left-10 text-[10rem] serif opacity-5 pointer-events-none">01</div>

<div className="w-full aspect-[4/5] bg-[#020B1A] border border-white/10 flex items-center justify-center overflow-hidden">
<div className="w-full h-full film-noir-img bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&amp'}}></div>
</div>
<div className="mt-4 monospaced-label">FIG 1A: ARCHETYPAL SUBMERSIBLE V-01 "WRAITH"</div>
</div>
<div className="w-full md:w-1/2">
<span className="section-tag">Engineering</span>
<h2 className="text-5xl md:text-7xl serif mb-8">Titanium <br/>Solitude</h2>
<p className="text-lg leading-relaxed opacity-70 mb-12">
                        Our vessels are forged from grade 5 titanium and reinforced synthetic diamonds. They are not built for observation; they are built for immersion. Experience the crushing pressure of the deep from within a cocoon of absolute silence.
                    </p>
<button className="px-8 py-4 border border-white/20 hover:border-cyan-400 transition-colors group">
<span className="text-xs tracking-widest flex items-center gap-4">
                            EXPLORE THE FLEET
                            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
</div>
</div>
</section>

<section className="min-h-screen py-32 px-8 md:px-24 bg-gradient-to-b from-transparent to-[#020B1A]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="border-t border-white/10 pt-8">
<h3 className="serif text-2xl mb-4">Bio-Luminescence</h3>
<p className="text-xs opacity-60 leading-relaxed">
                        Artificial light is an intrusion. We utilize bioluminescent simulation to map the abyss without disturbing the ancient inhabitants of the void.
                    </p>
</div>
<div className="border-t border-white/10 pt-8">
<h3 className="serif text-2xl mb-4">Pressure Mapping</h3>
<p className="text-xs opacity-60 leading-relaxed">
                        Real-time ultrasonic transducers provide 3D topography of the seabed, revealing secrets hidden for millions of years under 8 tons of pressure per square inch.
                    </p>
</div>
<div className="border-t border-white/10 pt-8">
<h3 className="serif text-2xl mb-4">The Silence</h3>
<p className="text-xs opacity-60 leading-relaxed">
                        Our acoustic dampening tech ensures that the only sound you hear is the rhythmic pulsing of your own heart. Total isolation is the ultimate luxury.
                    </p>
</div>
</div>

<div className="mt-32 relative h-[600px] flex items-center justify-center">
<div className="absolute w-[300px] md:w-[600px] aspect-square rounded-full border border-cyan-500/10 parallax-layer" data-speed="0.05"></div>
<div className="absolute w-[200px] md:w-[400px] aspect-square rounded-full border border-cyan-500/20 parallax-layer" data-speed="0.1"></div>
<div className="absolute w-[100px] md:w-[200px] aspect-square rounded-full border border-cyan-500/30 parallax-layer pulse" data-speed="0.15"></div>
<div className="text-center z-20">
<h2 className="serif text-7xl italic">Depth defines us.</h2>
</div>
</div>
</section>

<section className="py-48 px-8 text-center bg-[#020B1A]">
<span className="section-tag">Apply for Membership</span>
<h2 className="text-6xl md:text-9xl serif mb-12 italic">Join the Descent</h2>
<div className="flex flex-col md:flex-row justify-center gap-4">
<a className="inline-block bg-[#F9F9F9] text-black px-12 py-5 text-xs font-bold tracking-widest hover:bg-[#00F5FF] transition-colors" href="#">THE VOYAGE</a>
<a className="inline-block border border-white/20 px-12 py-5 text-xs font-bold tracking-widest hover:border-white transition-colors" href="#">THE LEGACY</a>
</div>
<div className="mt-48 flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-30">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg>
</div>
<p className="monospaced-label">© 1924-2024 HADAL EXPLORATION CO. ALL RIGHTS RESERVED.</p>
</div>
</section>
</main>




    </>
  );
}
