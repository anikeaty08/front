import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'geist': ['Geist', 'sans-serif'],
                    },
                    animation: {
                        'slide-up': 'slideUp 0.8s ease-out forwards',
                        'slide-up-delay-1': 'slideUp 0.8s ease-out 0.2s forwards',
                        'slide-up-delay-2': 'slideUp 0.8s ease-out 0.4s forwards',
                        'slide-up-delay-3': 'slideUp 0.8s ease-out 0.6s forwards',
                    },
                    keyframes: {
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        }
                    }
                }
            }
        }
    


        const canvas = document.getElementById('gradientCanvas');
        const gl = canvas.getContext('webgl');
        let uSpeakingState = 0.0;
        let targetState = 0.0;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }

        const vertexShaderSource = `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision mediump float;
            uniform vec2 iResolution;
            uniform float iTime;
            uniform float uSpeakingState;

            #define S(a,b,t) smoothstep(a,b,t)

            vec2 hash(vec2 p) {
                p = vec2(dot(p,vec2(2127.1,81.17)), dot(p,vec2(1269.5,283.37)));
                return fract(sin(p)*43758.5453);
            }

            mat2 Rot(float a) {
                float s = sin(a);
                float c = cos(a);
                return mat2(c, -s, s, c);
            }

            float noise(in vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                vec2 u = f*f*(3.0-2.0*f);
                float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
                              dot(-1.0+2.0*hash(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
                          mix(dot(-1.0+2.0*hash(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
                              dot(-1.0+2.0*hash(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x), u.y);
                return 0.5 + 0.5*n;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy/iResolution.xy;
                float ratio = iResolution.x / iResolution.y;
                vec2 tuv = uv - 0.5;

                float degree = noise(vec2(iTime*.1, tuv.x*tuv.y));
                tuv.y *= 1./ratio;
                tuv *= Rot(radians((degree-.25)*720.+180.));
                tuv.y *= ratio;

                float frequency = mix(8.0, 12.0, uSpeakingState);
                float amplitude = mix(100.0, 40.0, uSpeakingState);
                float speed = mix(1.0, 2.5, uSpeakingState);
                float noiseAmount = mix(0.1, 0.15, uSpeakingState);

                float t = iTime * speed;
                tuv.x += sin(tuv.y*frequency+t)/amplitude;
                tuv.y += sin(tuv.x*frequency*1.5+t)/(amplitude*.5);

                float noiseScale = 10.0;
                tuv += (noise(tuv * noiseScale + t) - 0.5) * noiseAmount;

                vec3 colorPurple = vec3(0.7, 0.3, 0.9);
                vec3 colorOrange = vec3(1.0, 0.6, 0.2);
                vec3 colorBlue = vec3(0.2, 0.4, 0.9);

                vec3 layer1 = mix(colorPurple, colorOrange, S(-0.2, 0.3, tuv.x));
                layer1 = mix(layer1, colorBlue, S(0.2, 0.6, tuv.y));

                gl_FragColor = vec4(layer1, 1.0);
            }
        `;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1, 1, 1
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'position');
        const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
        const iTimeLocation = gl.getUniformLocation(program, 'iTime');
        const uSpeakingStateLocation = gl.getUniformLocation(program, 'uSpeakingState');

        function render(time) {
            uSpeakingState += (targetState - uSpeakingState) * 0.02;
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(iTimeLocation, time * 0.001);
            gl.uniform1f(uSpeakingStateLocation, uSpeakingState);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }

        const toggleButton = document.getElementById('toggleState');
        const stateText = document.getElementById('stateText');

        toggleButton.addEventListener('click', () => {
            targetState = targetState === 0.0 ? 1.0 : 0.0;
            stateText.textContent = targetState === 1.0 ? 'Dynamic' : 'Idle';
        });

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        requestAnimationFrame(render);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-20 p-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-white font-geist text-xl font-thin tracking-tighter">Gradient</div>
<div className="hidden md:flex space-x-8 text-white text-sm">
<a className="hover:opacity-75 transition-opacity" href="#">Features</a>
<a className="hover:opacity-75 transition-opacity" href="#">About</a>
<a className="hover:opacity-75 transition-opacity" href="#">Contact</a>
</div>
</div>
</nav>

<section className="relative h-screen overflow-hidden">
<canvas className="w-full h-full block" id="gradientCanvas"></canvas>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center text-white max-w-4xl px-6">
<h1 className="font-geist text-6xl lg:text-7xl font-thin tracking-tighter mb-6 opacity-0 animate-slide-up">
                    Beautiful Gradients
                </h1>
<p className="text-lg lg:text-xl mb-8 font-light opacity-75 opacity-0 animate-slide-up-delay-1">
                    Experience the power of dynamic visual design with our animated gradient technology
                </p>
<p className="text-sm lg:text-base mb-10 max-w-2xl mx-auto leading-relaxed opacity-70 opacity-0 animate-slide-up-delay-2">
                    Transform your digital experiences with fluid, responsive gradients that adapt to user interaction. 
                    Our WebGL-powered animations create immersive environments that captivate and engage your audience.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up-delay-3">
<button className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-white font-medium hover:bg-opacity-30 transition-all duration-300" id="toggleState">
                        Mode: <span id="stateText">Idle</span>
</button>
<button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                        Learn More
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-geist text-5xl lg:text-6xl font-thin tracking-tighter text-center mb-4">Features</h2>
<p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">Discover what makes our gradient system unique</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<h3 className="font-geist text-2xl font-thin tracking-tighter mb-4">Real-time Animation</h3>
<p className="text-sm text-gray-600">Smooth, performant animations powered by WebGL technology</p>
</div>
<div className="text-center">
<h3 className="font-geist text-2xl font-thin tracking-tighter mb-4">Interactive States</h3>
<p className="text-sm text-gray-600">Dynamic responses to user interaction and system events</p>
</div>
<div className="text-center">
<h3 className="font-geist text-2xl font-thin tracking-tighter mb-4">Customizable</h3>
<p className="text-sm text-gray-600">Fully configurable colors, patterns, and animation parameters</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-geist text-5xl lg:text-6xl font-thin tracking-tighter mb-6">About the Technology</h2>
<p className="text-lg mb-6 text-gray-600">Our gradient system represents the cutting edge of web-based visual design</p>
<p className="text-sm text-gray-600 leading-relaxed">
                        Built with modern WebGL shaders and optimized for performance across all devices. 
                        The system creates fluid, organic movements that respond to user interaction while 
                        maintaining smooth 60fps animation. Perfect for modern web applications that demand 
                        both beauty and performance.
                    </p>
</div>
<div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
<p className="text-gray-400 text-sm">Demo placeholder</p>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8">
<div>
<h4 className="font-geist text-xl font-thin tracking-tighter mb-4">Gradient</h4>
<p className="text-sm text-gray-400">Beautiful animated gradients for modern web experiences</p>
</div>
<div>
<h5 className="text-sm font-medium mb-4">Product</h5>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Examples</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium mb-4">Company</h5>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium mb-4">Connect</h5>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8 text-center">
<p className="text-sm text-gray-400">© 2024 Gradient. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
