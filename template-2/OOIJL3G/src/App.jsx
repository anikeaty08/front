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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'work': ['Work Sans', 'sans-serif'],
                        'manrope': ['Manrope', 'sans-serif'],
                    }
                }
            }
        }
    
}

{

        // Neural background initialization
        const canvasEl = document.querySelector("canvas#neuro");
        const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
        const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
        let uniforms;
        const gl = initShader();
        setupEvents();
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        render();

        function initShader() {
            const vsSource = document.getElementById("vertShader").innerHTML;
            const fsSource = document.getElementById("fragShader").innerHTML;
            const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");
            
            function createShader(gl, sourceCode, type) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, sourceCode);
                gl.compileShader(shader);
                return shader;
            }
            
            const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
            const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);
            
            function createShaderProgram(gl, vertexShader, fragmentShader) {
                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                return program;
            }
            
            const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
            uniforms = getUniforms(shaderProgram);
            
            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for (let i = 0; i < uniformCount; i++) {
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }
            
            const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);
            const vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.useProgram(shaderProgram);
            const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            return gl;
        }

        function render() {
            const currentTime = performance.now();
            pointer.x += (pointer.tX - pointer.x) * .2;
            pointer.y += (pointer.tY - pointer.y) * .2;
            gl.uniform1f(uniforms.u_time, currentTime);
            gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
            gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }

        function resizeCanvas() {
            canvasEl.width = window.innerWidth * devicePixelRatio;
            canvasEl.height = window.innerHeight * devicePixelRatio;
            gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
            gl.viewport(0, 0, canvasEl.width, canvasEl.height);
        }

        function setupEvents() {
            window.addEventListener("pointermove", e => {
                updateMousePosition(e.clientX, e.clientY);
            });
            window.addEventListener("touchmove", e => {
                updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            });
            function updateMousePosition(eX, eY) {
                pointer.tX = eX;
                pointer.tY = eY;
            }
        }

        // Main interaction code
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');
            const dots = document.querySelectorAll('.progress-dot');
            const magneticElements = document.querySelectorAll('.magnetic');
            let currentIndex = 0;
            let isScrolling = false;
            let touchStartY = 0;

            updateActiveDot(currentIndex);

            magneticElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translate(0px, 0px)';
                });
            });

            window.addEventListener('wheel', (e) => {
                if (isScrolling) return;
                isScrolling = true;
                if (e.deltaY > 0) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                setTimeout(() => { isScrolling = false; }, 1200);
            });

            document.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
            });

            document.addEventListener('touchend', (e) => {
                if (isScrolling) return;
                const touchEndY = e.changedTouches[0].clientY;
                const diff = touchStartY - touchEndY;
                isScrolling = true;
                if (diff > 50) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else if (diff < -50) {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                setTimeout(() => { isScrolling = false; }, 1200);
            });

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    currentIndex = index;
                    changeSection(currentIndex);
                });
            });

            function changeSection(index) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                sections[index].classList.add('active');
                updateActiveDot(index);
                const reveals = sections[index].querySelectorAll('.reveal');
                reveals.forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add('active');
                    }, i * 150);
                });
                sections.forEach((section, i) => {
                    if (i !== index) {
                        const otherReveals = section.querySelectorAll('.reveal');
                        otherReveals.forEach(el => {
                            el.classList.remove('active');
                        });
                    }
                });
            }

            function updateActiveDot(index) {
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                dots[index].classList.add('active');
            }
        });
    
}
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
      

<canvas id="neuro"></canvas>

<nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
<div className="text-4xl font-work font-light tracking-wide magnetic glitch" data-text="NomadHub">NomadHub</div>
<div className="space-x-12 hidden md:block font-manrope text-lg">
<a className="magnetic hover:text-blue-400 transition-all duration-300 hover:scale-110" href="#">Destinations</a>
<a className="magnetic hover:text-blue-400 transition-all duration-300 hover:scale-110" href="#">Community</a>
<a className="magnetic hover:text-blue-400 transition-all duration-300 hover:scale-110" href="#">Resources</a>
</div>
<div className="md:hidden">
<button className="text-3xl magnetic">☰</button>
</div>
</nav>

<div className="progress-bar">
<div className="progress-dot" data-index="0"></div>
<div className="progress-dot" data-index="1"></div>
<div className="progress-dot" data-index="2"></div>
<div className="progress-dot" data-index="3"></div>
</div>

<section className="section active" data-index="0">
<div className="content-overlay container mx-auto h-full flex flex-col justify-center px-8">
<h1 className="font-work font-light heading-tight mb-8 reveal active glitch" data-text="Work From Anywhere" style={{fontSize: `clamp(96px, 12vw, 140px)`, lineHeight: `0.85`}}>
<span className="text-gradient">Work From</span><br />Anywhere
            </h1>
<p className="font-manrope text-gray-300 max-w-3xl reveal active" style={{fontSize: `24px`, lineHeight: `1.4`, transitionDelay: `0.2s`}}>
                Connect with a global community of digital nomads, discover remote-friendly destinations, and build your location-independent career.
            </p>
<div className="mt-16 reveal active" style={{transitionDelay: `0.4s`}}>
<button className="border-2 border-blue-400 px-12 py-4 font-manrope hover:bg-blue-400 hover:text-black transition-all duration-500 pulse-btn magnetic text-lg tracking-wide">
                    Start Your Journey
                </button>
</div>
</div>
</section>
<section className="section" data-index="1">
<div className="container mx-auto h-full flex flex-col justify-center px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-work font-light heading-tight mb-8 reveal glitch" data-text="Global Community" style={{fontSize: `clamp(64px, 8vw, 88px)`, lineHeight: `0.9`}}>Global Community</h2>
<p className="font-manrope text-gray-300 mb-12 reveal" style={{fontSize: `20px`, lineHeight: `1.5`, transitionDelay: `0.2s`}}>
                        Join thousands of remote workers who've already transformed their careers. Share experiences, find co-working spaces, and build meaningful connections worldwide.
                    </p>
<div className="reveal" style={{transitionDelay: `0.4s`}}>
<a className="underline font-manrope text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 inline-block text-lg magnetic" href="#">
                            Join Community →
                        </a>
</div>
</div>
<div className="reveal floating" style={{transitionDelay: `0.3s`}}>
<div className="h-96 lg:h-[500px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl interactive-card relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute inset-4 flex items-center justify-center text-6xl">🌍</div>
</div>
</div>
</div>
</div>
</section>
<section className="section" data-index="2">
<div className="container mx-auto h-full flex flex-col justify-center px-8">
<h2 className="font-work font-light heading-tight mb-16 text-center reveal glitch" data-text="Remote Solutions" style={{fontSize: `clamp(64px, 8vw, 88px)`, lineHeight: `0.9`}}>Remote Solutions</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="p-8 border-2 border-gray-600 rounded-2xl interactive-card reveal" style={{transitionDelay: `0.2s`}}>
<div className="text-6xl mb-6">🏠</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl">Co-living Spaces</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Discover verified co-living and co-working spaces in top nomad destinations with high-speed internet and vibrant communities.</p>
</div>
<div className="p-8 border-2 border-gray-600 rounded-2xl interactive-card reveal" style={{transitionDelay: `0.3s`}}>
<div className="text-6xl mb-6">💼</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl">Remote Jobs</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Access curated remote job opportunities from companies that truly embrace location independence and flexible work culture.</p>
</div>
<div className="p-8 border-2 border-gray-600 rounded-2xl interactive-card reveal" style={{transitionDelay: `0.4s`}}>
<div className="text-6xl mb-6">🛠️</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl">Digital Tools</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Essential resources, visa guides, and productivity tools to help you work efficiently from anywhere in the world.</p>
</div>
</div>
</div>
</section>
<section className="section" data-index="3">
<div className="container mx-auto h-full flex flex-col justify-center items-center px-8 text-center">
<h2 className="font-work font-light heading-tight mb-8 reveal glitch floating" data-text="Ready to Go Remote?" style={{fontSize: `clamp(64px, 8vw, 88px)`, lineHeight: `0.9`}}>Ready to Go Remote?</h2>
<p className="font-manrope text-gray-300 max-w-4xl mb-16 reveal" style={{fontSize: `22px`, lineHeight: `1.5`, transitionDelay: `0.2s`}}>
                Take the leap into location independence. Join our platform and get access to exclusive nomad resources, community support, and the tools you need to thrive anywhere.
            </p>
<div className="reveal" style={{transitionDelay: `0.4s`}}>
<button className="bg-blue-500 text-white px-16 py-5 font-manrope hover:bg-blue-400 transition-all duration-500 pulse-btn magnetic text-xl tracking-wide rounded-full">
                    Get Started Today
                </button>
</div>
</div>
</section>

<script id="vertShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `
}} />
<script id="fragShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;
        
        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }
        
        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;
            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2);
            }
            return res.x + res.y;
        }
        
        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;
            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);
            float t = .001 * u_time;
            vec3 color = vec3(0.);
            float noise = neuro_shape(uv, t, p);
            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));
            color = vec3(0.1, 0.2, 0.8);
            color += vec3(0.0, 0.1, 0.4) * sin(3.0 * u_scroll_progress + 1.5);
            color = color * noise;
            gl_FragColor = vec4(color, noise);
        }
    `
}} />


    </>
  );
}
