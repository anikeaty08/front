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

        // Initialize Lucide icons
        lucide.createIcons();

        // Particles.js configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: ["#3b82f6", "#8b5cf6", "#06b6d4"] },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 2, random: true },
                line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.1, width: 1 },
                move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        // COBE Globe
        let phi = 0;
        const globe = createGlobe(document.getElementById("cobe"), {
            devicePixelRatio: 2,
            width: 384,
            height: 384,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.05 },
                { location: [35.6762, 139.6503], size: 0.08 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            },
        });

        // Enhanced Three.js shader
        const canvas = document.getElementById('shader-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

        const fragmentShader = `
            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            float noise(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float fbm(vec2 p) {
                float value = 0.0;
                float amplitude = 0.5;
                for(int i = 0; i < 6; i++) {
                    value += amplitude * noise(p);
                    p *= 2.0;
                    amplitude *= 0.5;
                }
                return value;
            }

            float quantumField(vec2 p, float time) {
                vec2 q = vec2(fbm(p + vec2(0.0, 0.0)),
                              fbm(p + vec2(5.2, 1.3)));
                vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7 - time * 0.15, 9.2)),
                              fbm(p + 4.0 * q + vec2(8.3 - time * 0.126, 2.8)));
                return fbm(p + 4.0 * r);
            }

            vec3 palette(float t) {
                vec3 a = vec3(0.5, 0.5, 0.5);
                vec3 b = vec3(0.5, 0.5, 0.5);
                vec3 c = vec3(1.0, 1.0, 1.0);
                vec3 d = vec3(0.263, 0.416, 0.557);
                return a + b * cos(6.28318 * (c * t + d));
            }

            void main() {
                vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;
                vec2 mouse = (iMouse.xy * 2.0 - iResolution.xy) / iResolution.y;
                
                float field = quantumField(uv * 2.0, iTime);
                float field2 = quantumField(uv * 3.0 + mouse * 0.1, iTime * 1.3);
                
                vec3 color = palette(field + field2);
                color = mix(color, vec3(0.1, 0.2, 0.4), 0.7);
                
                // Add energy waves
                float wave1 = sin(length(uv) * 10.0 - iTime * 3.0) * 0.5 + 0.5;
                float wave2 = sin(length(uv + mouse * 0.1) * 8.0 - iTime * 2.0) * 0.5 + 0.5;
                
                color += vec3(0.1, 0.3, 0.8) * wave1 * 0.1;
                color += vec3(0.8, 0.2, 0.6) * wave2 * 0.1;
                
                // Vignette
                float vignette = 1.0 - length(uv) * 0.3;
                color *= vignette;
                
                gl_FragColor = vec4(color * 0.4, 1.0);
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: fragmentShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2() },
                iMouse: { value: new THREE.Vector2() }
            }
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function resizeRenderer() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        }

        function handleMouseMove(event) {
            material.uniforms.iMouse.value.set(event.clientX, window.innerHeight - event.clientY);
        }

        window.addEventListener('resize', resizeRenderer);
        window.addEventListener('mousemove', handleMouseMove);
        resizeRenderer();

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value = performance.now() / 1000;
            renderer.render(scene, camera);
        }
        animate();

        // Smooth scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in, .rotate-in').forEach(el => {
            observer.observe(el);
        });

        // Typing effect for code
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';
            const interval = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
        }

        // Interactive hover effects
        document.querySelectorAll('.glass').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-2px)';
                element.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.15)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
                element.style.boxShadow = 'none';
            });
        });

        // Add dynamic stats counter
        function animateValue(element, start, end, duration) {
            const range = end - start;
            const minTimer = 50;
            let stepTime = Math.abs(Math.floor(duration / range));
            stepTime = Math.max(stepTime, minTimer);
            
            const startTime = new Date().getTime();
            const endTime = startTime + duration;
            
            function run() {
                const now = new Date().getTime();
                const remaining = Math.max((endTime - now) / duration, 0);
                const value = Math.round(end - (remaining * range));
                element.innerHTML = value.toLocaleString();
                
                if (value !== end) {
                    setTimeout(run, stepTime);
                }
            }
            run();
        }

        // Initialize counter animations when stats section comes into view
        const statsSection = document.querySelector('section:last-of-type');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stats = entry.target.querySelectorAll('.mono');
                    if (stats[0] && !stats[0].classList.contains('animated')) {
                        stats[0].classList.add('animated');
                        // Animate 2.4M+ counter
                        animateValue(stats[0], 0, 2400000, 2000);
                    }
                }
            });
        }, { threshold: 0.5 });

        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
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
      

<div className="fixed inset-0 -z-20" id="particles-js"><canvas className="particles-js-canvas-el" height="2096" style={{width: `100%`, height: `100%`}} width="2422"></canvas></div>

<canvas className="fixed inset-0 w-full h-full -z-10" id="shader-canvas"></canvas>

<nav className="relative z-50 flex items-center justify-between p-6 glass border-b border-gray-800/30 slide-left">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-hexagon w-5 h-5 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="text-xl font-semibold tracking-tight">Nexus</div>
<div className="px-2 py-1 text-xs mono bg-green-500/20 text-green-300 rounded-md border border-green-500/30">
                v2.4.1
            </div>
</div>
<div className="hidden lg:flex items-center space-x-8">
<div className="flex items-center space-x-6">
<a className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2" href="#">
<svg className="lucide lucide-box w-4 h-4" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                    Products
                </a>
<a className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2" href="#">
<svg className="lucide lucide-layers-3 w-4 h-4" data-lucide="layers-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                    Solutions
                </a>
<a className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2" href="#">
<svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                    Developers
                </a>
<a className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2" href="#">
<svg className="lucide lucide-building w-4 h-4" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
                    Company
                </a>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm text-gray-400 mono">System Online</span>
</div>
</div>
<div className="flex items-center space-x-3">
<button className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200 glow-blue">
                Launch Console
            </button>
</div>
</nav>

<section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="space-y-6">
<div className="flex items-center space-x-3 fade-in delay-100">
<div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30">
<span className="mono">⚡ Now Available</span>
</div>
<div className="flex space-x-2">
<div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
<div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: `0.5s`}}></div>
<div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: `1s`}}></div>
</div>
</div>
<h1 className="lg:text-7xl leading-tight fade-in delay-200 text-5xl font-medium tracking-tighter">
                        Build with
                        <span className="block bg-clip-text font-medium text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Quantum Shaders</span>
</h1>
<p className="text-xl text-gray-300 leading-relaxed max-w-xl fade-in delay-300">
                        Experience the next dimension of visual computing with our revolutionary real-time ray-tracing shader technology. 
                        <span className="text-blue-400 font-medium">GPU-accelerated</span> and 
                        <span className="text-purple-400 font-medium">infinitely scalable</span>.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 fade-in delay-400">
<button className="group bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 glow-blue">
<svg className="lucide lucide-play w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span>Watch Demo</span>
<div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
</button>
<button className="group glass-light border border-gray-600 text-white px-8 py-4 rounded-xl font-medium hover:border-gray-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3">
<svg className="lucide lucide-terminal w-5 h-5 group-hover:rotate-12 transition-transform" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="mono">npx quantum-nexus</span>
</button>
</div>
<div className="flex items-center space-x-8 pt-4 fade-in delay-500">
<div className="text-center">
<div className="text-2xl font-semibold text-blue-400 mono">60fps</div>
<div className="text-sm text-gray-400">Real-time</div>
</div>
<div className="w-px h-8 bg-gray-600"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-purple-400 mono">∞</div>
<div className="text-sm text-gray-400">Ray Sources</div>
</div>
<div className="w-px h-8 bg-gray-600"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-cyan-400 mono">GPU</div>
<div className="text-sm text-gray-400">Accelerated</div>
</div>
</div>
</div>

<div className="relative scale-in delay-600">
<div className="relative">

<div className="w-96 h-96 mx-auto relative floating">
<canvas className="w-full h-full" id="cobe"></canvas>
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
</div>

<div className="absolute -top-8 -right-4 glass p-4 rounded-xl border border-gray-700 floating-delayed">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<span className="mono text-sm">Rendering: 4K</span>
</div>
</div>
<div className="absolute -bottom-4 -left-8 glass p-4 rounded-xl border border-gray-700 floating">
<div className="flex items-center gap-3">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="mono text-sm">GPU: 98% Util</span>
</div>
</div>
<div className="absolute top-1/2 -right-16 glass p-3 rounded-xl border border-gray-700 floating-delayed">
<div className="mono text-xs text-cyan-400">vec3(0.4, 0.8, 1.0)</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 fade-in delay-700">
<h2 className="text-4xl font-medium tracking-tight mb-4">
                    Write shaders like <span className="text-blue-400">poetry</span>
</h2>
<p className="text-gray-400 text-lg">
                    Intuitive syntax meets unlimited creative potential
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="code-window rounded-2xl overflow-hidden slide-left delay-800">
<div className="flex items-center justify-between p-4 border-b border-gray-700">
<div className="flex items-center space-x-3">
<div className="flex space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<span className="mono text-sm text-gray-400">quantum-shader.glsl</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-copy w-4 h-4 text-gray-400 hover:text-white cursor-pointer" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
<svg className="lucide lucide-external-link w-4 h-4 text-gray-400 hover:text-white cursor-pointer" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
</div>
<div className="p-6 mono text-sm leading-relaxed">
<pre><span className="text-purple-400">uniform</span> <span className="text-blue-400">vec2</span> <span className="text-white">resolution</span>;
<span className="text-purple-400">uniform</span> <span className="text-blue-400">float</span> <span className="text-white">time</span>;

<span className="text-blue-400">float</span> <span className="text-green-400">quantumRay</span>(<span className="text-blue-400">vec2</span> <span className="text-white">pos</span>, <span className="text-blue-400">float</span> <span className="text-white">phase</span>) {"{"}
    <span className="text-blue-400">float</span> <span className="text-white">wave</span> = <span className="text-green-400">sin</span>(<span className="text-white">phase</span> + <span className="text-white">time</span> * <span className="text-yellow-400">2.0</span>);
    <span className="text-purple-400">return</span> <span className="text-green-400">pow</span>(<span className="text-white">wave</span>, <span className="text-yellow-400">3.0</span>) * <span className="text-green-400">length</span>(<span className="text-white">pos</span>);
{"}"}

<span className="text-purple-400">void</span> <span className="text-green-400">main</span>() {"{"}
    <span className="text-blue-400">vec2</span> <span className="text-white">uv</span> = <span className="text-white">gl_FragCoord</span>.<span className="text-cyan-400">xy</span> / <span className="text-white">resolution</span>;
    <span className="text-blue-400">vec3</span> <span className="text-white">color</span> = <span className="text-blue-400">vec3</span>(<span className="text-green-400">quantumRay</span>(<span className="text-white">uv</span>, <span className="text-yellow-400">3.14159</span>));
    
    <span className="text-white">gl_FragColor</span> = <span className="text-blue-400">vec4</span>(<span className="text-white">color</span>, <span className="text-yellow-400">1.0</span>);
{"}"}</pre>
</div>
</div>

<div className="space-y-6 slide-right delay-900">
<div className="glass p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-cpu w-6 h-6 text-blue-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><rect height="16" rx="2" width="16"></rect><rect height="8" rx="1" width="8"></rect></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-2">GPU Compute Shaders</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                                    Harness parallel processing power with our optimized compute pipeline
                                </p>
<div className="flex items-center gap-2 mt-3">
<span className="mono text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">HLSL</span>
<span className="mono text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">GLSL</span>
<span className="mono text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">WGSL</span>
</div>
</div>
</div>
</div>
<div className="glass p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layers-3 w-6 h-6 text-purple-400" data-lucide="layers-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-2">Ray Marching Engine</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                                    Advanced SDF-based rendering with real-time global illumination
                                </p>
<div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: `87%`}}></div>
</div>
<div className="mono text-xs text-gray-400 mt-1">Performance: 87%</div>
</div>
</div>
</div>
<div className="glass p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sparkles w-6 h-6 text-cyan-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Neural Denoising</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                                    AI-powered noise reduction for crystal-clear real-time output
                                </p>
<div className="flex items-center gap-2 mt-3">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="mono text-xs text-green-300">ML Model Active</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6">
<div className="max-w-4xl mx-auto">
<div className="glass rounded-3xl p-12 border border-gray-700 fade-in delay-1000">
<div className="grid md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl font-semibold text-blue-400 mono mb-2">2.4M+</div>
<div className="text-gray-400 text-sm">Shader Operations/sec</div>
</div>
<div>
<div className="text-4xl font-semibold text-purple-400 mono mb-2">∞</div>
<div className="text-gray-400 text-sm">Concurrent Rays</div>
</div>
<div>
<div className="text-4xl font-semibold text-cyan-400 mono mb-2">60fps</div>
<div className="text-gray-400 text-sm">Real-time Rendering</div>
</div>
<div>
<div className="text-4xl font-semibold text-green-400 mono mb-2">0.01ms</div>
<div className="text-gray-400 text-sm">Render Latency</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
