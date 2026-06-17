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
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Three.js shader background
        let scene, camera, renderer, geometry, material, mesh;
        let mouse = { x: 0, y: 0 };

        function init() {
            const canvas = document.getElementById('shader-background');
            
            scene = new THREE.Scene();
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            
            renderer = new THREE.WebGLRenderer({ 
                canvas: canvas, 
                alpha: true,
                antialias: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            geometry = new THREE.PlaneGeometry(2, 2);
            
            const vertexShader = `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `;

            const fragmentShader = `
                uniform vec2 u_resolution;
                uniform vec2 u_mouse;
                uniform float u_time;

                mat2 rot(float a) {
                    float s = sin(a);
                    float c = cos(a);
                    return mat2(c, -s, s, c);
                }

                float Star(vec2 uv, float flare) {
                    float d = length(uv);
                    float m = 0.05/d;
                    
                    float rays = max(0., 1. - abs(uv.x * uv.y * 1000.));
                    m += rays * flare;
                    
                    uv *= rot(3.14159/4.);
                    rays = max(0., 1. - abs(uv.x * uv.y * 1000.));
                    m += rays * 0.3 * flare;
                    
                    m *= smoothstep(1., 0.2, d);
                    return m;
                }

                float Hash21(vec2 p) {
                    p = fract(p * vec2(123.34, 456.21));
                    p += dot(p, p + 45.32);
                    return fract(p.x * p.y);
                }

                vec3 StarLayer(vec2 uv, vec3 color) {
                    vec3 col = vec3(0);
                    vec2 gv = fract(uv) - 0.5;
                    vec2 id = floor(uv);
                    
                    for(int y = -1; y <= 1; y++) {
                        for(int x = -1; x <= 1; x++) {
                            vec2 offs = vec2(float(x), float(y));
                            float n = Hash21(id + offs);
                            float size = fract(n * 1345.32);
                            float star = Star(gv - offs - vec2(n, fract(n * 34.)) + 0.5, smoothstep(0.9, 1., size) * 0.6);
                            
                            vec3 starColor = sin(color * fract(n * 2345.2) * 12.283) * 0.5 + 0.5;
                            starColor = starColor * vec3(1., 0.5, 1. + size);
                            star *= sin(u_time * 3. + n * 6.323) * 0.5 + 1.;
                            col += star * size * color;
                        }
                    }
                    return col;
                }

                void main() {
                    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
                    vec2 M = (u_mouse.xy - u_resolution.xy * 0.5) / u_resolution.y;
                    
                    uv *= 2.0;
                    float t = u_time * 0.02;
                    uv *= rot(t);

                    vec3 col = vec3(0);
                    vec3 colors[4] = vec3[4](
                        vec3(0.71, 0.51, 0.08),    // Orange
                        vec3(1.0, 0.45, 0.93),     // Pink
                        vec3(0.0, 0.19, 1.0),      // Blue
                        vec3(0.59, 0.19, 1.0)      // Purple
                    );
                    
                    for(int i = 0; i < 15; i++) {
                        vec3 layerColor = colors[i % 4];
                        float depth = fract(float(i) / 15.0 + t);
                        float scale = mix(20., 0.5, depth);
                        float fade = depth * smoothstep(1., 0.9, depth);
                        col += StarLayer(uv * scale + float(i) * 455.2, layerColor) * fade;
                    }
                    
                    gl_FragColor = vec4(col, 1.0);
                }
            `;

            material = new THREE.ShaderMaterial({
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    u_time: { value: 0 },
                    u_mouse: { value: new THREE.Vector2() },
                    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                }
            });

            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
        }

        function animate() {
            requestAnimationFrame(animate);
            
            material.uniforms.u_time.value += 0.016;
            material.uniforms.u_mouse.value.set(mouse.x, mouse.y);
            
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        }

        function onMouseMove(event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }

        // Event listeners
        window.addEventListener('resize', onWindowResize);
        window.addEventListener('mousemove', onMouseMove);

        // Initialize and start animation
        init();
        animate();

        // Intersection Observer for tip pills animation
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.tip-pill').forEach(pill => {
            observer.observe(pill);
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
      

<canvas id="shader-background"></canvas>

<header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/20 backdrop-blur-xl border-b border-white/10">
<div className="flex items-center justify-between max-w-sm mx-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tight">CG</span>
</div>
<h1 className="text-lg font-semibold tracking-tight">Crypto Galaxy</h1>
</div>
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<main className="relative z-10 pt-20">

<section className="px-4 py-12 max-w-sm mx-auto text-center">
<div className="mb-8" style={{animation: 'fadeInUp 0.8s ease-out'}}>
<h2 className="text-3xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Welcome to the Crypto Universe
                </h2>
<p className="text-white/70 text-base leading-relaxed">
                    Embark on an interstellar journey to discover the secrets of cryptocurrency
                </p>
</div>
<div className="flex justify-center mb-8" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
<div className="relative">
<div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/30 backdrop-blur-sm">
<i className="w-8 h-8 text-purple-400" data-lucide="rocket"></i>
</div>
<div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="play"></i>
</div>
</div>
</div>
</section>

<section className="px-4 space-y-16 pb-20">

<div className="tip-pill max-w-sm mx-auto" style={{animationDelay: '0.4s'}}>
<div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-black/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-orange-500/20">
<i className="w-6 h-6 text-orange-400" data-lucide="bitcoin"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Bitcoin Genesis</h3>
<p className="text-white/60 text-sm">The first cryptocurrency</p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed mb-4">
                        Bitcoin was created by the mysterious Satoshi Nakamoto in 2008. It introduced the concept of decentralized digital currency without the need for banks or governments.
                    </p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-orange-500/30 text-orange-300 text-xs rounded-lg backdrop-blur-sm">Beginner</span>
<span className="px-2 py-1 bg-blue-500/30 text-blue-300 text-xs rounded-lg backdrop-blur-sm">Foundation</span>
</div>
</div>
</div>

<div className="tip-pill max-w-sm mx-auto" style={{animationDelay: '0.6s'}}>
<div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-500/40 transition-all duration-300 hover:bg-black/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
<i className="w-6 h-6 text-blue-400" data-lucide="blocks"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Blockchain Magic</h3>
<p className="text-white/60 text-sm">Immutable ledger technology</p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed mb-4">
                        Think of blockchain as a digital ledger that's copied across thousands of computers. Once data is recorded, it becomes nearly impossible to change or hack.
                    </p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-blue-500/30 text-blue-300 text-xs rounded-lg backdrop-blur-sm">Intermediate</span>
<span className="px-2 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-lg backdrop-blur-sm">Technical</span>
</div>
</div>
</div>

<div className="tip-pill max-w-sm mx-auto" style={{animationDelay: '0.8s'}}>
<div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-500/40 transition-all duration-300 hover:bg-black/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-green-500/20">
<i className="w-6 h-6 text-green-400" data-lucide="wallet"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Digital Wallets</h3>
<p className="text-white/60 text-sm">Your crypto vault</p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed mb-4">
                        Crypto wallets don't actually store your coins. They store the private keys that prove ownership of your digital assets on the blockchain.
                    </p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-green-500/30 text-green-300 text-xs rounded-lg backdrop-blur-sm">Essential</span>
<span className="px-2 py-1 bg-yellow-500/30 text-yellow-300 text-xs rounded-lg backdrop-blur-sm">Security</span>
</div>
</div>
</div>

<div className="tip-pill max-w-sm mx-auto" style={{animationDelay: '1s'}}>
<div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-black/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
<i className="w-6 h-6 text-purple-400" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">DeFi Revolution</h3>
<p className="text-white/60 text-sm">Decentralized finance</p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed mb-4">
                        DeFi recreates traditional financial systems (lending, borrowing, trading) using smart contracts, eliminating the need for intermediaries like banks.
                    </p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-lg backdrop-blur-sm">Advanced</span>
<span className="px-2 py-1 bg-pink-500/30 text-pink-300 text-xs rounded-lg backdrop-blur-sm">Innovation</span>
</div>
</div>
</div>

<div className="tip-pill max-w-sm mx-auto" style={{animationDelay: '1.2s'}}>
<div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-pink-500/40 transition-all duration-300 hover:bg-black/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-pink-500/20">
<i className="w-6 h-6 text-pink-400" data-lucide="image"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">NFT Universe</h3>
<p className="text-white/60 text-sm">Non-fungible tokens</p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed mb-4">
                        NFTs are unique digital certificates that prove ownership of digital assets like art, music, or collectibles. Each NFT is one-of-a-kind and cannot be replicated.
                    </p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-pink-500/30 text-pink-300 text-xs rounded-lg backdrop-blur-sm">Creative</span>
<span className="px-2 py-1 bg-indigo-500/30 text-indigo-300 text-xs rounded-lg backdrop-blur-sm">Digital Art</span>
</div>
</div>
</div>

<div className="max-w-sm mx-auto pt-8">
<div className="bg-black/40 rounded-full p-4 backdrop-blur-xl border border-white/20">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-white/70">Journey Progress</span>
<span className="text-sm font-medium text-purple-400">100%</span>
</div>
<div className="w-full bg-white/20 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-xl border-t border-white/20 p-4 z-50">
<div className="max-w-sm mx-auto flex items-center justify-around">
<button className="flex flex-col items-center gap-1 p-2 text-purple-400">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="book-open"></i>
<span className="text-xs">Learn</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="trophy"></i>
<span className="text-xs">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-xs">Profile</span>
</button>
</div>
</nav>


    </>
  );
}
