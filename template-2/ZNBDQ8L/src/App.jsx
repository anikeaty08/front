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
                        geist: ['Geist', 'sans-serif']
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div id="container"></div>
<div className="fixed inset-0 flex items-center justify-center p-4 z-10">
<div className="w-full max-w-md animate-float">
<div className="glass-form rounded-3xl p-8 relative overflow-hidden">

<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-4">
<svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h1 className="text-2xl font-semibold text-white mb-2">Welcome Back</h1>
<p className="text-gray-400 text-sm">Sign in to your account to continue</p>
</div>

<form className="space-y-6">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-400 outline-none" placeholder="Enter your email" required type="email" />
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
<input className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-400 outline-none" placeholder="Enter your password" required type="password" />
</div>
</div>

<div className="flex items-center justify-between text-sm">
<label className="flex items-center text-gray-300">
<input className="w-4 h-4 rounded border-gray-600 bg-transparent mr-2" type="checkbox" />
                            Remember me
                        </label>
<a className="text-purple-400 hover:text-purple-300 transition-colors" href="#">
                            Forgot password?
                        </a>
</div>

<button className="w-full py-3 px-4 btn-glass text-white font-medium rounded-xl" type="submit">
                        Sign In
                    </button>

<div className="relative my-6">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-600"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="px-4 bg-transparent text-gray-400">Or continue with</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center py-3 px-4 glass rounded-xl text-gray-300 hover:text-white transition-colors" type="button">
<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
</svg>
                            Google
                        </button>
<button className="flex items-center justify-center py-3 px-4 glass rounded-xl text-gray-300 hover:text-white transition-colors" type="button">
<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
                            Facebook
                        </button>
</div>

<p className="text-center text-sm text-gray-400 mt-6">
                        Don't have an account? 
                        <a className="text-purple-400 hover:text-purple-300 font-medium transition-colors" href="#">
                            Sign up
                        </a>
</p>
</form>
</div>
</div>
</div>


    </>
  );
}
