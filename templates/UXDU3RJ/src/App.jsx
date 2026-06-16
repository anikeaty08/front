import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    
    // Three.js Shader Background
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    const container = document.getElementById('shader-bg');
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;
    
    const fragmentShader = `
      uniform float iTime;
      uniform vec2 iResolution;
      varying vec2 vUv;
      
      float Length(in vec2 p, in float k) {
        return pow(pow(abs(p.x), k) + pow(abs(p.y), k), 1.0/k);
      }
      
      float Hash21(vec2 p) {
        return fract(sin(p.x * 100.0 + p.y * 6551.0) * 5678.0);
      }
      
      mat2 r2(float t) {
        return mat2(cos(t), -sin(t), sin(t), cos(t));
      }
      
      vec3 trushet(vec2 uv) {
        vec2 id = floor(uv);
        uv = fract(uv);
        vec2 uv2 = uv;
        uv -= vec2(0.5);
        
        float r = Hash21(id);
        
        if (r > 0.5)
          uv.x *= -1.0;
        bool line = uv.x + uv.y > 0.0;
        
        float s = line ? 1.0 : -1.0;
        
        float size = 0.02;
        float blur = -100.0;
        
        vec3 col = vec3(smoothstep(size - blur, size + blur, abs((Length(uv - vec2(0.5 * s), 1.0) - 0.5))));
        
        return col;
      }
      
      void main() {
        vec2 fragCoord = vUv * iResolution;
        vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.y;
        float time = iTime;
        
        uv *= 5.0;
        
        uv += vec2(20.0 * sin(time / 20.0), 20.0 * cos(time / 20.0)) / 20.0;
        uv *= r2(length(uv * sin(time) * 0.5 + 0.5) + time);
        
        vec3 col = trushet(uv);
        col.x *= sin(uv.x + 0.5 + time) * 0.5 + 0.5;
        col.y *= sin(uv.y * 2.0 + 1.0 + time) * 0.5 + 0.5;
        
        // Tone mapping and fade to dark
        col = pow(col, vec3(1.0/2.2));
        col *= 0.3; // Reduce intensity for background
        
        gl_FragColor = vec4(col, 1.0);
      }
    `;
    
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      }
    });
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    function animate() {
      requestAnimationFrame(animate);
      material.uniforms.iTime.value = performance.now() * 0.001;
      renderer.render(scene, camera);
    }
    
    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.iResolution.value.set(width, height);
    }
    
    window.addEventListener('resize', onWindowResize);
    animate();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0" id="shader-bg"></div>
<div className="fixed inset-0 z-10 bg-neutral-950/40 backdrop-blur-[1px]"></div>
<main className="relative z-20 flex flex-col max-w-7xl mx-auto">

<section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 px-6 lg:px-20 pt-24 lg:pt-32">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
<svg className="lucide lucide-zap w-4 h-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-blue-300 font-geist" style={{}}>Streamlined Workflows</span>
</div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
          Built for 
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>collaboration</span>
</h1>
<p className="text-neutral-300 mt-6 text-lg leading-relaxed font-geist" style={{}}>
          Empower your development teams with intelligent workflows that adapt to your preferred tools. 
          Whether you're syncing with Git repositories or using visual editors, NexusFlow meets you where you work.
        </p>
<div className="flex flex-wrap gap-4 mt-8">
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-neutral-100 transition-colors backdrop-blur-sm font-geist" style={{}}>
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Watch Demo
          </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-600/50 bg-neutral-900/50 backdrop-blur-sm rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-800/50 transition-all font-geist" style={{}}>
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            Documentation
          </button>
</div>

<div className="mt-16">
<h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6 font-geist" style={{}}>Integration Methods</h3>
<ul className="space-y-4">
<li>
<button className="group flex items-center gap-4 w-full border-l-2 border-blue-500 pl-6 py-3 text-base font-medium bg-blue-500/10 backdrop-blur-sm rounded-r-lg transition-all">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20">
<svg className="lucide lucide-git-branch w-4 h-4 text-blue-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div className="text-left">
<span className="text-white block font-geist" style={{}}>Git Repository Sync</span>
<span className="text-neutral-300 text-sm font-geist" style={{}}>GitHub, GitLab, Bitbucket</span>
</div>
</button>
</li>
<li>
<button className="group flex items-center gap-4 w-full border-l-2 border-neutral-700 hover:border-purple-500/50 pl-6 py-3 text-base font-medium hover:bg-purple-500/10 backdrop-blur-sm rounded-r-lg transition-all">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800/50 group-hover:bg-purple-500/20">
<svg className="lucide lucide-edit w-4 h-4 text-neutral-400 group-hover:text-purple-400" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</div>
<div className="text-left">
<span className="text-neutral-300 group-hover:text-white block transition-colors font-geist" style={{}}>Visual Web Editor</span>
<span className="text-neutral-400 text-sm font-geist" style={{}}>WYSIWYG interface</span>
</div>
</button>
</li>
<li>
<button className="group flex items-center gap-4 w-full border-l-2 border-neutral-700 hover:border-green-500/50 pl-6 py-3 text-base font-medium hover:bg-green-500/10 backdrop-blur-sm rounded-r-lg transition-all">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800/50 group-hover:bg-green-500/20">
<svg className="lucide lucide-globe w-4 h-4 text-neutral-400 group-hover:text-green-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="text-left">
<span className="text-neutral-300 group-hover:text-white block transition-colors font-geist" style={{}}>Preview Deployments</span>
<span className="text-neutral-400 text-sm font-geist" style={{}}>Instant staging environments</span>
</div>
</button>
</li>
</ul>
</div>
</div>

<div className="w-full max-w-2xl">
<div className="relative rounded-2xl bg-neutral-900/80 backdrop-blur-md ring-1 ring-white/10 overflow-hidden shadow-2xl">

<div className="flex items-center justify-between bg-neutral-800/90 backdrop-blur-sm px-6 py-3 border-b border-neutral-700/50">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text w-4 h-4 text-neutral-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-medium text-neutral-300 font-geist" style={{}}>nexus-config.mdx</span>
</div>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors p-1 hover:bg-neutral-700/50 rounded">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="px-8 py-6 overflow-auto max-h-96 text-sm">
<pre className="leading-7 text-neutral-300 font-mono whitespace-pre font-geist" style={{}}><span className="text-neutral-500 font-geist" style={{}}>---</span>
title: <span className="text-emerald-400 font-geist" style={{}}>"Team Collaboration Hub"</span>
description: <span className="text-emerald-400 font-geist" style={{}}>"Seamlessly sync documentation with your Git repositories"</span>
icon: <span className="text-emerald-400 font-geist" style={{}}>"users"</span>
version: <span className="text-amber-400 font-geist" style={{}}>2.1.0</span>
<span className="text-neutral-500 font-geist" style={{}}>---</span>

<span className="text-blue-400 font-geist" style={{}}>## GitHub Integration</span>

NexusFlow leverages advanced GitHub API capabilities
to enable <span className="text-purple-400 font-geist" style={{}}>bi-directional synchronization</span> between
your documentation and repository. Our intelligent
merge system prevents conflicts while maintaining
version history.

<span className="text-blue-400 font-geist" style={{}}>### Features</span>
- <span className="text-neutral-400 font-geist" style={{}}>🔄 Real-time sync</span>
- <span className="text-neutral-400 font-geist" style={{}}>🌿 Branch-based workflows</span>  
- <span className="text-neutral-400 font-geist" style={{}}>🔒 Secure authentication</span>
- <span className="text-neutral-400 font-geist" style={{}}>📊 Detailed analytics</span>

<span className="text-blue-400 font-geist" style={{}}>## Team Permissions</span>

Granular access controls ensure the right people
have the right level of access to your project
documentation and configurations.
</pre>
</div>

<div className="flex items-center justify-between bg-neutral-800/80 backdrop-blur-sm px-6 py-2 border-t border-neutral-700/30 text-xs">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1 text-green-400 font-geist" style={{}}>
<svg className="lucide lucide-circle w-2 h-2 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
                Synced
              </span>
<span className="text-neutral-400 font-geist" style={{}}>Line 23, Column 45</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<span className="font-geist" style={{}}>MDX</span>
<span className="font-geist" style={{}}>UTF-8</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-700/30 backdrop-blur-sm mt-24 lg:mt-32 px-6 lg:px-20 py-20">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight mb-4 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
          Everything your team needs
        </h2>
<p className="text-neutral-300 text-lg max-w-2xl mx-auto font-geist" style={{}}>
          From API testing to user authentication, NexusFlow provides all the tools modern development teams require.
        </p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors mb-5">
<svg className="lucide lucide-terminal w-6 h-6 text-blue-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-geist" style={{}}>Interactive API Playground</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4 font-geist" style={{}}>
            Test endpoints, explore parameters, and validate responses directly within your documentation.
          </p>
<div className="flex items-center gap-2 text-xs text-blue-400">
<span className="font-geist" style={{}}>Try it now</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors mb-5">
<svg className="lucide lucide-shield-check w-6 h-6 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-geist" style={{}}>Advanced Authentication</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4 font-geist" style={{}}>
            Secure your documentation with SSO, role-based access, and customizable permission systems.
          </p>
<div className="flex items-center gap-2 text-xs text-green-400">
<span className="font-geist" style={{}}>Learn more</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors mb-5">
<svg className="lucide lucide-message-circle w-6 h-6 text-purple-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-geist" style={{}}>Real-time Feedback</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4 font-geist" style={{}}>
            Collect user insights, track engagement metrics, and iterate based on community feedback.
          </p>
<div className="flex items-center gap-2 text-xs text-purple-400">
<span className="font-geist" style={{}}>View analytics</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors mb-5">
<svg className="lucide lucide-palette w-6 h-6 text-amber-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2 font-geist" style={{}}>Complete Customization</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4 font-geist" style={{}}>
            Build unique experiences with custom React components, advanced CSS, and JavaScript integrations.
          </p>
<div className="flex items-center gap-2 text-xs text-amber-400">
<span className="font-geist" style={{}}>Customize now</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-20 py-16">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/30">
<div className="text-center">
<div className="text-3xl lg:text-4xl text-blue-400 mb-2 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>50K+</div>
<div className="text-sm text-neutral-400 font-geist" style={{}}>Active developers</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl text-green-400 mb-2 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>1.2M</div>
<div className="text-sm text-neutral-400 font-geist" style={{}}>API requests daily</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl text-purple-400 mb-2 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>99.9%</div>
<div className="text-sm text-neutral-400 font-geist" style={{}}>Uptime guarantee</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl text-amber-400 mb-2 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>24/7</div>
<div className="text-sm text-neutral-400 font-geist" style={{}}>Expert support</div>
</div>
</div>
</section>
</main>



    </>
  );
}
