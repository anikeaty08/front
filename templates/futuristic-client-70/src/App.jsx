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
fontFamily: {
'primary': ['Inter', 'sans-serif'],
'mono': ['Space Mono', 'monospace']
},
colors: {
brand: {
blue: '#60d5ff',
dark: '#050a14'
}
},
letterSpacing: {
'widest-xl': '0.3em',
}
}
}
}



        const canvas = document.getElementById('shader-canvas');
        
        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Updated Shader Logic from attached file
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
                #define TUNNEL_LAYERS 60
                #define RING_POINTS 80
                #define POINT_SIZE 2.0
                // Increased brightness for colors (higher RGB values)
                #define POINT_COLOR_A vec3(0.6, 0.9, 1.0) 
                #define POINT_COLOR_B vec3(0.4, 0.7, 1.0)
                #define SPEED 0.6

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
                    // Dramatic Curves Configuration
                    offs.x = 1.8 * sin(TAU * x * 0.1) + 0.9 * cos(TAU * x * 0.25);
                    offs.y = 1.4 * cos(TAU * x * 0.15) + 0.9 * sin(TAU * x * 0.08 + 1.0);
                    
                    offs *= smoothstep(1.0, 4.0, x);
                    return offs;
                }

                void main() {
                    vec2 res = iResolution.xy / iResolution.y;
                    vec2 uv = gl_FragCoord.xy / iResolution.y;
                    uv -= res/2.0;
                    
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
                            // Increased brightness multiplier from 0.8 to 1.3
                            float shade = (1.0-pz) * 1.3;
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

        // Interaction Logic
        function animateWords() {
            const words = document.querySelectorAll('.word');
            words.forEach(word => {
                const delay = parseInt(word.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    word.style.animation = 'word-appear 0.8s ease-out forwards';
                }, delay);
            });
        }

        window.addEventListener('load', () => {
            animateWords();
            lucide.createIcons();
            animate(0);
        });

        // Resize Handler
        function resize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            shaderMaterial.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1);
        }
        window.addEventListener('resize', resize);

        // Animation Loop
        let lastTime = 0;
        const speedMultiplier = 1.0; 

        function animate(time) {
            requestAnimationFrame(animate);
            time *= 0.001;
            const deltaTime = time - lastTime;
            lastTime = time;
            
            shaderMaterial.uniforms.iTime.value += deltaTime * speedMultiplier;
            renderer.render(scene, camera);
        }

        // Mouse interaction for words
        document.addEventListener('mousemove', (e) => {
            const words = document.querySelectorAll('.word');
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            words.forEach(word => {
                const rect = word.getBoundingClientRect();
                const wordX = rect.left + rect.width / 2;
                const wordY = rect.top + rect.height / 2;
                const distance = Math.sqrt(Math.pow(mouseX - wordX, 2) + Math.pow(mouseY - wordY, 2));
                
                if (distance < 80) {
                    const intensity = 1 - (distance / 80);
                    word.style.transform = `translateY(${-5 * intensity}px) scale(${1 + 0.05 * intensity})`;
                    word.style.color = '#60d5ff';
                    word.style.textShadow = `0 0 ${20 * intensity}px rgba(96, 213, 255, 0.6)`;
                } else {
                    word.style.transform = '';
                    word.style.color = '';
                    word.style.textShadow = '';
                }
            });
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
      
<canvas id="shader-canvas"></canvas>

<div className="floating-particle" style={{top: '20%', left: '10%', animationDelay: '2s'}}></div>
<div className="floating-particle" style={{top: '60%', left: '85%', animationDelay: '3s'}}></div>
<div className="floating-particle" style={{top: '80%', left: '15%', animationDelay: '4s'}}></div>
<div className="floating-particle" style={{top: '30%', left: '90%', animationDelay: '5s'}}></div>

<svg className="grid-overlay" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="80" id="grid" patternunits="userSpaceOnUse" width="80">
<path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<line className="grid-line" style={{animationDelay: '1s', stroke: 'rgba(96, 213, 255, 0.15)'}} x1="0" x2="100%" y1="25%" y2="25%"></line>
<line className="grid-line" style={{animationDelay: '1.5s', stroke: 'rgba(96, 213, 255, 0.15)'}} x1="0" x2="100%" y1="75%" y2="75%"></line>
<line className="grid-line" style={{animationDelay: '2s', stroke: 'rgba(96, 213, 255, 0.15)'}} x1="25%" x2="25%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: '2.5s', stroke: 'rgba(96, 213, 255, 0.15)'}} x1="75%" x2="75%" y1="0" y2="100%"></line>
<circle className="corner-dot" cx="25%" cy="25%" r="2" style={{animationDelay: '3s', fill: '#60d5ff', opacity: '0.6'}}></circle>
<circle className="corner-dot" cx="75%" cy="25%" r="2" style={{animationDelay: '3.2s', fill: '#60d5ff', opacity: '0.6'}}></circle>
<circle className="corner-dot" cx="25%" cy="75%" r="2" style={{animationDelay: '3.4s', fill: '#60d5ff', opacity: '0.6'}}></circle>
<circle className="corner-dot" cx="75%" cy="75%" r="2" style={{animationDelay: '3.6s', fill: '#60d5ff', opacity: '0.6'}}></circle>
</svg>

<div className="content flex flex-col justify-between p-6 md:p-12 h-full w-full">

<header className="flex justify-center w-full pt-8 md:pt-10 fade-in shrink-0" style={{animation: 'fade-in-up 1s ease-out forwards'}}>
<a className="block transition-transform hover:scale-105 duration-500" href="https://digitaldynamics.uk/">
<img alt="Digital Dynamics" className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/NEWDark-logo-3000px.svg"/>
</a>
</header>

<main className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full flex-grow">

<div className="mb-8 md:mb-10 mt-8 md:mt-16 font-mono">
<h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight text-glow">
<span className="word" data-delay="200">Enter</span>
<span className="word" data-delay="350">Client</span>
<span className="word" data-delay="500">Portal</span>
</h2>
</div>

<div className="max-w-3xl mx-auto mb-16 px-4">
<p className="text-sm md:text-lg lg:text-xl text-slate-300/80 font-mono leading-relaxed">
<span className="word" data-delay="800">Where</span>
<span className="word" data-delay="900">consciousness</span>
<span className="word" data-delay="1000">meets</span>
<span className="word" data-delay="1100">technology</span>
<span className="word" data-delay="1200">-</span>
<span className="word" data-delay="1300">infinite</span>
<span className="word" data-delay="1400">possibilities</span>
<span className="word" data-delay="1500">unfold</span>
</p>
</div>

<div className="flex flex-col md:flex-row gap-5 md:gap-8 w-full md:w-auto px-6 md:px-0 opacity-0" style={{animation: 'fade-in-up 1s ease-out 2s forwards'}}>
<button className="btn-glow group relative px-8 py-4 bg-black/40 border border-white/10 text-white font-mono text-xs md:text-sm uppercase tracking-widest overflow-hidden backdrop-blur-md rounded-sm w-full md:w-auto">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span className="relative z-10 group-hover:text-[#60d5ff] transition-colors">Client Studio Login</span>
</button>
<button className="btn-glow group relative px-8 py-4 bg-black/40 border border-white/10 text-white font-mono text-xs md:text-sm uppercase tracking-widest overflow-hidden backdrop-blur-md rounded-sm w-full md:w-auto">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span className="relative z-10 group-hover:text-[#60d5ff] transition-colors">Analytics Lab Login</span>
</button>
</div>
</main>

<footer className="flex flex-col items-center justify-center opacity-0 shrink-0 pb-6 md:pb-8" style={{animation: 'fade-in-up 1s ease-out 2.5s forwards'}}>
<div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
<p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-[0.4em] mb-4">
                Journey through digital infinity
            </p>
<div className="flex space-x-3">
<div className="w-1 h-1 rounded-full bg-white/40 animate-pulse"></div>
<div className="w-1 h-1 rounded-full bg-white/20 animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" style={{animationDelay: '0.6s'}}></div>
</div>
</footer>
</div>


    </>
  );
}
