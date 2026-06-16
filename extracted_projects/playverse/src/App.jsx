import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !(function() {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
                i.onload = function() {
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", function() {
                            UnicornStudio.init();
                            window.UnicornStudio.isInitialized = true;
                        });
                    } else {
                        UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                    }
                };
                (document.head || document.body).appendChild(i);
            } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
            }
        })();
    


        (function initVirtualWorkspace() {
            // WebGL Canvas logic
            const canvas = document.getElementById('glcanvas-workspace');
            if (canvas) {
                const gl = canvas.getContext('webgl');
                if (gl) {
                    const resize = () => {
                        const parent = canvas.parentElement;
                        canvas.width = parent.clientWidth;
                        canvas.height = parent.clientHeight;
                        gl.viewport(0, 0, canvas.width, canvas.height);
                    };
                    window.addEventListener('resize', resize);
                    resize();

                    const vsSource = `
                        attribute vec2 position;
                        void main() {
                            gl_Position = vec4(position, 0.0, 1.0);
                        }
                    `;

                    const fsSource = `
                        precision mediump float;
                        uniform vec2 u_resolution;
                        uniform float u_time;

                        float aura(vec2 uv, vec2 pos, float size, float pulsePhase) {
                            float d = length(uv - pos);
                            float glow = exp(-d * (5.0 / size));
                            float rings = sin(d * 40.0 - u_time * 0.5) * 0.5 + 0.5;
                            glow *= mix(0.8, 1.0, rings * 0.2);
                            float pulse = sin(u_time * 0.8 + pulsePhase) * 0.1 + 0.9;
                            return glow * pulse;
                        }

                        void main() {
                            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                            float aspect = u_resolution.x / u_resolution.y;
                            uv.x *= aspect;

                            vec4 color = vec4(0.0);
                            vec3 auraColor = vec3(0.91, 0.30, 0.53); 

                            vec2 p1 = vec2(0.2 * aspect, 0.6);
                            vec2 p2 = vec2(0.25 * aspect, 0.4);
                            vec2 p3 = vec2(0.85 * aspect, 0.65);
                            vec2 p4 = vec2(0.8 * aspect, 0.3);

                            float intensity = 0.0;
                            intensity += aura(uv, p1, 0.3, 0.0);
                            intensity += aura(uv, p2, 0.25, 2.0);
                            intensity += aura(uv, p3, 0.35, 1.0);
                            intensity += aura(uv, p4, 0.2, 3.0);

                            float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
                            intensity -= dither * 0.03;

                            color = vec4(auraColor, intensity * 0.35);
                            gl_FragColor = color;
                        }
                    `;

                    const compileShader = (type, source) => {
                        const shader = gl.createShader(type);
                        gl.shaderSource(shader, source);
                        gl.compileShader(shader);
                        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
                        return shader;
                    };

                    const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
                    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

                    if (vertexShader && fragmentShader) {
                        const program = gl.createProgram();
                        gl.attachShader(program, vertexShader);
                        gl.attachShader(program, fragmentShader);
                        gl.linkProgram(program);
                        gl.useProgram(program);

                        const buffer = gl.createBuffer();
                        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                            -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                            -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
                        ]), gl.STATIC_DRAW);

                        const positionLocation = gl.getAttribLocation(program, "position");
                        gl.enableVertexAttribArray(positionLocation);
                        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                        const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
                        const timeLocation = gl.getUniformLocation(program, "u_time");

                        const render = (time) => {
                            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                            gl.uniform1f(timeLocation, time * 0.001);
                            
                            gl.enable(gl.BLEND);
                            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                            gl.clearColor(0.0, 0.0, 0.0, 0.0);
                            gl.clear(gl.COLOR_BUFFER_BIT);
                            
                            gl.drawArrays(gl.TRIANGLES, 0, 6);
                            requestAnimationFrame(render);
                        };
                        requestAnimationFrame(render);
                    }
                }
            }

            // GSAP Logic
            const initGsap = () => {
                if (typeof gsap === 'undefined') {
                    setTimeout(initGsap, 50);
                    return;
                }
                
                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                
                tl.to("#structural-grid-workspace", { opacity: 1, duration: 1 })
                  .to("#glcanvas-workspace", { opacity: 1, duration: 2 }, "-=0.5")
                  .fromTo("#hero-text-workspace .text-reveal", 
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
                    "-=1.5"
                  )
                  .fromTo("#main-card-workspace",
                    { scale: 0.95, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 1, ease.to("#arch-walls-workspace", { opacity: 1, duration: 1 }, "-=0.5")
                  .fromTo("#arch-walls-workspace div",
                    { scaleX: 0, transformOrigin: "left center" },
                    { scaleX: 1, duration: 1.5, stagger: 0.1, ease: "power2.inOut" },
                    "-=1"
                  )
                  .to("#room-labels-workspace .room-node", 
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" },
                    "-=0.8"
                  )
                  .fromTo("#bottom-content-workspace",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.4"
                  );
            };
            
            initGsap();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<title>Aura Background</title>

<div className="aura-background-component absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="SrJYfPcDUR4StI3maLL6"></div>
</div>
<div className="relative z-10 flex items-center justify-center h-full">
</div>

</div>
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 w-full px-6 py-5 flex items-center justify-between lg:px-10">
<div className="flex items-center gap-8">
<a aria-label="Playverse" className="text-[#0D0C22] flex items-center gap-2 font-brand font-semibold text-xl tracking-tight" href="#">
<iconify-icon className="text-2xl text-[#EA4C89]" icon="solar:gamepad-linear"></iconify-icon>
            Playverse
        </a>
<ul className="hidden lg:flex items-center gap-8 text-base font-medium">
<li className="relative group">
<a className="flex items-center gap-1 hover:text-gray-600 transition-colors py-2" href="#">Games
                    <iconify-icon className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
<div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg p-2 flex flex-col gap-1">
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Action</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">RPG</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Strategy</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Casual</a>
</div>
</div>
</li>
<li className="relative group">
<a className="flex items-center gap-1 hover:text-gray-600 transition-colors py-2" href="#">Tournaments
                    <iconify-icon className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
<div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg p-2 flex flex-col gap-1">
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Live Events</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Upcoming</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Past Results</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Past
                            My Brackets</a>
</div>
</div>
</li>
<li className="relative group">
<a className="flex items-center gap-1 hover:text-gray-600 transition-colors py-2" href="#">Leaderboards
                    <iconify-icon className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
<div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg p-2 flex flex-col gap-1">
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Global Rankings</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Regional</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Guild Leaderboards</a>
</div>
</div>
</li>
<li className="relative group">
<a className="flex items-center gap-1 hover:text-gray-600 transition-colors py-2" href="#">Community
                    <iconify-icon className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
<div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg p-2 flex flex-col gap-1">
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Forum
                            Rankings</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Events</a>
<a className="flex items-center px-3 py-2 text-sm font-medium text-[#0D0C22] rounded-lg hover:bg-gray-50 transition-colors" href="#">Creator program
                        </a>
</div>
</div>
</li>
</ul></div>
</nav>
<main className="flex-grow lg:px-10 flex flex-col w-full max-w-[1440px] mr-auto ml-auto pt-12 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 flex-grow lg:pb-0 max-w-7xl mt-20 mr-auto mb-20 ml-auto pb-0 relative">

<div className="lg:col-span-7 flex flex-col pt-4 relative justify-center">

<div className="inline-flex bg-white/80 w-max border-gray-100 border rounded-full mb-8 pt-1.5 pr-5 pb-1.5 pl-1.5 shadow-sm backdrop-blur-md items-center">
<div className="flex -space-x-2 mr-3">
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/578a5bc5-2c9f-4285-8ae6-0d7dafefba84_320w.webp"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a99aa12-9c50-44fe-bb7d-5dfef28b7d59_320w.webp"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e91b8c7-be64-41b5-8bd8-75efab28bdbe_320w.webp"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-[#0D0C22] text-white flex items-center justify-center text-[9px] font-semibold tracking-tighter">
                    2M+
                </div>
</div>
<span className="text-xs font-normal text-[#6E6D7A] tracking-wide">
<span className="text-[#0D0C22] font-medium">Active Players</span> online now
            </span>
</div>

<h1 className="leading-[0.95] lg:text-[5rem] text-5xl font-normal text-[#0D0C22] tracking-tight mb-8 font-brand">
            Discover Epic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4C89] to-purple-500 font-light">Mobile Games</span>
</h1>

<p className="text-base text-[#6E6D7A] font-normal max-w-md mb-10 leading-relaxed tracking-wide border-l-2 border-[#EA4C89] pl-6">
            Level up your mobile gaming experience. Join millions of players, compete in global tournaments, and unlock exclusive rewards.
        </p>

<div className="flex flex-col sm:flex-row gap-3 lg:mb-24 mb-24">
<button className="flex select-none transition-transform active:scale-[0.98] group cursor-pointer bg-[#ebeef3] w-max rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 relative shadow-[inset_4px_6px_12px_rgba(170px_rgba(255,255,255,1)] items-center">

<div className="flex overflow-hidden w-full h-full rounded-full relative items-center">

<div className="bg-gradient-to-r from-[#EA4C89] to-purple-500 w-full h-full absolute top-0 right-0 bottom-0 left-0 shadow-[inset_2px_4px_8px_rgba(0,0,0,0.25),_inset_-2px_-4px_8px_rgba(255,255,255,0.4)]"></div>

<div className="opacity-[0.15] mix-blend-'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')"></div>

<div className="relative z-10 flex items-center py-3 pl-6 pr-[64px]">
<span className="text-sm font-medium tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
        Play Now Free
      </span>
</div>
</div>

<div className="absolute right-1.5 top-1.5 bottom-1.5 w-[44px] rounded-full bg-[#ffffff] shadow_0_6px_12px_rgba(170,180,195,0.4),_inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center transition-all duration-300 z-10 group-hover:w-[48px]">

<div className="w-[28px] h-[28px] rounded-full bg-[#f6f8fb] shadow-[inset_2px_2px_6px_rgba(170,180,195,0.5),_inset_-2px_-2px_6px_rgba(255,255,255,1)] flex items-center justify-center text-red-600">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-big-right" fill="none" height="16" stroke="#EA4C89" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(13, 12, 34)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 9h6V5l7 7-7 7v-4H6V9z"></path></svg>
</div>
</div>
</button>
<button className="hover:bg-gray-50 transition-all flex text-sm font-normal text-[#0D0C22] bg-white border-gray-200 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm gap-x-3 gap-y-3 items-center">
<span className="text-sm font-normal tracking-tight">
                    Watch Trailer
                </span>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="#EA4C89" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(13, 12, 34)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><polygon className="" points="10 8 16 12 10 16 10 8"></polygon></svg>
</button>
</div>

<div className="flex flex-wrap gap-2 md:gap-6 mt-auto gap-x-2 gap-y-2 items-center">

<div className="flex items-center group cursor-default">
<div className="px-1 text-center">
<p className="text-[10px] font-medium text-[#9E9EA7] uppercase tracking-widest mb-1 group-hover:text-[#EA4C89] transition-colors">
                        Platform</p>
<p className="text-sm text-[#0D0C22] font-normal">Mobile / PC</p>
</div>
<div className="curve-separator opacity-60 ml-4 md:ml-8 border-r border-gray-200 h-8"></div>
</div>

<div className="flex items-center group cursor-default">
<div className="px-1 text-center">
<p className="text-[10px] font-medium text-[#9E9EA7] uppercase tracking-widest mb-1 group-hover:text-[#EA4C89] transition-colors">
                        Genre</p>
<p className="text-sm text-[#0D0C22] font-normal">Action RPG</p>
</div>
<div className="curve-separator md:ml-8 opacity-60 ml-4 border-r border-gray-200 h-8"></div>
</div>

<div className="flex items-center group cursor-default">
<div className="px-1 text-center">
<p className="text-[10px] font-medium text-[#9E9EA7] uppercase tracking-widest mb-1 group-hover:text-[#EA4C89] transition-colors">
                        Rating</p>
<p className="text-sm text-[#0D0C22] font-normal">4.9/5</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative group perspective-1000">
<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10 transition-all duration-700 ease-out border border-white/20">

<video autoplay="" className="transition-transform duration-[2s] ease-in-out group-hover:scale-110 filter saturate-[0.8] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/63d2897a-cddd-44f7-9b2c-8eb3c3bcd185/1.mp4"></video>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-zinc-900/10"></div>

<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">

<div className="flex items-start justify-between">
<div className="flex gap-2 bg-gradient-to-b from-[#EA4C89]/80 to-[#EA4C89]/40 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center backdrop-blur-md border border-white/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="text-[10px] uppercase font-medium text-white tracking-wide">Live Tournament</span>
</div>
<div className="flex hover:bg-white/20 transition-colors cursor-pointer text-white bg-white/10 backdrop-blur w-10 h-10 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-bell" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</div>
</div>

<div className="self-end transform group-hover:translate-y-0 transition-transform duration-700 ease-out bg-black/40 border border-white/10 w-full max-w-[240px] rounded-xl mt-60 pt-4 pr-4 pb-4 pl-4 backdrop-blur-md translate-y-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px] font-semibold">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<span className="text-xs text-white font-normal">Player Rank</span>
</div>
<span className="text-[10px] text-emerald-400 font-mono">+24 SR</span>
</div>
<div className="h-12 w-full mb-2 flex items-end gap-1">
<div className="w-1/5 bg-white/20 rounded-t-sm h-[40%]"></div>
<div className="w-1/5 bg-white/20 rounded-t-sm h-[70%]"></div>
<div className="w-1/5 bg-white/20 rounded-t-sm h-[50%]"></div>
<div className="w-1/5 bg-white/30 rounded-t-sm h-[85%]"></div>
<div className="w-1/5 bg-purple-500 rounded-t-sm h-[95%] shadow-[0_0_10px_rgba(168,85,247,0.5)]">
</div>
</div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[9px] text-white/60 uppercase">Current Tier</span>
<span className="text-sm text-white font-mono font-normal">Diamond II</span>
</div>
</div>
</div>

<div className="overflow-hidden w-full h-[100px] border-white/10 rounded-xl border-t mt-auto pt-4 relative">
<div className="carousel-track flex flex-col h-[300px]">

<div className="flex flex-col h-[100px] justify-start">
<div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-[#EA4C89]/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b1ee7e8-7554-433d-a435-029da35fee50_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-xs font-medium tracking-wide">Alex Walker</span>
<span className="text-white/50 text-[9px] uppercase tracking-wider">Pro Gamer</span>
</div>
</div>
<p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                                "The competitive scene here is unmatched. Flawless performance and epic graphics."
                            </p>
</div>

<div className="h-[100px] flex flex-col justify-start">
<div className="flex items-center gap-3 mb-2">
<img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-purple-500/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3f17582-5cb8-4efd-895a-b59c93e3ac02_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-xs font-medium tracking-wide">Sam Chen</span>
<span className="text-white/50 text-[9px] uppercase tracking-wider">Streamer</span>
</div>
</div>
<p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                                "My community loves watching these matches. The cross-platform play is perfectly implemented."
                            </p>
</div>

<div className="h-[100px] flex flex-col justify-start">
<div className="flex items-center gap-3 mb-2">
<img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08cf0e21-ab10-49b1-b896-e0bfbcc58fdc_320w.webp"/>
<div className="flex flex-col">
<span className="text-white text-xs font-medium tracking-wide">Jordan Lee</span>
<span className="text-white/50 text-[9px] uppercase tracking-wider">Casual Player</span>
</div>
</div>
<p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                                "Easy to pick up but impossible to master. The daily quests keep me coming back."
                            </p>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-zinc-900/0 to-transparent pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-zinc-900/50 to-transparent pointer-events-none">
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 md:justify-start bg-gradient-to-r from-[#F9F7FE] to-[#FCF4F8] w-full border-[#F3EAF8] border rounded-[24px] mb-16 pt-6 pr-6 pb-6 pl-6 shadow-sm items-center justify-center">
<div className="relative">
<button className="bg-white border border-gray-200 shadow-sm text-[#0D0C22] text-base font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
<iconify-icon className="w-4 h-4 text-purple-500" icon="solar:stars-linear"></iconify-icon> Download App Store
                </button>
<span className="-top-3 -right-2 transform text-xs font-medium text-white bg-[#EA4C89] rounded-md pt-0.5 pr-2 pb-0.5 pl-2 absolute shadow-sm rotate-[10deg]">FREE</span>
</div>
<p className="text-base font-medium text-[#0D0C22]">Connect with millions of players and start your next great adventure today.</p>
</div>
<div className="flex overflow-hidden mb-8 relative items-center justify-between">
<div className="flex items-center gap-2 w-full overflow-x-auto no-scrollbar pb-2 pr-24">
<button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-base font-medium text-[#0D0C22] hover:bg-gray-50 whitespace-nowrap bg-white shadow-sm shrink-0">
                    Trending <iconify-icon className="w-4 h-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="flex items-center gap-6 px-4 text-base font-medium text-[#6E6D7A] shrink-0">
<a className="text-[#0D0C22] font-medium bg-gray-100 px-4 py-2 rounded-full transition-colors whitespace-nowrap" href="#">Discover</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Action</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Adventure</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">RPG</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Strategy</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Puzzle</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Racing</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Sports</a>
<a className="hover:text-[#0D0C22] transition-colors whitespace-nowrap" href="#">Simulation</a>
</div>
</div>
<div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white via-white to-transparent w-16 pointer-events-none z-10 flex justify-end items-center pr-0">
</div>
<button className="hidden md:flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-base font-medium text-[#0D0C22] hover:bg-gray-50 bg-white ml-4 shadow-sm shrink-0 relative z-20">
<iconify-icon className="w-4 h-4" icon="solar:tuning-linear"></iconify-icon> Filters
            </button>
</div>
<div className="bg-[#0D0C22] text-white rounded-[20px] p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden shadow-md">
<p className="text-base font-normal flex items-center flex-wrap gap-2 z-10">
                Season 5 is here! 🚀 Jump into the new battle pass with exclusive character skins and maps. 🙌 🥳
            </p>
<button className="bg-white text-[#0D0C22] text-base font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap z-10 shrink-0">
                Read Patch Notes
            </button>
<button className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-1 bg-white/10 rounded-full transition-colors">
<iconify-icon className="w-4 h-4" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#1A1A1A] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/f86c380a-7318-4886-acf4-c3dcc01b25a8/800w.png)] bg-cover bg-center border-gray-100 border rounded-lg relative shadow-sm">
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden shrink-0">
<img alt="Avatar" className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/1814344/avatars/small/cad0954db7440914bbf5f3ed816c9979.jpg"/>
</div>
<span className="text-base font-medium text-[#0D0C22] truncate">Epic Games</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 4.2k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 84k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer flex group-hover:shadow-md transition-shadow bg-[#E8E8E8] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/2b623a27-8904-4eca-b6b7-8dd1c4893b1a/800w.png)] bg-cover bg-center border-gray-100 border rounded-lg relative shadow-sm items-center justify-center">
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full bg-[#0D0C22] shrink-0 flex items-center justify-center text-white text-xs font-medium">H</div>
<span className="text-base font-medium text-[#0D0C22] truncate">HoyoVerse</span>
<span className="bg-[#0D0C22] text-white text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV+</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 9.1k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 125k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/94c009fe-4c2a-4a4c-b752-bb64ef7b4abc/800w.png)] bg-cover bg-center border-gray-200 border rounded-lg relative shadow-sm">
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden shrink-0">
<img alt="Avatar" className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/8211364/avatars/small/b3d26d9b80b1ee95dff5715c384dc184.jpg"/>
</div>
<span className="text-base font-medium text-[#0D0C22] truncate">Supercell</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">VIP</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 2.3k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 45k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer flex group-hover:shadow-md transition-shadow bg-[#F26430] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/473fd1bc-d4eb-408e-a2cd-f9de758bf921/800w.png)] bg-cover bg-center border-gray-100 border rounded-lg relative shadow-sm items-center justify-center">
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-800 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6a94ad2-ae3a-40aa-a40e-42906b54110e_320w.webp)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Riot Mobile</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 5.8k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 112k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3 col-span-1 lg:col-span-2 relative">
<div className="absolute top-3 right-3 z-10 bg-white/10 backdrop-blur-sm p-1.5 rounded-md hover:bg-white/20 transition-colors cursor-pointer border border-white/20">
<iconify-icon className="w-4 h-4 text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="aspect-[8/3] sm:aspect-[8/3] lg:aspect-[8/3] overflow-hidden cursor-pointer flex flex-col text-center bg-[#050505] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a87629f-43b4-4943-9d79-a6f1135fec76_1600w.webp)] bg-cover bg-center border-gray-800 border rounded-lg pt-8 pr-8 pb-8 pl-8 relative shadow-md items-center justify-center">
<div className="absolute top-4 left-0 w-full flex justify-center">
<span className="text-white font-medium text-sm flex items-center gap-2 tracking-wide"><iconify-icon className="w-4 h-4" icon="solar:gamepad-linear"></iconify-icon> BattlePass</span>
</div>
<h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1] mt-4">
                        Unlock<br/>Premium_
                    </h2>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-black border border-gray-700 flex items-center justify-center text-white p-0.5">
<iconify-icon className="w-3 h-3 text-yellow-400" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-[#0D0C22]">BattlePass Season 5</span>
</div>
<div className="text-sm font-normal text-[#9E9EA7]">
                        Hide ads • Upgrade
                    </div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer flex flex-col group-hover:shadow-md transition-shadow bg-[#F8F1F5] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbcfa978-4323-4f51-b973-aa888304c7f7_800w.jpg)] bg-cover bg-center border-gray-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative shadow-sm">
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full bg-purple-600 shrink-0 flex items-center justify-center text-white text-xs font-medium">T</div>
<span className="text-base font-medium text-[#0D0C22] truncate">Tencent Games</span>
<span className="bg-[#0D0C22] text-white text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV+</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 8.4k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 92k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#E2E8F0] cursor-pointer border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
<img alt="Game App" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/396dfe8b-e050-42b1-80f8-4b7c8e34ac2a/800w.png"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full shrink-0 overflow-hidden bg-gray-100 border border-gray-200">
<img alt="Avatar" className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/25402177/avatars/small/5f1142504f906ca90a9e6112a670329b.png"/>
</div>
<span className="text-base font-medium text-[#0D0C22] truncate">Kuro Studio</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">VIP</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 6.1k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 74k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer flex group-hover:shadow-md transition-shadow bg-[#0A1A2F] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/9cb3ea17-3557-498b-973e-fd5f0d62ad2b/800w.png)] bg-cover bg-center border-gray-800 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative shadow-sm items-center justify-center">
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur border border-white/10 text-white p-1.5 rounded-full flex items-center">
<iconify-icon className="w-3.5 h-3.5" icon="solar:videocamera-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-blue-800 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ed7743e-8963-4611-8625-6efaea356820_320w.jpg)] bg-cover bg-center border-blue-600 border rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Sci-Fi Dynamics</span>
<span className="bg-[#0D0C22] text-white text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV+</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 12k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 210k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer grid grid-cols-2 group-hover:shadow-md transition-shadow bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/0a48e956-864f-4dff-aca9-a13ffc13bfdc/800w.png)] bg-cover border-gray-200 border rounded-lg pt-1 pr-1 pb-1 pl-1 relative shadow-sm gap-x-1 gap-y-1">
</div>
<div className="flex gap-x-1 gap-y-1 items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full bg-red-600 shrink-0 text-white flex items-center justify-center text-xs font-medium">R</div>
<span className="text-base font-medium text-[#0D0C22] truncate">Esports Tracker</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">VIP</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 3.1k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 38k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#D8D8D8] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/47879ed2-c82a-43b3-8063-89d824dc66b3/800w.jpg)] bg-cover bg-center border-gray-100 border rounded-lg relative shadow-sm">
<div className="absolute top-2 right-2 bg-black/40 backdrop-blur text-white p-1.5 rounded-full"><iconify-icon className="w-3.5 h-3.5" icon="solar:videocamera-linear"></iconify-icon></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-400 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Square Enix</span>
<span className="bg-[#0D0C22] text-white text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV+</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 7.5k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 98k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/09a29cb5-62b7-49d0-9f7a-10e621db8325/800w.png)] bg-cover bg-center border-gray-800 border rounded-lg relative shadow-sm">
<div className="absolute top-3 right-3 z-10 bg-white/10 p-1.5 rounded-md border border-white/20"><iconify-icon className="w-4 h-4 text-white" icon="solar:arrow-right-up-linear"></iconify-icon></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-black border border-gray-700 flex items-center justify-center text-white p-0.5"><iconify-icon className="text-yellow-400 w-3 h-3" height="12" icon="solar:star-linear" style={{color: 'rgb(250, 204, 21)'}} width="12"></iconify-icon></div>
<span className="text-base font-medium text-[#0D0C22]">Pro Subscription</span>
</div>
<div className="text-sm font-normal text-[#9E9EA7]">Ad • Sponsor</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#E2E8F0] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b577a236-d30e-4bad-a61c-5485f70d22a4_800w.jpg)] bg-cover bg-center border-gray-100 border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-400 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b5d747ab-b9b0-4379-9347-fd0661e8f119/320w.png)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Bandai Namco</span>
<span className="bg-[#0D0C22] text-white text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV+</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 4.9k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 52k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/659ac283-5c4f-47a8-9de0-df7df815348c_800w.webp)] bg-cover bg-center border-gray-800 border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-800 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d9661d9-4f12-402b-80b7-6641508218f9_320w.jpg)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Nexon Mobile</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">VIP</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 6.2k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 81k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#EAEAEA] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87c0ba38-ba3a-474c-b4a0-807bd05f2570_800w.webp)] bg-cover bg-center border-gray-200 border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-400 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8dcc2a-cfdf-4807-888e-d6488bf7387d_320w.webp)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Indie Forge</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">VIP</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 1.5k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 18k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#FFC72C] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d94da3a-e472-42fe-bd20-e5104bf450e2_800w.webp)] bg-cover bg-center border-yellow-300 border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-yellow-600 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/cc3d2108-b362-49c8-be76-9151dbe6bb4f/320w.png)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">Chocobo Studios</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">VIP</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 8.8k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 104k</span>
</div>
</div>
</div>
<div className="group flex flex-col gap-3 gap-x-3 gap-y-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#F6F6F6] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe67a71f-1c61-4c27-9457-cf72301e63e8_800w.webp)] bg-cover bg-center border-[#EBEBEB] border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-300 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dd5462d-f090-44eb-9c08-2056c6d4df7f_320w.webp)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">KRAFTON</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 11k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 215k</span>
</div>
</div>
</div><div className="group flex flex-col gap-3 gap-x-3 gap-y-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#F6F6F6] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abb44fac-0462-426c-8354-c026f8c6b0b3_800w.webp)] bg-cover bg-center border-[#EBEBEB] border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-300 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03517ac1-a924-43ae-88b0-64089e9abe04_320w.webp)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">KRAFTON</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 11k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 215k</span>
</div>
</div>
</div><div className="group flex flex-col gap-3 gap-x-3 gap-y-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#F6F6F6] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/481cd15c-a70e-4882-b96c-fc4fe151e88c_800w.webp)] bg-cover bg-center border-[#EBEBEB] border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-300 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4340f08-d355-4926-afca-701af404821c_320w.webp)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">KRAFTON</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 11k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 215k</span>
</div>
</div>
</div><div className="group flex flex-col gap-3 gap-x-3 gap-y-3">
<div className="aspect-[4/3] overflow-hidden cursor-pointer group-hover:shadow-md transition-shadow bg-[#F6F6F6] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/3ca2b08f-6f38-4cc9-8287-399697e1438d/800w.png)] bg-cover bg-center border-[#EBEBEB] border rounded-lg relative shadow-sm"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="shrink-0 bg-gray-300 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a04490f-27f4-44a6-b75a-f64e08d7caf2_320w.jpg)] bg-cover bg-center rounded-full"></div>
<span className="text-base font-medium text-[#0D0C22] truncate">KRAFTON</span>
<span className="bg-[#E7E7E9] text-[#6E6D7A] text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md shrink-0">DEV</span>
</div>
<div className="flex items-center gap-3 text-base font-normal text-[#9E9EA7] shrink-0">
<span className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:heart-linear"></iconify-icon> 11k</span>
<span className="flex items-center gap-1"><iconify-icon className="w-3.5 h-3.5" icon="solar:eye-linear"></iconify-icon> 215k</span>
</div>
</div>
</div>
</div>
<div className="mt-16 mb-24 flex justify-center">
<button className="bg-[#0D0C22] text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm">
                Load More Games
            </button>
</div><section className="min-h-[900px] flex flex-col overflow-hidden z-10 bg-[#FAFBFC] w-full border-gray-100 border rounded-[2.5rem] mt-8 mb-16 pt-24 pb-32 relative shadow-sm items-center justify-start" id="virtual-workspace-section">

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-0 rounded-[2.5rem]" height="1220" id="glcanvas-workspace" width="1358"></canvas>

<div className="absolute inset-0 z-0 pointer-events-none flex justify-center opacity-0" id="structural-grid-workspace">
<div className="w-full max-w-[90rem] h-full border-x border-gray-200/40 relative flex justify-between">
<div className="w-[1px] h-full bg-gray-200/30"></div>
<div className="w-[1px] h-full bg-gray-200/30"></div>
<div className="w-[1px] h-full bg-gray-200/30"></div>
<div className="w-[1px] h-full bg-gray-200/30"></div>
<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-300"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-300"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-300"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-300"></div>
</div>
</div>

<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-0" id="arch-walls-workspace">
<div className="w-full max-w-[90rem] h-full relative">
<div className="absolute top-[35%] left-[5%] w-[15%] h-[6px] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[35%] left-[20%] w-[6px] h-[15%] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[50%] left-0 w-[20%] h-[6px] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[75%] left-[10%] w-[25%] h-[6px] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[70%] left-[10%] w-[6px] h-[5%] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[25%] right-[5%] w-[20%] h-[6px] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[25%] right-[25%] w-[6px] h-[20%] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[55%] right-0 w-[15%] h-[6px] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[85%] right-[5%] w-[15%] h-[6px] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
<div className="absolute top-[75%] right-[20%] w-[6px] h-[10%] bg-white rounded-full" style={{boxShadow: '2px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,1), inset 0px 2px 2px rgba(255,255,255,1), inset 0px -1px 2px rgba(0,0,0,0.03)'}}></div>
</div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center max-w-[90rem] mx-auto w-full" id="room-labels-workspace">
<div className="absolute top-[40%] left-[12%] flex flex-col items-center opacity-0 translate-y-4 room-node">
<div className="text-[#EA4C89]/80 text-xs mb-1 font-medium tracking-wide flex gap-1 justify-center">
<span className="w-1 h-1 rounded-full bg-[#EA4C89]/60"></span>
<span className="w-1 h-1 rounded-full bg-[#EA4C89]/80"></span>
<span className="w-1 h-1 rounded-full bg-[#EA4C89]"></span>
</div>
<div className="text-white drop-shadow-md font-medium text-lg tracking-tight mb-2">Guild Hall</div>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg"/>
</div>
</div>
<div className="absolute top-[60%] left-[16%] flex flex-col items-center opacity-0 translate-y-4 room-node">
<div className="text-[#111827]/40 text-xs mb-0.5 tracking-wide font-medium">Starts at 20:00 EST</div>
<div className="text-[#111827] drop-shadow-sm font-semibold text-lg tracking-tight mb-2">Raid Night</div>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg"/>
</div>
</div>
<div className="absolute top-[32%] right-[10%] flex flex-col items-center opacity-0 translate-y-4 room-node">
<div className="text-[#111827] drop-shadow-sm font-semibold text-lg tracking-tight mb-2">Casual Lobby</div>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg"/>
</div>
</div>
<div className="absolute top-[68%] right-[12%] flex flex-col items-center opacity-0 translate-y-4 room-node">
<div className="text-[#6B7280]/80 text-lg tracking-tight mb-2 font-medium">Ranked Match</div>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg"/>
</div>
</div>
</div>

<div className="text-center z-20 px-6 max-w-2xl mx-auto mb-16" id="hero-text-workspace">
<h2 className="text-5xl md:text-[4rem] font-semibold tracking-tight text-[#111827] leading-[1.05] mb-6 text-reveal font-brand">
            Squad up.<br/>Dominate the arena.
        </h2>
<p className="text-base text-[#6B7280] leading-relaxed text-reveal max-w-lg mx-auto">
            Create customized game lobbies for your guild or tournaments with crystal-clear voice and video chat.
        </p>
</div>

<div className="relative w-full max-w-5xl px-4 md:px-12 z-30 perspective-1000" id="main-card-workspace">
<div className="w-full aspect-[16/9] md:aspect-[21/10] bg-[#FFFFFF] rounded-[2rem] p-3 relative" style={{boxShadow: '0 30px 60px -15px rgba(234,76,137,0.15), 0 0 0 1px rgba(255,255,255,0.8), inset 0 2px 10px rgba(255,255,255,1), inset 0 -4px 10px rgba(0,0,0,0.02)'}}>
<div className="overflow-hidden bg-black/5 w-full h-full rounded-[1.5rem] relative" style={{boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px inset'}}>
<video autoplay="" className="object-[center_30%] w-full h-full object-cover scale-105" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/d0d0021a-fa38-46d2-8128-460e22929764/1.mp4"></video>
<div className="pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
<div className="text-xl font-medium tracking-tight">Championship Finals</div>
<div className="text-sm opacity-90 flex items-center gap-2 mt-1">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 
                        4 players
                    </div>
</div>
<div className="absolute right-4 top-4 bottom-4 w-1/4 max-w-[200px] flex flex-col gap-3">
<div className="relative flex-1 rounded-xl overflow-hidden bg-gray-900 border border-white/20" style={{boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<img alt="Craig" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-xs text-white bg-black/40 px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Craig "Clutch" Press
                        </div>
<div className="absolute top-2 right-2 bg-[#EA4C89] text-white rounded-full p-1.5 shadow-md">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
</div>
<div className="relative flex-1 rounded-xl overflow-hidden bg-gray-900 border border-white/20" style={{boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<img alt="Makenna" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-xs text-white bg-black/40 px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Makenna "Snipe" Bergson
                        </div>
<div className="absolute top-2 right-2 bg-gray-800/60 text-white/60 rounded-full p-1.5 backdrop-blur-md">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="2" x2="22" y1="2" y2="22"></line><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"></path><path d="M5 10v2a7 7 0 0 0 12 5"></path><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
</div>
<div className="relative flex-1 rounded-xl overflow-hidden bg-gray-900 border border-white/20" style={{boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<img alt="Allison" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-xs text-white bg-black/40 px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Allison "Healz" Septimus
                        </div>
<div className="absolute top-2 right-2 bg-[#EA4C89] text-white rounded-full p-1.5 shadow-md">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-gray-900/40 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10" style={{boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<button className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/5">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
</button>
<button className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/5">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</button>
<button className="w-12 h-12 mx-1 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center hover:bg-red-500 transition-colors border border-red-400" style={{boxShadow: '0 4px 15px rgba(255,77,77,0.4), inset 0 2px 4px rgba(255,255,255,0.3)'}}>
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="22" x2="2" y1="2" y2="22"></line></svg>
</button>
<button className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/5">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</button>
<button className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/5">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center z-20 px-6 max-w-3xl mx-auto" id="bottom-content-workspace">
<p className="text-xl md:text-2xl text-[#111827]/80 leading-relaxed font-medium tracking-tight mb-12">
            Coordinating with your squad is seamless in your dedicated voice channels. Enjoy high-fidelity communication without leaving the game.
        </p>
<div className="flex items-center justify-center gap-16 md:gap-24 text-[#EA4C89]">
<div className="w-14 h-14 rounded-2xl bg-[#FAFBFC] flex items-center justify-center relative text-[#EA4C89]" style={{boxShadow: '4px 6px 12px rgba(234,76,137,0.12), -4px -4px 10px rgba(255,255,255,1), inset 1px 1px 0px rgba(255,255,255,1)'}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="w-14 h-14 rounded-2xl bg-[#FAFBFC] flex items-center justify-center relative text-[#EA4C89]" style={{boxShadow: '4px 6px 12px rgba(234,76,137,0.12), -4px -4px 10px rgba(255,255,255,1), inset 1px 1px 0px rgba(255,255,255,1)'}}>
<svg fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="w-14 h-14 rounded-2xl bg-[#FAFBFC] flex items-center justify-center relative text-[#EA4C89]" style={{boxShadow: '4px 6px 12px rgba(234,76,137,0.12), -4px -4px 10px rgba(255,255,255,1), inset 1px 1px 0px rgba(255,255,255,1)'}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
</div>
</div>



</section>
</main>
<div className="w-full bg-white mt-auto pt-10 overflow-hidden border-t border-gray-100">
<div className="flex w-[150%] md:w-[120%] lg:w-[110%] xl:w-full ml-[-10%] md:ml-[-5%] xl:ml-0 gap-6 px-6 lg:px-10 pb-12">
<div className="flex-1 flex flex-col gap-3 group cursor-pointer">
<div className="aspect-[4/3] group-hover:opacity-100 transition-opacity bg-center bg-gray-200 opacity-80 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70a21679-127e-439b-bb12-b8ab56dd60a5_800w.webp)] bg-cover border-gray-200 border rounded-lg shadow-sm"></div>
<span className="text-base font-medium text-[#0D0C22] ml-2">RPG</span>
</div>
<div className="flex-1 flex flex-col gap-3 group cursor-pointer">
<div className="aspect-[4/3] group-hover:opacity-100 transition-opacity bg-gray-200 opacity-80 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26ce7a4a-91de-4567-9061-5a69aba290c0_800w.webp)] bg-cover bg-center border-gray-200 border rounded-lg shadow-sm"></div>
<span className="text-base font-medium text-[#0D0C22] ml-2">Action</span>
</div>
<div className="flex-1 flex flex-col gap-3 group cursor-pointer">
<div className="aspect-[4/3] group-hover:opacity-100 transition-opacity bg-gray-200 opacity-80 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ed9bad8-1f71-4d2f-b448-91ab54493cea_800w.webp)] bg-cover bg-center border-gray-200 border rounded-lg shadow-sm"></div>
<span className="text-base font-medium text-[#0D0C22] ml-2">Strategy</span>
</div>
<div className="flex-1 flex flex-col gap-3 group cursor-pointer">
<div className="aspect-[4/3] group-hover:opacity-100 transition-opacity bg-gray-200 opacity-80 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/166607fc-ca60-49cb-af5a-712ed23cc46c_800w.webp)] bg-cover bg-center border-gray-200 border rounded-lg shadow-sm"></div>
<span className="text-base font-medium text-[#0D0C22] ml-2">Casual</span>
</div>
<div className="flex-1 flex flex-col gap-3 group cursor-pointer">
<div className="aspect-[4/3] group-hover:opacity-100 transition-opacity bg-gray-200 opacity-80 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b577a236-d30e-4bad-a61c-5485f70d22a4_800w.jpg)] bg-cover bg-center border-gray-200 border rounded-lg shadow-sm"></div>
<span className="text-base font-medium text-[#0D0C22] ml-2">Simulation</span>
</div>
<div className="flex-1 flex flex-col gap-3 group cursor-pointer">
<div className="aspect-[4/3] group-hover:opacity-100 transition-opacity bg-gray-200 opacity-80 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bbe5cf4-acf8-430e-9b9b-2d44d8b90f0c_800w.webp)] bg-cover bg-center border-gray-200 border rounded-lg shadow-sm"></div>
<span className="text-base font-medium text-[#0D0C22] ml-2">Esports</span>
</div>
</div>
<footer className="w-full px-6 lg:px-10 pt-16 pb-8 border-t border-[#EBEBEB]">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
<div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full">
<a aria-label="Playverse" className="text-[#0D0C22] shrink-0 flex items-center gap-2 font-brand font-medium text-xl tracking-tight" href="#">
<iconify-icon className="text-2xl text-[#EA4C89]" icon="solar:gamepad-linear"></iconify-icon> Playverse
                    </a>
<ul className="flex flex-wrap justify-center md:justify-start gap-6 lg:gap-8 text-base font-medium text-[#0D0C22]">
<li className=""><a className="hover:text-gray-600 transition-colors" href="#">Games</a></li>
<li className=""><a className="hover:text-gray-600 transition-colors" href="#">Support</a></li>
<li className=""><a className="hover:text-gray-600 transition-colors" href="#">Parental Guide</a></li>
<li className=""><a className="hover:text-gray-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="flex items-center gap-4 shrink-0 text-[#0D0C22]">
<a className="hover:text-gray-600 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:hashtag-linear"></iconify-icon></a>
<a className="hover:text-gray-600 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:global-linear"></iconify-icon></a>
<a className="hover:text-gray-600 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-gray-600 transition-colors" href="#"><iconify-icon className="w-6 h-6" icon="solar:play-circle-linear"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-normal text-[#6E6D7A]">
<div className="flex items-center gap-4">
<span>© 2026 Playverse</span>
<a className="hover:text-[#0D0C22]" href="#">Terms</a>
<a className="hover:text-[#0D0C22]" href="#">Privacy</a>
<a className="hover:text-[#0D0C22]" href="#">Cookies</a>
</div>
<div className="flex items-center gap-4 flex-wrap justify-center">
<a className="hover:text-[#0D0C22]" href="#">Jobs</a>
<a className="hover:text-[#0D0C22]" href="#">Studios</a>
<a className="hover:text-[#0D0C22]" href="#">Publishers</a>
<a className="hover:text-[#0D0C22]" href="#">Tags</a>
<a className="hover:text-[#0D0C22]" href="#">Places</a>
<a className="hover:text-[#0D0C22]" href="#">Resources</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
