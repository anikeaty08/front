import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
'primary': ['Inter', 'sans-serif'],
'mono': ['Space Mono', 'monospace']
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Three.js scene with shader
        const canvas = document.getElementById('shader-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
            },
            vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float iTime;
                uniform vec3 iResolution;

                #define TAU 6.2831853071795865
                #define TUNNEL_LAYERS 96
                #define RING_POINTS 128
                #define POINT_SIZE 1.8
                #define POINT_COLOR_A vec3(1.0)
                #define POINT_COLOR_B vec3(0.7)
                #define SPEED 0.7

                float sq(float x) {
                    return x*x;   
                }

                vec2 AngRep(vec2 uv, float angle) {
                    vec2 polar = vec2(atan(uv.y, uv.x), length(uv));
                    polar.x = mod(polar.x + angle / 2.0, angle) - angle / 2.0; 
                    return polar.y * vec2(cos(polar.x), sin(polar.x));
                }

                float sdCircle(vec2 uv, float r) {
                    return length(uv) - r;
                }

                vec3 MixShape(float sd, vec3 fill, vec3 target) {
                    float blend = smoothstep(0.0, 1.0/iResolution.y, sd);
                    return mix(fill, target, blend);
                }

                vec2 TunnelPath(float x) {
                    vec2 offs = vec2(0, 0);
                    offs.x = 0.2 * sin(TAU * x * 0.5) + 0.4 * sin(TAU * x * 0.2 + 0.3);
                    offs.y = 0.3 * cos(TAU * x * 0.3) + 0.2 * cos(TAU * x * 0.1);
                    offs *= smoothstep(1.0, 4.0, x);
                    return offs;
                }

                void main() {
                    vec2 res = iResolution.xy / iResolution.y;
                    vec2 uv = gl_FragCoord.xy / iResolution.y;
                    uv -= res/2.0;
                    
                    vec3 color = vec3(0);
                    
                    float repAngle = TAU / float(RING_POINTS);
                    float pointSize = POINT_SIZE/2.0/iResolution.y;
                    
                    float camZ = iTime * SPEED;
                    vec2 camOffs = TunnelPath(camZ);
                    
                    for(int i = 1; i <= TUNNEL_LAYERS; i++) {
                        float pz = 1.0 - (float(i) / float(TUNNEL_LAYERS));
                        pz -= mod(camZ, 4.0 / float(TUNNEL_LAYERS));
                        
                        vec2 offs = TunnelPath(camZ + pz) - camOffs;
                        float ringRad = 0.15 * (1.0 / sq(pz * 0.8 + 0.4));
                        
                        if(abs(length(uv + offs) - ringRad) < pointSize * 1.5) {
                            vec2 aruv = AngRep(uv + offs, repAngle);
                            float pdist = sdCircle(aruv - vec2(ringRad, 0), pointSize);
                            vec3 ptColor = (mod(float(i / 2), 2.0) == 0.0) ? POINT_COLOR_A : POINT_COLOR_B;
                            float shade = (1.0-pz);
                            color = MixShape(pdist, ptColor * shade, color);
                        }
                    }
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(mesh);

        let lastTime = 0;
        const speedMultiplier = 0.3;

        function animate(time) {
            requestAnimationFrame(animate);
            time *= 0.001;
            const deltaTime = time - lastTime;
            lastTime = time;
            
            shaderMaterial.uniforms.iTime.value += deltaTime * speedMultiplier;
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            shaderMaterial.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1);
        });

        // Word animation
        function animateWords() {
            const words = document.querySelectorAll('.word');
            words.forEach(word => {
                const delay = parseInt(word.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    word.style.animation = 'word-appear 1s ease-out forwards';
                }, delay);
            });
        }

        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            const words = document.querySelectorAll('.word');
            words.forEach(word => {
                const rect = word.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(e.clientX - (rect.left + rect.width/2), 2) + 
                    Math.pow(e.clientY - (rect.top + rect.height/2), 2)
                );
                
                if (distance < 100) {
                    word.style.transform = 'translateY(-3px) scale(1.05)';
                    word.style.color = '#60a5fa';
                } else {
                    word.style.transform = 'translateY(0) scale(1)';
                    word.style.color = '';
                }
            });
        });

        window.addEventListener('load', () => {
            setTimeout(animateWords, 500);
        });

        animate(0);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="shader-canvas"></canvas>

<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="80" id="grid" patternunits="userSpaceOnUse" width="80">
<path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(96,165,250,0.05)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<line className="grid-line" style={{animationDelay: '1s'}} x1="0" x2="100%" y1="25%" y2="25%"></line>
<line className="grid-line" style={{animationDelay: '1.5s'}} x1="0" x2="100%" y1="75%" y2="75%"></line>
<line className="grid-line" style={{animationDelay: '2s'}} x1="25%" x2="25%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: '2.5s'}} x1="75%" x2="75%" y1="0" y2="100%"></line>

<circle className="corner-dot" cx="25%" cy="25%" r="3" style={{animationDelay: '3s'}}></circle>
<circle className="corner-dot" cx="75%" cy="25%" r="3" style={{animationDelay: '3.2s'}}></circle>
<circle className="corner-dot" cx="25%" cy="75%" r="3" style={{animationDelay: '3.4s'}}></circle>
<circle className="corner-dot" cx="75%" cy="75%" r="3" style={{animationDelay: '3.6s'}}></circle>
<circle className="corner-dot" cx="50%" cy="50%" r="2" style={{animationDelay: '4s'}}></circle>
</svg>

<div className="floating-particle" style={{top: '20%', left: '10%', animationDelay: '2s'}}></div>
<div className="floating-particle" style={{top: '60%', left: '85%', animationDelay: '3s'}}></div>
<div className="floating-particle" style={{top: '80%', left: '15%', animationDelay: '4s'}}></div>
<div className="floating-particle" style={{top: '30%', left: '90%', animationDelay: '5s'}}></div>
<div className="content flex flex-col items-center justify-center min-h-screen p-8 backdrop-overlay">

<div className="text-center mb-12">
<h2 className="text-xs md:text-sm font-mono font-light text-blue-300 uppercase tracking-[0.3em] opacity-80">
<span className="word" data-delay="0">Journey</span>
<span className="word" data-delay="200">through</span>
<span className="word" data-delay="400">digital</span>
<span className="word" data-delay="600">infinity</span>
</h2>
<div className="mt-4 w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
</div>

<div className="text-center max-w-4xl mx-auto mb-12">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight text-white text-glow mb-8">
<div className="mb-6">
<span className="word" data-delay="800">Enter</span>
<span className="word" data-delay="950">the</span>
<span className="word" data-delay="1100">portal</span>
</div>
<div className="text-2xl md:text-3xl lg:text-4xl font-thin text-blue-200 leading-relaxed">
<span className="word" data-delay="1400">Where</span>
<span className="word" data-delay="1550">consciousness</span>
<span className="word" data-delay="1700">meets</span>
<span className="word" data-delay="1850">technology</span>
<span className="word" data-delay="2000">and</span>
<span className="word" data-delay="2150">infinite</span>
<span className="word" data-delay="2300">possibilities</span>
<span className="word" data-delay="2450">unfold</span>
</div>
</h1>

<div className="relative inline-block mt-8 mb-8">
<div className="w-4 h-4 bg-blue-400 rounded-full opacity-0 animate-pulse" style={{animation: 'pulse-glow 3s ease-in-out infinite', animationDelay: '3s'}}></div>
<div className="absolute inset-0 w-4 h-4 border border-blue-300 rounded-full opacity-0" style={{animation: 'pulse-glow 3s ease-in-out infinite', animationDelay: '3.5s'}}></div>
</div>
</div>

<div className="text-center">
<div className="mb-4 w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
<h2 className="text-xs md:text-sm font-mono font-light text-blue-300 uppercase tracking-[0.3em] opacity-80">
<span className="word" data-delay="2800">Embrace</span>
<span className="word" data-delay="2950">the</span>
<span className="word" data-delay="3100">future</span>
<span className="word" data-delay="3250">within</span>
</h2>
<div className="mt-8 flex justify-center space-x-6 opacity-0" style={{animation: 'word-appear 1s ease-out forwards', animationDelay: '4s'}}>
<div className="w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
<div className="w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
</div>
</div>


    </>
  );
}
