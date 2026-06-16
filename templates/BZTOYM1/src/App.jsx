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
                        'float': 'float 8s ease-in-out infinite',
                        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
                        'wave': 'wave 3s ease-in-out infinite',
                        'bounce-slow': 'bounceSlow 6s ease-in-out infinite',
                        'fade-in': 'fadeIn 2s ease-out forwards',
                        'slide-up': 'slideUp 1.5s ease-out forwards',
                        'glow': 'glow 5s ease-in-out infinite',
                    },
                    keyframes: {
                        float: { 
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-12px)' }
                        },
                        pulseSlow: {
                            '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
                            '50%': { transform: 'scale(1.03)', opacity: 1 }
                        },
                        wave: {
                            '0%, 100%': { transform: 'scaleY(0.8)' },
                            '50%': { transform: 'scaleY(1.4)' }
                        },
                        bounceSlow: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-8px)' }
                        },
                        fadeIn: {
                            '0%': { opacity: 0, transform: 'translateY(30px)' },
                            '100%': { opacity: 1, transform: 'translateY(0px)' }
                        },
                        slideUp: {
                            '0%': { opacity: 0, transform: 'translateY(40px)' },
                            '100%': { opacity: 1, transform: 'translateY(0px)' }
                        },
                        glow: {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)' },
                            '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)' }
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
                uv.y += S(1., 0., abs(uv.x)) * sin(iTime * speed + uv.x * height) * 0.15;
                return vec4(S(0.04 * S(0.2, 0.9, abs(uv.x)), 0., abs(uv.y) - 0.003) * col, 1.0) * S(1., 0.3, abs(uv.x));
            }

            void main() {
                vec2 uv = (vUv - 0.5) * vec2(iResolution.x / iResolution.y, 1.0);
                vec4 O = vec4(0.);
                
                for (float i = 0.; i <= 7.; i += 1.) {
                    float t = i / 7.;
                    float timeOffset = iTime * 0.2 + t * 1.5;
                    
                    vec3 auroraColor = vec3(
                        0.2 + 0.5 * sin(timeOffset + t * 2.5),
                        0.4 + 0.6 * sin(timeOffset * 1.2 + t * 1.8),
                        0.5 + 0.5 * cos(timeOffset * 0.9 + t * 1.3)
                    );
                    
                    auroraColor = mix(auroraColor, vec3(0.1, 0.7, 0.8), sin(timeOffset + t) * 0.4 + 0.4);
                    auroraColor = mix(auroraColor, vec3(0.6, 0.3, 0.9), cos(timeOffset * 0.8 + t * 1.1) * 0.3 + 0.3);
                    
                    O += Line(uv, 0.8 + t * 0.6, 3. + t * 1.2, auroraColor);
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

<div className="relative min-h-screen flex items-center justify-center p-6 z-10">
<div className="max-w-6xl mx-auto text-center">

<div className="mb-16 flex justify-center animate-fade-in">
<div className="glass music-glow rounded-3xl p-8 border border-purple-400/15 animate-float">
<div className="flex items-end justify-center space-x-1.5 h-20 mb-6">
<div className="visualizer-bar w-3 animate-wave" style={{height: '25%', animationDelay: '0s', animationDuration: '4s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '55%', animationDelay: '0.2s', animationDuration: '3.5s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '35%', animationDelay: '0.4s', animationDuration: '4.2s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '75%', animationDelay: '0.6s', animationDuration: '3.8s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '45%', animationDelay: '0.8s', animationDuration: '4.1s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '85%', animationDelay: '1s', animationDuration: '3.7s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '65%', animationDelay: '1.2s', animationDuration: '3.9s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '40%', animationDelay: '1.4s', animationDuration: '4.3s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '80%', animationDelay: '1.6s', animationDuration: '3.6s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '30%', animationDelay: '1.8s', animationDuration: '4s'}}></div>
<div className="visualizer-bar w-3 animate-wave" style={{height: '60%', animationDelay: '2s', animationDuration: '3.8s'}}></div>
</div>

<div className="flex justify-center">
<button className="w-16 h-16 glass rounded-full flex items-center justify-center border border-purple-400/25 hover:border-purple-400/40 transition-all duration-500 animate-pulse-slow">
<svg className="w-6 h-6 text-purple-300 ml-1" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-12 animate-slide-up" style={{animationDelay: '0.5s'}}>
<h1 className="text-6xl md:text-8xl font-light text-white mb-6 leading-tight">
                    Feel the
                    <div className="aurora-text font-medium">
                        Rhythm
                    </div>
</h1>
<p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
                    Immerse yourself in crystal-clear audio with our revolutionary music platform that brings sound to life
                </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-16 animate-slide-up" style={{animationDelay: '0.8s'}}>

<div className="glass rounded-2xl p-8 border border-blue-400/15 music-glow animate-bounce-slow animate-glow">
<div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">High-Quality Streaming</h3>
<p className="text-white/50 leading-relaxed">Lossless audio quality for the ultimate listening experience with studio-grade clarity</p>
</div>

<div className="glass rounded-2xl p-8 border border-purple-400/15 music-glow animate-bounce-slow animate-glow" style={{animationDelay: '0.3s'}}>
<div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 11H5m14-7H5m14 14H5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Smart Playlists</h3>
<p className="text-white/50 leading-relaxed">AI-powered recommendations tailored to your unique taste and listening patterns</p>
</div>

<div className="glass rounded-2xl p-8 border border-cyan-400/15 music-glow animate-bounce-slow animate-glow" style={{animationDelay: '0.6s'}}>
<div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Social Discovery</h3>
<p className="text-white/50 leading-relaxed">Share and discover music with friends worldwide in real-time collaboration</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-slide-up" style={{animationDelay: '1.1s'}}>
<button className="px-10 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white font-medium rounded-2xl transition-all duration-500 transform hover:scale-105 music-glow text-lg">
                    Start Listening
                </button>
<button className="px-10 py-4 glass border border-white/15 text-white font-medium rounded-2xl hover:border-white/30 transition-all duration-500 flex items-center text-lg">
<svg className="w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
                    Watch Demo
                </button>
</div>

<div className="grid grid-cols-3 gap-12 animate-slide-up" style={{animationDelay: '1.4s'}}>
<div className="text-center">
<div className="text-3xl md:text-4xl font-light text-white mb-2 aurora-text">50M+</div>
<div className="text-white/50 text-sm uppercase tracking-wider">Songs</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-light text-white mb-2 aurora-text">10M+</div>
<div className="text-white/50 text-sm uppercase tracking-wider">Artists</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-light text-white mb-2 aurora-text">100M+</div>
<div className="text-white/50 text-sm uppercase tracking-wider">Listeners</div>
</div>
</div>
</div>
</div>


    </>
  );
}
