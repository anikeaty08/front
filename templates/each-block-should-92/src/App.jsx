import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('three-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const particleCount = 80;
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
            velocities.push({
                x: (Math.random() - 0.5) * 0.005,
                y: (Math.random() - 0.5) * 0.005,
                z: (Math.random() - 0.5) * 0.002
            });
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x6366f1,
            size: 0.05,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        camera.position.z = 8;
        const clock = new THREE.Clock();

        function animate() {
            const elapsed = clock.getElapsedTime();
            const posArray = particleGeometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                posArray[i * 3] += velocities[i].x;
                posArray[i * 3 + 1] += velocities[i].y;
                posArray[i * 3 + 2] += velocities[i].z;
                if (Math.abs(posArray[i * 3]) > 10) velocities[i].x *= -1;
                if (Math.abs(posArray[i * 3 + 1]) > 10) velocities[i].y *= -1;
                if (Math.abs(posArray[i * 3 + 2] + 5) > 5) velocities[i].z *= -1;
            }
            particleGeometry.attributes.position.needsUpdate = true;

            particles.rotation.y = elapsed * 0.02;
            particles.rotation.x = Math.sin(elapsed * 0.01) * 0.1;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2" href="#">
<div className="w-7 h-7 bg-neutral-900 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-base font-semibold tracking-tight">AuthFlow</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition" href="#">Platform</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition" href="#">Solutions</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition" href="#">Use Cases</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-sm text-neutral-600 hover:text-neutral-900 transition px-4 py-2 rounded-full border border-neutral-200 hover:border-neutral-300" href="#">Log in</a>
<a className="text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 px-5 py-2 rounded-full transition" href="#demo">Request a demo</a>
</div>
</div>
</nav>

<section className="hero-section min-h-screen pt-16 relative">
<canvas height="894" id="three-canvas" style={{width: '1481px', height: '894px'}} width="1481"></canvas>
<div className="gradient-blur absolute inset-0 pointer-events-none"></div>
<div className="gradient-blur-2 absolute inset-0 pointer-events-none"></div>
<div className="lg:px-8 lg:pt-32 max-w-7xl z-10 mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7 relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-dot"></span>
<span className="text-xs font-medium text-indigo-700">Multi-channel authentication</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none text-neutral-900">
                        Authentication
                        <span className="block mt-2">built for</span>
<span className="block mt-2 relative">
<span className="relative z-10">secure access</span>
<svg className="absolute -bottom-2 left-0 w-full h-4 z-0" fill="none" viewbox="0 0 400 16">
<path d="M2 14C80 2 320 2 398 14" opacity="0.3" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</span>
<span className="block mt-2 text-neutral-300">at scale</span>
</h1>
<p className="mt-10 text-lg lg:text-xl text-neutral-500 max-w-lg leading-relaxed">
                        Confirm critical user actions with confidence. AuthFlow adapts as your product grows and records every approval for audit and compliance.
                    </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white text-base font-medium px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/10" href="#demo">
                            Request a demo
                            <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center gap-2 text-base text-neutral-600 hover:text-neutral-900 transition" href="#how">
<span>See how it works</span>
<i className="w-4 h-4" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[520px] hidden md:block">
<div className="absolute top-0 right-0 w-72 bg-white rounded-2xl border border-neutral-200 p-5 card-glow animate-float z-20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Delivery Channel</span>
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot"></span>
</div>
<div className="space-y-2.5">
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-indigo-50 border border-indigo-100">
<div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<span className="text-sm font-medium">Push Notification</span>
<div className="flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs text-emerald-600">Delivered · 0.3s</span>
</div>
</div>
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition">
<div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-500" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-neutral-500">SMS</span>
<span className="text-xs text-neutral-400 block">Fallback ready</span>
</div>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition">
<div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-500" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-neutral-500">Telegram</span>
<span className="text-xs text-neutral-400 block">Fallback ready</span>
</div>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition">
<div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-500" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-neutral-500">Voice Call</span>
<span className="text-xs text-neutral-400 block">Last resort</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-16 left-0 lg:-left-8 w-64 bg-white rounded-2xl border border-neutral-200 p-5 card-glow-green animate-float-delayed z-30">
<div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Verification</div>
<div className="flex items-center gap-2 mb-3">
<div className="flex gap-1.5">
<div className="w-10 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-white text-lg font-semibold">4</div>
<div className="w-10 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-white text-lg font-semibold">7</div>
<div className="w-10 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-white text-lg font-semibold">2</div>
<div className="w-10 h-12 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-lg font-semibold animate-pulse">9</div>
</div>
</div>
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-amber-500" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-amber-600 font-medium">Expires in 2:47</span>
</div>
</div>
<div className="absolute bottom-0 right-4 w-56 bg-neutral-900 text-white rounded-2xl p-4 z-10 animate-float" style={{animationDelay: '1s'}}>
<div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Audit Log</div>
<div className="space-y-2 text-xs font-mono">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-neutral-300">Code verified</span>
<span className="text-neutral-500 ml-auto">0.3s</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-neutral-300">Push delivered</span>
<span className="text-neutral-500 ml-auto">0.1s</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
<span className="text-neutral-300">Action initiated</span>
<span className="text-neutral-500 ml-auto">0.0s</span>
</div>
</div>
</div>
<svg className="absolute top-[280px] left-[120px] w-32 h-32 z-0 opacity-30" viewbox="0 0 120 120">
<path d="M10 10 C 40 10, 60 50, 110 110" fill="none" stroke="#6366f1" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<circle cx="110" cy="110" fill="#6366f1" r="3"></circle>
</svg>
</div>
</div>
<div className="flex justify-center mt-16 lg:mt-24 pb-8">
<a className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition" href="#how">
<span className="text-xs font-medium">Scroll to continue</span>
<i className="w-4 h-4 animate-bounce" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40" id="how">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
<div className="lg:col-span-5 lg:col-start-1">
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Channels</span>
<h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                        Choose the channel<br/>
<span className="text-neutral-300">that works for</span><br/>
                        your users
                    </h2>
</div>
<div className="lg:col-span-5 lg:col-start-8 lg:pt-16">
<p className="text-lg text-neutral-500 leading-relaxed">
                        Push notifications, SMS, Telegram messages and voice calls deliver one‑time codes instantly. Pick the channel that suits each customer; the system will automatically fail over if a message isn't delivered.
                    </p>
</div>
</div>
<div className="mt-20 lg:mt-32 relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">

<div className="group relative bg-white rounded-3xl border border-neutral-200 p-6 lg:p-8 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
<div className="absolute top-6 right-6">
<span className="text-xs font-mono text-neutral-300">01</span>
</div>

<div className="w-full h-40 mb-6 flex items-center justify-center">
<svg className="w-full h-full group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 180 140">

<rect fill="white" height="120" rx="14" stroke="#6366f1" strokeWidth="1.5" width="70" x="55" y="10"></rect>
<rect fill="#f5f3ff" height="90" rx="4" width="60" x="60" y="22"></rect>

<rect fill="#e0e7ff" height="3" rx="1.5" width="36" x="67" y="30"></rect>
<rect fill="#e0e7ff" height="3" rx="1.5" width="24" x="67" y="37"></rect>

<rect fill="#e5e7eb" height="4" rx="2" width="24" x="78" y="14"></rect>

<rect fill="#e5e7eb" height="3" rx="1.5" width="24" x="78" y="122"></rect>

<rect fill="white" height="32" rx="6" stroke="#6366f1" strokeWidth="1" width="54" x="63" y="52"></rect>
<circle cx="73" cy="62" fill="#6366f1" opacity="0.2" r="4"></circle>
<path d="M71.5 62L72.8 63.3L75 61" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
<rect fill="#6366f1" height="2.5" opacity="0.6" rx="1.25" width="28" x="80" y="59"></rect>
<rect fill="#c7d2fe" height="2" rx="1" width="20" x="80" y="64"></rect>
<rect fill="#f5f3ff" height="10" rx="0 0 6 6" width="54" x="63" y="70"></rect>
<rect fill="#6366f1" height="3" rx="1.5" width="18" x="68" y="73.5"></rect>
<text fill="white" fontFamily="Inter" fontSize="3" font-weight="600" x="69" y="76.5">Approve</text>
<rect fill="#e5e7eb" height="3" rx="1.5" width="18" x="90" y="73.5"></rect>

<circle cx="140" cy="28" fill="#eef2ff" r="14" stroke="#c7d2fe" strokeWidth="1"></circle>
<path d="M136 30.5c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1.5l-.5 1h-10l-.5-1H136v-2z" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="1"></path>
<circle cx="140" cy="35" fill="#6366f1" r="1"></circle>

<path d="M148 20c2 2 2 6 0 8" opacity="0.4" stroke="#6366f1" strokeLinecap="round" strokeWidth="0.8"></path>
<path d="M151 17c3 4 3 10 0 14" opacity="0.2" stroke="#6366f1" strokeLinecap="round" strokeWidth="0.8"></path>

<circle cx="30" cy="100" fill="#f0fdf4" r="16" stroke="#bbf7d0" strokeWidth="1"></circle>
<path d="M24 100a6 6 0 0 1 12 0" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path>
<line stroke="#10b981" strokeLinecap="round" strokeWidth="1.5" x1="30" x2="33" y1="100" y2="96"></line>
<text fill="#10b981" fontFamily="Inter" fontSize="5" font-weight="600" text-anchor="middle" x="30" y="107">Fast</text>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Push</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Instant in-app delivery with the lowest cost per message</p>
<div className="mt-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-emerald-600 font-medium">~0.1s delivery</span>
</div>
<div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
<div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-neutral-200 p-6 lg:p-8 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5">
<div className="absolute top-6 right-6">
<span className="text-xs font-mono text-neutral-300">02</span>
</div>

<div className="w-full h-40 mb-6 flex items-center justify-center">
<svg className="w-full h-full group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 180 140">

<rect className="" fill="#f0fdf4" height="38" rx="12" stroke="#bbf7d0" strokeWidth="1" width="100" x="20" y="20"></rect>
<text fill="#6b7280" fontFamily="Inter" fontSize="6" x="36" y="36">Your code is:</text>
<text fill="#059669" fontFamily="Inter, monospace" fontSize="11" font-weight="700" letter-spacing="4" x="36" y="48">8 3 7 2</text>

<path d="M24 58l-6 8 12-2" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"></path>

<rect fill="white" height="70" rx="10" stroke="#10b981" strokeWidth="1.2" width="52" x="110" y="65"></rect>
<rect fill="#f0fdf4" height="48" rx="3" width="42" x="115" y="75"></rect>

<rect fill="white" height="16" rx="4" stroke="#10b981" strokeWidth="0.8" width="32" x="120" y="82"></rect>
<rect fill="#10b981" height="2" opacity="0.5" rx="1" width="18" x="124" y="86"></rect>
<rect fill="#10b981" height="2" opacity="0.3" rx="1" width="12" x="124" y="90"></rect>

<circle cx="152" cy="72" fill="#10b981" r="8"></circle>
<path d="M148.5 72l2.5 2.5 4.5-4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<circle cx="44" cy="100" fill="none" r="20" stroke="#d1fae5" strokeWidth="1"></circle>
<ellipse cx="44" cy="100" fill="none" rx="10" ry="20" stroke="#d1fae5" strokeWidth="0.8"></ellipse>
<line stroke="#d1fae5" strokeWidth="0.8" x1="24" x2="64" y1="100" y2="100"></line>
<line stroke="#d1fae5" strokeWidth="0.5" x1="24" x2="64" y1="90" y2="90"></line>
<line stroke="#d1fae5" strokeWidth="0.5" x1="24" x2="64" y1="110" y2="110"></line>
<text fill="#10b981" fontFamily="Inter" fontSize="6" font-weight="600" text-anchor="middle" x="44" y="103">GSM</text>

<circle cx="88" cy="76" fill="#10b981" opacity="0.3" r="2"></circle>
<circle cx="96" cy="72" fill="#10b981" opacity="0.5" r="2"></circle>
<circle cx="104" cy="70" fill="#10b981" opacity="0.7" r="2"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">SMS</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Universal reach across all devices and networks</p>
<div className="mt-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-emerald-600 font-medium">~2s delivery</span>
</div>
<div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
<div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-neutral-200 p-6 lg:p-8 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5">
<div className="absolute top-6 right-6">
<span className="text-xs font-mono text-neutral-300">03</span>
</div>

<div className="w-full h-40 mb-6 flex items-center justify-center">
<svg className="w-full h-full group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 180 140">

<path d="M30 60L140 25L105 110L78 72L30 60Z" fill="#e0f2fe" stroke="#0ea5e9" strokeLinejoin="round" strokeWidth="1.2"></path>
<path d="M78 72L140 25" stroke="#0ea5e9" stroke-dasharray="3 2" strokeWidth="1"></path>
<path d="M78 72L85 110L105 110" stroke="#0ea5e9" strokeWidth="1"></path>

<rect fill="white" height="30" rx="6" stroke="#0ea5e9" strokeWidth="1" width="36" x="120" y="75"></rect>
<path d="M130 75v-6a8 8 0 0 1 16 0v6" fill="none" stroke="#0ea5e9" strokeWidth="1.2"></path>
<circle cx="138" cy="90" fill="#0ea5e9" r="3"></circle>
<line stroke="#0ea5e9" strokeLinecap="round" strokeWidth="1.5" x1="138" x2="138" y1="93" y2="97"></line>

<rect fill="#f0f9ff" height="20" rx="8" stroke="#bae6fd" strokeWidth="0.8" width="50" x="15" y="85"></rect>
<rect fill="#0ea5e9" height="2.5" opacity="0.5" rx="1.25" width="20" x="22" y="91"></rect>
<rect fill="#0ea5e9" height="2" opacity="0.3" rx="1" width="14" x="22" y="96"></rect>
<rect fill="#0ea5e9" height="20" opacity="0.1" rx="8" stroke="#7dd3fc" strokeWidth="0.8" width="50" x="35" y="108"></rect>
<text fill="#0ea5e9" fontFamily="Inter, monospace" fontSize="7" font-weight="600" x="44" y="121">4729</text>

<circle cx="28" cy="38" fill="#f0f9ff" r="12" stroke="#bae6fd" strokeWidth="0.8"></circle>
<path d="M24 38l3 3 5-5" stroke="#0ea5e9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>

<line stroke="#bae6fd" strokeLinecap="round" strokeWidth="0.8" x1="55" x2="42" y1="48" y2="52"></line>
<line stroke="#bae6fd" strokeLinecap="round" strokeWidth="0.8" x1="60" x2="48" y1="54" y2="56"></line>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Telegram</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Encrypted messaging with high open rates</p>
<div className="mt-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-emerald-600 font-medium">~0.5s delivery</span>
</div>
<div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
<div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-neutral-200 p-6 lg:p-8 hover:border-amber-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5">
<div className="absolute top-6 right-6">
<span className="text-xs font-mono text-neutral-300">04</span>
</div>

<div className="w-full h-40 mb-6 flex items-center justify-center">
<svg className="w-full h-full group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 180 140">

<g opacity="0.4">
<rect fill="#f59e0b" height="30" rx="1.5" width="3" x="20" y="55"></rect>
<rect fill="#f59e0b" height="56" rx="1.5" width="3" x="27" y="42"></rect>
<rect fill="#f59e0b" height="40" rx="1.5" width="3" x="34" y="50"></rect>
<rect fill="#f59e0b" height="70" rx="1.5" width="3" x="41" y="35"></rect>
<rect fill="#f59e0b" height="44" rx="1.5" width="3" x="48" y="48"></rect>
<rect fill="#f59e0b" height="60" rx="1.5" width="3" x="55" y="40"></rect>
<rect fill="#f59e0b" height="36" rx="1.5" width="3" x="62" y="52"></rect>
</g>

<g transform="translate(90, 20)">
<rect fill="white" height="100" rx="12" stroke="#f59e0b" strokeWidth="1.2" width="50" x="10" y="0"></rect>

<rect fill="#fffbeb" height="60" rx="4" width="38" x="16" y="14"></rect>

<circle cx="35" cy="34" fill="#fef3c7" r="10" stroke="#fbbf24" strokeWidth="0.8"></circle>
<text fill="#f59e0b" fontFamily="Inter" fontSize="8" font-weight="600" text-anchor="middle" x="35" y="37">🔊</text>
<rect fill="#f59e0b" height="3" opacity="0.4" rx="1.5" width="26" x="22" y="50"></rect>
<text fill="#f59e0b" fontFamily="Inter" fontSize="5" text-anchor="middle" x="35" y="62">0:12</text>

<circle cx="35" cy="84" fill="#10b981" r="8"></circle>
<path d="M30 82c1-3 3-4 5-4s4 1 5 4l1 2c0 1-1 2-2 2h-1l-1-2h-4l-1 2h-1c-1 0-2-1-2-2z" fill="white"></path>
</g>

<circle cx="155" cy="50" fill="#fffbeb" r="14" stroke="#fde68a" strokeWidth="0.8"></circle>
<text fill="#d97706" fontFamily="Inter" fontSize="7" font-weight="700" text-anchor="middle" x="155" y="53">"4"</text>
<circle cx="162" cy="78" fill="#fffbeb" r="12" stroke="#fde68a" strokeWidth="0.8"></circle>
<text fill="#d97706" fontFamily="Inter" fontSize="7" font-weight="700" text-anchor="middle" x="162" y="81">"7"</text>
<circle cx="152" cy="104" fill="#fffbeb" r="12" stroke="#fde68a" strokeWidth="0.8"></circle>
<text fill="#d97706" fontFamily="Inter" fontSize="7" font-weight="700" text-anchor="middle" x="152" y="107">"2"</text>

<circle cx="20" cy="120" fill="#fffbeb" r="10" stroke="#fde68a" strokeWidth="0.8"></circle>
<circle cx="20" cy="115" fill="#f59e0b" r="2"></circle>
<line stroke="#f59e0b" strokeLinecap="round" strokeWidth="1" x1="20" x2="20" y1="117" y2="123"></line>
<line stroke="#f59e0b" strokeLinecap="round" strokeWidth="1" x1="16" x2="24" y1="119" y2="119"></line>
<line stroke="#f59e0b" strokeLinecap="round" strokeWidth="1" x1="18" x2="20" y1="127" y2="123"></line>
<line stroke="#f59e0b" strokeLinecap="round" strokeWidth="1" x1="22" x2="20" y1="127" y2="123"></line>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Voice</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Spoken codes for maximum accessibility</p>
<div className="mt-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-emerald-600 font-medium">~5s delivery</span>
</div>
</div>
</div>
<div className="hidden lg:flex items-center justify-center mt-8">
<div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100">
<i className="w-4 h-4 text-indigo-500" data-lucide="repeat" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-indigo-700">Automatic failover between channels</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40 bg-neutral-900 text-white overflow-hidden">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl">
<span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Business Impact</span>
<h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                    Measurable<br/>
<span className="text-neutral-500">security outcomes</span>
</h2>
</div>
<div className="mt-20 grid lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 relative group">
<div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 rounded-3xl p-8 lg:p-10 hover:border-red-500/30 transition-all duration-500 h-full">
<div className="flex items-start justify-between mb-6">

<div className="w-20 h-20 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 80 80">
<path d="M40 8L12 22v18c0 16.5 12 31 28 34 16-3 28-17.5 28-34V22L40 8z" fill="#991b1b" opacity="0.15" stroke="#ef4444" strokeWidth="1.2"></path>
<path d="M40 30v14" stroke="#ef4444" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="40" cy="50" fill="#ef4444" r="1.5"></circle>

<circle cx="62" cy="18" fill="#1f2937" r="10" stroke="#ef4444" strokeWidth="0.8"></circle>
<circle cx="62" cy="15" fill="none" r="3" stroke="#ef4444" strokeWidth="0.8"></circle>
<path d="M56 24c0-3 3-5 6-5s6 2 6 5" fill="none" stroke="#ef4444" strokeWidth="0.8"></path>
<line stroke="#ef4444" strokeLinecap="round" strokeWidth="1.5" x1="55" x2="69" y1="11" y2="25"></line>
</svg>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
<span className="w-2 h-2 rounded-full bg-red-400 animate-pulse-dot"></span>
<span className="text-xs text-red-300 font-medium">Threat detected</span>
</div>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">Stop fraud and account takeovers</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-lg">
                            The system triggers step‑up verification when risk rises. Users receive a one‑time code. An alternate channel delivers the code if the first doesn't get through.
                        </p>
<div className="mt-8 flex items-center gap-3 flex-wrap">
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-700/50 border border-neutral-600/50">
<i className="w-4 h-4 text-amber-400" data-lucide="alert-triangle" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-neutral-300">Risk detected</span>
</div>
<i className="w-4 h-4 text-neutral-600" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-700/50 border border-neutral-600/50">
<i className="w-4 h-4 text-indigo-400" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-neutral-300">Send OTP</span>
</div>
<i className="w-4 h-4 text-neutral-600" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-emerald-300">Verified</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500">

<div className="w-16 h-16 mb-5 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">
<circle cx="32" cy="32" fill="#312e81" opacity="0.2" r="24" stroke="#818cf8" strokeWidth="0.8"></circle>

<path d="M18 42a16 16 0 0 1 28 0" fill="none" stroke="#818cf8" strokeLinecap="round" strokeWidth="1.5"></path>

<line stroke="#a5b4fc" strokeLinecap="round" strokeWidth="2" x1="32" x2="42" y1="38" y2="28"></line>
<circle cx="32" cy="38" fill="#6366f1" r="2"></circle>

<path d="M48 14l-6 10h5l-6 10" stroke="#818cf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<circle cx="14" cy="18" fill="#1e1b4b" r="6" stroke="#818cf8" strokeWidth="0.6"></circle>
<circle cx="12.5" cy="17" fill="#818cf8" r="0.8"></circle>
<circle cx="15.5" cy="17" fill="#818cf8" r="0.8"></circle>
<path d="M12 20c1 1.5 3 1.5 4 0" fill="none" stroke="#818cf8" strokeLinecap="round" strokeWidth="0.6"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Reduce friction for users</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            AuthFlow's smart routing sends codes via the preferred user's channel, boosting completion rates and keeping costs predictable.
                        </p>
</div>

<div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500">

<div className="w-16 h-16 mb-5 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<rect fill="#064e3b" height="40" opacity="0.2" rx="4" stroke="#34d399" strokeWidth="0.8" width="30" x="14" y="6"></rect>
<rect fill="#34d399" height="2" opacity="0.5" rx="1" width="18" x="20" y="14"></rect>
<rect fill="#34d399" height="2" opacity="0.3" rx="1" width="14" x="20" y="20"></rect>
<rect fill="#34d399" height="2" opacity="0.5" rx="1" width="16" x="20" y="26"></rect>
<rect fill="#34d399" height="2" opacity="0.3" rx="1" width="10" x="20" y="32"></rect>

<circle cx="40" cy="36" fill="#065f46" r="10" stroke="#34d399" strokeWidth="1"></circle>
<path d="M36 36l3 3 5-5" stroke="#34d399" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<path d="M44 50L54 40l4 4-10 10-5 1 1-5z" fill="#064e3b" stroke="#34d399" strokeWidth="0.8"></path>

<rect fill="#064e3b" height="10" opacity="0.3" rx="3" stroke="#34d399" strokeWidth="0.5" width="28" x="8" y="50"></rect>
<text fill="#34d399" fontFamily="Inter, monospace" fontSize="5" text-anchor="middle" x="22" y="57">12:04:32</text>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Prove intent</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            The ability to sign transactions and sensitive changes creates a clear record of who approved what and when, meeting non‑repudiation requirements.
                        </p>
<div className="mt-5 p-3 rounded-xl bg-neutral-700/30 border border-neutral-600/30 font-mono text-xs text-neutral-400">
<span className="text-emerald-400">✓</span> user_id: 4829 · action: transfer · approved: true
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40 overflow-hidden">
<div className="absolute inset-0 gradient-blur pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Use Cases</span>
<h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                    Secure every<br/>
<span className="text-neutral-300">touchpoint</span>
</h2>
<p className="mt-6 text-lg text-neutral-500 leading-relaxed">
                    Use our 2FA platform across diverse scenarios. A flexible API and choice of channel allow you to embed approvals wherever they make sense.
                </p>
</div>
<div className="grid lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 bg-white rounded-3xl border border-neutral-200 p-8 lg:p-10 relative overflow-hidden group hover:border-indigo-200 transition-all duration-300">
<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition"></div>
<div className="relative">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">

<div className="w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 56 56">
<rect fill="#eef2ff" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="32" x="4" y="8"></rect>
<rect fill="white" height="16" rx="2" width="24" x="8" y="12"></rect>
<rect fill="#c7d2fe" height="2" rx="1" width="16" x="12" y="16"></rect>
<rect fill="#eef2ff" height="6" rx="2" stroke="#a5b4fc" strokeWidth="0.5" width="8" x="12" y="21"></rect>
<circle cx="16" cy="23.5" fill="#6366f1" opacity="0.5" r="1"></circle>
<circle cx="16" cy="23.5" fill="#6366f1" r="0.5"></circle>
<rect fill="#6366f1" height="2.5" opacity="0.3" rx="1.25" width="6" x="22" y="21"></rect>
<rect fill="#6366f1" height="2" opacity="0.15" rx="1" width="4" x="22" y="25"></rect>
<line stroke="#d1d5db" strokeLinecap="round" strokeWidth="1.5" x1="14" x2="26" y1="36" y2="36"></line>

<path d="M38 20h8" stroke="#6366f1" stroke-dasharray="2 2" strokeWidth="0.8"></path>

<rect fill="white" height="20" rx="3" stroke="#6366f1" strokeWidth="0.8" width="12" x="42" y="12"></rect>
<rect fill="#eef2ff" height="12" rx="1" width="8" x="44" y="16"></rect>
<circle cx="48" cy="20" fill="#6366f1" opacity="0.15" r="2"></circle>
<path d="M46.5 20l1 1 2-2" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6"></path>
</svg>
</div>
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Account Access</span>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">Account access</h3>
<p className="text-base text-neutral-500 leading-relaxed max-w-xl">
                                    Confirm logins from new devices, reset passwords, or reactivate accounts after suspicious activity.
                                </p>
</div>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<div className="px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-600 flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="monitor" style={{strokeWidth: '1.5'}}></i>
                                New device login
                            </div>
<div className="px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-600 flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="key" style={{strokeWidth: '1.5'}}></i>
                                Password reset
                            </div>
<div className="px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-600 flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="refresh-ccw" style={{strokeWidth: '1.5'}}></i>
                                Account reactivation
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-white rounded-3xl border border-neutral-200 p-8 relative overflow-hidden group hover:border-amber-200 transition-all duration-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition"></div>
<div className="relative">
<div className="flex items-center gap-3 mb-6">

<div className="w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 56 56">
<circle cx="28" cy="28" fill="#fffbeb" r="18" stroke="#fbbf24" strokeWidth="0.8"></circle>

<path d="M28 10v4M28 42v4M46 28h-4M14 28h-4M41.7 14.3l-2.8 2.8M17.1 38.9l-2.8 2.8M41.7 41.7l-2.8-2.8M17.1 17.1l-2.8-2.8" stroke="#fbbf24" strokeLinecap="round" strokeWidth="1.2"></path>
<circle cx="28" cy="28" fill="white" r="8" stroke="#f59e0b" strokeWidth="1"></circle>

<rect fill="#f59e0b" height="5" opacity="0.3" rx="1" stroke="#f59e0b" strokeWidth="0.6" width="6" x="25" y="28"></rect>
<path d="M26.5 28v-2a1.5 1.5 0 0 1 3 0v2" fill="none" stroke="#f59e0b" strokeWidth="0.8"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Sensitive changes</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Approve password or 2FA changes, update contact details, or authorize administrative actions.
                        </p>
</div>
</div>

<div className="lg:col-span-5 bg-white rounded-3xl border border-neutral-200 p-8 relative overflow-hidden group hover:border-emerald-200 transition-all duration-300">
<div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition"></div>
<div className="relative">
<div className="flex items-center gap-3 mb-6">

<div className="w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 56 56">

<rect fill="#ecfdf5" height="22" rx="4" stroke="#10b981" strokeWidth="0.8" width="36" x="6" y="14"></rect>
<circle cx="24" cy="25" fill="white" r="6" stroke="#10b981" strokeWidth="0.8"></circle>
<text fill="#10b981" fontFamily="Inter" fontSize="8" font-weight="600" text-anchor="middle" x="24" y="28">$</text>
<circle cx="11" cy="19" fill="#10b981" opacity="0.15" r="2"></circle>
<circle cx="37" cy="31" fill="#10b981" opacity="0.15" r="2"></circle>

<path d="M34 38l10-6" stroke="#10b981" stroke-dasharray="2 2" strokeLinecap="round" strokeWidth="1"></path>
<path d="M44 32l-2 1.5 1.5 2" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8"></path>

<path d="M46 34l-4-3v10c0 5 4 8 4 8s4-3 4-8V31l-4 3z" fill="#d1fae5" stroke="#10b981" strokeWidth="0.8"></path>
<path d="M44 39l1.5 1.5 3-3" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Transactions</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Confirm payments, transfers, add new beneficiaries, or issue refunds. Set thresholds so that higher‑value transactions always require step‑up verification.
                        </p>
<div className="mt-6 space-y-2">
<div className="flex items-center gap-3">
<div className="h-2 flex-1 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-emerald-400 rounded-full"></div>
</div>
<span className="text-xs text-neutral-400 w-12">$100</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 flex-1 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-amber-400 rounded-full"></div>
</div>
<span className="text-xs text-neutral-400 w-12">$1,000</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 flex-1 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-full bg-red-400 rounded-full"></div>
</div>
<span className="text-xs text-neutral-400 w-12">$10k+</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-8 lg:p-10 relative overflow-hidden group hover:border-sky-200 transition-all duration-300">
<div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition"></div>
<div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">

<div className="w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 56 56">
<circle cx="28" cy="28" fill="#f0f9ff" r="20" stroke="#bae6fd" strokeWidth="0.6"></circle>

<path d="M14 30v-4c0-7.7 6.3-14 14-14s14 6.3 14 14v4" fill="none" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="1.5"></path>
<rect fill="#e0f2fe" height="10" rx="3" stroke="#0ea5e9" strokeWidth="1" width="6" x="10" y="28"></rect>
<rect fill="#e0f2fe" height="10" rx="3" stroke="#0ea5e9" strokeWidth="1" width="6" x="40" y="28"></rect>

<path d="M16 38v4c0 2 2 4 4 4h4" fill="none" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="1"></path>
<circle cx="26" cy="46" fill="#e0f2fe" r="2.5" stroke="#0ea5e9" strokeWidth="0.8"></circle>

<circle cx="28" cy="24" fill="#bae6fd" opacity="0.5" r="4"></circle>
<path d="M22 34c0-3 3-5 6-5s6 2 6 5" fill="#bae6fd" opacity="0.3"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Support verification</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Allow your help desk to securely verify a caller before assisting them.
                            </p>
</div>
<div className="w-full lg:w-56 bg-neutral-50 rounded-2xl border border-neutral-200 p-5 flex-shrink-0">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
<i className="w-4 h-4 text-sky-500" data-lucide="phone-call" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium">Caller ID</div>
<div className="text-xs text-neutral-400">+1 ••• ••• 4829</div>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-100">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-emerald-700">Identity verified</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40 bg-neutral-950 text-white overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-20 lg:mb-32">
<span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Differentiators</span>
<h2 className="mt-4 text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight leading-none">
                    What sets<br/>
<span className="text-neutral-600">us apart</span>
</h2>
</div>
<div className="space-y-6">
<div className="grid lg:grid-cols-2 gap-6">
<div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-3xl p-8 lg:p-10 hover:border-indigo-800/50 transition-all duration-500">
<div className="w-16 h-16 mb-6 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 80 80">

<circle cx="16" cy="40" fill="#312e81" r="8" stroke="#818cf8" strokeWidth="1"></circle>
<text fill="#a5b4fc" fontFamily="Inter" fontSize="7" font-weight="600" text-anchor="middle" x="16" y="43">$</text>

<path d="M24 36l14-12h16" stroke="#4c1d95" stroke-dasharray="3 2" strokeWidth="1"></path>
<circle cx="58" cy="24" fill="#1e1b4b" opacity="0.4" r="6" stroke="#6366f1" strokeWidth="0.8"></circle>
<line opacity="0.5" stroke="#ef4444" strokeWidth="1" x1="54" x2="62" y1="20" y2="28"></line>

<path d="M24 40h18" stroke="#818cf8" strokeWidth="1.5"></path>
<path d="M38 40l4-2v4l-4-2z" fill="#818cf8"></path>
<circle cx="54" cy="40" fill="#312e81" r="8" stroke="#818cf8" strokeWidth="1"></circle>
<path d="M50 40l3 3 5-5" stroke="#34d399" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>

<path d="M24 44l14 12h16" stroke="#4c1d95" stroke-dasharray="3 2" strokeWidth="1"></path>
<circle cx="58" cy="56" fill="#1e1b4b" opacity="0.4" r="6" stroke="#6366f1" strokeWidth="0.8"></circle>

<path d="M68 14v12" stroke="#34d399" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M65 23l3 3 3-3" stroke="#34d399" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Lower messaging costs</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Intelligent routing automatically picks the most cost‑effective and reliable channel. Codes go out via SMS, push, Telegram, or email, and fall back to another channel if the first fails.
                        </p>
</div>
<div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-3xl p-8 lg:p-10 hover:border-emerald-800/50 transition-all duration-500">

<div className="w-16 h-16 mb-6 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<rect fill="#064e3b" height="36" opacity="0.2" rx="6" stroke="#34d399" strokeWidth="0.8" width="48" x="8" y="10"></rect>
<text fill="#34d399" fontFamily="monospace" fontSize="10" font-weight="600" opacity="0.6" x="14" y="28">{"</text>
<text fill="#6ee7b7" fontFamily="monospace" fontSize="7" x="28" y="28">API</text>
<text fill="#34d399" fontFamily="monospace" fontSize="10" font-weight="600" opacity="0.6" x="46" y="28">"}</text>
<rect fill="#34d399" height="2" opacity="0.2" rx="1" width="28" x="18" y="33"></rect>

<circle cx="32" cy="54" fill="#064e3b" r="6" stroke="#34d399" strokeWidth="0.8"></circle>
<line stroke="#34d399" strokeLinecap="round" strokeWidth="1.2" x1="29" x2="29" y1="52" y2="56"></line>
<line stroke="#34d399" strokeLinecap="round" strokeWidth="1.2" x1="35" x2="35" y1="52" y2="56"></line>
<line stroke="#34d399" stroke-dasharray="1 1" strokeWidth="1" x1="32" x2="32" y1="46" y2="48"></line>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Unified API, easy integration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            A single API simplifies how you connect channels. You register senders and manage message templates from one place.
                        </p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-3xl p-8 lg:p-10 hover:border-sky-800/50 transition-all duration-500">

<div className="w-16 h-16 mb-6 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">
<rect fill="#0c4a6e" height="40" opacity="0.15" rx="6" stroke="#38bdf8" strokeWidth="0.8" width="48" x="8" y="8"></rect>

<rect fill="#38bdf8" height="12" opacity="0.3" rx="1.5" width="6" x="16" y="30"></rect>
<rect fill="#38bdf8" height="20" opacity="0.5" rx="1.5" width="6" x="25" y="22"></rect>
<rect fill="#38bdf8" height="24" opacity="0.7" rx="1.5" width="6" x="34" y="18"></rect>
<rect fill="#38bdf8" height="28" rx="1.5" width="6" x="43" y="14"></rect>

<path d="M19 28l9-8 9-4 9-4" stroke="#f0f9ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
<circle cx="49" cy="12" fill="#38bdf8" r="2"></circle>

<circle cx="52" cy="12" fill="#38bdf8" opacity="0.2" r="4"></circle>

<line opacity="0.3" stroke="#38bdf8" strokeWidth="0.5" x1="13" x2="52" y1="44" y2="44"></line>

<rect fill="#0c4a6e" height="8" rx="4" stroke="#38bdf8" strokeWidth="0.5" width="24" x="20" y="50"></rect>
<text fill="#38bdf8" fontFamily="Inter" fontSize="5" font-weight="600" text-anchor="middle" x="32" y="56">99.8%</text>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Analytics and control</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Real‑time reports and logs offer one source of truth for delivery rates, response times, and conversion. With AuthFlow, you see which channels work best for different customer segments.
                        </p>
</div>
<div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-3xl p-8 lg:p-10 hover:border-amber-800/50 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
<div className="relative">

<div className="w-16 h-16 mb-6 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 80 80">

<circle className="" cx="20" cy="40" fill="#78350f" opacity="0.15" r="12" stroke="#fbbf24" strokeWidth="1"></circle>

<line stroke="#ef4444" strokeLinecap="round" strokeWidth="1.2" x1="16" x2="24" y1="36" y2="44"></line>
<line stroke="#ef4444" strokeLinecap="round" strokeWidth="1.2" x1="24" x2="16" y1="36" y2="44"></line>

<path d="M32 34c6-8 14-8 20 0" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M49 31l3 3-4 1" stroke="#fbbf24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>

<circle cx="58" cy="40" fill="#78350f" opacity="0.15" r="12" stroke="#fbbf24" strokeWidth="1"></circle>
<path d="M53 40l3.5 3.5 6-6" stroke="#34d399" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<rect fill="#78350f" height="10" opacity="0.2" rx="5" stroke="#fbbf24" strokeWidth="0.5" width="36" x="22" y="58"></rect>
<text fill="#fbbf24" fontFamily="Inter" fontSize="5.5" font-weight="600" text-anchor="middle" x="40" y="65">24/7</text>

<path d="M66 32c2-2 4-2 4 0" opacity="0.4" stroke="#fbbf24" strokeWidth="0.8"></path>
<path d="M68 28c3-3 6-3 6 0" opacity="0.25" stroke="#fbbf24" strokeWidth="0.8"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-semibold tracking-tight mb-3">Always‑on failover</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    AuthFlow uses multi‑step failover. If a message isn't delivered via the chosen channel, it automatically switches to another.
                                </p>
<div className="mt-6 flex items-center gap-2 flex-wrap">
<div className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs text-neutral-300 flex items-center gap-1.5">
<i className="w-3 h-3 text-red-400" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
                                        Push failed
                                    </div>
<i className="w-3 h-3 text-neutral-600" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
<div className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs text-neutral-300 flex items-center gap-1.5">
<i className="w-3 h-3 text-amber-400" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
                                        SMS retry
                                    </div>
<i className="w-3 h-3 text-neutral-600" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
<div className="px-3 py-1.5 rounded-lg bg-emerald-900/30 border border-emerald-700/30 text-xs text-emerald-300 flex items-center gap-1.5">
<i className="w-3 h-3 text-emerald-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                                        Delivered
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-4 lg:sticky lg:top-32">
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Applications</span>
<h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                        Real‑world<br/>applications
                    </h2>
<p className="mt-4 text-base text-neutral-500">How authentication works in production environments.</p>
</div>
<div className="lg:col-span-7 lg:col-start-6 space-y-8">
<div className="relative pl-8 border-l-2 border-indigo-200">
<div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-neutral-50"></div>
<div className="bg-white rounded-2xl border border-neutral-200 p-8 card-glow">
<div className="flex items-start gap-5 mb-4">

<div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<rect fill="#eef2ff" height="28" rx="5" stroke="#6366f1" strokeWidth="1" width="40" x="4" y="12"></rect>
<rect fill="#c7d2fe" height="6" opacity="0.5" width="40" x="4" y="20"></rect>
<rect fill="#6366f1" height="3" opacity="0.3" rx="1.5" width="12" x="8" y="30"></rect>
<rect fill="#6366f1" height="3" opacity="0.2" rx="1.5" width="8" x="24" y="30"></rect>

<path d="M44 26l6 0" stroke="#6366f1" stroke-dasharray="2 2" strokeWidth="1"></path>

<path d="M54 18l-4-3v12c0 6 4 9 4 9s4-3 4-9V15l-4 3z" fill="#eef2ff" stroke="#6366f1" strokeWidth="0.8"></path>
<path d="M51.5 24l2 2 3.5-3.5" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>

<circle cx="32" cy="52" fill="#f0fdf4" r="8" stroke="#10b981" strokeWidth="0.8"></circle>
<path d="M28 52l3 3 5-5" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight pt-2">Transaction confirmation</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">
                                When a customer initiates a transfer or payment, the system sends a code via push or Telegram. If delivery fails, it retries over SMS or voice.
                            </p>
<div className="mt-6 flex items-center gap-3 text-xs text-neutral-400 font-mono">
<span className="px-2 py-1 bg-neutral-50 rounded">Push</span>
<span>→</span>
<span className="px-2 py-1 bg-neutral-50 rounded">Telegram</span>
<span>→</span>
<span className="px-2 py-1 bg-neutral-50 rounded">SMS</span>
<span>→</span>
<span className="px-2 py-1 bg-neutral-50 rounded">Voice</span>
</div>
</div>
</div>
<div className="relative pl-8 border-l-2 border-emerald-200">
<div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-neutral-50"></div>
<div className="bg-white rounded-2xl border border-neutral-200 p-8 card-glow">
<div className="flex items-start gap-5 mb-4">

<div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<rect fill="#ecfdf5" height="32" rx="5" stroke="#10b981" strokeWidth="0.8" width="42" x="6" y="8"></rect>
<line opacity="0.3" stroke="#10b981" strokeWidth="0.5" x1="6" x2="48" y1="16" y2="16"></line>
<circle cx="12" cy="12" fill="#fca5a5" r="1.5"></circle>
<circle cx="17" cy="12" fill="#fde68a" r="1.5"></circle>
<circle cx="22" cy="12" fill="#86efac" r="1.5"></circle>

<rect fill="#d1fae5" height="4" rx="2" width="30" x="12" y="20"></rect>
<rect fill="#d1fae5" height="4" rx="2" width="30" x="12" y="27"></rect>
<rect fill="#10b981" height="4" rx="2" width="14" x="24" y="33"></rect>

<circle cx="52" cy="14" fill="#fef3c7" r="8" stroke="#f59e0b" strokeWidth="0.8"></circle>
<text fill="#d97706" fontFamily="Inter" fontSize="9" font-weight="700" text-anchor="middle" x="52" y="17">!</text>

<rect fill="#ecfdf5" height="14" rx="3" stroke="#10b981" strokeWidth="0.6" width="22" x="34" y="44"></rect>
<text fill="#10b981" fontFamily="Inter" fontSize="5" text-anchor="middle" x="45" y="53">New</text>
<path d="M30 40l6 6" stroke="#10b981" stroke-dasharray="2 1" strokeWidth="0.8"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight pt-2">System login</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">
                                On a suspicious sign‑in or device change, the platform demands a second factor. The user receives a one‑time code through their chosen channel.
                            </p>
</div>
</div>
<div className="relative pl-8 border-l-2 border-amber-200">
<div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-amber-500 border-4 border-neutral-50"></div>
<div className="bg-white rounded-2xl border border-neutral-200 p-8 card-glow">
<div className="flex items-start gap-5 mb-4">

<div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<circle cx="26" cy="20" fill="#fffbeb" r="10" stroke="#f59e0b" strokeWidth="0.8"></circle>
<circle cx="26" cy="17" fill="#fef3c7" r="4" stroke="#f59e0b" strokeWidth="0.7"></circle>
<path d="M18 28c0-4 4-6 8-6s8 2 8 6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.7"></path>

<circle cx="42" cy="16" fill="#d1fae5" r="8" stroke="#10b981" strokeWidth="0.8"></circle>
<path d="M38.5 16l2.5 2.5 5-5" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>

<rect fill="white" height="22" rx="4" stroke="#f59e0b" strokeWidth="0.8" width="34" x="10" y="36"></rect>
<rect fill="#fffbeb" height="10" rx="2" stroke="#fbbf24" strokeWidth="0.5" width="10" x="14" y="40"></rect>
<circle cx="19" cy="43.5" fill="#fbbf24" opacity="0.3" r="2"></circle>
<path d="M16 48c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" fill="#fbbf24" opacity="0.2"></path>
<rect fill="#f59e0b" height="2" opacity="0.4" rx="1" width="12" x="28" y="41"></rect>
<rect fill="#f59e0b" height="2" opacity="0.2" rx="1" width="8" x="28" y="46"></rect>
<rect fill="#f59e0b" height="2" opacity="0.3" rx="1" width="10" x="28" y="51"></rect>

<circle cx="52" cy="44" fill="#fffbeb" r="6" stroke="#fbbf24" strokeWidth="0.5"></circle>
<path d="M50 44c0-1.1.9-2 2-2s2 .9 2 2" fill="none" stroke="#f59e0b" strokeWidth="0.6"></path>
<path d="M49 44c0-1.7 1.3-3 3-3s3 1.3 3 3" fill="none" stroke="#f59e0b" strokeWidth="0.4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight pt-2">User verification</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">
                                During registration or purchase, a code is sent to confirm the person's identity. Automatic delivery through available channels ensures high completion rates.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40 bg-neutral-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Industries</span>
<h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                    Who we<br/>work with
                </h2>
<p className="mt-4 text-base text-neutral-500">This service suits organisations that value secure, reliable authorisation.</p>
</div>
<div className="grid md:grid-cols-2 gap-5 gap-x-5 gap-y-5">
<div className="bg-white rounded-3xl border border-neutral-200 p-8 lg:p-10 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="flex items-center gap-5 mb-5">

<div className="w-16 h-16 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">
<rect fill="#eef2ff" height="36" rx="6" stroke="#6366f1" strokeWidth="0.8" width="52" x="6" y="10">
</rect>
<line opacity="0.3" stroke="#6366f1" strokeWidth="0.5" x1="6" x2="58" y1="18" y2="18"></line>
<circle cx="12" cy="14" fill="#fca5a5" r="1.5"></circle>
<circle cx="17" cy="14" fill="#fde68a" r="1.5"></circle>
<circle cx="22" cy="14" fill="#86efac" r="1.5"></circle>

<path d="M24 30c-1-4 2-7 6-7 3 0 5 2 6 4 1-1 3-1 4 0 2 1 2 4 0 5H22c-2-1-2-3 0-4" fill="white" stroke="#6366f1" strokeWidth="0.8"></path>

<rect fill="#c7d2fe" height="4" rx="1" width="8" x="20" y="38"></rect>
<rect fill="#a5b4fc" height="4" rx="1" width="8" x="30" y="38"></rect>
<rect fill="#c7d2fe" height="4" rx="1" width="8" x="40" y="38"></rect>

<circle cx="14" cy="54" fill="#eef2ff" r="3" stroke="#6366f1" strokeWidth="0.5"></circle>
<circle cx="32" cy="54" fill="#eef2ff" r="3" stroke="#6366f1" strokeWidth="0.5"></circle>
<circle cx="50" cy="54" fill="#eef2ff" r="3" stroke="#6366f1" strokeWidth="0.5"></circle>
<line stroke="#c7d2fe" strokeWidth="0.8" x1="17" x2="29" y1="54" y2="54"></line>
<line stroke="#c7d2fe" strokeWidth="0.8" x1="35" x2="47" y1="54" y2="54"></line>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Technology providers &amp; SaaS</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">Secure logins and actions across cloud services.</p>
</div>
<div className="bg-white rounded-3xl border border-neutral-200 p-8 lg:p-10 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="flex items-center gap-5 mb-5">

<div className="w-16 h-16 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<rect fill="#ecfdf5" height="48" rx="6" stroke="#10b981" strokeWidth="0.8" width="28" x="16" y="4">
</rect>
<rect fill="white" height="32" rx="2" width="20" x="20" y="12"></rect>

<rect fill="#d1fae5" height="7" rx="2" stroke="#10b981" strokeWidth="0.3" width="7" x="22" y="14">
</rect>
<rect fill="#fef3c7" height="7" rx="2" stroke="#f59e0b" strokeWidth="0.3" width="7" x="31" y="14">
</rect>
<rect fill="#e0f2fe" height="7" rx="2" stroke="#38bdf8" strokeWidth="0.3" width="7" x="22" y="23">
</rect>
<rect fill="#fce7f3" height="7" rx="2" stroke="#ec4899" strokeWidth="0.3" width="7" x="31" y="23">
</rect>

<path d="M48 20l-4 12-3-3-4 4" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
<circle cx="48" cy="18" fill="#d1fae5" r="4" stroke="#10b981" strokeWidth="0.6"></circle>
<path d="M46 18l1 1 2-2" stroke="#10b981" strokeLinecap="round" strokeWidth="0.8"></path>

<line opacity="0.4" stroke="#10b981" strokeWidth="0.5" x1="50" x2="56" y1="26" y2="22"></line>
<line opacity="0.3" stroke="#10b981" strokeWidth="0.5" x1="50" x2="56" y1="30" y2="28"></line>

<rect fill="#10b981" height="2" opacity="0.3" rx="1" width="12" x="26" y="46"></rect>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Mobile apps &amp; startups</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">Rapid API integration and a user‑friendly experience build loyalty.</p>
</div>
<div className="bg-white rounded-3xl border border-neutral-200 p-8 lg:p-10 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="flex items-center gap-5 mb-5">

<div className="w-16 h-16 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<path d="M32 8L8 22h48L32 8z" fill="#fffbeb" stroke="#f59e0b" strokeWidth="0.8"></path>
<rect fill="#fef3c7" height="4" rx="1" stroke="#f59e0b" strokeWidth="0.5" width="48" x="8" y="22">
</rect>

<rect fill="white" height="20" rx="1" stroke="#f59e0b" strokeWidth="0.6" width="4" x="14" y="26">
</rect>
<rect fill="white" height="20" rx="1" stroke="#f59e0b" strokeWidth="0.6" width="4" x="24" y="26">
</rect>
<rect fill="white" height="20" rx="1" stroke="#f59e0b" strokeWidth="0.6" width="4" x="36" y="26">
</rect>
<rect fill="white" height="20" rx="1" stroke="#f59e0b" strokeWidth="0.6" width="4" x="46" y="26">
</rect>

<rect fill="#fef3c7" height="4" rx="1" stroke="#f59e0b" strokeWidth="0.5" width="48" x="8" y="46">
</rect>

<circle cx="32" cy="14" fill="white" r="3" stroke="#f59e0b" strokeWidth="0.6"></circle>
<text fill="#f59e0b" fontFamily="Inter" fontSize="5" font-weight="700" text-anchor="middle" x="32" y="16.5">$</text>

<path d="M50 52l-4-2v6c0 3 4 5 4 5s4-2 4-5v-6l-4 2z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.6"></path>
<path d="M48.5 55.5l1 1 2.5-2.5" stroke="#f59e0b" strokeLinecap="round" strokeWidth="0.6"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Financial services</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">Banks, fintech platforms, exchanges, and payment providers. Sign transactions and meet regulatory obligations.</p>
</div>
<div className="bg-white rounded-3xl border border-neutral-200 p-8 lg:p-10 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="flex items-center gap-5 mb-5">

<div className="w-16 h-16 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 64 64">

<rect className="" fill="#e0f2fe" height="20" rx="3" stroke="#0ea5e9" strokeWidth="0.8" width="32" x="4" y="22"></rect>

<path className="" d="M36 28h10c2 0 4 1.5 5 4l2 6v4H36V28z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="0.8">
</path>

<rect fill="white" height="6" rx="1" stroke="#0ea5e9" strokeWidth="0.5" width="8" x="40" y="30">
</rect>

<circle cx="16" cy="44" fill="white" r="5" stroke="#0ea5e9" strokeWidth="1"></circle>
<circle cx="16" cy="44" fill="#0ea5e9" opacity="0.2" r="2"></circle>
<circle cx="44" cy="44" fill="white" r="5" stroke="#0ea5e9" strokeWidth="1"></circle>
<circle cx="44" cy="44" fill="#0ea5e9" opacity="0.2" r="2"></circle>

<rect fill="white" height="10" rx="2" stroke="#0ea5e9" strokeWidth="0.5" width="10" x="10" y="26">
</rect>
<line stroke="#0ea5e9" strokeWidth="0.3" x1="15" x2="15" y1="26" y2="36"></line>
<line stroke="#0ea5e9" strokeWidth="0.3" x1="10" x2="20" y1="31" y2="31"></line>

<circle className="" cx="54" cy="16" fill="#e0f2fe" r="7" stroke="#0ea5e9" strokeWidth="0.6"></circle>
<circle cx="54" cy="14" fill="#0ea5e9" opacity="0.3" r="2"></circle>
<path d="M54 16l-2 5h4l-2-5z" fill="#0ea5e9" opacity="0.2"></path>

<circle cx="24" cy="14" fill="#0ea5e9" opacity="0.3" r="1.5"></circle>
<circle cx="32" cy="12" fill="#0ea5e9" opacity="0.4" r="1.5"></circle>
<circle cx="40" cy="14" fill="#0ea5e9" opacity="0.5" r="1.5"></circle>
<path d="M25.5 14l5-2 6 2 6-2" stroke="#bae6fd" strokeLinecap="round" strokeWidth="0.8"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Logistics &amp; delivery</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed">Confirm orders, verify drivers or couriers, and protect customers from fraud.</p>
</div>
</div>
</div>
</section>

<section className="lg:py-40 overflow-hidden pt-24 pb-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 w-full relative overflow-hidden">
<style>
        @keyframes friction-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .animate-friction-cards {
            animation: friction-scroll 40s linear infinite;
        }
        .animate-friction-cards:hover {
            animation-play-state: paused;
        }
    </style>
<div className="mb-16 text-center flex flex-col items-center">
<span className="text-xs font-medium text-indigo-500 uppercase tracking-widest">Testimonials</span>
<h2 className="lg:text-5xl text-4xl font-semibold tracking-tight mt-4 text-neutral-900">
            Client<br/>
<span className="text-neutral-400">testimonials</span>
</h2>
</div>
<div className="w-full overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex w-max animate-friction-cards gap-6 py-4">


<div className="w-[300px] sm:w-[380px] lg:w-[420px] relative rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 group flex flex-col justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-105">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
                        "We integrated AuthFlow with our app to verify users via SMS. The API was clear, and delivery times shrank. New sign‑ups sail through, and we've cut our messaging spend."
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-100 mt-auto">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex flex-shrink-0 items-center justify-center text-white font-medium">GF</div>
<div>
<p className="text-sm font-medium text-neutral-900">Gabriel Frank</p>
<p className="text-xs sm:text-sm text-neutral-500">Product Owner, mobile app "Done"</p>
</div>
</div>
</div>

<div className="w-[300px] sm:w-[380px] lg:w-[420px] relative rounded-3xl border border-neutral-200 bg-neutral-900 p-8 lg:p-10 shadow-sm transition-all hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10 group flex flex-col justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-105">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                        "On our fintech platform, we added push notifications for transaction approval using AuthFlow. Users now see a request in‑app, and only if that fails do we fall back to SMS."
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-800 mt-auto">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex flex-shrink-0 items-center justify-center text-white font-medium">AD</div>
<div>
<p className="text-sm font-medium text-white">Alex Dawn</p>
<p className="text-xs sm:text-sm text-neutral-500">Solution Architect, fintech company</p>
</div>
</div>
</div>

<div className="w-[300px] sm:w-[380px] lg:w-[420px] relative rounded-3xl border border-indigo-100 bg-indigo-50 p-8 lg:p-10 shadow-sm transition-all hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 group flex flex-col justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 transition-transform group-hover:scale-105 shadow-sm">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<p className="text-base sm:text-lg text-indigo-900 leading-relaxed mb-8">
                        "We use AuthFlow for voice verification in our support team. Callers can confirm their identity over the phone without sharing extra data."
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-indigo-200/50 mt-auto">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex flex-shrink-0 items-center justify-center text-white font-medium">MH</div>
<div>
<p className="text-sm font-medium text-indigo-900">Mary Hues</p>
<p className="text-xs sm:text-sm text-indigo-500">Support Lead, logistics company</p>
</div>
</div>
</div>


<div aria-hidden="true" className="w-[300px] sm:w-[380px] lg:w-[420px] relative rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 group flex flex-col justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-105">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
                        "We integrated AuthFlow with our app to verify users via SMS. The API was clear, and delivery times shrank. New sign‑ups sail through, and we've cut our messaging spend."
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-100 mt-auto">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex flex-shrink-0 items-center justify-center text-white font-medium">GF</div>
<div>
<p className="text-sm font-medium text-neutral-900">Gabriel Frank</p>
<p className="text-xs sm:text-sm text-neutral-500">Product Owner, mobile app "Done"</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[300px] sm:w-[380px] lg:w-[420px] relative rounded-3xl border border-neutral-200 bg-neutral-900 p-8 lg:p-10 shadow-sm transition-all hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10 group flex flex-col justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-105">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                        "On our fintech platform, we added push notifications for transaction approval using AuthFlow. Users now see a request in‑app, and only if that fails do we fall back to SMS."
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-800 mt-auto">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex flex-shrink-0 items-center justify-center text-white font-medium">AD</div>
<div>
<p className="text-sm font-medium text-white">Alex Dawn</p>
<p className="text-xs sm:text-sm text-neutral-500">Solution Architect, fintech company</p>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[300px] sm:w-[380px] lg:w-[420px] relative rounded-3xl border border-indigo-100 bg-indigo-50 p-8 lg:p-10 shadow-sm transition-all hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 group flex flex-col justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 transition-transform group-hover:scale-105 shadow-sm">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<p className="text-base sm:text-lg text-indigo-900 leading-relaxed mb-8">
                        "We use AuthFlow for voice verification in our support team. Callers can confirm their identity over the phone without sharing extra data."
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-indigo-200/50 mt-auto">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex flex-shrink-0 items-center justify-center text-white font-medium">MH</div>
<div>
<p className="text-sm font-medium text-indigo-900">Mary Hues</p>
<p className="text-xs sm:text-sm text-indigo-500">Support Lead, logistics company</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-4xl opacity-50">
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Global Reach</span>
<span className="text-neutral-400">•</span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">99.99% Uptime</span>
<span className="text-neutral-400">•</span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Low Latency</span>
<span className="text-neutral-400">•</span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Fraud Prevention</span>
<span className="text-neutral-400">•</span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Compliance</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-40 bg-neutral-950 text-white overflow-hidden" id="demo">
<div className="absolute inset-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                        Secure critical approvals
                        <span className="text-neutral-500">in days, not months</span>
</h2>
<p className="mt-6 text-lg text-neutral-400 leading-relaxed">
                        We'd love to talk about how the service can help your business. Fill out the form for a demo and integration plan.
                    </p>
<div className="mt-10 space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-neutral-400">Multi-channel failover</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-neutral-400">Unified API integration</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-neutral-400">Real-time analytics</span>
</div>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7">
<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 lg:p-10">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-2">First Name</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2">Last Name</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2">Email</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition" placeholder="john@company.com" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-2">Message</label>
<textarea className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition resize-none" placeholder="Tell us about your use case..." rows="4"></textarea>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-base py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/20 flex items-center justify-center gap-2" type="submit">
                                Submit
                                <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-white border-t border-neutral-800 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-neutral-800 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-semibold text-neutral-400">AuthFlow</span>
</div>
<div className="flex items-center gap-8">
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition" href="#">Security</a>
</div>
<span className="text-xs text-neutral-600">© 2024 AuthFlow. All rights reserved.</span>
</div>
</footer>





    </>
  );
}
