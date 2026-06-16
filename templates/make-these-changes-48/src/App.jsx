import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
void: '#0a0a0f',
obsidian: '#0a0a1e',
primary: '#00C2FF',
accent: '#F59E0B',
muted: '#94a3b8',
},
backgroundImage: {
'obsidian-gradient': 'linear-gradient(to bottom, #0a0a0f 0%, #0a0a1e 100%)',
'hud-shine': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent%)',
},
boxShadow: {
'hud-inset': 'inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 0 20px rgba(0,0,0,0.5)',
'neon-primary': '0 0 10px rgba(0, 194, 255, 0.3), inset 0 0 5px rgba(0, 194, 255, 0.1)',
},
animation: {
'marquee': 'marquee 30s linear infinite',
'beam': 'beam 8s linear infinite',
'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'typewriter': 'typewriter 2s steps(40, end) 1s 1 normal both',
'cursor': 'cursor .75s step-end infinite',
'shine': 'shine 8s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
'float': 'float-orbit 6s ease-in-out infinite',
'orbit-cw': 'orbit-cw 8s linear infinite',
'orbit-ccw': 'orbit-ccw 12s linear infinite',
'underline-grow': 'underline-grow 1s ease-out 0.8s forwards',
'signal-sweep': 'signal-sweep 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
'50%': { opacity: '1', transform: 'scale(1.05)' },
},
typewriter: {
'from': { width: '0' },
'to': { width: '100%' },
},
'underline-grow': {
'from': { width: '0' },
'to': { width: '100%' },
},
cursor: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
shine: {
'0%, 100%': { 'background-position': '200% center' },
},
'float-orbit': {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-20px)' },
},
'orbit-cw': {
'from': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
'to': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
},
'orbit-ccw': {
'from': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
'to': { transform: 'rotate(-360deg) translateX(var(--orbit-radius)) rotate(360deg)' },
},
'signal-sweep': {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' },
}
}
}
}
}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


            (function() {
              let scene, camera, renderer, material;
              let startTime = Date.now();
              const container = document.getElementById('wave-container-feedback');
              if (!container) return;

              const vertexShader = `
                varying vec2 vUv;
                void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `;

              const fragmentShader = `
                uniform float iTime;
                uniform vec2 iResolution;
                varying vec2 vUv;

                #define S smoothstep

                vec3 quantumBlue = vec3(0.0, 0.76, 1.0);
                vec3 quantumGold = vec3(0.96, 0.62, 0.04);
                vec3 quantumViolet = vec3(0.77, 0.0, 1.0);
                vec3 quantumCyan = vec3(0.13, 0.83, 0.93);
                vec3 quantumPlasma = vec3(0.06, 0.73);

                vec4 Line(vec2 uv, float speed, float height, vec3 col, float thickness) {
                  uv.y += S(1., 0., abs(uv.x)) * sin(iTime * speed + uv.x * height) * 0.25;
                  float line = S(thickness * S(0.2, 0.9, abs(uv.x)), 0., abs(uv.y) - 0.003);
                  return vec4(line * col, 1.0) * S(1., 0.3, abs(uv.x));
                }

                void main() {
                  vec2 uv = (vUv - 0.5) * vec2(iResolution.x / iResolution.y, 1.0);
                  vec4 O = vec4(0.);
                  
                  O += Line(uv + vec2(0., 0.15), 0.8, 3.5, quantumBlue, 0.08);
                  O += Line(uv + vec2(0., 0.05), 1.0, 4.0, quantumGold * 0.8, 0.06);
                  O += Line(uv - vec2(0., 0.05), 0.6, 3.0, quantumViolet * 0.7, 0.07);
                  O += Line(uv - vec2(0., 0.12), 1.2, 4.5, quantumCyan * 0.6, 0.05);
                  O += Line(uv + vec2(0., 0.0), 0.9, 3.8, quantumPlasma * 0.5, 0.04);
                  
                  for (float i = 0.; i <= 3.; i += 1.) {
                    float t = i / 3.;
                    float timeOffset = iTime * 0.4 + t * 2.0;
                    vec3 shimmerColor = mix(quantumBlue, quantumViolet, sin(timeOffset) * 0.5 + 0.5);
                    shimmerColor = mix(shimmerColor, quantumGold, cos(timeOffset * 0.7) * 0.2);
                    O += Line(uv + vec2(0., -0.2 + t * 0.4), 0.7 + t * 0.3, 2.5 + t, shimmerColor * 0.3, 0.03);
                  }
                  
                  float vignette = 1.0 - length(vUv - 0.5) * 0.5;
                  O *= vignette;
                  
                  gl_FragColor = O;
                }
              `;

              function init() {
                scene = new THREE.Scene();
                camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
                
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio * 2, 3));
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setClearColor(0x0B1220, 1);
                container.appendChild(renderer.domElement);

                material = new THREE.ShaderMaterial({
                  vertexShader: vertexShader,
                  fragmentShader: fragmentShader,
                  uniforms: {
                    iTime: { value: 0 },
                    iResolution: { value: new THREE.Vector2(container.clientWidth * 2, container.clientHeight * 2) }
                  },
                  transparent: true
                });

                const geometry = new THREE.PlaneGeometry(2, 2);
                const plane = new THREE.Mesh(geometry, material);
                scene.add(plane);

                animate();
              }

              function animate() {
                requestAnimationFrame(animate);
                material.uniforms.iTime.value = (Date.now() - startTime) * 0.001;
                renderer.render(scene, camera);
              }

              function onWindowResize() {
                renderer.setSize(container.clientWidth, container.clientHeight);
                material.uniforms.iResolution.value.set(container.clientWidth * 2, container.clientHeight * 2);
              }

              window.addEventListener('resize', onWindowResize);
              init();
            })();
          


      const body = document.getElementById('main-body');
      document.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;
          const blobs = document.querySelectorAll('.aurora-blob');
          blobs.forEach((blob, index) => {
              const speed = (index + 1) * 20;
              const moveX = (window.innerWidth - x) / speed;
              const moveY = (window.innerHeight - y) / speed;
              blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[90] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="60" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10 opacity-60 mix-blend-color-dodge" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary aurora-blob translate-x-1/3 -translate-y-1/3 opacity-10" style={{transform: 'translate(38.25px, 58.35px)'}}></div>
<div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-accent aurora-blob -translate-x-1/3 translate-y-1/3 opacity-10" style={{transform: 'translate(19.125px, 29.175px)'}}></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/[0.03] h-full">
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1 h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-beam" style={{animationDuration: '7s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-accent/50 to-transparent animate-beam" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-beam" style={{animationDuration: '5s', animationDelay: '4s'}}></div>
</div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-white/[0.03] h-full hidden md:block relative overflow-hidden"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-void/80 backdrop-blur-xl shrink-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer h-12">
<div className="flex items-center justify-center relative">

<img alt="Barrios A2I Logo" className="h-[48px] w-auto object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-base font-bold tracking-tight text-white uppercase font-sans">
                  Barrios A2I
                </span>
<span className="text-[11px] font-mono font-medium tracking-wider text-accent uppercase group-hover:text-primary transition-colors">
                  [ BUSINESS_OS ]
                </span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="h-12 flex items-center text-[11px] font-medium uppercase tracking-wider text-muted hover:text-white transition-colors hover:scale-105 transform duration-200 font-mono" href="#stack">
            [ STACK ]
          </a>
<a className="h-12 flex items-center text-[11px] font-medium uppercase tracking-wider text-muted hover:text-white transition-colors hover:scale-105 transform duration-200 font-mono" href="#velocity">
            [ VELOCITY ]
          </a>
<a className="h-12 flex items-center text-[11px] font-medium uppercase tracking-wider text-muted hover:text-white transition-colors hover:scale-105 transform duration-200 font-mono" href="#architecture">
            [ ARCHITECTURE ]
          </a>
<a className="h-12 flex items-center text-[11px] font-medium uppercase tracking-wider text-muted hover:text-white transition-colors hover:scale-105 transform duration-200 font-mono" href="#pricing">
            [ PRICING ]
          </a>
</div>

<div className="flex items-center gap-6">
<button className="relative h-10 flex items-center justify-center rounded-[14px] bg-primary/10 border border-primary/30 px-6 text-[11px] font-bold tracking-wide text-primary hover:bg-primary/20 transition-all duration-300 overflow-hidden group shadow-neon-primary hover:shadow-[0_0_20px_rgba(0,194,255,0.5)]">
<span className="absolute inset-0 w-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]"></span>
<span className="relative z-10 uppercase flex items-center gap-2 font-mono">
                [ INITIALIZE_LOGIC ]
                <iconify-icon icon="lucide:terminal" width="14"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<main className="pt-12 relative">

<section className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto z-10 mt-24 mb-24 px-6 gap-16 relative" id="hero">

<div className="w-full lg:w-1/2 flex flex-col gap-10 z-20 animate-on-scroll animate">

<div className="font-sans font-medium text-sm md:text-base tracking-wide [animation:animationIn_0.5s_ease-out_both]">
<div className="text-white/50 uppercase tracking-widest text-xs mb-2 font-mono">[ SYSTEM_MANIFESTO ]</div>
<div className="text-white/60">This is not automation.</div>
<div className="text-primary drop-shadow-[0_0_8px_rgba(0,194,255,0.5)]">
                    This is operational intelligence.
                </div>
</div>

<div className="[animation:animationIn_0.6s_ease-out_0.1s_both]">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-tight leading-[0.95] text-white">
                    Your Business.
                    <br/>
<span className="relative inline-block">
                        With a 
                        <span className="italic text bg-clip-text bg-gradient-to-r from-white via-white to-primary opacity-90"> Nervous System.</span>

<div className="absolute bottom-2 left-0 h-[2px] bg-primary/50 w-full animate-underline-grow"></div>
</span>
</h1>
</div>

<p className="text-lg md:text-xl text-white/90 font-sans font-normal max-w-[48ch] leading-relaxed [animation:animationIn_0.6s_ease-out_0.2s_both]">
                Barrios A2I installs <span className="text-white font-medium">autonomous intelligence</span> that senses, decides, and acts across your entire operation—continuously.
            </p>

<div className="flex flex-wrap gap-4 [animation:animationIn_0.6s_ease-out_0.3s_both]">
<button className="group relative px-8 py-4 bg-primary text-[#0a0a1e] text-sm font-bold font-mono rounded overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] hover:-translate-y-0.5">
<span className="relative z-10 flex items-center gap-2">
                    BUILD_WORKFORCE <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 border border-white/10 bg-white/5 text-white text-sm font-mono rounded hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md hover:border-white/20">
<iconify-icon className="text-white/50" icon="lucide:terminal"></iconify-icon>
                  VIEW_ARCHITECTURE
                </button>
</div>
</div>

<div className="w-full lg:w-1/2 relative z-20 flex justify-center lg:justify-end [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none mix-blend-screen"></div>
<div className="relative w-full max-w-lg group">

<div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-600 to-purple-600 opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000 animate-pulse-glow"></div>

<div className="relative bg-void/90 backdrop-blur-xl border border-white/10 rounded-[18px] p-1 overflow-hidden shadow-2xl">

<div className="bg-white/[0.03] px-4 py-3 flex items-center gap-2 border-b border-white/5">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20"></div>
</div>
<div className="ml-auto text-[11px] font-mono text-muted/60 flex items-center gap-2 tracking-wide uppercase">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                             [ ADMIN@BARRIOSA2I:~ ]
                        </div>
</div>

<div className="p-6 font-mono text-sm leading-7 min-h-[300px] relative">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent bg-[length:100%_4px] pointer-events-none"></div>
<div className="text-muted mb-4 flex gap-2">
<span className="text-primary font-bold">$</span>
<span className="text-white">./initialize_brain_os.sh --force</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-primary bg-primary/5 p-3 rounded border border-primary/20 shadow-[0_0_15px_rgba(0,194,255,0.1)_inset]">
<span className="text-[11px] tracking-wide font-bold">[ AGENTS_ACTIVE ]</span>
<span className="animate-pulse font-bold text-sm">59 NODES</span>
</div>
<div className="flex justify-between items-center text-accent bg-accent/5 p-3 rounded border border-accent/20 shadow-[0_0_15px_rgba(245,158,11,0.1)_inset]">
<span className="text-[11px] tracking-wide font-bold">[ MEMORY_ALLOC ]</span>
<span className="animate-cursor text-sm">12TB (EXPANDING)</span>
</div>
<div className="flex justify-between items-center text-white bg-white/5 p-3 rounded border border-white/10">
<span className="text-[11px] tracking-wide font-bold">[ SYSTEM_UPTIME ]</span>
<span className="text-sm">99.999%</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-2">
<div className="bg-black/30 p-3 rounded border border-white/5 text-[10px] text-muted">
                                    PARSING_DATA...
                                    <div className="h-0.5 bg-white/10 mt-2 rounded overflow-hidden"><div className="h-full bg-primary w-2/3 animate-[typewriter_2s_infinite]"></div></div>
</div>
<div className="bg-black/30 p-3 rounded border border-white/5 text-[10px] text-muted">
                                    OPTIMIZING_ADS...
                                    <div className="h-0.5 bg-white/10 mt-2 rounded overflow-hidden"><div className="h-full bg-accent w-full animate-pulse"></div></div>
</div>
</div>
<div className="text-muted mt-4 text-[11px] pl-2 border-l border-primary/30">
                                &gt; Neural pathways optimized.
                                
                                <span className="text-void bg-primary px-1 font-bold mt-1 inline-block">[ CONNECTION ESTABLISHED ]</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/[0.08] bg-black/[0.2] py-8 mb-0 relative overflow-hidden">
<div className="absolute inset-0 z-10 marquee-mask pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex overflow-hidden">
<div className="flex gap-16 animate-marquee items-center min-w-full shrink-0">
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:openai-icon" width="20"></iconify-icon> [ GPT-4o ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:python" width="20"></iconify-icon> [ PYTHON_NATIVE ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:stripe" width="28"></iconify-icon> [ PAYMENTS ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:react" width="20"></iconify-icon> [ REACT ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="simple-icons:anthropic" width="20"></iconify-icon> [ ANTHROPIC ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:aws" width="28"></iconify-icon> [ INFRASTRUCTURE ]
                  </div>

<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:openai-icon" width="20"></iconify-icon> [ GPT-4o ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:python" width="20"></iconify-icon> [ PYTHON_NATIVE ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:stripe" width="28"></iconify-icon> [ PAYMENTS ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:react" width="20"></iconify-icon> [ REACT ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="simple-icons:anthropic" width="20"></iconify-icon> [ ANTHROPIC ]
                  </div>
<div className="flex items-center gap-2 text-muted font-mono text-[11px] uppercase tracking-wider font-bold opacity-50 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white">
<iconify-icon icon="logos:aws" width="28"></iconify-icon> [ INFRASTRUCTURE ]
                  </div>
</div>
</div>
</section>



<section className="relative w-full py-32 px-6 lg:px-8 z-10">
<div className="max-w-5xl mx-auto relative">

<div className="absolute -top-12 left-0 md:left-4 flex items-center gap-3 animate-on-scroll [animation:animationIn_0.6s_ease-out_both] animate">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              [ LIVE_SIGNAL ]
            </span>
</div>

<div className="relative rounded-3xl border border-white/10 bg-[#0B1220]/60xl overflow-hidden shadow-2xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] animate">

<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,194,255,0.03)_50%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div>
<h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white leading-[1.1] mb-6">
                  Your business is emitting signals.
                  
                  <span className="text-white/40">We turn them into </span>
<span className="text-primary">decisions.</span>
</h2>
<div className="flex items-center gap-3 text-white/50 font-mono text-xs md:text-sm tracking-wide">
<iconify-icon className="text-primary" icon="lucide:activity" width="16"></iconify-icon>
<span>NEURAL ACTIVITY DETECTED ACROSS SYSTEMS</span>
</div>
</div>

<div className="space-y-6">

<div className="group relative flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors animate-on-scroll [animation:animationIn_0.6s_ease-out_0.2s_both] animate">

<div className="flex items-center gap-4">
<div className="p-2 rounded bg-white/5 text-white/40">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-white/30 font-mono tracking-widest mb-1">SIGNAL:</span>
<span className="text-sm font-mono text-white/80 tracking-tight">REQUEST FLOW</span>
</div>
</div>

<div className="flex-1 mx-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent signal-line"></div>

<div className="font-sans font-bold text-lg text-white">
                    230,000+
                  </div>
</div>

<div className="group relative flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors animate-on-scroll [animation:animationIn_0.6s_ease-out_0.4s_both] animate">

<div className="flex items-center gap-4">
<div className="p-2 rounded bg-white/5 text-primary">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-white/30 font-mono tracking-widest mb-1">SIGNAL:</span>
<span className="text-sm font-mono text-white/80 tracking-tight">DECISION ACCURACY</span>
</div>
</div>

<div className="flex-1 mx-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent signal-line signal-line-delay-1"></div>

<div className="font-sans font-bold text-lg text-primary drop-shadow-[0_0_8px_rgba(0,194,255,0.5)]">
                    97.5%
                  </div>
</div>

<div className="group relative flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors animate-on-scroll [animation:animationIn_0.6s_ease-out_0.6s_both] animate">

<div className="flex items-center gap-4">
<div className="p-2 rounded bg-white/5 text-white/40">
<iconify-icon icon="lucide:trending-down" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-white/30 font-mono tracking-widest mb-1">SIGNAL:</span>
<span className="text-sm font-mono text-white/80 tracking-tight">COST COMPRESSION</span>
</div>
</div>

<div className="flex-1 mx-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent signal-line signal-line-delay-2"></div>

<div className="font-sans font-bold text-lg text-white">
                    -70%
                  </div>
</div>
</div>
</div>

<div className="border-t border-white/5 bg-black/20 p-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="font-serif italic text-white/60 text-sm md:text-base">
                "Autonomy compounds. Manual effort decays."
              </p>
<button className="group flex items-center gap-2 text-xs font-mono text-white/40 hover:text-primary transition-colors tracking-widest uppercase">
                View Signal Map
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-y border-white/[0.08] bg-[#0B1220] w-full mb-24 relative" style={{minHeight: '100vh'}}>

<style>
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
            }
            
            @keyframes starTwinkle {
              0%, 100% { opacity: 0.7; transform: scale(1 }
              50% { opacity: 1; transform: scale(1.2); }
            }
            
            @keyframes pulseGlow {
              0%, 100% { box-shadow: 0 0 30px rgba(0, 194, 255, 0.3), inset 0 0 20px rgba(0, 194, 255, 0.1); }
              50% { box-shadow: 0 0 50px rgba(0, 194, 255, 0.5), inset 0 0 30 255, 0.2); }
            }

            .wave-container-webgl {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
            }

            .card-quantum {
              background: rgba(11, 18, 32, 0.85);
              border: 1px solid rgba(0, 194, 255, 0.3);
              backdrop-filter: blur(20px);
              box-shadow: 
                0 0 40px rgba(0, 194, 255, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 0 20px rgba(0, 194, 255, 0.05);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .card-quantum:hover {
              border-color: rgba(0, 194, 255, 0.6);
              transform: translateY(-8px) scale(1.02);
              box-shadow: 
                0 0 60px rgba(0, 194, 255, 0.3),
                0 20px 40px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                inset 0 0 30px rgba(0, 194, 255, 0.1);
            }

            .animate-float-card {
              animation: float 6s ease-in-out infinite;
            }

            .animate-float-delayed {
              animation: float 6s ease-in-out infinite;
              animation-delay: -2s;
            }

            .animate-float-delayed-2 {
              animation: float 6s ease-in-out infinite;
              animation-delay: -4s;
            }

            .animate-star-twinkle {
              animation: starTwinkle 2s ease-in-out infinite;
            }

            .section-title-quantum {
              text-shadow: 0 0 40px rgba(0, 194, 255, 0.5);
            }

            .accent-dot-quantum {
              display: inline-block;
              color: #00C2FF;
              text-shadow: 0 0 20px #00C2FF, 0 0 40px #00C2FF;
            }

            .scanline-overlay-quantum {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 194, 255, 0.03) 2px,
                rgba(0, 194, 255, 0.03) 4px
              );
              pointer-events: none;
              z-index: 5;
            }

            .gradient-top-quantum {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 150px;
              background: linear-gradient(to bottom, #0B1220 0%, transparent 100%);
              z-index: 3;
            }

            .gradient-bottom-quantum {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 150px;
              background: linear-gradient(to top, #0B1220 0%, transparent 100%);
              z-index: 3;
            }
          </style>

<div className="wave-container-webgl" id="wave-container-feedback"><canvas height="0" style={{display: 'block', width: '2954px', height: '0px'}} width="5908"></canvas><canvas height="0" style={{display: 'block', width: '2954px', height: '0px'}} width="5908"></canvas><canvas height="0" style={{display: 'block', width: '2954px', height: '0px'}} width="5908"></canvas><canvas height="0" style={{display: 'block', width: '2954px', height: '0px'}} width="5908"></canvas><canvas height="0" style={{display: 'block', width: '2954px', height: '0px'}} width="5908"></canvas><canvas height="0" style={{display: 'block', width: '2954px', height: '0px'}} width="5908"></canvas></div>

<div className="gradient-top-quantum"></div>
<div className="gradient-bottom-quantum"></div>

<div className="scanline-overlay-quantum"></div>

<div className="z-10 flex flex-col min-h-screen pt-24 pr-4 pb-24 pl-4 relative items-center justify-center">

<div className="absolute inset-0 overflow-hidden pointer-events-none" style={{mixBlendMode: 'screen'}}>
<svg className="absolute w-full h-full top-0 left-0" preserveaspectratio="none" style={{filter: 'contrast(1.2) brightness(1.2)'}} viewbox="0 0 1920 1080">
<path d="M-200,500 C200,200 600,800 1200,400 S1800,900 2200,200" fill="none" stroke="#00F0FF" strokeLinecap="round" strokeWidth="4" style={{filter: 'drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 15px #00F0FF)', animation: 'flow-beam 7s linear infinite', opacity: '0.8'}}></path>
<path d="M-200,600 C300,800 800,200 1400,700 S2000,300 2400,600" fill="none" stroke="#00F0FF" strokeLinecap="round" strokeWidth="2" style={{filter: 'drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 15px #00F0FF)', animation: 'flow-beam 7s linear infinite', opacity: '0.3'}}></path>
<path d="M-200,800 C400,400 900,1000 1500,300 S2100,700 2500,400" fill="none" stroke="#FF0055" strokeLinecap="round" strokeWidth="4" style={{filter: 'drop-shadow(0 0 8px #FF0055) drop-shadow(0 0 15px #FF0055)', animation: 'flow-beam 9s linear infinite reverse', opacity: '0.8'}}></path>
<path d="M-200,300 C300,700 700,300 1300,800 S1900,400 2300,700" fill="none" stroke="#FF9500" strokeLinecap="round" strokeWidth="3" style={{filter: 'drop-shadow(0 0 8px #FF9500) drop-shadow(0 0 15px #FF9500)', animation: 'flow-beam 11s linear infinite', animationDelay: '-2s', opacity: '0.9'}}></path>
<path d="M0,1080 Q960,0 1920,1080" fill="none" stroke="#00FF9D" strokeLinecap="round" strokeWidth="2" style={{filter: 'drop-shadow(0 0 5px #00FF9D)', animation: 'flow-beam 13s linear infinite reverse', opacity: '0.6', strokeDasharray: '50 1000'}}></path>
</svg>
</div>
<style>
        @keyframes flow-beam {
            0% { stroke-dasharray: 0 2000; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 400 2000; stroke-dashoffset: -500; }
            100% { stroke-dasharray: 0 2000; stroke-dashoffset: -2000; }
        }
        @keyframes float-card {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
    </style>

<div className="text-center w-full max-w-6xl mb-16 px-4 relative z-10">
<h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white" style={{textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'}}>
            System <span style={{color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>Feedback.</span>
</h2>
<div className="mt- inline-block text-sm font-normal tracking-widest uppercase text-white/70 px-6 py-2 rounded-full" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.1)'}}>
            Neural Network Client Data
        </div>
</div>

<div className="flex gap-8 max-w-6xl w-full justify-center flex-wrap lg:flex-nowrap px-4 relative z-10">

<article className="w-full max-w-sm relative" style={{flex: '1 1 340px', animation: 'float-card 6s ease-in-out infinite'}}>
<div className="relative overflow-hidden rounded-3xl flex flex-col p-8 h-full transition-all duration-500 hover:-translate-y-2" style={{background: 'rgba(10, 15, 30, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'}}>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', opacity: '0.5'}}></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-block px-3 py-1.5 rounded text-xs font-medium font-mono tracking-wider uppercase" style={{background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#00F0FF'}}>
                        MAR.15.2024
                    </span>
<div className="flex gap-1">
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.242.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
</div>
<p className="text-white mb-7 leading-relaxed text-base font-light flex-1" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                    Barrios A2I transformed our entire operation. Their AI orchestration cut our processing time by 73% and the multi-agent system handles edge cases we never anticipated.
                </p>
<div className="flex items-center gap-4 pt-5" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center font-semibold text-black" style={{background: '#00F0FF', boxShadow: '0 0 15px #00F0FF'}}>
                        SA
                    </div>
<div className="flex flex-col">
<span className="text-white text-base font-semibold">Sarah Anderson</span>
<span className="text-sm font-mono text-white/70">CTO // TechFlow Inc</span>
</div>
</div>
</div>
</article>

<article className="w-full max-w-sm relative" style={{flex: '1 1 340px', animation: 'float-card 7s ease-in-out infinite', animationDelay: '-1s'}}>
<div className="relative overflow-hidden rounded-3xl flex flex-col p-8 h-full transition-all duration-500 hover:-translate-y-2" style={{background: 'rgba(10, 15, 30, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'}}>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', opacity: '0.5'}}></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-block px-3 py-1.5 rounded text-xs font-medium font-mono tracking-wider uppercase" style={{background: 'rgba(255, 0, 85, 0.05)', border: '1px solid rgba(255, 0, 85, 0.3)', color: '#FF0055'}}>
                        FEB.28.2024
                    </span>
<div className="flex gap-1">
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
</div>
<p className="text-white mb-7 leading-relaxed text-base font-light flex-1" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                    The event-driven architecture they built handles 50K concurrent users without breaking a sweat. Circuit breakers and dead letter queues saved us countless headaches.
                </p>
<div className="flex items-center gap-4 pt-5" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center font-semibold text-white" style={{background: '#FF0055', boxShadow: '0 0 15px #FF0055'}}>
                        MJ
                    </div>
<div className="flex flex-col">
<span className="text-white text-base font-semibold">Michael Johnson</span>
<span className="text-sm font-mono text-white/70">VP Engineering // ScaleForce</span>
</div>
</div>
</div>
</article>

<article className="w-full max-w-sm relative" style={{flex: '1 1 340px', animation: 'float-card 8s ease-in-out infinite', animationDelay: '-2s'}}>
<div className="relative overflow-hidden rounded-3xl flex flex-col p-8 h-full transition-all duration-500 hover:-translate-y-2" style={{background: 'rgba(10, 15, 30, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'}}>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', opacity: '0.5'}}></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-block px-3 py-1.5 rounded text-xs font-medium font-mono tracking-wider uppercase" style={{background: 'rgba(255, 149, 0, 0.05)', border: '1px solid rgba(255, 149, 0, 0.3)', color: '#FF9500'}}>
                        JAN.12.2024
                    </span>
<div className="flex gap-1">
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))'}} viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
</div>
<p className="text-white mb-7 leading-relaxed text-base font-light flex-1" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                    From alienated to innovated — that's exactly what happened to our startup. Their AI agents automated 80% of our manual workflows. ROI in 6 weeks.
                </p>
<div className="flex items-center gap-4 pt-5" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center font-semibold text-black" style={{background: '#FF9500', boxShadow: '0 0 15px #FF9500'}}>
                        EC
                    </div>
<div className="flex flex-col">
<span className="text-white text-base font-semibold">Emily Chen</span>
<span className="text-sm font-mono text-white/70">Founder // NexGen AI</span>
</div>
</div>
</div>
</article>
</div>
</div>



</section>

<section className="w-full max-w-7xl mx-auto px-6 mb-32 relative z-20" id="stack">
<div className="flex flex-col gap-2 mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">The Architecture of Autonomy</h2>
<p className="text-white/70 font-sans border-l-2 border-accent pl-3 mt-2">Modular intelligence nodes working in unison.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 hud-card p-8 group border-accent/ hover:border-accent/50 corner-accent">
<div className="absolute inset-0 bg-[radial-gradient(600px_at_50%_50%,rgba(245,158,11,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 p-4">
<svg className="text-accent/80 animate-spin-slow" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animationDuration: '10s'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="flex flex-col z-10 h-full relative justify-between">
<div className="absolute inset-0 -z-10 overflow-hidden rounded-[20px]">
<video autoplay="" className="w-full h-full object-cover opacity-40" loop="" muted="" playsinline="">
<source src="https://barrios-a2i-website-yvh6.vercel.app/video/ragnarok-brain.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0 animate-pulse"></div>
</div>
<div className="">
<span className="text-[11px] font-mono tracking-wider font-bold text-accent border border-accent/30 px-2 bg-accent/5 uppercase">[ CORE_SYSTEM ]</span>
<h3 className="text-4xl md:text-6xl font-serif text-white mt-4 italic group-hover:text-accent transition-colors duration-300 drop-shadow-lg tracking-tight">Ragnarok Brain</h3>
</div>
<div className="space-y-4">
<p className="text-white/70 text-lg font-sans">Central Orchestration. 59 Agents. Infinite Memory.</p>
<div className="flex gap-2 text-[11px] font-mono text-muted uppercase tracking-wider font-bold">
<span className="border border-white/10 px-2 py-1 group-hover:border-accent/30 group-hover:text-accent transition-all bg-black/40">[ AUTO_SCALING ]</span>
<span className="border border-white/10 px-2 py-1 group-hover:border-accent/30 group-hover:text-accent transition-all bg-black/40">[ SELF_HEALING ]</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 row-span-1 hud-card p-6 group border-primary/20 hover:border-primary/50">
<div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(0,194,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="bg-primary/10 p-2 rounded group-hover:bg-primary/20 transition-colors border border-primary/20">
<iconify-icon className="text-primary" icon="lucide:megaphone" width="20"></iconify-icon>
</div>
<span className="text-[11px] font-bold text-white bg-primary/20 px-2 py-1 border border-primary/20 font-mono tracking-wide">[ $199/MO ]</span>
</div>
<div className="">
<h4 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors tracking-tight">Marketing Overlord</h4>
<p className="text-[13px] text-white/60 font-sans leading-relaxed">Autonomous campaign management &amp; copy generation.</p>
</div>
</div>
</div>

<div className="col-span-1 row-span-1 hud-card p-6 group border-purple-500/20 hover:border-purple-500/50">
<div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="bg-purple-500/10 p-2 rounded group-hover:bg-purple-500/20 transition-colors border border-purple-500/20">
<iconify-icon className="text-purple-400" icon="lucide:video" width="20"></iconify-icon>
</div>
<span className="text-[11px] font-bold text-white bg-purple-500/20 px-2 py-1 border border-purple-500/20 font-mono tracking-wide">[ $500/VID ]</span>
</div>
<div className="">
<h4 className="text-2xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors tracking-tight">Neural Ad Forge</h4>
<p className="text-[13px] text-white/60 font-sans leading-relaxed">High-conversion video ads generated from raw text.</p>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 row-span-1 hud-card p-6 group border-green-500/20 hover:border-green-500/50 flex flex-col md:flex-row gap-6 items-center">
<div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(34,197,94,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-3 mb-2">
<div className="bg-green-500/10 p-2 rounded group-hover:bg-green-500/20 transition-colors border border-green-500/20">
<iconify-icon className="text-green-400" icon="lucide:monitor" width="20"></iconify-icon>
</div>
<span className="text-[11px] font-bold text-white bg-green-500/20 px-2 py-1 border border-green-500/20 font-mono tracking-wide">[ $1,500 ]</span>
</div>
<h4 className="text-3xl font-serif text-white group-hover:text-green-400 transition-colors tracking-tight">Cinesite Autopilot</h4>
<p className="text-sm text-white/60 font-sans mt-2">Self-optimizing landing pages that A/B test themselves in real-time.</p>
</div>
<div className="h-full w-full md:w-1/3 bg-black/60 border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-green-500/30 transition-colors shadow-inner">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="text-[11px] font-mono text-green-500 animate-pulse relative z-10 font-bold">[ &gt; CONVERSION: +40% ]</div>
</div>
</div>

<div className="col-span-1 row-span-1 hud-card p-6 group border-white/10 hover:border-white flex flex-col justify-center items-center text-center">
<span className="absolute top-3 right-3 text-[11px] font-bold text-black bg-muted px-1.5 py-0.5 tracking-wider font-mono">[ BETA ]</span>
<iconify-icon className="text-muted mb-3 group-hover:text-white transition-colors group-hover:scale-110 transform duration-300 opacity-60" icon="lucide:bot" width="40"></iconify-icon>
<h4 className="text-xl font-serif text-muted group-hover:text-white tracking-tight">Pet Cypher</h4>
<p className="text-[10px] text-muted/60 mt-1 font-mono uppercase tracking-wider">[ COMPANION_NODE ]</p>
</div>
</div>
</section>

<section className="relative w-full py-24 md:py-32 px-4 overflow-hidden" id="velocity">
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
<span className="text-xs font-mono text-primary uppercase tracking-widest">
                  Real-Time Metrics
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight tracking-tight">
                System
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Velocity
                </span>
</h2>
<p className="text-lg text-white/70 font-sans mb-8 leading-relaxed">
                Our distributed agent network processes over
                <span className="text-primary font-mono">230,000+</span> requests monthly
                with a <span className="text-green-500 font-mono">97.5%</span> success rate.
              </p>

<div className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-xl bg-[#0B1220]/40 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center justify-between mb-3">
<div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-xs font-mono text-green-500">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon> 40%
                        </div>
</div>
<div className="text-2xl font-serif font-bold text-white mb-1 tracking-tight">&lt;2s</div>
<p className="text-xs font-sans text-white/50 uppercase tracking-wider">Avg Response</p>
</div>

<div className="p-4 rounded-xl bg-[#0B1220]/40 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center justify-between mb-3">
<div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-xs font-mono text-green-500">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon> 2.1%
                        </div>
</div>
<div className="text-2xl font-serif font-bold text-white mb-1 tracking-tight">97.5%</div>
<p className="text-xs font-sans text-white/50 uppercase tracking-wider">Success Rate</p>
</div>

<div className="p-4 rounded-xl bg-[#0B1220]/40 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center justify-between mb-3">
<div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
<iconify-icon icon="lucide:clock" width="16">
<div className="text-2xl font-serif font-bold text-white mb-1 tracking-tight">99.99%</div>
<p className="text-xs font-sans text-white/50 uppercase tracking-wider">Uptime</p>
</iconify-icon></div>

<div className="p-4 rounded-xl bg-[#0B1220]/40 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center justify-between mb-3">
<div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-xs font-mono text-green-500">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon> 12
                        </div>
</div>
<div className="text-2xl font-serif font-bold text-white mb-1 tracking-tight">59</div>
<p className="text-xs font-sans text-white/50 uppercase tracking-wider">Active Agents</p>
</div>
</div>
</div>

<div className="relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">

<div className="absolute -top-12 -right-8 md:-right-12 z-20 w-[120px] h-[120px] animate-float" style={{-OrbitRadius: '60px'}}>
<div className="absolute inset-0 rounded-full border border-white/10 backdrop-blur-sm animate-spin-slow" style={{background: 'rgba(255, 255, 255, 0.03)', animationDuration: '20s'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-1/2 h-1/2 rounded-full border relative overflow-hidden backdrop-blur-xl" style={{background: 'linear-gradient(135deg, rgba(0, 194, 255, 0.15) 0%, rgba(0, 194, 255, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 194, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-white/90 drop-shadow-md text-primary">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"></path></svg>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full backdrop-blur-sm ring-1 ring-primary/40 -ml6px] -mt-[6px] shadow-[0_0_12px_rgba(0,194,255,0.6)] animate-orbit-cw bg-primary/60"></div>
<div className="absolute top-1/2 left h-2 rounded-full bg/60 backdrop-blur-sm ring-1 ring-white/30 -ml-[4px] -mt-[4px] shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-orbit-ccw"></div>
</div>

<div className="absolute -bottom-8 -left-4 md:-left-8 z-20 w-[90px] h-[90px] animate-float" style={{animationDelay: '1.5s', -OrbitRadius: '45px'}}>
<div className="absolute inset-0 rounded-full border border-white/10 backdrop-blur-sm animate-spin-slow" style={{background: 'rgba(255, 255, 255, 0.03)', animationDuration: '20s', animationDirection: 'reverse'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-1/2 h-1/2 rounded-full border relative overflow-hidden backdrop-blur-xl" style={{borderColor: 'rgba(245, 158, 11, 0.3)', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)', boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-white/90 drop-shadow-md text-accent">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full backdrop-blur-sm ring-1 ring-accent/40 -ml-[6px] -mt-[6px] shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-orbit-cw bg-accent/60"></div>
<div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm ring-1 ring-white/30 -ml-[4px] -mt-[4px] shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-orbit-ccw"></div>
</div>

<div className="relative p-6 rounded-2xl bg-[#0B1220]/60 backdrop-blur-md border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,194,255,0.15)] z-10">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-white font-serif text-lg mb-1 tracking-tight">Request Volume</h3>
<p className="text-xs font-mono text-white/50">Last 30 days</p>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-green-500 text-xs font-mono uppercase">LIVE</span>
</div>
</div>
<div className="h-32 mb-6 w-full relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 180 80">
<defs>
<lineargradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00C2FF" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#00C2FF" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 80 L0 50 Q 20 60, 40 40 T 80 30 T 120 40 T 160 20 L 180 30 L 180 80 Z" fill="url(#chartFill)"></path>
<path d="M0 50 Q 20 60, 40 40 T 80 30 T 120 40 T 160 20 L 180 30" fill="none" stroke="#00C2FF" strokeWidth="2"></path>
</svg>
<div className="absolute top-[30%] left-[20%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse"></div>
<div className="absolute top-[20%] left-[60%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse" style={{animationDelay: '0.7s'}}></div>
<div className="absolute top-[25%] left-[80%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse" style={{animationDelay: '0.3s'}}></div>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
<div>
<div className="text-xl font-bold text-primary font-serif">230k+</div>
<p className="text-[10px] font-mono text-white/40">REQUESTS</p>
</div>
<div>
<div className="text-xl font-bold text-accent font-serif">12TB</div>
<p className="text-[10px] font-mono text-white/40">MEMORY</p>
</div>
<div>
<div className="text-xl font-bold text-green-500 font-serif">70%</div>
<p className="text-[10px] font-mono text-white/40">SAVINGS</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></section>

<section className="w-full max-w-7xl mx-auto px-6 mb-32 relative z-20" id="architecture">
<div className="mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter mb-4">The Honest Truth</h2>
<p className="text-white/70 max-w-xl border-l-2 border-primary pl-3 font-sans">Humans sleep. Humans make mistakes. The Barrios A2I system does neither.</p>
</div>
<div className="w-full overflow-x-auto pb-4">
<div className="min-w-[800px] hud-card rounded-[20px] border-white/10 overflow-hidden">
<div className="grid grid-cols-4 bg-white/[-b border-white/10">
<div className="p text-[11px] font-bold font-mono text-muted uppercase tracking-[0.1em] flex items-center">[ METRIC ]</div>
<div className="p-6 text-[11px] font-bold text-red-300/80 bg-red-900/5 border-l border-white/5 font-mono tracking-wider uppercase">[ TRADITIONAL ]</div>
<div className="p-6 text-[11px] font-bold text-yellow-300/80 bg-yellow-900/5 border-l border-white/5 font-mono tracking-wider uppercase">[ FREELANCER ]</div>
<div className="p-6 text-[11px] font-bold text-primary bg-primary/10 border-l border-primary/20 relative overflow-hidden font-mono tracking-wider shadow-[inset_0_0_20px_rgba(0,194,255,0.1)] uppercase">
<div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50"></div>
<span className="relative z-10 flex items-center gap-2">
                            [ BARRIOS A2I ]
                            <iconify-icon icon="lucide:check-circle-2"></iconify-icon>
</span>
</div>
</div>
<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="p-6 text-sm text-white/70 font-sans font-hover:text-white">Monthly Cost</div>
<div className="p-6 text-[13px] font-mono text-red-400 opacity-80">$8,000+</div>
<div className="p-6 text-[13px] font-mono text-yellow-400 opacity-80">$3,500+</div>
<div className="p-6 text-[13px] font-mono text-primary font-bold bg-primary/5 border-l border-primary/10">$199</div>
</div>
<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="p-6 text-sm text-white/70 font-sans font-medium group-hover:text-white">Turnaround Time</div>
<div className="p-6 text-[13px] font-mono text-white/60">5-7 Days</div>
<div className="p-6 text-[13px] font-mono text-white/60">48 Hours</div>
<div className="p-6 text-[13px] font-mono text-primary font-bold bg-primary/5 border-l border-primary/10">&lt; 2 Seconds</div>
</div>
<div className="grid grid-cols-4 hover:bg-white/[0.02] transition-colors group">
<div className="p-6 text-sm text-white/70 font-sans font-medium group-hover:text-white">Context Window</div>
<div className="p-6 text-[13px] font-mono text-white/60">Fragmented</div>
<div className="p-6 text-[13px] font-mono text-white/60">Zero</div>
<div className="p-6 text-[13px] font-mono text-accent font-bold bg-primary/5 border-l border-primary/10">12TB (Infinite)</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 mb-32 relative z-20" id="pricing">
<div className="text-center mb-16">
<span className="text-primary font-mono text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">[ INITIALIZATION_OPTIONS ]</span>
<h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter">Select Your Protocol.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="hud-card p-8 flex flex-col gap-6 h-full relative group hover:border-purple-500/50 transition-colors rounded-[20px]">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
<div>
<h3 className="text-2xl font-serif font-bold text-white tracking-tight">Neural Ad Forge</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-mono text-white tracking-tighter">$500</span>
<span className="text-[11px] font-bold text-white/60 font-mono uppercase">[ / VIDEO ]</span>
</div>
<p className="text-sm text-white/70 font-sans mt-4 leading-relaxed">Single-shot high performance video assets.</p>
</div>
<ul className="space-y-3 text-[11px] font-bold text-white/60 font-mono mt-auto pt-6 border-t border-white/10 uppercase tracking-wider">
<li className="flex gap-2 items-center"><span className="text-purple-500">&gt;&gt;</span> [ SCRIPT_GEN ]</li>
<li className="flex gap-2 items-center"><span className="text-purple-500">&gt;&gt;</span> [ AI_VOICEOVER ]</li>
<li className="flex gap-2 items-center"><span className="text-purple-500">&gt;&gt;</span> [ STOCK_SYNC ]</li>
</ul>
<button className="w-full h-12 flex items-center justify-center rounded-[14px] border border-white/10 text-white font-bold text-[11px] hover:bg-white/5 transition-all uppercase tracking-widest font-mono group-hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                     [ INITIALIZE ]
                 </button>
</div>

<div className="bg-gradient-to-b from-[#151a25] to-[#0a0a0f] rounded-[20px] p-8 flex flex-col gap-6 h-full relative shadow-[0_0_50px_-10px_rgba(0,194,255,0.15)] border border-primary/50 transform md:-translate-y-6 z-10 transition-transform duration-300 hover:scale-[1.02]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-void text-[11px] font-mono font-bold px-4 py-1.5 uppercase tracking-wider shadow-[0_0_10px_rgba(0,194,255,0.4)]">
                     [ MOST_DEPLOYED
                 <div className="absolute -inset-1 bg-primary/10 blur-xl -z-10 rounded-[20px] opacity-40"></div>
<div className="">
<h3 className="text-3xl font-serif font-bold text-white italic tracking-tight">Marketing Overlord</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-mono text-primary tracking-tighter">$199</span>
<span className="text-[11px] font-bold text-white/60 font-mono uppercase">[ / MO ]</span>
</div>
<p className="text-sm text-white/70 font-sans mt-4 leading-relaxed">Full autonomy for your marketing stack.</p>
</div>
<ul className="space-y-4 text-[11px] font-bold text-white font-mono mt-auto pt-6 border-t border-white/10 uppercase tracking-wider">
<li className="flex gap-3 items-center"><span className="text-primary">&gt;&gt;</span> [ UNLIMITED_COPY ]</li>
<li className="flex gap-3 items-center"><span className="text-primary">&gt;&gt;</span> [ BLOG_AUTOMATION ]</li>
<li className="flex gap-3 items-center"><span className="text-primary">&gt;&gt;</span> [ SOCIAL_POSTING ]</li>
</ul>
<button className="w-full h-14 rounded-[14px] bg-primary text-void font-bold text-[12px] hover:bg-[#25e6e9] transition-all uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(0,194,255,0.4)] flex items-center justify-center gap-2">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
                     [ DEPLOY_OVERLORD ]
                 </button>
</div>

<div className="hud-card p-8 flex flex-col gap-6 h-full relative group hover:border-accent/50 transition-colors rounded-[20px]">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
<div>
<h3 className="text-2xl font-serif font-bold text-white tracking-tight">Custom Forge</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-mono text-white tracking-tighter">Custom</span>
</div>
<p className="text-sm text-white/70 font-sans mt-4 leading-relaxed">Enterprise-grade custom logic architecture.</p>
</div>
<ul className="space-y-3 text-[11px] font-bold text-white/60 font-mono mt-auto pt-6 border-t border-white/10 uppercase tracking-wider">
<li className="flex gap-2 items-center"><span className="text-accent">&gt;&gt;</span> [ PRIVATE_LLM ]</li>
<li className="flex gap-2 items-center"><span className="text-accent">&gt;&gt;</span> [ ON_PREMISE ]</li>
<li className="flex gap-2 items-center"><span className="text-accent">&gt;&gt;</span> [ DEDICATED_SUPPORT ]</li>
</ul>
<button className="w-full h-12 flex items-center justify-center rounded-[14px] border border-white/10 text-white font-bold text-[11px] hover:bg-white/5 transition-all uppercase tracking-widest font-mono group-hover:border-accent/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                     [ CONTACT_ENGINEERING ]
                 </button>
</div>
</div>
</div></section>

<footer className="relative w-full border-t border-primary/30 bg-obsidian pt-20 pb-10 overflow-hidden z-20">
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-4 flex flex-col gap-6">
<div className="flex items-center gap-3">
<img 917d6f93-fb36-439a-8c48-884b67b35_1600w.jpg"="" alt="Barrios A2I Logo" assets="" className="h-[48px] w-auto object-contain transition duration-150 ease-out grayscale hover:grayscale-0" hoirqrkdgbmvpwutwuwj.supabase.co="" object="" public="" srchttps:="" storage="" v1=""/>
<span className="font-bold font-sans tracking-tight text-white uppercase">BARRIOS A2I</span>
</div>
<h2 className="text-3xl md:text-4xl font-serif text-white/90 leading-none tracking-tight">
                        Alienation 2<br/>
<span className="text-primary italic">Innovation</span>
</h2>
<p className="text-[11px] text-muted/60 font-mono mt-4 max-w-xs uppercase tracking-wider">
                        [ SYSTEM_MSG: AUTOMATION_COMPLETE ]
                    </p>
</div>
<div className="md:col-span-2">
<h4 className="text-[11px] font-bold font-mono text-primary mb-6 uppercase tracking-widest">[ SYSTEM ]</h4>
<ul className="space-y-3 text-sm text-muted/80 font-sans font-medium">
<li><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="#stack">Intelligence Stack</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="#velocity">System Velocity</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="#architecture">Architecture</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-[11px] font-bold font-mono text-primary mb-6 uppercase tracking-widest">[ LEGAL ]</h4>
<ul className="space-y-3 text-sm text-muted/80 font-sans font-medium">
<li><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="#">Terms of Service</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="#">Data Processing</a></li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="text-[11px] font-bold font-mono text-primary mb-6 uppercase tracking-widest">[ CONTACT_NODE ]</h4>
<div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm group hover:border-primary/30 transition-colors">
<p className="text-white/80 mb-4 font-sans text-sm font-normal">Ready to initialize your digital nervous system?</p>
<a className="flex items-center gap-3 text-white hover:text-primary transition-colors mb-4 font-mono text-sm" href="mailto:access@barriosa2i.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                            access@barriosa2i.com
                        </a>
<div className="flex items-center gap-3 text-muted/60 text-sm font-mono mb-6">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
                            San Francisco, CA [ HQ_NODE ]
                        </div>
<div className="flex gap-4">
<a className="text-muted hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-muted hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-muted hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-mono text-[10px] text-muted/40 uppercase tracking-widest">© 2024 Barrios A2I Inc. All Rights Reserved.</span>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
<div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
<span className="font-mono text-[10px] text-primary font-bold tracking-wider uppercase">System Operational</span>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
