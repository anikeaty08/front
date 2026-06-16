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
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
border: "hsl(var(--border))",
background: "hsl(var(--background))",
},
animation: {
'marquee': 'marquee 40s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



  uniform float uTime; uniform float uDistortion; uniform float uSize; uniform vec2 uMouse; varying float vAlpha; varying vec3 vPos; varying float vNoise;
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); } vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; } float snoise(vec3 v) { const vec2 C = vec2(1.0/6.0, 1.0/3.0) ; const vec4 D = vec4(0.0, 0.5, 1.0, 2.0); vec3 i = floor(v + dot(v, C.yyy) ); vec3 x0 = v - i + dot(i, C.xxx) ; vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min( g.xyz, l.zxy ); vec3 i2 = max( g.xyz, l.zxy ); vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx; i = mod289(i); vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 )); float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z *ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_ ); vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4( x.xy, y.xy ); vec4 b1 = vec4( x.zw, y.zw ); vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0)); vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ; vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w); vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3))); p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w; vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m; return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) ); }
  void main() { vec3 pos = position; float noiseFreq = 0.5; float noiseAmp = uDistortion; float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq, pos.z * noiseFreq)); vNoise = noise; vec3 newPos = pos + (normalize(pos) * noise * noiseAmp); float dist = distance(uMouse * 10.0, newPos.xy); float interaction = smoothstep(5.0, 0.0, dist); newPos += normalize(pos) * interaction * 0.5; vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0); gl_Position = projectionMatrix * mvPosition; gl_PointSize = uSize * (24.0 / -mvPosition.z) * (1.0 + noise * 0.5); vAlpha = 1.0; vPos = newPos; }



  uniform vec3 uColor; uniform float uOpacity; varying float vNoise; varying vec3 vPos;
  void main() { vec2 center = gl_PointCoord - vec2(0.5); float dist = length(center); if (dist > 0.5) discard; float alpha = smoothstep(0.5, 0.2, dist) * uOpacity; vec3 darkColor = uColor * 0.5; vec3 lightColor = uColor * 1.8; vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5); gl_FragColor = vec4(finalColor, alpha); }



  // --- NAVIGATION & ROUTING ---
  function route(viewId) {
    // Hide all views
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
      setTimeout(() => {
        if(!view.classList.contains('active')) view.style.display = 'none';
      }, 500); 
    });

    // Show target view
    const target = document.getElementById(viewId);
    if(target) {
      target.style.display = 'block';
      setTimeout(() => {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        initScrollAnimations();
      }, 50);
    }
    
    // Update Nav Active State
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('text-emerald-600', 'dark:text-emerald-400', 'bg-neutral-100', 'dark:bg-white/10');
      if(link.dataset.target === viewId) {
        link.classList.add('text-emerald-600', 'dark:text-emerald-400', 'bg-neutral-100', 'dark:bg-white/10');
      }
    });

    document.getElementById('mobile-menu').classList.add('hidden');
  }

  // --- THEME TOGGLE ---
  function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      // Light Mode: Visible background (opacity 100 on container, darker green particles)
      if(typeof uniforms !== 'undefined') {
        uniforms.uColor.value.set('#047857'); // Darker Green for light mode visibility
        uniforms.uOpacity.value = 0.8; 
      }
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      // Dark Mode: Bright particles
      if(typeof uniforms !== 'undefined') {
        uniforms.uColor.value.set('#10b981'); // Bright Emerald
        uniforms.uOpacity.value = 0.6;
      }
    }
  }

  // --- SCROLL ANIMATIONS ---
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.remove('is-visible');
      observer.observe(el);
    });
  }

  // --- SCROLL TO TOP ---
  const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.remove('translate-y-20', 'opacity-0');
    } else {
      scrollBtn.classList.add('translate-y-20', 'opacity-0');
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- THREE.JS BACKGROUND ---
  const container = document.getElementById('canvas-container');
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.02);
  
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 18);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  
  const systemsGroup = new THREE.Group();
  systemsGroup.position.x = 4.5;
  scene.add(systemsGroup);

  const geometry = new THREE.IcosahedronGeometry(4.5, 30);
  const uniforms = {
    uTime: { value: 0 },
    uDistortion: { value: 0.6 },
    uSize: { value: 2.5 },
    uColor: { value: new THREE.Color('#10b981') }, 
    uOpacity: { value: 0.6 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  };
  const material = new THREE.ShaderMaterial({
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
    uniforms: uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending 
  });
  const particles = new THREE.Points(geometry, material);
  systemsGroup.add(particles);

  let time = 0;
  let mouseX = 0, mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.05;
    uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.05;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if(window.innerWidth < 768) {
      systemsGroup.position.set(0, 2, -5);
      systemsGroup.scale.set(0.8, 0.8, 0.8);
    } else {
      systemsGroup.position.set(4.5, 0, 0);
      systemsGroup.scale.set(1, 1, 1);
    }
  });
  
  if(window.innerWidth < 768) {
      systemsGroup.position.set(0, 2, -5);
      systemsGroup.scale.set(0.8, 0.8, 0.8);
  }

  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;
    systemsGroup.rotation.y = time * 0.05;
    systemsGroup.rotation.z = time * 0.02;
    uniforms.uTime.value = time;
    renderer.render(scene, camera);
  }
  animate();

  // --- INIT ---
  document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initScrollAnimations();
    
    // Check initial theme state to set correct colors immediately
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
      uniforms.uColor.value.set('#047857');
      uniforms.uOpacity.value = 0.8;
    }
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-noise"></div>

<div className="fixed top-0 left-0 w-full h-[120vh] -z-10 overflow-hidden pointer-events-none transition-all duration-700">
<div className="w-full h-full opacity-100 dark:opacity-80 transition-opacity duration-700" id="canvas-container"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 dark:from-black/80 dark:via-black/60 dark:to-black/90 pointer-events-none"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group z-50" href="#" onclick="route('home'); return false;">
<span className="text-xl font-bold tracking-tight font-display text-neutral-900 dark:text-white transition-colors">
          AdCoach<span className="text-emerald-500">.et</span>
</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1 shadow-sm backdrop-blur-md">
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="home" href="#" onclick="route('home'); return false;">Platform</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="features" href="#" onclick="route('features'); return false;">Features</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="pricing" href="#" onclick="route('pricing'); return false;">Pricing</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="roadmap" href="#" onclick="route('roadmap'); return false;">Roadmap</a>
</div>

<div className="flex items-center gap-3 z-50">
<button aria-label="Toggle Theme" className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white bg-white/50 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-all focus:outline-none ring-1 ring-neutral-200 dark:ring-white/10" onclick="toggleTheme()">
<svg className="w-5 h-5 dark:hidden" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
<svg className="w-5 h-5 hidden dark:block" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<button className="md:hidden p-2 text-neutral-600 dark:text-white/80" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 py-6 px-6 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col gap-6">
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('home'); return false;">Platform</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('features'); return false;">Features</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('pricing'); return false;">Pricing</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('roadmap'); return false;">Roadmap</a>
</div>
</div>
</header>
<main className="flex-grow pt-24 min-h-screen z-10">

<div className="page-view active" id="home">

<section className="relative pt-12 pb-24 sm:pt-24 sm:pb-32 px-6 text-center max-w-5xl mx-auto">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-8 hover:bg-emerald-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Powered by DeepSeek-R1 &amp; Hunyuan
        </div>
<h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tighter font-display font-semibold text-neutral-900 dark:text-white mb-8 leading-[1.1]">
          Transform Ads with <br className="hidden sm:block"/> AI Intelligence
        </h1>
<p className="text-lg sm:text-xl text-neutral-600 dark:text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          The only platform in Ethiopia that analyzes your Meta, Google, and TikTok ads in real-time and automatically generates high-converting video creatives.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-neutral-900 dark:bg-white text-white dark:text-black h-14 px-8 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20" onclick="route('pricing')">
<span>Start Free Trial</span>
<svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white h-14 px-8 rounded-full text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors" onclick="route('features')">
            View Features
          </button>
</div>
</div>
</section>

<section className="border-y border-neutral-200/50 dark:border-white/5 py-12 overflow-hidden bg-neutral-50/50 dark:bg-transparent">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-white/40">Integrates Seamlessly With</p>
</div>
<div className="relative flex overflow-hidden mask-linear-gradient">
<div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-blue-600" data-lucide="facebook" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> META ADS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-green-500" data-lucide="search" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> GOOGLE ADS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-black dark:text-white" data-lucide="video" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> TIKTOK ADS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-purple-500" data-lucide="cpu" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> DEEPSEEK-R1</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-orange-500" data-lucide="zap" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> HUNYUAN VIDEO</div>
</div>
<div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-blue-600" data-lucide="facebook" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> META ADS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-green-500" data-lucide="search" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> GOOGLE ADS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-black dark:text-white" data-lucide="video" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> TIKTOK ADS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-purple-500" data-lucide="cpu" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> DEEPSEEK-R1</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-orange-500" data-lucide="zap" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> HUNYUAN VIDEO</div>
</div>
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
</div>
</section>

<section className="py-32 bg-neutral-50/50 dark:bg-white/5 border-t border-neutral-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">Core Technology</h2>
<h3 className="text-4xl sm:text-5xl font-display font-semibold text-neutral-900 dark:text-white">AI-Driven Advertising</h3>
</div>
<button className="hidden md:inline-flex items-center text-sm font-semibold text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-white/30 hover:border-emerald-500 pb-1 transition-colors" onclick="route('features')">
            All Capabilities <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 reveal-on-scroll delay-100 group">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<svg data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.97-3.284"></path><path d="M17.97 14.716A4 4 0 0 1 16 18"></path></svg>
</div>
<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">DeepSeek Analysis</h4>
<p className="text-neutral-500 dark:text-white/60 text-sm mb-6">Diagnose low CTR and CPM using the 7B parameter reasoning model running locally.</p>
</div>

<div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 reveal-on-scroll delay-200 group">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
<svg data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</div>
<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Video Generation</h4>
<p className="text-neutral-500 dark:text-white/60 text-sm mb-6">Create 10-60s video ads automatically using Tencent's Hunyuan model and CosyVoice.</p>
</div>

<div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 reveal-on-scroll delay-300 group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
<svg data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Multi-Platform Sync</h4>
<p className="text-neutral-500 dark:text-white/60 text-sm mb-6">Unified dashboard for Meta, Google, and TikTok. Compare ROI across all channels instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="pricing-preview">
<div className="mb-16 text-center reveal-on-scroll">
<h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">Pricing Plans</h2>
<h3 className="text-4xl sm:text-5xl font-display font-semibold text-neutral-900 dark:text-white">Choose Your Growth Engine</h3>
</div>
<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

<div className="group relative p-8 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black shadow-xl reveal-on-scroll">
<div className="mb-8">
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Base Plan</h3>
<div className="flex items-baseline gap-2 mt-4">
<span className="text-5xl font-display font-bold text-neutral-900 dark:text-white">$15</span>
<span className="text-neutral-500">/month</span>
</div>
<p className="text-sm text-neutral-500 dark:text-white/50 mt-2">(~1,800 ETB)</p>
</div>
<ul className="space-y-4 mb-8 text-neutral-600 dark:text-white/70 text-sm">
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Real-time Dashboard</li>
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Basic AI Analysis (DeepSeek)</li>
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> 5 Video Generations/mo</li>
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Watermarked Videos</li>
</ul>
<button className="w-full h-12 rounded-xl border border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors">Start 7-Day Free Trial</button>
</div>

<div className="group relative p-8 rounded-3xl border border-emerald-500/50 bg-emerald-500/5 dark:bg-emerald-900/10 shadow-2xl shadow-emerald-500/10 reveal-on-scroll delay-100">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
<div className="mb-8">
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Premium Plan</h3>
<div className="flex items-baseline gap-2 mt-4">
<span className="text-5xl font-display font-bold text-neutral-900 dark:text-white">$50</span>
<span className="text-neutral-500">/month</span>
</div>
<p className="text-sm text-neutral-500 dark:text-white/50 mt-2">(~6,000 ETB)</p>
</div>
<ul className="space-y-4 mb-8 text-neutral-600 dark:text-white/70 text-sm">
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Advanced AI Insights</li>
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Voice Cloning (CosyVoice)</li>
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Unlimited Video Generation</li>
<li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> No Watermark</li>
</ul>
<button className="w-full h-12 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/25">Get Premium Access</button>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">Development Roadmap</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto">Our path to revolutionizing Ethiopian advertising.</p>
</div>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal-on-scroll">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-neutral-900 group-[.is-active]:bg-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_rgba(16,185,129,0.2)]">
<svg className="w-5 h-5 text-white" data-lucide="server"></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-emerald-500/50 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-emerald-400">Week 1-3</span>
<span className="text-xs font-mono text-neutral-500">BACKEND</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Foundation &amp; API Integration</h3>
<p className="text-neutral-400 text-sm">PostgreSQL setup, Stripe integration, and connection to Meta, Google, and TikTok APIs. Establishing the AWS infrastructure.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal-on-scroll delay-100">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-neutral-900 group-[.is-active]:bg-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_rgba(16,185,129,0.2)]">
<svg className="w-5 h-5 text-white" data-lucide="brain"></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-emerald-500/50 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-emerald-400">Week 4-5</span>
<span className="text-xs font-mono text-neutral-500">AI PIPELINE</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">DeepSeek &amp; Video Gen</h3>
<p className="text-neutral-400 text-sm">Integration of DeepSeek-R1 for ad logic analysis and HunyuanVideo for generating creative assets automatically.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-on-scroll delay-200">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-neutral-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<svg className="w-5 h-5 text-white" data-lucide="rocket"></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-emerald-500/50 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-neutral-400">Month 2</span>
<span className="text-xs font-mono text-neutral-500">LAUNCH</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Beta Launch &amp; Growth</h3>
<p className="text-neutral-400 text-sm">Recruiting 50 US &amp; Ethiopian beta users, Product Hunt launch, and scaling paid acquisition channels.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto text-center">
<div className="reveal-on-scroll">
<h2 className="text-4xl sm:text-6xl font-display font-semibold text-neutral-900 dark:text-white mb-6">Ready to Scale?</h2>
<p className="text-xl text-neutral-600 dark:text-white/60 mb-10">Join 10,000+ agencies utilizing AI to cut costs and boost ROI.</p>
<button className="group inline-flex items-center justify-center bg-emerald-500 text-white h-16 px-10 rounded-full text-lg font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:scale-105" onclick="route('pricing')">
          Get Started Now
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>
</div>

<div className="page-view" id="features">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Platform Features</h1>
<p className="text-xl text-neutral-600 dark:text-white/60">Built on a microservices architecture using Go, Python, and Next.js.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-500"><svg data-lucide="bar-chart-2" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Real-time Analytics</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Hourly data sync from all platforms via WebSocket connections.</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-500"><svg data-lucide="message-square-dashed" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Reasoning Bot</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Diagnosis Bot using DeepSeek-R1 provides specific fixes for low performing ads.</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 text-emerald-500"><svg data-lucide="video" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Hunyuan Video</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Generate 1080p videos for TikTok and Reels at $0.15/second cost.</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-500"><svg data-lucide="mic" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">CosyVoice TTS</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Natural sounding voiceovers in English and Chinese with background music mixing.</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-500"><svg data-lucide="download" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Data Export</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Export reports in PDF/CSV (Base) or JSON (Premium) for client reporting.</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-500"><svg data-lucide="lock" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Enterprise Security</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Encrypted tokens (AWS KMS) and isolated containers via Kubernetes.</p>
</div>
</div>
</section>
</div>

<div className="page-view" id="pricing">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Simple Pricing</h1>
<p className="text-xl text-neutral-600 dark:text-white/60">No hidden fees. Cancel anytime. Prices in USD.</p>
</div>
<div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
<div className="rounded-3xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 p-10 reveal-on-scroll">
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Base Plan</h3>
<div className="text-4xl font-bold mb-6">$15 <span className="text-lg font-normal text-neutral-500">/mo</span></div>
<p className="text-neutral-500 mb-8">Perfect for freelancers and small Ethiopian businesses.</p>
<button className="w-full py-4 rounded-xl border border-neutral-300 dark:border-white/20 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors font-semibold">Start 7-Day Trial</button>
<div className="mt-8 space-y-4">
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> 3 Connected Accounts</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Weekly Reports</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> 5 AI Videos / Month</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Standard Support</div>
</div>
</div>
<div className="rounded-3xl border-2 border-emerald-500 bg-neutral-900 dark:bg-black p-10 relative reveal-on-scroll delay-100">
<div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-2xl text-xs font-bold uppercase">Best Value</div>
<h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
<div className="text-4xl font-bold text-white mb-6">$50 <span className="text-lg font-normal text-neutral-400">/mo</span></div>
<p className="text-neutral-400 mb-8">For agencies managing multiple clients.</p>
<button className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors font-semibold shadow-lg shadow-emerald-500/30">Get Started</button>
<div className="mt-8 space-y-4 text-white">
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Unlimited Accounts</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Real-time Insights</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Unlimited AI Videos</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> Voice Cloning</div>
<div className="flex gap-3 text-sm"><svg className="w-5 h-5 text-emerald-500" data-lucide="check"></svg> No Watermark</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="roadmap">
<section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Execution Plan</h1>
<p className="text-xl text-neutral-600 dark:text-white/60">Our step-by-step journey to launch.</p>
</div>
<div className="space-y-8">

<div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 reveal-on-scroll">
<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Week 1: Foundation</h3>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mt-2 sm:mt-0">Completed</span>
</div>
<ul className="space-y-3 text-neutral-600 dark:text-white/60">
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> AWS Organization &amp; Infrastructure setup</li>
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> Domain DNS &amp; Legal structuring</li>
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> Developer accounts for Meta, Google, TikTok</li>
</ul>
</div>

<div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 reveal-on-scroll delay-100">
<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Week 2-3: Core Backend</h3>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 text-xs font-bold uppercase tracking-wide mt-2 sm:mt-0">In Progress</span>
</div>
<ul className="space-y-3 text-neutral-600 dark:text-white/60">
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> FastAPI User Authentication &amp; JWT</li>
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> Stripe Subscription Logic (Webhooks)</li>
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> OAuth Integration for Ad Platforms</li>
</ul>
</div>

<div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 reveal-on-scroll delay-200">
<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Week 4: AI Engine</h3>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase tracking-wide mt-2 sm:mt-0">Scheduled</span>
</div>
<ul className="space-y-3 text-neutral-600 dark:text-white/60">
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> Ollama + DeepSeek-R1 Deployment</li>
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> Hunyuan Video Generation Pipeline</li>
<li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2"></span> Next.js Dashboard Frontend</li>
</ul>
</div>
</div>
</section>
</div>

<div className="page-view" id="contact">
<section className="pt-32 pb-20 px-6 relative">
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-12 reveal-on-scroll">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">Beta Access</span>
<h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">Join the Waitlist</h2>
<p className="text-lg text-neutral-600 dark:text-white/60">We are accepting 50 beta users for the initial launch.</p>
</div>
<form className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl dark:shadow-none reveal-on-scroll delay-100 backdrop-blur-sm">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Company Name</label>
<input className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="Acme Agency" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Work Email</label>
<input className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="john@company.com" type="email"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Monthly Ad Spend</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none cursor-pointer">
<option className="dark:bg-neutral-900">&lt; $1,000 / mo</option>
<option className="dark:bg-neutral-900">$1,000 - $5,000 / mo</option>
<option className="dark:bg-neutral-900">$5,000+ / mo</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Primary Platform</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none cursor-pointer">
<option className="dark:bg-neutral-900">Facebook / Instagram</option>
<option className="dark:bg-neutral-900">Google Ads</option>
<option className="dark:bg-neutral-900">TikTok Ads</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-emerald-500 px-8 py-4 text-sm font-semibold text-white dark:text-neutral-900 hover:opacity-90 transition shadow-lg" type="button">
                  Request Access
              </button>
</div>
</form>
</div>
</section>
</div>
</main>

<footer className="border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black py-16 relative z-10">
<div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">AdCoach<span className="text-emerald-500">.et</span></span>
</div>
<p className="text-sm text-neutral-500 dark:text-white/50 max-w-sm leading-relaxed mb-6">The premier AI advertising platform for the Ethiopian market. Optimizing ROI across Meta, Google, and TikTok.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg></a>
<a className="text-neutral-400 hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500 dark:text-white/60">
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('home'); return false;">Platform</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('features'); return false;">Features</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('pricing'); return false;">Pricing</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('roadmap'); return false;">Roadmap</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500 dark:text-white/60">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-200 dark:border-white/10">
<p className="text-xs text-center text-neutral-400 dark:text-white/30">© 2025 AdCoach Inc. Built in Addis Ababa.</p>
</div>
</footer>

<button aria-label="Scroll to top" className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutral-900 dark:bg-emerald-500 text-white dark:text-neutral-900 shadow-xl translate-y-20 opacity-0 transition-all duration-300 hover:-translate-y-1 focus:outline-none" id="scrollToTopBtn">
<svg data-lucide="arrow-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path><path d="m12 9 0 10"></path></svg>
</button>





    </>
  );
}
