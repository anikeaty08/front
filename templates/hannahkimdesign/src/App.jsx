import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



varying vec2 vUv;
varying float vWave;
uniform float uTime;
uniform float uAmplitude;
uniform float uFrequency;
uniform float uSpeed;
// Simplex Noise (simplified for brevity)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
vec2 i  = floor(v + dot(v, C.yy) );
vec2 x0 = v -   i + dot(i, C.xx);
vec2 i1;
i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
vec4 x12 = x0.xyxy + C.xxzz;
x12.xy -= i1;
i = mod289(i);
vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
m = m*m ;
m = m*m ;
vec3 x = 2.0 * fract(p * C.www) - 1.0;
vec3 h = abs(x) - 0.5;
vec3 ox = floor(x + 0.5);
vec3 a0 = x - ox;
m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
vec3 g;
g.x  = a0.x  * x0.x  + h.x  * x0.y;
g.yz = a0.yz * x12.xz + h.yz * x12.yw;
return 130.0 * dot(m, g);
}
void main() {
vUv = uv;
vec3 pos = position;
float noiseFreq = uFrequency;
float noiseAmp = uAmplitude;
vec2 noisePos = vec2(pos.x * noiseFreq + uTime * uSpeed, pos.y * noiseFreq + uTime * uSpeed);
float wave = snoise(noisePos) * noiseAmp;
pos.z += wave;
vWave = wave; // Pass to fragment
gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}



varying vec2 vUv;
varying float vWave;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uGrain;
// Random for grain
float random(vec2 p) {
return fract(sin(dot(p.xy, vec2(12.9898,78.233))) * 43758.5453);
}
void main() {
// Mixing Logic based on wave height and UV
float mixFactor = smoothstep(-1.0, 1.0, vWave);
vec3 colorA = mix(uColor1, uColor2, vUv.x + vWave * 0.2);
vec3 colorB = mix(uColor2, uColor3, vUv.y - vWave * 0.2);
vec3 finalColor = mix(colorA, colorB, mixFactor);
// Add Grain
float noise = random(vUv * 100.0);
finalColor += (noise - 0.5) * uGrain;
gl_FragColor = vec4(finalColor, 1.0);
}



        // Init Shader
        const canvas = document.getElementById('gradient-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        // Camera setup to mimic the "45 fov" and position
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 3.6); // cDistance

        // Plane Geometry
        const geometry = new THREE.PlaneGeometry(10, 10, 128, 128); // High segment count for smooth waves

        // Colors from request
        // #ff5005 -> (1.0, 0.31, 0.02)
        // #dbba95 -> (0.86, 0.73, 0.58)
        // #d0bce1 -> (0.82, 0.74, 0.88)
        const uniforms = {
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color('#ff5005') },
            uColor2: { value: new THREE.Color('#dbba95') },
            uColor3: { value: new THREE.Color('#d0bce1') },
            uAmplitude: { value: 1.0 },
            uFrequency: { value: 0.5 }, // Scaled down for this specific noise impl
            uSpeed: { value: 0.2 },
            uGrain: { value: 0.1 }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent,
            uniforms: uniforms,
            wireframe: false,
            side: THREE.DoubleSide
        });

        const plane = new THREE.Mesh(geometry, material);
        // Rotations from props: rotX=0, rotY=10, rotZ=50
        plane.rotation.y = 10 * (Math.PI / 180);
        plane.rotation.z = 50 * (Math.PI / 180);
        scene.add(plane);

        // Animation Loop
        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        }
        animate();

        // Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Intersection Observer (Original Logic)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-text');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="gradient-canvas"></canvas>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-xs font-semibold group-hover:scale-110 transition-transform duration-300">H</span>
<span className="tracking-widest text-sm uppercase opacity-90">HK</span>
</a>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-stone-400 hover:text-white transition-all duration-300 group" href="mailto: hello@hannahkbrooks.com">
                Connect
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal-text stagger-1 mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 text-xs font-medium text-orange-200 shadow-lg shadow-orange-900/10 backdrop-blur-md visible">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Accepting new clients for 2026
            </div>
<h1 className="reveal-text stagger-2 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.95] mb-8 visible drop-shadow-2xl">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-stone-200 to-purple-200 animate-gradient">Designing</span> <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-white text-center tracking-tighter opacity-60">the invisible.</span>
</h1>
<p className="reveal-text stagger-3 text-lg md:text-xl text-stone-100 max-w-2xl mx-auto font-bold leading-relaxed mb-12 visible drop-shadow-md">
                Where creativity meets clarity, and vision meets action. <br className="hidden md:block"/>Building digital products for the next generation.
            </p>
<div className="reveal-text stagger-4 flex flex-col md:flex-row gap-4 justify-center items-center visible">
<a className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:scale-105 hover:bg-stone-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="mailto:hello@hannahkbrooks.com">
                    Work With Me
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:arrow-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>

<section className="border-y border-white/5 bg-[#050505]/60 overflow-hidden backdrop-blur-xl z-20 relative">
<div className="flex whitespace-nowrap marquee-content py-8">

<div className="flex items-center gap-16 md:gap-32 px-8 opacity-40 hover:opacity-80 transition-all duration-500 text-white select-none">
<span className="text-xl font-semibold tracking-tighter">McDonalds</span>
<span className="text-xl font-semibold tracking-tighter">BMW</span>
<span className="text-xl font-semibold tracking-tighter">Charles Schwab</span>
<span className="text-xl font-semibold tracking-tighter">Mattress Firm</span>
<span className="text-xl font-semibold tracking-tighter">Redbox</span>
<span className="text-xl font-semibold tracking-tighter">Mayo Clinic</span>
<span className="text-xl font-semibold tracking-tighter">SC Johnson</span>
<span className="text-xl font-semibold tracking-tighter">Kenmore</span>
<span className="text-xl font-semibold tracking-tighter">McDonalds</span>
<span className="text-xl font-semibold tracking-tighter">BMW</span>
<span className="text-xl font-semibold tracking-tighter">Charles Schwab</span>
<span className="text-xl font-semibold tracking-tighter">Mattress Firm</span>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] relative z-10 pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mx-auto text-center reveal-text">
<div className="mb-8">
<span className="text-orange-400 font-medium tracking-wide text-xs uppercase opacity-80">Methodology</span>
</div>
<h3 className="leading-tight md:text-5xl text-3xl font-medium text-white tracking-tight mb-8">
                Great products don't happen by accident—they require a partner who can walk with you from that first spark of an idea all the way through to execution. As a design partner, I help take concepts from 0 to 1, transforming vision into reality. 
            </h3>
</div>
</section>

<section className="bg-[#050505] relative z-10 py-20 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-text">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Offerings</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-stone-200 border-b border-stone-200 pb-1 hover:border-white hover:text-white transition-all" href="https://hannahkbrooks.com/work">
                Full Archive <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[500px]">

<div className="reveal-text group relative col-span-1 md:col-span-2 rounded-3xl overflow-hidden bg-blue-600 shadow-lg hover:shadow-blue-900/30 transition-all duration-500">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 p-10 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">–</p>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">Branding</h3>
<p className="text-blue-100/90 font-normal max-w-sm">Creating unique brand identities that build trust</p>
</div>
<div className="h-12 w-12 rounded-full bg-white text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>

<div className="reveal-text group relative col-span-1 rounded-3xl overflow-hidden bg-violet-600 shadow-lg hover:shadow-violet-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-600 z-0"></div>
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-48 h-64 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col p-4 gap-3 group-hover:bg-white/20">
<div className="w-full h-24 bg-gradient-to-br from-pink-400 to-violet-400 rounded-lg shadow-inner"></div>
<div className="w-2/3 h-4 bg-white/30 rounded"></div>
<div className="w-full h-4 bg-white/20 rounded"></div>
<div className="w-full h-4 bg-white/20 rounded"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<p className="text-violet-200 text-xs font-semibold uppercase tracking-widest mb-2">–</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Design Systems</h3>
</div>
</div>

<div className="reveal-text group relative col-span-1 rounded-3xl overflow-hidden bg-rose-500 shadow-lg hover:shadow-rose-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<p className="text-rose-200 text-xs font-semibold uppercase tracking-widest mb-2">web + mobile</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Product Design</h3>
</div>
</div>

<div className="reveal-text group relative col-span-1 md:col-span-2 rounded-3xl overflow-hidden bg-orange-500 shadow-lg hover:shadow-orange-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-500 z-0"></div>

<div className="absolute inset-0 flex items-start justify-center overflow-hidden z-10 pt-16">
<div className="absolute w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] group-hover:bg-white/30 transition-colors duration-500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 text-center p-10">
<svg aria-hidden="true" className="iconify text-white/80 mb-4 iconify--lucide group-hover:text-white transition-colors" data-icon="lucide:layers" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<div className="text-8xl font-medium tracking-tighter text-white group-hover:scale-110 transition-transform duration-500">98%</div>
<p className="text-orange-100 mt-2 font-medium">Retention Rate</p>
</div>
</div>
<div className="absolute bottom-0 left-0 p-10 z-20 w-full flex justify-between items-end">
<div>
<p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">–</p>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">Strategy</h3>
<p className="text-orange-100 font-normal max-w-sm">Strategic design guidance to create meaningful outcomes and drive long-term growth</p>
</div>
<div className="h-12 w-12 rounded-full bg-white text-orange-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 relative z-10 py-32 border-t border-white/5 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-text relative group order-first">
<div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative aspect-[4/5] lg:aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900">
<img alt="Hannah K Brooks" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.squarespace-cdn.com/content/6172c96126814a187744d017/a1942bc1-7dc0-46c5-84e3-3c1b32a11d08/hannah6-5_websize.jpg"/>
</div>
</div>

<div className="reveal-text stagger-1">
<span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">About Me</span>
<h2 className="text-4xl md:text-5xl font-medium text-black tracking-tighter mb-8 leading-[1.05]">
                        Obsessed with 
                        <span className="text-stone-500">details that matter.</span>
</h2>
<div className="space-y-6 text-xl text-stone-900 font-regular leading-relaxed">
<p>
                            Hi, I'm Hannah. With over a decade of experience in digital product design, I've helped startups and Fortune 500s alike navigate the complex intersection of user needs and business goals.
                        </p>
<p>
                            My approach is grounded in the belief that the best interfaces are the ones you don't notice. Whether I'm crafting a design system or reimagining a brand identity, my goal is always clarity, purpose, and impact.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-[#050505] pt-20 pb-10 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">Let's create <br/>something iconic.</h2>
<p className="text-xl text-stone-100 font-light mb-8">Ready to elevate your digital presence? Currently booking for 2026.</p>
<div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-stone-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="mailto:hello@hannahkbrooks.com">
                            Let's Connect
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<div className="flex items-center gap-6 pl-2">
<a className="text-stone-500 hover:text-white transition-colors" href="https://www.linkedin.com/in/hannah-k-169bb63a1/"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dribbble" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></g></svg></a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-100">
<p>HK © 2026 Made with ❤️</p>
</div>
<div className="mt-20 select-none pointer-events-none">
<h1 className="text-[12vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-stone-100 to-black text-center tracking-tighter opacity-50">HK</h1>
</div>
</div>
</footer>


    </>
  );
}
