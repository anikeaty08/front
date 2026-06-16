import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const canvas = document.getElementById('cardCanvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.error('WebGL not supported');
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      mat2 Rot(float a) {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
      }

      vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
        return fract(sin(p) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        
        vec2 u = f * f * (3.0 - 2.0 * f);

        float n = mix(
          mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)), 
              dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
          mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), 
              dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
        return 0.5 + 0.5 * n;
      }

      float smoothstep3(float a, float b, float t) {
        float x = clamp((t - a) / (b - a), 0.0, 1.0);
        return x * x * (3.0 - 2.0 * x);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float ratio = u_resolution.x / u_resolution.y;

        vec2 tuv = uv;
        tuv -= 0.5;

        // rotate with Noise
        float degree = noise(vec2(u_time * 0.1, tuv.x * tuv.y));

        tuv.y *= 1.0 / ratio;
        tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
        tuv.y *= ratio;

        // Wave warp with sin
        float frequency = 5.0;
        float amplitude = 30.0;
        float speed = u_time * 2.0;
        tuv.x += sin(tuv.y * frequency + speed) / amplitude;
        tuv.y += sin(tuv.x * frequency * 1.5 + speed) / (amplitude * 0.5);

        // draw the image
        vec3 colorYellow = vec3(0.957, 0.804, 0.623);
        vec3 colorDeepBlue = vec3(0.192, 0.384, 0.933);
        vec3 layer1 = mix(colorYellow, colorDeepBlue, smoothstep3(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));

        vec3 colorRed = vec3(0.910, 0.510, 0.8);
        vec3 colorBlue = vec3(0.350, 0.71, 0.953);
        vec3 layer2 = mix(colorRed, colorBlue, smoothstep3(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));

        vec3 finalComp = mix(layer1, layer2, smoothstep3(0.5, -0.3, tuv.y));

        vec3 col = finalComp;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    gl.viewport(0, 0, canvas.width, canvas.height);

    function render(time) {
      time *= 0.001;

      gl.useProgram(program);
      
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform1f(timeUniformLocation, time);
      
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
      
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      
      requestAnimationFrame(render);
    }
    
    requestAnimationFrame(render);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[380px] h-[240px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-200 slide-animation shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<canvas className="absolute inset-0 z-0" height="240" id="cardCanvas" width="380"></canvas>

<div className="absolute inset-0 p-6 text-white flex flex-col justify-between z-10 backdrop-blur-[0.5px]">

<div className="flex justify-between items-start">

<div className="h-8 w-10 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-md flex flex-col justify-center shadow-lg border border-yellow-300/30">
<div className="h-1.5 mx-1 my-0.5 bg-yellow-900/40 rounded"></div>
<div className="h-1.5 mx-1 my-0.5 bg-yellow-900/40 rounded"></div>
</div>

<div className="flex flex-col items-center opacity-80">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 20" width="20">
<path d="M5 12c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
<path d="M8 12c0-2.8 2.2-5 5-5s5 2.2 5 5"></path>
<path d="M11 12c0-1.1 0.9-2 2-2s2 0.9 2 2"></path>
</svg>
</div>

<div className="font-bold text-xl tracking-widest">
<span className="text-white drop-shadow-lg filter">FLUX</span>
</div>
</div>

<div className="text-center font-mono text-xl tracking-wider font-semibold mt-2 mb-4 drop-shadow-md">
<span className="text-white/95">4929</span>
<span className="mx-2 text-white/95">•••</span>
<span className="mx-2 text-white/95">•••</span>
<span className="text-white/95">3021</span>
</div>

<div className="flex justify-between items-end">

<div className="flex flex-col">
<span className="text-xs text-white/70 font-medium">CARDHOLDER NAME</span>
<span className="font-mono text-sm tracking-wider text-white/95 drop-shadow-sm">ALEX RIVERA</span>
</div>

<div className="flex flex-col text-right">
<span className="text-xs text-white/70 font-medium">EXPIRES</span>
<span className="font-mono text-sm tracking-wider text-white/95 drop-shadow-sm">12/28</span>
</div>

<div className="flex flex-col items-end">
<span className="text-xs text-white/70 font-medium">NETWORK</span>
<div className="flex space-x-1 mt-1">
<div className="w-4 h-4 bg-white/90 rounded-full"></div>
<div className="w-4 h-4 bg-white/70 rounded-full -ml-2"></div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
