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
            // Navbar blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-2');
                    navbar.classList.remove('py-4');
                } else {
                    navbar.classList.add('py-4');
                    navbar.classList.remove('py-2');
                }
            });

            // Intersection Observer for scroll reveal animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            // Complex Bento Grid Hover Effect (Spotlight + Border Trace)
            document.querySelectorAll('.bento-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
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
      

<div className="fixed inset-0 z-[-2] bg-grid-pattern opacity-50 pointer-events-none"></div>
<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-[100%] pointer-events-none z-[-1] animate-pulse-glow"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-[100%] pointer-events-none z-[-1]"></div>


<div className="aura-background-component fixed top-0 w-full h-screen z-[-3]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="w-full h-full min-h-screen bg-white">
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

<nav className="fixed top-4 w-full flex justify-center z-50 px-4 animate-fade-up transition-all duration-300" id="navbar">
<div className="flex bg-black/10 w-full max-w-5xl border-white/10 border rounded-full px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl items-center justify-between">

<div className="flex items-center gap-2 pl-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-7 h-7 rounded-md bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center shadow-inner">
<iconify-icon className="text-white text-base" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight">SystemDojo</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-white transition-colors" href="#frameworks">Frameworks</a>
<a className="hover:text-white transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-white transition-colors" href="#testimonials">Results</a>
</div>

<a className="flex items-center gap-2 px-5 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://discord.gg/cZt9KRePR" target="_blank">
                Join Community
                <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<main className="z-10 flex flex-col min-h-screen md:pt-40 overflow-hidden text-center pt-32 pr-4 pb-20 pl-4 relative items-center justify-start">

<a className="animate-fade-up delay-100 group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="https://discord.gg/cZt9KRePR" target="_blank">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Discord is now open
            <iconify-icon className="text-zinc-500 text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<div className="relative w-full max-w-5xl mx-auto animate-fade-up delay-200">

<div className="hidden lg:flex -left-12 transform text-xs font-medium text-zinc-300 bg-black/40 border border-white/10 rounded-2xl p-3 absolute top-10 backdrop-blur-xl animate-float shadow-2xl gap-3 items-center" style={{'--rot': '-4deg'}}>
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20">
<iconify-icon className="text-blue-400 text-lg" icon="solar:sitemap-linear"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-zinc-100">Zapier / Make</span>
<span className="text-zinc-500 text-[10px]">Workflows Automated</span>
</div>
</div>

<div className="hidden lg:flex -right-12 transform text-xs font-medium text-zinc-300 bg-black/40 border border-white/10 rounded-2xl p-3 absolute bottom-20 backdrop-blur-xl animate-float-delayed shadow-2xl gap-3 items-center" style={{'--rot': '3deg'}}>
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center border border-green-500/20">
<iconify-icon className="text-green-400 text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-zinc-100">Predictable MRR</span>
<span className="text-zinc-500 text-[10px]">+$10k/mo added</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
                System Building Is <br className="hidden md:block"/> <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">A Master Skill.</span>
</h1>
</div>

<p className="animate-fade-up delay-300 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            We partner with operators and creators to turn chaotic workflows into predictable, automated digital-product revenue inside our elite Discord community.
        </p>

<div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20">
<a className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)] hover:scale-[1.02]" href="https://discord.gg/cZt9KRePR" target="_blank">
                Join SystemDojo
                <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-black/50 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-md" href="#how-it-works">
                See How It Works
            </a>
</div>

<div className="w-full max-w-5xl mt-20 relative animate-fade-up delay-500 perspective-1000">

<div className="bg-gradient-to-t from-black via-black/80 to-transparent z-20 absolute -bottom-2 right-0 left-0 h-40 pointer-events-none"></div>
<div className="w-full h-[450px] rounded-t-2xl border border-white/10 bg-[#050505] overflow-hidden flex flex-col shadow-[0_-20px_80px_-20px_rgba(59,130,246,0.15)] relative transform-gpu rotate-x-2 scale-95 origin-bottom transition-transform duration-700 hover:rotate-x-0 hover:scale-100">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40 backdrop-blur-sm">
<div className="flex gap-1.5 w-20">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex items-center gap-2 px-32 py-1.5 rounded-md bg-white/[0.03] text-xs font-medium text-zinc-400 border border-white/5 font-mono tracking-tight">
<iconify-icon className="text-[10px] text-zinc-500" icon="solar:lock-password-linear"></iconify-icon>
                        discord.gg/cZt9KRePR
                    </div>
<div className="w-20"></div> 
</div>

<div className="flex flex-1 overflow-hidden opacity-80">

<div className="w-[70px] border-r border-white/5 bg-[#000000] flex flex-col items-center py-4 gap-3 z-10">
<div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer hover:rounded-[12px] transition-all">
<iconify-icon className="text-white text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="w-8 h-0.5 rounded-full bg-white/10 my-1"></div>
<div className="w-12 h-12 rounded-[24px] bg-white/5 hover:bg-white/10 hover:rounded-[16px] transition-all flex items-center justify-center cursor-pointer text-zinc-500 hover:text-white">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>

<div className="w-60 border-r border-white/5 bg-[#080808] p-4 flex flex-col gap-5 z-10">
<div className="flex items-center justify-between px-1 mb-2">
<span className="text-sm font-medium text-zinc-200 tracking-tight">SystemDojo HQ</span>
<iconify-icon className="text-zinc-500 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-1 mb-1">Start Here</span>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white/5 text-zinc-300 text-xs">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:hashtag-linear"></iconify-icon>
<span>welcome-rules</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-zinc-400 hover:text-zinc-300 text-xs transition-colors">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:hashtag-linear"></iconify-icon>
<span>announcements</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-1 mb-1">Curriculum</span>
<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-zinc-400 hover:text-zinc-300 text-xs transition-colors">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:book-linear"></iconify-icon>
<span>module-1-audit</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-zinc-400 hover:text-zinc-300 text-xs transition-colors">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:book-linear"></iconify-icon>
<span>module-2-build</span>
</div>
</div>
</div>

<div className="flex-1 bg-[#0a0a0a] flex flex-col relative overflow-hidden">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-3 bg-[#0a0a0a]/80 backdrop-blur-md absolute top-0 w-full z-10">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:hashtag-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">welcome-rules</span>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<span className="text-xs text-zinc-500 truncate">Read this before accessing the Dojo.</span>
</div>

<div className="flex-1 p-6 pt-20 flex flex-col gap-6 overflow-hidden">

<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 w-full">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-blue-400">System Bot</span>
<span className="text-[10px] bg-blue-500/20 text-blue-400 px-1 rounded uppercase tracking-wider">Bot</span>
<span className="text-[10px] text-zinc-600">Today at 10:00 AM</span>
</div>
<div className="text-sm text-zinc-300 leading-relaxed">
                                        Welcome to the Dojo. Your goal here is to remove yourself as the bottleneck.<br/>
                                        We focus on 3 things: <strong>Acquisition, Fulfillment, Data</strong>.
                                    </div>

<div className="mt-2 w-full max-w-md bg-black/40 border-l-4 border-blue-500 rounded-r-md p-4 flex flex-col gap-3">
<div className="text-xs font-medium text-white">System Status: Online</div>
<div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-full w-2/3 rounded-full relative">
<div className="absolute inset-0 bg-white/20 animate-[marquee_1s_linear_infinite]" style={{backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem'}}></div>
</div>
</div>
<div className="flex gap-2 mt-1">
<div className="h-6 w-24 bg-white/10 rounded animate-pulse"></div>
<div className="h-6 w-16 bg-blue-500/20 rounded animate-pulse delay-75"></div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group mt-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full opacity-70" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=transparent"/>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-zinc-200">New Member</span>
<span className="text-[10px] text-zinc-600">Today at 10:05 AM</span>
</div>
<div className="h-4 w-3/4 bg-white/5 rounded mt-1"></div>
<div className="h-4 w-1/2 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-4xl mx-auto mt-12 mb-[-4rem] relative z-30 animate-fade-up delay-500 opacity-60">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-4">Members running systems at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-zinc-400 grayscale">

<div className="flex items-center gap-2"><iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">AcmeCorp</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-xl" icon="solar:planet-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">Nexus</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-xl" icon="solar:infinity-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">LoopScale</span></div>
<div className="flex items-center gap-2 hidden sm:flex"><iconify-icon className="text-xl" icon="solar:shield-network-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">Vanguard</span></div>
<div className="flex items-center gap-2 hidden md:flex"><iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">DevSyn</span></div>
</div>
</div>
</main>

<section className="relative z-10 py-32 px-4 w-full max-w-5xl mx-auto" id="how-it-works">
<div className="reveal flex flex-col items-center text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">The Dojo Process</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-xl">How we transform manual labor into automated infrastructure.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="reveal flex flex-col items-center text-center relative z-10 group">
<div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-white/30 transition-colors">
<div className="absolute inset-0 rounded-full border border-white/5 scale-110"></div>
<div className="text-2xl font-light text-zinc-500 group-hover:text-white transition-colors">01</div>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Deconstruct</h3>
<p className="text-xs text-zinc-400 leading-relaxed max-w-xs">We analyze your current workflow, identify manual bottlenecks, and map the data flow logic.</p>
</div>

<div className="reveal delay-100 flex flex-col items-center text-center relative z-10 group">
<div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 transition-colors">
<div className="absolute inset-0 rounded-full border border-blue-500/10 scale-110"></div>
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:programming-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Architect</h3>
<p className="text-xs text-zinc-400 leading-relaxed max-w-xs">Connecting APIs, setting up Webhooks, and building the automation logic inside Zapier/Make.</p>
</div>

<div className="reveal delay-200 flex flex-col items-center text-center relative z-10 group">
<div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-white/30 transition-colors">
<div className="absolute inset-0 rounded-full border border-white/5 scale-110"></div>
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-white transition-colors" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Deploy &amp; Scale</h3>
<p className="text-xs text-zinc-400 leading-relaxed max-w-xs">Push systems live, monitor error handling, and scale inputs without breaking fulfillment.</p>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-4 w-full max-w-6xl mx-auto" id="frameworks">
<div className="reveal flex flex-col items-center text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">Core Frameworks</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-xl">The exact infrastructural blueprints available inside the Dojo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="reveal bento-card md:col-span-2 rounded-[24px] p-8 lg:p-10 flex flex-col justify-between overflow-hidden group min-h-[300px]">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>
<div className="relative z-10 mb-12">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:funnel-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Acquisition Engine</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">Automate top-of-funnel lead generation. We build systems that qualify, segment, and nurture prospects using AI and logical routing without manual touchpoints.</p>
</div>
<div className="relative z-10 flex gap-2">
<span className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-medium text-zinc-400 border border-white/5">Lead Scoring</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-medium text-zinc-400 border border-white/5">CRM Sync</span>
</div>
</div>

<div className="reveal delay-100 bento-card rounded-[24px] p-8 flex flex-col justify-between overflow-hidden group min-h-[300px]">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Fulfillment Logic</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Zero-friction product delivery. Instantly grant access, generate bespoke assets, and trigger onboarding sequences upon Stripe payment success.</p>
</div>
</div>

<div className="reveal delay-200 bento-card rounded-[24px] p-8 flex flex-col justify-between overflow-hidden group min-h-[300px]">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Data Operations</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Centralized single source of truth. Aggregate metrics from disparate tools into unified dashboards to make decisions based on math, not emotion.</p>
</div>
</div>

<div className="reveal delay-300 bento-card md:col-span-2 rounded-[24px] p-8 lg:p-10 flex flex-col justify-between overflow-hidden group min-h-[300px]">
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-700"></div>
<div className="relative z-10 mb-12">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Community Flywheel</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">Turn customers into advocates. Learn how we structure Discord environments that run themselves, increasing LTV through automated engagement triggers, gamification, and role-based access.</p>
</div>
<a className="relative z-10 inline-flex items-center gap-2 text-xs font-medium text-white hover:text-blue-400 transition-colors self-start" href="https://discord.gg/cZt9KRePR" target="_blank">
                    See it in action <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-4 w-full bg-[#050505] border-y border-white/5" id="curriculum">
<div className="max-w-3xl mx-auto">
<div className="reveal flex flex-col mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">The Syllabus</h2>
<p className="text-sm text-zinc-400">Step-by-step video training available inside the Discord.</p>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pb-8">

<div className="reveal relative pl-8 md:pl-12 group">
<div className="absolute w-3 h-3 bg-black border border-white/30 rounded-full -left-[6.5px] top-2 group-hover:bg-white group-hover:border-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="flex flex-col gap-2">
<span className="text-[10px] font-medium text-blue-400 tracking-widest uppercase">Module 01</span>
<h3 className="text-xl font-medium tracking-tight text-white">Foundations &amp; Logic</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-lg mb-4">Understanding data types, Webhooks, APIs, and how software actually communicates. This is the prerequisite to building anything.</p>
<ul className="flex flex-col gap-2 text-xs text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> The API Mindset</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Webhooks vs Polling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Mapping Data Structures</li>
</ul>
</div>
</div>

<div className="reveal delay-100 relative pl-8 md:pl-12 group">
<div className="absolute w-3 h-3 bg-black border border-white/30 rounded-full -left-[6.5px] top-2 group-hover:bg-white group-hover:border-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="flex flex-col gap-2">
<span className="text-[10px] font-medium text-blue-400 tracking-widest uppercase">Module 02</span>
<h3 className="text-xl font-medium tracking-tight text-white">The Automation Engine</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-lg mb-4">Deep dive into Make.com and Zapier. Building routers, iterators, error handlers, and complex multi-step workflows.</p>
<ul className="flex flex-col gap-2 text-xs text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Advanced Make.com Routing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Building Resilient Scenarios</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Custom API Calls without Code</li>
</ul>
</div>
</div>

<div className="reveal delay-200 relative pl-8 md:pl-12 group">
<div className="absolute w-3 h-3 bg-black border border-white/30 rounded-full -left-[6.5px] top-2 group-hover:bg-white group-hover:border-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="flex flex-col gap-2">
<span className="text-[10px] font-medium text-blue-400 tracking-widest uppercase">Module 03</span>
<h3 className="text-xl font-medium tracking-tight text-white">Monetization &amp; Fulfillment</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-lg">Tying payments to actions. Setting up Stripe webhooks to trigger Discord role assignments, email sequences, and CMS updates.</p>
</div>
</div>

<div className="reveal delay-300 relative pl-8 md:pl-12 group">
<div className="absolute w-3 h-3 bg-black border border-white/30 rounded-full -left-[6.5px] top-2 group-hover:bg-white group-hover:border-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="flex flex-col gap-2">
<span className="text-[10px] font-medium text-blue-400 tracking-widest uppercase">Module 04</span>
<h3 className="text-xl font-medium tracking-tight text-white">AI Implementation</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-lg">Integrating OpenAI and Anthropic APIs into your workflows for automated content processing, sentiment analysis, and smart routing.</p>
</div>
</div>
</div>
<div className="reveal delay-400 mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="https://discord.gg/cZt9KRePR" target="_blank">
                    Access Full Curriculum <iconify-icon className="text-xs" icon="solar:lock-unlocked-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-4 w-full max-w-6xl mx-auto" id="testimonials">
<div className="reveal flex flex-col items-center text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">Proof of Concept</h2>
<p className="text-sm text-zinc-400 max-w-xl">Real systems built by members inside the Dojo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal bento-card flex flex-col rounded-2xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" style={{'--mouse-x': '224px', '--mouse-y': '212.34999084472656px'}}>
<div className="flex gap-1 text-blue-500">
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
</div>
<p className="leading-relaxed flex-1 text-sm text-zinc-300">"Before Dojo, I was spending 15 hours a week manually onboarding clients. Now, a Stripe payment triggers a Make scenario that handles Discord invites, Notion workspace creation, and intro emails instantly. It runs while I sleep."</p>
<div className="flex items-center gap-3 mt-4 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">James D.</span>
<span className="text-[10px] text-zinc-500">Agency Owner</span>
</div>
</div>
</div>

<div className="reveal delay-100 bento-card p-6 rounded-2xl flex flex-col gap-4">
<div className="flex gap-1 text-blue-500">
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed flex-1">"The AI routing module alone was worth joining. I built a system that categorizes inbound leads via OpenAI API and routes high-ticket prospects directly to my phone via SMS."</p>
<div className="flex items-center gap-3 mt-4 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">ST</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Sarah T.</span>
<span className="text-[10px] text-zinc-500">Consultant</span>
</div>
</div>
</div>

<div className="reveal delay-200 bento-card p-6 rounded-2xl flex flex-col gap-4">
<div className="flex gap-1 text-blue-500">
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed flex-1">"The community in the Discord is unmatched. When my webhook broke, two members jumped in screen-share and helped me debug the JSON payload within 10 minutes."</p>
<div className="flex items-center gap-3 mt-4 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">MR</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Marcus R.</span>
<span className="text-[10px] text-zinc-500">SaaS Founder</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-4 w-full" id="pricing">
<div className="max-w-4xl mx-auto reveal">
<div className="relative rounded-3xl border border-white/10 bg-[#050505] overflow-hidden p-1">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
<div className="bg-[#0a0a0a] rounded-[22px] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-medium tracking-wide uppercase mb-6 border border-blue-500/20">
                            Community Access
                        </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4 text-white">Enter the Dojo.</h2>
<p className="text-sm text-zinc-400 mb-8 max-w-sm leading-relaxed">Join a curated network of builders, access the full curriculum, and get direct help setting up your automated infrastructure.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white text-base" icon="solar:check-circle-bold"></iconify-icon>
                                Full Video Curriculum Access
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white text-base" icon="solar:check-circle-bold"></iconify-icon>
                                Private Discord Community
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white text-base" icon="solar:check-circle-bold"></iconify-icon>
                                Premade Zapier/Make Templates
                            </li>
</ul>
</div>
<div className="w-full md:w-auto flex flex-col items-center bg-black/40 rounded-2xl border border-white/5 p-8 backdrop-blur-sm">
<div className="text-zinc-400 text-xs font-medium uppercase tracking-widest mb-2">Membership</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tighter text-white">Free</span>
<span className="text-sm text-zinc-500">/for now</span>
</div>
<a className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium rounded-xl hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" href="https://discord.gg/cZt9KRePR" target="_blank">
                            Join via Discord
                            <iconify-icon className="text-base" icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
<p className="text-[10px] text-zinc-500 mt-4 text-center max-w-[200px]">Clicking above will open an invite link to the official server.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-4 w-full max-w-3xl mx-auto border-t border-white/5">
<div className="reveal text-center mb-12">
<h2 className="text-3xl font-medium tracking-tighter mb-4">Common Questions</h2>
</div>
<div className="space-y-3">

<div className="reveal faq-item bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden cursor-pointer group hover:border-white/10 transition-colors">
<div className="px-6 py-4 flex items-center justify-between" onclick="this.parentElement.classList.toggle('active')">
<span className="text-sm font-medium text-zinc-200">Do I need to know how to code?</span>
<iconify-icon className="faq-icon text-zinc-500 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</div>
<div className="faq-content bg-black/20">
<div className="px-6 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        Zero coding experience is required. We focus entirely on "No-Code" architecture using tools like Make.com, Zapier, and native platform integrations. If you understand basic logic (If This, Then That), you can build these systems.
                    </div>
</div>
</div>

<div className="reveal delay-100 faq-item bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden cursor-pointer group hover:border-white/10 transition-colors">
<div className="px-6 py-4 flex items-center justify-between" onclick="this.parentElement.classList.toggle('active')">
<span className="text-sm font-medium text-zinc-200">What software do I need to pay for?</span>
<iconify-icon className="faq-icon text-zinc-500 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</div>
<div className="faq-content bg-black/20">
<div className="px-6 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        You can start building the majority of the curriculum on free tiers. As your systems process more data, you may need a basic paid plan for Make.com (approx $9/mo) or Zapier. Discord and Stripe are free to use.
                    </div>
</div>
</div>

<div className="reveal delay-200 faq-item bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden cursor-pointer group hover:border-white/10 transition-colors">
<div className="px-6 py-4 flex items-center justify-between" onclick="this.parentElement.classList.toggle('active')">
<span className="text-sm font-medium text-zinc-200">How is this different from YouTube tutorials?</span>
<iconify-icon className="faq-icon text-zinc-500 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</div>
<div className="faq-content bg-black/20">
<div className="px-6 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        YouTube gives you isolated tactics. SystemDojo provides a holistic, step-by-step framework specifically designed for info-product and service businesses, backed by a community that helps you debug in real-time when things break.
                    </div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-32 pb-12 px-4 border-t border-white/5 bg-[#000000] flex flex-col items-center overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[100px] rounded-[100%] pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center shadow-inner mb-8 reveal">
<iconify-icon className="text-white text-3xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6 reveal delay-100">Stop doing manual labor.</h2>
<p className="text-sm text-zinc-400 mb-10 reveal delay-200">Build the machine that builds the business.</p>
<a className="reveal delay-300 flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]" href="https://discord.gg/cZt9KRePR" target="_blank">
                Join SystemDojo on Discord
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<div className="w-full flex flex-col md:flex-row items-center justify-between mt-32 pt-8 border-t border-white/5 text-[10px] text-zinc-600 font-medium">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
                    SystemDojo © 2024
                </div>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors flex items-center gap-1" href="https://discord.gg/cZt9KRePR" target="_blank">Discord <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
