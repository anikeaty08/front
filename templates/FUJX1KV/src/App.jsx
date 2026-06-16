import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    (function() {
      const canvas = document.getElementById('gl-canvas-section');
      if (!canvas) return;
      const gl = canvas.getContext('webgl');
      if (!gl) return;

      const vert = `
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0, 1); }
      `;
      const frag = `
        precision highp float;
        uniform float iTime;
        uniform vec2 iResolution;
        #define filmGrainIntensity 0.1

        mat2 Rot(float a) {
            float s = sin(a);
            float c = cos(a);
            return mat2(c, -s, s, c);
        }

        vec2 hash(vec2 p) {
            p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
            return fract(sin(p)*43758.5453);
        }

        float noise(in vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f*f*(3.0-2.0*f);
            float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                              dot(-1.0+2.0*hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                         mix(dot(-1.0+2.0*hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                              dot(-1.0+2.0*hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
            return 0.5 + 0.5*n;
        }

        float filmGrainNoise(in vec2 uv) {
            return length(hash(vec2(uv.x, uv.y)));
        }

        void main() {
            vec2 fragCoord = gl_FragCoord.xy;
            vec2 uv = fragCoord / iResolution.xy;
            float aspectRatio = iResolution.x / iResolution.y;

            vec2 tuv = uv - .5;
            float degree = noise(vec2(iTime*.05, tuv.x*tuv.y));
            tuv.y *= 1./aspectRatio;
            tuv = Rot(radians((degree-.5)*720.+180.)) * tuv;
            tuv.y *= aspectRatio;

            float frequency = 5.;
            float amplitude = 30.;
            float speed = iTime * 2.;
            tuv.x += sin(tuv.y*frequency+speed)/amplitude;
            tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);

            vec3 auroraGreen = vec3(80.0, 255.0, 130.0)/255.0;
            vec3 auroraCyan = vec3(70.0, 230.0, 255.0)/255.0;
            vec3 auroraMagenta = vec3(220.0, 100.0, 255.0)/255.0;
            vec3 auroraBlue = vec3(30.0, 60.0, 200.0)/255.0;

            vec3 auroraPurple = vec3(120.0, 60.0, 200.0)/255.0;
            vec3 auroraPink = vec3(255.0, 110.0, 180.0)/255.0;
            vec3 auroraYellowGreen = vec3(180.0, 255.0, 120.0)/255.0;
            vec3 auroraMidnight = vec3(10.0, 30.0, 60.0)/255.0;

            float cycle = sin(iTime * 0.5);
            float t = (sign(cycle) * pow(abs(cycle), 0.6) + 1.) / 2.;
            vec3 color1 = mix(auroraGreen, auroraPurple, t);
            vec3 color2 = mix(auroraCyan, auroraMidnight, t);
            vec3 color3 = mix(auroraMagenta, auroraYellowGreen, t);
            vec3 color4 = mix(auroraBlue, auroraPink, t);

            vec3 layer1 = mix(color3, color2, smoothstep(-.3, .2, (Rot(radians(-5.))*tuv).x));
            vec3 layer2 = mix(color4, color1, smoothstep(-.3, .2, (Rot(radians(-5.))*tuv).x));
            vec3 color = mix(layer1, layer2, smoothstep(.5, -.3, tuv.y));

            color = color - filmGrainNoise(uv) * filmGrainIntensity;

            gl_FragColor = vec4(color, 1.0);
        }
      `;

      function createShader(gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          throw new Error(gl.getShaderInfoLog(shader));
        }
        return shader;
      }
      function createProgram(gl, vsrc, fsrc) {
        var vshader = createShader(gl, gl.VERTEX_SHADER, vsrc);
        var fshader = createShader(gl, gl.FRAGMENT_SHADER, fsrc);
        var prog = gl.createProgram();
        gl.attachShader(prog, vshader);
        gl.attachShader(prog, fshader);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
          throw new Error(gl.getProgramInfoLog(prog));
        }
        return prog;
      }

      let prog, posBuf, positionLoc, iTimeLoc, iResolutionLoc;

      function resize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      window.addEventListener('resize', () => {
        resize();
      });

      function main() {
        resize();
        prog = createProgram(gl, vert, frag);
        positionLoc = gl.getAttribLocation(prog, 'position');
        iTimeLoc = gl.getUniformLocation(prog, 'iTime');
        iResolutionLoc = gl.getUniformLocation(prog, 'iResolution');
        posBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
          -1,-1, 1,-1, -1,1, 1,1
        ]), gl.STATIC_DRAW);
        render();
      }

      function render(t=0) {
        gl.useProgram(prog);
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
        gl.uniform1f(iTimeLoc, t*0.001);
        gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
      }

      main();
    })();
  


    (function() {
      const canvas = document.getElementById('gl-canvas-pricing');
      if (!canvas) return;
      const gl = canvas.getContext('webgl');
      if (!gl) return;

      const vert = `
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0, 1); }
      `;
      const frag = `
        precision highp float;
        uniform float iTime;
        uniform vec2 iResolution;
        #define filmGrainIntensity 0.1

        mat2 Rot(float a) {
            float s = sin(a);
            float c = cos(a);
            return mat2(c, -s, s, c);
        }

        vec2 hash(vec2 p) {
            p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
            return fract(sin(p)*43758.5453);
        }

        float noise(in vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f*f*(3.0-2.0*f);
            float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                              dot(-1.0+2.0*hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                         mix(dot(-1.0+2.0*hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                              dot(-1.0+2.0*hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
            return 0.5 + 0.5*n;
        }

        float filmGrainNoise(in vec2 uv) {
            return length(hash(vec2(uv.x, uv.y)));
        }

        void main() {
            vec2 fragCoord = gl_FragCoord.xy;
            vec2 uv = fragCoord / iResolution.xy;
            float aspectRatio = iResolution.x / iResolution.y;

            vec2 tuv = uv - .5;
            float degree = noise(vec2(iTime*.05, tuv.x*tuv.y));
            tuv.y *= 1./aspectRatio;
            tuv = Rot(radians((degree-.5)*720.+180.)) * tuv;
            tuv.y *= aspectRatio;

            float frequency = 5.;
            float amplitude = 30.;
            float speed = iTime * 2.;
            tuv.x += sin(tuv.y*frequency+speed)/amplitude;
            tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);

            vec3 auroraGreen = vec3(80.0, 255.0, 130.0)/255.0;
            vec3 auroraCyan = vec3(70.0, 230.0, 255.0)/255.0;
            vec3 auroraMagenta = vec3(220.0, 100.0, 255.0)/255.0;
            vec3 auroraBlue = vec3(30.0, 60.0, 200.0)/255.0;

            vec3 auroraPurple = vec3(120.0, 60.0, 200.0)/255.0;
            vec3 auroraPink = vec3(255.0, 110.0, 180.0)/255.0;
            vec3 auroraYellowGreen = vec3(180.0, 255.0, 120.0)/255.0;
            vec3 auroraMidnight = vec3(10.0, 30.0, 60.0)/255.0;

            float cycle = sin(iTime * 0.5);
            float t = (sign(cycle) * pow(abs(cycle), 0.6) + 1.) / 2.;
            vec3 color1 = mix(auroraGreen, auroraPurple, t);
            vec3 color2 = mix(auroraCyan, auroraMidnight, t);
            vec3 color3 = mix(auroraMagenta, auroraYellowGreen, t);
            vec3 color4 = mix(auroraBlue, auroraPink, t);

            vec3 layer1 = mix(color3, color2, smoothstep(-.3, .2, (Rot(radians(-5.))*tuv).x));
            vec3 layer2 = mix(color4, color1, smoothstep(-.3, .2, (Rot(radians(-5.))*tuv).x));
            vec3 color = mix(layer1, layer2, smoothstep(.5, -.3, tuv.y));

            color = color - filmGrainNoise(uv) * filmGrainIntensity;

            gl_FragColor = vec4(color, 1.0);
        }
      `;

      function createShader(gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          throw new Error(gl.getShaderInfoLog(shader));
        }
        return shader;
      }
      function createProgram(gl, vsrc, fsrc) {
        var vshader = createShader(gl, gl.VERTEX_SHADER, vsrc);
        var fshader = createShader(gl, gl.FRAGMENT_SHADER, fsrc);
        var prog = gl.createProgram();
        gl.attachShader(prog, vshader);
        gl.attachShader(prog, fshader);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
          throw new Error(gl.getProgramInfoLog(prog));
        }
        return prog;
      }

      let prog, posBuf, positionLoc, iTimeLoc, iResolutionLoc;

      function resize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      window.addEventListener('resize', () => {
        resize();
      });

      function main() {
        resize();
        prog = createProgram(gl, vert, frag);
        positionLoc = gl.getAttribLocation(prog, 'position');
        iTimeLoc = gl.getUniformLocation(prog, 'iTime');
        iResolutionLoc = gl.getUniformLocation(prog, 'iResolution');
        posBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
          -1,-1, 1,-1, -1,1, 1,1
        ]), gl.STATIC_DRAW);
        render();
      }

      function render(t=0) {
        gl.useProgram(prog);
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
        gl.uniform1f(iTimeLoc, t*0.001);
        gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
      }

      main();
    })();
  


precision highp float;
uniform float iTime;
uniform vec2 iResolution;
#define filmGrainIntensity 0.1

mat2 Rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
    return fract(sin(p)*43758.5453);
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                      dot(-1.0+2.0*hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                 mix(dot(-1.0+2.0*hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                      dot(-1.0+2.0*hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
    return 0.5 + 0.5*n;
}

float filmGrainNoise(in vec2 uv) {
    return length(hash(vec2(uv.x, uv.y)));
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / iResolution.xy;
    float aspectRatio = iResolution.x / iResolution.y;

    vec2 tuv = uv - .5;
    float degree = noise(vec2(iTime*.05, tuv.x*tuv.y));
    tuv.y *= 1./aspectRatio;
    tuv = Rot(radians((degree-.5)*720.+180.)) * tuv;
    tuv.y *= aspectRatio;

    float frequency = 5.;
    float amplitude = 30.;
    float speed = iTime * 2.;
    tuv.x += sin(tuv.y*frequency+speed)/amplitude;
    tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);

    vec3 auroraGreen = vec3(80.0, 255.0, 130.0)/255.0;
    vec3 auroraCyan = vec3(70.0, 230.0, 255.0)/255.0;
    vec3 auroraMagenta = vec3(220.0, 100.0, 255.0)/255.0;
    vec3 auroraBlue = vec3(30.0, 60.0, 200.0)/255.0;

    vec3 auroraPurple = vec3(120.0, 60.0, 200.0)/255.0;
    vec3 auroraPink = vec3(255.0, 110.0, 180.0)/255.0;
    vec3 auroraYellowGreen = vec3(180.0, 255.0, 120.0)/255.0;
    vec3 auroraMidnight = vec3(10.0, 30.0, 60.0)/255.0;

    float cycle = sin(iTime * 0.5);
    float t = (sign(cycle) * pow(abs(cycle), 0.6) + 1.) / 2.;
    vec3 color1 = mix(auroraGreen, auroraPurple, t);
    vec3 color2 = mix(auroraCyan, auroraMidnight, t);
    vec3 color3 = mix(auroraMagenta, auroraYellowGreen, t);
    vec3 color4 = mix(auroraBlue, auroraPink, t);

    vec3 layer1 = mix(color3, color2, smoothstep(-.3, .2, (Rot(radians(-5.))*tuv).x));
    vec3 layer2 = mix(color4, color1, smoothstep(-.3, .2, (Rot(radians(-5.))*tuv).x));
    vec3 color = mix(layer1, layer2, smoothstep(.5, -.3, tuv.y));

    color = color - filmGrainNoise(uv) * filmGrainIntensity;

    gl_FragColor = vec4(color, 1.0);
}



function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}
function createProgram(gl, vsrc, fsrc) {
  var vshader = createShader(gl, gl.VERTEX_SHADER, vsrc);
  var fshader = createShader(gl, gl.FRAGMENT_SHADER, fsrc);
  var prog = gl.createProgram();
  gl.attachShader(prog, vshader);
  gl.attachShader(prog, fshader);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(prog));
  }
  return prog;
}
const vert = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0, 1); }
`;
const frag = document.getElementById('fragShader').textContent;
const canvas = document.getElementById('gl-canvas');
const gl = canvas.getContext('webgl');
let prog, posBuf, positionLoc, iTimeLoc, iResolutionLoc;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}
window.addEventListener('resize', resize);

function main() {
  resize();
  prog = createProgram(gl, vert, frag);
  positionLoc = gl.getAttribLocation(prog, 'position');
  iTimeLoc = gl.getUniformLocation(prog, 'iTime');
  iResolutionLoc = gl.getUniformLocation(prog, 'iResolution');
  posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1,-1, 1,-1, -1,1, 1,1
  ]), gl.STATIC_DRAW);
  render();
}

function render(t=0) {
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.enableVertexAttribArray(positionLoc);
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
  gl.uniform1f(iTimeLoc, t*0.001);
  gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}

main();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="" height="1270" id="gl-canvas" width="2080"></canvas>
<div className="hero-overlay"></div>

<header className="w-full flex lg:pt-10 lg:pr-16 lg:pb-10 lg:pl-16 relative z-20 pt-8 pr-12 pb-8 pl-12 items-center justify-between nav-content">
<span className="text-2xl lg:text-3xl font-medium tracking-tight text-white drop-shadow-lg">Mashup.ai</span>
<nav className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg">
<span className="cursor-pointer hover:text-white transition-colors text-gray-100 font-quicksand drop-shadow-md">Solutions</span>
<span className="cursor-pointer hover:text-white transition-colors text-gray-100 font-quicksand drop-shadow-md">Resources</span>
<span className="cursor-pointer hover:text-white transition-colors text-gray-100 font-quicksand drop-shadow-md">Community</span>
</nav>
<div className="flex gap-4 text-base lg:text-lg">
<button className="border-0 rounded pt-3 pr-6 pb-3 pl-6 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8 hover:text-white transition-colors text-gray-100 drop-shadow-md">Log in</button>
<button className="border rounded pt-3 pr-6 pb-3 pl-6 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-colors text-white drop-shadow-md">Start Free</button>
</div>
</header>

<section className="w-full lg:pt-32 lg:pr-16 lg:pb-48 lg:pl-16 relative overflow-hidden min-h-screen flex pt-20 pr-12 pb-32 pl-12 items-center">

<div className="hero-content fade-up lg:space-y-16 max-w-6xl text-center mr-auto ml-auto space-y-12">
<h1 className="lg:text-7xl xl:text-8xl leading-tight text-6xl font-medium text-white tracking-tight font-playfair drop-shadow-lg">Design Smarter.<br/>Create Faster.</h1>
<p className="lg:text-2xl max-w-4xl leading-relaxed text-xl text-white font-quicksand mr-auto ml-auto drop-shadow-md">Meet Mashup.ai — your personal AI Graphic Design Assistant that instantly turns ideas into stunning visuals, brand assets, and illustrations.</p>
<form className="flex max-w-2xl overflow-hidden relative bg-white/10 border-white/20 border rounded-[20px] mr-auto ml-auto drop-shadow-lg backdrop-blur-md" style={{borderWidth: '2px'}}>
<input aria-label="prompt" className="flex-1 placeholder-white/60 focus:outline-none lg:pt-6 lg:pr-8 lg:pb-6 lg:pl-8 text-lg text-white bg-transparent pt-5 pr-6 pb-5 pl-6 rounded-[20px]" placeholder="Describe your design idea..." type="text"/>
<button aria-label="Generate" className="text-lg border-l pr-8 pl-8 lg:pr-10 lg:pl-10 bg-white/20 border-white/20 hover:bg-white/30 transition-colors">
<svg className="inline-block w-[20px] h-[20px] text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
<p className="lg:text-base text-sm text-white/80 font-quicksand drop-shadow-md">Join 10,000+ creators using AI to transform their workflow</p>
</div>
</section>

<section className="w-full lg:pt-40 lg:pr-16 lg:pb-40 lg:pl-16 lg:space-y-24 section-bg pt-32 pr-12 pb-32 pl-12 space-y-20" style={{position: 'relative', overflow: 'hidden'}}>
<div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" style={{background: 'linear-gradient(to bottom, transparent, black)', zIndex: '10'}}></div>
<div className="text-center space-y-6 lg:space-y-8 relative z-20">
<h2 className="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight font-ruigslay text-white">The Future of Creation Automated</h2>
<p className="max-w-4xl lg:text-2xl leading-relaxed text-xl text-gray-200 font-quicksand mr-auto ml-auto">Mashup.ai provides a suite of intelligent tools designed to streamline your creative workflow.</p>
</div>
<div className="grid gap-16 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-20">
<div className="space-y-6 lg:space-y-8 fade-up">
<div className="h-16 w-16 lg:h-20 lg:w-20 border rounded-lg bg-gradient-to-tr from-green-400 via-cyan-400 to-purple-500 border-neutral-600 flex items-center justify-center shadow-[0_0_12px_rgba(80,255,130,0.6),0_0_24px_rgba(70,230,255,0.5),0_0_36px_rgba(220,100,255,0.4)]">
<svg className="w-[24px] h-[24px] text-slate-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path className="" d="m2 17 10 5 10-5"></path>
<path className="" d="m2 12 10 5 10-5"></path>
</svg>
</div>
<h3 className="lg:text-2xl text-xl font-medium text-white font-playfair">Vectorization Tool</h3>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 font-quicksand">Instantly convert any raster image into a scalable, editable SVG with our powerful AI-driven vectorization engine.</p>
</div>
<div className="space-y-6 lg:space-y-8 fade-up delay-75">
<div className="h-16 w-16 lg:h-20 lg:w-20 flex shadow-[0_0_12px_rgba(251,113,133,0.6),0_0_24px_rgba(217,70,239,0.5),0_0_36px_rgba(99,102,241,0.4)] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-neutral-600 border rounded-lg items-center justify-center">
<svg className="drop-shadow-[0_0_4px_rgba(217,70,239,0.8)] w-[24px] h-[24px] text-slate-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
<path className="" d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
</svg>
</div>
<h3 className="lg:text-2xl text-xl font-medium text-white font-playfair">Element Extraction</h3>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 font-quicksand">Isolate and extract any element from a complex design—backgrounds, objects, or text—with pixel-perfect precision.</p>
</div>
<div className="lg:space-y-8 fade-up delay-100 space-y-6">
<div className="h-16 w-16 lg:h-20 lg:w-20 flex shadow-[0_0_12px_rgba(248,113,113,0.6),0_0_24px_rgba(251,146,60,0.5),0_0_36px_rgba(251,146,60,0.4)] bg-gradient-to-r from-red-400 to-orange-400 border-neutral-600 border rounded-lg items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<h3 className="lg:text-2xl text-xl font-medium text-white font-playfair">Smart Generation</h3>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 font-quicksand">Generate brand-consistent designs from simple text prompts with our advanced AI models.</p>
</div>
</div>
</section>

<section className="lg:pt-40 lg:pb-40 relative z-10 bg-black border-neutral-700 border-t border-b pt-32 pb-32" style={{position: 'relative', overflow: 'hidden'}}>
<canvas className="" height="896" id="gl-canvas-section" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0'}} width="2065"></canvas>
<div className="w-full px-12 lg:px-16 grid md:grid-cols-2 gap-20 lg:gap-32 items-center max-w-7xl mx-auto relative z-10">
<div className="fade-up h-96 lg:h-[32rem] xl:h-[36rem] border border-dashed rounded-lg bg-neutral-800/30 border-neutral-600 flex items-center justify-center">
<div className="text-center space-y-4">
<svg className="mx-auto text-neutral-500" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
<p className="text-neutral-500">Demo Preview</p>
</div>
</div>
<div className="fade-up space-y-8 lg:space-y-10">
<h2 className="lg:text-6xl text-5xl font-medium tracking-tight font-playfair">Transform Ideas into Reality</h2>
<p className="lg:text-2xl leading-relaxed text-xl text-neutral-300 font-quicksand">Watch how our AI instantly converts your concepts into professional-grade designs, ready for any medium or platform.</p>
<button className="inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 border rounded text-lg lg:text-xl border-neutral-700 hover:border-neutral-600 hover:text-white transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5,3 19,12 5,21 5,3"></polygon>
</svg>
        Play demo
      </button>
</div>
</div>

</section>

<section className="w-full px-12 lg:px-16 py-32 lg:py-40 bg-black relative z-10">
<div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center max-w-7xl mx-auto">
<div className="space-y-8 lg:space-y-10 fade-up">
<h2 className="lg:text-6xl text-5xl font-medium tracking-tight font-playfair">10x Faster Creation</h2>
<p className="lg:text-2xl leading-relaxed text-xl text-neutral-300 font-quicksand">Our users report dramatically reduced design time while maintaining professional quality standards.</p>
</div>
<div className="fade-up delay-75">
<div className="h-96 lg:h-[32rem] xl:h-[36rem] border border-dashed rounded-lg flex items-center justify-center text-lg lg:text-xl bg-neutral-800/30 border-neutral-600">
<div className="text-center space-y-4">
<svg className="mx-auto text-neutral-500" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
<p className="text-neutral-500">Performance Chart</p>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24">
<section className="bg-neutral-900 rounded-lg p-12 fade-up">
<h3 className="text-3xl font-medium tracking-tight font-playfair mb-6 text-white">Additional Insights</h3>
<p className="text-lg leading-relaxed text-neutral-300 font-quicksand mb-8">Explore deeper analytics and trends that showcase how our tools accelerate your creative projects and improve overall efficiency.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-black rounded-lg p-6 text-center border border-neutral-700">
<h4 className="text-xl font-medium font-playfair mb-2 text-white">User Growth</h4>
<p className="text-neutral-400 font-quicksand">500% increase in active users over the last year.</p>
</div>
<div className="bg-black rounded-lg p-6 text-center border border-neutral-700">
<h4 className="text-xl font-medium font-playfair mb-2 text-white">Design Speed</h4>
<p className="text-neutral-400 font-quicksand">Average project completion time reduced by 70%.</p>
</div>
<div className="bg-black rounded-lg p-6 text-center border border-neutral-700">
<h4 className="text-xl font-medium font-playfair mb-2 text-white">Customer Satisfaction</h4>
<p className="text-neutral-400 font-quicksand">Rated 4.8/5 by over 10,000 professionals worldwide.</p>
</div>
</div>
</section>
</div>
</section>

<section className="lg:pt-40 lg:pb-40 relative z-10 bg-black border-neutral-700 border-t border-b pt-32 pb-32">
<div className="w-full lg:px-16 lg:space-y-24 pr-12 pl-12 space-y-20 relative overflow-hidden" style={{zIndex: '0'}}>
<canvas className="absolute inset-0 w-full h-full" height="910" id="gl-canvas-pricing" style={{zIndex: '-1'}} width="2065"></canvas>
<div className="text-center space-y-6 lg:space-y-8 relative z-10">
<h2 className="lg:text-6xl text-5xl font-medium tracking-tight font-playfair">Pricing</h2>
<p className="lg:text-2xl text-xl text-neutral-300 font-quicksand">Choose the perfect plan for your creative needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto relative z-10">
<div className="space-y-8 lg:space-y-10 p-10 lg:p-12 border rounded border-neutral-700 bg-black hover:border-neutral-600 transition-colors">
<h3 className="lg:text-3xl text-2xl font-medium font-playfair">Starter</h3>
<p className="text-base lg:text-lg text-neutral-400">For individuals</p>
<p className="text-4xl lg:text-5xl font-medium">$19<span className="text-xl text-neutral-400 font-quicksand">/mo</span></p>
<ul className="space-y-3 lg:space-y-4 text-base lg:text-lg text-neutral-300">
<li className="font-quicksand">100 AI generations</li>
<li className="font-quicksand">Basic vectorization</li>
<li className="font-quicksand">Standard exports</li>
</ul>
<button className="w-full lg:px-10 lg:py-5 lg:text-xl hover:border-neutral-600 hover:text-white transition-colors text-lg font-quicksand text-center border-neutral-700 border rounded pt-4 pr-8 pb-4 pl-8">Select Plan</button>
</div>
<div className="space-y-8 lg:space-y-10 p-10 lg:p-12 border rounded border-neutral-600 bg-neutral-900/50 relative">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="bg-white text-black px-4 py-1 rounded text-sm font-medium">Popular</span>
</div>
<h3 className="lg:text-3xl text-2xl font-medium font-playfair">Professional</h3>
<p className="text-base lg:text-lg text-neutral-400">For teams</p>
<p className="text-4xl lg:text-5xl font-medium">$49<span className="text-xl text-neutral-400 font-quicksand">/mo</span></p>
<ul className="space-y-3 lg:space-y-4 text-base lg:text-lg text-neutral-300">
<li className="font-quicksand">Unlimited generations</li>
<li className="font-quicksand">Advanced tools</li>
<li className="font-quicksand">Priority support</li>
</ul>
<button className="w-full lg:px-10 lg:py-5 lg:text-xl hover:bg-neutral-200 transition-colors text-lg text-black font-quicksand text-center bg-white rounded pt-4 pr-8 pb-4 pl-8">Select Plan</button>
</div>
<div className="space-y-8 lg:space-y-10 p-10 lg:p-12 border rounded border-neutral-700 bg-black hover:border-neutral-600 transition-colors">
<h3 className="text-2xl lg:text-3xl font-medium">Enterprise</h3>
<p className="text-base lg:text-lg text-neutral-400">For organizations</p>
<p className="text-4xl lg:text-5xl font-medium">Custom</p>
<ul className="space-y-3 lg:space-y-4 text-base lg:text-lg text-neutral-300">
<li className="">White-label solution</li>
<li>API access</li>
<li>Custom integrations</li>
</ul>
<button className="w-full text-center px-8 py-4 lg:px-10 lg:py-5 border rounded text-lg lg:text-xl border-neutral-700 hover:border-neutral-600 hover:text-white transition-colors">Contact Sales</button>
</div>
</div>

</div>
</section>

<section className="py-32 lg:py-40 bg-black relative z-10">
<div className="w-full px-12 lg:px-16 text-center space-y-8 lg:space-y-10">
<h2 className="lg:text-6xl text-5xl font-medium tracking-tight font-playfair">Ready to Transform Your Workflow?</h2>
<p className="lg:text-2xl max-w-4xl leading-relaxed text-xl text-neutral-300 font-quicksand mr-auto ml-auto">Join thousands of creators who are already designing faster with AI.</p>
<button className="inline-block lg:px-10 lg:py-5 lg:text-xl hover:bg-neutral-200 transition-colors text-lg font-medium text-black font-quicksand bg-white rounded pt-4 pr-8 pb-4 pl-8">Get started free</button>
</div>
</section>




    </>
  );
}
