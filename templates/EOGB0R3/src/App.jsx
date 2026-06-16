import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { geist: ['Geist', 'sans-serif'] },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'note-pulse': 'notePulse 4s ease-in-out infinite',
                        'writing': 'writing 2s ease-in-out infinite',
                    },
                    keyframes: {
                        float: { 
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        notePulse: {
                            '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                            '50%': { transform: 'scale(1.02)', opacity: 1 }
                        },
                        writing: {
                            '0%, 100%': { opacity: 0.7 },
                            '50%': { opacity: 1 }
                        }
                    }
                }
            }
        }
    


        let scene, camera, renderer, material;
        let startTime = Date.now();

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

            vec4 Line(vec2 uv, float speed, float height, vec3 col) {
                uv.y += S(1., 0., abs(uv.x)) * sin(iTime * speed + uv.x * height) * 0.2;
                return vec4(S(0.06 * S(0.2, 0.9, abs(uv.x)), 0., abs(uv.y) - 0.004) * col, 1.0) * S(1., 0.3, abs(uv.x));
            }

            void main() {
                vec2 uv = (vUv - 0.5) * vec2(iResolution.x / iResolution.y, 1.0);
                vec4 O = vec4(0.);
                
                for (float i = 0.; i <= 5.; i += 1.) {
                    float t = i / 5.;
                    float timeOffset = iTime * 0.3 + t * 2.0;
                    
                    vec3 auroraColor = vec3(
                        0.1 + 0.6 * sin(timeOffset + t * 3.14159),
                        0.3 + 0.7 * sin(timeOffset * 1.3 + t * 2.0),
                        0.4 + 0.6 * cos(timeOffset * 0.8 + t * 1.5)
                    );
                    
                    auroraColor = mix(auroraColor, vec3(0.0, 0.8, 0.6), sin(timeOffset + t) * 0.5 + 0.5);
                    auroraColor = mix(auroraColor, vec3(0.7, 0.2, 0.9), cos(timeOffset * 0.7 + t * 1.2) * 0.3 + 0.3);
                    
                    O += Line(uv, 1. + t * 0.8, 4. + t, auroraColor);
                }
                
                gl_FragColor = O;
            }
        `;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio * 2, 3));
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('container').appendChild(renderer.domElement);

            material = new THREE.ShaderMaterial({
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    iTime: { value: 0 },
                    iResolution: { value: new THREE.Vector2(window.innerWidth * 2, window.innerHeight * 2) }
                }
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
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth * 2, window.innerHeight * 2);
        }

        window.addEventListener('resize', onWindowResize);
        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="container"></div>

<div className="fixed inset-0 flex items-center justify-center p-4 z-10">
<div className="w-full relative max-w-xs">

<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float">

<div className="p-4 flex justify-center relative">
<div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative">

<div className="absolute inset-0 opacity-10">
<div className="w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 14px, rgba(255,255,255,0.1) 14px, rgba(255,255,255,0.1) 15px)'}}></div>
</div>

<div className="absolute left-6 top-0 bottom-0 w-px bg-red-400/30"></div>

<div className="absolute inset-0 p-6 pl-8">

<div className="flex items-center mb-4 animate-note-pulse">
<svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
<div className="h-1 w-16 bg-indigo-400/60 rounded animate-writing"></div>
</div>

<div className="space-y-3">
<div className="h-0.5 w-20 bg-white/40 rounded animate-writing" style={{animationDelay: '0.5s'}}></div>
<div className="h-0.5 w-24 bg-white/30 rounded animate-writing" style={{animationDelay: '1s'}}></div>
<div className="h-0.5 w-16 bg-white/35 rounded animate-writing" style={{animationDelay: '1.5s'}}></div>
<div className="h-0.5 w-28 bg-white/25 rounded animate-writing" style={{animationDelay: '2s'}}></div>

<div className="mt-6 space-y-2">
<div className="flex items-center animate-writing" style={{animationDelay: '2.5s'}}>
<div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
<div className="h-0.5 w-18 bg-white/30 rounded"></div>
</div>
<div className="flex items-center animate-writing" style={{animationDelay: '3s'}}>
<div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
<div className="h-0.5 w-14 bg-white/30 rounded"></div>
</div>
<div className="flex items-center animate-writing" style={{animationDelay: '3.5s'}}>
<div className="w-1 h-1 bg-yellow-400 rounded-full mr-2"></div>
<div className="h-0.5 w-20 bg-white/30 rounded"></div>
</div>
</div>

<div className="mt-6 flex items-center animate-writing" style={{animationDelay: '4s'}}>
<div className="w-3 h-3 border border-blue-400/60 rounded-sm mr-2 flex items-center justify-center">
<svg className="w-2 h-2 text-blue-400" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="h-0.5 w-16 bg-white/30 rounded"></div>
</div>
</div>

<div className="absolute top-2 right-2">
<div className="w-6 h-6 glass rounded-full flex items-center justify-center border border-purple-400/20" style={{borderWidth: '1px'}}>
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
</div>
</div>
<div className="absolute bottom-2 right-4">
<div className="text-xs text-white/40 font-mono">12:34</div>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

<div className="p-4">
<span className="inline-block px-3 py-1 glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/20" style={{borderWidth: '1px'}}>Notes</span>
<h3 className="text-lg font-medium text-white mb-2">Quick Thoughts</h3>
<p className="text-white/70 mb-4 leading-relaxed text-xs">
                        Capture ideas, create lists, and organize your thoughts with beautiful note-taking.
                    </p>
<div className="flex justify-between items-center">
<a className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-indigo-400/20" href="#" style={{borderWidth: '1px'}}>
                            Write
                            <svg className="w-3 h-3 ml-1" fill="none" viewbox="0 0 24 24"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10" style={{borderWidth: '1px'}}>Draft</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
