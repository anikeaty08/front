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
    
    const config = {
      blobColor: '#000000',
      backgroundColor: '#ffffff',
      scale: 1.5,
      speed: 0.4,
      intensity: 0.5,
      followMouse: true,
      cameraZ: 8
    };
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = config.cameraZ;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(config.backgroundColor, 1);
    container.appendChild(renderer.domElement);
    
    const uniforms = {
      u_time: { value: 0 },
      u_intensity: { value: config.intensity },
      u_color: { value: new THREE.Color(config.blobColor) }
    };
    
    const geometry = new THREE.IcosahedronGeometry(2, 20);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(config.scale);
    scene.add(mesh);
    
    const mouse = new THREE.Vector2(0, 0);
    const targetPos = new THREE.Vector3(0, 0, 0);
    const currentPos = new THREE.Vector3(0, 0, 0);
    
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    const clock = new THREE.Clock();
    
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
    
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    
    window.addEventListener('resize', handleResize);


    (() => {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const formatNumber = (value) => {
        const isInt = Number.isInteger(value);
        if (!isInt) return value.toFixed(1);
        return value >= 1000 ? value.toLocaleString() : String(value);
      };

      const animate = (el) => {
        const targetRaw = el.getAttribute('data-count') || '0';
        const suffix = el.getAttribute('data-suffix') || '';
        const target = Number(targetRaw);
        const isFloat = !Number.isInteger(target);
        const duration = 1500;

        if (prefersReduced) {
          el.textContent = (isFloat ? target.toFixed(1) : formatNumber(target)) + suffix;
          return;
        }

        const start = performance.now();
        const from = 0;

        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4); // Quartic ease out
          const current = from + (target - from) * eased;

          const display = isFloat ? current.toFixed(1) : formatNumber(Math.round(current));
          el.textContent = display + suffix;

          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      };

      const els = Array.from(document.querySelectorAll('.kg-stat'));
      if (!els.length) return;

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.getAttribute('data-animated') === 'true') return;
          el.setAttribute('data-animated', 'true');
          animate(el);
        });
      }, { threshold: 0.25 });

      els.forEach((el) => io.observe(el));
    })();
  


    (() => {
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    })();
  


    (() => {
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    })();
  


    (() => {
      const y = document.getElementById('kg-year');
      if (y) y.textContent = new Date().getFullYear();
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    })();
  


        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed w-full h-screen z-10 top-0 pointer-events-none" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="w-full h-full min-h-screen bg-white">
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
<div className="blob-container" id="blobContainer"><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2960px', height: '1309px'}} width="2960"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '3425px', height: '1309px'}} width="3425"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1309" style={{display: 'block', width: '2945px', height: '1309px'}} width="2945"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1298" style={{display: 'block', width: '2260px', height: '1039px'}} width="2825"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas><canvas data-engine="three.js r160" height="1304" style={{display: 'block', width: '2634px', height: '1186px'}} width="2897"></canvas></div>


</div></div>

<div className="absolute inset-0 z-0 w-full h-screen pointer-events-none">
<div className="pointer-events-none bg-gradient-to-br via-[#4A3525]/70 absolute top-0 right-0 bottom-0 left-0 from-black/90 to-black/80"></div>
</div>
<div className="flex flex-col min-h-screen bg-center bg-[url(https://images.unsplash.com/photo-1633443362894-227325b61ddf?w=3840&amp;q=80)] bg-cover z-10 relative">

<header className="md:px-12 md:py-8 flex w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group transition-opacity hover:opacity-80 relative z-20" href="#">
<span className="tracking-tight" style={{display: 'inline-flex', alignItems: 'center'}}><img alt="KGlow Logo" className="bg-center object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b435b9eb-8bab-4285-ac6b-ef303366c465_320w.png" style={{height: '40px', width: 'auto', filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(10) brightness(1.1)'}}/></span>
</a>

<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 z-20">
<a className="hover:text-[#E8D8C8] transition-colors duration-300 text-lg font-normal text-[#E8D8C8]/70" href="#">Home</a>
<a className="hover:text-[#E8D8C8] transition-colors duration-300 text-lg font-normal text-[#E8D8C8]/70" href="#">About</a>
<a aria-expanded="false" aria-haspopup="true" className="hover:text-[#E8D8C8] transition-colors duration-300 group text-lg font-normal text-[#E8D8C8]/70 relative" href="#">
        Shop
        <span className="pointer-events-none group-hover:pointer-events-auto absolute left-1/2 top-full z-50 mt-3 w-[18rem] -translate-x-1/2 rounded-2xl border p-3 shadow-[0_10px_40px_rgb(0,0,0,0.35)] backdrop-blur-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border-white/10 bg-black/70">
<span className="block px-2 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D8C8]/60">Featured Items</span>
<span className="block h-px w-full mb-2 bg-white/10"></span>
<span className="grid gap-1">
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors cursor-pointer hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Rosehip Elegance Elixir</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">$59</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors cursor-pointer hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Botanical Love Hydrator</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">$79</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors cursor-pointer hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Lily Grace Toner</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">$89</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors cursor-pointer hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Jasmine Whisper Oil</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">$24</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors cursor-pointer hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Nature's Touch Cleanser</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">$23</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors cursor-pointer hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Velvet Petals Mask</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">$65</span>
</span>
</span>
</span>
</a>
<a aria-expanded="false" aria-haspopup="true" className="hover:text-[#E8D8C8] transition-colors duration-300 group text-lg font-normal text-[#E8D8C8]/70 relative" href="#">
        Packages
        <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-[18rem] -translate-x-1/2 rounded-2xl border p-3 shadow-[0_10px_40px_rgb(0,0,0,0.35)] backdrop-blur-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border-white/10 bg-black/70">
<span className="block px-2 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D8C8]/60">KGlow Packages</span>
<span className="block h-px w-full mb-2 bg-white/10"></span>
<span className="grid gap-1">
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8">Moonlight Renewal Journey</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">4h 15m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Total Skin Rebirth</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">4h 15m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Radiance Awakening Facial</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">2h 30m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Stone Serenity Therapy</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">2h 30m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Soft Touch Ritual</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">3h</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Calm Reset Therapy</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">3h</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Luminous Skin Therapy</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">1h 30m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Inner Harmony Ritual</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">3h 15m</span>
</span>
</span>
</span>
</a>
<a aria-expanded="false" aria-haspopup="true" className="hover:text-[#E8D8C8] transition-colors duration-300 text-lg font-normal text-[#E8D8C8]/70 group relative" href="#">
        Services
        <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-[18rem] -translate-x-1/2 rounded-2xl border p-3 shadow-[0_10px_40px_rgb(0,0,0,0.35)] backdrop-blur-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border-white/10 bg-black/70">
<span className="block px-2 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D8C8]/60">KGlow Services</span>
<span className="block h-px w-full mb-2 bg-white/10"></span>
<span className="block max-h-64 overflow-auto pr-1" style={{scrollbarWidth: 'thin'}}>
<span className="grid gap-1">
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Skin Consultation</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">30–45m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Signature Glow Facial</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">60–75m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Calm + Clear Facial</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">60–75m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Resurfacing Peel Facial</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">60m</span>
</span>
<span className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5">
<span className="text-sm font-normal text-[#E8D8C8]">Gua Sha Sculpt Ritual</span>
<span className="text-xs font-normal text-[#E8D8C8]/60">45–60m</span>
</span>
</span>
</span>
</span>
</a>
<a className="text-lg font-normal text-[#E8D8C8]/70 hover:text-[#E8D8C8] transition-colors duration-300" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4 relative z-20">
<button className="relative p-2 rounded-full border transition-all duration-300 backdrop-blur-md group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<i className="w-5 h-5 text-[#E8D8C8] group-hover:scale-110 transition-transform" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 bg-[#4A3525] text-xs font-medium w-4 h-4 flex items-center justify-center rounded-full border border-black">0</span>
</button>
<button className="md:hidden p-2 rounded-full border transition-all duration-300 backdrop-blur-md group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<i className="w-5 h-5 text-[#E8D8C8] group-hover:scale-110 transition-transform" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-1 flex flex-col md:px-24 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pb-24 pl-6 relative justify-center">
<div className="max-w-2xl mt-12 md:mt-0">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-medium text-[#E8D8C8] tracking-tight font-playfair mb-6">
        Reveal Your Natural Glow</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-[#E8D8C8]/80 max-w-md mb-10">Personalized skincare
        rituals designed to restore balance, radiance, and confidence</p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(232,216,200,0.3)] hover:bg-white text-lg font-medium text-black text-center bg-[#E8D8C8] w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="/book-appointment">Book
          An Appointment</a>
<a className="sm:w-auto transition-all duration-300 hover:border-[#E8D8C8] hover:bg-white/5 text-lg font-medium text-[#E8D8C8] text-center bg-transparent w-full border-[#E8D8C8]/30 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="/#">Skin
          Care Products</a>
</div>
</div>
</main>
</div><style className="">
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        @keyframes scroll-right {
            0% { transform: translateX(calc(-50% - 0.75rem)); }
            100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 45s linear infinite; }
        .animate-scroll-right { animation: scroll-right 45s linear infinite; }
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right { animation-play-state: paused; }
    </style>

<section className="md:py-32 overflow-hidden group/section z-20 bg-center text-[#2C241B] bg-[#F6F4F0] pt-24 pb-24 relative">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80')] bg-cover bg-center opacity-[0.06] mix-blend-multiply transition-transform duration-[5000ms] ease-out group-hover/section:scale-110">
</div>

<div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E8D8C8]/60 rounded-full blur-3xl transition-transform duration-[3000ms] group-hover/section:translate-x-12 group-hover/section:translate-y-12">
</div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D5C7B6]/40 rounded-full blur-3xl transition-transform duration-[3000ms] group-hover/section:-translate-x-12 group-hover/section:-translate-y-12">
</div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="text-center mb-16 md:mb-24 flex flex-col items-center">
<span className="uppercase transition-transform duration-500 hover:-translate-y-1 hover:text-[#78634B] cursor-default inline-block text-sm font-medium text-[#8A7359] tracking-[0.25em] mb-4">About Me</span>
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-700 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">
                Meet Your Aesthetician</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

<div className="lg:col-span-5 bg-[#FCFAF8]/90 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col items-center text-center w-full max-w-md mx-auto lg:max-w-none group/card hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] transition-all duration-500 border border-[#EAE2D8]/60 relative overflow-hidden z-10">

<div className="w-full aspect-square bg-gradient-to-br from-[#EAE2D8] to-[#D5C7B6] rounded-[2rem] mb-8 relative overflow-hidden shadow-inner group-hover/card:shadow-md transition-shadow duration-500">
<img alt="Profile Silhouette" className="object-top contrast-110 transition-all duration-700 ease-out group-hover/card:grayscale-0 group-hover/card:scale-105 group-hover/card:contrast-100 mix-blend-normal w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a89b5d7-bada-4d8f-8f2c-100ccf90666a_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C241B]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
</div>
<h3 className="text-3xl font-normal text-[#2C241B] tracking-tight mb-2 group-hover/card:text-[#8A7359] transition-colors duration-300">
                    Kalyani Javdekar</h3>
<p className="text-[#8A7359] text-lg font-light mb-10 transition-opacity duration-300 group-hover/card:opacity-80">
                    Licensed Esthetician</p>

<button className="group/btn flex hover:bg-[#78634B] hover:shadow-[0_0_20px_rgba(138,115,89,0.4)] transition-all duration-300 hover:-translate-y-1 text-white bg-[#8A7359] w-full border-[#8A7359] border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-6 items-center justify-between">
<span className="group-hover/btn:-translate-x-1 transition-transform duration-300 text-base font-medium text-center w-full pr-4">Book a Consultation</span>
<span className="shrink-0 flex items-center justify-center group-hover/btn:bg-white transition-all duration-300 group-hover/btn:rotate-45 text-[#8A7359] bg-[#F6F4F0] w-12 h-12 border-[#8A7359]/20 border rounded-full">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</span>
</button>
</div>

<div className="lg:col-span-7 flex flex-col gap-6 lg:pl-4">
<h3 className="md:text-[2.5rem] transition-transform duration-500 hover:translate-x-2 cursor-default origin-left text-3xl font-normal text-[#8A7359]/95 tracking-tight mb-4">
  Welcome to KGlow</h3>
<p className="leading-[1.8] text-lg font-light text-[#5A4E41] mb-4 transition-opacity duration-500 hover:opacity-80 cursor-default">
                    I'm Kalyani Javdekar, a licensed esthetician dedicated to helping you achieve healthy, radiant skin.
                    With a passion for natural beauty and a commitment to personalized care, I combine advanced skincare
                    techniques with calming wellness rituals to create a serene and transformative experience that
                    leaves you glowing inside and out.</p>
<ul className="space-y-4 mb-4">
<li className="flex items-start gap-4 text-lg text-[#5A4E41] font-light group/item hover:text-[#2C241B] transition-colors duration-300">
<div className="h-6 w-6 rounded-full bg-[#EBE3DC] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#8A7359] group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-sm">
<i className="w-5 h-5 mt-1 text-[#8A7359] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="group-hover/item:translate-x-2 transition-transform duration-300">Over 5 years of experience in advanced skincare</span>
</li>
<li className="flex items-start gap-4 text-lg text-[#5A4E41] font-light group/item hover:text-[#2C241B] transition-colors duration-300">
<div className="h-6 w-6 rounded-full bg-[#EBE3DC] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#8A7359] group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-sm">
<i className="w-5 h-5 mt-1 text-[#8A7359] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="group-hover/item:translate-x-2 transition-transform duration-300">Certified in the latest aesthetic treatments</span>
</li>
<li className="flex items-start gap-4 text-lg text-[#5A4E41] font-light group/item hover:text-[#2C241B] transition-colors duration-300">
<div className="h-6 w-6 rounded-full bg-[#EBE3DC] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#8A7359] group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-sm">
<i className="w-5 h-5 mt-1 text-[#8A7359] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="group-hover/item:translate-x-2 transition-transform duration-300">Specializing in <span className="font-medium text-[#2C241B] group-hover/item:text-[#8A7359] transition-colors duration-300">facials, anti-aging</span>,
                        holistic skin care, etc.</span>
</li>
</ul>

<div className="flex items-center gap-4 mt-6 flex-wrap">
<button className="group/btn flex items-center justify-between bg-[#8A7359] rounded-full p-1.5 pl-6 w-[240px] hover:bg-[#78634B] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(138,115,89,0.4)] transition-all duration-300 border border-[#8A7359] text-white">
<span className="font-medium text-base pr-4 w-full text-center group-hover/btn:-translate-x-1 transition-transform duration-300">Read My Story</span>
<span className="shrink-0 flex items-center justify-center group-hover/btn:bg-white transition-all duration-300 group-hover/btn:rotate-45 text-[#8A7359] bg-[#F6F4F0] w-12 h-12 border-[#8A7359]/20 border rounded-full">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>
<a className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#EBE3DC] flex items-center justify-center text-[#8A7359] hover:bg-[#8A7359] hover:-translate-y-1 hover:shadow-md transition-all duration-300 border border-[#8A7359]/10 hover:border-transparent group hover:text-white" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#EBE3DC] flex items-center justify-center text-[#8A7359] hover:bg-[#8A7359] hover:-translate-y-1 hover:shadow-md transition-all duration-300 border border-[#8A7359]/10 hover:border-transparent group hover:text-white" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden z-20 group/section text-[#2C241B] bg-slate-100 opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f1b8f65-ac91-4c82-b3d2-7610a685831c_3840w.png)] bg-cover bg-center pt-24 pb-24 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#EAE2D8]/70 blur-3xl transition-transform duration-[3000ms] ease-out group-hover/section:scale-150 group-hover/section:translate-x-12 group-hover/section:translate-y-12"></div>
<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#EBE3DC]/70 blur-3xl transition-transform duration-[3000ms] ease-out group-hover/section:scale-150 group-hover/section:-translate-x-12 group-hover/section:-translate-y-12"></div>
<div className="absolute inset-0 opacity-[0.035] mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1913&amp;auto=format&amp;fit=crop')] bg-no-repeat bg-center bg-cover transition-opacity duration-1000 group-hover/section:opacity-[0.05]"></div>
</div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-14 md:mb-20 flex flex-col items-center">
<span className="uppercase tracking-[0.25em] text-sm text-[#8A7359] font-medium mb-4 transition-transform duration-500 hover:-translate-y-1 hover:text-[#78634B] cursor-default inline-block">Statistics</span>
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">
  KGlow in Numbers</h2>
<p className="text-lg font-light text-[#5A4E41] leading-relaxed max-w-2xl mt-5 transition-opacity duration-500 hover:opacity-80 cursor-default">
        A quick look at the care, consistency, and results clients come back for—season after season.
      </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 gap-x-6 gap-y-6">
<article className="relative overflow-hidden rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col min-h-[18rem] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] cursor-default">
<div className="absolute inset-0 z-0">
<img alt="Client Satisfaction Background" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF8]/95 to-[#FCFAF8]/85 backdrop-blur-[2px] transition-colors duration-500 group-hover:from-[#FCFAF8]/85 group-hover:to-[#FCFAF8]/70">
</div>
</div>
<div className="z-10 md:p-8 flex flex-col h-full pt-7 pr-7 pb-7 pl-7 relative">
<div className="flex items-center justify-between gap-4">
<p className="text-sm text-[#8A7359] font-medium">Client
      Satisfaction</p>
<div className="flex transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#8A7359] group-hover:text-white group-hover:border-transparent text-[#8A7359] bg-white/60 w-10 h-10 border-[#8A7359]/20 border rounded-full shadow-sm backdrop-blur-md items-center justify-center">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
</div>
<div className="mt-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105 origin-left">
<p className="text-6xl font-normal tracking-tight text-[#2C241B] group-hover:text-[#8A7359] transition-colors duration-500">
<span className="kg-stat" data-animated="true" data-count="98" data-suffix="%">99%</span>
</p>
</div>
<p className="text-lg font-light text-[#5A4E41] leading-relaxed mt-8 transition-opacity duration-500 group-hover:opacity-90">
    Clients report noticeably calmer, brighter skin after their personalized ritual.
  </p>
</div>
</article>
<article className="relative overflow-hidden rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col min-h-[18rem] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] cursor-default">
<div className="absolute inset-0 z-0">
<img alt="Annual Treatments Background" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF8]/95 to-[#FCFAF8]/85 backdrop-blur-[2px] transition-colors duration-500 group-hover:from-[#FCFAF8]/85 group-hover:to-[#FCFAF8]/70">
</div>
</div>
<div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
<div className="flex items-center justify-between gap-4">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-500 group-hover:translate-x-1">Annual
          Treatments</p>
<div className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-md border border-[#8A7359]/20 flex items-center justify-center text-[#8A7359] transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-[#8A7359] group-hover:text-white group-hover:border-transparent shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
</div>
<div className="mt-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105 origin-left">
<p className="text-6xl font-normal tracking-tight text-[#2C241B] group-hover:text-[#8A7359] transition-colors duration-500">
<span className="kg-stat" data-animated="true" data-count="1200" data-suffix="+">20k+</span>
</p>
</div>
<p className="text-lg font-light text-[#5A4E41] leading-relaxed mt-8 transition-opacity duration-500 group-hover:opacity-90">
        A steady flow of facials, advanced treatments, and glow-up maintenance all year.
      </p>
</div>
</article>
<article className="relative overflow-hidden rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col min-h-[18rem] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] cursor-default">
<div className="absolute inset-0 z-0">
<img alt="Returning Clients Background" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF8]/95 to-[#FCFAF8]/85 backdrop-blur-[2px] transition-colors duration-500 group-hover:from-[#FCFAF8]/85 group-hover:to-[#FCFAF8]/70">
</div>
</div>
<div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
<div className="flex items-center justify-between gap-4">
<p className="transition-transform duration-500 group-hover:translate-x-1 text-sm font-medium text-[#8A7359]">
  Returning Clients</p>
<div className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-md border border-[#8A7359]/20 flex items-center justify-center text-[#8A7359] transition-all duration-500 group-hover:rotate-[180deg] group-hover:scale-110 group-hover:bg-[#8A7359] group-hover:text-white group-hover:border-transparent shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m17 2 4 4-4 4"></path>
<path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
<path d="m7 22-4-4 4-4"></path>
<path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
</svg>
</div>
</div>
<div className="mt-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105 origin-left">
<p className="text-6xl font-normal tracking-tight text-[#2C241B] group-hover:text-[#8A7359] transition-colors duration-500">
<span className="kg-stat" data-animated="true" data-count="70" data-suffix="%">71%</span>
</p>
</div>
<p className="text-lg font-light text-[#5A4E41] leading-relaxed mt-8 transition-opacity duration-500 group-hover:opacity-90">
        Most clients rebook as part of a consistent, results-first skincare plan.
      </p>
</div>
</article>
<article className="relative overflow-hidden rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col min-h-[18rem] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] cursor-default">
<div className="absolute inset-0 z-0">
<img alt="Average Rating Background" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF8]/95 to-[#FCFAF8]/85 backdrop-blur-[2px] transition-colors duration-500 group-hover:from-[#FCFAF8]/85 group-hover:to-[#FCFAF8]/70">
</div>
</div>
<div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
<div className="flex items-center justify-between gap-4">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-500 group-hover:translate-x-1">
          Average Rating</p>
<div className="flex transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:bg-[#8A7359] group-hover:text-white group-hover:border-transparent text-[#8A7359] bg-white/60 w-10 h-10 border-[#8A7359]/20 border rounded-full shadow-sm backdrop-blur-md items-center justify-center">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
</div>
</div>
<div className="mt-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105 origin-left">
<p className="text-6xl font-normal tracking-tight text-[#2C241B] group-hover:text-[#8A7359] transition-colors duration-500">
<span className="kg-stat" data-animated="true" data-count="4.9" data-suffix="/5">4.5/5</span>
</p>
</div>
<p className="text-lg font-light text-[#5A4E41] leading-relaxed mt-8 transition-opacity duration-500 group-hover:opacity-90">
        Rated for a calming experience, thoughtful education, and visible results.
      </p>
</div>
</article>
</div>
<div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<a className="group/btn flex items-center justify-between sm:w-[260px] hover:bg-[#78634B] transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,115,89,0.4)] hover:-translate-y-1 text-white bg-[#8A7359] w-full border-[#8A7359] border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-6" href="#">
<span className="font-medium text-base pr-4 w-full text-center group-hover/btn:-translate-x-1 transition-transform duration-300">Book an Appointment</span>
<span className="shrink-0 flex items-center justify-center group-hover/btn:bg-white transition-all duration-300 group-hover/btn:rotate-45 text-[#8A7359] bg-[#F6F4F0] w-12 h-12 border-[#8A7359]/20 border rounded-full">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(138, 115, 89)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
<a className="sm:w-auto hover:bg-white hover:shadow-[0_8px_30px_rgba(138,115,89,0.15)] hover:-translate-y-1 transition-all duration-300 text-lg font-medium text-[#2C241B] text-center bg-[#FCFAF8]/80 w-full border-[#8A7359]/25 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm hover:border-[#8A7359]/40" href="#">
        View Services
      </a>
</div>
<p className="text-xs font-medium text-center mt-6 text-[#5A4E41]/70 relative z-10">
      *Statistics reflect recent client feedback and booking history; updated periodically.
    </p>
</div>

</section><section className="overflow-hidden z-20 text-[#2C241B] bg-[#F6F4F0] pt-24 pb-24 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#EAE2D8]/70 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#EBE3DC]/70 blur-3xl"></div>
<div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1913&amp;auto=format&amp;fit=crop')] bg-no-repeat bg-center bg-cover"></div>
</div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-14 md:mb-20 flex flex-col items-center">
<span className="uppercase transition-transform duration-500 hover:-translate-y-1 hover:text-[#78634B] cursor-default inline-block text-sm font-medium text-[#8A7359] tracking-[0.25em] mb-4">Services</span>
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">
  KGlow Services</h2>
<p className="text-lg font-light text-[#5A4E41] leading-relaxed max-w-2xl mt-5">
      A vertically curated menu of skin-first rituals—built around your goals, your schedule, and your glow.
    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<aside className="lg:col-span-4 order-2 lg:order-1">
<div className="bg-[#FCFAF8]/70 backdrop-blur-sm rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-7 md:p-8 sticky top-8">
<p className="text-sm text-[#8A7359] font-medium">How it works</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-4">
<span className="mt-1 h-9 w-9 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-5 h-5" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="text-base font-medium text-[#2C241B]">Personalized consult</p>
<p className="mt-1 text-sm font-light text-[#5A4E41] leading-relaxed">We map your skin goals, sensitivities, and routine.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="mt-1 h-9 w-9 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="text-base font-medium text-[#2C241B]">Custom treatment</p>
<p className="mt-1 text-sm font-light text-[#5A4E41] leading-relaxed">Each step is selected for results and comfort.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="mt-1 h-9 w-9 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="text-base font-medium text-[#2C241B]">Aftercare plan</p>
<p className="mt-1 text-sm font-light text-[#5A4E41] leading-relaxed">Simple steps to maintain your glow between visits.</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60">
<a className="group/btn flex items-center justify-between sm:w-[260px] hover:bg-[#78634B] transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,115,89,0.4)] hover:-translate-y-1 text-white bg-[#8A7359] w-full border-[#8A7359] border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-6" href="#">
<span className="font-medium text-base pr-4 w-full text-center group-hover/btn:-translate-x-1 transition-transform duration-300">Book a Service</span>
<span className="shrink-0 flex items-center justify-center group-hover/btn:bg-white transition-all duration-300 group-hover/btn:rotate-45 text-[#8A7359] bg-[#F6F4F0] w-12 h-12 border-[#8A7359]/20 border rounded-full">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(138, 115, 89)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
<p className="mt-4 text-xs font-medium text-[#8A7359]/80 text-center">
            Not sure where to start? Choose “Skin Consultation”.
          </p>
</div>
</div>
</aside>
<div className="lg:col-span-8 order-1 lg:order-2">
<div className="space-y-6">
<article className="md:p-10 bg-[#FCFAF8] border-[#EAE2D8]/60 border rounded-[2.5rem] pt-7 pr-7 pb-7 pl-7 shadow-[0_10px_50px_rgb(0,0,0,0.04)]">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div className="flex items-start gap-4">
<span className="flex items-center justify-center shrink-0 text-[#8A7359] bg-[#EBE3DC] w-12 h-12 border-[#8A7359]/10 border rounded-full">
<i className="w-6 h-6" data-lucide="scan-face" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="text-sm uppercase tracking-[0.2em] text-[#8A7359] font-medium">Starting point</p>
<h3 className="mt-2 text-3xl font-normal text-[#2C241B] tracking-tight">Skin Consultation</h3>
<p className="mt-3 text-lg font-light text-[#5A4E41] leading-relaxed">
                  A calm, thorough assessment to understand your skin, your goals, and the right plan to get you results without overwhelm.
                </p>
</div>
</div>
<div className="sm:text-right shrink-0">
<p className="text-sm text-[#8A7359] font-medium">From</p>
<p className="mt-2 text-3xl font-normal tracking-tight text-[#2C241B]">$65</p>
<p className="mt-1 text-sm font-light text-[#5A4E41]">30–45 min</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Includes</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Skin analysis + routine audit</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Best for</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">New clients &amp; new concerns</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Notes</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Product recommendations optional</p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="group flex items-center justify-between sm:w-[260px] hover:bg-[#1A1510] transition-all duration-300 text-[#FCFAF8] bg-[#2C241B] w-full rounded-full pt-1.5 pr-1.5 pb-1.5 pl-6 shadow-sm" href="#">
<span className="font-medium text-base pr-4 w-full text-center">Book Consultation</span>
<span className="bg-[#FCFAF8] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#EAE2D8]/50 text-[#2C241B] group-hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</a>
<a className="w-full sm:w-auto text-center rounded-full border border-[#8A7359]/25 bg-[#FCFAF8]/60 backdrop-blur-sm px-8 py-4 text-lg font-medium text-[#2C241B] hover:bg-[#FCFAF8] hover:border-[#8A7359]/40 transition-all duration-300" href="#">
              Ask a question
            </a>
</div>
</article>
<article className="bg-[#FCFAF8] rounded-[2.5rem] border border-[#EAE2D8]/60 shadow-[0_10px_50px_rgb(0,0,0,0.04)] overflow-hidden group">
<div className="grid grid-cols-1 md:grid-cols-12 gap-0">
<div className="md:col-span-5">
<div className="relative h-full min-h-[16rem] md:min-h-[22rem] overflow-hidden bg-[#EBE3DC]">
<img alt="Signature Glow Facial" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&amp;q=80" style={{filter: 'grayscale(100%) contrast(1.06) saturate(0.9)'}}/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2C241B]/25 to-transparent pointer-events-none"></div>
<div className="absolute top-5 left-5">
<span className="inline-flex items-center gap-2 rounded-full bg-[#FCFAF8]/70 backdrop-blur-sm border border-[#EAE2D8]/60 px-4 py-2 text-xs font-medium text-[#8A7359] uppercase tracking-[0.2em]">
                    Glow + hydration
                  </span>
</div>
</div>
</div>
<div className="md:col-span-7 p-7 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div className="flex items-start gap-4">
<span className="h-12 w-12 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-6 h-6" data-lucide="sparkle" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="transition-transform duration-500 group-hover:translate-x-1 text-3xl font-normal text-[#2c241b] tracking-tight">
  Signature Glow Facial</p>
<p className="transition-transform duration-500 group-hover:translate-x-1 text-lg font-light text-[#8A7359]">
  A deeply nourishing facial designed to brighten, hydrate, and smooth-perfect before events or as your monthly reset.
</p>
</div>
</div>
<div className="sm:text-right shrink-0">
<p className="text-sm text-[#8A7359] font-medium">From</p>
<p className="mt-2 text-3xl font-normal tracking-tight text-[#2C241B]">$165</p>
<p className="mt-1 text-sm font-light text-[#5A4E41]">60–75 min</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Targets</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Dullness, dehydration, texture</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Includes</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Double cleanse, mask, massage</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Finish</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Glass-skin glow without heaviness</p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="group flex items-center justify-between bg-[#8A7359] rounded-full p-1.5 pl-6 w-full sm:w-[260px] hover:bg-[#78634B] transition-all duration-300 border border-[#8A7359] text-white" href="#">
<span className="font-medium text-base pr-4 w-full text-center">Book Signature Facial</span>
<span className="bg-[#F6F4F0] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#8A7359]/20 text-[#8A7359] group-hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</div>
</article>
<article className="bg-[#FCFAF8] rounded-[2.5rem] border border-[#EAE2D8]/60 shadow-[0_10px_50px_rgb(0,0,0,0.04)] overflow-hidden group">
<div className="grid grid-cols-1 md:grid-cols-12 gap-0">
<div className="md:col-span-5">
<div className="relative h-full min-h-[16rem] md:min-h-[22rem] overflow-hidden bg-[#EBE3DC]">
<img alt="Calm + Clear Facial" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&amp;q=80" style={{filter: 'grayscale(100%) contrast(1.06) saturate(0.9)'}}/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2C241B]/25 to-transparent pointer-events-none"></div>
<div className="absolute top-5 left-5">
<span className="inline-flex items-center gap-2 rounded-full bg-[#FCFAF8]/70 backdrop-blur-sm border border-[#EAE2D8]/60 px-4 py-2 text-xs font-medium text-[#8A7359] uppercase tracking-[0.2em]">
                    Balance + clarity
                  </span>
</div>
</div>
</div>
<div className="md:col-span-7 p-7 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div className="flex items-start gap-4">
<span className="h-12 w-12 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="transition-transform duration-500 group-hover:translate-x-1 text-3xl font-normal text-[#2c241b] tracking-tight">
  Calm + Clear Facial</p>
<p className="transition-transform duration-500 group-hover:translate-x-1 text-lg font-light text-[#8A7359]">
  Gentle, barrier-supportive care for reactive or congested skin—focused on calming inflammation and refining pores.
</p>
</div>
</div>
<div className="sm:text-right shrink-0">
<p className="text-sm text-[#8A7359] font-medium">From</p>
<p className="mt-2 text-3xl font-normal tracking-tight text-[#2C241B]">$175</p>
<p className="mt-1 text-sm font-light text-[#5A4E41]">60–75 min</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Targets</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Breakouts, redness, congestion</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Includes</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Steam, extractions (as needed), mask</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Feel</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Clean, calm, breathable skin</p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="group flex items-center justify-between bg-[#8A7359] rounded-full p-1.5 pl-6 w-full sm:w-[260px] hover:bg-[#78634B] transition-all duration-300 border border-[#8A7359] text-white" href="#">
<span className="font text-base pr-4 w-full text-center">Book Calm + Clear</span>
<span className="bg-[#F6F4F0] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#8A7359]/20 text-[#8A7359] group-hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</div>
</article>
<article className="bg-[#FCFAF8] rounded-[2.5rem] border border-[#EAE2D8]/60 shadow-[0_10px_50px_rgb(0,0,0,0.04)] overflow-hidden group">
<div className="grid grid-cols-1 md:grid-cols-12 gap-0">
<div className="md:col-span-5">
<div className="relative h-full min-h-[16rem] md:min-h-[22rem] overflow-hidden bg-[#EBE3DC]">
<img alt="Resurfacing Peel Facial" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1664549761426-6a1cb1032854?w=800&amp;q=80" style={{filter: 'grayscale(100%) contrast(1.06) saturate(0.9)'}}/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2C241B]/25 to-transparent pointer-events-none"></div>
<div className="absolute top-5 left-5">
<span className="inline-flex items-center gap-2 rounded-full bg-[#FCFAF8]/70 backdrop-blur-sm border border-[#EAE2D8]/60 px-4 py-2 text-xs font-medium text-[#8A7359] uppercase tracking-[0.2em]">
                    Texture + tone
                  </span>
</div>
</div>
</div>
<div className="md:col-span-7 p-7 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div className="flex items-start gap-4">
<span className="h-12 w-12 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-6 h-6" data-lucide="wand-sparkles" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="transition-transform duration-500 group-hover:translate-x-1 text-3xl font-normal text-[#2c241b] tracking-tight">Resurfacing Peel Facial</p>
<p className="transition-transform duration-500 group-hover:translate-x-1 text-lg font-light text-[#8A7359]">
  A controlled, customized exfoliation to smooth texture and brighten tone—paired with soothing recovery steps for
  comfort.
</p>
</div>
</div>
<div className="sm:text-right shrink-0">
<p className="text-sm text-[#8A7359] font-medium">From</p>
<p className="mt-2 text-3xl font-normal tracking-tight text-[#2C241B]">$210</p>
<p className="mt-1 text-sm font-light text-[#5A4E41]">60 min</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Targets</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Texture, spots, post-acne marks</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Downtime</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Light flaking possible (varies)</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Best results</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Series plan + SPF commitment</p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="group flex items-center justify-between bg-[#2C241B] text-[#FCFAF8] rounded-full p-1.5 pl-6 w-full sm:w-[260px] hover:bg-[#1A1510] transition-all duration-300 shadow-sm" href="#">
<span className="font-medium text-base pr-4 w-full text-center">Book Resurfacing Peel</span>
<span className="bg-[#FCFAF8] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#EAE2D8]/50 text-[#2C241B] group-hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</div>
</article>
<article className="bg-[#FCFAF8] rounded-[2.5rem] border border-[#EAE2D8]/60 shadow-[0_10px_50px_rgb(0,0,0,0.04)] overflow-hidden group">
<div className="grid grid-cols-1 md:grid-cols-12 gap-0">
<div className="md:col-span-5">
<div className="relative h-full min-h-[16rem] md:min-h-[22rem] overflow-hidden bg-[#EBE3DC]">
<img alt="Gua Sha Sculpt Ritual" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1699535769866-7f195457a90a?w=800&amp;q=80" style={{filter: 'grayscale(100%) contrast(1.06) saturate(0.9)'}}/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2C241B]/25 to-transparent pointer-events-none"></div>
<div className="absolute top-5 left-5">
<span className="inline-flex items-center gap-2 rounded-full bg-[#FCFAF8]/70 backdrop-blur-sm border border-[#EAE2D8]/60 px-4 py-2 text-xs font-medium text-[#8A7359] uppercase tracking-[0.2em]">
                    Lift + lymph
                  </span>
</div>
</div>
</div>
<div className="md:col-span-7 p-7 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div className="flex items-start gap-4">
<span className="h-12 w-12 rounded-full bg-[#EBE3DC] border border-[#8A7359]/10 flex items-center justify-center text-[#8A7359] shrink-0">
<i className="w-6 h-6" data-lucide="hand-heart" strokeWidth="1.5"></i>
</span>
<div className="">
<p className="transition-transform duration-500 group-hover:translate-x-1 text-3xl font-normal text-[#2c241b] tracking-tight">Gua Sha Sculpt Ritual</p>
<p className="transition-transform duration-500 group-hover:translate-x-1 text-lg font-light text-[#8A7359]">
  A slow, intentional sculpting session to support lymphatic flow, soften tension, and enhance natural definition.
</p>
</div>
</div>
<div className="sm:text-right shrink-0">
<p className="text-sm text-[#8A7359] font-medium">From</p>
<p className="mt-2 text-3xl font-normal tracking-tight text-[#2C241B]">$145</p>
<p className="mt-1 text-sm font-light text-[#5A4E41]">45–60 min</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Targets</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Puffiness, tension, dull tone</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Includes</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Oil ritual + facial massage sequence</p>
</div>
<div className="rounded-[1.5rem] border border-[#EAE2D8]/60 bg-[#F6F4F0]/70 p-4">
<p className="text-xs uppercase tracking-[0.2em] text-[#8A7359] font-medium">Good to know</p>
<p className="mt-2 text-sm font-light text-[#5A4E41] leading-relaxed">Not recommended post-fillers (ask first)</p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="group flex items-center justify-between bg-[#8A7359] rounded-full p-1.5 pl-6 w-full sm:w-[260px] hover:bg-[#78634B] transition-all duration-300 border border-[#8A7359] text-white" href="#">
<span className="font-medium text-base pr-4 w-full text-center">Book Sculpt Ritual</span>
<span className="bg-[#F6F4F0] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#8A7359]/20 text-[#8A7359] group-hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</div>
</article>
<div className="bg-[#FCFAF8]/70 backdrop-blur-sm rounded-[2.5rem] border border-[#EAE2D8]/60 shadow-[0_10px_50px_rgb(0,0,0,0.04)] p-7 md:p-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="">
<p className="text-sm uppercase tracking-[0.25em] text-[#8A7359] font-medium">Need help choosing?</p>
<h3 className="mt-3 md:text-4xl text-3xl font-normal text-[#2C241B] tracking-tight">Tell us what your skin needs—then we’ll match you.</h3>
<p className="mt-4 text-lg font-light text-[#5A4E41] leading-relaxed max-w-2xl">
                Share your goals (acne, sensitivity, glow, texture), and we’ll recommend the best first service and add-ons.
              </p>
</div>
<div className="shrink-0 w-full md:w-auto">
<a className="group flex items-center justify-between bg-[#2C241B] text-[#FCFAF8] rounded-full p-1.5 pl-6 w-full md:w-[280px] hover:bg-[#1A1510] transition-all duration-300 shadow-sm" href="#">
<span className="font-medium text-base pr-4 w-full text-center">Get Recommendations</span>
<span className="bg-[#FCFAF8] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#EAE2D8]/50 text-[#2C241B] group-hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
</a>
<p className="mt-3 text-xs font-medium text-[#8A7359]/80 text-center md:text-right">Typically responds within 24 hours.</p>
</div>
</div>
</div>
<p className="text-xs font-medium text-[#8A7359]/80 text-center">
          *Pricing may vary based on customization. Every service begins with a brief check-in.
        </p>
</div>
</div>
</div>
</div>

</section><section className="overflow-hidden z-20 bg-[#FCFAF8] pt-24 pb-24 relative">

<div className="flex flex-col md:flex-row md:items-end max-w-[90rem] mr-auto mb-16 ml-auto pr-6 pl-6 justify-between">
<div className="max-w-2xl">
<span className="uppercase transition-transform duration-500 hover:-translate-y-1 hover:text-[#78634B] cursor-default inline-block text-sm font-medium text-[#8A7359] tracking-[0.25em] mb-4">&gt;Exclusive Packages</span>
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">
  Rituals Designed to Awaken Your Glow</h2>
</div>
<p className="md:text-right md:pb-2 text-sm text-[#5A4E41] max-w-sm">Thoughtfully curated skin and body journeys created to restore harmony, elevate beauty, and nurture deep relaxation.</p>
</div>

<div className="pause-on-hover group flex overflow-hidden w-full mb-8 relative">
<div className="animate-scroll-left flex w-max gap-6 px-3">

<div className="flex gap-6 shrink-0">

<div className="md:w-[400px] shrink-0 flex flex-col gap-6 group-hover/card:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 w-[340px] border-[#EAE2D8]/40 border rounded-[2rem] pt-5 pr-5 pb-5 pl-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
<div className="overflow-hidden bg-[#F6F4F0] w-full h-64 rounded-2xl relative">
<img alt="Weekend Wellness Escape" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Moonlight Renewal Journey</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$535</span>
<span className="text-sm text-[#8A7359]">4 hrs 15 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Deep Relaxation Body Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Warm Stone Muscle Release</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Botanical Detox Facial Experience</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Begin This Journey →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="The Ultimate Reset" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Total Skin Rebirth</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$415</span>
<span className="text-sm text-[#8A7359]">4 hrs 15 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Aromatic Body Cleanse</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Mineral Detox Wrap</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Restorative Skin Therapy Facial</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Restore My Skin →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="The Glow Ritual" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Radiance Awakening Facial</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$250</span>
<span className="text-sm text-[#8A7359]">2 hrs 30 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Illuminating Facial Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Sculpting Facial Massage</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Eye &amp; Lip Renewal Ritual</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Reveal Radiance →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Hot Stone Harmony" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?w=800&amp;q=80"/>
</div>
<div className="flex flex-col flex-1 pr-2 pb-2 pl-2">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Stone Serenity Therapy</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$270</span>
<span className="text-sm text-[#8A7359]">2 hrs 30 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Full Body Stone Massage</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Upper Body Tension Release</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Scalp &amp; Neck Warm Stone Ritual</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Find Serenity →</button>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 shrink-0">

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Weekend Wellness Escape" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Moonlight Renewal Journey</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$545</span>
<span className="text-sm text-[#8A7359]">4 hrs 15 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Deep Relaxation Body Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Warm Stone Muscle Release</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Botanical Detox Facial Experience</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Begin This Journey →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="The Ultimate Reset" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Total Skin Rebirth</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$400</span>
<span className="text-sm text-[#8A7359]">4 hrs 15 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Aromatic Body Cleanse</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Mineral Detox Wrap</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Restorative Skin Therapy Facial</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Restore My Skin →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="The Glow Ritual" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Radiance Awakening Facial</h3>
<div className="flex mb-8 items-baseline justify-between">
<span className="text-xl font-medium text-[#2C241B]">$245</span>
<span className="text-sm text-[#8A7359]">2 hrs 30 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Illuminating Facial Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Sculpting Facial Massage</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Eye &amp; Lip Renewal Ritual</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Reveal Radiance →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="overflow-hidden bg-[#F6F4F0] w-full h-64 rounded-2xl relative">
<img alt="Hot Stone Harmony" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Stone Serenity Therapy</h3>
<div className="flex mb-8 items-baseline justify-between">
<span className="text-xl font-medium text-[#2C241B]">$270</span>
<span className="text-sm text-[#8A7359]">2 hrs 30 min</span>
</div>
<div className="flex-1 mb-8">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Full Body Stone Massage</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Upper Body Tension Release</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Scalp &amp; Neck Warm Stone Ritual</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Find Serenity →</button>
</div>
</div>
</div>
</div>
</div>

<div className="pause-on-hover group flex overflow-hidden w-full relative">
<div className="animate-scroll-right flex w-max gap-6 px-3">

<div className="flex gap-6 shrink-0">

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Hand &amp; Foot Spa Ritual" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1617952986600-802f965dcdbc?w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Soft Touch Ritual</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$260</span>
<span className="text-sm text-[#8A7359]">3 hrs</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Botanical Hand Renewal Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Deep Hydration Foot Ritual with Warm Towels</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Relaxing Arm, Palm &amp; Sole Massage</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Pamper Yourself →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Relax &amp; Reset Package" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex flex-col flex-1 pr-2 pb-2 pl-2">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Calm Reset Therapy</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$300</span>
<span className="text-sm text-[#8A7359]">3 hrs</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Aromatherapy Stress-Relief Body Massage</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Tension-Release Back, Neck &amp; Shoulder Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Guided Relaxation &amp; Breathwork Ritual</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Reset &amp; Relax →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Signature Deep Glow" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1728949202477-bad2935775cb?w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Luminous Skin Therapy</h3>
<div className="flex mb-8 items-baseline justify-between">
<span className="text-xl font-medium text-[#2C241B]">$190</span>
<span className="text-sm text-[#8A7359]">1 hr 30 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Deep Cleanse &amp; Enzyme Exfoliation Facial</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Hydration Infusion &amp; Skin Barrier Repair Mask</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Sculpting Facial Massage with Glow Serum</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Glow Instantly →</button>
</div>
</div>

<div className="md:w-[400px] shrink-0 flex flex-col gap-6 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] w-[340px] border-[#EAE2D8]/40 border rounded-[2rem] pt-5 pr-5 pb-5 pl-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Tranquil Mind &amp; Body" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex flex-col flex-1 pr-2 pb-2 pl-2">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Inner Harmony Ritual</h3>
<div className="flex mb-8 items-baseline justify-between">
<span className="text-xl font-medium text-[#2C241B]">$325</span>
<span className="text-sm text-[#8A7359]">3 hrs 15 min</span>
</div>
<div className="flex-1 mb-8">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Full Body Relaxation Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Botanical Oil Scalp &amp; Hair Nourishment Ritual</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Warm Stone Back &amp; Neck Therapy</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Restore Balance →</button>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 shrink-0">

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Hand &amp; Foot Spa Ritual" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1617952986600-802f965dcdbc?w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Soft Touch Ritual</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$260</span>
<span className="text-sm text-[#8A7359]">3 hrs</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Botanical Hand Renewal Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Deep Hydration Foot Ritual with Warm Towels</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Relaxing Arm, Palm &amp; Sole Massage</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Pamper Yourself →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Relax &amp; Reset Package" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Calm Reset Therapy</h3>
<div className="flex bg-center mb-8 items-baseline justify-between">
<span className="text-xl font-medium text-[#2C241B]">$300</span>
<span className="text-sm text-[#8A7359]">3 hrs</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Aromatherapy Stress-Relief Body Massage</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Tension-Release Back, Neck &amp; Shoulder Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Guided Relaxation &amp; Breathwork Ritual</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Reset &amp; Relax →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Signature Deep Glow" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1728949202477-bad2935775cb?w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Luminous Skin Therapy</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$190</span>
<span className="text-sm text-[#8A7359]">1 hr 30 min</span>
</div>
<div className="flex-1 mb-8">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Deep Cleanse &amp; Enzyme Exfoliation Facial</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Hydration Infusion &amp; Skin Barrier Repair Mask</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Sculpting Facial Massage with Glow Serum</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Glow Instantly →</button>
</div>
</div>

<div className="w-[340px] md:w-[400px] shrink-0 rounded-[2rem] p-5 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE2D8]/40 transition-shadow duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white">
<div className="w-full h-64 rounded-2xl overflow-hidden relative bg-[#F6F4F0]">
<img alt="Tranquil Mind &amp; Body" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#2C241B] tracking-tight mb-4">Inner Harmony Ritual</h3>
<div className="flex items-baseline justify-between mb-8">
<span className="text-xl font-medium text-[#2C241B]">$325</span>
<span className="text-sm text-[#8A7359]">3 hrs 15 min</span>
</div>
<div className="mb-8 flex-1">
<span className="uppercase block text-xs font-medium text-[#8A7359] tracking-wider mb-4">Includes</span>
<ul className="space-y-3">
<li className="flex text-sm text-[#5A4E41] items-start">• Full Body Relaxation Therapy</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Botanical Oil Scalp &amp; Hair Nourishment Ritual</li>
<li className="flex text-sm text-[#5A4E41] items-start">• Warm Stone Back &amp; Neck Therapy</li>
</ul>
</div>
<button className="transition-all duration-300 hover:bg-[#1A1510] hover:scale-[1.02] text-base font-medium text-[#FCFAF8] text-center bg-[#2C241B] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm">Restore Balance →</button>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden z-20 text-[#2C241B] bg-[#F6F4F0] pt-24 pb-24 relative">
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0">
<div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#EAE2D8]/70 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#EBE3DC]/70 blur-3xl"></div>
<div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1913&amp;auto=format&amp;fit=crop')] bg-no-repeat bg-center bg-cover"></div>
</div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="md:mb-20 flex flex-col text-center mb-14 items-center">
<span className="uppercase transition-transform duration-500 hover:-translate-y-1 hover:text-[#78634B] cursor-default inline-block text-sm font-medium text-[#8A7359] tracking-[0.25em] mb-4">CLIENT LOVE</span>
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">Words That
  Make Us Glow</h2>
<p className="leading-relaxed text-lg font-light text-[#5A4E41] max-w-2xl mt-5">Real stories, thoughtful care, and skin transformations that go deeper than the surface.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<aside className="lg:col-span-3 order-2 lg:order-1 perspective-normal">
<div className="group/aside bg-[#FCFAF8]/70 backdrop-blur-sm rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] hover:border-[#8A7359]/30 hover:bg-[#FCFAF8]/95 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#8A7359]/[0.03] to-transparent opacity-0 group-hover/aside:opacity-100 transition-opacity duration-500"></div>
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 text-[#8A7359] relative z-10">
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/aside:scale-110 group-hover/aside:-translate-y-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/aside:scale-110 group-hover/aside:-translate-y-1 delay-[50ms]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/aside:scale-110 group-hover/aside:-translate-y-1 delay-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/aside:scale-110 group-hover/aside:-translate-y-1 delay-[150ms]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/aside:scale-110 group-hover/aside:-translate-y-1 delay-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-lg font-light text-[#5A4E41] group-hover/aside:text-[#2C241B] transition-colors duration-300 mt-4 relative z-10">Client Happiness, Measured in Moments</p>
<div className="mt-8 pt-6 border-t border-[#EAE2D8]/60 relative z-10">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-300 group-hover/aside:translate-x-1">Average rating</p>
<p className="mt-2 text-3xl font-normal tracking-tight text-[#2C241B] transition-transform duration-300 group-hover/aside:translate-x-1">4.9/5</p>
<p className="leading-relaxed text-lg font-light text-[#5A4E41] group-hover/aside:text-[#2C241B]/80 transition-colors duration-300 mt-2">Based on verified client experiences across consultations, treatments, and follow-up care.</p>
</div>
</div>
</aside>
<div className="lg:col-span-9 order-1 lg:order-2 perspective-normal">
<article className="group/featured grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:p-10 bg-[#FCFAF8] border-[#EAE2D8]/60 border rounded-[2.5rem] pt-7 pr-7 pb-7 pl-7 shadow-[0_10px_50px_rgb(0,0,0,0.04)] items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] hover:border-[#8A7359]/30 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#8A7359]/[0.02] to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="md:col-span-5 relative z-10">
<div className="overflow-hidden bg-[#EBE3DC] border-[#EAE2D8]/60 border rounded-[2rem] relative shadow-inner">
<div className="absolute top-4 left-4 z-10 transition-transform duration-500 group-hover/featured:scale-110 group-hover/featured:rotate-12">
<div className="h-10 w-10 rounded-full bg-[#F6F4F0]/80 backdrop-blur-sm border border-[#8A7359]/15 flex items-center justify-center text-[#8A7359] group-hover/featured:bg-[#8A7359] group-hover/featured:text-white transition-colors duration-500">
<svg className="lucide lucide-quote w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
</div>
<img alt="Client portrait" className="w-full h-full object-cover grayscale contrast-[1.06] saturate-90 transition-all duration-700 ease-out group-hover/featured:scale-105 group-hover/featured:grayscale-0 group-hover/featured:contrast-100 group-hover/featured:saturate-100" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;q=80&amp;w=900"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2C241B]/20 to-transparent transition-opacity duration-500 group-hover/featured:opacity-50"></div>
</div>
<div className="mt-5 transition-transform duration-500 group-hover/featured:translate-x-2">
<p className="text-sm font-medium text-[#2C241B]">Sandra B.</p>
<p className="text-xs font-medium text-[#8A7359]">Creative Director</p>
</div>
</div>
<div className="md:col-span-7 relative z-10 flex flex-col justify-center">
<div className="flex items-start justify-between gap-4">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 text-[#8A7359]">
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/featured:scale-110 group-hover/featured:-translate-y-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/featured:scale-110 group-hover/featured:-translate-y-1 delay-[50ms]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/featured:scale-110 group-hover/featured:-translate-y-1 delay-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/featured:scale-110 group-hover/featured:-translate-y-1 delay-[150ms]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current transition-transform duration-300 group-hover/featured:scale-110 group-hover/featured:-translate-y-1 delay-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-[#8A7359]/80 font-medium flex items-center gap-1">
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-green-600/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
        Verified appointment
      </span>
</div>
<p className="md:text-4xl leading-[1.15] group-hover/featured:text-[#8A7359] transition-colors duration-500 text-3xl font-normal text-[#2C241B] tracking-tight mt-6">Every detail from the calming atmosphere to the personalized care feels intentional. KGlow isn’t just skincare. It’s a ritual of self-love and renewal.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="group/btn flex items-center justify-between bg-[#8A7359] rounded-full p-1.5 pl-6 w-full sm:w-[260px] hover:bg-[#78634B] hover:shadow-[0_0_20px_rgba(138,115,89,0.4)] hover:scale-[1.02] active:scale-100 transition-all duration-300 border border-[#8A7359] text-white" href="#">
<span className="text-base font-medium text-center w-full pr-4 group-hover/btn:-translate-x-1 transition-transform duration-300">Book Your Glow Session</span>
<span className="bg-[#F6F4F0] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-[#8A7359]/20 text-[#8A7359] group-hover/btn:bg-white group-hover/btn:rotate-45 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
<a className="sm:w-auto hover:bg-[#FCFAF8] hover:border-[#8A7359]/40 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 text-lg font-medium text-[#2C241B] text-center bg-[#FCFAF8]/60 w-full border-[#8A7359]/25 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#">Read
        more Stories</a>
</div>
</div>
</article>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 perspective-normal">
<article className="group/card bg-[#FCFAF8] rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] hover:border-[#8A7359]/30 relative overflow-hidden cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-[#8A7359]/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="relative shrink-0">
<img alt="Client avatar" className="w-10 h-10 rounded-full object-cover border border-[#EAE2D8]/60 grayscale contrast-[1.05] group-hover/card:grayscale-0 group-hover/card:scale-110 group-hover/card:border-[#8A7359]/30 transition-all duration-500" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<span className="absolute -top-2 -right-2 text-[#8A7359]/60 group-hover/card:text-[#8A7359] group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300">
<svg className="lucide lucide-quote w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</span>
</div>
<p className="leading-relaxed text-lg font-light text-[#5A4E41] group-hover/card:text-[#2C241B] transition-colors duration-300">I booked one facial on a whim. Now KGlow is part of my monthly self-care ritual. My skin has never felt healthier or more balanced.</p>
</div>
<div className="mt-6 pt-6 border-t border-[#EAE2D8]/60 relative z-10 transition-transform duration-500 group-hover/card:translate-x-1">
<p className="text-sm font-medium text-[#2C241B]">Allyssa T.</p>
<p className="text-xs font-medium text-[#8A7359]">Product Designer</p>
</div>
</article>
<article className="group/card bg-[#FCFAF8] rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] hover:border-[#8A7359]/30 relative overflow-hidden cursor-default delay-[50ms]">
<div className="absolute inset-0 bg-gradient-to-br from-[#8A7359]/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="relative shrink-0">
<img alt="Client avatar" className="w-10 h-10 object-cover border border-[#EAE2D8]/60 rounded-full grayscale contrast-[1.05] group-hover/card:grayscale-0 group-hover/card:scale-110 group-hover/card:border-[#8A7359]/30 transition-all duration-500" src="https://images.unsplash.com/photo-1682965635455-3b4ab0cd9023?w=320&amp;q=80"/>
<span className="absolute -top-2 -right-2 text-[#8A7359]/60 group-hover/card:text-[#8A7359] group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300">
<svg className="lucide lucide-quote w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</span>
</div>
<p className="leading-relaxed text-lg font-light text-[#5A4E41] group-hover/card:text-[#2C241B] transition-colors duration-300">From consultation to aftercare, everything feels thoughtful and deeply personal. It’s more than a service — it’s a beautiful experience.</p>
</div>
<div className="mt-6 pt-6 border-t border-[#EAE2D8]/60 relative z-10 transition-transform duration-500 group-hover/card:translate-x-1">
<p className="text-sm font-medium text-[#2C241B]">John D.</p>
<p className="text-xs font-medium text-[#8A7359]">Designer</p>
</div>
</article>
<article className="group/card bg-[#FCFAF8] rounded-[2rem] border border-[#EAE2D8]/60 shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(138,115,89,0.15)] hover:border-[#8A7359]/30 relative overflow-hidden cursor-default delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-[#8A7359]/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="relative shrink-0">
<img alt="Client avatar" className="w-10 h-10 rounded-full object-cover border border-[#EAE2D8]/60 grayscale contrast-[1.05] group-hover/card:grayscale-0 group-hover/card:scale-110 group-hover/card:border-[#8A7359]/30 transition-all duration-500" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<span className="absolute -top-2 -right-2 text-[#8A7359]/60 group-hover/card:text-[#8A7359] group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300">
<svg className="lucide lucide-quote w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</span>
</div>
<p className="leading-relaxed text-lg font-light text-[#5A4E41] group-hover/card:text-[#2C241B] transition-colors duration-300">The moment I walk into KGlow, the outside world fades. I leave feeling calm, confident, and completely renewed.</p>
</div>
<div className="mt-6 pt-6 border-t border-[#EAE2D8]/60 relative z-10 transition-transform duration-500 group-hover/card:translate-x-1">
<p className="text-sm font-medium text-[#2C241B]">Maria M.</p>
<p className="text-xs font-medium text-[#8A7359]">Graphic Designer</p>
</div>
</article>
</div>
<p className="text-xs font-medium text-[#8A7359]/80 text-center mt-8 transition-opacity duration-300 hover:opacity-100 cursor-default">Testimonials are shared with client consent. Individual results may vary.</p>
</div>
</div>
</div>

</section><section className="overflow-hidden z-20 bg-slate-100 border-[#FCFAF8]/95 border-t pt-24 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-24">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">
  New Arrivals</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-[#8A7359] hover:text-[#2C241B] transition-colors pb-1" href="#">
          See All Products
          <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Rosehip Elegance Elixir" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7ac9321-9771-4f20-a0fb-44fdc21498e0_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Rosehip Elegance Elixir</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$97</span>
<span className="text-base font-medium text-[#2C241B]">$59</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Botanical Love Hydrator" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2e6fb4e-3342-496c-a3b4-09ffaa75f384_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="leading-tight group-hover:text-[#8A7359] transition-colors text-lg font-medium text-[#2C241B]">Botanical KGlow Hydrator</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$97</span>
<span className="text-base font-medium text-[#2C241B]">$79</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Lily Grace Toner" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917e072e-9896-4900-8b2e-2b68f6c38779_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="leading-tight group-hover:text-[#8A7359] transition-colors text-lg font-medium text-[#2C241B]">KGlow Grace Toner</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$45</span>
<span className="text-base font-medium text-[#2C241B]">$89</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Jasmine Whisper Oil" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/394d0280-be05-4c68-8a27-dfd0d728b437_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="leading-tight group-hover:text-[#8A7359] transition-colors text-lg font-medium text-[#2C241B]">KGlow Jasmine Oil</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$89</span>
<span className="text-base font-medium text-[#2C241B]">$24</span>
</div>
</div>
</a>
</div>
</div>

<div className="md:pt-24 border-[#EAE2D8]/60 border-t mb-28 pt-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 gap-x-10 gap-y-10 items-start">
<div className="md:col-span-5 lg:col-span-4">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#2C241B] md:sticky md:top-32">Shop by Category</h2>
</div>
<div className="md:col-span-7 lg:col-span-8 mt-2 md:mt-0">
<ul className="flex flex-col w-full">
<li className="border-b border-dashed border-[#EAE2D8]/80">
<a className="md:py-8 flex items-center justify-between group hover:pl-4 transition-all duration-300 ease-out pt-6 pb-6 pl-4" href="#">
<span className="text-2xl md:text-3xl font-light text-[#5A4E41] group-hover:text-[#2C241B] transition-colors tracking-tight">Cleansers</span>
<i className="w-6 h-6 text-transparent group-hover:text-[#8A7359] transition-colors -translate-x-4 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</li>
<li className="border-b border-dashed border-[#EAE2D8]/80">
<a className="py-6 md:py-8 flex items-center justify-between group hover:pl-4 transition-all duration-300 ease-out" href="#">
<span className="text-2xl md:text-3xl font-light text-[#5A4E41] group-hover:text-[#2C241B] transition-colors tracking-tight">Toners &amp; Mists</span>
<i className="w-6 h-6 text-transparent group-hover:text-[#8A7359] transition-colors -translate-x-4 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</li>
<li className="border-b border-dashed border-[#EAE2D8]/80">
<a className="py-6 md:py-8 flex items-center justify-between group hover:pl-4 transition-all duration-300 ease-out" href="#">
<span className="text-2xl md:text-3xl font-light text-[#5A4E41] group-hover:text-[#2C241B] transition-colors tracking-tight">Serums &amp; Oils</span>
<i className="w-6 h-6 text-transparent group-hover:text-[#8A7359] transition-colors -translate-x-4 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</li>
</ul>
</div>
</div>
</div>

<div className="">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-[#2C241B] tracking-tight font-playfair">
  Best Products</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-[#8A7359] hover:text-[#2C241B] transition-colors pb-1" href="#">
          See All Products
          <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 lg:gap-y-16">

<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Nature's Touch Cleanser" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e4d1cf4-287d-4e64-8ddc-0b8353cbf088_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Nature's Touch Cleanser</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$77</span>
<span className="text-base font-medium text-[#2C241B]">$23</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Iris Delight Eye Cream" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e24301a9-1bc6-4004-8cc8-31ad36b5e452_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Iris Delight Eye Cream</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$57</span>
<span className="text-base font-medium text-[#2C241B]">$53</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Hibiscus Flame Exfoliator" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1630398777649-cdfc7c5e8a24?w=800&amp;q=80" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Hibiscus Flame Exfoliator</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$48</span>
<span className="text-base font-medium text-[#2C241B]">$45</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Velvet Petals Mask" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1622910076411-b126ff7e469b?w=800&amp;q=80" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Velvet Petals Mask</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$23</span>
<span className="text-base font-medium text-[#2C241B]">$65</span>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Eterna Jade Roller" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1623248509967-35c538462bd0?w=800&amp;q=80" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Eterna Jade Roller</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$37</span>
<span className="text-base font-medium text-[#2C241B]">$24</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Heritage Clay Mask" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&amp;q=80" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Heritage Clay Mask</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$36</span>
<span className="text-base font-medium text-[#2C241B]">$24</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="Green Tea Petals Serum" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1557944941-bd67df2ad71c?w=800&amp;q=80" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">Green Tea Petals Serum</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$89</span>
<span className="text-base font-medium text-[#2C241B]">$65</span>
</div>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#F6F4F0] rounded-[2rem] overflow-hidden mb-5 relative mix-blend-multiply border border-[#EAE2D8]/40 shadow-sm">
<img alt="KGlow Signature Candle" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9496f37e-2d9e-4fff-9f5c-013987ce846b_800w.png" style={{filter: 'contrast(1.02) saturate(0.95)'}}/>
</div>
<div className="flex items-start justify-between gap-4 px-1">
<h3 className="text-lg font-medium text-[#2C241B] leading-tight group-hover:text-[#8A7359] transition-colors">KGlow Signature Candle</h3>
<div className="flex items-baseline gap-2 shrink-0">
<span className="text-xs text-[#8A7359]/60 line-through decoration-[#8A7359]/30">$36</span>
<span className="text-base font-medium text-[#2C241B]">$24</span>
</div>
</div>
</a>
</div>
</div>
</div>
</section><section className="overflow-hidden z-20 bg-[#0A0A0A] pt-24 pb-24 relative group/section transition-colors duration-700">
<div className="inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#8A7359]/20 blur-3xl transition-transform duration-[1500ms] group-hover/section:translate-x-12 group-hover/section:translate-y-12"></div>
<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#8A7359]/20 blur-3xl transition-transform duration-[1500ms] group-hover/section:-translate-x-12 group-hover/section:-translate-y-12"></div>
<div className="absolute inset-0 opacity-[0.05] mix-blend-screen bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1913&amp;auto=format&amp;fit=crop')] bg-no-repeat bg-center bg-cover transition-opacity duration-1000 group-hover/section:opacity-[0.08]"></div>
</div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="absolute -top-16 -left-16 w-80 h-80 opacity-[0.06] mix-blend-screen pointer-events-none bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1913&amp;auto=format&amp;fit=crop')] bg-no-repeat bg-contain -rotate-12 z-0 transition-transform duration-[2000ms] group-hover/section:-rotate-6 group-hover/section:scale-105"></div>
<div className="absolute bottom-0 -right-16 w-96 h-96 opacity-[0.06] mix-blend-screen pointer-events-none bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1913&amp;auto=format&amp;fit=crop')] bg-no-repeat bg-contain rotate-12 z-0 transition-transform duration-[2000ms] group-hover/section:rotate-6 group-hover/section:scale-105"></div>
<div className="flex flex-col items-center text-center mb-12 md:mb-16 relative z-10">
<span className="uppercase transition-all duration-500 hover:-translate-y-1 hover:text-[#E8D8C8] cursor-default inline-block text-sm font-medium text-[#8A7359] tracking-[0.25em] mb-4">Contact</span>
<h2 className="md:text-5xl lg:text-[3.5rem] transition-transform duration-500 hover:scale-105 cursor-default text-4xl font-normal text-white tracking-tight font-playfair">
  Visit KGlow</h2>
<p className="text-lg font-light text-white/70 leading-relaxed max-w-2xl mt-5">
        Find us in the heart of the city—quiet, warm, and designed for your glow-up ritual.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
<div className="lg:col-span-8">
<div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_50px_rgba(0,0,0,0.5)] h-full group/map hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 relative">
<div className="relative h-full min-h-[500px]">
<iframe allowfullscreen="" className="w-full h-full object-cover min-h-[500px] aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7] transition-transform duration-[1500ms] group-hover/map:scale-105" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-121.9016327!3d37.3346653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca9c3bf79cd3%3A0xe5a3bbdbb0838186!2s12%20Coleman%20Ave%2C%20San%20Jose%2C%20CA%2095110!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg) saturate(0.5) contrast(1.1) brightness(0.9)'}}></iframe>
<div className="bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/80 absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<div className="absolute left-4 right-4 top-4 sm:left-6 sm:right-auto sm:top-6 pointer-events-none transition-transform duration-700 group-hover/map:translate-x-2 group-hover/map:translate-y-2">
<div className="sm:p-7 sm:w-[24rem] w-full pointer-events-auto border-white/10 border rounded-[1.75rem] mt-1 mr-1 mb-1 ml-1 pt-4 pr-4 pb-4 pl-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl bg-[#0A0A0A]/80 group-hover/map:bg-[#0A0A0A]/95 transition-colors duration-500">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-sm text-[#8A7359] font-medium">Location</p>
<p className="leading-snug text-lg font-normal text-white mt-2">12 Coleman Avenue, San Jose, CA 90001</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8A7359] shrink-0 group-hover/map:scale-110 group-hover/map:bg-white/10 transition-all duration-500">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm text-[#8A7359] font-medium">Opening Hours</p>
<span className="text-xs text-white/50 font-medium">By appointment</span>
</div>
<dl className="mt-4 space-y-2">
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Mon</dt>
<dd className="text-white/70 font-light group-hover/hour:text-white transition-colors">9:00 AM – 8:00 PM</dd>
</div>
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Tue</dt>
<dd className="text-white/70 font-light group-hover/hour:text-white transition-colors">9:00 AM – 8:00 PM</dd>
</div>
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Wed</dt>
<dd className="text-white/70 font-light group-hover/hour:text-white transition-colors">9:00 AM – 8:00 PM</dd>
</div>
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Thu</dt>
<dd className="text-white/70 font-light group-hover/hour:text-white transition-colors">9:00 AM – 8:00 PM</dd>
</div>
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Fri</dt>
<dd className="text-white/70 font-light group-hover/hour:text-white transition-colors">9:00 AM – 8:00 PM</dd>
</div>
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Sat</dt>
<dd className="font-light text-white/70 group-hover/hour:text-white transition-colors">Closed</dd>
</div>
<div className="flex items-center justify-between gap-6 text-sm group/hour hover:pl-2 transition-all duration-300">
<dt className="text-white/70 font-light group-hover/hour:text-white transition-colors">Sun</dt>
<dd className="font-light text-white/70 group-hover/hour:text-white transition-colors">Closed</dd>
</div>
</dl>
<div className="mt-6">
<a className="group/btn flex items-center justify-between bg-white text-black rounded-full p-1.5 pl-6 w-full hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#">
<span className="font-medium text-base pr-4 w-full text-center group-hover/btn:-translate-x-1 transition-transform">Book Your Appointment</span>
<span className="bg-black/10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-black/10 text-black group-hover/btn:bg-black group-hover/btn:text-white group-hover/btn:-rotate-45 transition-all duration-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#8A7359]/80 font-medium">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
                        Typical response under 24 hours
                      </span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute right-6 top-6 hidden lg:block pointer-events-none transition-transform duration-700 group-hover/map:-translate-x-2 group-hover/map:translate-y-2">
<div className="backdrop-blur-xl rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 bg-[#0A0A0A]/60 group-hover/map:bg-[#0A0A0A]/80 transition-colors">
<svg className="lucide lucide-mouse-pointer-click w-3 h-3 text-[#8A7359]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-1.2"></path><path d="m21.3 13.7-2.6-1.5"></path><path d="m22 10.2-2.9-1.2"></path><path d="m11.2 5.5-1.5-2.6"></path><path d="m16.7 13.6-1.5-2.6"></path><path d="M3 3l18 18"></path><path d="M9.8 17.5 7 20.3s-1.4 1.4-2.8 0-0-2.8 0-2.8l2.8-2.8"></path></svg>
                Interactive Map
              </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4">
<div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.5)] p-7 md:p-8 h-full flex flex-col relative overflow-hidden group/contact hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500">
<p className="text-sm text-[#8A7359] font-medium relative z-10 transition-transform duration-300 group-hover/contact:translate-x-1">Contact Us</p>
<a className="mt-4 text-3xl font-normal tracking-tight text-white hover:text-[#8A7359] transition-all duration-300 break-words relative z-10 hover:scale-105 origin-left inline-block w-max" href="mailto:hello@kglow.com">
      hello@kglow.com
    </a>
<a className="mt-3 text-lg font-light text-white/70 hover:text-white transition-all duration-300 inline-flex items-center gap-2 relative z-10 group/phone hover:translate-x-1 w-max" href="tel:+12135550199">
<i className="w-5 h-5 text-[#8A7359]" data-lucide="phone" strokeWidth="1.5"></i>
<span className="">(213) 555-0199</span>
</a>
<div className="mt-8 pt-6 border-t border-white/10 relative z-10">
<div className="flex items-center justify-between gap-4">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-300 group-hover/contact:translate-x-1">Location</p>
<span className="text-xs text-white/50 font-medium">By appointment</span>
</div>
<div className="mt-4 space-y-3">
<p className="text-lg font-light text-white/70 leading-relaxed">
          12 Coleman Avenue, San Jose, CA 90001
        </p>
<a className="group/btn flex items-center justify-between bg-white text-black rounded-full p-1.5 pl-6 w-full hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#">
<span className="font-medium text-base pr-4 w-full text-center group-hover/btn:-translate-x-1 transition-transform">Get Directions</span>
<span className="bg-black/10 w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-black/10 text-black group-hover/btn:bg-black group-hover/btn:text-white group-hover/btn:-rotate-45 transition-all duration-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<div className="flex items-center justify-center gap-3 text-xs text-white/50 font-medium">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
            Typical response under 24 hours
          </span>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/10 relative z-10">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-300 group-hover/contact:translate-x-1">Quick Links</p>
<div className="mt-4 grid grid-cols-2 gap-3 text-lg font-light text-white/70">
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">About</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Services</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Shop</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Packages</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Reviews</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Contact</a>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 relative z-10">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-300 group-hover/contact:translate-x-1">Legal</p>
<div className="mt-4 grid grid-cols-1 gap-3 text-lg font-light text-white/70">
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Privacy Policy</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Terms &amp; Conditions</a>
<a className="hover:text-white hover:translate-x-1 transition-all w-max inline-block" href="#">Cookie Policy</a>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 relative z-10">
<p className="text-sm text-[#8A7359] font-medium transition-transform duration-300 group-hover/contact:translate-x-1">Social</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Instagram" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-transparent transition-all duration-300 group/social shadow-sm" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a aria-label="Email" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-transparent transition-all duration-300 group/social shadow-sm" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a aria-label="Map directions" className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-transparent transition-all duration-300 group/social shadow-sm" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="navigation" strokeWidth="1.5"></i>
</a>
</div>
<p className="mt-5 text-xs font-medium text-white/50">
        © <span id="kg-year">2026</span> KGlow. All rights reserved.
      </p>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50 relative z-10">
<p className="">Designed for calm, crafted for glow.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
<span className="text-white/20">•</span>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>

</section>


    </>
  );
}
