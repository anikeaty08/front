import React, { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'

const vertexShaderSrc = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSrc = `
  precision highp float;
  uniform float u_time;
  uniform float u_dither_time;
  uniform float u_dither_size;
  uniform float u_dither_animate;
  uniform int u_dither_pattern;
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
      for(int i=0; i<4; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
      return v;
  }

  void main() {
      float pixelSize = max(1.0, u_dither_size);
      vec2 coord = floor(gl_FragCoord.xy / pixelSize);

      float threshold = 0.0;
      
      // Calculate Dither Patterns
      if (u_dither_pattern == 0) {
          // 4x4 Bayer Matrix
          float x = mod(coord.x, 4.0);
          float y = mod(coord.y, 4.0);

          if (x == 0.0 && y == 0.0) threshold = 0.0;
          else if (x == 1.0 && y == 0.0) threshold = 8.0;
          else if (x == 2.0 && y == 0.0) threshold = 2.0;
          else if (x == 3.0 && y == 0.0) threshold = 10.0;
          else if (x == 0.0 && y == 1.0) threshold = 12.0;
          else if (x == 1.0 && y == 1.0) threshold = 4.0;
          else if (x == 2.0 && y == 1.0) threshold = 14.0;
          else if (x == 3.0 && y == 1.0) threshold = 6.0;
          else if (x == 0.0 && y == 2.0) threshold = 3.0;
          else if (x == 1.0 && y == 2.0) threshold = 11.0;
          else if (x == 2.0 && y == 2.0) threshold = 1.0;
          else if (x == 3.0 && y == 2.0) threshold = 9.0;
          else if (x == 0.0 && y == 3.0) threshold = 15.0;
          else if (x == 1.0 && y == 3.0) threshold = 7.0;
          else if (x == 2.0 && y == 3.0) threshold = 13.0;
          else if (x == 3.0 && y == 3.0) threshold = 5.0;

          threshold = threshold / 16.0;

          if (u_dither_animate > 0.5) {
              float currentNoise = fract(sin(dot(coord.xy + vec2(floor(u_dither_time * 24.0)), vec2(12.9898, 78.233))) * 43758.5453);
              threshold = mix(threshold, currentNoise, 0.6);
          }
      } else {
          // Procedural Math Patterns
          vec2 p = coord * 0.15;
          float t = u_dither_animate > 0.5 ? u_dither_time * 2.0 : 0.0;
          
          if (u_dither_pattern == 1) { // Grid
              p += t * 0.5;
              threshold = (sin(p.x * 6.28) * sin(p.y * 6.28) + 1.0) * 0.5;
          } 
          else if (u_dither_pattern == 2) { // Waves
              p += t * 0.5;
              threshold = (sin(p.x * 5.0 + sin(p.y * 3.0)) + 1.0) * 0.5;
          } 
          else if (u_dither_pattern == 3) { // Vortex
              vec2 center = u_resolution.xy / (2.0 * pixelSize);
              vec2 d = coord - center;
              float r = length(d) * 0.05;
              float a = atan(d.y, d.x);
              threshold = (sin(r * 10.0 + a * 4.0 - t * 3.0) + 1.0) * 0.5;
          } 
          else if (u_dither_pattern == 4) { // Petals
              vec2 center = u_resolution.xy / (2.0 * pixelSize);
              vec2 d = coord - center;
              float r = length(d) * 0.05;
              float a = atan(d.y, d.x);
              float petals = sin(a * 5.0);
              threshold = (sin(r * 12.0 - petals * 4.0 - t * 2.0) + 1.0) * 0.5;
          }
      }

      vec2 uv = (coord * pixelSize) / u_resolution.xy;
      
      // Slow drifting organic motion for fbm
      vec2 bp = uv * 2.5 + vec2(u_time * 0.03, u_time * 0.02);
      float n = fbm(bp);
      
      // Broad central vignette so edges recede
      float dist = distance(uv, vec2(0.5, 0.5));
      float vignette = smoothstep(1.0, 0.2, dist);
      
      // Combine atmospheric clouds + vignette
      float brightness = n * 0.8 * vignette;
      
      // Apply the threshold calculation based on the selected algorithm
      float finalVal = step(threshold, brightness);
      
      gl_FragColor = vec4(vec3(finalVal), 1.0);
  }
`;

export default function VisualizationWell({ 
  nodes, globalBlur, blendMode, activeNodeId, setActiveNodeId, 
  updateNode, ditherOpacity, ditherSize, ditherAnimated, ditherPattern, isAnimated 
}) {
  const containerRef = useRef(null)
  const ditherCanvasRef = useRef(null)
  
  const isAnimatedRef = useRef(isAnimated)
  const ditherAnimatedRef = useRef(ditherAnimated)
  const ditherSizeRef = useRef(ditherSize)
  const ditherPatternRef = useRef(ditherPattern)
  
  const [draggingId, setDraggingId] = useState(null)

  // Keep refs in sync with props to avoid re-initializing WebGL on toggle
  useEffect(() => { isAnimatedRef.current = isAnimated }, [isAnimated])
  useEffect(() => { ditherAnimatedRef.current = ditherAnimated }, [ditherAnimated])
  useEffect(() => { ditherSizeRef.current = ditherSize }, [ditherSize])
  useEffect(() => { ditherPatternRef.current = ditherPattern }, [ditherPattern])

  useEffect(() => {
    const canvas = ditherCanvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSrc);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0, -1.0,  1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const ditherTimeLocation = gl.getUniformLocation(program, "u_dither_time");
    const ditherSizeLocation = gl.getUniformLocation(program, "u_dither_size");
    const ditherAnimateLocation = gl.getUniformLocation(program, "u_dither_animate");
    const ditherPatternLocation = gl.getUniformLocation(program, "u_dither_pattern");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    let animationFrameId;
    let timeOffset = 0;
    let ditherTimeOffset = 0;
    let lastTime = performance.now();

    const render = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      if (isAnimatedRef.current) {
        timeOffset += deltaTime;
      }
      if (ditherAnimatedRef.current) {
        ditherTimeOffset += deltaTime;
      }

      // Map pattern string to integer uniform
      const patterns = ['bayer', 'grid', 'waves', 'vortex', 'petals'];
      const patternIndex = patterns.indexOf(ditherPatternRef.current);

      gl.uniform1f(timeLocation, timeOffset / 1000.0);
      gl.uniform1f(ditherTimeLocation, ditherTimeOffset / 1000.0);
      gl.uniform1f(ditherSizeLocation, ditherSizeRef.current);
      gl.uniform1f(ditherAnimateLocation, ditherAnimatedRef.current ? 1.0 : 0.0);
      gl.uniform1i(ditherPatternLocation, patternIndex > -1 ? patternIndex : 0);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  const handlePointerDown = (e, id) => {
    e.preventDefault()
    e.target.setPointerCapture(e.pointerId)
    setDraggingId(id)
    setActiveNodeId(id)
  }

  const handlePointerMove = (e) => {
    if (!draggingId || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    let x = ((e.clientX - rect.left) / rect.width) * 100
    let y = ((e.clientY - rect.top) / rect.height) * 100
    
    // Constrain to bounds
    x = Math.max(0, Math.min(100, x))
    y = Math.max(0, Math.min(100, y))
    
    updateNode(draggingId, 'x', x)
    updateNode(draggingId, 'y', y)
  }

  const handlePointerUp = (e) => {
    if (draggingId) {
      e.target.releasePointerCapture(e.pointerId)
      setDraggingId(null)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center isolate touch-none"
      style={{
        background: '#050505',
        boxShadow: 'inset 0 4px 24px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,1), 0 1px 0 rgba(255,255,255,0.06)'
      }}
    >
      {/* Generated Mesh Gradient Layer */}
      <div 
        className="absolute inset-[-20%] z-0 pointer-events-none transition-all duration-300"
        style={{
          filter: `blur(${globalBlur}px)`,
          mixBlendMode: blendMode,
          backgroundImage: nodes.map(n => `radial-gradient(circle at ${n.x}% ${n.y}%, ${n.color} 0%, transparent ${n.size}%)`).join(', ')
        }}
      ></div>

      {/* WebGL Animated Pattern Dither Overlay Layer */}
      <canvas 
        ref={ditherCanvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: ditherOpacity / 100
        }}
      />

      {/* Interactive Node Trackers */}
      {nodes.map(n => (
        <div 
          key={n.id}
          onPointerDown={(e) => handlePointerDown(e, n.id)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={clsx(
            "absolute w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/20 z-10 flex items-center justify-center mix-blend-screen touch-none cursor-grab active:cursor-grabbing",
            activeNodeId === n.id ? "scale-100 opacity-100" : "scale-50 opacity-0 hover:scale-100 hover:opacity-50",
            draggingId !== n.id && "transition-all duration-300" // disable transiton while dragging for instant response
          )}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)] pointer-events-none"></div>
          <div className="absolute w-[150%] h-[1px] bg-white/30 pointer-events-none"></div>
          <div className="absolute h-[150%] w-[1px] bg-white/30 pointer-events-none"></div>
        </div>
      ))}

      {/* Ambient Inner Glow Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(245,158,11,0.05) 0%, transparent 70%)'
        }}
      ></div>
      
      {/* Micro Visual Data Chrome */}
      <div className="absolute top-4 left-4 z-20 flex gap-2 pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]"></div>
      </div>
      
      <div className="absolute bottom-4 right-5 z-20 text-[9px] font-mono text-zinc-600 tracking-widest uppercase pointer-events-none">
        MESH.RNDR_ACTV
      </div>

      {/* Engraved Reticle */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 mix-blend-screen opacity-30">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-white/60"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-white/60"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-white/60"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-white/60"></div>
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full border border-white/80"></div>
        </div>
      </div>
    </div>
  )
}