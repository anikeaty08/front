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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


{
      "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
      }
    }

import * as THREE from 'three';
    
    const vertexShader = `
      uniform float u_intensity;
      uniform float u_time;
      
      varying vec2 vUv;
      varying float vDisplacement;
      
      vec4 permute(vec4 x) {
        return mod(((x*34.0)+1.0)*x, 289.0);
      }
      
      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
      
      vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }
      
      float cnoise(vec3 P) {
        vec3 Pi0 = floor(P);
        vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
        
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        
        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        
        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
        
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
        
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
      }
      
      void main() {
        vUv = uv;
        vDisplacement = cnoise(position + vec3(2.0 * u_time));
        vec3 newPosition = position + normal * (u_intensity * vDisplacement);
        vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
      }
    `;
    
    const fragmentShader = `
      uniform float u_intensity;
      uniform float u_time;
      uniform vec3 u_color;
      
      varying vec2 vUv;
      varying float vDisplacement;
      
      void main() {
        float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
        vec3 color = mix(u_color, vec3(1.0, 1.0, 1.0), distort);
        gl_FragColor = vec4(color, 1.0);
      }
    `;
    
    const container = document.getElementById('blobContainer');
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Configuration
    const config = {
      blobColor: '#000000',
      backgroundColor: '#ffffff',
      scale: 1.5,
      speed: 0.4,
      intensity: 0.5,
      followMouse: true,
      cameraZ: 8
    };
    
    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = config.cameraZ;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(config.backgroundColor, 1);
    container.appendChild(renderer.domElement);
    
    // Uniforms
    const uniforms = {
      u_time: { value: 0 },
      u_intensity: { value: config.intensity },
      u_color: { value: new THREE.Color(config.blobColor) }
    };
    
    // Geometry & Material
    const geometry = new THREE.IcosahedronGeometry(2, 20);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms
    });
    
    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(config.scale);
    scene.add(mesh);
    
    // Mouse tracking
    const mouse = new THREE.Vector2(0, 0);
    const targetPos = new THREE.Vector3(0, 0, 0);
    const currentPos = new THREE.Vector3(0, 0, 0);
    
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    // Clock
    const clock = new THREE.Clock();
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      const elapsed = clock.getElapsedTime();
      uniforms.u_time.value = config.speed * elapsed;
      
      if (config.followMouse) {
        targetPos.set(mouse.x * 2, mouse.y * 2, 0);
        currentPos.lerp(targetPos, 0.1);
        mesh.position.copy(currentPos);
      }
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    
    window.addEventListener('resize', handleResize);


        document.addEventListener("DOMContentLoaded", () => {
            // Trigger load animations
            setTimeout(() => {
                document.querySelectorAll('.reveal-on-load').forEach(el => {
                    el.classList.add('active');
                });
                const nav = document.querySelector('.nav-reveal');
                if(nav) nav.classList.add('active');
            }, 100);

            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Unobserve after animating so it stays visible
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .reveal-scale, .line-draw-x:not(.reveal-on-load)').forEach(el => {
                observer.observe(el);
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="w-full h-full min-h-screen bg-white">
<style>.blob-container {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }
    .blob-canvas {
      display: block;
      width: 100%;
      height: 100%;
    }</style>
<div className="blob-container" id="blobContainer"></div>


</div></div>

<div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-[-1] animate-ambient"></div>

<nav className="nav-reveal fixed -translate-x-1/2 flex active bg-slate-950/60 w-[95%] max-w-5xl z-50 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 top-6 left-1/2 backdrop-blur-xl items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="group-hover:text-slate-300 transition-colors text-sm font-medium tracking-tight">Brutal Glowup</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#system">System</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<a className="text-sm font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all duration-300" href="#apply">
            Apply Now
        </a>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden text-center pt-32 pr-4 pb-20 pl-4 relative items-center justify-center">

<div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent to-white/20 hidden lg:block line-draw-x reveal-on-load active"></div>
<div className="absolute top-1/3 right-1/4 w-48 h-[1px] bg-gradient-to-l from-transparent to-blue-500/20 hidden lg:block line-draw-x reveal-on-load delay-300 active"></div>
<div className="reveal reveal-on-load delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 hover:bg-white/5 transition-colors cursor-default active">
<iconify-icon className="text-slate-400" icon="solar:stars-linear" width="16"></iconify-icon>
<span className="text-sm font-light text-slate-300">Upgrade your physical baseline</span>
<iconify-icon className="text-slate-500 ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
<h1 className="reveal reveal-on-load delay-200 md:text-7xl lg:text-8xl leading-[1.1] active text-5xl font-semibold text-white tracking-tight max-w-5xl mb-8">
            Become the version of yourself people <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">notice instantly.</span>
</h1>
<p className="reveal reveal-on-load delay-300 text-lg md:text-xl font-light text-slate-400 max-w-2xl mb-12 active">
            A structured, high-performance system to upgrade your face, body, and presence — with precision and direct guidance.
        </p>
<div className="reveal reveal-on-load delay-400 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto active">
<a className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-lg font-medium hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2" href="#apply">
                Apply for Transformation
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 bg-transparent text-white text-lg font-light hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#system">
                See how it works
            </a>
</div>

<div className="reveal reveal-on-load delay-500 absolute bottom-12 flex flex-col items-center gap-2 opacity-50 animate-float-subtle active">
<span className="text-xs font-light text-slate-400 uppercase tracking-widest">Scroll</span>
<div className="w-[1px] h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-8 overflow-hidden">
<div className="reveal max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-700 active">
<p className="text-sm font-light uppercase tracking-widest text-slate-400">Trusted by 4,000+ transformations worldwide</p>
<div className="flex items-center gap-8">

<iconify-icon className="text-slate-500 hover:text-white transition-colors duration-300" icon="solar:global-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-500 hover:text-white transition-colors duration-300" icon="solar:shield-check-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-500 hover:text-white transition-colors duration-300" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none animate-ambient"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal active">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-8">
                    You know you're not at your full potential.
                </h2>
<div className="space-y-6 text-lg font-light text-slate-400">
<p className="flex gap-4 group">
<iconify-icon className="shrink-0 mt-1 text-slate-600 group-hover:text-blue-400 transition-colors duration-500" icon="solar:minus-circle-linear" width="24"></iconify-icon>
<span>You don't look how you could. Your raw materials are underutilized.</span>
</p>
<p className="flex gap-4 group">
<iconify-icon className="shrink-0 mt-1 text-slate-600 group-hover:text-blue-400 transition-colors duration-500" icon="solar:minus-circle-linear" width="24"></iconify-icon>
<span>Your presence doesn't match your ambition. You walk into a room and blend in.</span>
</p>
<p className="flex gap-4 group">
<iconify-icon className="shrink-0 mt-1 text-slate-600 group-hover:text-blue-400 transition-colors duration-500" icon="solar:minus-circle-linear" width="24"></iconify-icon>
<span>You rely on random advice from the internet that doesn't compound into real change.</span>
</p>
</div>
</div>
<div className="reveal reveal-scale delay-200 p-10 rounded-3xl border border-white/5 bg-slate-900/30 backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-colors duration-700 active">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full group-hover:bg-red-500/10 transition-colors duration-700"></div>
<p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed relative z-10">
                    The result?<br/><br/>
                    You stay stuck in a version of yourself that is fundamentally below your standard. Time passes, and your physical identity remains stagnant.
                </p>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-gradient-to-b from-slate-950 to-[#020408]" id="system">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 mb-8 hover:scale-110 hover:bg-white/10 transition-all duration-500 active">
<iconify-icon className="text-slate-300" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="reveal delay-100 text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 active">
                This is not motivation.<br/>It's a system.
            </h2>
<div className="reveal delay-200 space-y-8 text-lg md:text-xl font-light text-slate-400 active">
<p>
                    Wangflow Glow is a 1:1 transformation system designed to systematically upgrade how you look and how you're perceived.
                </p>
<p>
                    No guessing. No wasted time. No scattered effort.
                </p>
<p className="text-2xl font-medium text-slate-200">
                    Just clear execution.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="process">
<div className="reveal mb-16 md:mb-24 active">
<h2 className="text-sm font-light uppercase tracking-widest text-slate-500 mb-4">The Methodology</h2>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">How the system operates.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block -translate-y-1/2 z-0 line-draw-x active"></div>

<div className="reveal delay-100 relative z-10 p-8 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 group active">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-slate-300 mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-500">1</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Audit</h4>
<p className="text-lg font-light text-slate-400">We analyze your current face, body, and presence in granular detail.</p>
</div>

<div className="reveal delay-200 relative z-10 p-8 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 group lg:mt-8 active">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-slate-300 mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-500">2</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Strategy</h4>
<p className="text-lg font-light text-slate-400">You receive a personalized, high-leverage Glow-Up Blueprint.</p>
</div>

<div className="reveal delay-300 relative z-10 p-8 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 group active">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-slate-300 mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-500">3</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Execution</h4>
<p className="text-lg font-light text-slate-400">Step-by-step implementation with direct 1:1 guidance.</p>
</div>

<div className="reveal delay-400 relative z-10 p-8 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 group lg:mt-8 active">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-slate-300 mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-500">4</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Optimization</h4>
<p className="text-lg font-light text-slate-400">Continuous refinement until the results are undeniable.</p>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">

<div className="bg-[#030712] p-10 flex flex-col items-start hover:bg-white/[0.03] transition-all duration-500 group">
<iconify-icon className="text-slate-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500" icon="solar:face-scan-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Face</h3>
<p className="text-lg font-light text-slate-400">Skin protocol, grooming mechanics, and facial structure optimization.</p>
</div>

<div className="bg-[#030712] p-10 flex flex-col items-start hover:bg-white/[0.03] transition-all duration-500 group">
<iconify-icon className="text-slate-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Body</h3>
<p className="text-lg font-light text-slate-400">Development of a lean, aesthetic, and functional physique.</p>
</div>

<div className="bg-[#030712] p-10 flex flex-col items-start hover:bg-white/[0.03] transition-all duration-500 group">
<iconify-icon className="text-slate-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500" icon="solar:t-shirt-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Style</h3>
<p className="text-lg font-light text-slate-400">Curating a clean, high-status appearance tailored to your proportions.</p>
</div>

<div className="bg-[#030712] p-10 flex flex-col items-start hover:bg-white/[0.03] transition-all duration-500 group">
<iconify-icon className="text-slate-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500" icon="solar:eye-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Presence</h3>
<p className="text-lg font-light text-slate-400">Mastery of posture, energy, and how you are fundamentally perceived.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-6xl mx-auto" id="results">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Visible change.<br/>Measurable difference.</h2>
<p className="text-lg font-light text-slate-400 max-w-lg">Our clients don't guess. They execute — and it shows.</p>
</div>
<a className="reveal delay-200 hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 group" href="#apply">
                View all case studies 
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal-scale delay-100 group relative rounded-2xl border border-white/10 overflow-hidden bg-slate-900 aspect-[4/3] cursor-pointer shadow-2xl shadow-transparent hover:shadow-white/5 transition-all duration-700 hover:-translate-y-2">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-800 opacity-80 group-hover:scale-105 transition-transform duration-1000"></div>
<div className="flex transition-colors duration-700 group-hover:text-slate-400 text-lg font-light text-slate-600 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                    [ Real Transformation Asset ]
                </div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
<div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-wider">Before</div>
<div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white uppercase tracking-wider">After (12 Weeks)</div>
</div>
</div>

<div className="reveal-scale delay-300 group relative rounded-2xl border border-white/10 overflow-hidden bg-slate-900 aspect-[4/3] cursor-pointer shadow-2xl shadow-transparent hover:shadow-white/5 transition-all duration-700 hover:-translate-y-2">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-80 group-hover:scale-105 transition-transform duration-1000"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-600 font-light text-lg transition-colors duration-700 group-hover:text-slate-400">
                    [ Real Transformation Asset ]
                </div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
<div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-wider">Before</div>
<div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white uppercase tracking-wider">After (16 Weeks)</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none animate-ambient"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16">Built on real results.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-300 mb-6 leading-relaxed">"The level of detail is insane. It's not generic advice; it's a specific blueprint for my structure. The change in how I'm treated professionally is night and day."</p>
<div className="text-sm">
<span className="block font-medium text-white">James T.</span>
<span className="block font-light text-slate-500">Entrepreneur</span>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-slate-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-300 mb-6 leading-relaxed">"I wasted years on random routines. This system stripped away the noise and gave me exactly what I needed to do. The execution was straightforward, the results were inevitable."</p>
<div className="text-sm">
<span className="block font-medium text-white">Marcus R.</span>
<span className="block font-light text-slate-500">Consultant</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="apply">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="reveal-scale p-10 md:p-12 rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900 to-[#030712] relative overflow-hidden shadow-2xl shadow-blue-900/10 group hover:shadow-blue-500/10 transition-shadow duration-700">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<h2 className="text-sm font-light uppercase tracking-widest text-blue-400 mb-4">The Program</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">1:1 Transformation System</h3>
<ul className="space-y-5 mb-12">
<li className="flex items-center gap-4 text-lg font-light text-slate-300 group/item">
<iconify-icon className="text-slate-400 shrink-0 group-hover/item:text-blue-400 transition-colors" icon="solar:check-read-linear" width="20"></iconify-icon>
                        Personal Glow-Up Blueprint
                    </li>
<li className="flex items-center gap-4 text-lg font-light text-slate-300 group/item">
<iconify-icon className="text-slate-400 shrink-0 group-hover/item:text-blue-400 transition-colors" icon="solar:check-read-linear" width="20"></iconify-icon>
                        Face + Body + Presence optimization plan
                    </li>
<li className="flex items-center gap-4 text-lg font-light text-slate-300 group/item">
<iconify-icon className="text-slate-400 shrink-0 group-hover/item:text-blue-400 transition-colors" icon="solar:check-read-linear" width="20"></iconify-icon>
                        Direct 1:1 guidance &amp; communication
                    </li>
<li className="flex items-center gap-4 text-lg font-light text-slate-300 group/item">
<iconify-icon className="text-slate-400 shrink-0 group-hover/item:text-blue-400 transition-colors" icon="solar:check-read-linear" width="20"></iconify-icon>
                        Weekly adjustments and tracking
                    </li>
<li className="flex items-center gap-4 text-lg font-light text-slate-300 group/item">
<iconify-icon className="text-slate-400 shrink-0 group-hover/item:text-blue-400 transition-colors" icon="solar:check-read-linear" width="20"></iconify-icon>
                        Full system and resource access
                    </li>
</ul>
<p className="text-sm font-light text-slate-500 mb-8 border-t border-white/10 pt-8">
                    This is for individuals serious about becoming their highest-level version. Availability is strictly limited to ensure quality.
                </p>
<button className="w-full py-4 rounded-xl bg-white text-black text-lg font-medium hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    Submit Application 
                    <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex flex-col justify-center h-full pt-8 lg:pt-0">
<h3 className="reveal delay-100 text-3xl font-semibold tracking-tight text-white mb-10">This is not for everyone.</h3>
<div className="space-y-12">

<div className="reveal delay-200">
<h4 className="text-sm font-light uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon> This is for you if:
                        </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg font-light text-slate-300">
<span className="text-slate-600 mt-1">•</span>
                                You're highly serious about improving your appearance and presence.
                            </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-300">
<span className="text-slate-600 mt-1">•</span>
                                You value structured systems over random guessing.
                            </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-300">
<span className="text-slate-600 mt-1">•</span>
                                You are ready to execute the work required.
                            </li>
</ul>
</div>

<div className="reveal delay-300">
<h4 className="text-sm font-light uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="solar:close-circle-linear" width="16"></iconify-icon> This is NOT for you if:
                        </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg font-light text-slate-500 opacity-80">
<span className="text-slate-700 mt-1">•</span>
                                You are looking for overnight hacks or magic pills.
                            </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-500 opacity-80">
<span className="text-slate-700 mt-1">•</span>
                                You avoid discipline and routine.
                            </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-500 opacity-80">
<span className="text-slate-700 mt-1">•</span>
                                You're not genuinely ready to change your identity.
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#010204]">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                You already know where you stand.
            </h2>
<p className="reveal delay-100 text-xl md:text-2xl font-light text-slate-400 mb-12">
                The only question is whether you change it.
            </p>
<a className="reveal delay-200 inline-flex px-10 py-5 rounded-full bg-white text-black text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-white/20" href="#apply">
                Apply Now
            </a>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#030712]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 reveal delay-100">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full group-hover:bg-white transition-colors"></div>
</div>
<span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">Wangflow Glow</span>
</div>
<div className="flex gap-8 text-sm font-light text-slate-500">
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<p className="text-xs font-light text-slate-600">
                © 2024 Wangflow Glow. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
