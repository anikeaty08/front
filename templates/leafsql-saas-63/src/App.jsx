import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#050505', // Deep dark background
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#27272A', // Zinc-800
primary: '#10B981', // Emerald-500
primaryDim: 'rgba(16, 185, 129, 0.1)',
secondary: '#94A3B8', // Slate-400
text: '#E2E8F0', // Slate-200
accent: '#34D399', // Emerald-400
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #10B98111 0deg, #050505 360deg)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'dash': 'dash 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
dash: {
'to': { strokeDashoffset: '-1000' }
}
}
}
}
}



      uniform float uTime;
      uniform float uSize;
      varying float vNoise;
      // Simple Perlin-ish Logic embedded for brevity
      float random (in vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123); }
      float noise (in vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      void main() {
          vec3 pos = position;
          // Gentle floating wave
          float n = noise(vec2(pos.x * 0.1 + uTime * 0.1, pos.z * 0.1));
          vNoise = n;
          pos.y += n * 2.0;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uSize * (15.0 / -mvPosition.z);
      }
    


      uniform vec3 uColor;
      varying float vNoise;
      void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          // Emerald Green to Teal gradient
          vec3 color1 = vec3(0.06, 0.72, 0.50); // Emerald
          vec3 color2 = vec3(0.0, 0.3, 0.3); // Dark Teal
          vec3 finalColor = mix(color2, color1, vNoise + 0.3);
          gl_FragColor = vec4(finalColor, 0.6); // 0.6 Opacity
      }
    


      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      // Use dark fog to blend particles into background
      scene.fog = new THREE.FogExp2(0x050505, 0.035);

      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 5, 25);
      camera.lookAt(0,0,0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create a grid of points
      const geometry = new THREE.BufferGeometry();
      const count = 3000; // Particle count
      const positions = new Float32Array(count * 3);
      
      for(let i = 0; i < count * 3; i+=3) {
          positions[i] = (Math.random() - 0.5) * 60;   // x spread
          positions[i+1] = (Math.random() - 0.5) * 20; // y spread
          positions[i+2] = (Math.random() - 0.5) * 40; // z spread
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const uniforms = {
          uTime: { value: 0 },
          uSize: { value: 4.0 },
      };

      const material = new THREE.ShaderMaterial({
          vertexShader: document.getElementById('vertexShader').textContent,
          fragmentShader: document.getElementById('fragmentShader').textContent,
          uniforms: uniforms,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let time = 0;
      function animate() {
          requestAnimationFrame(animate);
          time += 0.005;
          uniforms.uTime.value = time;
          points.rotation.y = time * 0.05; // Slow rotation
          renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });
      
      // Scroll effect on camera
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        camera.position.y = 5 - scrollY * 0.01;
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 grid-bg pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center glass-panel border-b-0 border-b-white/5 transition-all duration-300">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-900/50">
<iconify-icon icon="solar:database-bold" width="18"></iconify-icon>
</div>
<span className="font-sans text-lg font-bold tracking-tight text-white">
          LeafSQL
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-sm font-medium text-secondary hover:text-white transition-colors" href="#">Platform</a>
<a className="font-sans text-sm font-medium text-secondary hover:text-white transition-colors" href="#">Integrations</a>
<a className="font-sans text-sm font-medium text-secondary hover:text-white transition-colors" href="#">Security</a>
<a className="font-sans text-sm font-medium text-secondary hover:text-white transition-colors" href="#">Changelog</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block font-sans text-sm font-medium text-white hover:text-emerald-400 transition-colors" href="#">
          Sign in
        </a>
<button className="group relative isolate overflow-hidden bg-white/10 text-white text-xs font-semibold px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-emerald-500/30">
<span className="relative z-20 flex items-center gap-2">
            View Demo
            <iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative pt-20">

<section className="relative min-h-[95vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-20 pb-20 gap-16 overflow-hidden">

<div className="max-w-2xl space-y-8 relative z-20 lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="font-mono text-xs font-medium text-emerald-400 tracking-tight">
              v2.0: Multi-environment support live
            </span>
</div>
<h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
            Talk to your data.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Operate safely.
            </span>
</h1>
<p className="max-w-lg font-sans text-lg text-secondary leading-relaxed font-light">
            The unified SQL intelligence layer. Query, visualize, and modify your production databases using natural language—with built-in rollback protection and schema awareness.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-2">

<button className="relative group overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-900/60 ring-1 ring-white/20">
<div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-out -translate-x-full transform -skew-x-12 origin-left"></div>
<span className="relative flex items-center gap-2">
                Request Access
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>

<button className="px-8 py-3.5 bg-transparent text-white border border-white/20 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-white/40 flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
              Documentation
            </button>
</div>

<div className="pt-10 border-t border-white/5">
<p className="text-xs font-medium text-secondary mb-4 uppercase tracking-wider">Trusted by modern data teams</p>
<div className="flex gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1.5"><div className="w-4 h-4 bg-white rounded-full"></div><span className="font-bold text-sm">Acme Corp</span></div>
<div className="flex items-center gap-1.5"><div className="w-4 h-4 border-2 border-white rounded-sm"></div><span className="font-bold text-sm font-mono">NEXUS</span></div>
<div className="flex items-center gap-1.5"><div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-white border-r-[6px] border-r-transparent"></div><span className="font-bold text-sm">Vertex</span></div>
<div className="flex items-center gap-1.5"><div className="w-4 h-4 bg-white rounded-sm rotate-45"></div><span className="font-bold text-sm">Starlight</span></div>
</div>
</div>
</div>

<div className="relative w-full lg:w-1/2 h-[600px] flex items-center justify-center perspective-1000">

<div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full animate-pulse-slow"></div>

<div className="absolute bottom-10 left-0 md:left-10 z-30 w-72 glass-card rounded-xl p-4 animate-float" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">User Query</div>
</div>
<div className="bg-surfaceHighlight rounded-lg p-3 border border-white/5">
<p className="font-sans text-sm text-secondary">"Show me active users in EU region who signed up last week, grouped by plan."</p>
</div>
<div className="mt-3 flex justify-end">
<span className="text-[10px] text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Processing
               </span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 glass-card rounded-xl p-0 overflow-hidden animate-float shadow-2xl shadow-black/50" style={{animationDelay: '1.5s'}}>
<div className="bg-surface border-b border-white/5 px-4 py-2 flex items-center justify-between">
<span className="text-[10px] font-mono text-secondary">generated.sql</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
</div>
</div>
<div className="p-4 bg-[#0D0E12] font-mono text-xs leading-relaxed">
<span className="token-kw">SELECT</span> plan, <span className="token-fn">COUNT</span>(*)<br/>
<span className="token-kw">FROM</span> users<br/>
<span className="token-kw">WHERE</span> region = <span className="token-str">'EU'</span><br/>
<span className="token-kw">AND</span> created_at &gt;= <span className="token-fn">NOW</span>() - <span className="token-kw">INTERVAL</span> <span className="token-str">'1 week'</span><br/>
<span className="token-kw">AND</span> status = <span className="token-str">'active'</span><br/>
<span className="token-kw">GROUP BY</span> plan;
            </div>
<div className="px-4 py-2 bg-emerald-900/20 border-t border-emerald-500/20 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[10px] text-emerald-300">Read-only safe mode active</span>
</div>
</div>

<div className="absolute top-10 right-0 md:right-10 z-10 w-64 glass-card rounded-xl p-4 animate-float" style={{animationDelay: '3s'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-white">Results</span>
<iconify-icon className="text-emerald-400" icon="solar:graph-new-linear"></iconify-icon>
</div>

<div className="flex items-end justify-between h-24 gap-2 mb-2">
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[40%] hover:bg-emerald-500/40 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-1.5 py-0.5 rounded text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">142</div>
</div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[80%] hover:bg-emerald-500/40 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-1.5 py-0.5 rounded text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">850</div>
</div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[60%] hover:bg-emerald-500/40 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-1.5 py-0.5 rounded text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">620</div>
</div>
</div>
<div className="flex justify-between text-[10px] text-secondary font-mono">
<span>Basic</span>
<span>Pro</span>
<span>Ent</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 relative border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Intelligence meets Control
            </h2>
<p className="text-secondary text-base">
              LeafSQL doesn't just guess code. It understands your database topology, enforcing constraints and safety policies before execution.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-emerald-500" icon="solar:sitemap-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon icon="solar:structure-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Schema Intelligence</h3>
<p className="text-secondary text-sm leading-relaxed mb-8">
                  Our engine maps your tables, foreign keys, and column types automatically. It knows that <code>user_id</code> connects <code>orders</code> to <code>profiles</code>.
                </p>

<div className="mt-auto bg-surfaceHighlight border border-white/5 rounded-lg p-4 font-mono text-[10px] text-secondary space-y-2 shadow-inner">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:database-linear"></iconify-icon>
<span className="text-white">public.users</span>
<span className="ml-auto opacity-50">PK: id</span>
</div>
<div className="h-4 border-l border-dashed border-white/20 ml-2.5"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:database-linear"></iconify-icon>
<span className="text-white">public.orders</span>
<span className="ml-auto opacity-50">FK: user_id</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Safe Mutation &amp; Rollback</h3>
<p className="text-secondary text-sm leading-relaxed mb-8">
                  Write operations are wrapped in transactions. Preview impacted rows before committing, or auto-rollback on non-production environments.
                </p>

<div className="mt-auto bg-surfaceHighlight border border-white/5 rounded-lg p-3">
<div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
<span className="text-xs font-medium text-amber-400">UPDATE users SET...</span>
<span className="text-[10px] text-secondary">24 rows affected</span>
</div>
<div className="flex gap-2">
<button className="flex-1 py-1.5 rounded bg-white/5 text-xs text-white border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-200 transition-colors">
                      Rollback
                    </button>
<button className="flex-1 py-1.5 rounded bg-emerald-500/20 text-xs text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">
                      Commit
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-20 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-20">

<div className="lg:w-1/2 space-y-8">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Unified Data Layer.
                <br/>
<span className="text-secondary">One interface, any environment.</span>
</h2>
<div className="space-y-6">
<p className="text-secondary text-lg font-light leading-relaxed">
                  Stop context switching between database clients, admin panels, and BI tools. LeafSQL connects to your Dev, Staging, and Production environments securely, acting as the single pane of glass for your entire data stack.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                    Connect Postgres, MySQL, Snowflake, and BigQuery
                  </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                    Environment-specific access controls
                  </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                    API access for programmatic querying
                  </li>
</ul>
</div>
</div>

<div className="lg:w-1/2 w-full relative flex flex-col items-center justify-center p-4">

<div className="relative z-10 w-full max-w-lg">

<div className="relative z-20 w-full glass-card rounded-xl border border-white/10 shadow-2xl mb-16 overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-white/5">
<div className="flex gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></span>
<span className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-secondary">
<span className="text-emerald-400 font-bold">POST</span>
<span>api.leafsql.com/v1/query</span>
</div>
<iconify-icon className="text-zinc-600 hover:text-white transition-colors" icon="solar:settings-linear" width="16"></iconify-icon>
</div>

<div className="p-5 space-y-4 bg-[#080808]">

<div className="space-y-1">
<div className="flex justify-between text-[10px] uppercase tracking-wider font-semibold text-zinc-500">
<span>Natural Language Request</span>
</div>
<div className="font-mono text-xs text-zinc-300">
<span className="text-purple-400">{</span><br/>
                          "query": <span className="text-emerald-400">"count premium users"</span>,<br/>
                          "env": <span className="text-emerald-400">"production"</span><br/>
<span className="text-purple-400">}</span>
</div>
</div>

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="space-y-1">
<div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-semibold text-zinc-500">
<span>Resolved SQL</span>
<span className="flex items-center gap-1 text-emerald-500"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> Validated</span>
</div>
<div className="p-2 rounded bg-surfaceHighlight border border-white/5 font-mono text-[11px] text-zinc-400">
<span className="token-kw">SELECT</span> count(*) <span className="token-kw">FROM</span> users <span className="token-kw">WHERE</span> plan = <span className="token-str">'premium'</span>;
                      </div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full translate-y-2 border border-white/20 z-30"></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0">
<svg className="w-full h-full visible overflow-visible">

<defs>
<lineargradient id="lineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#34D399" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0.1"></stop>
</lineargradient>
</defs>

<path d="M 256 185 C 256 240, 85 220, 85 290" fill="none" stroke="url(#lineGradient)" stroke-opacity="0.2" strokeWidth="1.5"></path>
<path className="connector-line" d="M 256 185 C 256 240, 85 220, 85 290" fill="none" opacity="0.4" stroke="#10B981" stroke-dasharray="8 6" strokeWidth="1.5"></path>

<path d="M 256 185 L 256 290" fill="none" stroke="url(#lineGradient)" stroke-opacity="0.2" strokeWidth="1.5"></path>
<path className="connector-line" d="M 256 185 L 256 290" fill="none" opacity="0.6" stroke="#10B981" stroke-dasharray="8 6" strokeWidth="1.5" style={{animationDelay: '-1s'}}></path>

<path d="M 256 185 C 256 240, 426 220, 426 290" fill="none" stroke="url(#lineGradient)" stroke-opacity="0.2" strokeWidth="1.5"></path>
<path className="connector-line" d="M 256 185 C 256 240, 426 220, 426 290" fill="none" opacity="0.4" stroke="#10B981" stroke-dasharray="8 6" strokeWidth="1.5" style={{animationDelay: '-2s'}}></path>
</svg>
</div>

<div className="grid grid-cols-3 gap-4 relative z-10">

<div className="glass-card p-3 rounded-lg flex flex-col items-center gap-3 border border-white/5 bg-[#0A0A0A]/80 hover:bg-surfaceHighlight transition-colors group">
<div className="flex items-center gap-2 w-full justify-center pb-2 border-b border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider group-hover:text-white transition-colors">Dev</span>
</div>
<div className="flex flex-col items-center gap-1.5">
<div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:postgresql" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-mono">postgres</span>
</div>
</div>

<div className="glass-card p-3 rounded-lg flex flex-col items-center gap-3 border border-white/5 bg-[#0A0A0A]/80 hover:bg-surfaceHighlight transition-colors group">
<div className="flex items-center gap-2 w-full justify-center pb-2 border-b border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider group-hover:text-white transition-colors">Staging</span>
</div>
<div className="flex flex-col items-center gap-1.5">
<div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all" icon="logos:supabase-icon" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 font-mono">supabase</span>
</div>
</div>

<div className="glass-card p-3 rounded-lg flex flex-col items-center gap-3 border border-white/5 bg-[#0A0A0A]/80 hover:bg-surfaceHighlight transition-colors group">
<div className="flex items-center gap-2 w-full justify-center pb-2 border-b border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider group-hover:text-white transition-colors">Prod</span>
</div>
<div className="flex flex-col items-center gap-1.5 opacity-60">
<div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center text-zinc-600">

<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-600 font-mono">snowflake</span>
</div>
<div className="absolute -top-2 -right-2 bg-zinc-900 border border-zinc-800 rounded-full p-1 text-zinc-500">
<iconify-icon icon="solar:lock-password-bold" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/5 blur-3xl rounded-full z-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 relative border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 max-w-2xl mx-auto space-y-6">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Simple, transparent pricing.
            </h2>
<div className="flex items-center justify-center gap-3 text-sm font-medium">
<span className="text-white">Monthly</span>
<div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500/20 border border-emerald-500/30 cursor-pointer">
<span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-emerald-500 transition shadow"></span>
</div>
<span className="text-secondary">Yearly <span className="text-emerald-400 text-xs ml-1 font-normal">-20%</span></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card rounded-2xl p-8 flex flex-col h-full hover:border-white/20">
<div className="mb-4">
<h3 className="font-sans text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-secondary mt-1">For individuals and hobbyists.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$0</span>
<span className="text-secondary text-sm">/mo</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors mb-8">
                Get Started
              </button>
<ul className="space-y-4 text-sm text-secondary flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 1 Database connection
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 50 queries / day
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Read-only access
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Community support
                </li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col h-full border-emerald-500/30 relative bg-emerald-900/5 shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-[10px] font-bold text-black rounded-full uppercase tracking-wide">
                Most Popular
              </div>
<div className="mb-4">
<h3 className="font-sans text-lg font-medium text-white">Pro Team</h3>
<p className="text-sm text-emerald-100/60 mt-1">For fast-moving startups.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$49</span>
<span className="text-secondary text-sm">/mo</span>
</div>
<button className="w-full py-2.5 rounded-lg bg-emerald-500 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/50 mb-8">
                Start Free Trial
              </button>
<ul className="space-y-4 text-sm text-secondary flex-1">
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited connections
                </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited queries
                </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Safe Mutation Mode
                </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Multi-environment Sync
                </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> API Access
                </li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col h-full hover:border-white/20">
<div className="mb-4">
<h3 className="font-sans text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-secondary mt-1">For large scale organizations.</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">Custom</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors mb-8">
                Contact Sales
              </button>
<ul className="space-y-4 text-sm text-secondary flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> SSO / SAML
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> On-premise deployment
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Custom SLAs
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Dedicated Support
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Audit Logs
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-surfaceHighlight z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-sans text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to unify your data stack?
          </h2>
<p className="text-secondary text-lg mb-10 max-w-xl mx-auto font-light">
            Query, visualize, and operate on your data with confidence. 
            Join forward-thinking engineering teams today.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all duration-300">
               Start Free Trial
             </button>
<button className="w-full sm:w-auto px-8 py-4 bg-surfaceHighlight border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
               Talk to Sales
             </button>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/5 py-16 px-6 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:leaf-bold" width="14"></iconify-icon>
</div>
<span className="font-bold text-base tracking-tight text-white">
                LeafSQL
              </span>
</div>
<p className="text-xs text-secondary leading-relaxed">
              The enterprise standard for natural language data operations.
              Secure, schema-aware, and production-ready.
            </p>
<div className="text-[10px] text-zinc-600">
              © 2024 LeafSQL Inc. All rights reserved.
            </div>
</div>
<div className="flex flex-wrap gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Product</h4>
<ul className="space-y-2 text-xs text-zinc-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
<ul className="space-y-2 text-xs text-zinc-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
<ul className="space-y-2 text-xs text-zinc-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>





    </>
  );
}
