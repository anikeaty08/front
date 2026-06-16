import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    // WebGL Aurora Background - Modified for Emerald/Lime Palette
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const canvas = document.getElementById('aurora-canvas');
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.replaceWith(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '-10';

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
                    
                    // Modified Colors: Emerald, Lime, Dark Teal
                    vec4 auroraColors = vec4(
                        0.05 + 0.1 * sin(i * 0.2 + iTime * 0.4), // Red (low)
                        0.3 + 0.2 * cos(i * 0.3 + iTime * 0.5),  // Green (high)
                        0.2 + 0.2 * sin(i * 0.4 + iTime * 0.3),  // Blue (mid)
                        1.0
                    );
                    
                    vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                    
                    float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                    o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                }
                
                o = tanh(pow(o / 100.0, vec4(1.6)));
                gl_FragColor = o * 1.0; 
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
  


        // Initialize Lucide icons with specific stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>
<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<canvas height="1016" style={{display: 'block', width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', zIndex: '-10'}} width="1041"></canvas>


</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md bg-[#050505]/70 border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 group select-none">

<div className="relative flex items-center justify-center w-9 h-9 rounded-[10px] bg-gradient-to-br shadow-[0_0_15px_-3px_rgba(132,204,22,0.4)] ring-1 transition-transform duration-300 group-hover:scale-105 from-lime-400 via-emerald-500 to-teal-600 ring-white/10">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px] from-white/20"></div>
<svg className="w-5 h-5 drop-shadow-sm relative z-10 text-[#020617]" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 2C6.48 2 2 6.03 2 11c0 1.85.62 3.57 1.69 5L3 21l5.54-1.23c1.07.47 2.23.73 3.46.73 5.52 0 10-4.03 10-9s-4.48-9-10-9zm0 11a2 2 0 100-4 2 2 0 000 4z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-[17px] font-medium tracking-tight group-hover:text-lime-100 transition-colors text-white">Ordermatic</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="transition-colors hover:text-lime-400" href="#solutions">Solutions</a>
<a className="transition-colors hover:text-lime-400" href="#how-it-works">How it works</a>
<a className="transition-colors hover:text-lime-400" href="#testimonials">Stories</a>
</div>
<a className="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#bef264] hover:bg-[#a3e635] shadow-[0_0_20px_-5px_rgba(190,242,100,0.3)] text-black tracking-tight" href="#">
                Get the app
            </a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-40 overflow-hidden pt-32 pb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 pointer-events-none bg-emerald-900/20"></div>
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-lime-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-medium mb-8 backdrop-blur-sm bg-white/5 border-white/10 text-lime-200/80">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-lime-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                        Trusted by 500+ operators
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-white">
                        Transform your <br/>
<span className="acid-gradient-text">operations.</span>
</h1>
<p className="text-lg lg:text-xl mb-10 leading-relaxed max-w-lg text-stone-400">
                        Turn chaos into clarity. Automate WhatsApp workflows, route orders instantly, and get visibility into every conversation.
                    </p>
<div className="flex flex-wrap items-center gap-4 mb-16">

<button className="h-14 px-8 rounded-full hover:bg-[#a3e635] font-semibold transition-all shadow-[0_0_30px_-5px_rgba(190,242,100,0.4)] flex items-center gap-2 group bg-[#bef264] text-black tracking-tight">
                            Get the app
                        </button>
<button className="h-14 px-8 rounded-full border font-medium transition-all backdrop-blur-sm flex items-center gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white">
                            Watch demo
                        </button>
</div>
<div className="grid grid-cols-3 gap-12 w-full max-w-md">
<div>
<div className="text-3xl font-medium mb-1 text-white">10K+</div>
<div className="text-sm text-stone-500 font-medium">Orders daily</div>
</div>
<div>
<div className="text-3xl font-medium mb-1 text-white">5M+</div>
<div className="text-sm text-stone-500 font-medium">Messages handled</div>
</div>
<div>
<div className="text-3xl font-medium mb-1 text-white">4.9</div>
<div className="text-sm text-stone-500 font-medium">Customer rating</div>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end perspective-[1000px]">

<div className="absolute inset-0 bg-gradient-to-tr blur-[60px] rounded-full -z-10 transform scale-90 from-emerald-600/20 to-lime-600/20"></div>

<div className="absolute top-10 -left-4 z-20 animate-[float_6s_ease-in-out_infinite]">
<div className="glass-card p-4 rounded-2xl shadow-2xl w-64 transform -rotate-6 border border-white/10">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-300">
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white">Order Analysis</div>
<div className="text-[10px] text-stone-400">Live • Just now</div>
</div>
</div>
<button className="text-stone-500 hover:text-white"><svg className="lucide lucide-x" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="text-xs p-3 rounded-lg border text-stone-300 bg-white/5 border-white/5">
                                "Customer requested address change. Logistics updated automatically."
                            </div>
<div className="mt-3 flex justify-end">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
<svg className="lucide lucide-check text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative w-[320px] sm:w-[360px] h-[680px] bg-[#0a0a0a] rounded-[40px] border-[6px] border-[#202022] shadow-2xl overflow-hidden z-10 flex flex-col">

<div className="px-6 pt-4 pb-2 flex justify-between items-center text-[10px] font-medium text-stone-400">
<span>9:41</span>
<div className="flex gap-1.5">
<svg className="lucide lucide-signal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20v-12"></path><path d="M22 20v-16"></path></svg>
<svg className="lucide lucide-wifi" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 0 1 10 10 4 4 0 0 1-4 4 6 6 0 0 1-12 0 4 4 0 0 1-4-4 10 10 0 0 1 10-10z"></path><path d="M12 8a6 6 0 0 1 6 6 2 2 0 0 1-2 2 4 4 0 0 1-8 0 2 2 0 0 1-2-2 6 6 0 0 1 6-6z"></path><path d="M12 14a2 2 0 0 1 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z"></path></svg>
<svg className="lucide lucide-battery-full" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" ry="2" width="16" x="2" y="7"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg>
</div>
</div>

<div className="px-4 py-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<button className="text-stone-400"><svg className="lucide lucide-chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-[#bef264] text-black">OM</div>
<div className="">
<div className="text-sm font-medium text-white">Ordermatic Bot</div>
<div className="text-[10px] text-lime-400">Operational System</div>
</div>
</div>
<button className="text-stone-400"><svg className="lucide lucide-more-vertical" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>

<div className="flex-1 p-4 space-y-6 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-b to-transparent pointer-events-none from-emerald-900/5"></div>

<div className="flex justify-center">
<div className="bg-[#1e1e20] border px-3 py-1.5 rounded-full text-[10px] flex items-center gap-1.5 border-white/5 text-stone-400">
<svg className="lucide lucide-sparkles text-lime-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                                    Customer identified: Returning (Gold Tier)
                                </div>
</div>

<div className="flex flex-col gap-1">
<div className="bg-[#27272a] self-start rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%] border border-white/5">
<p className="text-xs leading-relaxed text-stone-200">Hi, can I add extra sauce to order #442? I forgot to select it.</p>
</div>
<span className="text-[10px] ml-2 text-stone-600">09:42</span>
</div>

<div className="flex flex-col gap-1 items-end">
<div className="chat-bubble-gradient self-end rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] shadow-lg shadow-emerald-900/20">
<p className="text-xs leading-relaxed text-white">Checking with the kitchen display... One moment.</p>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="bg-[#18181b] rounded-xl p-3 border border-lime-500/20 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#bef264]"></div>
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-medium uppercase tracking-wide text-[#bef264]">Kitchen Display System</span>
<span className="flex h-1.5 w-1.5 rounded-full bg-[#bef264]"></span>
</div>
<p className="text-xs font-medium text-stone-300">Updated Order #442</p>
<p className="text-[10px] text-stone-500 mt-0.5">+ Extra Sauce (No Charge)</p>
</div>
</div>

<div className="flex flex-col gap-1 items-end">
<div className="chat-bubble-gradient self-end rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] shadow-lg shadow-emerald-900/20">
<p className="text-xs leading-relaxed text-white">Done! I've updated it for you. Anything else?</p>
</div>
<span className="text-[10px] mr-2 text-stone-600">09:43 • Read</span>
</div>
</div>

<div className="p-4 bg-[#0a0a0a] border-t z-20 border-white/5">
<div className="flex items-center gap-3">
<button className="text-stone-500 transition-colors hover:text-white"><svg className="lucide lucide-plus-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg></button>
<div className="flex-1 bg-[#18181b] h-9 rounded-full px-4 flex items-center text-xs text-stone-500 border border-white/5">
                                    Type a message...
                                </div>
<button className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-lime-900/20 text-lime-400 hover:bg-lime-500 hover:text-black">
<svg className="lucide lucide-mic" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</button>
</div>
<div className="flex justify-center mt-4 mb-1">
<div className="w-32 h-1 rounded-full bg-white/20"></div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 animate-[bounce_4s_infinite]">
<div className="glass-card px-4 py-2.5 rounded-full flex items-center gap-3 shadow-2xl shadow-black/50">
<div className="relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-xs font-medium text-white">AI Assistant Active</span>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 -left-12 -z-10 opacity-60 blur-[1px]">
<div className="glass-card p-3 rounded-xl border w-40 border-white/5">
<div className="h-2 w-20 rounded mb-2 bg-white/10"></div>
<div className="h-2 w-12 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                        A modern operations partner for businesses run through WhatsApp.
                    </h2>
<p className="text-lg mb-6 leading-relaxed text-stone-400">
                        Customers message you constantly—placing orders, raising issues, asking for help. But the tools you use to manage those conversations haven’t caught up. What should be organised and trackable ends up scattered across personal WhatsApp devices, shared inboxes, and manual handovers.
                    </p>
<p className="text-lg mb-8 leading-relaxed text-stone-400">
                        Ordermatic solves this by combining consultancy-level understanding of your workflows with product-grade systems that run on WhatsApp and other channels. We don't sell "a bot." We build communication systems that actually run your operation.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 bg-lime-500/10 p-1 rounded text-lime-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-stone-300">Remove friction for customers</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-lime-500/10 p-1 rounded text-lime-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-stone-300">Give staff clear workflows</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-lime-500/10 p-1 rounded text-lime-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-stone-300">Provide managers real-time visibility</span>
</li>
</ul>
</div>

<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-lime-500/10 blur-3xl rounded-full opacity-40"></div>
<div className="relative border rounded-2xl p-8 shadow-2xl bg-[#0a0a0a] border-white/5">
<div className="flex items-center justify-between mb-8 border-b pb-4 border-white/5">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="text-xs text-stone-500 font-mono">Ordermatic System v2.0</div>
</div>

<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800">
<svg className="lucide lucide-user w-5 h-5 text-stone-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="rounded-2xl rounded-tl-none p-4 max-w-[80%] border bg-neutral-900/50 border-white/5">
<p className="text-base text-stone-300">I'd like to place a re-order for my usual setup.</p>
</div>
</div>
<div className="flex gap-4 justify-center py-2">
<div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-1 rounded-full text-xs flex items-center gap-2 text-emerald-300">
<svg className="lucide lucide-bot w-3 h-3" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                                    Automated routing to Kitchen Display
                                </div>
</div>
<div className="flex gap-4 flex-row-reverse">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg bg-[#bef264] shadow-lime-900/20">
<svg className="lucide lucide-check-circle w-5 h-5 text-black" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="border border-emerald-500/20 rounded-2xl rounded-tr-none p-4 max-w-[80%] bg-emerald-900/20">
<p className="text-base text-emerald-100">Order #4092 confirmed. Sent directly to prep station. Loyalty points added.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white/[0.01] border-white/5" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                    One brand. A family of tools built for high-volume operations.
                </h2>
<p className="text-lg text-stone-400">
                    Every business has its own bottlenecks. Ordermatic offers a modular suite of solutions—each designed to fix a specific operational gap while still working together as a unified system.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative border rounded-2xl p-8 hover:border-lime-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(190,242,100,0.1)] flex flex-col bg-[#0a0a0a] border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-neutral-900 border-white/10">
<svg className="lucide lucide-utensils w-6 h-6 text-white" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-2 tracking-tight text-white">Ordermatic</h3>
<p className="text-sm font-medium mb-4 text-lime-400">WhatsApp Ordering &amp; Loyalty</p>
<p className="text-lg mb-8 flex-grow text-stone-400">Fast ordering. Fewer mistakes. Happier customers.</p>
<ul className="space-y-3 mb-8 text-stone-400">
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-[#bef264]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Replaces phone-ins
                        </li>
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-[#bef264]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Guided menu flows
                        </li>
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-[#bef264]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Direct to counter tablet
                        </li>
</ul>
<a className="inline-flex items-center font-medium hover:gap-2 transition-all text-white group-hover:text-lime-400" href="#">
                        See restaurant solutions <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative border rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)] flex flex-col bg-[#0a0a0a] border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-neutral-900 border-white/10">
<svg className="lucide lucide-message-square w-6 h-6 text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-2 tracking-tight text-white">TrackMatic</h3>
<p className="text-sm font-medium mb-4 text-emerald-400">Omni-Channel Support Desk</p>
<p className="text-lg mb-8 flex-grow text-stone-400">Clean workflows for teams buried in messages.</p>
<ul className="space-y-3 mb-8 text-stone-400">
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Shared ticketing board
                        </li>
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Instant consultant assignment
                        </li>
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Manager dashboards
                        </li>
</ul>
<a className="inline-flex items-center font-medium hover:gap-2 transition-all text-white group-hover:text-emerald-400" href="#">
                        See support solutions <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative border rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.1)] flex flex-col bg-[#0a0a0a] border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center group-hover:scale-110 transition-transform bg-neutral-900 border-white/10">
<svg className="lucide lucide-activity w-6 h-6 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="bg-teal-500/10 border border-teal-500/20 text-xs font-medium px-2 py-1 rounded-md text-teal-300">Coming Soon</span>
</div>
<h3 className="text-2xl font-medium mb-2 tracking-tight text-white">PulsePlate</h3>
<p className="text-sm font-medium mb-4 text-teal-400">Customer Feedback &amp; Insights</p>
<p className="text-lg mb-8 flex-grow text-stone-400">Real-time visibility into sentiment—without standing on the floor.</p>
<ul className="space-y-3 mb-8 text-stone-400">
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Conversational feedback
                        </li>
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> LLM-driven analysis
                        </li>
<li className="flex gap-3 text-base">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Branch-level trends
                        </li>
</ul>
<a className="inline-flex items-center font-medium hover:gap-2 transition-all text-white group-hover:text-teal-400" href="#">
                        Join early access <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                        Your operations are happening in WhatsApp—but your systems aren’t built for it.
                    </h2>
<p className="text-lg leading-relaxed text-stone-400">
                        Hidden operational chaos creates real-world problems—lost revenue, lower service quality, and frustrated staff. Ordermatic brings discipline to the place where your operations actually happen.
                    </p>
</div>
<div className="md:col-span-7">
<div className="grid sm:grid-cols-2 gap-6">

<div className="p-6 rounded-xl border bg-[#0a0a0a] border-white/5 hover:border-red-500/20 transition-colors">
<div className="mb-3 text-red-400"><svg className="lucide lucide-x-circle w-6 h-6" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div>
<h4 className="font-medium mb-2 text-white">Lost Messages</h4>
<p className="text-stone-400">Critical info vanishes between shift changes and personal devices.</p>
</div>
<div className="p-6 rounded-xl border bg-[#0a0a0a] border-white/5 hover:border-red-500/20 transition-colors">
<div className="mb-3 text-red-400"><svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<h4 className="font-medium mb-2 text-white">Manual Routing</h4>
<p className="text-stone-400">Staff overwhelmed trying to act as human switchboards.</p>
</div>
<div className="p-6 rounded-xl border bg-[#0a0a0a] border-white/5 hover:border-red-500/20 transition-colors">
<div className="mb-3 text-red-400"><svg className="lucide lucide-eye-off w-6 h-6" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg></div>
<h4 className="font-medium mb-2 text-white">No Visibility</h4>
<p className="text-stone-400">Managers can't see volume, performance, or bottlenecks.</p>
</div>
<div className="p-6 rounded-xl border bg-[#0a0a0a] border-white/5 hover:border-red-500/20 transition-colors">
<div className="mb-3 text-red-400"><svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
<h4 className="font-medium mb-2 text-white">Slow Responses</h4>
<p className="text-stone-400">Customers wait too long, leading to lost sales and churn.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-[#0a0a0a] border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">
                    Trusted by operators who value <br/> speed, accuracy, and visibility.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border relative bg-neutral-900/30 border-white/5">
<svg className="lucide lucide-quote w-8 h-8 text-lime-500/20 absolute top-8 right-8" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-xl mb-8 leading-relaxed text-stone-300">
                        "TrackMatic replaced our entire manual WhatsApp process. Our consultants work faster, our managers see everything, and nothing slips through."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-emerald-600 text-white">TWF</div>
<div>
<div className="font-medium text-white">Travel With Flair</div>
<div className="text-sm text-stone-500">Operations Director</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border relative bg-neutral-900/30 border-white/5">
<svg className="lucide lucide-quote w-8 h-8 text-lime-500/20 absolute top-8 right-8" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-xl mb-8 leading-relaxed text-stone-300">
                        "We removed the chaos of phone-in orders. WhatsApp ordering has been a game changer—clean, fast, and simple for customers."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#bef264] rounded-full flex items-center justify-center font-bold text-sm text-black">UF</div>
<div className="">
<div className="font-medium text-white">Uncle Faouzi</div>
<div className="text-sm text-stone-500">Franchise Owner</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] pointer-events-none via-[#050505] to-[#050505] from-emerald-900/20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-white">
                We believe operations shouldn’t live in private chats.
            </h2>
<p className="text-xl mb-12 leading-relaxed text-stone-400">
                Ordermatic exists to bring clarity to the operational work that’s been happening in WhatsApp for years. We build systems that help your team move faster, reduce errors, and deliver a polished customer experience—without forcing anyone to change their behaviour.
            </p>
<div className="grid sm:grid-cols-3 gap-6 mb-16 text-left max-w-2xl mx-auto">
<div className="border-l-2 border-lime-500 pl-4">
<div className="font-medium text-lg text-white">Customers</div>
<div className="text-stone-500">Stay on WhatsApp</div>
</div>
<div className="border-l-2 border-lime-500 pl-4">
<div className="font-medium text-lg text-white">Your Team</div>
<div className="text-stone-500">Finally gets structure</div>
</div>
<div className="border-l-2 border-lime-500 pl-4">
<div className="font-medium text-lg text-white">Business</div>
<div className="text-stone-500">Gains real visibility</div>
</div>
</div>
<div className="flex flex-col items-center gap-6">
<button className="px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:bg-[#a3e635] bg-[#bef264] text-black shadow-lime-900/20">
                    Book a discovery call
                </button>
<p className="text-sm text-stone-500">No commitment. Just a conversation about your workflow.</p>
</div>
</div>
</section>

<footer className="border-t py-12 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-lime-500/10 p-1.5 rounded border border-lime-500/20">
<svg className="lucide lucide-layers w-5 h-5 text-lime-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-base font-medium tracking-tight text-white">Ordermatic</span>
</div>
<div className="text-sm text-stone-600">
                © 2024 Ordermatic Systems. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
