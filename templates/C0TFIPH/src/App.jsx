import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // WebGL Aurora Background
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float iTime;
                uniform vec2 iResolution;

                #define NUM_OCTAVES 3

                float rand(vec2 n) { 
                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
                }

                float noise(vec2 p){
                    vec2 ip = floor(p);
                    vec2 u = fract(p);
                    u = u*u*(3.0-2.0*u);
                    
                    float res = mix(
                        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                    return res*res;
                }

                float fbm(vec2 x) {
                    float v = 0.0;
                    float a = 0.3;
                    vec2 shift = vec2(100);    
                    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                    for (int i = 0; i < NUM_OCTAVES; ++i) {
                        v += a * noise(x);
                        x = rot * x * 2.0 + shift;
                        a *= 0.4;
                    }
                    return v;
                }

                void main() {
                    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                    
                    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                    vec2 v;
                    vec4 o = vec4(0.0);
                    
                    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                    
                    for(float i = 0.0; i++ < 35.0;)
                    {
                        v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                        
                        float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                        
                        vec4 auroraColors = vec4(
                            0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
                            0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
                            0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
                            1.0
                        );
                        
                        vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                        
                        float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                        o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                    }
                    
                    o = tanh(pow(o / 100.0, vec4(1.6)));
                    gl_FragColor = o * 1.5;
                }
            `
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value += 0.016;
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        });

        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="relative z-10 w-full px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
<i className="fas fa-infinity text-white text-sm"></i>
</div>
<span className="text-white font-medium text-lg geist-font">Aurora</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-white transition-colors inter-font text-sm" href="#">Features</a>
<a className="text-gray-300 hover:text-white transition-colors inter-font text-sm" href="#">Pricing</a>
<a className="text-gray-300 hover:text-white transition-colors inter-font text-sm" href="#">About</a>
<a className="text-gray-300 hover:text-white transition-colors inter-font text-sm" href="#">Contact</a>
</div>
<button className="glass-button px-4 py-2 rounded-lg text-white text-sm font-medium inter-font">
                Sign In
            </button>
</div>
</nav>

<div className="relative z-10 divider"></div>

<div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
<div className="max-w-6xl mx-auto text-center">

<div className="mb-8 float-animation">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] geist-font tracking-tight">
                    The Future of
                    <span className="gradient-text block tracking-tight">AI Innovation</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed inter-font font-normal">
                    Harness the power of advanced artificial intelligence with our cutting-edge platform. 
                    Transform your ideas into reality with unprecedented speed and precision.
                </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<button className="primary-button px-6 py-3 text-white rounded-lg font-medium text-sm min-w-40 inter-font">
                    Get Started Free
                </button>
<button className="secondary-button px-6 py-3 rounded-lg text-white font-medium text-sm min-w-40 inter-font">
<i className="fas fa-play mr-2"></i>
                    Watch Demo
                </button>
</div>

<div className="divider mb-16"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
<div className="glass-card rounded-2xl p-6 text-center">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center mx-auto mb-4">
<i className="fas fa-rocket text-blue-400 text-xl"></i>
</div>
<h3 className="text-lg font-light text-white mb-2 geist-font tracking-tight">Lightning Fast</h3>
<p className="text-gray-300 text-sm inter-font font-normal">Process millions of requests with ultra-low latency and high throughput.</p>
</div>
<div className="glass-card rounded-2xl p-6 text-center">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 flex items-center justify-center mx-auto mb-4">
<i className="fas fa-shield-alt text-indigo-400 text-xl"></i>
</div>
<h3 className="text-lg font-light text-white mb-2 geist-font tracking-tight">Enterprise Security</h3>
<p className="text-gray-300 text-sm inter-font font-normal">Bank-grade security with end-to-end encryption and compliance.</p>
</div>
<div className="glass-card rounded-2xl p-6 text-center">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mx-auto mb-4">
<i className="fas fa-brain text-purple-400 text-xl"></i>
</div>
<h3 className="text-lg font-light text-white mb-2 geist-font tracking-tight">Smart AI</h3>
<p className="text-gray-300 text-sm inter-font font-normal">Advanced machine learning models that adapt and learn from your data.</p>
</div>
</div>

<div className="divider mb-16"></div>

<div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-light text-white mb-1 geist-font tracking-tight">10M+</div>
<div className="text-gray-400 text-sm inter-font font-normal">API Calls Daily</div>
</div>
<div className="hidden sm:block vertical-divider h-12"></div>
<div>
<div className="text-3xl md:text-4xl font-light text-white mb-1 geist-font tracking-tight">99.9%</div>
<div className="text-gray-400 text-sm inter-font font-normal">Uptime SLA</div>
</div>
<div className="hidden sm:block vertical-divider h-12"></div>
<div>
<div className="text-3xl md:text-4xl font-light text-white mb-1 geist-font tracking-tight">500+</div>
<div className="text-gray-400 text-sm inter-font font-normal">Enterprise Clients</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
<div className="flex flex-col items-center">
<span className="text-sm mb-2 inter-font font-normal">Discover More</span>
<i className="fas fa-chevron-down animate-bounce"></i>
</div>
</div>
</div>

    </>
  );
}
