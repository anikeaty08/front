import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    precision highp float;

uniform vec2 iResolution;
uniform float iTime;

vec3 hash( vec3 p ) {
  p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));
  return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec3 p ) {
  vec3 i = floor( p );
  vec3 f = fract( p );
  vec3 u = f*f*(3.0-2.0*f);
  return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),
                      dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),
                      dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
            mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),
                      dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),
                      dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
  float stars_threshold = 8.0;
  float stars_exposure = 200.0;
  float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
  stars *= mix(0.4, 1.4, noise(stars_direction * 100.0 + vec3(iTime)));
  gl_FragColor = vec4(vec3(stars),1.0);
}



    const canvas = document.getElementById('shader-canvas');
const gl = canvas.getContext('webgl');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}
window.addEventListener('resize', resize);
resize();

function compileShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

const vertSrc = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragSrc = document.getElementById('fragShader').textContent;

const vertShader = compileShader(gl, vertSrc, gl.VERTEX_SHADER);
const fragShader = compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);

const program = gl.createProgram();
gl.attachShader(program, vertShader);
gl.attachShader(program, fragShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(program));
}
gl.useProgram(program);

const posLoc = gl.getAttribLocation(program, 'position');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
  -1, -1, 1, -1, -1, 1,
  -1, 1, 1, -1, 1, 1,
]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

const iResolution = gl.getUniformLocation(program, 'iResolution');
const iTime = gl.getUniformLocation(program, 'iTime');

function render(time) {
  gl.uniform2f(iResolution, canvas.width, canvas.height);
  gl.uniform1f(iTime, time * 0.001);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
  


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute inset-0 -z-10" id="shader-canvas">


</canvas></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[90%]">
<div className="group/nav flex flex-col md:flex-row gap-1 shadow-black/50 bg-zinc-900/60 border-white/10 border rounded-[2rem] md:rounded-full p-1.5 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center transition-[max-height,background-color,width] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden max-h-[54px] md:max-h-none w-[calc(100vw-2.5rem)] md:w-auto has-[:checked]:max-h-[400px] has-[:checked]:bg-zinc-900">

<div className="flex md:hidden items-center justify-between w-full pl-4 pr-1 h-[42px] shrink-0">
<span className="text-sm font-normal text-zinc-300 ml-1">Menu</span>
<label className="relative z-10 p-2 cursor-pointer text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-colors">
<input className="peer sr-only" type="checkbox"/>

<svg className="block peer-checked:hidden w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>

<svg className="hidden peer-checked:block w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</label>
</div>

<div className="w-full h-px bg-white/5 md:hidden opacity-0 group-has-[:checked]/nav:opacity-100 transition-opacity duration-300"></div>

<div className="flex flex-col md:flex-row gap-1 w-full md:w-auto md:opacity-100 md:translate-y-0 md:pointer-events-auto transition-all duration-300 ease-out opacity-0 -translate-y-2 pointer-events-none group-has-[:checked]/nav:opacity-100 group-has-[:checked]/nav:translate-y-0 group-has-[:checked]/nav:pointer-events-auto md:mt-0 mt-1 pb-2 md:pb-0">
<a className="w-full md:w-auto text-left md:px-4 transition-colors hover:text-white hover:bg-white/5 whitespace-nowrap text-sm font-normal text-zinc-300 rounded-xl md:rounded-full py-3 md:pt-2 md:pr-3 md:pb-2 md:pl-3 px-4" href="#home">Home</a>
<a className="w-full md:w-auto text-left md:px-4 transition-colors hover:text-white hover:bg-white/5 whitespace-nowrap text-sm font-normal text-zinc-300 rounded-xl md:rounded-full py-3 md:pt-2 md:pr-3 md:pb-2 md:pl-3 px-4" href="#about">Why me?</a>
<a className="w-full md:w-auto text-left md:px-4 transition-colors hover:text-white hover:bg-white/5 whitespace-nowrap text-sm font-normal text-zinc-300 rounded-xl md:rounded-full py-3 md:pt-2 md:pr-3 md:pb-2 md:pl-3 px-4" href="#work">Work</a>
<a className="w-full md:w-auto text-left md:px-4 transition-colors hover:text-white hover:bg-white/5 whitespace-nowrap text-sm font-normal text-zinc-300 rounded-xl md:rounded-full py-3 md:pt-2 md:pr-3 md:pb-2 md:pl-3 px-4" href="#reviews">Reviews</a>
<a className="w-full md:w-auto text-left md:px-4 transition-colors hover:text-white hover:bg-white/5 whitespace-nowrap text-sm font-normal text-zinc-300 rounded-xl md:rounded-full py-3 md:pt-2 md:pr-4 md:pb-2 md:pl-3 px-4" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden grid-bg pt-32 pb-20 relative items-center justify-center" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<span className="inline-block text-lg font-medium text-indigo-400 tracking-wide mb-6">Hey! My name is Muneeb Bhatti!</span>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-8">
                I create webpages that transform <br className="hidden md:block"/>
<span className="text-zinc-400">your visitors into clients!</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-normal text-zinc-300 max-w-3xl mr-auto mb-12 ml-auto">I’m Muneeb Bhatti, a UI/UX and web designer, creating beautiful, functional websites that convert visitors into clients.</p>
<div className="flex flex-col sm:flex-row mb-20 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]" href="#contact">
                    Get in Touch
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white rounded-xl font-medium transition-all" href="#work">
                    See my work
                </a>
</div>

<div className="relative">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-zinc-800 mx-auto border-4 border-[#050505] relative z-10 overflow-hidden shadow-2xl">
<img alt="Profile" className="hover:opacity-100 transition-opacity opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/654a2ee8-b2e7-46e6-81dc-6cf48b3a3f94_320w.jpg"/>
</div>

<div className="overflow-hidden w-full border-white/5 border-t py-0">
<div className="flex flex-wrap hover:grayscale-0 transition-all duration-500 md:gap-16 text-slate-50 opacity-40 pt-20 pb-20 grayscale gap-x-8 gap-y-8 items-center justify-center">

<div className="flex items-center gap-2"><svg className="lucide lucide-framer w-6 h-6" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg> <span className="font-semibold text-lg tracking-tight">Framer</span></div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center"><svg className="lucide lucide-figma w-6 h-6" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg> <span className="text-lg font-semibold tracking-tight">Figma</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-layers w-6 h-6 edit-mode-selected-multi" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> <span className="text-lg font-semibold tracking-tight">Linear</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-command w-6 h-6" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg> <span className="text-lg font-semibold tracking-tight">Vercel</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="font-semibold text-lg tracking-tight">Stripe</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/50" id="about">
<div className="container mx-auto px-6 max-w-6xl">
<div className="mb-16">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-6">Design that works.</h2>
<p className="text-xl text-zinc-300 max-w-2xl">I design interfaces that not only look great but also deliver seamless, meaningful user experiences.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pencil" data-icon-replaced="true" data-icon-set="lucide" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Interface Design</h3>
<p className="leading-relaxed text-lg text-zinc-400">Designing scalable, modern interfaces with strong visual hierarchy and intuitive flows.</p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg className="lucide lucide-compass lucide-zap w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">User Experience</h3>
<p className="leading-relaxed text-lg text-zinc-400">Crafting intuitive user journeys that feel effortless, purposeful, and easy to navigate.</p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg className="lucide lucide-smartphone" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Responsive Design</h3>
<p className="leading-relaxed text-lg text-zinc-400">Crafting seamless interfaces that adapt flawlessly to every screen, from desktops to mobile devices.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="work">
<div className="container mx-auto px-6 max-w-6xl">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-16">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden mb-6 relative">
<div className="group-hover:opacity-100 transition-opacity z-10 bg-indigo-500/10 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25ee73ec-20ce-44fe-ad41-2672893d8803_800w.png"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">P. Delivery App</h3>
<p className="text-lg text-zinc-300">UI/UX Design, Mobile App Design</p>
</div>
<div className="p-3 bg-zinc-900 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
<img alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd2e46f5-bb55-4192-b65c-f85af9f76cde_1600w.png"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">AR/VR Landing Page</h3>
<p className="text-lg text-zinc-300">Futuristic UI/UX Design</p>
</div>
<div className="p-3 bg-zinc-900 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden mb-6 relative">
<div className="group-hover:opacity-100 transition-opacity z-10 bg-indigo-500/10 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Project 3" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/570d93e7-a4e9-4d0c-bf4f-7e79e85091b8_1600w.png" style={{}}/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Shadow Core  App</h3>
<p className="text-lg text-zinc-300">Mobile App Design, Fitness App</p>
</div>
<div className="p-3 bg-zinc-900 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden mb-6 relative">
<div className="group-hover:opacity-100 transition-opacity z-10 bg-indigo-500/10 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Project 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/864398ce-13f6-4290-8663-649230860853_3840w.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Fire Cut Redesign</h3>
<p className="text-lg text-zinc-300">Web Design, Prototyping</p>
</div>
<div className="p-3 bg-zinc-900 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-zinc-900/20 border-white/5 pt-24 pb-24" id="reviews">
<div className="container max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-16 text-center">Client reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

<div className="bg-zinc-900 border-white/5 border rounded-3xl p-8 flex flex-col h-full">
<div className="flex gap-1 text-indigo-400 mb-6 items-center">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-xl text-zinc-300 mb-8">We worked with Muneeb on the UX/UI for our project, and the results were outstanding. From the very beginning, communication was clear, fast, and professional. They quickly understood our vision and translated it into a clean, modern, and user-friendly design that perfectly fits our brand........................</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fbd54d2-e077-41d4-8d14-090e6166e542_320w.jpg"/>
<div>
<div className="font-medium text-white">Sydney</div>
<div className="text-sm">CEO</div>
</div>
</div>
</div>

<div className="bg-zinc-900 border-white/5 border rounded-3xl p-8 flex flex-col h-full justify-start">
<div className="flex items-center gap-1 text-indigo-400 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-normal text-xl text-zinc-300 mb-6">Muneeb did an excellent job as a UX/UI designer. He was very easy to work with, communicated clearly throughout the process, and delivered polished, high-quality designs. Thanks to his work, our website and app became more user-friendly and engaging, which helped us attract more leads and connect better with our audience. His attention to detail and understanding of our vision made the whole experience smooth and highly productive.</p>
<div className="flex gap-4 items-center">
<img alt="User" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f30697e6-d76b-4552-8a5f-3a32cb3e60b5_320w.jpg"/>
<div className="">
<div className="font-medium text-white">Thomas</div>
<div className="text-sm">Marketing Director</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="container mx-auto px-6 max-w-4xl text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">Ready to scale?</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="text-lg font-medium text-zinc-100 bg-zinc-900/50 border-white/5 border rounded-2xl px-4 py-4">UI/UX Design</div>
<div className="text-lg font-medium text-zinc-100 bg-zinc-900/50 border-white/5 border rounded-2xl pt-4 pr-4 pb-4 pl-4">Framer Dev</div>
<div className="text-lg font-medium text-zinc-100 bg-zinc-900/50 border-white/5 border rounded-2xl pt-4 pr-4 pb-4 pl-4">Web Design</div>
<div className="text-lg font-medium text-zinc-100 bg-zinc-900/50 border-white/5 border rounded-2xl pt-4 pr-4 pb-4 pl-4">Apps Design</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-black border-white/5 border-t pt-24 pb-12 relative" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="container z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Let's build something <br/> <span className="text-indigo-500">extraordinary</span> together.</h2>
<p className="text-xl text-zinc-300 mb-10">Currently available for new projects.</p>
<a className="flex w-fit max-w-full mx-auto md:inline-flex md:w-auto items-center justify-center gap-3 hover:bg-zinc-200 transition-colors text-sm sm:text-base md:text-lg font-semibold text-black bg-white rounded-full mb-20 py-3 px-5 md:pt-4 md:pr-8 md:pb-4 md:pl-8" href="mailto:muneebbhattidesigner@gmail.com">muneebbhattidesigner@gmail.com</a>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
<div className="md:mb-0 text-zinc-300 mb-6">© 2026 Muneeb Bhatti. All rights reserved.</div>
<div className="flex gap-6 items-center">

<a className="hover:text-white transition-colors hover:border-white/20 text-zinc-400 bg-zinc-900 border-white/5 border rounded-full p-2 flex items-center justify-center" href="https://www.linkedin.com/in/muneeb-bhatti-48472a358/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="20" icon="tabler:brand-linkedin" width="20"></iconify-icon>
</a>

<a className="hover:text-white transition-colors hover:border-white/20 text-zinc-400 bg-zinc-900 border-white/5 border rounded-full p-2 flex items-center justify-center" href="https://upwork.com/freelancers/~018b122b914e7c8975" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" height="20" icon="tabler:brand-upwork" width="20"></iconify-icon>
</a>

<a className="hover:text-white transition-colors hover:border-white/20 text-zinc-400 bg-zinc-900 border-white/5 border rounded-full p-2 flex items-center justify-center" href="https://www.instagram.com/muneebbhattiuiux/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" height="20" icon="tabler:brand-instagram" width="20"></iconify-icon>
</a>

<a className="hover:text-white transition-colors hover:border-white/20 text-zinc-400 bg-zinc-900 border-white/5 border rounded-full p-2 flex items-center justify-center" href="https://www.behance.net/muneebbhattidesigner" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" height="20" icon="tabler:brand-behance" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
