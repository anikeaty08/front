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
                    fontFamily: { geist: ['Geist', 'sans-serif'] },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'login-pulse': 'loginPulse 4s ease-in-out infinite',
                        'field-glow': 'fieldGlow 2s ease-in-out infinite',
                        'button-shine': 'buttonShine 3s ease-in-out infinite',
                    },
                    keyframes: {
                        float: { 
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        loginPulse: {
                            '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                            '50%': { transform: 'scale(1.02)', opacity: 1 }
                        },
                        fieldGlow: {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)' },
                            '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }
                        },
                        buttonShine: {
                            '0%, 100%': { backgroundPosition: '-200% center' },
                            '50%': { backgroundPosition: '200% center' }
                        }
                    }
                }
            }
        }
    


        const canvas = document.getElementById('aurora-canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        if (!gl) {
            console.error('WebGL not supported');
        }

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const vertexShaderSource = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;

            vec3 aurora(vec2 uv, float time) {
                vec2 p = uv - 0.5;
                p.y += 0.3;
                
                float wave1 = sin(p.x * 3.0 + time * 0.5) * 0.08;
                float wave2 = sin(p.x * 5.0 + time * 0.7 + sin(time * 0.3) * 2.0) * 0.04;
                float wave3 = sin(p.x * 7.0 + time * 1.1 + cos(time * 0.4) * 1.5) * 0.025;
                float wave4 = sin(p.x * 2.0 + time * 0.3 + sin(time * 0.6) * 3.0) * 0.06;
                
                float y = p.y - wave1 - wave2 - wave3 - wave4;
                
                float intensity1 = exp(-abs(y) * 16.0) * 0.375;
                float intensity2 = exp(-abs(y + 0.1) * 24.0) * 0.3;
                float intensity3 = exp(-abs(y - 0.05) * 30.0) * 0.225;
                
                vec3 color1 = vec3(0.2, 0.8, 0.9) * intensity1;
                vec3 color2 = vec3(0.5, 0.3, 0.9) * intensity2;
                vec3 color3 = vec3(0.1, 0.9, 0.6) * intensity3;
                
                return color1 + color2 + color3;
            }

            vec3 secondaryAurora(vec2 uv, float time) {
                vec2 p = uv - 0.5;
                p.y += 0.1;
                
                float wave1 = sin(p.x * 2.0 + time * 0.3 + sin(time * 0.2) * 2.5) * 0.06;
                float wave2 = cos(p.x * 4.0 + time * 0.5 + cos(time * 0.35) * 1.8) * 0.03;
                float y = p.y - wave1 - wave2;
                
                float intensity = exp(-abs(y) * 12.0) * 0.225;
                return vec3(0.8, 0.2, 0.7) * intensity;
            }

            vec3 tertiaryAurora(vec2 uv, float time) {
                vec2 p = uv - 0.5;
                p.y -= 0.2;
                
                float wave1 = sin(p.x * 1.5 + time * 0.4 + sin(time * 0.25) * 3.0) * 0.07;
                float wave2 = cos(p.x * 3.5 + time * 0.6 + cos(time * 0.45) * 2.2) * 0.035;
                float y = p.y - wave1 - wave2;
                
                float intensity = exp(-abs(y) * 18.0) * 0.18;
                return vec3(0.3, 0.9, 0.5) * intensity;
            }

            float noise(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                
                vec3 color = vec3(0.03, 0.03, 0.075);
                
                color += aurora(uv, u_time);
                color += secondaryAurora(uv, u_time + 3.0);
                color += tertiaryAurora(uv, u_time + 1.5);
                
                vec2 starUv = uv * 120.0;
                vec2 starId = floor(starUv);
                vec2 starFract = fract(starUv);
                
                float star = noise(starId);
                if (star > 0.985) {
                    float starBrightness = (sin(u_time * 1.5 + star * 8.0) * 0.3 + 0.4) * 0.75;
                    float starDist = length(starFract - 0.5);
                    if (starDist < 0.03) {
                        color += vec3(0.8, 0.9, 1.0) * (1.0 - starDist * 30.0) * starBrightness;
                    }
                }
                
                float glow = 1.0 - length(uv - 0.5) * 0.6;
                color += vec3(0.075, 0.15, 0.225) * glow * 0.225;
                
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            
            return shader;
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program linking error:', gl.getProgramInfoLog(program));
        }

        const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
        const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
        const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        function render(time) {
            time *= 0.001;

            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.useProgram(program);

            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

            gl.uniform1f(timeUniformLocation, time);
            gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);

        // Interactive elements
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.classList.add('animate-field-glow');
            });
            input.addEventListener('blur', function() {
                this.classList.remove('animate-field-glow');
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
      
<canvas id="aurora-canvas"></canvas>

<div className="fixed inset-0 flex items-center justify-center p-4 z-10">
<div className="w-full relative max-w-sm">

<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float">

<div className="p-6 pb-0 flex justify-center relative">
<div className="w-full h-32 rounded-xl gradient-border overflow-hidden relative animate-login-pulse">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">

<div className="w-16 h-16 rounded-full glass border-2 border-indigo-400/30 flex items-center justify-center mb-4">
<svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
</svg>
</div>

<div className="absolute -top-2 -right-2">
<div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
</div>
<div className="absolute -bottom-1 -left-2">
<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="absolute top-1/2 -right-4">
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
</div>
</div>

<div className="absolute bottom-2 right-2">
<div className="flex items-center glass px-2 py-1 rounded-full border border-green-400/20">
<svg className="w-3 h-3 text-green-400 mr-1" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span className="text-xs text-green-300">Secure</span>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="text-center mb-6">
<h3 className="text-xl font-semibold text-white mb-2">Sign In</h3>
<p className="text-white/60 text-sm">Access your secure account</p>
</div>
<form className="space-y-4">

<div className="relative">
<label className="block text-sm font-medium text-white/80 mb-2">Email</label>
<div className="relative">
<input className="input-field w-full px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-0" placeholder="Enter your email" type="email"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<svg className="w-4 h-4 text-white/40" fill="currentColor" viewbox="0 0 20 20">
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
</div>
</div>
</div>

<div className="relative">
<label className="block text-sm font-medium text-white/80 mb-2">Password</label>
<div className="relative">
<input className="input-field w-full px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-0" placeholder="Enter your password" type="password"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<svg className="w-4 h-4 text-white/40" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<label className="flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border-2 border-indigo-400/50 rounded glass flex items-center justify-center">
<svg className="w-3 h-3 text-indigo-400 hidden" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="ml-2 text-white/60">Remember me</span>
</label>
<a className="text-indigo-400 hover:text-indigo-300 transition" href="#">Forgot password?</a>
</div>

<button className="w-full login-button text-white font-medium py-3 px-4 rounded-lg transition hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50" type="submit">
                            Sign In
                        </button>

<div className="text-center my-6">
<span className="text-white/60 text-sm">or continue with</span>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="glass flex items-center justify-center px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
<svg className="w-4 h-4" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</button>
<button className="glass flex items-center justify-center px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
</svg>
</button>
</div>

<div className="text-center mt-6">
<span className="text-white/60 text-sm">Don't have an account? </span>
<a className="text-indigo-400 hover:text-indigo-300 transition text-sm font-medium" href="#">Sign up</a>
</div>
</form>
</div>
</div>
</div>
</div>


    </>
  );
}
