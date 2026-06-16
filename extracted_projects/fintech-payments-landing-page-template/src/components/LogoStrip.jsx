import React, { useEffect, useRef } from 'react';

const GridCorners = () => (
  <>
    <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
    <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
    <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
    <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
  </>
);

const LogoStrip = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
    `;

    const fsSource = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;

        vec2 hash( vec2 p ) {
            p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
            return -1.0 + 2.0*fract(sin(p)*43758.5453123);
        }

        float noise( in vec2 p ) {
            const float K1 = 0.366025404;
            const float K2 = 0.211324865;
            vec2 i = floor( p + (p.x+p.y)*K1 );
            vec2 a = p - i + (i.x+i.y)*K2;
            float m = step(a.y,a.x); 
            vec2 o = vec2(m,1.0-m);
            vec2 b = a - o + K2;
            vec2 c = a - 1.0 + 2.0*K2;
            vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
            vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
            return dot( n, vec3(70.0) );
        }

        float fbm(vec2 st) {
            float value = 0.0;
            float amplitude = 0.5;
            for (int i = 0; i < 4; i++) {
                value += amplitude * noise(st);
                st *= 2.0;
                amplitude *= 0.5;
            }
            return value;
        }

        void main() {
            vec2 st = gl_FragCoord.xy / u_resolution.xy;
            vec2 uv = st - 0.5;
            uv.x *= u_resolution.x / u_resolution.y;

            float time = u_time * 0.8;

            // Central Laser Beam
            float beamPos = 0.0;
            float dist = abs(uv.x - beamPos);

            // Crisp white-hot core
            float coreThickness = 0.0003;
            float core = coreThickness / (dist + 0.0001);
            core = pow(core, 1.5);

            // Colored halo with soft pulse
            float pulse = sin(time * 2.0) * 0.5 + 0.5;
            float haloThickness = 0.04 + 0.01 * pulse;
            float halo = exp(-dist / haloThickness) * 0.6;

            // Derive colors from the primary brand identity (Blue-500)
            vec3 brandColor = vec3(0.23, 0.51, 0.96); 
            vec3 haloColor = brandColor * halo;

            // Volumetric Smoke & Fog Drift
            vec2 smokeUv = st * vec2(4.0, 3.0);
            smokeUv.y -= time * 0.3; // Upward drift
            
            vec2 q = vec2(0.0);
            q.x = fbm(smokeUv + vec2(time * 0.1, 0.0));
            q.y = fbm(smokeUv + vec2(0.0, time * 0.15));
            
            float smokeNoise = fbm(smokeUv + q + vec2(1.7, 9.2));
            
            // Constrain smoke directly around the beam
            float smokeFalloff = exp(-dist * 6.0);
            vec3 smokeColor = brandColor * smokeNoise * smokeFalloff * 0.5;

            // Combine and add subtle ambient dark layer
            vec3 finalColor = vec3(core) + haloColor + smokeColor;
            finalColor += vec3(0.005, 0.01, 0.02);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    function loadShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1.0,  1.0,
         1.0,  1.0,
        -1.0, -1.0,
         1.0, -1.0,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'aVertexPosition');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');

    let animationFrameId;

    function resize() {
        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
            canvas.width = rect.width;
            canvas.height = rect.height;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
    }

    const startTime = Date.now();
    function render() {
        resize();
        gl.useProgram(program);
        gl.uniform2f(resLoc, canvas.width, canvas.height);
        gl.uniform1f(timeLoc, (Date.now() - startTime) / 1000.0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        animationFrameId = requestAnimationFrame(render);
    }
    render();

    return () => {
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="overflow-hidden -mt-20 lg:pt-56 lg:-mt-32 lg:pb-48 bg-[#050B14] w-full z-0 pt-40 pb-40 relative">
      <style>{`
        @keyframes scanner {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-scanner { animation: scanner 3s ease-in-out infinite; }
        
        @keyframes lottiePop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes lottieFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes lottieWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
        }
        @keyframes lottieRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes lottieSlideRight {
          0% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(4px); opacity: 0.8; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes lottieSwitch {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }

        .anim-slack { animation: lottieWiggle 3s ease-in-out infinite; }
        .anim-chevron { animation: lottieSlideRight 2s ease-in-out infinite; }
        .anim-command { animation: lottiePop 2.5s ease-in-out infinite; }
        .anim-figma { animation: lottieFloat 3.5s ease-in-out infinite; }
        .anim-asterisk { animation: lottieRotate 8s linear infinite; }
        .anim-link { animation: lottiePop 3s ease-in-out infinite reverse; }
        .anim-aperture { animation: lottieRotate 12s linear infinite reverse; }
        .anim-toggle { animation: lottieSwitch 2s ease-in-out infinite; }
      `}</style>

      {/* WebGL Laser Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen opacity-90"
      ></canvas>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-40"></div>
        <div className="absolute top-24 left-1/4 h-0.5 w-0.5 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-48 right-1/4 h-1 w-1 bg-blue-400/20 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 h-0.5 w-0.5 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* CSS Flow Visualization replacing SVG paths */}
        <div className="absolute inset-0 overflow-hidden hidden md:block opacity-30 max-w-5xl mx-auto">
          {[15, 35, 65, 85].map((left, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" style={{ left: `${left}%` }}>
              <div className="w-full h-1/4 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-scanner" style={{ animationDelay: `${i * 1.2}s`, animationDuration: '4s' }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl">
            Trusted Partners
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-slate-400 leading-relaxed">
            We elevate your cybersecurity to the highest level alongside the
            world's leading brands and infrastructure providers.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 z-10 mb-20 relative">
            
            {/* Box 1: Slack */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-slack text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="simple-icons:slack" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 2: Chevrons */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-chevron text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="solar:double-alt-arrow-right-linear" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 3: Command */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-command text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="lucide:command" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 4: Figma */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-figma text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="simple-icons:figma" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 5: Asterisk */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-asterisk text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="lucide:asterisk" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 6: Link */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-link text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="solar:link-linear" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 7: Aperture */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-aperture text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="lucide:aperture" width="32" height="32"></iconify-icon>
              </div>
            </div>

            {/* Box 8: Toggle */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center rounded-xl">
              <GridCorners />
              <div className="anim-toggle text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <iconify-icon icon="solar:toggle-on-linear" width="32" height="32"></iconify-icon>
              </div>
            </div>

          </div>

          {/* Central Convergence Hub */}
          <div className="flex mt-32 z-20 relative justify-center">
            <div className="flex relative items-center justify-center">
              {/* Connection Tip & Beam */}
              <div className="absolute -top-32 h-32 w-[2px] bg-gradient-to-b from-transparent via-blue-500/50 to-blue-500 shadow-[0_0_20px_#3b82f6] overflow-hidden">
                <div className="absolute inset-0 bg-white/50 w-full h-1/2 animate-scanner blur-[2px]"></div>
              </div>

              {/* Core Icon Wrapper with Orbital Rings */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#020204] shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-blue-500/30">
                {/* Outer Spinning Ring */}
                <div className="absolute inset-[-10px] rounded-full border border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]"></div>

                {/* Inner Reverse Spinning Ring */}
                <div className="absolute inset-[-4px] rounded-full border border-blue-400/30 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Pulsing Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>

                {/* Icon */}
                <div className="relative z-10 animate-[pulse_3s_ease-in-out_infinite] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] flex items-center justify-center">
                  <iconify-icon icon="simple-icons:react" width="40" height="40"></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;