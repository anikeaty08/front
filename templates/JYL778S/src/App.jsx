import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('aurora-bg-canvas'), antialias:true, alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);

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
  


    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas height="1187" id="aurora-bg-canvas" style={{width: '1710px', height: '1187px'}} width="1710"></canvas>

<header className="fixed w-full z-50 glass-border fade-in">
<div className="max-w-6xl flex items-center justify-between mx-auto pt-4 pr-6 pb-4 pl-6">
<div className="flex items-center gap-2">
<span className="font-medium text-slate-50">Alex Carter</span>
</div>
<nav className="flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="/">Home</a>
<a className="hover:text-white transition-colors" href="/#about">About</a>
<a className="hover:text-white transition-colors" href="/#projects">Portfolio</a>
<a className="hover:text-white transition-colors" href="/#contact">Contact</a>
</nav>
</div>
</header>
<section className="min-h-[60vh] flex flex-col justify-center items-center pt-24 pr-6 pb-12 pl-6">
<div className="max-w-2xl w-full flex flex-col items-center text-center">
<span className="text-green-400 text-xs uppercase tracking-wider font-semibold fade-in delay-100 mb-3">Case Study</span>
<h1 className="md:text-6xl slide-up delay-200 text-4xl text-white font-instrument-serif mb-6">TaskFlow</h1>
<p className="fade-in delay-400 text-lg text-gray-300 mb-6">
        A powerful workflow and productivity app for modern teams and individuals, designed to simplify daily planning and streamline collaboration.
      </p>
<div className="flex gap-2 justify-center fade-in delay-600">
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Vue.js</span>
<span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded">JavaScript</span>
<span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">Firebase</span>
</div>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 mb-16">
<div className="rounded-2xl overflow-hidden glass-border fade-in delay-600 shadow-lg">
<img alt="TaskFlow Screenshot" className="w-full h-80 object-top object-cover" src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=2160&amp;q=80"/>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 mb-24 grid md:grid-cols-3 gap-10">
<div className="md:col-span-2">
<h2 className="text-2xl font-semibold text-white mb-4 font-instrument-serif fade-in">Project Overview</h2>
<p className="text-gray-300 leading-relaxed fade-in delay-100 mb-6">
        TaskFlow is a web application that empowers users to organize their tasks, set priorities, and collaborate in real-time. Built with scalability and a sleek UI in mind, it enables teams to manage projects efficiently via boards, task lists, and integrated notifications. I designed and developed the core front-end architecture, ensuring a seamless user experience and high performance across devices.
      </p>
<h3 className="text-lg text-white font-medium mt-8 mb-3 fade-in delay-200">My Responsibilities</h3>
<ul className="list-disc list-inside space-y-2 text-gray-300 fade-in delay-300">
<li>UI/UX design and prototyping</li>
<li>Front-end development with Vue.js and JavaScript</li>
<li>State management, routing, and API integration</li>
<li>Real-time collaboration features with Firebase</li>
<li>Accessibility and responsive design</li>
</ul>

<div className="mt-10">
<h3 className="text-lg text-white font-medium mb-3 fade-in delay-400">Key Challenges</h3>
<ul className="list-disc list-inside space-y-2 text-gray-300 fade-in delay-500">
<li>Ensuring real-time updates without sacrificing performance for users on slower connections.</li>
<li>Designing an intuitive drag-and-drop interface for task management.</li>
<li>Seamlessly integrating authentication and permissions for different user roles.</li>
</ul>
<h3 className="text-lg text-white font-medium mt-8 mb-3 fade-in delay-600">Solutions</h3>
<ul className="list-disc list-inside space-y-2 text-gray-300 fade-in delay-700">
<li>Utilized Firebase's real-time database and optimized the data structure for minimal latency.</li>
<li>Implemented <span className="font-semibold text-green-400">Vue Draggable</span> for smooth interactions and responsive feedback.</li>
<li>Built a modular roles &amp; permissions system with clear separation of concerns.</li>
</ul>
<h3 className="text-lg text-white font-medium mt-8 mb-3 fade-in delay-800">Impact</h3>
<ul className="list-disc list-inside space-y-2 text-gray-300 fade-in delay-900">
<li>Reduced average task update latency to under 100ms in collaborative boards.</li>
<li>Improved user retention by 40% after introducing the new board UI.</li>
<li>Received positive feedback from teams for ease of use and reliability.</li>
</ul>
</div>
</div>
<div className="">
<div className="glass-card p-6 rounded-2xl mb-8 fade-in delay-400">
<h4 className="font-semibold text-white text-lg mb-3 flex items-center gap-2">
<svg className="lucide lucide-info w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
          Details
        </h4>
<ul className="text-gray-300 text-sm space-y-2">
<li><span className="font-semibold text-white">Type:</span> SaaS Web App</li>
<li><span className="font-semibold text-white">Duration:</span> 6 months</li>
<li><span className="font-semibold text-white">Team Size:</span> 4</li>
<li><span className="font-semibold text-white">Role:</span> Lead Front-end Developer</li>
<li><span className="font-semibold text-white">Year:</span> 2024</li>
</ul>
</div>
<div className="glass-card p-6 rounded-2xl mb-8 fade-in delay-600">
<h4 className="font-semibold text-white text-lg mb-3 flex items-center gap-2">
<svg className="lucide lucide-layers w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          Tools Used
        </h4>
<div className="flex flex-wrap gap-2">
<span className="glass-border text-xs text-neutral-900 rounded-md pt-1 pr-3 pb-1 pl-3">Vue.js</span>
<span className="glass-border text-xs text-gray-900 rounded-md pt-1 pr-3 pb-1 pl-3">JavaScript</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-900">Sass</span>
<span className="glass-border text-xs text-gray-900 rounded-md pt-1 pr-3 pb-1 pl-3">Firebase</span>
<span className="glass-border px-3 py-1 rounded-md text-xs text-gray-900">Figma</span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl fade-in delay-800">
<h4 className="font-semibold text-white text-lg mb-3 flex items-center gap-2">
<svg className="lucide lucide-quote w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 7v4a2 2 0 0 1-2 2h-2"></path><path d="M7 7v4a2 2 0 0 1-2 2H3"></path></svg>
          Testimonial
        </h4>
<blockquote className="text-gray-300 italic text-sm">
          "Alex's work on TaskFlow transformed our team's productivity. The intuitive UI and real-time features have made project management a breeze."
          <span className="block mt-2 font-semibold text-green-300">— Jamie Lee, Product Manager</span>
</blockquote>
</div>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 mb-24">
<div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
<div className="flex gap-4">
<a className="glass-border hover:bg-white/5 transition-all flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white text-sm" href="https://taskflow-demo.com" target="_blank">
<svg className="lucide lucide-external-link w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          Live Demo
        </a>
<a className="glass-border hover:bg-white/5 transition-all flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white text-sm" href="https://github.com/alexcarter/taskflow" target="_blank">
<svg className="lucide lucide-github w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-248-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          Source Code
        </a>
</div>
<a className="mt-2 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm" href="/#projects">
<svg className="lucide lucide-arrow-left w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
        Back to Portfolio
      </a>
</div>
</section>
<footer className="text-center bg-neutral-950 pt-8 pb-8">
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
<p className="text-sm text-gray-500">© 2024 Alex Carter</p>
</footer>





    </>
  );
}
