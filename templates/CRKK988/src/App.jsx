import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                iMouse: { value: new THREE.Vector2(0.5, 0.5) }
            },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime;
                uniform vec2 iResolution;
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
                
                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    vec2 mouse = iMouse * 2.0 - 1.0;
                    
                    vec2 p = uv * 3.0 + mouse * 0.1;
                    float time = iTime * 0.3;
                    
                    vec3 color = vec3(0.0);
                    
                    for(float i = 1.0; i <= 3.0; i++) {
                        vec2 newp = p + vec2(sin(time * 0.8 + i), cos(time * 0.6 + i)) * 0.5;
                        float noise1 = fbm(newp + time * 0.4);
                        float noise2 = fbm(newp * 2.0 - time * 0.3);
                        
                        float wave = sin(newp.x * 2.0 + time + noise1 * 3.0) * 0.5 + 0.5;
                        wave *= sin(newp.y * 1.5 + time * 0.7 + noise2 * 2.0) * 0.5 + 0.5;
                        
                        vec3 auroraColor = vec3(
                            0.4 + 0.3 * sin(time + i * 2.0),
                            0.6 + 0.4 * cos(time * 0.8 + i * 1.5),
                            0.8 + 0.2 * sin(time * 1.2 + i)
                        );
                        
                        color += auroraColor * wave * (0.3 + 0.2 * sin(time + i)) / (i * 0.8);
                    }
                    
                    color *= 0.4;
                    color = pow(color, vec3(1.2));
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = 1.0 - (e.clientY / window.innerHeight);
        });

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value += 0.01;
            material.uniforms.iMouse.value.set(mouseX, mouseY);
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        });

        animate();
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas height="1089" style={{display: 'block', width: '1379px', height: '1089px'}} width="1379"></canvas><canvas height="1089" style={{display: 'block', width: '1379px', height: '1089px'}} width="1379"></canvas><canvas height="1089" style={{display: 'block', width: '1379px', height: '1089px'}} width="1379"></canvas><canvas height="1089" style={{display: 'block', width: '1379px', height: '1089px'}} width="1379"></canvas><canvas height="1089" style={{display: 'block', width: '1379px', height: '1089px'}} width="1379"></canvas><canvas height="1089" style={{display: 'block', width: '1379px', height: '1089px'}} width="1379"></canvas>

<nav className="relative z-10 w-full px-4 sm:px-6 py-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl glass-surface flex items-center justify-center pulse-glow">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-medium text-white">Flux Studio</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#services">Services</a>
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#work">Work</a>
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#about">About</a>
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#contact">Contact</a>
</div>
<button className="glass-surface glass-hover px-6 py-2.5 rounded-xl text-white text-sm font-medium">
                Start Project
            </button>
</div>
</nav>

<div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
<div className="max-w-6xl mx-auto text-center">
<div className="mb-8">
<h1 className="sm:text-6xl lg:text-7xl leading-none text-5xl font-normal text-white tracking-tighter mb-6">
                    We Design
                    <span className="aurora-text block text-[72px] italic tracking-normal font-instrument-serif pt-2 pb-2">Digital Experiences</span>
                    That Inspire
                </h1>
<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                    Flux Studio creates cutting-edge digital products, brand identities, and immersive experiences 
                    that push the boundaries of design and technology.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
<button className="glass-surface glass-hover px-8 py-4 text-white rounded-xl font-medium text-sm min-w-48 pulse-glow">
                    View Our Work
                </button>
<button className="glass-surface glass-hover px-8 py-4 text-white rounded-xl font-medium text-sm min-w-48 flex items-center justify-center gap-2">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    Watch Reel
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
<div className="service-card rounded-2xl p-8 text-left">
<div className="w-12 h-12 rounded-xl glass-surface flex items-center justify-center mb-6">
<svg className="lucide lucide-palette w-6 h-6 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Brand Design</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Complete brand identity systems that capture your essence and resonate with your audience.
                    </p>
<div className="flex items-center gap-2 text-gray-400 text-sm">
<span>Identity</span>
<span>•</span>
<span>Guidelines</span>
<span>•</span>
<span>Assets</span>
</div>
</div>
<div className="service-card rounded-2xl p-8 text-left">
<div className="w-12 h-12 rounded-xl glass-surface flex items-center justify-center mb-6">
<svg className="lucide lucide-smartphone w-6 h-6 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Digital Products</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-4">
                        User-centered web and mobile applications that solve problems and delight users.
                    </p>
<div className="flex items-center gap-2 text-gray-400 text-sm">
<span>UX/UI</span>
<span>•</span>
<span>Development</span>
<span>•</span>
<span>Testing</span>
</div>
</div>
<div className="service-card rounded-2xl p-8 text-left">
<div className="w-12 h-12 rounded-xl glass-surface flex items-center justify-center mb-6">
<svg className="lucide lucide-box w-6 h-6 text-white" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">3D &amp; Motion</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Immersive 3D experiences and motion graphics that bring your vision to life.
                    </p>
<div className="flex items-center gap-2 text-gray-400 text-sm">
<span className="">3D Design</span>
<span>•</span>
<span>Animation</span>
<span>•</span>
<span>WebGL</span>
</div>
</div>
</div>
<div className="divider-gradient mb-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div className="text-center">
<div className="text-3xl sm:text-4xl font-light text-white mb-2 tracking-tight">150+</div>
<div className="text-gray-400 text-sm font-normal">Projects Delivered</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-light text-white mb-2 tracking-tight">50+</div>
<div className="text-gray-400 text-sm font-normal">Happy Clients</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-light text-white mb-2 tracking-tight">8+</div>
<div className="text-gray-400 text-sm font-normal">Years Experience</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-light text-white mb-2 tracking-tight">15</div>
<div className="text-gray-400 text-sm font-normal">Team Members</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
<svg className="lucide lucide-chevron-down w-6 h-6" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>


    </>
  );
}
