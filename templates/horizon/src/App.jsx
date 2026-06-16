import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#050505',
},
animation: {
'grid-move': 'grid-move 20s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out infinite reverse',
'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
'pulse-glow-rev': 'pulse-glow 10s ease-in-out infinite reverse',
'reveal': 'reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
'grid-move': {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '40px 40px' },
},
'float': {
'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
'50%': { transform: 'translateY(-20px) rotate(2deg)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.5', transform: 'scale(1)', filter: 'blur(80px)' },
'50%': { opacity: '0.8', transform: 'scale(1.1)', filter: 'blur(100px)' },
},
'reveal-up': {
'from': { opacity: '0', transform: 'translateY(30px)' },
'to': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      // Initial Icon Render
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Mouse Parallax Logic
      document.addEventListener('mousemove', (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
          const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

          document.querySelectorAll('.parallax-element').forEach(el => {
              const speed = el.getAttribute('data-speed') || 20;
              const rotate = el.classList.contains('rotate-12') ? 12 : 0;
              el.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${rotate}deg)`;
          });
      });

      // Scroll Handling & Active Dots
      const scrollContainer = document.getElementById('main-scroll');
      const dots = document.querySelectorAll('.nav-dot');

      function scrollToIndex(index) {
          const section = document.getElementById(`section-${index}`);
          section.scrollIntoView({ behavior: 'smooth' });
      }

      // Intersection Observer for Active State
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const id = entry.target.id;
                  const index = parseInt(id.split('-')[1]);

                  // Update dots
                  dots.forEach((dot, i) => {
                      if (i === index) {
                          dot.classList.add('active');
                          dot.classList.remove('bg-white/20');
                      } else {
                          dot.classList.remove('active');
                          dot.classList.add('bg-white/20');
                      }
                  });
              }
          });
      }, { threshold: 0.5 });

      document.querySelectorAll('section').forEach(section => {
          observer.observe(section);
      });
    


      (function() {
          const canvas = document.getElementById('cloud-canvas');
          const gl = canvas.getContext('webgl');
          const scrollContainer = document.getElementById('main-scroll');

          if (!gl) return;

          const vertexShaderSource = `
              attribute vec2 position;
              void main() {
                  gl_Position = vec4(position, 0.0, 1.0);
              }
          `;

          const fragmentShaderSource = `
              precision mediump float;
              uniform vec2 u_resolution;
              uniform float u_time;

              float random (in vec2 st) {
                  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
              }

              float noise (in vec2 st) {
                  vec2 i = floor(st);
                  vec2 f = fract(st);
                  float a = random(i);
                  float b = random(i + vec2(1.0, 0.0));
                  float c = random(i + vec2(0.0, 1.0));
                  float d = random(i + vec2(1.0, 1.0));
                  vec2 u = f * f * (3.0 - 2.0 * f);
                  return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
              }

              #define OCTAVES 6
              float fbm (in vec2 st) {
                  float value = 0.0;
                  float amplitude = .5;
                  float frequency = 0.;
                  for (int i = 0; i < OCTAVES; i++) {
                      value += amplitude * noise(st);
                      st *= 2.;
                      amplitude *= .5;
                  }
                  return value;
              }

              void main() {
                  vec2 st = gl_FragCoord.xy/u_resolution.xy;
                  st.x *= u_resolution.x/u_resolution.y;

                  // Wind direction (left to right)
                  st.x -= u_time * 0.05;

                  // Rolling cloud domain warping
                  vec2 q = vec2(0.);
                  q.x = fbm( st + 0.1 * u_time );
                  q.y = fbm( st + vec2(1.0) );

                  vec2 r = vec2(0.);
                  r.x = fbm( st + 1.0*q + vec2(1.7,9.2) + 0.15*u_time );
                  r.y = fbm( st + 1.0*q + vec2(8.3,2.8) + 0.126*u_time );

                  float f = fbm(st + r);

                  // Dark grey gradients
                  vec3 color = mix(vec3(0.02, 0.02, 0.025), vec3(0.12, 0.12, 0.14), clamp((f*f)*4.0, 0.0, 1.0));

                  // Subtle vignette
                  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                  float vignette = 1.0 - smoothstep(0.5, 1.5, length(uv - 0.5) * 1.5);
                  color *= vignette;

                  gl_FragColor = vec4(color, 1.0);
              }
          `;

          function createShader(gl, type, source) {
              const shader = gl.createShader(type);
              gl.shaderSource(shader, source);
              gl.compileShader(shader);
              if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                  gl.deleteShader(shader);
                  return null;
              }
              return shader;
          }

          const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
          const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
          const program = gl.createProgram();
          gl.attachShader(program, vertexShader);
          gl.attachShader(program, fragmentShader);
          gl.linkProgram(program);

          const positionLocation = gl.getAttribLocation(program, 'position');
          const buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

          const uResolution = gl.getUniformLocation(program, 'u_resolution');
          const uTime = gl.getUniformLocation(program, 'u_time');

          let time = 0;
          let scrollSpeed = 0;
          let lastScrollY = scrollContainer ? scrollContainer.scrollTop : 0;
          let baseSpeed = 0.5;

          function resize() {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              gl.viewport(0, 0, canvas.width, canvas.height);
          }
          window.addEventListener('resize', resize);
          resize();

          if(scrollContainer) {
              scrollContainer.addEventListener('scroll', () => {
                  const currentScroll = scrollContainer.scrollTop;
                  const delta = Math.abs(currentScroll - lastScrollY);
                  scrollSpeed += delta * 0.05;
                  lastScrollY = currentScroll;
              });
          }

          function animate() {
              scrollSpeed = scrollSpeed * 0.9 + baseSpeed * 0.1;
              time += 0.005 + scrollSpeed * 0.002;

              gl.useProgram(program);
              gl.enableVertexAttribArray(positionLocation);
              gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
              gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

              gl.uniform2f(uResolution, canvas.width, canvas.height);
              gl.uniform1f(uTime, time);

              gl.drawArrays(gl.TRIANGLES, 0, 6);
              requestAnimationFrame(animate);
          }
          animate();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<canvas className="block w-full h-full" id="cloud-canvas"></canvas>
</div>

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto">
<div className="h-8 w-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center">
<i className="w-4 h-4 text-white/80" data-lucide="layers"></i>
</div>
</div>
<nav className="pointer-events-auto hidden md:flex items-center gap-6 bg-black/40 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 shadow-2xl">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
          Research
        </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
          Methodology
        </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">
          Pricing
        </a>
</nav>
<div className="pointer-events-auto">
<button className="px-4 py-2 text-xs font-semibold tracking-wide bg-white text-black rounded-full hover:bg-gray-200 transition-all">
          LOGIN
        </button>
</div>
</header>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
<button aria-label="Section 1" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(0)"></button>
<button aria-label="Section 2" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(1)"></button>
<button aria-label="Section 3" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(2)"></button>
<button aria-label="Section 4" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(3)"></button>
<button aria-label="Section 5" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(4)"></button>
</div>

<main className="scroll-container no-scrollbar relative z-10" id="main-scroll">

<section className="h-screen w-full flex flex-col items-center justify-center relative px-6 snap-center" id="section-0">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="parallax-element absolute top-1/4 left-[10%] w-24 h-24 glass-card rounded-2xl rotate-12 animate-float" data-speed="-20">
<div className="absolute inset-0 flex items-center justify-center opacity-30 text-white">
<i className="w-8 h-8" data-lucide="bar-chart-2"></i>
</div>
</div>
<div className="parallax-element absolute bottom-1/3 right-[15%] w-32 h-32 glass-card rounded-full animate-float-delayed" data-speed="30">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 rounded-full"></div>
</div>
</div>
<div className="max-w-4xl text-center space-y-8 z-10 animate-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Horizon Radar v2.0
          </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9]">
            Clarity for
            <br/>
<span className="text-gradient">Crypto Research</span>
</h1>
<p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Scouting the horizon of formidable blockchain technology for Web3
            savants. Precision-engineered insights in a chaotic market.
          </p>
<div className="flex items-center justify-center gap-4 pt-8">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm tracking-tight overflow-hidden transition-all hover:scale-105" onclick="scrollToIndex(1)">
<div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-2">
                Learn More
                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</button>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center relative px-6 snap-center" id="section-1">
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 relative h-[400px] w-full">
<div className="absolute inset-0">

<div className="absolute top-[10%] left-[10%] glass-card p-3 rounded-xl flex items-center gap-3 animate-float">
<i className="w-4 h-4 text-white/70" data-lucide="globe"></i>
<span className="text-xs font-medium text-white/50">Twitter</span>
</div>
<div className="absolute top-[20%] right-[10%] glass-card p-3 rounded-xl flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
<i className="w-4 h-4 text-white/70" data-lucide="database"></i>
<span className="text-xs font-medium text-white/50">On-Chain</span>
</div>
<div className="absolute bottom-[20%] left-[20%] glass-card p-3 rounded-xl flex items-center gap-3 animate-float" style={{animationDelay: '0.5s'}}>
<i className="w-4 h-4 text-white/70" data-lucide="activity"></i>
<span className="text-xs font-medium text-white/50">Price</span>
</div>
<div className="absolute bottom-[10%] right-[30%] glass-card p-3 rounded-xl flex items-center gap-3 animate-float" style={{animationDelay: '1.5s'}}>
<i className="w-4 h-4 text-white/70" data-lucide="layers"></i>
<span className="text-xs font-medium text-white/50">Gov</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="20%" x2="50%" y1="20%" y2="50%"></line>
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="80%" x2="50%" y1="30%" y2="50%"></line>
<line stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="30%" x2="50%" y1="70%" y2="50%"></line>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
</div>
</div>

<div className="order-1 md:order-2 space-y-8">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none">
<span className="text-white/30">Research is</span>
<br/>
              Fractionalized.
            </h2>
<p className="text-lg text-white/60 font-light max-w-md">
              The alpha is scattered across specific discords, hidden governance
              forums, and obscure on-chain data. The whole story is never in one
              place—until now.
            </p>
<div className="flex gap-4 items-center">
<div className="h-px w-16 bg-gradient-to-r from-white/50 to-transparent"></div>
<span className="text-xs font-mono text-white/40">
                SYSTEM ERROR: FRAGMENTATION DETECTED
              </span>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center relative px-6 overflow-hidden snap-center" id="section-2">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
<div className="max-w-5xl w-full text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
            Stitching the
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              Story Together
            </span>
</h2>
<p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light">
            We aggregate the noise, filter the signal, and amplify depth using
            next-gen AI agents designed for financial context.
          </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group cursor-default">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform group-hover:bg-white/10 group-hover:text-indigo-300">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Aggregate</h3>
<p className="text-sm text-white/50 leading-relaxed">
                Multi-source ingestion from 50+ chains and social platforms.
              </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group cursor-default">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform group-hover:bg-white/10 group-hover:text-indigo-300">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">
                Synthesize
              </h3>
<p className="text-sm text-white/50 leading-relaxed">
                AI-driven correlation of disparate data points into narratives.
              </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group cursor-default">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform group-hover:bg-white/10 group-hover:text-indigo-300">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Verify</h3>
<p className="text-sm text-white/50 leading-relaxed">
                Automated bias detection and cross-reference checking.
              </p>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center relative px-6 snap-center" id="section-3">
<div className="flex flex-col md:flex-row gap-12 items-center max-w-7xl w-full">
<div className="flex-1 space-y-8">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter">
              The Perfect
              <br/>
              Reading Experience.
            </h2>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<p className="text-lg text-white/60 font-light group-hover:text-white transition-colors">
                  Context-aware summaries that adapt to your level.
                </p>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<p className="text-lg text-white/60 font-light group-hover:text-white transition-colors">
                  Interactive charts embedded directly in the narrative.
                </p>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<p className="text-lg text-white/60 font-light group-hover:text-white transition-colors">
                  Source transparency with one-click verification.
                </p>
</div>
</div>
</div>

<div className="flex-1 relative h-[600px] w-full flex items-center justify-center perspective-1000">
<div className="w-4/5 h-auto glass-card rounded-2xl p-6 border-t-white/20 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-3">
<div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
<div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="h-4 w-full bg-white/5 rounded mt-2"></div>
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-32 w-full bg-gradient-to-b from-white/5 to-transparent rounded border border-white/5 mt-4 flex items-end justify-between px-4 pb-2">
<div className="w-6 h-[40%] bg-white/20 rounded-t-sm"></div>
<div className="w-6 h-[70%] bg-white/20 rounded-t-sm"></div>
<div className="w-6 h-[50%] bg-white/20 rounded-t-sm"></div>
<div className="w-6 h-[90%] bg-white/20 rounded-t-sm"></div>
<div className="w-6 h-[60%] bg-white/20 rounded-t-sm"></div>
</div>
</div>
</div>

<div className="absolute bottom-20 -left-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-float border-l-4 border-l-green-500 bg-[#0A0A0A]">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i>
</div>
<div>
<p className="text-xs font-semibold text-white">Insight Ready</p>
<p className="text-[10px] text-white/50">Correlation found.</p>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex flex-col items-center justify-center relative px-6 bg-gradient-to-b from-transparent to-white/5 snap-center" id="section-4">
<div className="max-w-4xl text-center space-y-10 relative z-10">
<h2 className="text-6xl md:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            Ready?
          </h2>
<p className="text-xl md:text-2xl text-white/60 font-light">
            Level up your research game. No commitment.
          </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
<a className="w-full sm:w-auto px-10 py-5 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 text-sm" href="#">
              Create Account
            </a>
<a className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm" href="#">
              Browse Research
            </a>
</div>
<div className="pt-12 grid grid-cols-3 gap-8 border-t border-white/10 mt-12">
<div>
<div className="text-2xl md:text-4xl font-bold text-white">10k+</div>
<div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                Active Users
              </div>
</div>
<div>
<div className="text-2xl md:text-4xl font-bold text-white">50+</div>
<div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                Sources
              </div>
</div>
<div>
<div className="text-2xl md:text-4xl font-bold text-white">99%</div>
<div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                Accuracy
              </div>
</div>
</div>
</div>
<footer className="absolute bottom-0 w-full py-8 border-t border-white/10 bg-black/50 text-center text-white/40 text-xs font-medium">
<p>© 2024 Horizon Radar. All rights reserved.</p>
</footer>
</section>
</main>



    </>
  );
}
