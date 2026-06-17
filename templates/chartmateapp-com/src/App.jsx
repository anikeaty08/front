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



      (function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:false};var script=document.createElement("script");script.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";script.onload=function(){if(!window.UnicornStudio.isInitialized){UnicornStudio.init();window.UnicornStudio.isInitialized=true;}};(document.head||document.body).appendChild(script);}})();
    


    (function () {
            const section = document.getElementById("liquid-timeline");
            if (!section) return;

            const steps = Array.from(section.querySelectorAll(".tl-step"));

            const io = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (!entry.isIntersecting) return;

                  // When the section comes into view, "draw" the spine + reveal title
                  if (entry.target === section) {
                    section.classList.add("is-inview");
                    return;
                  }

                  // Reveal each step with a tiny stagger feeling
                  const el = entry.target;
                  const idx = steps.indexOf(el);
                  el.style.transitionDelay = Math.min(idx * 120, 360) + "ms";
                  el.classList.add("is-inview");

                  io.unobserve(el);
                });
              },
              { threshold: 0.28, rootMargin: "0px 0px -10% 0px" }
            );

            io.observe(section);
            steps.forEach((s) => io.observe(s));
          })();
  

if(window.lucide) window.lucide.createIcons();


      // --------------------------------------------------------
      // 1. WebGL Liquid Glass Background Setup
      // --------------------------------------------------------
      const canvas = document.getElementById('webgl-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();

      // Using an Orthographic camera for a perfect full-screen 2D quad
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geometry = new THREE.PlaneGeometry(2, 2);

      // Uniforms for the shader
      const uniforms = {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uMouse: { value: new THREE.Vector2(-10, -10) }, // Start off-screen
          uScroll: { value: 0 }
      };

      // Custom Shader Material
      const material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
              varying vec2 vUv;
              void main() {
                  vUv = uv;
                  gl_Position = vec4(position, 1.0);
              }
          `,
          fragmentShader: `
              uniform float uTime;
              uniform vec2 uResolution;
              uniform vec2 uMouse;
              uniform float uScroll;

              varying vec2 vUv;

              // 3D Simplex Noise Function
              vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
              vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

              float snoise(vec3 v) {
                  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

                  vec3 i  = floor(v + dot(v, C.yyy));
                  vec3 x0 = v - i + dot(i, C.xxx);

                  vec3 g = step(x0.yzx, x0.xyz);
                  vec3 l = 1.0 - g;
                  vec3 i1 = min(g.xyz, l.zxy);
                  vec3 i2 = max(g.xyz, l.zxy);

                  vec3 x1 = x0 - i1 + C.xxx;
                  vec3 x2 = x0 - i2 + C.yyy;
                  vec3 x3 = x0 - D.yyy;

                  i = mod289(i);
                  vec4 p = permute(permute(permute(
                               i.z + vec4(0.0, i1.z, i2.z, 1.0))
                             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

                  float n_ = 0.142857142857;
                  vec3  ns = n_ * D.wyz - D.xzx;

                  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

                  vec4 x_ = floor(j * ns.z);
                  vec4 y_ = floor(j - 7.0 * x_);

                  vec4 x = x_ *ns.x + ns.yyyy;
                  vec4 y = y_ *ns.x + ns.yyyy;
                  vec4 h = 1.0 - abs(x) - abs(y);

                  vec4 b0 = vec4(x.xy, y.xy);
                  vec4 b1 = vec4(x.zw, y.zw);

                  vec4 s0 = floor(b0)*2.0 + 1.0;
                  vec4 s1 = floor(b1)*2.0 + 1.0;
                  vec4 sh = -step(h, vec4(0.0));

                  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

                  vec3 p0 = vec3(a0.xy,h.x);
                  vec3 p1 = vec3(a0.zw,h.y);
                  vec3 p2 = vec3(a1.xy,h.z);
                  vec3 p3 = vec3(a1.zw,h.w);

                  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                  p0 *= norm.x;
                  p1 *= norm.y;
                  p2 *= norm.z;
                  p3 *= norm.w;

                  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                  m = m * m;
                  return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
              }

              void main() {
                  // Normalize pixel coordinates (from 0 to 1)
                  vec2 uv = gl_FragCoord.xy / uResolution.xy;

                  // Adjust aspect ratio for uniform math
                  vec2 p = uv * 2.0 - 1.0;
                  p.x *= uResolution.x / uResolution.y;

                  // 1. Calculate Scroll modifier (Amplitude)
                  float amplitude = 1.0 + (uScroll * 1.5);

                  // 2. Calculate Base Wave Distortion (Refraction map)
                  float n1 = snoise(vec3(p * 1.2, uTime * 0.1));
                  float n2 = snoise(vec3(p * 2.0 + vec2(5.2), uTime * 0.15 + 10.0));
                  vec2 distortion = vec2(n1, n2) * 0.12 * amplitude;

                  // 3. Calculate Mouse Ripple Effect
                  vec2 mouseUvDist = uv - uMouse;
                  mouseUvDist.x *= uResolution.x / uResolution.y; // Correct aspect ratio for circular ripples
                  float distToMouse = length(mouseUvDist);

                  float ripple = 0.0;
                  if (uMouse.x > -1.0) { // Only if mouse is inside screen
                      ripple = sin(distToMouse * 25.0 - uTime * 8.0) * exp(-distToMouse * 6.0) * 0.03;
                  }
                  distortion += ripple;

                  // 4. Create Chromatic Aberration by offsetting RGB channels slightly
                  vec2 uvR = uv + distortion * 0.8;
                  vec2 uvG = uv + distortion * 1.0;
                  vec2 uvB = uv + distortion * 1.2;

                  // Define Soft Color Palette (Soft White, Pastel Cyan, Soft Blue)
                  vec3 colorBase = vec3(0.97, 0.98, 1.0);  // Bright soft white
                  vec3 colorCyan = vec3(0.85, 0.95, 0.98); // Frosted cyan
                  vec3 colorBlue = vec3(0.88, 0.92, 0.99); // Soft pastel blue

                  // Function to sample the smooth gradient background
                  vec3 getBgColor(vec2 targetUv) {
                      float mix1 = smoothstep(0.0, 1.0, targetUv.y + snoise(vec3(targetUv * 2.0, uTime * 0.1)) * 0.2);
                      float mix2 = smoothstep(0.0, 1.0, targetUv.x);

                      vec3 col = mix(colorBase, colorCyan, mix1);
                      col = mix(col, colorBlue, mix2 * 0.5);
                      return col;
                  }

                  // 5. Sample colors with chromatic displacement
                  float r = getBgColor(uvR).r;
                  float g = getBgColor(uvG).g;
                  float b = getBgColor(uvB).b;
                  vec3 finalColor = vec3(r, g, b);

                  // 6. Add Caustic Light Highlights (sharp internal reflections)
                  float caustic = max(0.0, sin(n1 * 15.0 + n2 * 10.0));
                  caustic = pow(caustic, 4.0); // Sharpen the light peaks
                  finalColor += vec3(1.0) * caustic * 0.15 * amplitude;

                  // 7. Subtle vignette to frame the scene
                  float vignette = dot(uv - 0.5, uv - 0.5);
                  finalColor -= vignette * 0.15;

                  gl_FragColor = vec4(finalColor, 1.0);
              }
          `
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Resize Handler
      window.addEventListener('resize', () => {
          renderer.setSize(window.innerWidth, window.innerHeight);
          uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      });

      // --------------------------------------------------------
      // 2. Interaction Data & Event Listeners
      // --------------------------------------------------------

      // Mouse Tracking
      let targetMouse = new THREE.Vector2(-10, -10);
      let currentMouse = new THREE.Vector2(-10, -10);

      window.addEventListener('mousemove', (e) => {
          // Map to 0..1 for shader UV space
          targetMouse.x = e.clientX / window.innerWidth;
          targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
      });

      // Scroll Tracking (Increase wave amplitude slightly when scrolling)
      let targetScroll = 0;
      let currentScroll = 0;

      window.addEventListener('scroll', () => {
          // Normalize scroll amount (e.g. 0 to 1 based on window height)
          targetScroll = Math.min(window.scrollY / window.innerHeight, 1.0);
      });

      // --------------------------------------------------------
      // 3. UI Card Parallax Effect
      // --------------------------------------------------------
      const card = document.getElementById('tilt-card');

      window.addEventListener('mousemove', (e) => {
          // Calculate mouse position relative to center of screen (-1 to 1)
          const x = (e.clientX / window.innerWidth - 0.5) * 2;
          const y = (e.clientY / window.innerHeight - 0.5) * 2;

          // Rotate card slightly based on mouse
          const rotateX = -y * 12; // Max 12 deg tilt
          const rotateY = x * 12;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      // Reset card tilt when mouse leaves window
      window.addEventListener('mouseleave', () => {
          card.style.transform = `rotateX(0deg) rotateY(0deg)`;
          targetMouse.set(-10, -10); // remove ripple
      });

      // --------------------------------------------------------
      // 4. Main Animation Loop
      // --------------------------------------------------------
      const clock = new THREE.Clock();

      function animate() {
          requestAnimationFrame(animate);

          // Update Time
          uniforms.uTime.value = clock.getElapsedTime();

          // Smoothly interpolate mouse and scroll values (LERP) for fluid reactivity
          currentMouse.lerp(targetMouse, 0.08);
          uniforms.uMouse.value.copy(currentMouse);

          currentScroll += (targetScroll - currentScroll) * 0.05;
          uniforms.uScroll.value = currentScroll;

          // Render Scene
          renderer.render(scene, camera);
      }

      animate();
    


      lucide.createIcons();

      // -------------------------------------------------------
      // Section 3: Horizontal scroll on vertical scroll (FIXED)
      // - Measures REAL track width (including card margins + gap)
      // - Sets the container height correctly
      // - Prevents the "too fast + big empty space" feeling
      // -------------------------------------------------------
      );

        // Run once (and again after layout settles)
        setSceneHeight();
        updateScroll();
        requestAnimationFrame(() => {
          setSceneHeight();
          updateScroll();
        });
      }

      // -------------------------------------------------------
      // Reveal on scroll (keep)
      // -------------------------------------------------------
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10");
        observer.observe(el);
      });
    


      (function() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        let isMenuOpen = false;

        if(btn && menu) {
          btn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
              menu.classList.remove('opacity-0', 'invisible', 'scale-95');
              menu.classList.add('opacity-100', 'visible', 'scale-100');
              menuIcon.classList.add('hidden');
              closeIcon.classList.remove('hidden');
            } else {
              menu.classList.add('opacity-0', 'invisible', 'scale-95');
              menu.classList.remove('opacity-100', 'visible', 'scale-100');
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
            }
          });

          // Close on scroll
          window.addEventListener('scroll', () => {
            if(isMenuOpen) {
               isMenuOpen = false;
               menu.classList.add('opacity-0', 'invisible', 'scale-95');
               menu.classList.remove('opacity-100', 'visible', 'scale-100');
               menuIcon.classList.remove('hidden');
               closeIcon.classList.add('hidden');
            }
          });
        }
      })();
    


      (function() {
        const floater = document.querySelector('.card-floater');
        if (!floater) return;
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            // On mobile (or small screens), toggle visibility based on scroll
            if (window.innerWidth < 1024) {
              if (e.isIntersecting) {
                floater.classList.add('is-mobile-visible');
              } else {
                floater.classList.remove('is-mobile-visible');
              }
            }
          });
        }, { threshold: 0.6 });
        obs.observe(floater);
        // Clean up class on resize to desktop to prevent conflict
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 1024) floater.classList.remove('is-mobile-visible');
        });
      })();
    
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
      
<header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 pointer-events-none" id="creative-header">
<div className="max-w-6xl mx-auto pointer-events-auto">
<div className="flex transition-all duration-500 hover:bg-white/80 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-white/70 border-white/40 border rounded-full pt-2 pr-2 pb-2 pl-6 relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
</div>
<span className="uppercase hidden sm:block text-2xl font-extrabold text-purple-700 tracking-tight">CHARTMATE</span>
</a>

<nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-slate-900 uppercase hover:bg-white/60 transition-all text-xs font-semibold text-slate-500 tracking-wider rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">PRODUCT</a>
<a className="hover:text-slate-900 uppercase hover:bg-white/60 transition-all text-xs font-semibold text-slate-500 tracking-wider rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">WHO WE SERVE</a>
<a className="hover:text-slate-900 uppercase hover:bg-white/60 transition-all text-xs font-semibold text-slate-500 tracking-wider rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">ABOUT</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center uppercase hover:bg-slate-800 transition-all shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5 text-xs font-bold text-white tracking-widest bg-purple-700 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg" href="#">BOOK A DEMO</a>

<button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-white/60 transition-colors focus:outline-none" id="mobile-menu-btn">
<svg fill="none" height="20" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="hidden" fill="none" height="20" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M18 6 6 18"></path>
<path d="M6 6 18 18"></path>
</svg>
</button>
</div>
</div>

<div className="absolute top-full left-0 w-full px-4 mt-3 origin-top transform scale-95 opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]" id="mobile-menu">
<div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex flex-col gap-1">
<a className="p-4 text-center text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all" href="#">
              Product
            </a>
<a className="p-4 text-center text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all" href="#">
              Experience
            </a>
<a className="p-4 text-center text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all" href="#">
              Systems
            </a>
<div className="h-px bg-slate-200/50 mx-6 my-1"></div>
<a className="p-4 text-center text-sm font-bold text-white bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/10" href="#">
              Access Platform
            </a>
</div>
</div>
</div>
</header>

<div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute w-full h-full left-0 top-0" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="WdVna2EGJHojbGLRHA52"></div>
</div>
</div>


<canvas className="" height="868" id="webgl-canvas" style={{width: '1440px', height: '868px'}} width="1440"></canvas>

<section className="hero-container">
<div className="content-wrapper">
<div className="text-section">
<h1 className="">Built  for Post Acute Care</h1>
<p className="">ChartMate is the ambient AI scribe that listens, understands, and drafts perfect, audit-ready SOAP notes for SNF providers. Go home when your shift ends.</p>
<button className="cta-btn text-purple-700 border-slate-400 ring-slate-700">Request Early Access</button>
</div>
<div className="card-section text-purple-800 mix-blend-overlay">

<div className="card-floater group isolate relative">


<div className="mini-card-wrapper -left-16 z-40 transition-all duration-700 delay-[0ms] w-40 absolute top-40 left-tucked">
<div className="flex float-subtle-3 bg-white/60 pointer-events-auto border-white/40 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-md blur-none backdrop-blur-lg gap-x-3 gap-y-3 items-center">
<div className="flex text-slate-400 bg-slate-50/50 w-8 h-8 rounded-full items-center justify-center">
<svg className="w-[14px] h-[14px]" data-icon-replaced="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="14">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-slate-400/80 tracking-wider mb-0.5">Security</p>
<p className="text-xs font-semibold text-slate-600">HIPAA Secured</p>
</div>
</div>
</div><div className="glass-card z-10 relative">
<div className="card-header text-slate-950">SOAP Note</div>
<div className="card-hologram text-purple-600"></div>
<div className="card-footer">
<div className="card-line"></div>
<div className="card-line"></div>
</div>
</div>
<div className="mini-card-wrapper absolute -right-10 bottom-24 w-44 z-40 transition-all duration-700 delay-[200ms]">
<div className="flex float-subtle-2 bg-white/80 border-white/60 border rounded-2xl pt-3.5 pr-3.5 pb-3.5 pl-3.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] backdrop-blur-xl gap-x-3 items-center gap-y-3">
<div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<polygon className="" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">COMPLIANCE</p>
<p className="text-xs font-bold text-slate-800">MEAT Validated</p>
</div>
</div>
</div>
<div className="mini-card-wrapper absolute top-16 -right-24 w-48 z-40 transition-all duration-700 delay-[100ms]">
<div className="flex gap-3 float-subtle-1 bg-white/80 border-white/60 border rounded-2xl pt-3.5 pr-3.5 pb-3.5 pl-3.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] backdrop-blur-xl gap-x-3 gap-y-3 items-center">
<div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path className="" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">AI AGENT</p>
<p className="text-xs font-bold text-slate-800">Actively listening</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section><div aria-hidden="true" className="w-full h-0 -mt-12 md:-mt-24 pointer-events-none relative z-20"></div><style>
  /* Dynamically reduce the top padding of the subsequent main section */
  main.z-10 > section:first-of-type {
    padding-top: 3rem !important;
  }
  @media (min-width: 768px) {
    main.z-10 > section:first-of-type {
      padding-top: 4rem !important;
    }
  }
</style>
<main className="z-10 w-full relative">

<section className="max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 min-h-[800px] gap-x-8 gap-y-8">

<div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="">
<div className="flex bg-blue-300/10 w-14 h-14 rounded-full mb-6 items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="cpu"></i>
</div>
<div className="">
<h3 className="text-[var(--primary)] text-3xl font-semibold text-purple-900 tracking-tight mb-3">Live MEAT Validation</h3>
<p className="text-[var(--text-muted)] text-lg">Proactively audits your chart in real-time, flagging missing acuity details and audit risks before you sign.</p>
</div>
</div>

<div className="mt-10 flex flex-col md:flex-row gap-6 h-auto md:h-44">

<div className="flex-1 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[160px]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
<div className="flex justify-between items-center w-full mb-4 relative z-10">
<div className="uppercase text-xs font-medium text-slate-500 tracking-wider">MIPS MEASURES CAPTURED</div>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>
<div className="flex gap-1.5 z-10 h-full pt-4 relative gap-x-1.5 gap-y-1.5 items-end">
<div className="bg-purple-500/10 w-full h-[30%] rounded-t-sm"></div>
<div className="bg-purple-400/20 w-full h-[50%] rounded-t-sm"></div>
<div className="w-full bg-blue-500/30 rounded-t-sm h-[80%]"></div>
<div className="bg-purple-600/50 w-full h-[100%] rounded-t-sm relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
</div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-blue-500/10 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-blue-500/10 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-blue-500/5 rounded-t-sm h-[20%]"></div>
</div>
</div>

<div className="w-full md:w-1/3 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
<div className="uppercase text-xs font-medium text-slate-500 tracking-wider mb-1">COMPLIANCE ALERTS</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
</div>
<div className="flex-1 space-y-2">Missing grade for bilateral edema</div>
</div>
<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="flex-1 space-y-2">
<div className="h-1.5 bg-slate-300 w-5/6 rounded-full">Add depression screening (PHQ-9)</div>
<div className="h-1.5 w-1/2 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="">
<div className="flex bg-blue-300/10 w-14 h-14 rounded-full mb-6 items-center justify-center">
<i className="w-6 h-6 text-cyan-600" data-lucide="layers"></i>
</div>
<div className="">
<h3 className="text-[var(--primary)] text-2xl font-semibold text-purple-900 tracking-tight mb-3">Deep Patient Context</h3>
<p className="text-[var(--text-muted)]">Ingests the patient's entire PointClickCare history—past notes, vitals, and active meds—to build clinical reasoning, not just transcription.</p>
</div>
</div>

<div className="mt-10 relative h-44 w-full flex items-end justify-center perspective-[1000px]">
<div className="absolute w-[85%] bottom-16 h-24 bg-white/40 border border-white/60 rounded-xl transform transition-transform duration-500 group-hover:-translate-y-4"></div>
<div className="absolute w-[92%] bottom-8 h-24 bg-white/60 border border-white/80 rounded-xl backdrop-blur-md shadow-sm transform transition-transform duration-500 group-hover:-translate-y-2"></div>
<div className="absolute w-full bottom-0 h-24 bg-white/90 border border-white rounded-xl backdrop-blur-xl shadow-xl flex items-center px-6 gap-4 transform transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg200 flex items-center justify-center shadow-inner">
<svg aria-hidden="true" className="lucide lucide-app-window w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(6, 182, 212)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<div className="space-y-2.5 flex-1">
<div className="h-2.5 bg-slate-300 w-1/2 rounded-full"></div>
<div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="">
<div className="flex bg-blue-300/10 w-14 h-14 rounded-full mb-6 items-center justify-center">
<i className="w-6 h-6 text-indigo-600" data-lucide="zap"></i>
</div>
<div className="">
<h3 className="text-[var(--primary)] text-2xl font-semibold text-purple-900 tracking-tight mb-3">Frictionless Sync</h3>
<p className="text-[var(--text-muted)]">Push completed SOAP notes and suggested codes back to your EHR instantly.</p>
</div>
</div>

<div className="mt-10 space-y-3">

<div className="flex text-purple-950 bg-white/70 border-white border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-sm backdrop-blur-md items-center justify-between">
  Sync SOAP Note</div>

<div className="flex text-purple-950 bg-white/40 border-white/60 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm items-center justify-between">Export ICD-10 codes</div>

<div className="flex text-purple-950 bg-white/40 border-white/60 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm items-center justify-between">Queue CPT Add-ons</div>
</div>
</div>

<div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll transition-all duration-1000 group gap-6 rounded-[2rem] pt-10 pr-10 pb-10 pl-10 gap-x-6 gap-y-6">

<div className="">
<div className="flex bg-blue-300/10 w-14 h-14 rounded-full mb-6 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-audio-lines lucide-globe w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="audio-lines" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(147, 51, 234)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path></svg>
</div>

<h3 className="text-2xl font-semibold text-purple-900 mb-2">Ambient Audio Engine</h3>

<p className="text-slate-500 max-w-lg">Medical-grade, dictation-free capture that isolates your clinical conversation from background facility noise in real-time.</p>
</div>

<div className="flex flex-col md:flex-row gap-5 md:h-48 h-auto mt-4 gap-x-5 gap-y-5">

<div className="flex-[2] bg-white/60 border border-white/80 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-sm min-h-[160px]">
<svg className="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 15,30 L 40,60 L 65,35 L 85,75" fill="none" stroke="#a855f7" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<path className="" d="M 40,60 L 55,85" fill="none" stroke="#a855f7" stroke-dasharray="2 2" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-[30%] left-[15%] w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-white"></div>
<div className="absolute top-[60%] left-[40%] w-5 h-5 rounded-full bg-white border-2 border-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center">
<div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
<div className="w-2 h-2 bg-purple-500 rounded-full absolute"></div>
</div>
<div className="absolute top-[35%] left-[65%] w-3 h-3 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] border border-white"></div>
<div className="absolute top-[75%] left-[85%] w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-white"></div>
<div className="absolute top-[85%] left-[55%] w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>

<div className="flex-[1] flex flex-col gap-4">
<div className="bg-white/60 border border-white/80 rounded-xl p-5 flex-1 flex flex-col justify-center shadow-sm">
<div className="uppercase text-xs font-medium text-slate-500 tracking-wider mb-1">NOTE GENERATION</div>
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5 items-baseline">
<span className="text-3xl font-semibold text-slate-800">45</span>
<span className="text-sm font-medium text-purple-500">sec</span>
</div>
<div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[15%] rounded-full"></div>
</div>
</div>
<div className="flex-1 flex flex-col bg-white/60 border-white/80 border rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-sm justify-center">
<div className="uppercase text-xs font-medium text-slate-500 tracking-wider mb-1">SPECIALTY TERMS</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-slate-800">14,000+</span>
</div>
<div className="mt-3 flex gap-1.5">
<div className="h-2 flex-1 bg-purple-500/20 rounded-full"></div>
<div className="h-2 flex-1 bg-purple-500/40 rounded-full"></div>
<div className="h-2 flex-1 bg-purple-500/60 rounded-full"></div>
<div className="h-2 flex-[0.5] bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="reveal-on-scroll text-center mb-20">
<div className="inline-flex gap-2 text-[11px] uppercase font-semibold text-slate-500 tracking-widest bg-slate-100/50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">The Agentic Difference</div>
<h2 className="md:text-7xl leading-[0.95] text-5xl font-medium text-purple-900 tracking-tighter mt-8">More than a scribe. A clinical partner.</h2>
<p className="leading-relaxed text-xl font-light text-slate-500 max-w-2xl mt-6 mr-auto ml-auto">Go beyond generic transcription. ChartMate actively audits your notes, structures your data, and defends your revenue before you even sign the chart.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-x-6 gap-y-6">

<div className="md:col-span-8 relative group rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-xl overflow-hidden hover:bg-white/60 transition-all duration-700 shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-10 md:p-12 flex flex-col md:flex-row gap-12 h-full relative z-10">
<div className="flex flex-col md:w-1/2 justify-between">
<div className="">
<div className="flex items-center gap-2 text-slate-900 font-medium text-sm mb-4">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
</svg>
<span className="">01</span>
</div>
<h3 className="md:text-4xl text-3xl font-medium text-purple-900 tracking-tighter mb-4">Perfect SOAP Formatting</h3>
<p className="leading-relaxed text-slate-500">Automatically structures fragmented patient conversations into rigorous, SNF-compliant SOAP notes. Zero copy-pasting required.</p>
</div>
<div className="mt-8 md:mt-0">
<div className="flex gap-2 uppercase text-xs font-semibold text-slate-400 tracking-wider gap-x-2 gap-y-2 items-center">NATIVE EHR SYNC</div>
</div>
</div>
<div className="md:w-1/2 relative min-h-[240px] md:min-h-full">

<div className="absolute inset-0 bg-white/55 border border-white/80 rounded-2xl overflow-hidden flex flex-col shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
<div className="h-8 border-b border-slate-100 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="p-4 grid grid-cols-2 gap-3 h-full">
<div className="animate-pulse bg-purple-200 w-full h-full rounded-lg" style={{animationDuration: '4s'}}></div>
<div className="flex flex-col gap-3 h-full">
<div className="bg-slate-50 border border-slate-100 rounded-lg h-1/3 w-full"></div>
<div className="bg-slate-50 border border-slate-100 rounded-lg h-2/3 w-full relative overflow-hidden">
<div className="absolute top-3 left-3 right-3 h-2 bg-slate-200 rounded-full w-1/2"></div>
<div className="absolute top-7 left-3 right-3 h-2 bg-slate-100 rounded-full w-3/4"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-4 w-2/3 h-1/2 bg-white rounded-xl border border-slate-100 p-4 flex flex-col gap-3 shadow-[0_24px_70px_rgba(15,23,42,0.10)] transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-slate-100"></div>
<div className="w-12 h-2 bg-slate-100 rounded-full"></div>
</div>
<div className="h-2 bg-slate-50 rounded-full w-full"></div>
<div className="h-2 bg-slate-50 rounded-full w-2/3"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 relative group rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-xl overflow-hidden hover:bg-white/60 transition-all duration-700 flex flex-col shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="absolute inset-0 bg-gradient-to-bl from-white/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex flex-col z-10 h-full pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex items-center gap-2 text-slate-900 font-medium text-sm mb-6">
<svg aria-hidden="true" className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path className="" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path className="" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 1 0 4Z"></path>
<path d="M17 12h5"></path>
<path d="M2 12h5"></path>
<path d="M19.07 4.93 15.54 8.46"></path>
<path d="M8.46 15.54 4.93 19.07"></path>
<path d="M4.93 4.93l3.53 3.53"></path>
<path className="" d="M15.54 15.54l3.53 3.53"></path>
</svg>
<span className="">02</span>
</div>
<h3 className="text-3xl font-medium text-purple-900 tracking-tighter mb-4">Proactive Risk Alerts</h3>
<p className="leading-relaxed text-slate-500 mb-10">Missed a depression screening? Forgot to grade the edema? ChartMate pinpoints missing MEAT criteria and flags it instantly to prevent audit kickbacks.</p>
<div className="mt-auto relative w-full aspect-square max-h-[200px] mx-auto flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-slate-200/50 scale-75 group-hover:scale-90 transition-transform duration-700"></div>
<div className="absolute inset-0 rounded-full border border-slate-200/50 scale-50 group-hover:scale-75 transition-transform duration-700 delay-75"></div>
<div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center relative z-10 group-hover:rotate-12 transition-transform duration-500 shadow-[0_22px_60px_rgba(15,23,42,0.22)]">
<svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
</svg>
</div>
<div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
<div className="w-3 h-3 bg-slate-300 rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 relative group rounded-[2.5rem] bg-slate-900 text-white border border-slate-800 overflow-hidden transition-all duration-700 shadow-[0_22px_70px_rgba(15,23,42,0.22)] hover:shadow-[0_32px_95px_rgba(15,23,42,0.28)]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

<div className="z-10 flex flex-col min-h-[340px] pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex items-center gap-2 text-slate-400 font-medium text-sm mb-6">
<svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 6h16"></path>
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
</svg>
<span className="">03</span>
</div>
<h3 className="text-3xl font-medium text-white tracking-tighter mb-4">Penalty Protection</h3>
<p className="leading-relaxed text-slate-400 max-w-[34ch]">Stop the 9% Medicare penalty. Our engine actively captures MIPS measures and prevents clawbacks tied to "insufficient documentation."</p>

<div className="mt-auto w-full pt-8">
<div className="w-full h-28 relative">
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-800 to-transparent rounded-t-xl opacity-50"></div>
<div className="relative flex items-end justify-center gap-2 h-full pb-3">
<div className="w-4 bg-slate-700 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-500"></div>
<div className="w-4 bg-slate-600 rounded-t-sm h-[70%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-4 bg-white rounded-t-sm h-[50%] group-hover:h-[80%] transition-all duration-500 delay-100 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-4 bg-slate-600 rounded-t-sm h-[60%] group-hover:h-[40%] transition-all duration-500 delay-150"></div>
<div className="w-4 bg-slate-700 rounded-t-sm h-[30%] group-hover:h-[45%] transition-all duration-500 delay-200"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 relative group rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-xl overflow-hidden hover:bg-white/60 transition-all duration-700 p-10 flex flex-col justify-between shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="">
<div className="flex items-center gap-2 text-slate-900 font-medium text-sm mb-6">
<svg aria-hidden="true" className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="">06</span>
</div>
<h3 className="text-3xl font-medium text-purple-900 tracking-tighter mb-4">SNF-Grade Security</h3>
<p className="leading-relaxed text-slate-500 mb-8">SOC2 Type II and fully HIPAA compliant. We are the "Switzerland" of data—we never train public AI models on your sensitive patient records.</p>
</div>
<div className="relative w-full h-32 flex items-center justify-center">
<div className="group-hover:scale-100 transition-transform duration-700 bg-gradient-to-t from-[#ffffff] to-[#edeef2] border-slate-50 rounded-full absolute top-0 right-0 bottom-0 left-0 scale-50"></div>
<div className="z-10 flex group-hover:rotate-6 transition-transform duration-500 bg-gradient-to-br from-slate-100 to-white w-16 h-16 border-white border rounded-2xl relative shadow-[0_18px_55px_rgba(15,23,42,0.10)] items-center justify-center">
<svg aria-hidden="true" className="text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
</div>

<div className="md:col-span-4 relative group rounded-[2.5rem] bg-slate-900 text-white border border-slate-800 overflow-hidden transition-all duration-700 flex flex-col p-10 shadow-[0_22px_70px_rgba(15,23,42,0.22)] hover:shadow-[0_32px_95px_rgba(15,23,42,0.28)]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex gap-2 text-sm font-medium text-slate-400 mb-6 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
<span className="">07</span>
</div>
<h3 className="text-3xl font-medium text-white tracking-tighter mb-4">Seamless Write-Back</h3>
<p className="leading-relaxed text-slate-400 mb-8">True bi-directional integration. Push completed, compliant notes and suggested ICD-10 codes directly into PointClickCare with a single click.</p>
</div>
<div className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 font-mono text-xs text-slate-300 overflow-hidden group-hover:bg-slate-800 transition-colors duration-500 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
<div className="flex gap-2 mb-2 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<p className="text-purple-400">
                  POST
                  <span className="text-white">/v1/events</span>
</p>
<p className="mt-1 text-slate-500">{</p>
<p className="pl-4 text-emerald-400">
                  "status"
                  <span className="text-slate-500">:</span>
<span className="text-white">"active"</span>
</p>
<p className="text-slate-500">}</p>
</div>
</div>
</div>
</div>
</section><div className="reveal-on-scroll text-center mb-20">
<div className="inline-flex gap-2 text-[11px] uppercase font-semibold text-slate-500 tracking-widest bg-slate-100/50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">THE AUTONOMOUS ECOSYSTEM</div>
<h2 className="md:text-7xl leading-[0.95] text-5xl font-medium text-purple-900 tracking-tighter mt-8">One Agent. Complete Workflow Harmony.</h2>
<p className="leading-relaxed text-xl font-light text-slate-500 max-w-2xl mt-6 mr-auto ml-auto">ChartMate sits at the center of your clinical workflow—listening to the patient, analyzing past records, and syncing to your EHR in one continuous, secure loop.</p>
</div>

<section className="min-h-screen flex overflow-hidden bg-slate-50/30 pt-32 pb-32 relative items-center justify-center">
<style className="">
          @keyframes orbit-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit-counter {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .animate-orbit-track {
            animation: orbit-spin 28s linear infinite;
          }
          .animate-orbit-card {
            animation: orbit-counter 28s linear infinite;
          }
        </style>
<div className="md:scale-75 lg:scale-100 transition-transform duration-700 ease-out flex w-[800px] h-[800px] relative scale-[0.45] items-center justify-center">

<div className="flex z-10 bg-white w-32 h-32 border-slate-100 border-4 ring-2 rounded-full relative shadow-[0_0_100px_rgba(14,165,233,0.25)] items-center justify-center">
<div className="animate-pulse bg-violet-500/50 border-0 rounded-none absolute top-10 right-10 bottom-10 left-10"></div>
<div className="flex font-semibold text-gray-950 tracking-wide bg-gradient-to-tr from-white to-slate-50 h-20 border-0 ring-0 rounded-full relative shadow-sm items-center justify-center">Chart Mate</div>
</div>

<div className="border-slate-900/[0.03] animate-orbit-track opacity-100 border rounded-full absolute top-0 right-0 bottom-0 left-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-blue-500" data-lucide="shield-check"></i>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-800 tracking-tight">Audit Shield</h3>
<p className="text-xs font-medium text-slate-500">Real-time MEAT validation.</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100/50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-purple-500" data-lucide="zap"></i>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-800 tracking-tight">EHR Sync</h3>
<p className="text-xs font-medium text-slate-500">1-click PointClickCare export.</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100/50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-amber-500" data-lucide="database"></i>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-800 tracking-tight">Deep Context</h3>
<p className="text-xs font-medium text-slate-500">Analyzes past labs &amp; meds.</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-24 flex items-center justify-center">
<div className="animate-orbit-card w-full">
<div className="bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-default group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100/50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-emerald-500" data-lucide="globe"></i>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-800 tracking-tight">Ambient Listen</h3>
<p className="text-xs font-medium text-slate-500">Filters out facility noise.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-[180px] border border-slate-900/[0.02] rounded-full pointer-events-none"></div>
<div className="absolute inset-[280px] border border-slate-900/[0.015] rounded-full pointer-events-none"></div>
</div>
</section>

<section className="md:py-48 overflow-hidden is-inview bg-slate-50/30 pt-32 pb-32 relative" id="liquid-timeline">
<style>
    @keyframes breathe {

      0%,
      100% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.04);
      }
    }

    .animate-breathe {
      animation: breathe 6s ease-in-out infinite;
    }

    .shadow-skeuo {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03), 0 12px 24px rgba(0, 0, 0, 0.02),
        inset 0 1px 0 rgba(255, 255, 255, 1);
    }

    .shadow-skeuo:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05), 0 20px 40px rgba(0, 0, 0, 0.03),
        inset 0 1px 0 rgba(255, 255, 255, 1);
    }

    /* ---- View-based timeline animation (clean + subtle) ---- */
    #liquid-timeline .tl-title,
    #liquid-timeline .tl-step {
      opacity: 0;
      transform: translateY(14px);
      filter: blur(6px);
      transition: opacity 900ms ease, transform 900ms ease, filter 900ms ease;
      will-change: opacity, transform, filter;
    }

    #liquid-timeline.is-inview .tl-title {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }

    #liquid-timeline .tl-step.is-inview {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }

    /* spine "draw" */
    #liquid-timeline .tl-spine {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1px;
      transform: translateX(-50%);
      background: rgba(226, 232, 240, 0.35);
      overflow: hidden;
      display: none;
    }

    @media (min-width: 768px) {
      #liquid-timeline .tl-spine {
        display: block;
      }
    }

    #liquid-timeline .tl-spine::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom,
          rgba(148, 163, 184, 0),
          rgba(148, 163, 184, 0.55),
          rgba(148, 163, 184, 0));
      transform-origin: top;
      transform: scaleY(0);
      filter: blur(0.2px);
      transition: transform 1300ms cubic-bezier(0.2, 0.8, 0.2, 1);
      will-change: transform;
    }

    #liquid-timeline.is-inview .tl-spine::after {
      transform: scaleY(1);
    }

    /* node "wake" when its step enters */
    #liquid-timeline .tl-node {
      transition: transform 700ms ease, box-shadow 900ms ease, border-color 900ms ease;
      will-change: transform, box-shadow;
    }

    #liquid-timeline .tl-step.is-inview .tl-node {
      transform: scale(1.08);
      border-color: rgba(226, 232, 240, 0.95);
      box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06),
        inset 0 2px 4px rgba(255, 255, 255, 0.95);
    }

    /* soft "halo" ring appears on active step */
    #liquid-timeline .tl-halo {
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 900ms ease, transform 900ms ease;
    }

    #liquid-timeline .tl-step.is-inview .tl-halo {
      opacity: 1;
      transform: scale(1);
    }

    /* optional: respect reduced motion */
    @media (prefers-reduced-motion: reduce) {

      #liquid-timeline .tl-title,
      #liquid-timeline .tl-step {
        opacity: 1 !important;
        transform: none !important;
        filter: none !important;
        transition: none !important;
      }

      #liquid-timeline .tl-spine::after {
        transform: scaleY(1) !important;
        transition: none !important;
      }

      #liquid-timeline .tl-node,
      #liquid-timeline .tl-halo {
        transition: none !important;
      }
    }
  </style>

<div className="max-w-6xl mx-auto px-6 relative z-20 text-center mb-16 md:mb-24 tl-title">
<div className="inline-flex gap-2 text-[11px] uppercase font-semibold text-slate-500 tracking-widest bg-white/70 border-slate-200/70 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-md gap-x-2 gap-y-2 items-center">EFFORTLESS WORKFLOW</div>
<h2 className="md:text-6xl leading-[0.95] text-4xl font-semibold text-purple-900 tracking-tighter mt-6">A calm workflow from room to record.</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-2xl mt-4 mr-auto ml-auto">Walk in, treat your patient, and let ChartMate handle the compliance and data entry behind the scenes.</p>
</div>

<div aria-hidden="true" className="tl-spine" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)'}}></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-40 pointer-events-none">
</div>
<div className="flex flex-col md:gap-40 z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative gap-x-24 gap-y-24">

<div className="tl-step group grid grid-cols-1 md:grid-cols-2 gap-8 is-inview relative gap-x-8 gap-y-8 items-start" style={{transitionDelay: '0ms'}}>

<div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
<div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
<div className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500">
<div className="w-3 h-3 bg-slate-300 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)] group-hover:bg-slate-400 transition-colors">
</div>
</div>
</div>

<div className="md:text-right md:pr-24 md:mt-0 mt-8">
<div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-skeuo border border-slate-100/80 transition-transform duration-500 group-hover:-translate-y-2">

<div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
</div>
<div className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.25em] mb-4">STEP 01</div>
<h3 className="text-3xl font-bold text-purple-800 tracking-tight mb-4">Ambient Capture</h3>
<p className="leading-relaxed text-lg font-light text-slate-500">ChartMate listens passively to your natural patient conversation, automatically filtering out facility alarms and background hallway noise.</p>
</div>
</div>
<div className="hidden md:block"></div>
</div>

<div className="tl-step group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start" style={{transitionDelay: '120ms'}}>
<div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
<div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
<div className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500" style={{animationDelay: '1.5s'}}>
<div className="w-3 h-3 bg-slate-300 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)] group-hover:bg-slate-400 transition-colors">
</div>
</div>
</div>
<div className="hidden md:block"></div>
<div className="md:text-left md:pl-24 md:mt-0 mt-8">
<div className="md:p-10 transition-transform duration-500 group-hover:-translate-y-2 bg-white border-slate-100/80 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-skeuo">
<div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
</div>
<div className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.25em] mb-4">STEP 02</div>
<h3 className="text-3xl font-bold text-purple-800 tracking-tight mb-4">Agentic Drafting &amp; Audit</h3>
<p className="leading-relaxed text-lg font-light text-slate-500">The AI cross-references the transcript with the patient’s EHR history, drafting a structured SOAP note while instantly flagging missing MEAT criteria.</p>
</div>
</div>
</div>

<div className="tl-step group grid grid-cols-1 md:grid-cols-2 gap-8 relative gap-x-8 gap-y-8 items-start" style={{transitionDelay: '240ms'}}>
<div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
<div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
<div className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500" style={{animationDelay: '3s'}}>
<div className="w-3 h-3 bg-slate-300 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)] group-hover:bg-slate-400 transition-colors">
</div>
</div>
</div>
<div className="md:text-right md:pr-24 md:mt-0 mt-8">
<div className="md:p-10 transition-transform duration-500 group-hover:-translate-y-2 bg-white border-slate-100/80 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-skeuo">
<div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
</div>
<div className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.25em] mb-4">STEP 03</div>
<h3 className="text-3xl font-bold text-purple-800 tracking-tight mb-4">One-Click Sync</h3>
<p className="leading-relaxed text-lg font-light text-slate-500">Review the completed note, accept the suggested ICD-10, CPT, and MIPS codes, and push the compliant chart directly into PointClickCare with zero manual copy-pasting.</p>
</div>
</div>
<div className="hidden md:block"></div>
</div>
</div>

</section>

<section className="overflow-hidden md:pt-32 md:pb-32 text-xs font-light text-slate-500 bg-slate-50/50 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60"></div>
</div>

<div className="relative z-10 max-w-3xl mx-auto text-center mb-10 md:mb-16">
<div className="inline-flex gap-2 text-[10px] uppercase cursor-default font-semibold text-slate-500 tracking-widest bg-white/80 border-slate-200/60 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center">THE AGENT IN ACTION</div>
<h2 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-purple-900 tracking-tighter mt-6">Inside the Clinical Engine.</h2>
<p className="leading-relaxed text-lg font-light text-slate-500 max-w-xl mt-4 mr-auto ml-auto">Hover to see how ChartMate processes, structures, and protects your documentation.</p>
</div>

<div className="md:h-[600px] flex group cursor-pointer w-full h-[500px] max-w-[1000px] z-10 mr-auto ml-auto relative perspective-[1200px] items-center justify-center" id="gallery-interaction" onclick="this.classList.toggle('active')">
<style>
            /* Spring easing for organic motion */
            .transition-spring {
              transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            /* Desktop Scatter States (Hover or Active) */
            @media (min-width: 768px) {
              #gallery-interaction:hover .card-scatter-1, #gallery-interaction.active .card-scatter-1 {
                transform: translate(-130%, -100%) rotate(-4deg);
                opacity: 1;
              }
              #gallery-interaction:hover .card-scatter-2, #gallery-interaction.active .card-scatter-2 {
                transform: translate(130%, -90%) rotate(3deg);
                opacity: 1;
              }
              #gallery-interaction:hover .card-scatter-3, #gallery-interaction.active .card-scatter-3 {
                transform: translate(-110%, 100%) rotate(2deg);
                opacity: 1;
              }
              #gallery-interaction:hover .card-scatter-4, #gallery-interaction.active .card-scatter-4 {
                transform: translate(110%, 95%) rotate(-3deg);
                opacity: 1;
              }
            }

            /* Mobile Stack States (Active only) */
            @media (max-width: 767px) {
              #gallery-interaction.active .card-scatter-1 {
                transform: translateY(-130px) scale(0.95);
                opacity: 1;
                z-index: 40;
              }
              #gallery-interaction.active .card-scatter-2 {
                transform: translateY(130px) scale(0.95);
                opacity: 1;
                z-index: 40;
              }
              #gallery-interaction.active .card-scatter-3 {
                transform: translateY(-240px) scale(0.85);
                opacity: 1;
                z-index: 30;
              }
              #gallery-interaction.active .card-scatter-4 {
                transform: translateY(240px) scale(0.85);
                opacity: 1;
                z-index: 30;
              }
            }
          </style>

<div className="z-50 md:w-[360px] transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:scale-105 group-hover:-translate-y-2 bg-white/70 w-[300px] border-white/80 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">INTELLIGENT FORMATTING</span>
<div className="w-8 h-8 rounded-full bg-slate-100/50 border border-white flex items-center justify-center text-slate-400">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
</div>
</div>
<h3 className="text-2xl font-semibold text-purple-800 tracking-tight">SNF-Specific SOAP Notes</h3>
<p className="leading-relaxed text-sm font-light text-slate-500 mt-3">Dynamically structures messy conversations into rigorous Subjective, Objective, Assessment, and Plan formats. It auto-pulls active meds and vitals from your EHR.</p>

<div className="overflow-hidden flex flex-col bg-white/50 w-full h-32 border-white/60 border rounded-2xl mt-8 pt-3 pr-3 pb-3 pl-3 relative shadow-inner gap-x-2 gap-y-2">
<div className="w-1/2 h-2 bg-slate-200/80 rounded-full"></div>
<div className="flex-1 overflow-hidden bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative">
<div className="absolute top-3 left-3 right-3 h-2 bg-white rounded-full w-2/3 shadow-sm"></div>
</div>
</div>
</div>

<div className="card-scatter-1 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring z-40 pointer-events-none group-hover:pointer-events-auto">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">COMPLIANCE</span>
<div className="w-7 h-7 rounded-full bg-blue-50/50 border border-blue-100/50 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
</div>
</div>
<h4 className="text-lg font-semibold text-purple-800 tracking-tight">Real-Time MEAT Flags</h4>
<div className="flex gap-3 text-sm font-thin text-slate-500 bg-white/40 border-white/50 border rounded-xl mt-4 pt-2.5 pr-2.5 pb-2.5 pl-2.5 gap-x-3 gap-y-3 items-center">Instantly alerts you if your assessment lacks Monitor, Evaluate, Assess, or Treat criteria before you sign off on the chart.</div>
</div>

<div className="card-scatter-2 md:w-[280px] transition-all duration-700 transition-spring delay-75 z-30 pointer-events-none group-hover:pointer-events-auto bg-white/60 opacity-0 w-[260px] border-white/60 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 absolute shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">CONTEXT</span>
<div className="w-7 h-7 rounded-full bg-purple-50/50 border border-purple-100/50 flex items-center justify-center">
<svg className="text-purple-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
</div>
<h4 className="text-lg font-semibold text-purple-700 tracking-tight">Deep EHR Ingestion</h4>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="flex-1 overflow-hidden bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative"></div>
<div className="aspect-square bg-white/50 border-white/60 border rounded-lg"></div>
</div>
</div>

<div className="card-scatter-3 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring delay-100 z-20 pointer-events-none group-hover:pointer-events-auto">
<div className="flex mb-4 items-center justify-between">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">REVENUE</span>
<div className="w-7 h-7 rounded-full bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
</div>
<h4 className="text-lg font-semibold text-purple-800 tracking-tight">CPT &amp; MIPS Optimization</h4>
<div className="mt-4 flex items-end gap-1.5 h-10 px-1">
<div className="bg-slate-500/20 w-1/4 h-[40%] rounded-t-sm"></div>
<div className="bg-slate-500/40 w-1/4 h-[70%] rounded-t-sm"></div>
<div className="bg-slate-500/30 w-1/4 h-[50%] rounded-t-sm"></div>
<div className="bg-slate-500/50 w-1/4 h-[90%] rounded-t-sm"></div>
</div>
</div>

<div className="card-scatter-4 md:w-[280px] transition-all duration-700 transition-spring delay-150 z-10 pointer-events-none group-hover:pointer-events-auto bg-white/60 opacity-0 w-[260px] border-white/60 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 absolute shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl">
<div className="flex mb-4 items-center justify-between">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">WORKFLOW</span>
<div className="w-7 h-7 rounded-full bg-amber-50/50 border border-amber-100/50 flex items-center justify-center">
<svg className="text-amber-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
</div>
<h4 className="text-lg font-semibold text-purple-800 tracking-tight">1-Click Write-Back</h4>
<div className="overflow-hidden flex flex-col bg-white/50 w-full h-12 border-white/60 border rounded-full mt-8 pt-3 pr-3 pb-3 pl-3 relative shadow-inner gap-x-2 gap-y-2">Export the finalized, compliant chart directly into your facility's EHR (like PointClickCare) with zero manual copy-pasting.</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden text-slate-500 bg-white/5 border-white/30 pt-24 pb-24 backdrop-blur-sm">
<div className="marquee-track whitespace-nowrap" style={{maskImage: 'linear-gradient(90deg, transparent, black 30%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 30%, black 60%, transparent)'}}>
<span className="text-[8rem] text-[var(--primary)] font-black opacity-25 mr-12 ml-12">CHARTMATE  Effortless Notes,Elevated care</span>
<span className="text-[8rem] text-[var(--primary)] font-black opacity-5 mr-12 ml-12">CHART MATE</span>
<span className="text-[8rem] font-black text-[var(--primary)] opacity-5 mx-12">
            FUTURE INTERFACES
          </span>
<span className="text-[8rem] font-black text-[var(--primary)] opacity-5 mx-12">
            LIQUID SYSTEMS
          </span>
</div>
</section>

<section className="max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">

<div className="text-center mb-20 md:mb-24 reveal-on-scroll">
<h2 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-purple-900 tracking-tighter mb-6">The Clinical Agent Difference</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-2xl mr-auto ml-auto">Passive scribes create transcripts. ChartMate executes clinical workflows—synthesizing data, managing state, and ensuring compliance in real-time.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[600px]">

<div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="">

<div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
<svg aria-hidden="true" className="" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="22">
<rect height="18" rx="3" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<h3 className="text-3xl font-semibold text-purple-800 tracking-tight mb-4">Patient-First Presence</h3>
<p className="leading-relaxed text-slate-500">The agent ambiently captures the raw encounter, transforming unfiltered speech into structured, compliant SOAP notes instantly, so you can maintain uninterrupted focus on the patient, not the keyboard.</p>
</div>

<div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden p-5 flex flex-col gap-3 shadow-inner group-hover:bg-white/70 transition-colors">
<div className="w-full h-1/4 bg-slate-200/50 rounded-lg border border-slate-300/20"></div>
<div className="flex-1 flex gap-3">
<div className="w-1/3 bg-slate-200/50 rounded-lg border border-slate-300/20"></div>
<div className="flex-1 bg-slate-100/50 rounded-lg border border-slate-300/20 flex flex-col gap-2 p-2">
<div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
<div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
<div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel flex flex-col group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll delay-100 hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)] rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 shadow-[0_18px_55px_rgba(15,23,42,0.06)] justify-between">
<div className="">

<div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
<svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="22">
<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
<path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
<path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
</svg>
</div>
<h3 className="text-3xl font-semibold text-purple-800 tracking-tight mb-4">State-Aware Intelligence</h3>
<p className="leading-relaxed text-slate-500">More than a scribe, our AI understands context across visits. It recognizes discussed labs, active medications, and past history, autonomously placing them into today's note and flagging relevant MIPS measures.</p>
</div>

<div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner group-hover:bg-white/70 transition-colors">
<div className="w-full px-8">
<div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full w-1/3 bg-slate-900/80 rounded-full"></div>
</div>
<div className="mt-6 flex justify-between items-center relative">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
<div className="w-2 h-2 bg-slate-300 rounded-full"></div>
</div>
<div className="w-10 h-10 rounded-full bg-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.18)] flex items-center justify-center scale-110 ring-4 ring-white/60">
<svg aria-hidden="true" fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewbox="0 0 24 24" width="16">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
<div className="w-2 h-2 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll delay-200 shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
<div className="">

<div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
<svg aria-hidden="true" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="22">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-3xl font-semibold text-purple-800 tracking-tight mb-4">Audit-Ready Accuracy</h3>
<p className="leading-relaxed text-slate-500">Gain total chart confidence. Our visual synthesis engine provides a hyper-precise documentation trail with linked sources, creating defensible, compliant medical records that exceed regulatory standards.</p>
</div>

<div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-inner group-hover:bg-white/70 transition-colors flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-50/70 to-white/70"></div>
<div className="relative w-28 h-20 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] transform -rotate-12 translate-y-2 translate-x-2 z-10 transition-transform duration-700 group-hover:-rotate-[15deg] group-hover:translate-x-0"></div>
<div className="relative w-28 h-20 bg-white/60 backdrop-blur-xl border border-white/80 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] transform rotate-6 -translate-x-4 -translate-y-2 z-20 transition-transform duration-700 group-hover:rotate-[10deg] group-hover:-translate-y-4"></div>
</div>
</div>
</div>
</section>

<section className="flex flex-col text-center h-[80vh] pr-6 pl-6 relative items-center justify-center">
<div className="relative w-full max-w-[1000px] mx-auto z-20 mb-12 md:mb-16 flex-shrink-0">
<div className="relative bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center overflow-hidden group hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-500">

<div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:translate-x-1/4"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:-translate-x-1/4"></div>

<div className="z-10 flex flex-col relative items-center">
<div className="flex gap-1.5 mb-8 text-amber-400">
<i className="w-6 h-6 fill-current drop-shadow-sm" data-lucide="star"></i>
<i className="w-6 h-6 fill-current drop-shadow-sm" data-lucide="star"></i>
<i className="w-6 h-6 fill-current drop-shadow-sm" data-lucide="star"></i>
<i className="w-6 h-6 fill-current drop-shadow-sm" data-lucide="star"></i>
<i className="w-6 h-6 fill-current drop-shadow-sm" data-lucide="star"></i>
</div>
<blockquote className="leading-[1.15] text-2xl text-slate-900 tracking-tighter max-w-4xl mb-12 font-medium md:text-4xl lg:text-3xl">"I used to spend 2 hours every night catching up on charts. Now, I review and sign my notes in the hallway between patients. ChartMate gave me my evenings back, and my facility hasn't had a single compliance kickback."</blockquote>
<div className="flex items-center gap-5">
<div className="relative">
<img alt="Dr. Sarah Jenkins" className="md:w-20 md:h-20 bg-zinc-500 w-16 h-16 object-cover bg-center ring-white ring-4 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.08)] backdrop-blur-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/c6b8d79a-acd3-4af2-9c35-3c1508593f59/320w.png"/>
<div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-[#0A2540] rounded-full ring-2 ring-white flex items-center justify-center">
<svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>
<div className="text-left flex flex-col gap-0.5">
<span className="md:text-base text-sm font-medium text-slate-500">L. Carter, FNP, Attending NP, 120-bed SNF</span>
</div>
</div>
</div>
</div>

</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
<div className="w-32 h-32 rounded-full bg-blue-400/20 blur-[80px] absolute"></div>
<h2 className="text-[var(--primary)] md:text-7xl z-10 text-3xl font-bold text-purple-950 tracking-tighter relative bottom-10">Ready to practice medicine again?</h2>
<button className="cta-btn text-base text-purple-800 rounded-full pt-5 pr-12 pb-5 pl-12">Book Your Live Demo</button>
</section>

<footer className="z-10 bg-white/80 border-slate-200 border-t pt-20 pb-10 relative backdrop-blur-md">
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12">

<div className="md:col-span-4 flex flex-col items-start">
<a className="flex items-center gap-3 group" href="#">
<span className="text-xl font-bold text-slate-900 tracking-tight">CHARTMATE</span>
</a>
<p className="leading-relaxed text-slate-500 max-w-sm mt-6">The ambient AI assisstant built for post-acute care.</p>
</div>

<div className="md:col-span-2 md:col-start-7">
<h4 className="font-semibold text-slate-900 mb-6 tracking-tight">
                Product
              </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">Solutions</a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#"></a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">
                    Pricing
                  </a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">
                    Enterprise
                  </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-semibold text-slate-900 mb-6 tracking-tight">
                Resources
              </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">
                    Documentation
                  </a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#"></a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">Customer Stories</a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">Leadership Voices</a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-semibold text-slate-900 tracking-tight mb-6">About</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="">
<a className="hover:text-blue-600 transition-colors" href="#">ChartMate Story</a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="/end-user-license-agreement">Terms of Use</a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="/privacy-policy">Privacy policy</a>
</li>
<li className="">
<a className="hover:text-blue-600 transition-colors" href="/contact-us">Contact Us</a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 border-slate-100 border-t pt-8 gap-x-6 gap-y-6 items-center justify-between">
<p className="text-sm text-slate-400">© 2026 ChartMate. All rights reserved.</p>
<div className="flex gap-6 items-center">
<a aria-label="Twitter" className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a aria-label="GitHub" className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>
</main>







    </>
  );
}
