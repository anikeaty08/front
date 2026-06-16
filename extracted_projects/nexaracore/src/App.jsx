import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Terminal from './pages/Terminal';
import Manifesto from './pages/Manifesto';
import Uplink from './pages/Uplink';

const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    const vsSource = `
      attribute vec2 a_position;
      void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                     mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }
      float fbm(vec2 p) {
          float v = 0.0; float a = 0.5;
          for (int i=0; i<4; i++) { v+=a*noise(p); p*=2.0; a*=0.5; }
          return v;
      }

      float getBayer(vec2 coord) {
          float x = mod(coord.x, 4.0);
          float y = mod(coord.y, 4.0);
          if(x < 1.0) {
              if(y < 1.0) return 0.0/16.0; if(y < 2.0) return 12.0/16.0; if(y < 3.0) return 3.0/16.0; return 15.0/16.0;
          } else if(x < 2.0) {
              if(y < 1.0) return 8.0/16.0; if(y < 2.0) return 4.0/16.0; if(y < 3.0) return 11.0/16.0; return 7.0/16.0;
          } else if(x < 3.0) {
              if(y < 1.0) return 2.0/16.0; if(y < 2.0) return 14.0/16.0; if(y < 3.0) return 1.0/16.0; return 13.0/16.0;
          } else {
              if(y < 1.0) return 10.0/16.0; if(y < 2.0) return 6.0/16.0; if(y < 3.0) return 9.0/16.0; return 5.0/16.0;
          }
      }

      void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          vec2 uv = st;
          uv.x *= aspect;

          float time = u_time * 0.15;
          
          float n = fbm(uv * 2.5 + vec2(0.0, -time));
          vec3 bg = vec3(0.04, 0.005, 0.01) + n * vec3(0.12, 0.01, 0.02);

          float center = aspect * 0.5;
          float smokeCenter = center + (fbm(vec2(uv.y * 5.0, time*2.0)) - 0.5) * 0.3;
          
          float dist = abs(uv.x - center);
          float smokeDist = abs(uv.x - smokeCenter);
          
          float core = 0.0005 / (dist + 0.0001);
          float halo = 0.015 / (smokeDist + 0.005);
          
          vec3 laserColor = vec3(1.0, 0.8, 0.8) * core + vec3(0.8, 0.0, 0.05) * halo;
          
          float smokeMask = smoothstep(0.5, 0.0, dist) * n;
          laserColor += vec3(0.4, 0.0, 0.05) * smokeMask * 0.6;

          vec3 color = bg + laserColor;

          vec2 pixelCoord = floor(gl_FragCoord.xy / 3.0);
          float bayer = getBayer(pixelCoord);
          
          color += (bayer - 0.5) * 0.15;
          float steps = 5.0; 
          color = floor(color * steps + 0.5) / steps;

          float vig = st.x * (1.0 - st.x) * st.y * (1.0 - st.y) * 15.0;
          color *= pow(vig, 0.4);

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const program = gl.createProgram();
    gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    let startTime = Date.now();
    let frameId;

    function render() {
      gl.uniform1f(timeLocation, (Date.now() - startTime) / 1000.0);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frameId = requestAnimationFrame(render);
    }
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" className="fixed top-0 left-0 w-[100vw] h-[100vh] -z-10 pointer-events-none" />;
};

const SVGDefs = () => (
  <svg width="0" height="0" className="absolute pointer-events-none">
    <defs>
      <linearGradient id="grad-leaf-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#7F1D1D" />
      </linearGradient>
      <linearGradient id="grad-leaf-purple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#881337" />
      </linearGradient>
      <linearGradient id="grad-petal-light" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#FF9A9E" />
        <stop offset="50%" stopColor="#FECFEF" />
        <stop offset="100%" stopColor="#FDA4AF" />
      </linearGradient>
      <linearGradient id="grad-petal-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E11D48" />
        <stop offset="100%" stopColor="#9F1239" />
      </linearGradient>
      <linearGradient id="grad-stem" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#EAB308" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="grad-bulb-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDF08A" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col items-center">
        <WebGLBackground />
        <div className="bg-diagonal fixed inset-0 z-0 pointer-events-none opacity-10"></div>
        <SVGDefs />

        <div className="relative z-10 w-full max-w-7xl mx-auto min-h-screen flex flex-col border-x border-red-900/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40">
          
          <div className="grid-line-v left-1/3 hidden md:block opacity-50 pointer-events-none"></div>
          <div className="grid-line-v right-1/3 hidden md:block opacity-50 pointer-events-none"></div>
          <div className="grid-line-h top-24 opacity-50 pointer-events-none"></div>
          <div className="grid-line-h bottom-16 opacity-50 pointer-events-none"></div>

          <div className="corner-sq top-24 left-0"></div>
          <div className="corner-sq top-24 right-0"></div>
          <div className="corner-sq bottom-16 left-0"></div>
          <div className="corner-sq bottom-16 right-0"></div>

          <div className="bracket -top-px -left-px border-t-2 border-l-2"></div>
          <div className="bracket -top-px -right-px border-t-2 border-r-2"></div>
          <div className="bracket top-full -mt-3 -left-px border-b-2 border-l-2"></div>
          <div className="bracket top-full -mt-3 -right-px border-b-2 border-r-2"></div>

          <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl glass-pill rounded-full px-5 py-2.5 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <div className="w-2 h-2 bg-white rounded-sm group-hover:scale-50 transition-transform"></div>
              </div>
              <span className="text-gray-900 font-medium tracking-tight text-sm">NexaraCore</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-500">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <Link to="/manifesto" className="text-red-600 relative after:content-[''] after:absolute after:-bottom-3.5 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#E11D48] after:to-[#EF4444] after:shadow-[0_0_8px_rgba(239,68,68,0.8)]">Services</Link>
              <Link to="/terminal" className="hover:text-red-600 transition-colors">Nodes</Link>
              <Link to="/uplink" className="hover:text-red-600 transition-colors">Telemetry</Link>
            </div>

            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors">
              <iconify-icon icon="solar:hamburger-menu-linear" class="text-lg"></iconify-icon>
            </button>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/uplink" element={<Uplink />} />
          </Routes>

          <footer className="mt-auto border-t border-red-900/20 z-30 bg-black/60 backdrop-blur-md relative">
            <div className="px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2 space-y-6">
                <Link to="/" className="flex items-center gap-3 w-max">
                  <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-gray-100 font-medium tracking-tight text-xl">Nexara Systems</span>
                </Link>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-md font-light">
                  Abstracting complex paradigms into intuitive visual architectures. Nexara operates at the intersection of motion design, systemic logic, and human interface. We deliver high-fidelity outputs for enterprise nodes.
                </p>
                <div className="flex gap-5 pt-2">
                  <a href="#" className="text-zinc-500 hover:text-red-400 transition-colors"><iconify-icon icon="simple-icons:x" width="18"></iconify-icon></a>
                  <a href="#" className="text-zinc-500 hover:text-red-400 transition-colors"><iconify-icon icon="simple-icons:github" width="18"></iconify-icon></a>
                  <a href="#" className="text-zinc-500 hover:text-red-400 transition-colors"><iconify-icon icon="simple-icons:figma" width="18"></iconify-icon></a>
                  <a href="#" className="text-zinc-500 hover:text-red-400 transition-colors"><iconify-icon icon="simple-icons:dribbble" width="18"></iconify-icon></a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-[10px] font-medium text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-red-900/50 block"></span>
                  Directories
                </h4>
                <ul className="space-y-4 text-xs font-light text-zinc-400">
                  <li><Link to="/" className="hover:text-red-400 transition-colors">Root Access</Link></li>
                  <li><Link to="/terminal" className="hover:text-red-400 transition-colors">Terminal Console</Link></li>
                  <li><Link to="/manifesto" className="hover:text-red-400 transition-colors">Core Manifesto</Link></li>
                  <li><Link to="/uplink" className="hover:text-red-400 transition-colors">Uplink Gateway</Link></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-medium text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-red-900/50 block"></span>
                  Transmission
                </h4>
                <ul className="space-y-4 text-xs font-light text-zinc-400">
                  <li><a href="#" className="hover:text-red-400 transition-colors">system@nexara.core</a></li>
                  <li><a href="#" className="hover:text-red-400 transition-colors">PGP Key Block</a></li>
                  <li className="pt-2">
                    <div className="flex items-center gap-2 text-[10px] text-red-400/80 uppercase tracking-widest bg-red-500/10 w-fit px-3 py-1.5 rounded-sm border border-red-500/20 shadow-[0_0_10px_rgba(220,38,38,0.1)]">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                      Network Online
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-red-900/20 py-6 px-8 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-zinc-500 font-medium bg-black/40">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span>&copy; {new Date().getFullYear()} Nexara Systems. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
                <span className="text-red-900/50">/</span>
                <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
                <span className="text-red-900/50">/</span>
                <div className="flex items-center gap-2 ml-4">
                  <div className="w-1.5 h-1.5 bg-red-600/50 rounded-sm"></div>
                  <span>NexaraCore V2.04</span>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;