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



tailwind.config = {
theme: {
extend: {
colors: {
background: '#020617', // Dark Blue
primary: '#3b82f6', // Bright Blue
},
fontFamily: {
'primary': ['Inter', 'sans-serif'],
'mono': ['Space Mono', 'monospace']
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Three.js scene with shader
        const canvas = document.getElementById('shader-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const shaderMaterial = new THREE.ShaderMaterial({
            transparent: true,
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
                #define TUNNEL_LAYERS 60
                #define RING_POINTS 80
                #define POINT_SIZE 2.0
                // Updated colors for blue theme
                #define POINT_COLOR_A vec3(0.23, 0.51, 0.96) 
                #define POINT_COLOR_B vec3(0.1, 0.3, 0.6)
                #define SPEED 0.5

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
                    float blend = smoothstep(0.0, 1.5/iResolution.y, sd);
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
                    
                    // Dark Blue Background in Shader
                    vec3 color = vec3(0.008, 0.024, 0.09); 
                    
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
                            float shade = (1.0-pz) * 0.8;
                            color = MixShape(pdist, ptColor * shade + vec3(0.0,0.0,0.1), color);
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
        const speedMultiplier = 0.8; 

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

        // Word animation logic
        function animateWords() {
            const words = document.querySelectorAll('.word');
            words.forEach(word => {
                const delay = parseInt(word.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    word.style.animation = 'word-appear 1s ease-out forwards';
                }, delay);
            });
        }

        // Mouse interaction for words
        document.addEventListener('mousemove', (e) => {
            const words = document.querySelectorAll('.word');
            words.forEach(word => {
                const rect = word.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(e.clientX - (rect.left + rect.width/2), 2) + 
                    Math.pow(e.clientY - (rect.top + rect.height/2), 2)
                );
                
                if (distance < 120)
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
      
<canvas id="shader-canvas"></canvas>

<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="80" id="grid" patternunits="userSpaceOnUse" width="80">
<path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<line className="grid-line" style={{animationDelay: '1s'}} x1="0" x2="100%" y1="25%" y2="25%"></line>
<line className="grid-line" style={{animationDelay: '1.5s'}} x1="0" x2="100%" y1="75%" y2="75%"></line>
<line className="grid-line" style={{animationDelay: '2s'}} x1="25%" x2="25%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: '2.5s'}} x1="75%" x2="75%" y1="0" y2="100%"></line>

<circle className="corner-dot" cx="25%" cy="25%" r="2" style={{animationDelay: '3s'}}></circle>
<circle className="corner-dot" cx="75%" cy="25%" r="2" style={{animationDelay: '3.2s'}}></circle>
<circle className="corner-dot" cx="25%" cy="75%" r="2" style={{animationDelay: '3.4s'}}></circle>
<circle className="corner-dot" cx="75%" cy="75%" r="2" style={{animationDelay: '3.6s'}}></circle>
</svg>

<div className="content flex flex-col items-center min-h-[100dvh] p-6 md:p-8 lg:p-12 backdrop-overlay">

<div className="w-full flex justify-center pt-2 md:pt-8 mb-4 flex-shrink-0 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
<a className="block transition-transform hover:scale-105 duration-500" href="https://digitaldynamics.uk/">
<img alt="Digital Dynamics" className="h-20 md:h-28 lg:h-32 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-500" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/NEWDark-logo-3000px.svg"/>
</a>
</div>

<div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto">
<div className="text-center w-full">
<div className="mb-6 md:mb-8">
<h2 className="text-[10px] md:text-xs font-mono font-medium text-blue-500/70 uppercase tracking-[0.4em]">
<span className="word" data-delay="0">Journey</span>
<span className="word" data-delay="200">through</span>
<span className="word" data-delay="400">digital</span>
<span className="word" data-delay="600">infinity</span>
</h2>
</div>

<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-mono font-medium leading-none tracking-tighter text-[#6dd7fd] text-glow mb-2 md:mb-4">
<div className="mb-2 md:mb-4">
<span className="word" data-delay="800">Enter</span>
<span className="word" data-delay="950">Client</span>
<span className="word" data-delay="1100">Portal</span>
</div>
<div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary font-extralight text-blue-300/80 leading-relaxed tracking-normal mt-4 md:mt-6">
<span className="word" data-delay="1400">Where</span>
<span className="word" data-delay="1550">consciousness</span>
<span className="word" data-delay="1700">meets</span>
<span className="word" data-delay="1850">technology</span>
</div>
</h1>
</div>

<div className="w-full max-w-5xl mx-auto mt-[80px] opacity-0" style={{animation: 'word-appear 1s ease-out forwards', animationDelay: '2.5s'}}>
<div className="flex flex-col md:flex-row gap-5 md:gap-8 justify-center items-center w-full">

<a className="btn-custom group relative w-full md:w-auto min-w-[320px] md:min-w-[380px] px-8 py-5 md:px-10 md:py-6 border border-white/40 hover:border-white rounded-lg text-white font-mono text-sm md:text-base tracking-widest uppercase flex items-center justify-between overflow-hidden cursor-pointer no-underline" href="https://studio.digitaldynamics.uk/">
<span className="relative z-10 flex items-center gap-4 font-semibold">
<span className="iconify w-5 h-5 md:w-6 md:h-6" data-icon="lucide:monitor-play"></span>
                            CLIENT STUDIO LOGIN
                        </span>
<span className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<span className="iconify w-5 h-5 md:w-6 md:h-6" data-icon="lucide:arrow-right"></span>
</span>
</a>

<a className="btn-custom group relative w-full md:w-auto min-w-[320px] md:min-w-[380px] px-8 py-5 md:px-10 md:py-6 border border-white/40 hover:border-white rounded-lg text-white font-mono text-sm md:text-base tracking-widest uppercase flex items-center justify-between overflow-hidden cursor-pointer no-underline" href="https://analytics.digitaldynamics.uk/">
<span className="relative z-10 flex items-center gap-4 font-semibold">
<span className="iconify w-5 h-5 md:w-6 md:h-6" data-icon="lucide:flask-conical"></span>
                            ANALYTICS LAB LOGIN
                        </span>
<span className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
<span className="iconify w-5 h-5 md:w-6 md:h-6" data-icon="lucide:arrow-right"></span>
</span>
</a>
</div>
<div className="mt-10 md:mt-12 flex justify-center space-x-2">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse"></div>
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
</div>

    </>
  );
}
