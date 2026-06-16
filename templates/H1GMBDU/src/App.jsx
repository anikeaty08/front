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
                        'fade-in-up': 'fadeInUp 1s ease-out',
                        'fade-in-delay': 'fadeInUp 1s ease-out 0.3s both',
                        'fade-in-delay-2': 'fadeInUp 1s ease-out 0.6s both',
                        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                        'connection-flow': 'connectionFlow 3s linear infinite'
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        fadeInUp: {
                            '0%': { opacity: 0, transform: 'translateY(30px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        },
                        pulseGlow: {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)' },
                            '50%': { boxShadow: '0 0 40px rgba(79, 70, 229, 0.6)' }
                        },
                        connectionFlow: {
                            '0%': { strokeDashoffset: 20 },
                            '100%': { strokeDashoffset: 0 }
                        }
                    }
                }
            }
        }
    


        // Aurora background animation
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('aurora-canvas') });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime;
                uniform vec2 iResolution;
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p) {
                    vec2 ip = floor(p);
                    vec2 u = fract(p);
                    u = u*u*(3.0-2.0*u);
                    return mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x), mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                }
                void main() {
                    vec2 p = gl_FragCoord.xy / iResolution.xy;
                    vec4 o = vec4(0.0);
                    for(float i = 0.0; i < 20.0; i++) {
                        vec2 v = p + cos(i + iTime * 0.3 + i * vec2(13.0, 11.0)) * 0.5;
                        vec4 c = vec4(0.2 + 0.3 * sin(i * 0.2), 0.3 + 0.5 * cos(i * 0.3), 0.7 + 0.3 * sin(i * 0.4), 1.0);
                        o += c * exp(sin(i)) / length(v * 2.0);
                    }
                    gl_FragColor = tanh(o / 50.0) * 0.8;
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
      

<canvas id="aurora-canvas"></canvas>

<nav className="fixed top-0 left-0 right-0 z-20 p-6 lg:px-16">
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
<a className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm font-inter" href="#">Get Started</a>
</div>
</div>
</div>
</div>
</nav>

<div className="relative z-10 pt-32 pb-16 px-6 lg:px-16">
<div className="max-w-8xl mx-auto">

<div className="text-center mb-16 animate-fade-in-up">
<div className="hero-glow absolute inset-0 rounded-3xl opacity-20"></div>
<h1 className="text-5xl lg:text-7xl font-normal font-satoshi text-white mb-6 leading-none tracking-tight">
                    Explore Your <br/>
<span className="schema-gradient">Database Universe</span>
</h1>
<p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-inter">
                    Navigate through your connected databases, tables, and relationships with interactive visualizations and real-time insights
                </p>
</div>

<div className="mb-16 animate-fade-in-delay">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-normal text-white font-satoshi">Recently Accessed</h2>
<a className="text-indigo-400 hover:text-indigo-300 transition-colors font-inter text-sm" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="card-hover glass rounded-3xl border border-white/10 overflow-hidden">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 20 20">
<path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
<path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
<path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
</svg>
</div>
<span className="text-xs text-white/60 font-inter">2 hours ago</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-inter">E-commerce DB</h3>
<p className="text-white/70 text-sm mb-6 font-inter">PostgreSQL production database handling customer transactions and product catalog</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center">
<div className="text-lg font-semibold text-white font-inter">24</div>
<div className="text-xs text-white/60 font-inter">Tables</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-white font-inter">2.4M</div>
<div className="text-xs text-white/60 font-inter">Records</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-white/60 font-inter">Active</span>
</div>
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-inter transition-all">
                                    Open
                                </button>
</div>
</div>
</div>

<div className="card-hover glass rounded-3xl border border-white/10 overflow-hidden">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 20 20">
<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
</svg>
</div>
<span className="text-xs text-white/60 font-inter">5 hours ago</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-inter">User Profiles</h3>
<p className="text-white/70 text-sm mb-6 font-inter">Customer authentication and profile information with encrypted data fields</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center">
<div className="text-lg font-semibold text-white font-inter">15</div>
<div className="text-xs text-white/60 font-inter">Columns</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-white font-inter">890K</div>
<div className="text-xs text-white/60 font-inter">Rows</div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs px-3 py-1 glass rounded-full text-white/60 font-inter">users</span>
<button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-inter transition-all">
                                    View Schema
                                </button>
</div>
</div>
</div>

<div className="card-hover glass rounded-3xl border border-white/10 overflow-hidden">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 20 20">
<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
</svg>
</div>
<span className="text-xs text-white/60 font-inter">1 day ago</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-inter">Sales Analytics</h3>
<p className="text-white/70 text-sm mb-6 font-inter">Revenue tracking and business intelligence dashboard with real-time metrics</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center">
<div className="text-lg font-semibold text-white font-inter">12</div>
<div className="text-xs text-white/60 font-inter">Dashboards</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-white font-inter">45</div>
<div className="text-xs text-white/60 font-inter">Metrics</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-white/60 font-inter">Live</span>
</div>
<button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-inter transition-all">
                                    View Reports
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="animate-fade-in-delay-2">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-normal text-white font-satoshi">Database Explorer</h2>
<div className="flex items-center space-x-4">
<input className="px-4 py-2 glass rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-inter" placeholder="Search databases..." type="text"/>
<select className="px-4 py-2 glass rounded-xl text-white bg-transparent focus:outline-none font-inter">
<option className="bg-gray-900" value="all">All Types</option>
<option className="bg-gray-900" value="databases">Databases</option>
<option className="bg-gray-900" value="tables">Tables</option>
<option className="bg-gray-900" value="analytics">Analytics</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

<div className="card-hover glass rounded-3xl border border-white/10 md:col-span-2 lg:col-span-2">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-semibold text-white font-satoshi">Schema Network</h3>
<button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-inter">Full View</button>
</div>
<div className="h-48 gradient-border rounded-2xl overflow-hidden mb-6">
<div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 h-full relative">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 400 200">
<defs>
<lineargradient id="connectionGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '0.8'}}></stop>
<stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0.8'}}></stop>
</lineargradient>
</defs>
<g fill="none" stroke="url(#connectionGradient)" strokeWidth="2">
<path className="connection-line" d="M100,100 L200,60 L300,100"></path>
<path className="connection-line" d="M100,100 L200,140 L300,100"></path>
<path className="connection-line" d="M200,60 L300,60"></path>
<path className="connection-line" d="M200,140 L300,140"></path>
</g>
<circle cx="100" cy="100" fill="#4f46e5" r="8"></circle>
<circle cx="200" cy="60" fill="#3b82f6" r="6"></circle>
<circle cx="200" cy="140" fill="#8b5cf6" r="6"></circle>
<circle cx="300" cy="100" fill="#f59e0b" r="8"></circle>
<circle cx="300" cy="60" fill="#ef4444" r="4"></circle>
<circle cx="300" cy="140" fill="#10b981" r="4"></circle>
</svg>
</div>
</div>
<div className="grid grid-cols-4 gap-6 text-center">
<div>
<div className="text-xl font-semibold text-white font-inter">47</div>
<div className="text-xs text-white/60 font-inter">Connections</div>
</div>
<div>
<div className="text-xl font-semibold text-white font-inter">156</div>
<div className="text-xs text-white/60 font-inter">Relations</div>
</div>
<div>
<div className="text-xl font-semibold text-white font-inter">8</div>
<div className="text-xs text-white/60 font-inter">Clusters</div>
</div>
<div>
<div className="text-xl font-semibold text-white font-inter">24</div>
<div className="text-xs text-white/60 font-inter">Tables</div>
</div>
</div>
</div>
</div>

<div className="card-hover glass rounded-3xl border border-white/10">
<div className="p-8">
<div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-inter">Inventory System</h3>
<p className="text-white/70 text-sm mb-6 font-inter">Product inventory and warehouse management</p>
<div className="flex items-center justify-between">
<span className="text-xs px-3 py-1 glass rounded-full text-white/60 font-inter">MySQL</span>
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>
<div className="card-hover glass rounded-3xl border border-white/10">
<div className="p-8">
<div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-inter">Cache Layer</h3>
<p className="text-white/70 text-sm mb-6 font-inter">High-performance Redis cache for session data</p>
<div className="flex items-center justify-between">
<span className="text-xs px-3 py-1 glass rounded-full text-white/60 font-inter">Redis</span>
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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
