import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    


        class SilkShader {
            constructor(container) {
                this.container = container;
                this.scene = new THREE.Scene();
                this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
                this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                this.clock = new THREE.Clock();
                
                this.init();
                this.createShaderMaterial();
                this.createMesh();
                this.animate();
                this.handleResize();
                
                window.addEventListener('resize', () => this.handleResize());
            }
            
            init() {
                this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.container.appendChild(this.renderer.domElement);
            }
            
            hexToNormalizedRGB(hex) {
                hex = hex.replace("#", "");
                return new THREE.Vector3(
                    parseInt(hex.slice(0, 2), 16) / 255,
                    parseInt(hex.slice(2, 4), 16) / 255,
                    parseInt(hex.slice(4, 6), 16) / 255
                );
            }
            
            createShaderMaterial() {
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
                    uniform vec3 uColor;
                    uniform float uSpeed;
                    uniform float uScale;
                    uniform float uRotation;
                    uniform float uNoiseIntensity;
                    
                    const float e = 2.71828182845904523536;
                    
                    float noise(vec2 texCoord) {
                        float G = e;
                        vec2 r = (G * sin(G * texCoord));
                        return fract(r.x * r.y * (1.0 + texCoord.x));
                    }
                    
                    vec2 rotateUvs(vec2 uv, float angle) {
                        float c = cos(angle);
                        float s = sin(angle);
                        mat2 rot = mat2(c, -s, s, c);
                        return rot * uv;
                    }
                    
                    void main() {
                        float rnd = noise(gl_FragCoord.xy);
                        vec2 uv = rotateUvs(vUv * uScale, uRotation);
                        vec2 tex = uv * uScale;
                        float tOffset = uSpeed * uTime;
                        
                        tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
                        
                        float pattern = 0.6 +
                                      0.4 * sin(5.0 * (tex.x + tex.y +
                                                      cos(3.0 * tex.x + 5.0 * tex.y) +
                                                      0.02 * tOffset) +
                                              sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
                        
                        vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
                        col.a = 0.8;
                        gl_FragColor = col;
                    }
                `;
                
                this.uniforms = {
                    uTime: { value: 0 },
                    uSpeed: { value: 2 },
                    uScale: { value: 1.5 },
                    uNoiseIntensity: { value: 1.2 },
                    uColor: { value: this.hexToNormalizedRGB("#6366F1") },
                    uRotation: { value: 0.5 }
                };
                
                this.material = new THREE.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader,
                    fragmentShader,
                    transparent: true
                });
            }
            
            createMesh() {
                const geometry = new THREE.PlaneGeometry(2, 2);
                this.mesh = new THREE.Mesh(geometry, this.material);
                this.scene.add(this.mesh);
            }
            
            handleResize() {
                this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
            }
            
            animate() {
                requestAnimationFrame(() => this.animate());
                
                const delta = this.clock.getDelta();
                this.uniforms.uTime.value += 0.1 * delta;
                
                this.renderer.render(this.scene, this.camera);
            }
        }
        
        // Initialize the shader when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('shader-canvas');
            new SilkShader(container);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-lg font-semibold">Meng To</div>
<div className="hidden md:flex space-x-8 text-sm">
<a className="text-gray-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 min-h-screen flex items-center overflow-hidden">
<div id="shader-canvas"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="max-w-3xl">
<h1 className="md:text-6xl leading-tight text-5xl font-semibold tracking-tighter mb-8">
                    Product designer crafting thoughtful digital experiences
                </h1>
<p className="leading-relaxed text-xl text-gray-300 mb-8">
                    I help companies build products that users love through research, strategy, and elegant design solutions.
                </p>
<div className="flex space-x-4">
<button className="hover:bg-gray-100 transition-colors text-black bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg pt-3 pr-6 pb-3 pl-6">
                        View my work
                    </button>
<button className="border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-600 transition-colors backdrop-blur-sm">
                        Get in touch
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-900" id="work">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold mb-16">Selected work</h2>
<div className="space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-800">
<div className="w-32 h-32 bg-blue-500 rounded-xl opacity-80"></div>
</div>
</div>
<div className="">
<h3 className="text-2xl font-semibold mb-4">Analytics Dashboard</h3>
<p className="text-gray-400 mb-6 leading-relaxed">
                            Redesigned the core analytics experience for 50k+ users, resulting in 40% increase in daily active usage and improved user satisfaction scores.
                        </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Product Design</span>
<span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">User Research</span>
<span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Prototyping</span>
</div>
<a className="text-blue-400 hover:text-blue-300 font-medium" href="#">View case study →</a>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<h3 className="text-2xl font-semibold mb-4">Mobile Banking App</h3>
<p className="text-gray-400 mb-6 leading-relaxed">
                            Led the design of a new mobile banking experience focusing on accessibility and security, serving over 1M users across multiple markets.
                        </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile Design</span>
<span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Design System</span>
<span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Strategy</span>
</div>
<a className="text-blue-400 hover:text-blue-300 font-medium" href="#">View case study →</a>
</div>
<div className="order-1 md:order-2">
<div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-800">
<div className="w-20 h-36 bg-green-500 rounded-lg opacity-80"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-800/30" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold mb-8">About me</h2>
<div className="prose prose-lg text-gray-400">
<p className="mb-6">
                        I'm a product designer with 8 years of experience helping startups and established companies create meaningful digital experiences.
                    </p>
<p className="mb-6">
                        Currently, I'm leading design at TechCorp, where I work on products used by millions of people worldwide. Previously, I was at StartupXYZ and DesignStudio.
                    </p>
<p>
                        When I'm not designing, you can find me exploring new coffee shops, reading about behavioral psychology, or experimenting with film photography.
                    </p>
</div>
</div>
<div className="space-y-8">
<div className="">
<h3 className="font-semibold mb-3">Experience</h3>
<div className="space-y-3 text-gray-400">
<div>Senior Product Designer at TechCorp (2021-Present)</div>
<div>Product Designer at StartupXYZ (2019-2021)</div>
<div>Design Lead at DesignStudio (2016-2019)</div>
</div>
</div>
<div className="">
<h3 className="font-semibold mb-3">Recognition</h3>
<div className="space-y-3 text-gray-400">
<div>Awwwards Site of the Day (2023)</div>
<div>Design Excellence Award (2022)</div>
<div>UX Design Awards Finalist (2021)</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-800 py-12 px-6 bg-gray-900">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="font-semibold mb-4 md:mb-0">Meng To</div>
<div className="flex space-x-6 text-gray-400">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</footer>


    </>
  );
}
