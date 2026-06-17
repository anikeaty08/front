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
<div className="blob-container" id="blobContainer"><canvas data-engine="three.js r160" height="917" style={{display: 'block', width: '1536px', height: '734px'}} width="1920"></canvas></div>


</div></div>

<div className="fixed inset-0 bg-noise opacity-[0.15] pointer-events-none z-0"></div>

<nav className="relative z-50 w-full max-w-[1400px] mx-auto px-6 py-8 md:px-12 flex items-center justify-between">
<div className="text-[#D65A45] hover:opacity-80 transition-opacity cursor-pointer">
<svg fill="none" height="24" viewbox="0 0 42 24" width="42" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" height="16" rx="5" width="10" x="0" y="4"></rect>
<rect fill="currentColor" height="24" rx="7" width="14" x="14" y="0"></rect>
<rect fill="currentColor" height="16" rx="5" width="10" x="32" y="4"></rect>
</svg>
</div>
<div className="hidden md:flex items-center gap-8 text-[#594239] font-medium text-sm tracking-tight">
<a className="hover:text-[#D65A45] transition-colors" href="#">Technology</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Materials</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Reviews</a>
</div>
<div className="flex items-center gap-2 text-[#D65A45] font-medium text-[11px] tracking-[0.25em] uppercase cursor-pointer hover:opacity-70 transition-opacity">
<span className="opacity-60 text-sm">/</span> Menu
        </div>
</nav>

<header className="md:mt-12 flex flex-col w-full max-w-[1400px] z-10 mt-6 mr-auto mb-32 ml-auto pr-4 pl-4 relative items-center">

<h1 className="text-[3.25rem] md:text-[5.5rem] leading-[0.95] tracking-tight text-center font-medium text-[#594239] animate-fade-up">
            The way it’s<br/>
            meant to sound
        </h1>
<p className="mt-8 text-center text-[#7A6C65] max-w-[90%] md:max-w-lg text-[0.95rem] md:text-[1.05rem] leading-[1.6] font-normal tracking-normal animate-fade-up" style={{animationDelay: '0.1s'}}>
            We built Luma around a simple idea: let sound be itself.<br className="hidden md:block"/>
            No artificial boosts, no distortion—just clarity.
        </p>
<div className="mt-10 flex items-center gap-3 animate-fade-up" style={{animationDelay: '0.2s'}}>
<button className="group bg-[#2E2926] text-white pl-7 pr-7 py-[14px] rounded-full font-medium text-[15px] tracking-wide shadow-xl hover:bg-[#1a1816] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                Pre-order now
            </button>
<button className="group bg-[#D65A45] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#c04e3b] hover:-translate-y-0.5 transition-all duration-300 ease-out">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

</header>

<section className="relative z-20 py-24 md:py-32 bg-[#F3EFEE] border-t border-[#594239]/5">
<div className="max-w-4xl mx-auto px-6 relative">
<div className="text-center mb-16 space-y-2">
<h2 className="text-4xl md:text-5xl font-medium text-[#594239] tracking-tight leading-tight">
                    Most speakers lie to you.
                </h2>
<h2 className="text-4xl md:text-5xl font-medium text-[#594239]/30 tracking-tight leading-tight">
                    We tell the truth.
                </h2>
</div>
<p className="text-[#7A6C65] text-center text-lg mb-16 font-normal max-w-2xl mx-auto leading-relaxed">
                You’ve gotten used to artificial bass boosts and muddy mids. When you hear music through Luma, you aren't just hearing sound—you're hearing the space between the notes.
            </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-[#594239]/5 shadow-sm hover:shadow-md transition-all">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#F3EFEE] flex items-center justify-center text-[#D65A45]">
<iconify-icon icon="solar:soundwave-linear" width="20"></iconify-icon>
</div>
<span className="text-[#594239] font-medium text-sm">No digital compression</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-[#594239]/5 shadow-sm hover:shadow-md transition-all">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#F3EFEE] flex items-center justify-center text-[#D65A45]">
<iconify-icon icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<span className="text-[#594239] font-medium text-sm">Perfectly balanced EQ</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-[#594239]/5 shadow-sm hover:shadow-md transition-all">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#F3EFEE] flex items-center justify-center text-[#D65A45]">
<iconify-icon icon="solar:bluetooth-square-linear" width="20"></iconify-icon>
</div>
<span className="text-[#594239] font-medium text-sm">Zero-latency wireless</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-[#594239]/5 shadow-sm hover:shadow-md transition-all">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#F3EFEE] flex items-center justify-center text-[#D65A45]">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<span className="text-[#594239] font-medium text-sm">Sustainable materials</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<p className="text-xs font-medium tracking-[0.2em] text-[#D65A45] uppercase mb-4">Specifications</p>
<h2 className="text-3xl md:text-4xl font-medium text-[#594239] tracking-tight">
                    Engineered for silence and sound
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#594239]/10 border border-[#594239]/10 rounded-lg overflow-hidden">

<div className="bg-[#F9F7F6] p-10 hover:bg-white transition-colors group">
<div className="text-[#D65A45] mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:record-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-[#594239] mb-3">Active Calibration</h3>
<p className="text-[#7A6C65] text-sm leading-relaxed">
                        The speaker analyzes its environment 1,000 times per second, adjusting output to eliminate standing waves and room modes.
                    </p>
</div>

<div className="bg-[#F9F7F6] p-10 hover:bg-white transition-colors group">
<div className="text-[#D65A45] mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-[#594239] mb-3">Dual-Driver Array</h3>
<p className="text-[#7A6C65] text-sm leading-relaxed">
                        A dedicated silk-dome tweeter handles highs with airy precision, while the woven glass-fiber woofer delivers punchy, tight bass.
                    </p>
</div>

<div className="bg-[#F9F7F6] p-10 hover:bg-white transition-colors group">
<div className="text-[#D65A45] mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-connection-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-[#594239] mb-3">Multi-Room Sync</h3>
<p className="text-[#7A6C65] text-sm leading-relaxed">
                        Connect up to 8 Luma units effortlessly. Our proprietary mesh network ensures samples are aligned to the microsecond.
                    </p>
</div>
</div>
</div>
</section>


<section className="py-24 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D65A45] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="mb-16 text-center">
<p className="text-xs uppercase text-[#D65A45] tracking-[0.2em] mb-3 font-medium">
                    The Listeners
                </p>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#594239]">
                    Heard in the wild
                </h2>
</div>
<div className="relative flex items-center justify-center py-10" style={{minHeight: '450px'}}>
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>

<div className="glass-panel hidden md:flex" style={{position: 'relative', width: '340px', height: '340px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -40px', transform: 'rotate(-10deg) scale(0.9)', zIndex: '1'}}>
<div className="absolute inset-4 rounded-xl bg-white text-[#594239] shadow-xl ring-1 ring-[#594239]/5 overflow-hidden">
<div className="p-6 h-full flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#F3EFEE] mb-4 text-[#D65A45]">
<iconify-icon icon="solar:quote-up-square-linear" width="20"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-[#7A6C65] mb-4">
                                        I've had speakers that cost three times this price, but nothing has this level of transparency. It disappears in the room.
                                    </p>
</div>
<div className="pt-3 border-t border-[#F3EFEE] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#2E2926] text-white flex items-center justify-center text-xs">AR</div>
<div>
<div className="text-xs font-medium text-[#594239]">Alex Rivera</div>
<div className="text-[10px] text-[#9CA3AF]">Music Producer</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#D65A45]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel" style={{position: 'relative', width: '340px', height: '340px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -40px', transform: 'rotate(0deg) scale(1.05)', zIndex: '10'}}>
<div className="absolute inset-4 rounded-xl bg-white text-[#594239] shadow-2xl ring-1 ring-[#594239]/5 overflow-hidden">
<div className="p-6 h-full flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#F3EFEE] mb-4 text-[#D65A45]">
<iconify-icon icon="solar:quote-up-square-linear" width="20"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-[#594239] mb-4 font-medium">
                                        The minimalist design caught my eye, but the sound kept me. The separation of instruments is unlike anything I've heard wirelessly.
                                    </p>
</div>
<div className="pt-3 border-t border-[#F3EFEE] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D65A45] text-white flex items-center justify-center text-xs">NP</div>
<div>
<div className="text-xs font-medium text-[#594239]">Nina Patel</div>
<div className="text-[10px] text-[#9CA3AF]">Interior Architect</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#D65A45]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel hidden md:flex" style={{position: 'relative', width: '340px', height: '340px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -40px', transform: 'rotate(10deg) scale(0.9)', zIndex: '1'}}>
<div className="absolute inset-4 rounded-xl bg-white text-[#594239] shadow-xl ring-1 ring-[#594239]/5 overflow-hidden">
<div className="p-6 h-full flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#F3EFEE] mb-4 text-[#D65A45]">
<iconify-icon icon="solar:quote-up-square-linear" width="20"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-[#7A6C65] mb-4">
                                        Finally, a smart speaker that respects privacy and prioritizes audio fidelity over gimmicks. Setup was instant.
                                    </p>
</div>
<div className="pt-3 border-t border-[#F3EFEE] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#594239] text-white flex items-center justify-center text-xs">MW</div>
<div>
<div className="text-xs font-medium text-[#594239]">Marcus Webb</div>
<div className="text-[10px] text-[#9CA3AF]">Tech Reviewer</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#D65A45]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2E2926] text-[#EBE0DC] relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-[0.05]"></div>

<div className="absolute inset-0 flex justify-center w-full h-full opacity-10 pointer-events-none">
<div className="w-full max-w-[1400px] flex justify-between px-10">
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white"></div>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-white">
                Hear it to believe it.
            </h2>
<p className="text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto font-light">
                30-day home trial. Free shipping. Lifetime support.
                Experience the difference of Luma Audio in your own space.
            </p>
<div className="inline-flex flex-col items-center gap-4">
<button className="bg-[#D65A45] text-white px-10 py-4 rounded-full font-medium text-sm tracking-wide shadow-2xl hover:bg-[#c04e3b] hover:-translate-y-1 transition-all duration-300 ease-out flex items-center gap-2">
                    Order Luma One - $399
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<span className="text-xs text-[#9CA3AF] tracking-wide uppercase">Ships in 2-3 business days</span>
</div>
</div>
</section>

<footer className="bg-[#F3EFEE] pt-16 pb-8 border-t border-[#594239]/10">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
<div>
<div className="text-[#D65A45] mb-4">
<svg fill="none" height="18" viewbox="0 0 42 24" width="32">
<rect fill="currentColor" height="16" rx="5" width="10" x="0" y="4"></rect>
<rect fill="currentColor" height="24" rx="7" width="14" x="14" y="0"></rect>
<rect fill="currentColor" height="16" rx="5" width="10" x="32" y="4"></rect>
</svg>
</div>
<p className="text-xs text-[#7A6C65] max-w-xs">
                    Designed in Stockholm.<br/>Assembled with care.
                </p>
</div>
<div className="flex gap-12 text-sm text-[#594239]">
<div className="flex flex-col gap-3">
<span className="font-semibold mb-1 opacity-50 text-[10px] uppercase tracking-widest">Product</span>
<a className="hover:text-[#D65A45] transition-colors" href="#">Luma One</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Luma Pro</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Accessories</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold mb-1 opacity-50 text-[10px] uppercase tracking-widest">Company</span>
<a className="hover:text-[#D65A45] transition-colors" href="#">Story</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Contact</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold mb-1 opacity-50 text-[10px] uppercase tracking-widest">Social</span>
<a className="hover:text-[#D65A45] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#D65A45] transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mt-16 flex justify-between items-end border-t border-[#594239]/5 pt-8">
<span className="text-[10px] text-[#7A6C65] uppercase tracking-widest">© 2024 Luma Audio</span>
</div>
</footer>

    </>
  );
}
