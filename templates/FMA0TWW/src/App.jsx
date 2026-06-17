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



        // Initialize Lucide icons
        lucide.createIcons();

        // Three.js shader setup
        const canvas = document.getElementById('shader-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

        const vertexShader = `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform vec2 iResolution;
            uniform float iTime;

            float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
                vec2 sourceToCoord = coord - raySource;
                float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
                
                return clamp(
                    (0.45 + 0.15 * sin(cosAngle * seedA + iTime * speed)) +
                    (0.3 + 0.2 * cos(-cosAngle * seedB + iTime * speed)),
                    0.0, 1.0) *
                    clamp((iResolution.x - length(sourceToCoord)) / iResolution.x, 0.5, 1.0);
            }

            void main() {
                vec2 fragCoord = gl_FragCoord.xy;
                vec2 uv = fragCoord.xy / iResolution.xy;
                uv.y = 1.0 - uv.y;
                vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
                
                vec2 rayPos1 = vec2(iResolution.x * 0.7, iResolution.y * -0.4);
                vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
                float raySeedA1 = 36.2214;
                float raySeedB1 = 21.11349;
                float raySpeed1 = 1.5;
                
                vec2 rayPos2 = vec2(iResolution.x * 0.8, iResolution.y * -0.6);
                vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
                float raySeedA2 = 22.39910;
                float raySeedB2 = 18.0234;
                float raySpeed2 = 1.1;
                
                vec4 rays1 = vec4(1.0, 1.0, 1.0, 1.0) * rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
                vec4 rays2 = vec4(1.0, 1.0, 1.0, 1.0) * rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);
                
                vec4 fragColor = rays1 * 0.5 + rays2 * 0.4;
                
                float brightness = 1.0 - (coord.y / iResolution.y);
                fragColor.x *= 0.1 + (brightness * 0.8);
                fragColor.y *= 0.3 + (brightness * 0.6);
                fragColor.z *= 0.5 + (brightness * 0.5);
                
                gl_FragColor = fragColor * 0.3; // Reduce intensity for background
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2() }
            }
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function resize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            material.uniforms.iResolution.value.set(width, height);
        }

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value = performance.now() / 1000;
            renderer.render(scene, camera);
        }

        resize();
        window.addEventListener('resize', resize);
        animate();
    
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
      

<canvas className="fixed inset-0 w-full h-full -z-10" height="1034" id="shader-canvas" style={{width: '1326px', height: '1034px'}} width="1326"></canvas>

<nav className="relative z-10 flex items-center justify-between p-6 fade-in">
<div className="text-xl font-semibold tracking-tight">Nexus</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Products</a>
<a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Developers</a>
<a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Company</a>
</div>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
            Get Started
        </button>
</nav>

<section className="relative z-10 min-h-screen flex pr-6 pl-6 items-center justify-center">
<div className="max-w-4xl mx-auto text-center">
<h1 className="md:text-7xl fade-in-delay-1 fade-in text-5xl font-bold tracking-tighter font-jakarta mb-6">
                Build the future with
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    advanced shaders
                </span>
</h1>
<p className="md:text-2xl max-w-2xl leading-relaxed fade-in-delay-2 fade-in text-xl font-light text-gray-300 mr-auto mb-8 ml-auto">
                Experience the next generation of visual computing with our real-time shader technology
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-3 fade-in">
<button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105 flex items-center gap-2">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    Watch Demo
                </button>
<button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200 flex items-center gap-2">
<svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                    View Code
                </button>
</div>
</div>
</section>

<section className="relative z-10 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 fade-in-delay-4 fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Powered by cutting-edge technology
                </h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Our shader engine delivers real-time ray calculations with optimized performance
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 fade-in">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-zap w-6 h-6 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Real-time Rendering</h3>
<p className="text-gray-400 leading-relaxed">
                        Dynamic ray calculations with 60fps performance using optimized fragment shaders
                    </p>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 fade-in-delay-1 fade-in">
<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-layers w-6 h-6 text-purple-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Multi-layer Effects</h3>
<p className="text-gray-400 leading-relaxed">
                        Combine multiple ray sources with customizable parameters for complex lighting
                    </p>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 fade-in-delay-2 fade-in">
<div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-cpu w-6 h-6 text-cyan-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold mb-4">GPU Accelerated</h3>
<p className="text-gray-400 leading-relaxed">
                        Harness the power of modern graphics cards for seamless visual experiences
                    </p>
</div>
</div>
</div>
</section>


    </>
  );
}
