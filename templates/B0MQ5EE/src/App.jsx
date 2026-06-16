import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'sans-serif']
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'slide-right': 'slideRight 0.8s ease-out forwards'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
slideRight: {
'0%': { opacity: '0', transform: 'translateX(-40px)' },
'100%': { opacity: '1', transform: 'translateX(0)' }
}
}
}
}
}



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
<main className="relative z-20 flex flex-col">

<section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 px-6 lg:px-20 pt-24 lg:pt-32">

<div className="max-w-xl opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
<i className="w-4 h-4 text-blue-400" data-lucide="zap"></i>
<span className="text-sm font-medium text-blue-300">Streamlined Workflows</span>
</div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight">
          Built for 
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">collaboration</span>
</h1>
<p className="text-neutral-300 mt-6 text-lg leading-relaxed">
          Empower your development teams with intelligent workflows that adapt to your preferred tools. 
          Whether you're syncing with Git repositories or using visual editors, NexusFlow meets you where you work.
        </p>
<div className="flex flex-wrap gap-4 mt-8">
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-neutral-100 transition-colors backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="play"></i>
            Watch Demo
          </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-600/50 bg-neutral-900/50 backdrop-blur-sm rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-800/50 transition-all">
<i className="w-4 h-4" data-lucide="book-open"></i>
            Documentation
          </button>
</div>

<div className="mt-16 opacity-0 animate-slide-right" style={{animationDelay: '0.6s'}}>
<h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6">Integration Methods</h3>
<ul className="space-y-4">
<li>
<button className="group flex items-center gap-4 w-full border-l-2 border-blue-500 pl-6 py-3 text-base font-medium bg-blue-500/10 backdrop-blur-sm rounded-r-lg transition-all">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20">
<i className="w-4 h-4 text-blue-400" data-lucide="git-branch"></i>
</div>
<div className="text-left">
<span className="text-white block">Git Repository Sync</span>
<span className="text-neutral-300 text-sm">GitHub, GitLab, Bitbucket</span>
</div>
</button>
</li>
<li>
<button className="group flex items-center gap-4 w-full border-l-2 border-neutral-700 hover:border-purple-500/50 pl-6 py-3 text-base font-medium hover:bg-purple-500/10 backdrop-blur-sm rounded-r-lg transition-all">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800/50 group-hover:bg-purple-500/20">
<i className="w-4 h-4 text-neutral-400 group-hover:text-purple-400" data-lucide="edit"></i>
</div>
<div className="text-left">
<span className="text-neutral-300 group-hover:text-white block transition-colors">Visual Web Editor</span>
<span className="text-neutral-400 text-sm">WYSIWYG interface</span>
</div>
</button>
</li>
<li>
<button className="group flex items-center gap-4 w-full border-l-2 border-neutral-700 hover:border-green-500/50 pl-6 py-3 text-base font-medium hover:bg-green-500/10 backdrop-blur-sm rounded-r-lg transition-all">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800/50 group-hover:bg-green-500/20">
<i className="w-4 h-4 text-neutral-400 group-hover:text-green-400" data-lucide="globe"></i>
</div>
<div className="text-left">
<span className="text-neutral-300 group-hover:text-white block transition-colors">Preview Deployments</span>
<span className="text-neutral-400 text-sm">Instant staging environments</span>
</div>
</button>
</li>
</ul>
</div>
</div>

<div className="w-full max-w-2xl opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>
<div className="relative rounded-2xl bg-neutral-900/80 backdrop-blur-md ring-1 ring-white/10 overflow-hidden shadow-2xl">

<div className="flex items-center justify-between bg-neutral-800/90 backdrop-blur-sm px-6 py-3 border-b border-neutral-700/50">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="file-text"></i>
<span className="text-sm font-medium text-neutral-300">nexus-config.mdx</span>
</div>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors p-1 hover:bg-neutral-700/50 rounded">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="px-8 py-6 overflow-auto max-h-96 text-sm">
<pre className="leading-7 text-neutral-300 font-mono whitespace-pre">
<span className="text-neutral-500">---</span>
title: <span className="text-emerald-400">"Team Collaboration Hub"</span>
description: <span className="text-emerald-400">"Seamlessly sync documentation with your Git repositories"</span>
icon: <span className="text-emerald-400">"users"</span>
version: <span className="text-amber-400">2.1.0</span>
<span className="text-neutral-500">---</span>

<span className="text-blue-400">## GitHub Integration</span>

NexusFlow leverages advanced GitHub API capabilities
to enable <span className="text-purple-400">bi-directional synchronization</span> between
your documentation and repository. Our intelligent
merge system prevents conflicts while maintaining
version history.

<span className="text-blue-400">### Features</span>
- <span className="text-neutral-400">🔄 Real-time sync</span>
- <span className="text-neutral-400">🌿 Branch-based workflows</span>  
- <span className="text-neutral-400">🔒 Secure authentication</span>
- <span className="text-neutral-400">📊 Detailed analytics</span>

<span className="text-blue-400">## Team Permissions</span>

Granular access controls ensure the right people
have the right level of access to your project
documentation and configurations.
</pre>
</div>

<div className="flex items-center justify-between bg-neutral-800/80 backdrop-blur-sm px-6 py-2 border-t border-neutral-700/30 text-xs">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1 text-green-400">
<i className="w-2 h-2 fill-current" data-lucide="circle"></i>
                Synced
              </span>
<span className="text-neutral-400">Line 23, Column 45</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<span>MDX</span>
<span>UTF-8</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-700/30 backdrop-blur-sm mt-24 lg:mt-32 px-6 lg:px-20 py-20">
<div className="text-center mb-16 opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
          Everything your team needs
        </h2>
<p className="text-neutral-300 text-lg max-w-2xl mx-auto">
          From API testing to user authentication, NexusFlow provides all the tools modern development teams require.
        </p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 opacity-0 animate-slide-up" style={{animationDelay: '1s'}}>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors mb-5">
<i className="w-6 h-6 text-blue-400" data-lucide="terminal"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Interactive API Playground</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Test endpoints, explore parameters, and validate responses directly within your documentation.
          </p>
<div className="flex items-center gap-2 text-xs text-blue-400">
<span>Try it now</span>
<i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-300 opacity-0 animate-slide-up" style={{animationDelay: '1.1s'}}>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors mb-5">
<i className="w-6 h-6 text-green-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Advanced Authentication</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Secure your documentation with SSO, role-based access, and customizable permission systems.
          </p>
<div className="flex items-center gap-2 text-xs text-green-400">
<span>Learn more</span>
<i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 opacity-0 animate-slide-up" style={{animationDelay: '1.2s'}}>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors mb-5">
<i className="w-6 h-6 text-purple-400" data-lucide="message-circle"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Real-time Feedback</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Collect user insights, track engagement metrics, and iterate based on community feedback.
          </p>
<div className="flex items-center gap-2 text-xs text-purple-400">
<span>View analytics</span>
<i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group p-6 rounded-2xl border border-neutral-700/40 bg-neutral-900/40 backdrop-blur-sm hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300 opacity-0 animate-slide-up" style={{animationDelay: '1.3s'}}>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors mb-5">
<i className="w-6 h-6 text-amber-400" data-lucide="palette"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Complete Customization</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Build unique experiences with custom React components, advanced CSS, and JavaScript integrations.
          </p>
<div className="flex items-center gap-2 text-xs text-amber-400">
<span>Customize now</span>
<i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-20 py-16 opacity-0 animate-fade-in" style={{animationDelay: '1.4s'}}>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/30">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-blue-400 mb-2">50K+</div>
<div className="text-sm text-neutral-400">Active developers</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-green-400 mb-2">1.2M</div>
<div className="text-sm text-neutral-400">API requests daily</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-purple-400 mb-2">99.9%</div>
<div className="text-sm text-neutral-400">Uptime guarantee</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-amber-400 mb-2">24/7</div>
<div className="text-sm text-neutral-400">Expert support</div>
</div>
</div>
</section>
</main>



    </>
  );
}
