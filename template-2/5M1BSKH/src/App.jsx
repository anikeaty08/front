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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

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
    
}

{

        // Initialize Lucide icons
        lucide.createIcons();

        const canvasEl = document.querySelector("canvas#neuro");
        const heroSection = document.querySelector(".hero-section");
        const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
        const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
        let uniforms;
        const gl = initShader();
        setupEvents();
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        render();

        function initShader() {
            const vsSource = document.getElementById("vertShader").innerHTML;
            const fsSource = document.getElementById("fragShader").innerHTML;
            const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");
            if (!gl) console.error("WebGL not supported by your browser.");

            function createShader(gl, sourceCode, type) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, sourceCode);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error("Shader error: " + gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
            const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

            function createShaderProgram(gl, vertexShader, fragmentShader) {
                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.error("Shader link error: " + gl.getProgramInfoLog(program));
                    return null;
                }
                return program;
            }

            const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
            uniforms = getUniforms(shaderProgram);

            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for (let i = 0; i < uniformCount; i++) {
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }

            const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);
            const vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.useProgram(shaderProgram);

            const position = gl.getAttribLocation(shaderProgram, "a_position");
            gl.enableVertexAttribArray(position);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

            return gl;
        }

        function render() {
            const currentTime = performance.now();
            pointer.x += (pointer.tX - pointer.x) * 0.05;
            pointer.y += (pointer.tY - pointer.y) * 0.05;

            gl.uniform1f(uniforms.u_time, currentTime);
            gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1.0 - pointer.y / window.innerHeight);
            gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }

        function resizeCanvas() {
            canvasEl.width = window.innerWidth * devicePixelRatio;
            canvasEl.height = window.innerHeight * devicePixelRatio;
            canvasEl.style.width = window.innerWidth + "px";
            canvasEl.style.height = window.innerHeight + "px";
            gl.viewport(0, 0, canvasEl.width, canvasEl.height);
            gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
        }

        function setupEvents() {
            window.addEventListener("pointermove", (e) => {
                updateMousePosition(e.clientX, e.clientY);
            });
            window.addEventListener("touchmove", (e) => {
                updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            });
            window.addEventListener("click", (e) => {
                updateMousePosition(e.clientX, e.clientY);
            });

            function updateMousePosition(eX, eY) {
                pointer.tX = eX;
                pointer.tY = eY;
            }
        }

        // Smooth scroll behavior for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll-based effects
window.addEventListener('scroll', () => {
  // const scrolled = window.pageYOffset;
  // const rate     = scrolled * -0.5;

  // Parallax effect for background
  if (canvasEl) {
    // canvasEl.style.transform = `translateY(${rate}px)`;
  }
});


        // Initialize icons after DOM load
        document.addEventListener('DOMContentLoaded', function() {
            lucide.createIcons();
        });

        // Enhanced dropdown accessibility
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const trigger = dropdown.querySelector('.nav-dropdown-trigger');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            // Keyboard navigation
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
                    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                }
            });
        });

        // Performance optimization: Reduce shader complexity on mobile
        if (window.innerWidth < 768) {
            const fragShaderSource = document.getElementById("fragShader").innerHTML;
            const optimizedShader = fragShaderSource.replace('for (int j = 0; j < 15; j++)', 'for (int j = 0; j < 8; j++)');
            document.getElementById("fragShader").innerHTML = optimizedShader;
        }

        // Preload images for better performance
        const imageUrls = [
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/86.jpg',
            'https://randomuser.me/api/portraits/women/63.jpg'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });

        // Add loading state management
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Trigger fade-in animations
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 100);
            });
        });
    
}

{

        /* ────────────────────────────────────────────────────────────
           Logo cross-fade controller
           ──────────────────────────────────────────────────────────── */
        document.addEventListener('DOMContentLoaded', () => {
        
          /*                ↓ change these two values only ↓           */
          const INITIAL_DELAY = 500;   // ms until the very first swap
          const CYCLE_TIME    = 4000;   // ms between every later swap
          /* ---------------------------------------------------------- */
        
          let current = 1;
          const set1  = document.getElementById('logoSet1');
          const set2  = document.getElementById('logoSet2');
        
          function swap () {
            if (current === 1) {
              set1.classList.add('fade-out'); set1.classList.remove('fade-in');
              setTimeout(() => {
                set2.style.opacity = '1';
                set2.classList.add('fade-in'); set2.classList.remove('fade-out');
                current = 2;
              }, 400);               // keep in sync with .fade-out duration
            } else {
              set2.classList.add('fade-out'); set2.classList.remove('fade-in');
              setTimeout(() => {
                set2.style.opacity = '0';
                set1.classList.add('fade-in'); set1.classList.remove('fade-out');
                current = 1;
              }, 400);
            }
          }
        
          /* first swap, then start the repeating loop */
          setTimeout(() => {
            swap();                      // do it once
            setInterval(swap, CYCLE_TIME);
          }, INITIAL_DELAY);
        
          /* little "pop" on click (unchanged) */
          document.querySelectorAll('.logo-container').forEach(tile => {
            tile.addEventListener('click', () => {
              const svg = tile.querySelector('svg');
              svg.style.transform = 'scale(1.2)';
              setTimeout(() => svg.style.transform = '', 200);
            });
          });
        });
        
}

{

           /* ───── Card-flip logic ───── */
const cardswap = document.getElementById('cardswap');
if (cardswap){
  const cards = Array.from(cardswap.children);

  /* constants (put spacing first!) ------------------------------ */
  const dx = 60,   dy = 70;         // spacing between cards
  const w  = 500,  h  = 470;        // card size     (optional)
  const drop = dy * (cards.length - 1) + 20;  // how far the front card drops
  const skew  = 1;
  const delay = 8000;
            
              /* generate "slots" in 3-D space */
              function slot(i){return{ x:i*dx, y:-i*dy, z:-i*dx*1.5, zIndex:cards.length-i }}
            
              /* put one card in one slot immediately */
              function place(card,s){ gsap.set(card,{
                x:s.x,y:s.y,z:s.z,xPercent:-50,yPercent:-50,skewY:skew,zIndex:s.zIndex,force3D:true});
              }
            
              /* initial lay-out */
              let order = cards.map((_,i)=>i);
              order.forEach((idx,i)=>place(cards[idx],slot(i)));
            
              /* swap front→back */
              function flip(){
                const [front,...rest] = order;
                const tl = gsap.timeline();
                tl.to(cards[front], { y: `+=${drop}`, duration:.8, ease:'power1.inOut' });
                tl.addLabel('promote','-=0.36');
            
                rest.forEach((idx,i)=>{
                  const s = slot(i);
                  tl.set(cards[idx], {zIndex:s.zIndex},'promote');
                  tl.to(cards[idx], {x:s.x,y:s.y,z:s.z,skewY:skew,xPercent:-50,yPercent:-50,
                                     duration:.8,ease:'power1.inOut'},`promote+=${i*0.15}`);
                });
            
                const back = slot(cards.length-1);
                tl.addLabel('return','promote+=0.16')
                  .set(cards[front],{zIndex:back.zIndex},'return')
                  .set(cards[front],{x:back.x,z:back.z,skewY:skew,xPercent:-50,yPercent:-50},'return')
                  .to(cards[front],{y:back.y,duration:.8,ease:'power1.inOut'},'return')
                  .call(()=>order=[...rest,front]);
              }
            
              /* autoplay with hover pause */
              let timer = setInterval(flip,delay);
              cardswap.addEventListener('mouseenter',()=>clearInterval(timer));
              cardswap.addEventListener('mouseleave',()=>timer=setInterval(flip,delay));
            }

}

{

    /* ───── Spotlight effect for solution cards ───── */
    document.addEventListener('DOMContentLoaded', () => {
        const solutionCards = document.querySelectorAll('[data-card]');
        let spotlightColor = 'rgba(145, 64, 115, 0.25)'; // Initialize with purple spotlight

        // Convert hex to rgba
        function hexToRgba(hex, alpha = 0.25) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }

        // Update spotlight color
        function updateSpotlightColor(hex) {
            spotlightColor = hexToRgba(hex, 0.25);
            solutionCards.forEach(card => {
                card.style.setProperty('--spotlight-color', spotlightColor);
            });
        }

        // Initialize spotlight color on page load
        solutionCards.forEach(card => {
            card.style.setProperty('--spotlight-color', spotlightColor);
        });

        // Handle mouse move for spotlight effect
        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        // Add mouse move event listeners to all solution cards
        solutionCards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
        });
    });

}

{

    // Aurora shader for Our Solutions section
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('auroraCanvas');
        if (!canvas) return;

        // Aurora shader code
        const vertexShader = `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            precision highp float;
            
            uniform float uTime;
            uniform float uAmplitude;
            uniform vec3 uColorStops[3];
            uniform vec2 uResolution;
            uniform float uBlend;
            
            vec3 permute(vec3 x) {
                return mod(((x * 34.0) + 1.0) * x, 289.0);
            }
            
            float snoise(vec2 v){
                const vec4 C = vec4(
                    0.211324865405187, 0.366025403784439,
                    -0.577350269189626, 0.024390243902439
                );
                vec2 i  = floor(v + dot(v, C.yy));
                vec2 x0 = v - i + dot(i, C.xx);
                vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod(i, 289.0);
                
                vec3 p = permute(
                    permute(i.y + vec3(0.0, i1.y, 1.0))
                    + i.x + vec3(0.0, i1.x, 1.0)
                );
                
                vec3 m = max(
                    0.5 - vec3(
                        dot(x0, x0),
                        dot(x12.xy, x12.xy),
                        dot(x12.zw, x12.zw)
                    ), 
                    0.0
                );
                m = m * m;
                m = m * m;
                
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }
            
            void main() {
                vec2 uv = gl_FragCoord.xy / uResolution;
                
                vec3 color1 = uColorStops[0];
                vec3 color2 = uColorStops[1];
                vec3 color3 = uColorStops[2];
                
                vec3 rampColor;
                if (uv.x < 0.5) {
                    rampColor = mix(color1, color2, uv.x * 2.0);
                } else {
                    rampColor = mix(color2, color3, (uv.x - 0.5) * 2.0);
                }
                
                float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
                height = exp(height);
                height = (uv.y * 2.0 - height + 0.2);
                float intensity = 0.6 * height;
                
                float midPoint = 0.20;
                float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
                
                vec3 auroraColor = intensity * rampColor;
                
                gl_FragColor = vec4(auroraColor * auroraAlpha, auroraAlpha * 0.8);
            }
        `;

        // Initialize Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas,
            alpha: true, 
            antialias: true 
        });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setClearColor(0x000000, 0);

        // Create plane geometry
        const geometry = new THREE.PlaneGeometry(2, 2);
        
        // Create shader material
        const material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: 0.8 },
                uColorStops: { 
                    value: [
                        new THREE.Vector3(0.322, 0.153, 1.0),    // #5227FF (purple)
                        new THREE.Vector3(0.486, 1.0, 0.404),   // #7cff67 (green)
                        new THREE.Vector3(0.322, 0.153, 1.0)    // #5227FF (purple)
                    ]
                },
                uResolution: { value: new THREE.Vector2(canvas.offsetWidth, canvas.offsetHeight) },
                uBlend: { value: 0.5 }
            }
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Animation loop
        function animate(time) {
            requestAnimationFrame(animate);
            
            const t = time * 0.001;
            material.uniforms.uTime.value = t;
            
            renderer.render(scene, camera);
        }

        // Handle resize
        function onWindowResize() {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;
            
            renderer.setSize(width, height);
            material.uniforms.uResolution.value.set(width, height);
        }

        window.addEventListener('resize', onWindowResize);

        // Start animation
        animate(0);
    });

}
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
      

<section className="hero-section">
<canvas height="902" id="neuro" style={{width: `1440px`, height: `902px`}} width="1440"></canvas>

<nav className="nav-container relative z-50 w-full px-4 md:px-8 pt-8 pb-8 fade-in" style={{opacity: `1`}}>
<div className="max-w-7xl mx-auto">
<div className="nav-glass rounded-2xl pt-4 pr-6 pb-4 pl-6 backdrop-blur-none">
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="logo-glow text-3xl font-semibold text-white font-manrope">
                                awe<span className="text-white/60">.</span>
</span>
</div>
<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link hover:text-white transition-colors text-base font-normal text-white/90 tracking-tight" href="#">Home</a>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight nav-dropdown-trigger" href="#">
                                    Websites
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-layout-template dropdown-icon" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18"></rect><rect height="7" rx="1" width="9"></rect><rect height="7" rx="1" width="5"></rect></svg>
<div>
<div className="dropdown-title">Custom Websites</div>
<div className="dropdown-description">Bespoke web solutions</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-shopping-cart dropdown-icon" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21"></circle><circle cx="19" cy="21"></circle><path></path></svg>
<div>
<div className="dropdown-title">E-commerce</div>
<div className="dropdown-description">Online stores & shops</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-smartphone dropdown-icon" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
<div>
<div className="dropdown-title">Mobile Apps</div>
<div className="dropdown-description">iOS & Android apps</div>
</div>
</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-wrench dropdown-icon" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<div>
<div className="dropdown-title">Maintenance</div>
<div className="dropdown-description">Ongoing support</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-zap dropdown-icon" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<div>
<div className="dropdown-title">Performance</div>
<div className="dropdown-description">Speed optimization</div>
</div>
</a>
</div>
</div>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight nav-dropdown-trigger" href="#">
                                    Digital Marketing
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-search dropdown-icon" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
<div>
<div className="dropdown-title">SEO Services</div>
<div className="dropdown-description">Search optimization</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-target dropdown-icon" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
<div>
<div className="dropdown-title">PPC Advertising</div>
<div className="dropdown-description">Paid campaigns</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-users dropdown-icon" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
<div>
<div className="dropdown-title">Social Media</div>
<div className="dropdown-description">Platform management</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-mail dropdown-icon" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
<div>
<div className="dropdown-title">Email Marketing</div>
<div className="dropdown-description">Campaign automation</div>
</div>
</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-bar-chart-3 dropdown-icon" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<div>
<div className="dropdown-title">Analytics</div>
<div className="dropdown-description">Performance tracking</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-trending-up dropdown-icon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div>
<div className="dropdown-title">Growth Strategy</div>
<div className="dropdown-description">Business scaling</div>
</div>
</a>
</div>
</div>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight nav-dropdown-trigger" href="#">
                                    About
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-users dropdown-icon" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
<div>
<div className="dropdown-title">Who We Are</div>
<div className="dropdown-description">Our team & story</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-trending-up dropdown-icon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div>
<div className="dropdown-title">Client Results</div>
<div className="dropdown-description">Success stories</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-star dropdown-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<div>
<div className="dropdown-title">Our Reviews</div>
<div className="dropdown-description">Client testimonials</div>
</div>
</a>
</div>
</div>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Learn</a>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Contact</a>
</div>
<div className="flex items-center space-x-3">
<button className="glass-button group text-base">
<span className="shiny-text font-medium" style={{'--duration': `3s`}}>
                                    Work With Us
                                </span>
</button>
<button className="lg:hidden text-white/80 hover:text-white transition-colors p-2">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-[85vh] flex md:px-8 pt-16 pr-4 pb-20 pl-4 items-center">
<div className="max-w-7xl w-full flex flex-col text-center mr-auto ml-auto items-center">
<div className="text-center">
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-2" style={{opacity: `1`}}>
<span className="gradient-text">Your partn<span className="text-slate-50">ers</span></span> <span className="text-slate-50">in</span>
</h1>
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-6" style={{opacity: `1`}}>
<span className="text-slate-50">online growth.</span>
</h1>
<p className="md:text-xl max-w-xl fade-in fade-in-delay-2 text-lg text-white/80 font-manrope text-center mb-8 mx-auto" style={{opacity: `1`}}>
                        Our advanced neural networks enable you to build, deploy, and scale AI solutions that adapt to your unique business challenges.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3 justify-center" style={{opacity: `1`}}>
<a className="transition-all hover:bg-white/90 font-medium text-gray-900 text-center bg-white rounded-xl pt-4 pr-8 pb-4 pl-8" href="#">Explore Services</a>
<button className="glass-button">
<span className="shiny-text text-base font-medium" style={{'--duration': `4s`}}>
                                Get Started
                            </span>
</button>
</div>
<div className="mt-10 flex items-center gap-2 fade-in fade-in-delay-3 justify-center" style={{opacity: `1`}}>
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/44.jpg" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/men/86.jpg" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/63.jpg" />
</div>
<div className="text-sm text-white/70">Trusted by 350+ Australian business owners</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#181025] text-white font-geist relative overflow-hidden">
<div className="w-full max-w-6xl mx-auto px-8">

<div className="text-center mt-24 pt-18 opacity-0 animate-fade-in" style={{animation: `fadeInUp .8s ease-out .2s forwards`}}>
<h2 className="md:text-4xl text-xl font-light bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 pb-2">
          Turbocharged by industry leaders.
        </h2>
<p className="max-w-2xl text-lg text-gray-400 mx-auto mb-14">
          We partner with industry leaders to provide exceptional services.
        </p>
</div>

<div className="relative mb-24">

<div className="grid grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto logo-set fade-out" id="logoSet1">

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto logo-set absolute inset-0 fade-in" id="logoSet2">

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path className=""></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path className=""></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path className=""></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path className=""></path>
<path className=""></path>
<path className=""></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24">
<path className=""></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-[#160e22] py-24 font-inter pt-60">
<div className="w-full max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">

<div className="max-w-lg mb-12 lg:mb-0 mt-8">
<h2 className="md:text-4xl text-xl font-light bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-5 py-2">
          Stress free websites and digital marketing for small business.
        </h2>
<p className="text-indigo-100 text-lg leading-relaxed mb-8">
          Instantly demonstrate your client's #1 position with a beautiful,
          interactive 3-D browser stack — real search results, real websites,
          all in one seamless view.
        </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 hover:bg-white/5 transition-all duration-500 group">
<div className="space-y-3">
<h4 className="text-white font-manrope font-medium text-lg tracking-tight">Australian Owned</h4>
<p className="text-white/70 text-sm leading-relaxed">Proudly local business with deep roots in the Australian market</p>
</div>
<div className="mt-4 pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
<span className="text-white/50 text-xs font-medium">Established 2020</span>
</div>
</div>
</div>

<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 hover:bg-white/5 transition-all duration-500 group">
<div className="space-y-3">
<h4 className="text-white font-manrope font-medium text-lg tracking-tight">Australian Operated</h4>
<p className="text-white/70 text-sm leading-relaxed">Local team providing dedicated support and expertise</p>
</div>
<div className="mt-4 pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
<span className="text-white/50 text-xs font-medium">Sydney-based</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full lg:w-[500px] h-[670px] flex items-start justify-end">
<div className="relative cardswap-container perspective-900" id="cardswap" style={{width: `500px`, height: `470px`}}>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl shadow-lg flex flex-col cursor-pointer" style={{width: `500px`, height: `470px`}}>
<div className="browser-bar glass-effect">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">classonebuilders.com.au</span>
<span className="browser-url">classonebuilders.com.au</span>
</div>
<div className="browser-content">
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://classonebuilders.com.au/" title="classonebuilders.com.au"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl shadow-lg flex flex-col cursor-pointer" style={{width: `500px`, height: `470px`}}>
<div className="browser-bar glass-effect">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">maxisteel.com</span>
<span className="browser-url">maxisteel.com</span>
</div>
<div className="browser-content">
<iframe className="browser-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" src="https://maxisteel.com/" title="maxisteel.com"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl shadow-lg flex flex-col cursor-pointer" style={{width: `500px`, height: `470px`, fontFamily: `Roboto,Inter,sans-serif`}}>
<div className="browser-bar glass-effect">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">google.com</span>
<span className="browser-url">google.com/search</span>
</div>
<div className="flex flex-col h-full w-full bg-white rounded-b-xl overflow-hidden">
<div className="flex items-center px-5 py-2 border-b border-gray-200 rounded-t-xl" style={{minHeight: `60px`}}>
<img alt="Google" className="h-6 mr-5" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" style={{objectFit: `contain`}} />
<form aria-label="Google search" className="flex flex-1 items-center bg-[#f1f3f4] rounded-full pl-4 pr-1 py-1 border border-[#dfe1e5] focus-within:ring-2 focus-within:ring-blue-200" role="search">
<input aria-label="Search" className="flex-1 bg-transparent text-[15px] text-gray-900 font-normal outline-none border-none placeholder-gray-500" style={{fontFamily: `Roboto,Inter,sans-serif`}} value="best home builder sydney" />
<button aria-label="Search" className="ml-2 flex items-center justify-center bg-transparent border-none p-1" type="submit">
<svg fill="none" height="21" stroke="#4285F4" strokeWidth="2.2" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11"></circle><path></path></svg>
</button>
</form>
</div>
<div className="flex items-center px-6 pt-3 pb-1 text-[15px] gap-6 border-b border-gray-200">
<span className="text-[#1a73e8] font-medium border-b-2 border-[#1a73e8] pb-2 cursor-default select-none">All</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">Images</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">Maps</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">News</span>
<span className="text-[#5f6368] hover:text-[#1a73e8] font-normal pb-2 cursor-pointer">Videos</span>
</div>
<div className="px-6 py-2 text-xs text-[#5f6368">About 11,900,000 results (0.34 seconds)</div>
<div className="flex-1 overflow-y-auto px-6 pb-4" style={{maxHeight: `none`}}>
<div className="py-3 border-b border-[#ececec] group" tabindex="0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">our client</span>
<span className="text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 px-2 py-0.5 rounded-full text-xs font-medium shadow" style={{letterSpacing: `-0.02em`}}>#1</span>
<span className="text-[#5f6368] text-[12px] px-1 rounded bg-[#eef6ff] ml-1">Page 1</span>
</div>
<a className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2 hover:underline focus:underline outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all" href="#" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Sydney's Leading Home Builder | OurClient.com.au</a>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Award-winning home designs and builds in Sydney. Free consultations—start your dream home today with the trusted experts.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">competitor1.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Custom Home Builders Sydney | Competitor1</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Your trusted Sydney builders for custom homes and renovations.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">anotherbuilder.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Modern Home Builds | AnotherBuilder</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Modern home builds, renovations, and extensions.</div>
</div>
<div aria-hidden="true" className="py-3 group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">qualityhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Affordable, Quality New Builds | Quality Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Affordable, quality new builds in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">greenhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>Eco-Friendly Home Builders | Green Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Sustainable home construction and design in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">citybuilders.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: `Roboto,Inter,sans-serif`}}>City Builders Sydney | CityBuilders</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">High-quality city home builds and developments.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-[#181025] py-24 font-inter relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5" style={{zIndex: `2`}}></div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8">
<div className="text-center mb-20 fade-in" style={{opacity: `1`}}>
<h2 className="md:text-4xl text-xl font-light bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
                Our Solutions
            </h2>
<p className="max-w-2xl text-lg text-gray-400 mx-auto leading-relaxed">
                Comprehensive digital solutions designed to elevate your business and drive measurable results.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group fade-in fade-in-delay-1" style={{opacity: `1`}}>
<div aria-label="Websites Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="websites" style={{'--spotlight-color': `rgba(145, 64, 115, 0.30)`}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="monitor-smartphone"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                Websites
                            </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Conversion focused</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                            Custom, responsive websites built to convert visitors into customers and elevate your brand.
                        </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Blazing fast load times</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Accessible for all users</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Seamless mobile experience</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">SEO & analytics ready</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Avg. project time</span>
<span className="text-white/90 font-medium">2–4 weeks</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Integrations</span>
<span className="text-white/90 font-medium">CMS, Forms, CRM</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about Websites" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: `#181025`}}>
                            Learn More
                        </button>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-2" style={{opacity: `1`}}>
<div aria-label="SEO Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="seo" style={{'--spotlight-color': `rgba(145, 64, 115, 0.30)`}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                SEO
                            </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Organic growth</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                            Proven strategies to improve your search rankings and drive sustained organic traffic.
                        </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">In-depth keyword research</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">On-page & technical SEO</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Content & link strategy</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Ongoing reporting</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Audit & setup</span>
<span className="text-white/90 font-medium">1–2 weeks</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Monthly plans</span>
<span className="text-white/90 font-medium">Yes</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about SEO" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: `#181025`}}>
                            Learn More
                        </button>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-3" style={{opacity: `1`}}>
<div aria-label="Google Ads Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="ads" style={{'--spotlight-color': `rgba(145, 64, 115, 0.30)`}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="dollar-sign"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                Google Ads
                            </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Performance marketing</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                            Impactful paid campaigns that maximize ROI and deliver measurable results fast.
                        </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Targeted ad groups</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Conversion tracking</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Budget optimization</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Weekly reporting</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Campaign setup</span>
<span className="text-white/90 font-medium">~3 days</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Ad spend min.</span>
<span className="text-white/90 font-medium">$500/mo</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about Google Ads" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: `#181025`}}>
                            Learn More
                        </button>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-4" style={{opacity: `1`}}>
<div aria-label="Social Media Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="social" style={{'--spotlight-color': `rgba(145, 64, 115, 0.30)`}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                Social Media
                            </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Brand engagement</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                            Authentic content and campaigns to grow your audience and boost engagement.
                        </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Original content calendars</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Community management</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Influencer partnerships</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Paid campaign strategy</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Channels</span>
<span className="text-white/90 font-medium">IG, FB, Twitter, TikTok</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Frequency</span>
<span className="text-white/90 font-medium">3–5 posts/week</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about Social Media" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: `#181025`}}>
                            Learn More
                        </button>
</div>
</div>
</div>
</div>
</div>
</section>


<footer className="relative bg-[#181025] border-t border-white/5 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
<div className="relative z-10">

<div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

<div className="fade-in">
<div className="mb-8">
<span className="logo-glow text-4xl font-semibold text-white font-manrope">
                                awe<span className="text-white/60">.</span>
</span>
<p className="mt-6 text-white/80 text-lg leading-relaxed max-w-lg">
                                Your partners in online growth. We help Australian businesses thrive in the digital landscape with cutting-edge web solutions and marketing strategies.
                            </p>
</div>

<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="glass-effect rounded-xl p-3 border border-white/10">
<i className="w-5 h-5 text-purple-400" data-lucide="mail"></i>
</div>
<div>
<p className="text-white/60 text-sm font-medium">Email us</p>
<a className="text-white hover:text-purple-400 transition-colors font-medium" href="mailto:hello@awe.com">hello@awe.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="glass-effect rounded-xl p-3 border border-white/10">
<i className="w-5 h-5 text-purple-400" data-lucide="phone"></i>
</div>
<div>
<p className="text-white/60 text-sm font-medium">Call us</p>
<a className="text-white hover:text-purple-400 transition-colors font-medium" href="tel:+61234567890">+61 2 3456 7890</a>
</div>
</div>
</div>
</div>

<div className="fade-in fade-in-delay-1">
<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
<h3 className="text-white font-manrope font-medium text-2xl tracking-tight mb-2">
                                Stay <span className="gradient-text">Updated</span>
</h3>
<p className="text-white/70 text-base mb-6">
                                Get the latest insights on digital growth and web development.
                            </p>
<div className="space-y-4">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/30 transition-all backdrop-blur-sm" placeholder="Enter your email address" type="email" />
<button className="glass-button w-full py-4">
<span className="shiny-text text-base font-medium">Subscribe to Newsletter</span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

<div className="fade-in fade-in-delay-1">
<h4 className="text-white font-manrope font-medium text-lg tracking-tight mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Custom Websites
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                E-commerce
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Mobile Apps
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                SEO Services
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Digital Marketing
                            </a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-2">
<h4 className="text-white font-manrope font-medium text-lg tracking-tight mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                About Us
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Our Team
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Case Studies
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Blog
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Careers
                            </a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-3">
<h4 className="text-white font-manrope font-medium text-lg tracking-tight mb-6">Support</h4>
<ul className="space-y-3">
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Help Center
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Documentation
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Privacy Policy
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Terms of Service
                            </a></li>
<li><a className="text-white/70 hover:text-white transition-colors text-sm group flex items-center" href="#">
<span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Cookie Policy
                            </a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-4">
<h4 className="text-white font-manrope font-medium text-lg tracking-tight mb-6">Connect</h4>
<div className="space-y-4">
<p className="text-white/70 text-sm">
                                Follow us for the latest updates and insights.
                            </p>
<div className="flex gap-3">
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<i className="w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="twitter"></i>
</a>
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<i className="w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="linkedin"></i>
</a>
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<i className="w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="instagram"></i>
</a>
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<i className="w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</div>

<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="fade-in fade-in-delay-1">
<h4 className="text-white font-manrope font-medium text-xl tracking-tight mb-4">Visit Our Office</h4>
<div className="flex items-start gap-4">
<div className="glass-effect rounded-xl p-3 border border-white/10 mt-1">
<i className="w-5 h-5 text-purple-400" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-white font-medium text-lg">Sydney, Australia</p>
<p className="text-white/70 text-base mt-1">Level 10, 123 Business St<br />Sydney NSW 2000</p>
<p className="text-white/60 text-sm mt-2">Mon-Fri: 9AM-6PM AEST</p>
</div>
</div>
</div>
<div className="fade-in fade-in-delay-2">
<h4 className="text-white font-manrope font-medium text-xl tracking-tight mb-4">Ready to Get Started?</h4>
<p className="text-white/70 text-base mb-6">
                                Let's discuss how we can help grow your business online.
                            </p>
<button className="glass-button">
<span className="shiny-text text-base font-medium">Schedule a Call</span>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 fade-in fade-in-delay-4">
<div className="flex items-center gap-6">
<p className="text-white/60 text-sm">© 2024 Awe. All rights reserved.</p>
<div className="hidden md:flex items-center gap-2 text-white/40 text-xs">
<span>Made with</span>
<i className="w-3 h-3 text-red-400" data-lucide="heart"></i>
<span>in Australia</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-white/60 text-sm">All systems operational</span>
</div>
<button className="glass-button text-sm px-6 py-3">
<span className="shiny-text font-medium">Back to Top</span>
</button>
</div>
</div>
</div>
</div>
</div>
</footer>

<script id="vertShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `
}} />
<script id="fragShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;
            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2);
            }
            return res.x + res.y;
        }

        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;
            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);
            float t = .001 * u_time;
            vec3 color = vec3(0.);
            float noise = neuro_shape(uv, t, p);
            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));
            color = vec3(0.5, 0.15, 0.65);
            color += vec3(0.3, 0.0, 0.25) * sin(3.0 * u_scroll_progress + 1.5);
            color = color * noise;
            gl_FragColor = vec4(color, noise);
        }
    `
}} />






    </>
  );
}
