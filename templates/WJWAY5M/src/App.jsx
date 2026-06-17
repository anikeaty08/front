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
    


        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    


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
<canvas height="714" id="neuro" style={{width: '1364px', height: '714px'}} width="1364"></canvas>

<nav className="nav-container relative z-50 w-full px-4 md:px-8 pt-8 pb-8 fade-in" style={{opacity: '1'}}>
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
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-layout-template dropdown-icon" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
<div>
<div className="dropdown-title">Custom Websites</div>
<div className="dropdown-description">Bespoke web solutions</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-shopping-cart dropdown-icon" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<div>
<div className="dropdown-title">E-commerce</div>
<div className="dropdown-description">Online stores &amp; shops</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-smartphone dropdown-icon" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<div>
<div className="dropdown-title">Mobile Apps</div>
<div className="dropdown-description">iOS &amp; Android apps</div>
</div>
</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-wrench dropdown-icon" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
<div>
<div className="dropdown-title">Maintenance</div>
<div className="dropdown-description">Ongoing support</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-zap dropdown-icon" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
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
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-search dropdown-icon" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<div>
<div className="dropdown-title">SEO Services</div>
<div className="dropdown-description">Search optimization</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-target dropdown-icon" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div>
<div className="dropdown-title">PPC Advertising</div>
<div className="dropdown-description">Paid campaigns</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-users dropdown-icon" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<div className="dropdown-title">Social Media</div>
<div className="dropdown-description">Platform management</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-mail dropdown-icon" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>
<div className="dropdown-title">Email Marketing</div>
<div className="dropdown-description">Campaign automation</div>
</div>
</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-bar-chart-3 dropdown-icon" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<div>
<div className="dropdown-title">Analytics</div>
<div className="dropdown-description">Performance tracking</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-trending-up dropdown-icon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
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
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-users dropdown-icon" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<div className="dropdown-title">Who We Are</div>
<div className="dropdown-description">Our team &amp; story</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-trending-up dropdown-icon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div>
<div className="dropdown-title">Client Results</div>
<div className="dropdown-description">Success stories</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-star dropdown-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
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
<span className="shiny-text font-medium" style={{'--duration': '3s'}}>
                                    Work With Us
                                </span>
</button>
<button className="lg:hidden text-white/80 hover:text-white transition-colors p-2">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-[85vh] flex md:px-8 pt-16 pr-4 pb-20 pl-4 items-center">
<div className="max-w-7xl w-full flex flex-col text-center mr-auto ml-auto items-center">
<div className="text-center">
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-2" style={{opacity: '1'}}>
<span className="gradient-text">Your partn<span className="text-slate-50">ers</span></span> <span className="text-slate-50">in</span>
</h1>
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-6" style={{opacity: '1'}}>
<span className="text-slate-50">online growth.</span>
</h1>
<p className="md:text-xl max-w-xl fade-in fade-in-delay-2 text-lg text-white/80 font-manrope text-center mb-8 mx-auto" style={{opacity: '1'}}>
                        Our advanced neural networks enable you to build, deploy, and scale AI solutions that adapt to your unique business challenges.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3 justify-center" style={{opacity: '1'}}>
<a className="transition-all hover:bg-white/90 font-medium text-gray-900 text-center bg-white rounded-xl pt-4 pr-8 pb-4 pl-8" href="#">Explore Services</a>
<button className="glass-button">
<span className="shiny-text text-base font-medium" style={{'--duration': '4s'}}>
                                Get Started
                            </span>
</button>
</div>
<div className="mt-10 flex items-center gap-2 fade-in fade-in-delay-3 justify-center" style={{opacity: '1'}}>
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/men/86.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/63.jpg"/>
</div>
<div className="text-sm text-white/70">Trusted by 350+ Australian business owners</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#181025] text-white font-geist relative overflow-hidden">
<div className="w-full max-w-6xl mx-auto px-8">

<div className="text-center mt-24 pt-18 opacity-0 animate-fade-in" style={{animation: 'fadeInUp .8s ease-out .2s forwards'}}>
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
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.505-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zM24 12.49c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49S24 10.014 24 12.49zm-1.471 0a3.023 3.023 0 0 0-3.019-3.019A3.023 3.023 0 0 0 16.49 12.49a3.023 3.023 0 0 0 3.019 3.019 3.023 3.023 0 0 0 3.019-3.019z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305h0z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.732 19.526V8.941l-7.794-4.502 7.794 15.087zm0-12.569L2.474 2.45l7.794 4.507zm1.732 0L19.526 2.45l-7.526 4.507zm0 2.017v10.585l7.794-15.087-7.794 4.502z"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto logo-set absolute inset-0 fade-in" id="logoSet2" style={{opacity: '1'}}>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path className="" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.327L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.747.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path className="" d="M24 22.525H0l12-21.05 12 21.05z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path className="" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path className="" d="M13.966 22.624c0 .374.303.677.677.677h8.681c.374 0 .677-.303.677-.677V1.353c0-.374-.303-.677-.677-.677H14.643c-.374 0-.677.303-.677.677v21.271z"></path>
<path className="" d="M10.034 22.624c0 .374-.303.677-.677.677H.677A.677.677 0 0 1 0 22.624V1.353C0 .979.303.676.677.676h8.681c.374 0 .677.303.677.677v21.271z"></path>
<path className="" d="M0 22.624l5.017-11.271L10.034 0l5.932 13.353L10.034 22.624H0z"></path>
</svg>
</div>
</div>

<div className="logo-container group cursor-pointer">
<div className="flex items-center justify-center h-24 md:h-32 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/80 hover:bg-gray-800/20 hover:scale-105">
<svg className="w-10 h-10 md:w-10 md:h-10 fill-white transition-all duration-300 group-hover:scale-110" viewbox="0 0 24 24">
<path className="" d="M5.398 0v.006c0 .016 0 .032-.001.048L8.36 12.83c.253 1.143.477 2.299.674 3.466a126.32 126.32 0 0 1-1.01-.4c-.545-.22-1.092-.473-1.652-.758V0H5.398zm2.274 0v14.847c.455.302.899.58 1.333.835.738.435 1.458.815 2.16 1.146L9.672 0H7.672zm4.181 0l1.493 16.827c.702-.331 1.422-.711 2.16-1.146.434-.255.878-.533 1.333-.835V0H11.853zm2.975 0v15.138c-.56.285-1.107.538-1.652.758-.338.137-.677.267-1.01.4.197-1.167.421-2.323.674-3.466L13.402.054C13.402.038 13.402.022 13.402.006V0h-.774z"></path>
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
<h2 className="md:text-4xl bg-clip-text text-xl font-light text-transparent tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-5 pt-2 pb-2">
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
<div className="relative cardswap-container perspective-900" id="cardswap" style={{width: '500px', height: '470px'}}>

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl shadow-lg flex flex-col cursor-pointer" style={{width: '500px', height: '470px', translate: 'none', rotate: 'none', scale: 'none', zIndex: '2', transform: 'translate(-50%, -50%) translate3d(61.6922px, -71.9742px, -92.5383px) rotate(1.00028deg) skew(1.00028deg, 1deg) scale(1.00015, 0.99985)'}}>
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

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl shadow-lg flex flex-col cursor-pointer" style={{width: '500px', height: '470px', translate: 'none', rotate: 'none', scale: 'none', zIndex: '1', transform: 'translate(-50%, -50%) translate3d(120px, -130.279px, -180px) rotate(1.00028deg) skew(1.00028deg, 1deg) scale(1.00015, 0.99985)'}}>
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

<div className="absolute top-1/2 left-1/2 border-gradient glass card-outline rounded-xl shadow-lg flex flex-col cursor-pointer" style={{width: '500px', height: '470px', fontFamily: 'Roboto, Inter, sans-serif', translate: 'none', rotate: 'none', scale: 'none', zIndex: '3', transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px) rotate(1.00028deg) skew(1.00028deg, 1deg) scale(1.00015, 0.99985)'}}>
<div className="browser-bar glass-effect">
<span className="traffic-light traffic-red"></span>
<span className="traffic-light traffic-yellow"></span>
<span className="traffic-light traffic-green"></span>
<span className="browser-title">google.com</span>
<span className="browser-url">google.com/search</span>
</div>
<div className="flex flex-col h-full w-full bg-white rounded-b-xl overflow-hidden">
<div className="flex items-center px-5 py-2 border-b border-gray-200 rounded-t-xl" style={{minHeight: '60px'}}>
<img alt="Google" className="h-6 mr-5" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" style={{objectFit: 'contain'}}/>
<form aria-label="Google search" className="flex flex-1 items-center bg-[#f1f3f4] rounded-full pl-4 pr-1 py-1 border border-[#dfe1e5] focus-within:ring-2 focus-within:ring-blue-200" role="search">
<input aria-label="Search" className="flex-1 bg-transparent text-[15px] text-gray-900 font-normal outline-none border-none placeholder-gray-500" style={{fontFamily: 'Roboto, Inter, sans-serif'}} value="best home builder sydney"/>
<button aria-label="Search" className="ml-2 flex items-center justify-center bg-transparent border-none p-1" type="submit">
<svg fill="none" height="21" stroke="#4285F4" strokeWidth="2.2" viewbox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path></svg>
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
<div className="flex-1 overflow-y-auto px-6 pb-4" style={{maxHeight: 'none'}}>
<div className="py-3 border-b border-[#ececec] group" tabindex="0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">our client</span>
<span className="text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 px-2 py-0.5 rounded-full text-xs font-medium shadow" style={{letterSpacing: '-0.02em'}}>#1</span>
<span className="text-[#5f6368] text-[12px] px-1 rounded bg-[#eef6ff] ml-1">Page 1</span>
</div>
<a className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2 hover:underline focus:underline outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all" href="#" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Sydney's Leading Home Builder | OurClient.com.au</a>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Award-winning home designs and builds in Sydney. Free consultations—start your dream home today with the trusted experts.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">competitor1.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Custom Home Builders Sydney | Competitor1</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Your trusted Sydney builders for custom homes and renovations.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">anotherbuilder.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Modern Home Builds | AnotherBuilder</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Modern home builds, renovations, and extensions.</div>
</div>
<div aria-hidden="true" className="py-3 group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">qualityhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Affordable, Quality New Builds | Quality Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Affordable, quality new builds in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">greenhomes.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>Eco-Friendly Home Builders | Green Homes</span>
<div className="text-[15px] text-[#4d5156] mt-1 leading-snug">Sustainable home construction and design in Sydney.</div>
</div>
<div aria-hidden="true" className="py-3 border-b border-[#ececec] relative group competitor-blur" tabindex="-1">
<div className="text-xs text-[#202124] truncate mb-0.5">
<span className="text-[#4caf50] font-mono text-[13px]">citybuilders.com.au</span>
</div>
<span className="text-[20px] tracking-tight text-[#1a0dab] font-medium leading-tight underline-offset-2" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>City Builders Sydney | CityBuilders</span>
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

<div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-8">

<div className="text-center mb-20 fade-in" style={{opacity: '1'}}>
<h2 className="md:text-4xl text-xl font-light bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
                Our Solutions
            </h2>
<p className="max-w-2xl text-lg text-gray-400 mx-auto leading-relaxed">
                Comprehensive digital solutions designed to elevate your business and drive measurable results.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group fade-in fade-in-delay-1" style={{opacity: '1'}}>
<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 hover:bg-white/5 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="websites" style={{backgroundColor: 'rgb(24, 16, 37)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(145, 64, 115, 0.1) 0px 4px 16px', '--spotlight-color': 'rgba(145, 64, 115, 0.25)', '--mouse-x': '227.5px', '--mouse-y': '130.609375px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/15 via-transparent to-blue-900/20 pointer-events-none"></div>
<div className="relative z-10">
<div className="mb-4 mx-auto">
<span className="text-3xl">🎨</span>
</div>
<h3 className="text-xl font-bold text-white tracking-tighter font-geist mb-3">
                            Websites
                        </h3>
<p className="text-white/70 text-base leading-relaxed">
                            Custom, responsive websites that convert visitors into customers.
                        </p>
</div>
<div className="mt-auto relative z-10">
<div className="mt-4 pt-4 border-t border-white/5">
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Custom Design</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Mobile Responsive</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">SEO Optimized</span>
</div>
</div>
<button className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-2" style={{opacity: '1'}}>
<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 hover:bg-white/5 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="seo" style={{backgroundColor: 'rgb(24, 16, 37)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(145, 64, 115, 0.1) 0px 4px 16px', '--spotlight-color': 'rgba(145, 64, 115, 0.25)', '--mouse-x': '13.5px', '--mouse-y': '225.609375px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/15 via-transparent to-blue-900/20 pointer-events-none"></div>
<div className="relative z-10">
<div className="mb-4 mx-auto">
<span className="text-3xl">📈</span>
</div>
<h3 className="text-white font-geist font-medium text-xl tracking-tight mb-3">
                            SEO
                        </h3>
<p className="text-white/70 text-base leading-relaxed">
                            Search engine optimization that improves your visibility and drives organic traffic to your website.
                        </p>
</div>
<div className="mt-auto relative z-10">
<div className="mt-4 pt-4 border-t border-white/5">
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Keyword Research</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">On-Page Optimization</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Content Strategy</span>
</div>
</div>
<button className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-3" style={{opacity: '1'}}>
<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 hover:bg-white/5 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="ads" style={{backgroundColor: 'rgb(24, 16, 37)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(145, 64, 115, 0.1) 0px 4px 16px', '--spotlight-color': 'rgba(145, 64, 115, 0.25)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/15 via-transparent to-blue-900/20 pointer-events-none"></div>
<div className="relative z-10">
<div className="mb-4 mx-auto">
<span className="text-3xl">💰</span>
</div>
<h3 className="text-white font-geist font-medium text-xl tracking-tight mb-3">
                            Google Ads
                        </h3>
<p className="text-white/70 text-base leading-relaxed">
                            Targeted paid advertising campaigns that deliver immediate results and maximize.
                        </p>
</div>
<div className="mt-auto">
<div className="mt-4 pt-4 border-t border-white/5">
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Campaign Management</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Performance Tracking</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">ROI Optimization</span>
</div>
</div>
<button className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-4" style={{opacity: '1'}}>
<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 hover:bg-white/5 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="social" style={{backgroundColor: 'rgb(24, 16, 37)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(145, 64, 115, 0.1) 0px 4px 16px', '--spotlight-color': 'rgba(145, 64, 115, 0.25)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/15 via-transparent to-blue-900/20 pointer-events-none"></div>
<div className="relative z-10">
<div className="mb-4 mx-auto">
<span className="text-3xl">📱</span>
</div>
<h3 className="text-white font-geist font-medium text-xl tracking-tight mb-3">
                            Social Media
                        </h3>
<p className="text-white/70 text-base leading-relaxed">
                            Strategic social media management that builds your brand presence and engages.
                        </p>
</div>
<div className="mt-auto">
<div className="mt-4 pt-4 border-t border-white/5">
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Content Creation</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Community Management</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full pulse-scale"></div>
<span className="text-white/80 text-sm">Paid Advertising</span>
</div>
</div>
<button className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
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

<div className="fade-in" style={{opacity: '1'}}>
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
<svg className="lucide lucide-mail w-5 h-5 text-purple-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-white/60 text-sm font-medium">Email us</p>
<a className="text-white hover:text-purple-400 transition-colors font-medium" href="mailto:hello@awe.com">hello@awe.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="glass-effect rounded-xl p-3 border border-white/10">
<svg className="lucide lucide-phone w-5 h-5 text-purple-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="text-white/60 text-sm font-medium">Call us</p>
<a className="text-white hover:text-purple-400 transition-colors font-medium" href="tel:+61234567890">+61 2 3456 7890</a>
</div>
</div>
</div>
</div>

<div className="fade-in fade-in-delay-1" style={{opacity: '1'}}>
<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
<h3 className="text-white font-manrope font-medium text-2xl tracking-tight mb-2">
                                Stay <span className="gradient-text">Updated</span>
</h3>
<p className="text-white/70 text-base mb-6">
                                Get the latest insights on digital growth and web development.
                            </p>
<div className="space-y-4">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/30 transition-all backdrop-blur-sm" placeholder="Enter your email address" type="email"/>
<button className="glass-button w-full py-4">
<span className="shiny-text text-base font-medium">Subscribe to Newsletter</span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

<div className="fade-in fade-in-delay-1" style={{opacity: '1'}}>
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

<div className="fade-in fade-in-delay-2" style={{opacity: '1'}}>
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

<div className="fade-in fade-in-delay-3" style={{opacity: '1'}}>
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

<div className="fade-in fade-in-delay-4" style={{opacity: '1'}}>
<h4 className="text-white font-manrope font-medium text-lg tracking-tight mb-6">Connect</h4>
<div className="space-y-4">
<p className="text-white/70 text-sm">
                                Follow us for the latest updates and insights.
                            </p>
<div className="flex gap-3">
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<svg className="lucide lucide-twitter w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<svg className="lucide lucide-instagram w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="glass-effect rounded-xl p-3 border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5 text-white/70 hover:text-purple-400 transition-colors" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-sm mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="fade-in fade-in-delay-1" style={{opacity: '1'}}>
<h4 className="text-white font-manrope font-medium text-xl tracking-tight mb-4">Visit Our Office</h4>
<div className="flex items-start gap-4">
<div className="glass-effect rounded-xl p-3 border border-white/10 mt-1">
<svg className="lucide lucide-map-pin w-5 h-5 text-purple-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-lg">Sydney, Australia</p>
<p className="text-white/70 text-base mt-1">Level 10, 123 Business StSydney NSW 2000</p>
<p className="text-white/60 text-sm mt-2">Mon-Fri: 9AM-6PM AEST</p>
</div>
</div>
</div>
<div className="fade-in fade-in-delay-2" style={{opacity: '1'}}>
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
<div className="flex flex-col md:flex-row justify-between items-center gap-6 fade-in fade-in-delay-4" style={{opacity: '1'}}>
<div className="flex items-center gap-6">
<p className="text-white/60 text-sm">© 2024 Awe. All rights reserved.</p>
<div className="hidden md:flex items-center gap-2 text-white/40 text-xs">
<span>Made with</span>
<svg className="lucide lucide-heart w-3 h-3 text-red-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
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








    </>
  );
}
