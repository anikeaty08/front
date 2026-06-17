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



        // Utility function to convert hex to normalized RGB
        function hexToNormalizedRGB(hex) {
            hex = hex.replace("#", "");
            return [
                parseInt(hex.slice(0, 2), 16) / 255,
                parseInt(hex.slice(2, 4), 16) / 255,
                parseInt(hex.slice(4, 6), 16) / 255,
            ];
        }

        // Shader code
        const vertexShader = `
            varying vec2 vUv;
            varying vec3 vPosition;

            void main() {
                vPosition = position;
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            varying vec2 vUv;
            varying vec3 vPosition;

            uniform float uTime;
            uniform vec3  uColor;
            uniform float uSpeed;
            uniform float uScale;
            uniform float uRotation;
            uniform float uNoiseIntensity;

            const float e = 2.71828182845904523536;

            float noise(vec2 texCoord) {
                float G = e;
                vec2  r = (G * sin(G * texCoord));
                return fract(r.x * r.y * (1.0 + texCoord.x));
            }

            vec2 rotateUvs(vec2 uv, float angle) {
                float c = cos(angle);
                float s = sin(angle);
                mat2  rot = mat2(c, -s, s, c);
                return rot * uv;
            }

            void main() {
                float rnd        = noise(gl_FragCoord.xy);
                vec2  uv         = rotateUvs(vUv * uScale, uRotation);
                vec2  tex        = uv * uScale;
                float tOffset    = uSpeed * uTime;

                tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

                float pattern = 0.6 +
                              0.4 * sin(5.0 * (tex.x + tex.y +
                                               cos(3.0 * tex.x + 5.0 * tex.y) +
                                               0.02 * tOffset) +
                                       sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

                vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
                col.a = 1.0;
                gl_FragColor = col;
            }
        `;

        // Three.js setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        
        const container = document.getElementById('canvas-container');
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Shader uniforms
        const uniforms = {
            uSpeed: { value: 1.5 },
            uScale: { value: 1.2 },
            uNoiseIntensity: { value: 1.5 },
            uColor: { value: new THREE.Color(...hexToNormalizedRGB("#1a1a2e")) },
            uRotation: { value: 0.2 },
            uTime: { value: 0 }
        };

        // Create shader material and mesh
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Animation loop
        const clock = new THREE.Clock();
        
        function animate() {
            requestAnimationFrame(animate);
            
            const delta = clock.getDelta();
            uniforms.uTime.value += 0.1 * delta;
            
            renderer.render(scene, camera);
        }

        // Handle window resize
        function onWindowResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize);

        // Animation for slide-in elements
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.slide-in');
            
            function checkScroll() {
                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.style.animationPlayState = 'running';
                    }
                });
            }
            
            window.addEventListener('scroll', checkScroll);
            checkScroll();
        });

        // Start animation
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
      
<div id="canvas-container"></div>
<div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-6 slide-in" style={{animationDelay: '0.1s'}}>
<div className="mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-transform hover:scale-110">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
<p className="text-gray-300">Connect your workflow with GitHub for real-time updates and synchronization.</p>
</div>
<div className="p-6 slide-in" style={{animationDelay: '0.2s'}}>
<div className="mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-transform hover:scale-110">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold mb-2">Enhanced Privacy</h3>
<p className="text-gray-300">Keep sensitive tasks private while maintaining collaborative workflows.</p>
</div>
<div className="p-6 slide-in" style={{animationDelay: '0.3s'}}>
<div className="mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-transform hover:scale-110">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold mb-2">Multi-Repo Management</h3>
<p className="text-gray-300">Streamline work across multiple repositories in one unified interface.</p>
</div>
<div className="p-6 slide-in" style={{animationDelay: '0.4s'}}>
<div className="mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-transform hover:scale-110">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold mb-2">Smart Milestone Tracking</h3>
<p className="text-gray-300">Transfer and track project milestones effortlessly between repositories.</p>
</div>
<div className="p-6 slide-in" style={{animationDelay: '0.5s'}}>
<div className="mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-transform hover:scale-110">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold mb-2">Real-time Progress Insights</h3>
<p className="text-gray-300">Monitor contributions and development metrics with visual dashboards.</p>
</div>
<div className="p-6 slide-in" style={{animationDelay: '0.6s'}}>
<div className="mb-4">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-transform hover:scale-110">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold mb-2">Powerful Search &amp; Filters</h3>
<p className="text-gray-300">Find exactly what you need with customizable filters and smart search.</p>
</div>
</div>
</div>


    </>
  );
}
