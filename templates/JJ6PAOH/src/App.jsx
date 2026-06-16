import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      color = mix(color, vec3(0.02, 0.7, 0.9), 0.32 + 0.16 * sin(2.0 * u_scroll_progress + 1.2));
      color += vec3(0.15, 0.0, 0.6) * sin(2.0 * u_scroll_progress + 1.5);
      color = color * noise;
      gl_FragColor = vec4(color, noise);
    }
  


    const canvasEl = document.querySelector("canvas#neuro");
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
      if (!gl) alert("WebGL is not supported by your browser.");
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
      const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      return gl;
    }
    function render() {
      const currentTime = performance.now();
      pointer.x += (pointer.tX - pointer.x) * .2;
      pointer.y += (pointer.tY - pointer.y) * .2;
      gl.uniform1f(uniforms.u_time, currentTime);
      gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
      gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    function resizeCanvas() {
      canvasEl.width = window.innerWidth * devicePixelRatio;
      canvasEl.height = window.innerHeight * devicePixelRatio;
      gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
    }
    function setupEvents() {
      window.addEventListener("pointermove", e => updateMousePosition(e.clientX, e.clientY));
      window.addEventListener("touchmove", e => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
      window.addEventListener("click", e => updateMousePosition(e.clientX, e.clientY));
      function updateMousePosition(eX, eY) {
        pointer.tX = eX;
        pointer.tY = eY;
      }
    }
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.animate-seq-1, .animate-seq-2, .animate-seq-3, .animate-seq-4').forEach(el => {
        void el.offsetWidth;
        el.style.visibility = 'visible';
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="neuro"></canvas>
<main className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full">
<header className="w-full flex justify-between items-center px-8 py-6 max-w-6xl mx-auto rounded-3xl mb-7 animate-seq-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 16.5V7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M7 16.5V18a1 1 0 001 1h2a1 1 0 001-1v-1.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="geist-heading geist-h2 select-none">ImmersiaVR</span>
</div>
<nav className="hidden md:flex gap-8 font-medium text-lg">
<a className="hover:text-white/50 transition" href="#features">Features</a>
<a className="hover:text-white/50 transition" href="#about">About</a>
<a className="hover:text-white/50 transition" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-block px-6 py-2 rounded-lg outline-btn font-semibold" href="#get-started">
        Get Started
      </a>
</header>
<section className="flex flex-col items-center justify-center flex-1 w-full px-6">
<div className="max-w-2xl w-full outline-style rounded-3xl px-8 py-14 text-center backdrop-blur-md animate-seq-2">
<h1 className="geist-heading geist-h1">
          Step Into the Future of VR
        </h1>
<p className="geist-heading geist-h2 mb-9 text-white/60">
          ImmersiaVR delivers breathtaking realism, seamless interaction, and endless possibilities for gaming, education, and beyond.
        </p>
<a className="inline-block px-8 py-4 rounded-xl outline-btn font-semibold text-white" href="#get-started">
          Get Started
        </a>
</div>
</section>
<section className="w-full max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-6" id="features">
<div className="outline-card rounded-2xl p-8 flex flex-col items-center backdrop-blur-md animate-seq-2">
<svg className="w-10 h-10 mb-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20v-6m0 0a4 4 0 100-8 4 4 0 000 8zm0 0v6m-4-4a4 4 0 010-8 4 4 0 014-4 4 4 0 014 4 4 4 0 010 8m0 0a4 4 0 010 8 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 010-8"></path></svg>
<h3 className="geist-heading geist-h2 mb-2">Hyper-Realistic Worlds</h3>
<p className="body-text text-white/60">Explore immersive environments with stunning visuals and lifelike spatial audio.</p>
</div>
<div className="outline-card rounded-2xl p-8 flex flex-col items-center backdrop-blur-md animate-seq-3">
<svg className="w-10 h-10 mb-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 4v7m0 0l3-3m-3 3l-3-3m6 9v-1a4 4 0 00-8 0v1a2 2 0 01-2 2h12a2 2 0 01-2-2z"></path></svg>
<h3 className="geist-heading geist-h2 mb-2">Intuitive Controls</h3>
<p className="body-text text-white/60">Natural hand tracking and haptics for seamless, lifelike interaction with your worlds.</p>
</div>
<div className="outline-card rounded-2xl p-8 flex flex-col items-center backdrop-blur-md animate-seq-4">
<svg className="w-10 h-10 mb-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11.5a6.5 6.5 0 10-13 0v2.658c0 .538-.214 1.055-.595 1.437L3 17h5"></path></svg>
<h3 className="geist-heading geist-h2 mb-2">Connected &amp; Social</h3>
<p className="body-text text-white/60">Meet, play, and collaborate in shared spaces with friends and creators worldwide.</p>
</div>
</section>
<footer className="mt-20 mb-6 text-[14px] text-center font-sans animate-seq-4 text-white body-text text-white/60">
      © 2024 ImmersiaVR — Experience. Connect. Create.
    </footer>
</main>




    </>
  );
}
