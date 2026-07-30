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



        // Initialize Three.js scene with shader
        const canvas = document.getElementById('shader-canvas');
        const container = document.getElementById('shader-container');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        
        function updateRendererSize() {
            const rect = container.getBoundingClientRect();
            renderer.setSize(rect.width, rect.height);
            return { width: rect.width, height: rect.height };
        }
        
        const { width, height } = updateRendererSize();

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // Set up shader material with emerald color scheme
        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector3(width, height, 1) },
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
                #define TUNNEL_LAYERS 64
                #define RING_POINTS 96
                #define POINT_SIZE 1.2
                #define POINT_COLOR_A vec3(0.063, 0.725, 0.506)
                #define POINT_COLOR_B vec3(0.655, 0.953, 0.816)
                #define SPEED 0.3

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
                    
                    offs.x = 0.15 * sin(TAU * x * 0.4) + 0.3 * sin(TAU * x * 0.15 + 0.2);
                    offs.y = 0.2 * cos(TAU * x * 0.25) + 0.15 * cos(TAU * x * 0.08);
                    
                    offs *= smoothstep(1.0, 3.0, x);
                    
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
                        
                        pz -= mod(camZ, 3.0 / float(TUNNEL_LAYERS));
                        
                        vec2 offs = TunnelPath(camZ + pz) - camOffs;
                        
                        float ringRad = 0.12 * (1.0 / sq(pz * 0.7 + 0.35));
                        
                        if(abs(length(uv + offs) - ringRad) < pointSize * 1.3) {
                            vec2 aruv = AngRep(uv + offs, repAngle);

                            float pdist = sdCircle(aruv - vec2(ringRad, 0), pointSize);

                            vec3 ptColor = (mod(float(i / 3), 2.0) == 0.0) ? POINT_COLOR_A : POINT_COLOR_B;
                            
                            float shade = (1.0-pz) * 0.8;

                            color = MixShape(pdist, ptColor * shade, color);
                        }
                    }
                    
                    color *= 0.7;
                    gl_FragColor = vec4(color, 0.9);
                }
            `
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(mesh);

        let lastTime = 0;
        const speedMultiplier = 0.6;

        function animate(time) {
            requestAnimationFrame(animate);
            
            time *= 0.001;
            const deltaTime = time - lastTime;
            lastTime = time;
            
            shaderMaterial.uniforms.iTime.value += deltaTime * speedMultiplier;
            
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            const { width, height } = updateRendererSize();
            shaderMaterial.uniforms.iResolution.value.set(width, height, 1);
        });

        animate(0);
    
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
      
<div className="max-w-4xl w-full terminal-border rounded-2xl overflow-hidden neon-glow flex flex-col md:flex-row">

<div className="md:w-1/2 h-72 md:h-auto relative" id="shader-container" style={{background: `linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)`}}>
<canvas id="shader-canvas"></canvas>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1 rounded border border-emerald-500 text-xs text-emerald-400 mb-3 inline-block" style={{background: `rgba(16, 185, 129, 0.1)`}}>NETWORK</span>
<h2 className="heading-font text-3xl text-emerald-400 mb-1">Join Our</h2>
<h2 className="heading-font text-3xl" style={{color: `#F5F5F5`}}>Network</h2>
<p className="text-sm mt-2" style={{color: `#A3A3A3`}}>Built for builders, hackers & AI devs</p>
<div className="h-1 w-16 bg-emerald-500 mt-3 rounded-full opacity-80"></div>
</div>
<div className="absolute bottom-6 left-6 rounded-lg px-4 py-3 z-10 border border-emerald-500/30" style={{background: `rgba(31, 31, 31, 0.9)`, backdropFilter: `blur(10px)`}}>
<div className="mb-1" style={{color: `#A3A3A3`}}>Active Members</div>
<div className="heading-font text-lg text-emerald-400">105,000+</div>
</div>
</div>

<div className="md:w-1/2 p-8" style={{backgroundColor: `#111111`}}>
<div>
<span className="px-3 py-1 rounded border text-xs mb-4 inline-block" style={{background: `rgba(16, 185, 129, 0.1)`, borderColor: `#262626`, color: `#A7F3D0`}}>GET STARTED</span>
<h3 className="heading-font text-2xl mb-2" style={{color: `#F5F5F5`}}>Create Account</h3>
<p className="text-sm mb-8" style={{color: `#A3A3A3`}}>Join thousands of professionals in our growing network</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-2 tracking-wide" style={{color: `#A7F3D0`}}>FIRST NAME</label>
<input className="w-full px-4 py-3 rounded-lg transition text-sm input-glow focus:outline-none" style={{backgroundColor: `#0F0F0F`, border: `1px solid #262626`, color: `#F5F5F5`}} type="text" />
</div>
<div>
<label className="block text-xs font-medium mb-2 tracking-wide" style={{color: `#A7F3D0`}}>LAST NAME</label>
<input className="w-full px-4 py-3 rounded-lg transition text-sm input-glow focus:outline-none" style={{backgroundColor: `#0F0F0F`, border: `1px solid #262626`, color: `#F5F5F5`}} type="text" />
</div>
</div>
<div>
<label className="block text-xs font-medium mb-2 tracking-wide" style={{color: `#A7F3D0`}}>EMAIL ADDRESS</label>
<input className="w-full px-4 py-3 rounded-lg transition text-sm input-glow focus:outline-none" style={{backgroundColor: `#0F0F0F`, border: `1px solid #262626`, color: `#F5F5F5`}} type="email" />
</div>
<div>
<label className="block text-xs font-medium mb-2 tracking-wide" style={{color: `#A7F3D0`}}>PASSWORD</label>
<input className="w-full px-4 py-3 rounded-lg transition text-sm input-glow focus:outline-none" style={{backgroundColor: `#0F0F0F`, border: `1px solid #262626`, color: `#F5F5F5`}} type="password" />
</div>
<div className="flex items-start">
<input className="w-4 h-4 rounded mt-0.5" id="terms" style={{backgroundColor: `#0F0F0F`, border: `1px solid #262626`}} type="checkbox" />
<label className="ml-3 text-xs leading-relaxed" htmlFor="terms" style={{color: `#A3A3A3`}}>
                            I agree to the <span className="text-emerald-400 underline">Terms of Service</span> and <span className="text-emerald-400 underline">Privacy Policy</span>
</label>
</div>
<button className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg transition heading-font text-sm flex items-center justify-center button-glow" type="submit">
                        Create Account
                        <svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</form>
<div className="mt-6 pt-6 text-center" style={{borderTop: `1px solid #262626`}}>
<p className="text-xs" style={{color: `#A3A3A3`}}>
                        Already have an account? <a className="text-emerald-400 hover:text-emerald-300 underline transition" href="#">Sign in</a>
</p>
</div>
</div>
</div>
</div>


    </>
  );
}
