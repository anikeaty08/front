import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)), dot(-1.0+2.0*hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x), mix(dot(-1.0+2.0*hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), dot(-1.0+2.0*hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
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
      
      vec3 layer1 = mix(color3, color2, smoothstep(-.3,.2, (Rot(radians(-5.))*tuv).x));
      vec3 layer2 = mix(color4, color1, smoothstep(-.3,.2, (Rot(radians(-5.))*tuv).x));
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
      void main() {
        gl_Position = vec4(position, 0, 1);
      }
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
      

<canvas height="817" id="gl-canvas" width="1500"></canvas>
<div className="overlay"></div>

<nav className="relative z-10 animate-enter" style={{animationDelay: '50ms'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between py-6">
<div className="flex items-center">
<div className="text-white font-semibold text-xl tracking-tight">STELLAR</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-white/70 hover:text-white transition-colors text-sm font-medium" href="#">Features</a>
<a className="text-white hover:text-white transition-colors text-sm font-medium" href="#">Pricing</a>
<a className="text-white/70 hover:text-white transition-colors text-sm font-medium" href="#">About</a>
<a className="text-white/70 hover:text-white transition-colors text-sm font-medium" href="#">Contact</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-white/70 hover:text-white transition-colors text-sm font-medium" href="#">Sign in</a>
<a className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/20" href="#">Sign up</a>
</div>
</div>
</div>
</nav>
<div className="relative z-10">
<div className="max-w-7xl sm:py-36 lg:px-8 mr-auto ml-auto pt-12 pr-6 pb-28 pl-6">
<header className="mx-auto max-w-4xl text-center">
<p className="animate-enter text-sm font-semibold uppercase tracking-widest text-blue-300" style={{animationDelay: '100ms'}}>Pricing</p>
<div className="relative mt-4 flex flex-col items-center">
<h1 className="animate-enter font-display text-5xl font-medium tracking-tight text-white sm:text-7xl/none" style={{animationDelay: '200ms'}}>
            Find <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">your perfect fit</span>
</h1>
</div>
<p className="animate-enter mx-auto mt-8 max-w-2xl text-lg/8 text-white/80" style={{animationDelay: '300ms'}}>
          Transparent pricing for projects of all sizes. No hidden fees, no surprises. Start for free and scale as you grow.
        </p>
</header>
<div className="animate-enter mt-20 flex justify-center" style={{animationDelay: '400ms'}}>
<div className="relative flex items-center gap-x-1 rounded-full border border-white/30 bg-white/10 p-1.5 text-sm font-semibold backdrop-blur-md glass-effect">
<button className="relative rounded-full px-4 py-1.5 transition-colors duration-150 hover:text-white focus-visible:outline-none">Monthly</button>
<button className="relative rounded-full bg-blue-500 px-4 py-1.5 text-white shadow-sm ring-1 ring-blue-400/30">Yearly</button>
</div>
</div>

<section className="isolate mx-auto mt-14 grid max-w-md grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">

<article className="animate-enter relative overflow-hidden rounded-3xl glass-effect bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover-tilt" style={{animationDelay: '500ms'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20"></div>
<h3 className="font-display text-lg font-semibold text-white">Starter</h3>
<p className="mt-4 text-sm text-white/70">For individuals and small personal projects.</p>
<p className="mt-8 flex items-baseline gap-x-1">
<span className="font-display text-4xl font-semibold tracking-tight text-white">$24</span>
<span className="text-sm font-semibold text-white/60">/month</span>
</p>
<a className="mt-8 block rounded-xl bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20 focus-visible:outline-none" href="#">Get started</a>
<ul className="mt-10 space-y-3 text-sm leading-6 text-white/80">
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Up to 5 projects
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Community support
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Basic analytics
            </li>
</ul>
</article>

<article className="animate-enter relative overflow-hidden rounded-3xl glass-effect bg-white/15 p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.03] hover-tilt" style={{animationDelay: '600ms'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/30"></div>
<h3 className="font-display text-lg font-semibold text-white">Pro</h3>
<p className="mt-4 text-sm text-white/70">For growing teams and professional use.</p>
<p className="mt-8 flex items-baseline gap-x-1">
<span className="font-display text-4xl font-semibold tracking-tight text-white">$49</span>
<span className="text-sm font-semibold text-white/60">/month</span>
</p>
<a className="mt-8 block rounded-xl bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-blue-400 focus-visible:outline-none" href="#">Choose plan</a>
<ul className="mt-10 space-y-3 text-sm leading-6 text-white/80">
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Up to 50 projects
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Priority email support
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Advanced analytics &amp; reports
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Team collaboration tools
            </li>
</ul>
</article>

<article className="animate-enter relative overflow-hidden rounded-3xl glass-effect bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover-tilt" style={{animationDelay: '700ms'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20"></div>
<h3 className="font-display text-lg font-semibold text-white">Enterprise</h3>
<p className="mt-4 text-sm text-white/70">For large organizations with custom needs.</p>
<p className="mt-8 flex items-baseline gap-x-1">
<span className="font-display text-4xl font-semibold tracking-tight text-white">Custom</span>
</p>
<a className="mt-8 block rounded-xl bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20 focus-visible:outline-none" href="#">Contact us</a>
<ul className="mt-10 space-y-3 text-sm leading-6 text-white/80">
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited projects
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Dedicated account manager
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Custom integrations &amp; API
            </li>
<li className="flex gap-x-3">
<svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Premium 24/7 support
            </li>
</ul>
</article>
</section><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><title>Feature Comparison</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/><style>
    body { font-family: 'Inter', sans-serif; }
    .animate-enter { opacity: 0; animation: enter 0.7s ease-out forwards; }
    @keyframes enter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    .glass-effect { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  </style><div className="animate-enter mt-20 mx-auto max-w-5xl" style={{animationDelay: '800ms'}}>
<div className="text-center mb-12">
<h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">Compare all features</h2>
<p className="mt-4 text-white/70">Get a detailed breakdown of what's included in each plan</p>
</div>
<div className="relative overflow-hidden rounded-2xl glass-effect bg-white/5 backdrop-blur-xl border border-white/10">

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10">
<p className="text-white/60 text-sm font-medium uppercase tracking-wide">Features</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10">
<p className="text-white font-medium">Starter</p>
<p className="text-white/60 text-sm mt-1">$24/month</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 relative">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
</div>
<p className="text-white font-medium">Pro</p>
<p className="text-blue-300 text-sm mt-1">$49/month</p>
</div>
<div className="p-6 text-center">
<p className="text-white font-medium">Enterprise</p>
<p className="text-white/60 text-sm mt-1">Custom</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">Projects</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<p className="text-white/80">Up to 5</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<p className="text-white/80">Up to 50</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-white/80">Unlimited</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">Storage</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<p className="text-white/80">10 GB</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<p className="text-white/80">500 GB</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-white/80">Unlimited</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">Team Members</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<p className="text-white/80">1 user</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<p className="text-white/80">Up to 10</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-white/80">Unlimited</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">Advanced Analytics</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-white/40 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<svg className="h-5 w-5 text-blue-300 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="p-6 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-300 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">API Access</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-white/40 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<p className="text-white/80 text-sm">Limited</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-white/80 text-sm">Full Access</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">Priority Support</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-white/40 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<svg className="h-5 w-5 text-blue-300 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="p-6 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-300 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 border-b border-white/10">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">Custom Integrations</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-white/40 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<svg className="h-5 w-5 text-white/40 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path 12"="" 18l18="" 6l12="" 6m6="" stroke-lin6=""></path>
</svg>
</div>
<div className="p-6 text-center flex items-center justify-center">
<svg className="h-5 w-5 text-blue-300 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4">
<div className="p-6 lg:border-r border-white/10 flex items-center">
<p className="text-white/90">SLA Guarantee</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 flex items-center justify-center">
<p className="text-white/80 text-sm">99.5%</p>
</div>
<div className="p-6 text-center lg:border-r border-white/10 bg-white/5 flex items-center justify-center">
<p className="text-white/80 text-sm">99.9%</p>
</div>
<div className="p-6 text-center flex items-center justify-center">
<p className="text-white/80 text-sm">99.99%</p>
</div>
</div>
</div>
</div><div className="animate-enter mt-32 mx-auto max-w-5xl" style={{animationDelay: '900ms'}}>
<div className="text-center mb-12">
<h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">Product Roadmap</h2>
<p className="mt-4 text-white/70">See what's coming next on our journey</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform md:-translate-x-px"></div>
<div className="space-y-8">

<div className="relative flex items-center">
<div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
<div className="glass-effect bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">Completed</span>
<span className="text-white/60 text-sm">Q1 2024</span>
</div>
<h3 className="text-white font-medium mb-2">Enhanced Analytics Dashboard</h3>
<p className="text-white/70 text-sm">Real-time insights with advanced visualization tools and custom reporting capabilities.</p>
</div>
</div>
</div>

<div className="relative flex items-center md:flex-row-reverse">
<div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
<div className="glass-effect bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">In Progress</span>
<span className="text-white/60 text-sm">Q2 2024</span>
</div>
<h3 className="text-white font-medium mb-2">Mobile App Launch</h3>
<p className="text-white/70 text-sm">Native iOS and Android apps with full feature parity and offline synchronization.</p>
</div>
</div>
</div>

<div className="relative flex items-center">
<div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white/20 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 flex items-center justify-center">
<svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60 border border-white/20">Planned</span>
<span className="text-white/60 text-sm">Q3 2024</span>
</div>
<h3 className="text-white font-medium mb-2">AI-Powered Automation</h3>
<p className="text-white/70 text-sm">Smart workflows and predictive analytics to streamline your project management.</p>
</div>
</div>
</div>

<div className="relative flex items-center md:flex-row-reverse">
<div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white/20 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 flex items-center justify-center">
<svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60 border border-white/20">Planned</span>
<span className="text-white/60 text-sm">Q4 2024</span>
</div>
<h3 className="text-white font-medium mb-2">Enterprise SSO &amp; Security</h3>
<p className="text-white/70 text-sm">Advanced security features including SAML, SCIM provisioning, and audit logs.</p>
</div>
</div>
</div>
</div>
</div>
</div><div className="animate-enter mt-32 mx-auto max-w-4xl" style={{animationDelay: '1000ms'}}>
<div className="text-center mb-12">
<h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">Frequently Asked Questions</h2>
<p className="mt-4 text-white/70">Everything you need to know about our platform</p>
</div>
<div className="space-y-4">
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium">Can I change my plan at any time?</h3>
<svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="px-6 pb-4">
<p className="text-white/70">Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.</p>
</div>
</div>
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium">Is there a free trial available?</h3>
<svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="px-6 pb-4">
<p className="text-white/70">We offer a 14-day free trial for all plans. No credit card required to get started. You can explore all features during the trial period.</p>
</div>
</div>
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium">What payment methods do you accept?</h3>
<svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="px-6 pb-4">
<p className="text-white/70">We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.</p>
</div>
</div>
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium">Can I cancel my subscription anytime?</h3>
<svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="px-6 pb-4">
<p className="text-white/70">Yes, you can cancel your subscription at any time. You'll continue to have access to your plan features until the end of your current billing period.</p>
</div>
</div>
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium">Do you offer discounts for nonprofits or students?</h3>
<svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="px-6 pb-4">
<p className="text-white/70">Yes! We offer 50% discounts for verified nonprofit organizations and educational institutions. Contact our sales team to apply.</p>
</div>
</div>
<div className="glass-effect bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium">What happens to my data if I cancel?</h3>
<svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="px-6 pb-4">
<p className="text-white/70">Your data remains accessible for 30 days after cancellation. You can export all your data during this period. After 30 days, data is permanently deleted.</p>
</div>
</div>
</div>
</div><footer className="relative z-10 mt-32 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="md:col-span-1">
<div className="text-white font-semibold text-xl tracking-tight mb-4">STELLAR</div>
<p className="text-white/60 text-sm mb-6">Building the future of project management with innovative tools and seamless collaboration.</p>
<div className="flex space-x-4">
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
</svg>
</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
</svg>
</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"></path>
</svg>
</a>
</div>
</div>

<div>
<h3 className="text-white font-medium mb-4">Product</h3>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Features</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Pricing</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Integrations</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">API</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Security</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">About</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Blog</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Careers</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Press</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Partners</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-4">Support</h3>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Help Center</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Documentation</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Contact Us</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Status</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Community</a></li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
<div className="flex space-x-6 mb-4 md:mb-0">
<a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
<a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
<a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Cookie Policy</a>
</div>
<p className="text-white/60 text-sm">© 2024 Stellar. All rights reserved.</p>
</div>
</div>
</footer>
</div>
</div>




    </>
  );
}
