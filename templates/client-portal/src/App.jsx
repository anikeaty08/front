import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
blue: '#60d5ff'
}
}
}
}
}



        // Initialize Three.js scene with shader
        const canvas = document.getElementById('shader-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: false });
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
                    word.style.color = '#60d5ff';
                    word.style.textShadow = '0 0 20px rgba(96, 213, 255, 0.8)';
                } else {
                    word.style.transform = 'translateY(0) scale(1)';
                    word.style.color = '';
                    word.style.textShadow = '';
                }
            });
        });

        window.addEventListener('load', () => {
            setTimeout(animateWords, 500);
            lucide.createIcons();
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
<path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(96, 213, 255, 0.08)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<line className="grid-line" style={{animationDelay: '1s', stroke: 'rgba(96, 213, 255, 0.3)'}} x1="0" x2="100%" y1="25%" y2="25%"></line>
<line className="grid-line" style={{animationDelay: '1.5s', stroke: 'rgba(96, 213, 255, 0.3)'}} x1="0" x2="100%" y1="75%" y2="75%"></line>
<line className="grid-line" style={{animationDelay: '2s', stroke: 'rgba(96, 213, 255, 0.3)'}} x1="25%" x2="25%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: '2.5s', stroke: 'rgba(96, 213, 255, 0.3)'}} x1="75%" x2="75%" y1="0" y2="100%"></line>
<circle className="corner-dot" cx="25%" cy="25%" r="3" style={{animationDelay: '3s', fill: '#60d5ff'}}></circle>
<circle className="corner-dot" cx="75%" cy="25%" r="3" style={{animationDelay: '3.2s', fill: '#60d5ff'}}></circle>
<circle className="corner-dot" cx="25%" cy="75%" r="3" style={{animationDelay: '3.4s', fill: '#60d5ff'}}></circle>
<circle className="corner-dot" cx="75%" cy="75%" r="3" style={{animationDelay: '3.6s', fill: '#60d5ff'}}></circle>
<circle className="corner-dot" cx="50%" cy="50%" r="2" style={{animationDelay: '4s', fill: '#60d5ff'}}></circle>
</svg>
<div className="floating-particle" style={{top: '20%', left: '10%', animationDelay: '2s'}}></div>
<div className="floating-particle" style={{top: '60%', left: '85%', animationDelay: '3s'}}></div>
<div className="floating-particle" style={{top: '80%', left: '15%', animationDelay: '4s'}}></div>
<div className="floating-particle" style={{top: '30%', left: '90%', animationDelay: '5s'}}></div>
<div className="content flex flex-col items-center justify-center min-h-screen p-8 backdrop-overlay overflow-y-auto">

<div className="text-center mb-8 flex flex-col items-center">

<a className="mb-[140px] block transition-transform hover:scale-105 duration-500" href="https://digitaldynamics.uk/">
<img alt="Digital Dynamics" className="w-72 md:w-96 opacity-90" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/NEWDark-logo-3000px.svg"/>
</a>
</div>

<div className="text-center w-full max-w-[90rem] mx-auto mb-16">
<h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-glow mb-8 font-mono font-light">
<div className="mb-6 text-white">
<span className="word" data-delay="800">Enter</span>
<span className="word" data-delay="950">Client</span>
<span className="word" data-delay="1100">Portal</span>
</div>

<div className="text-lg md:text-2xl lg:text-3xl font-light text-blue-100/80 leading-relaxed font-primary whitespace-nowrap">
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
</div>

<div className="w-full max-w-4xl mx-auto mb-12 opacity-0 flex flex-col md:flex-row justify-center gap-6 md:gap-8" style={{animation: 'word-appear 1s ease-out forwards', animationDelay: '2.6s'}}>

<a className="group relative px-8 py-5 border border-[#60d5ff]/30 text-white font-mono text-lg uppercase tracking-widest transition-all duration-300 hover:text-[#60d5ff] hover:border-[#60d5ff] hover:bg-[#60d5ff]/5 hover:shadow-[0_0_30px_rgba(96,213,255,0.4)] text-center w-full md:w-auto backdrop-blur-sm bg-black/20" href="https://studio.digitaldynamics.uk/">
<span className="relative z-10">Client Studio Login</span>
</a>

<a className="group relative px-8 py-5 border border-[#60d5ff]/30 text-white font-mono text-lg uppercase tracking-widest transition-all duration-300 hover:text-[#60d5ff] hover:border-[#60d5ff] hover:bg-[#60d5ff]/5 hover:shadow-[0_0_30px_rgba(96,213,255,0.4)] text-center w-full md:w-auto backdrop-blur-sm bg-black/20" href="https://analytics.digitaldynamics.uk/">
<span className="relative z-10">Analytics Lab Login</span>
</a>
</div>

<div className="text-center mt-4">
<div className="mb-6 w-20 h-px bg-gradient-to-r from-transparent via-[#60d5ff] to-transparent opacity-50 mx-auto"></div>
<h2 className="text-xs md:text-sm font-mono font-light text-[#60d5ff] uppercase tracking-[0.3em] opacity-80">
<span className="word" data-delay="2800">Journey</span>
<span className="word" data-delay="2950">through</span>
<span className="word" data-delay="3100">digital</span>
<span className="word" data-delay="3250">infinity</span>
</h2>
<div className="mt-8 flex justify-center space-x-6 opacity-0" style={{animation: 'word-appear 1s ease-out forwards', animationDelay: '4s'}}>
<div className="w-2 h-2 bg-[#60d5ff] rounded-full opacity-60 animate-pulse shadow-[0_0_10px_#60d5ff]"></div>
<div className="w-2 h-2 bg-[#60d5ff] rounded-full opacity-40 animate-pulse shadow-[0_0_10px_#60d5ff]" style={{animationDelay: '0.5s'}}></div>
<div className="w-2 h-2 bg-[#60d5ff] rounded-full opacity-60 animate-pulse shadow-[0_0_10px_#60d5ff]" style={{animationDelay: '1s'}}></div>
</div>
</div>
</div>


    </>
  );
}
