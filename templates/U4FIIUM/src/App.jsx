import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'manrope': ['Manrope', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif'],
                        'satoshi': ['Satoshi', 'sans-serif']
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'data-stream': 'dataStream 3s linear infinite',
                        'schema-pulse': 'schemaPulse 4s ease-in-out infinite',
                        'fade-in-up': 'fadeInUp 1s ease-out',
                        'fade-in-delay': 'fadeInUp 1s ease-out 0.3s both',
                        'fade-in-delay-2': 'fadeInUp 1s ease-out 0.6s both',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        dataStream: {
                            '0%': { strokeDashoffset: 20 },
                            '100%': { strokeDashoffset: 0 }
                        },
                        schemaPulse: {
                            '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                            '50%': { transform: 'scale(1.02)', opacity: 1 }
                        },
                        fadeInUp: {
                            '0%': { opacity: 0, transform: 'translateY(30px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        }
                    }
                }
            }
        }
    


        // Aurora Comet Background Animation
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('aurora-canvas') });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Shader material for aurora comets
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
                        
                        // Indigo/Blue/Cyan aurora colors
                        vec4 auroraColors = vec4(
                            0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),  // Red component (low for blue tones)
                            0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),  // Green component
                            0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),  // Blue component (dominant)
                            1.0
                        );
                        
                        vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                        
                        // Much thinner comets
                        float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                        o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                    }
                    
                    // 50% brighter - reduced divisor from 150.0 to 100.0
                    o = tanh(pow(o / 100.0, vec4(1.6)));
                    gl_FragColor = o * 1.5; // Additional brightness boost
                }
            `
        });

        // Create plane geometry
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value += 0.016;
            renderer.render(scene, camera);
        }

        // Handle window resize
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
      

<canvas id="aurora-canvas"></canvas>

<nav className="fixed top-0 left-0 right-0 z-20 p-6 lg:px-16 xl:px-24 2xl:px-32">
<div className="max-w-8xl mx-auto">
<div className="glass rounded-2xl border border-white/10 px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center">
<span className="text-white font-manrope font-bold text-xl tracking-wider">ZORA</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-white/80 hover:text-white transition-colors text-sm font-inter" href="#">Features</a>
<a className="text-white/80 hover:text-white transition-colors text-sm font-inter" href="#">Solutions</a>
<a className="text-white/80 hover:text-white transition-colors text-sm font-inter" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors text-sm font-inter" href="#">Docs</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden sm:block text-white/80 hover:text-white transition-colors text-sm font-inter" href="#">Sign In</a>
<a className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm font-inter" href="#">
                            Get Started
                        </a>
</div>

<button className="md:hidden text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-24">
<div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

<div className="text-center lg:text-left space-y-8 animate-fade-in-up">
<div className="space-y-6">
<span className="inline-block px-4 py-2 glass text-white/70 eyebrow-stroke rounded-full text-base font-medium border border-indigo-400/30 animate-fade-in-delay font-inter">
                        Database Management Platform
                    </span>
<h1 className="text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] font-normal font-satoshi text-white leading-none tracking-tight">
<span className="text-white">The Future of</span>
<br/>
<span className="schema-gradient">
                            Schema Management
                        </span>
<br/>
<span className="text-white">Is Here</span>
</h1>
<p className="text-base lg:text-lg xl:text-xl text-white/70 leading-relaxed max-w-xl xl:max-w-2xl animate-fade-in-delay font-inter">
                        Visualize, evolve, and sync your entire database infrastructure powered by AI and designed for scale.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
<a className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base font-inter" href="#">
                        Get Started
                    </a>
<a className="px-8 py-4 gradient-stroke text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-base font-inter" href="#">
                        View Demo
                    </a>
</div>

<div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-delay-2">
<div className="text-center">
<div className="text-2xl lg:text-3xl font-light font-manrope text-white tracking-tight">99.9%</div>
<div className="text-white/60 text-sm font-inter">Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl lg:text-3xl font-light font-manrope text-white tracking-tight">10M+</div>
<div className="text-white/60 text-sm font-inter">Queries/sec</div>
</div>
<div className="text-center">
<div className="text-2xl lg:text-3xl font-light font-manrope text-white tracking-tight">500+</div>
<div className="text-white/60 text-sm font-inter">Enterprises</div>
</div>
</div>
</div>

<div className="flex justify-center lg:justify-end animate-fade-in-delay">
<div className="relative w-full max-w-lg xl:max-w-xl">
<div className="hero-glow absolute inset-0 rounded-3xl"></div>
<div className="relative glass overflow-hidden rounded-3xl border border-white/10 backdrop-blur-3xl">

<div className="p-8 xl:p-10">
<div className="w-full h-80 xl:h-96 rounded-2xl gradient-border inner-glow overflow-hidden relative">

<div className="absolute inset-0 opacity-10">
<div className="w-full h-full animate-pulse" style={{backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 400 300">
<defs>
<lineargradient id="connectionGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '0.8'}}></stop>
<stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0.8'}}></stop>
</lineargradient>
</defs>
<g fill="none" stroke="url(#connectionGradient)" strokeWidth="2">
<path className="connector" d="M100,80 L180,80 L180,120 L260,120"></path>
<path className="connector" d="M260,120 L300,120 L300,80 L340,80"></path>
<path className="connector" d="M180,120 L180,160 L260,160"></path>
<path className="connector" d="M260,160 L300,160 L300,200 L260,200"></path>
<circle cx="100" cy="80" fill="#4f46e5" r="4"></circle>
<circle cx="260" cy="120" fill="#3b82f6" r="4"></circle>
<circle cx="340" cy="80" fill="#8b5cf6" r="4"></circle>
<circle cx="260" cy="160" fill="#f59e0b" r="4"></circle>
<circle cx="260" cy="200" fill="#ef4444" r="4"></circle>
</g>
</svg>

<div className="absolute inset-0 w-full h-full">
<div className="absolute top-6 left-1/2 transform -translate-x-1/2 animate-schema-pulse">
<div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-indigo-400/30 inner-glow">
<svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
</svg>
</div>
</div>

<div className="absolute left-6 top-16 table-float">
<div className="w-20 h-16 glass rounded-xl gradient-border shadow-2xl overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500/30 to-blue-500/30 text-white text-xs px-2 py-1 font-semibold border-b border-white/20 font-inter">users</div>
<div className="px-2 py-1 space-y-1">
<div className="flex items-center space-x-1">
<div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
<div className="h-1 w-8 bg-white/40 rounded"></div>
</div>
<div className="h-1 w-6 bg-white/30 rounded"></div>
<div className="h-1 w-10 bg-white/30 rounded"></div>
</div>
</div>
</div>
<div className="absolute right-6 top-16 table-float">
<div className="w-20 h-16 glass rounded-xl gradient-border shadow-2xl overflow-hidden">
<div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white text-xs px-2 py-1 font-semibold border-b border-white/20 font-inter">orders</div>
<div className="px-2 py-1 space-y-1">
<div className="flex items-center space-x-1">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
<div className="h-1 w-8 bg-white/40 rounded"></div>
</div>
<div className="h-1 w-5 bg-white/30 rounded"></div>
<div className="h-1 w-7 bg-white/30 rounded"></div>
</div>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 top-36 table-float">
<div className="w-20 h-16 glass rounded-xl gradient-border shadow-2xl overflow-hidden">
<div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white text-xs px-2 py-1 font-semibold border-b border-white/20 font-inter">products</div>
<div className="px-2 py-1 space-y-1">
<div className="flex items-center space-x-1">
<div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
<div className="h-1 w-8 bg-white/40 rounded"></div>
</div>
<div className="h-1 w-8 bg-white/30 rounded"></div>
<div className="h-1 w-6 bg-white/30 rounded"></div>
</div>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 table-float">
<div className="w-20 h-16 glass rounded-xl gradient-border shadow-2xl overflow-hidden">
<div className="bg-gradient-to-r from-orange-500/30 to-red-500/30 text-white text-xs px-2 py-1 font-semibold border-b border-white/20 font-inter">analytics</div>
<div className="px-2 py-1 space-y-1">
<div className="flex items-center space-x-1">
<div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
<div className="h-1 w-8 bg-white/40 rounded"></div>
</div>
<div className="h-1 w-5 bg-white/30 rounded"></div>
<div className="h-1 w-7 bg-white/30 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-8 xl:px-10 pb-8 xl:pb-10">
<div className="flex items-center justify-between p-4 glass rounded-xl border border-white/10">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-white/90 font-medium text-sm font-inter">Schema Active</span>
</div>
<span className="text-white/60 text-sm font-inter">Real-time sync</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
