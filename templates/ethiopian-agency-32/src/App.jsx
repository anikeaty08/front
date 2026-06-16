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
    blending: THREE.NormalBlending // Changed from Additive to Normal for better visibility on white
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
          Ethio<span className="text-emerald-500">web</span>agency
        </span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1 shadow-sm backdrop-blur-md">
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="home" href="#" onclick="route('home'); return false;">Home</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="services" href="#" onclick="route('services'); return false;">Services</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="portfolio" href="#" onclick="route('portfolio'); return false;">Portfolio</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="team" href="#" onclick="route('team'); return false;">Team</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-neutral-600 dark:text-white/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all rounded-full" data-target="contact" href="#" onclick="route('contact'); return false;">Contact</a>
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
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('home'); return false;">Home</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('services'); return false;">Services</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('portfolio'); return false;">Portfolio</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('team'); return false;">Team</a>
<a className="text-lg font-medium text-neutral-600 dark:text-white/70" href="#" onclick="route('contact'); return false;">Contact</a>
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
          #1 Digital Agency in Addis Ababa
        </div>
<h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tighter font-display font-semibold text-neutral-900 dark:text-white mb-8 leading-[1.1]">
          Building the Digital <br className="hidden sm:block"/> Future of Ethiopia
        </h1>
<p className="text-lg sm:text-xl text-neutral-600 dark:text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Premium web development for Hotels, Real Estate, and Educational Institutions. We combine world-class design with local market expertise.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-neutral-900 dark:bg-white text-white dark:text-black h-14 px-8 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20" onclick="route('contact')">
<span>Start Your Project</span>
<svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white h-14 px-8 rounded-full text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors" onclick="route('portfolio')">
            View Our Work
          </button>
</div>
</div>
</section>

<section className="border-y border-neutral-200/50 dark:border-white/5 py-12 overflow-hidden bg-neutral-50/50 dark:bg-transparent">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-white/40">Our Capabilities</p>
</div>
<div className="relative flex overflow-hidden mask-linear-gradient">

<div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-emerald-500" data-lucide="layout-template" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> WEB DEVELOPMENT</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-blue-500" data-lucide="smartphone" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> MOBILE APPS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-purple-500" data-lucide="search" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> SEO OPTIMIZATION</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-orange-500" data-lucide="shopping-cart" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> E-COMMERCE</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-pink-500" data-lucide="pen-tool" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> UI/UX DESIGN</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-indigo-500" data-lucide="shield-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> CYBER SECURITY</div>
</div>

<div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-emerald-500" data-lucide="layout-template" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> WEB DEVELOPMENT</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-blue-500" data-lucide="smartphone" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> MOBILE APPS</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-purple-500" data-lucide="search" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> SEO OPTIMIZATION</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-orange-500" data-lucide="shopping-cart" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> E-COMMERCE</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-pink-500" data-lucide="pen-tool" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> UI/UX DESIGN</div>
<div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 font-bold text-lg"><svg className="w-6 h-6 text-indigo-500" data-lucide="shield-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"></svg> CYBER SECURITY</div>
</div>

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
</div>
</section>

<section className="py-32 bg-neutral-50/50 dark:bg-white/5 border-t border-neutral-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">Our Expertise</h2>
<h3 className="text-4xl sm:text-5xl font-display font-semibold text-neutral-900 dark:text-white">Specialized Digital Solutions</h3>
</div>
<button className="hidden md:inline-flex items-center text-sm font-semibold text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-white/30 hover:border-emerald-500 pb-1 transition-colors" onclick="route('services')">
            View All Services <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 reveal-on-scroll delay-100 group">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Web Development</h4>
<p className="text-neutral-500 dark:text-white/60 text-sm mb-6">Custom websites built with React and Tailwind designed for speed.</p>
<a className="text-sm font-medium text-blue-600 dark:text-blue-400" href="#" onclick="route('services'); return false;">Learn more →</a>
</div>
<div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 reveal-on-scroll delay-200 group">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Secure Systems</h4>
<p className="text-neutral-500 dark:text-white/60 text-sm mb-6">School portals and booking engines with bank-grade security.</p>
<a className="text-sm font-medium text-purple-600 dark:text-purple-400" href="#" onclick="route('services'); return false;">Learn more →</a>
</div>
<div className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-white/10 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 reveal-on-scroll delay-300 group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Real Estate Solutions</h4>
<p className="text-neutral-500 dark:text-white/60 text-sm mb-6">Property listing platforms with maps and virtual tour integration.</p>
<a className="text-sm font-medium text-emerald-600 dark:text-emerald-400" href="#" onclick="route('services'); return false;">Learn more →</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">Recent Work</h2>
<h3 className="text-4xl sm:text-5xl font-display font-semibold text-neutral-900 dark:text-white">Delivering Excellence</h3>
</div>
<div className="space-y-24">

<div className="group relative grid md:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div className="order-2 md:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-200 dark:border-white/10 shadow-2xl">
<img alt="Real Estate Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<div className="flex items-center gap-3 mb-6">
<span className="w-10 h-[1px] bg-neutral-900 dark:bg-white"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">Real Estate</span>
</div>
<h3 className="text-4xl font-display font-semibold text-neutral-900 dark:text-white mb-6">Grand Horizon</h3>
<p className="text-lg text-neutral-600 dark:text-white/70 mb-8 leading-relaxed">
              We built a custom Next.js platform allowing Grand Horizon to list 500+ properties with advanced filtering and map integration.
            </p>
<button className="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors" onclick="route('portfolio')">
              View Case Study <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative grid md:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div className="order-2 relative rounded-3xl overflow-hidden aspect-[4/3] border border-neutral-200 dark:border-white/10 shadow-2xl">
<img alt="Hotel Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="order-1">
<div className="flex items-center gap-3 mb-6">
<span className="w-10 h-[1px] bg-neutral-900 dark:bg-white"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">Hospitality</span>
</div>
<h3 className="text-4xl font-display font-semibold text-neutral-900 dark:text-white mb-6">Lalibela Resort</h3>
<p className="text-lg text-neutral-600 dark:text-white/70 mb-8 leading-relaxed">
              A 5-star digital experience featuring direct booking, room virtual tours, and local experience guides.
            </p>
<button className="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors" onclick="route('portfolio')">
              View Case Study <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl sm:text-5xl font-display font-semibold mb-8 reveal-on-scroll">Meet the Experts</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 reveal-on-scroll delay-100">Our team consists of Ethiopia's finest developers, designers, and strategists.</p>
<button className="inline-flex items-center justify-center bg-white text-black h-12 px-8 rounded-full text-sm font-bold transition-transform hover:-translate-y-1 reveal-on-scroll delay-200" onclick="route('team')">
          Meet the Whole Team
        </button>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto text-center">
<div className="reveal-on-scroll">
<h2 className="text-4xl sm:text-6xl font-display font-semibold text-neutral-900 dark:text-white mb-6">Ready to Start?</h2>
<p className="text-xl text-neutral-600 dark:text-white/60 mb-10">We are currently accepting new projects for Q2 2025.</p>
<button className="group inline-flex items-center justify-center bg-emerald-500 text-white h-16 px-10 rounded-full text-lg font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:scale-105" onclick="route('contact')">
          Get a Free Quote
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>
</div>

<div className="page-view" id="services">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Our Services</h1>
<p className="text-xl text-neutral-600 dark:text-white/60">Comprehensive digital solutions tailored for the Ethiopian market.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-500"><svg data-lucide="code-2" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Custom Development</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Scalable web applications built from the ground up using React and Node.js.</p>
<button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-emerald-500" onclick="route('contact')">Inquire →</button>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-500"><svg data-lucide="layout-template" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Premium WordPress</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Easy to manage websites with custom themes and powerful plugins.</p>
<button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-emerald-500" onclick="route('contact')">Inquire →</button>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 text-emerald-500"><svg data-lucide="building-2" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Hotel Booking Engines</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Direct booking systems integrated with international payment gateways.</p>
<button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-emerald-500" onclick="route('contact')">Inquire →</button>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-500"><svg data-lucide="shopping-cart" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">E-Commerce</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Online stores with inventory management and local payment options (Chapa, Telebirr).</p>
<button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-emerald-500" onclick="route('contact')">Inquire →</button>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-500"><svg data-lucide="pen-tool" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">UI/UX Design</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">World-class interface design that improves user engagement and conversion.</p>
<button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-emerald-500" onclick="route('contact')">Inquire →</button>
</div>
<div className="p-8 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-500"><svg data-lucide="search" height="24" width="24"></svg></div>
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">SEO &amp; Marketing</h3>
<p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">Rank higher on Google and reach more customers in Ethiopia and abroad.</p>
<button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-emerald-500" onclick="route('contact')">Inquire →</button>
</div>
</div>
</section>
</div>

<div className="page-view" id="portfolio">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">Selected Works</h1>
<p className="text-xl text-neutral-600 dark:text-white/60">A showcase of our finest digital products.</p>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="group cursor-pointer reveal-on-scroll">
<div className="rounded-2xl overflow-hidden aspect-video border border-neutral-200 dark:border-white/10 mb-6 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Grand Horizon Properties</h3>
<p className="text-neutral-500 mt-2">Real Estate Platform • Next.js</p>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="rounded-2xl overflow-hidden aspect-video border border-neutral-200 dark:border-white/10 mb-6 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Lalibela Heights</h3>
<p className="text-neutral-500 mt-2">Hotel Booking • WordPress</p>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="rounded-2xl overflow-hidden aspect-video border border-neutral-200 dark:border-white/10 mb-6 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Addis International School</h3>
<p className="text-neutral-500 mt-2">Education Portal • React</p>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="rounded-2xl overflow-hidden aspect-video border border-neutral-200 dark:border-white/10 mb-6 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h3 className="text-2xl font-bold text-neutral-900 dark:text-white">EthioPay Integration</h3>
<p className="text-neutral-500 mt-2">Fintech • Node.js</p>
</div>
</div>
</section>
</div>

<div className="page-view" id="team">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-5xl sm:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">The Team</h1>
<p className="text-xl text-neutral-600 dark:text-white/60">Creative minds building digital experiences.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

<div className="group bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll delay-100">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-white/10 shadow-lg">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Dawit Alemu</h3>
<p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-1">Lead Developer</p>
</div>
<div className="group bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll delay-200">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-white/10 shadow-lg">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Sara Kebede</h3>
<p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mt-1">UI/UX Designer</p>
</div>
<div className="group bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll delay-300">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-white/10 shadow-lg">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Abebe Tadesse</h3>
<p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">Backend Engineer</p>
</div>
<div className="group bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll delay-400">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-white/10 shadow-lg">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-lg font-bold text-neutral-900 dark:text-white">Helen Bekele</h3>
<p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-1">Project Manager</p>
</div>
</div>
</section>
</div>

<div className="page-view" id="contact">
<section className="pt-32 pb-20 px-6 relative">
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-12 reveal-on-scroll">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">Get In Touch</span>
<h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">Let's Build Together</h2>
<p className="text-lg text-neutral-600 dark:text-white/60">Tell us about your project. We'll get back to you within 24 hours.</p>
</div>
<form className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl dark:shadow-none reveal-on-scroll delay-100 backdrop-blur-sm">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="Your Name" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="john@company.com" type="email"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Service Type</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none cursor-pointer">
<option className="dark:bg-neutral-900">Hotel Website</option>
<option className="dark:bg-neutral-900">Real Estate Platform</option>
<option className="dark:bg-neutral-900">School Portal/Website</option>
<option className="dark:bg-neutral-900">Other Custom Project</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Budget Range</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none cursor-pointer">
<option className="dark:bg-neutral-900">50,000 - 100,000 ETB</option>
<option className="dark:bg-neutral-900">100,000 - 300,000 ETB</option>
<option className="dark:bg-neutral-900">300,000 ETB +</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-bold text-neutral-700 dark:text-white/60 mb-2 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder-neutral-400 dark:placeholder-white/20" placeholder="Tell us about your project goals..." rows="4"></textarea>
</div>
</div>
<div className="mt-8">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-emerald-500 px-8 py-4 text-sm font-semibold text-white dark:text-neutral-900 hover:opacity-90 transition shadow-lg" type="button">
                  Send Inquiry
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
<span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">Ethio<span className="text-emerald-500">web</span>agency</span>
</div>
<p className="text-sm text-neutral-500 dark:text-white/50 max-w-sm leading-relaxed mb-6">The premier web development agency for Ethiopia's hospitality, real estate, and education sectors. Located in Bole, Addis Ababa.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg></a>
<a className="text-neutral-400 hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500 dark:text-white/60">
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('home'); return false;">Home</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('services'); return false;">Services</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('portfolio'); return false;">Portfolio</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('team'); return false;">Team</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#" onclick="route('contact'); return false;">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500 dark:text-white/60">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-200 dark:border-white/10">
<p className="text-xs text-center text-neutral-400 dark:text-white/30">© 2025 Ethiowebagency. Built in Addis Ababa.</p>
</div>
</footer>

<button aria-label="Scroll to top" className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutral-900 dark:bg-emerald-500 text-white dark:text-neutral-900 shadow-xl translate-y-20 opacity-0 transition-all duration-300 hover:-translate-y-1 focus:outline-none" id="scrollToTopBtn">
<svg data-lucide="arrow-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path><path d="m12 9 0 10"></path></svg>
</button>





    </>
  );
}
