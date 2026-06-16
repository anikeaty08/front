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
                        'float-delayed': 'float 6s ease-in-out infinite',
                        'float-delayed-2': 'float 6s ease-in-out infinite',
                        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
                    },
                    keyframes: {
                        float: { 
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        starTwinkle: {
                            '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
                            '50%': { opacity: 1, transform: 'scale(1.1)' }
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
<div className="flex gap-6 max-w-6xl w-full justify-center flex-wrap lg:flex-nowrap">

<div className="w-full max-w-sm">
<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="inline-block px-3 py-1 glass text-blue-300 rounded-full text-xs font-medium border border-blue-400/20">March 15, 2024</span>
<div className="flex space-x-1">
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.1s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.2s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.3s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.4s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
<p className="text-white/90 mb-6 leading-relaxed text-sm italic">
                            "This product completely transformed my workflow. The attention to detail and user experience is phenomenal. Highly recommend!"
                        </p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/30">
<div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
<span className="text-white text-sm font-semibold">SA</span>
</div>
</div>
<div>
<div className="text-white text-sm font-medium">Sarah Anderson</div>
<div className="text-white/60 text-xs">Product Designer</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-sm">
<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float-delayed">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="inline-block px-3 py-1 glass text-emerald-300 rounded-full text-xs font-medium border border-emerald-400/20">February 28, 2024</span>
<div className="flex space-x-1">
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.5s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.6s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.7s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.8s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '0.9s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
<p className="text-white/90 mb-6 leading-relaxed text-sm italic">
                            "Outstanding service and quality! The team went above and beyond to ensure everything was perfect. Will definitely use again."
                        </p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400/30">
<div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
<span className="text-white text-sm font-semibold">MJ</span>
</div>
</div>
<div>
<div className="text-white text-sm font-medium">Michael Johnson</div>
<div className="text-white/60 text-xs">Marketing Director</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-sm">
<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float-delayed-2">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="inline-block px-3 py-1 glass text-orange-300 rounded-full text-xs font-medium border border-orange-400/20">January 12, 2024</span>
<div className="flex space-x-1">
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '1s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '1.1s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '1.2s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '1.3s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400 animate-star-twinkle" fill="currentColor" style={{animationDelay: '1.4s'}} viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
<p className="text-white/90 mb-6 leading-relaxed text-sm italic">
                            "Incredible experience from start to finish. The results exceeded my expectations and the support team was amazing throughout."
                        </p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-400/30">
<div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
<span className="text-white text-sm font-semibold">EC</span>
</div>
</div>
<div>
<div className="text-white text-sm font-medium">Emily Chen</div>
<div className="text-white/60 text-xs">Startup Founder</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
