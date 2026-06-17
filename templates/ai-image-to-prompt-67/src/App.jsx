import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    // WebGL Aurora Background
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
        uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float iTime;
            uniform vec2 iResolution;

            #define NUM_OCTAVES 3

            float rand(vec2 n) { 
                return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
            }

            float noise(vec2 p){
                vec2 ip = floor(p);
                vec2 u = fract(p);
                u = u*u*(3.0-2.0*u);
                
                float res = mix(
                    mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                return res*res;
            }

            float fbm(vec2 x) {
                float v = 0.0;
                float a = 0.3;
                vec2 shift = vec2(100);    
                mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                for (int i = 0; i < NUM_OCTAVES; ++i) {
                    v += a * noise(x);
                    x = rot * x * 2.0 + shift;
                    a *= 0.4;
                }
                return v;
            }

            void main() {
                vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                
                vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                vec2 v;
                vec4 o = vec4(0.0);
                
                float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                
                for(float i = 0.0; i++ < 35.0;)
                {
                    v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                    
                    float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                    
                    vec4 auroraColors = vec4(
                        0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
                        0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
                        0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
                        1.0
                    );
                    
                    vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                    
                    float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                    o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                }
                
                o = tanh(pow(o / 100.0, vec4(1.6)));
                gl_FragColor = o * 1.5;
            }
        `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    });

    animate();
  


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas id="aurora-canvas">

<style>
    canvas { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: -10; }
  </style>

</canvas></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-slate-900/50 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#02040a]/80 backdrop-blur-xl transition-all duration-300 animate-fade-in-up">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow duration-300">
<iconify-icon className="text-white text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<span className="text-lg font-medium text-white tracking-tight font-space">PromptVision</span>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-purple-400 transition-colors" href="#">Log in</a>
<button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-50 transition-all hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 duration-200">
                    Start Creating
                </button>
</div>
</div>
</nav>

<main className="overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8 backdrop-blur-sm animate-fade-in-up delay-100 hover:bg-purple-500/20 transition-colors duration-300 cursor-default">
<span className="flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse"></span>
<span className="text-xs font-medium text-purple-200 tracking-wide uppercase">New: Stable Diffusion XL Support</span>
</div>

<h1 className="leading-[1.1] md:text-7xl text-5xl text-white tracking-tight max-w-4xl mx-auto mb-6 font-space animate-fade-in-up delay-200">
                Reverse engineer images into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 animate-gradient-text">perfect AI prompts</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300">
                Upload any visual. Our advanced vision models deconstruct style, lighting, and composition to generate highly accurate prompts for Midjourney, DALL-E 3, and more.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-400">
<button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base font-medium hover:opacity-90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_-10px_rgba(124,58,237,0.7)] flex items-center justify-center gap-2 hover:-translate-y-1">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:cloud-upload-linear"></iconify-icon>
                    Upload Image
                </button>
<button className="group w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white text-base font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
<iconify-icon className="text-xl group-hover:text-purple-400 transition-colors duration-300" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto perspective-1000 group animate-fade-in-up delay-500">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

<div className="relative bg-[#0b0c15] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 animate-float transform-style-preserve-3d transition-transform duration-500">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#02040a]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
</div>
<div className="mx-auto bg-slate-900/50 px-3 py-1 rounded-md text-xs font-mono text-slate-500 flex items-center gap-2 hover:text-slate-300 transition-colors">
<iconify-icon className="text-xs" icon="solar:lock-password-linear"></iconify-icon>
                            promptvision.ai/studio
                        </div>
</div>

<div className="flex h-[500px] text-left">

<div className="w-64 border-r border-white/5 bg-[#05060d] p-4 hidden md:flex flex-col gap-6">
<div className="space-y-1">
<div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3 px-2">Workspace</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-lg" icon="solar:gallery-linear"></iconify-icon>
<span className="text-sm font-medium">Analyzer</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
<span className="text-sm font-medium">History</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
<iconify-icon className="text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium">Collections</span>
</div>
</div>
<div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5 relative overflow-hidden group/card">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:animate-[shimmer_2s_infinite]"></div>
<div className="text-sm font-medium text-white mb-1">Pro Plan</div>
<div className="text-xs text-slate-400 mb-3">500 credits remaining</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col md:flex-row">

<div className="flex-1 p-8 flex flex-col border-b md:border-b-0 md:border-r border-white/5 relative bg-[#02040a]">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
<div className="relative z-10 flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-xl bg-slate-900/30 p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900/50 cursor-pointer group/upload">
<div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 shadow-xl group-hover/upload:scale-110 group-hover/upload:-rotate-3 transition-transform duration-300 overflow-hidden border border-white/10">
<img alt="Cyberpunk city" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm font-medium text-white mb-3">Analyzing Image...</p>
<div className="flex gap-2 flex-wrap justify-center">
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-purple-300 border border-purple-500/20 animate-pulse">Cyberpunk</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-blue-300 border border-blue-500/20 animate-pulse delay-75">Neon</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-pink-300 border border-pink-500/20 animate-pulse delay-150">Cinematic</span>
</div>
</div>
</div>

<div className="w-full md:w-96 bg-[#080a12] p-6 flex flex-col gap-6 overflow-y-auto">
<div>
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">Detected Style</label>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-center transition hover:bg-purple-500/10">
<div className="text-[10px] text-purple-300 mb-1 uppercase tracking-wide">Medium</div>
<div className="text-sm font-medium text-white">Digital Art</div>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/5 text-center transition hover:bg-white/10">
<div className="text-[10px] text-slate-400 mb-1 uppercase tracking-wide">Lighting</div>
<div className="text-sm font-medium text-white">Volumetric</div>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Generated Prompt</label>
<button className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:copy-linear"></iconify-icon> Copy
                                        </button>
</div>
<div className="p-4 rounded-xl bg-[#02040a] border border-white/10 text-sm leading-relaxed text-slate-300 font-mono shadow-inner group/prompt relative overflow-hidden">
<span className="text-purple-400">/imagine prompt:</span> a futuristic cyberpunk cityscape at night, neon lights reflecting on wet pavement, towering skyscrapers with holographic ads, 
                                        <span className="text-yellow-400">--ar 16:9</span>
<span className="text-blue-400">--v 6.0</span>
<span className="text-pink-400">--style raw</span>
<span className="inline-block w-1.5 h-4 bg-purple-500 ml-1 align-middle animate-pulse"></span>

<div className="absolute inset-0 bg-white/5 opacity-0 group-hover/prompt:opacity-100 transition-opacity pointer-events-none"></div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-purple-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
                                        Optimize Prompt
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl text-white tracking-tight mb-4 font-space">Powerful features for creative pros</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">Simplify your workflow by instantly extracting the DNA of any image and converting it into a reusable prompt recipe.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/20 transition-colors duration-500 reveal delay-100">
<div className="absolute inset-0 bg-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative h-full bg-[#05060d] rounded-xl p-8 border border-white/5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-indigo-400 text-2xl" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-space">Visual Analysis</h3>
<p className="text-base text-slate-400 leading-relaxed mb-6">Our AI identifies camera angles, lighting conditions, artist styles, and composition techniques instantly.</p>
<div className="mt-auto">
<div className="h-16 rounded-lg bg-gradient-to-br from-indigo-900/20 to-slate-900/50 border border-white/5 p-3 flex items-center gap-3">
<div className="flex-1 space-y-2">
<div className="h-1.5 w-3/4 bg-indigo-500/20 rounded-full animate-pulse"></div>
<div className="h-1.5 w-1/2 bg-slate-700/20 rounded-full animate-pulse delay-75"></div>
</div>
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/20 transition-colors duration-500 reveal delay-200">
<div className="absolute inset-0 bg-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative h-full bg-[#05060d] rounded-xl p-8 border border-white/5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:tuning-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-space">Parameter Tuning</h3>
<p className="text-base text-slate-400 leading-relaxed mb-6">Fine-tune aspect ratios, chaos levels, and stylization parameters with an intuitive slider interface.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-500 w-6 font-mono">--ar</span>
<div className="flex-1 h-1 bg-slate-800 rounded-full relative group-hover:bg-slate-700 transition-colors">
<div className="absolute w-1/2 h-full bg-purple-500 rounded-full group-hover:w-2/3 transition-all duration-1000"></div>
<div className="absolute left-1/2 w-2 h-2 bg-white rounded-full -top-[2px] shadow group-hover:left-2/3 transition-all duration-1000"></div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-500 w-6 font-mono">--s</span>
<div className="flex-1 h-1 bg-slate-800 rounded-full relative group-hover:bg-slate-700 transition-colors">
<div className="absolute w-3/4 h-full bg-purple-500 rounded-full group-hover:w-1/2 transition-all duration-1000 delay-100"></div>
<div className="absolute left-3/4 w-2 h-2 bg-white rounded-full -top-[2px] shadow group-hover:left-1/2 transition-all duration-1000 delay-100"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/20 transition-colors duration-500 reveal delay-300">
<div className="absolute inset-0 bg-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative h-full bg-[#05060d] rounded-xl p-8 border border-white/5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon className="text-pink-400 text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-space">Model Compatibility</h3>
<p className="text-base text-slate-400 leading-relaxed mb-6">Automatically format prompts for Midjourney v6, Stable Diffusion XL, or DALL-E 3 syntax.</p>
<div className="mt-auto flex gap-2">
<span className="px-3 py-1 bg-slate-800/50 rounded border border-white/5 text-[10px] text-slate-300 group-hover:border-purple-500/30 transition-colors">MJ v6</span>
<span className="px-3 py-1 bg-slate-800/50 rounded border border-white/5 text-[10px] text-slate-300 group-hover:border-purple-500/30 transition-colors delay-75">SDXL</span>
<span className="px-3 py-1 bg-slate-800/50 rounded border border-white/5 text-[10px] text-slate-300 group-hover:border-purple-500/30 transition-colors delay-150">DALL-E</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 reveal">
<div className="relative rounded-2xl border border-white/10 bg-[#05060d] p-2 shadow-2xl group cursor-pointer">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
<div className="relative z-10 rounded-xl overflow-hidden bg-[#02040a]">
<img alt="Code interface" className="w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 animate-spin-slow"></div>
<div className="h-2 w-24 bg-slate-700 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-800 rounded-full"></div>
<div className="h-2 w-5/6 bg-slate-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 reveal delay-200">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
<span className="text-xs font-medium text-indigo-300 uppercase tracking-wider">Workflow Automation</span>
</div>
<h2 className="text-4xl text-white tracking-tight mb-6 font-space">Integrate directly into your design pipeline</h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Don't switch tabs. Our API and plugin ecosystem allows you to generate, refine, and test prompts directly within tools like Discord, Figma, and Photoshop.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-purple-500 text-xl mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-300">One-click export to clipboard or Discord</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-purple-500 text-xl mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-300">Batch processing for multiple images</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-purple-500 text-xl mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-300">Custom style presets for brand consistency</span>
</li>
</ul>
<button className="group text-base font-medium text-white border-b border-purple-500 pb-0.5 hover:text-purple-400 transition-colors flex items-center gap-1 w-fit">
                        Explore integrations <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
</div>
</div>
</div>
</section>


<footer className="border-t border-white/5 py-12 bg-[#02040a]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-white tracking-tight font-space">PromptVision</span>
</div>
<div className="flex items-center gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-sm text-slate-600">
                © 2024 PromptVision AI.
            </div>
</div>
</footer>



    </>
  );
}
