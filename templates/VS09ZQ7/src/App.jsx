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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Aurora Comet Background Animation
    let scene, camera, renderer, particles;
    
    function initAurora() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('aurora-canvas'),
        alpha: true 
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      
      // Create aurora particles
      const particleCount = 800;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      
      const auroraColors = [
        new THREE.Color(1, 1, 1),
        new THREE.Color(1, 1, 1),
        new THREE.Color(1, 1, 1),
        new THREE.Color(1, 1, 1),
        new THREE.Color(1, 1, 1)
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] = (Math.random() - 0.5) * 2000;
        positions[i3 + 1] = (Math.random() - 0.5) * 1000;
        positions[i3 + 2] = (Math.random() - 0.5) * 1000;
        
        const color = auroraColors[Math.floor(Math.random() * auroraColors.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
        
        sizes[i] = Math.random() * 8 + 2;
      }
      
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      
      const material = new THREE.ShaderMaterial({
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          varying float vAlpha;
          uniform float time;
          
          void main() {
            vColor = color;
            vec3 pos = position;
            
            // Wave motion
            pos.x += sin(time * 0.001 + position.y * 0.01) * 50.0;
            pos.y += cos(time * 0.0015 + position.x * 0.008) * 30.0;
            
            // Fade based on distance
            float dist = length(pos);
            vAlpha = 1.0 - (dist / 1000.0);
            vAlpha = clamp(vAlpha, 0.0, 0.8);
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;
          
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            
            float alpha = (1.0 - dist * 2.0) * vAlpha;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      
      camera.position.z = 500;
      
      animate();
    }
    
    function animate() {
      requestAnimationFrame(animate);
      
      const time = Date.now();
      particles.material.uniforms.time.value = time;
      
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;
      
      renderer.render(scene, camera);
    }
    
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Card Stack Interaction
    const cardsContainer = document.getElementById('cards-container');
    const dots = [
      document.getElementById('dot-1'),
      document.getElementById('dot-2'),
      document.getElementById('dot-3'),
      document.getElementById('dot-4')
    ];
    
    let currentCard = 3;
    let isAnimating = false;
    
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentCard - 1) {
          dot.className = 'w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 scale-125';
        } else {
          dot.className = 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300';
        }
      });
    }
    
    function setActiveCard(cardNumber) {
      if (isAnimating || cardNumber === currentCard) return;
      
      isAnimating = true;
      cardsContainer.className = `card-${cardNumber}-active`;
      currentCard = cardNumber;
      updateDots();
      
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setActiveCard(index + 1);
      });
    });
    
    // Auto-rotate cards
    setInterval(() => {
      if (!isAnimating) {
        const nextCard = currentCard === 4 ? 1 : currentCard + 1;
        setActiveCard(nextCard);
      }
    }, 5000);
    
    // Initialize
    initAurora();
  
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
      

<canvas height="1150" id="aurora-canvas" style={{width: '892px', height: '1150px'}} width="892"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-2 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<div className="w-8 h-8 flex bg-gradient-to-r from-red-400 to-orange-400 rounded-lg items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Nexus Ventures</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
<a className="text-white/60 hover:text-white transition-colors" href="#">Portfolio</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">About</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</nav>
<main className="relative z-10 min-h-screen flex pt-16 pr-6 pl-6 items-center justify-center">
<div className="max-w-7xl w-full mr-auto ml-auto px-8 pt-8">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8">
<div className="flex items-center space-x-2 mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<p className="text-sm uppercase tracking-widest text-white/60 font-medium">Nexus Ventures • Founded 2015 • 47 Exits</p>
</div>
<div className="mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
<h1 className="text-4xl lg:text-5xl xl:text-8xl font-medium leading-tight tracking-tighter mb-4">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Startups Funded
              </span>
<span className="block bg-clip-text italic text-transparent font-instrument-serif bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                by Top-Tier VCs
              </span>
</h1>
<p className="text-lg text-white/70 leading-relaxed">
              We've helped 68 startups secure $2.4B+ in funding from the world's most prestigious venture capital firms
            </p>
</div>

<div className="space-y-4 text-sm text-white/60 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="">Direct connections to 50+ top-tier VCs</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="">89% funding success rate</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
<span className="">12 unicorns created in our portfolio</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="">Average 4.2x return on investment</span>
</div>
</div>
</div>

<div className="flex flex-col space-y-8 items-center">

<section className="card-1-active" id="cards-container" style={{animationDelay: '0.7s', animationFillMode: 'forwards', cursor: 'grab'}}>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-up w-5 h-5 text-orange-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Series A-C</span>
</div>
<span className="text-sm font-bold text-green-400">$12.8B AUM</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-white">S</span>
</div>
<h3 className="text-3xl font-bold tracking-tight mb-2">Sequoia Capital</h3>
<p className="text-sm text-white/60 mb-8">Sand Hill Road, Menlo Park</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Portfolio Companies</span>
<span className="font-semibold">9 funded</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Success Rate</span>
<span className="font-semibold text-green-400">89%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-500" style={{width: '89%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium">
                  View Portfolio Companies
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-rocket w-5 h-5 text-purple-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Seed-Series B</span>
</div>
<span className="text-sm font-bold text-green-400">$18.2B AUM</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<span className="text-lg font-bold text-white">a16z</span>
</div>
<h3 className="text-2xl font-bold tracking-tight mb-1">Andreessen</h3>
<h3 className="text-2xl font-bold tracking-tight mb-2">Horowitz</h3>
<p className="text-sm text-white/60 mb-8">Sand Hill Road, Menlo Park</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Portfolio Companies</span>
<span className="font-semibold">14 funded</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Success Rate</span>
<span className="font-semibold text-green-400">92%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium">
                  Explore Investments
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-target w-5 h-5 text-green-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Series A-D</span>
</div>
<span className="text-sm font-bold text-green-400">$8.5B AUM</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-hexagon w-10 h-10 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<h3 className="text-3xl font-bold tracking-tight mb-2">Founders Fund</h3>
<p className="text-sm text-white/60 mb-8">San Francisco, CA</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Portfolio Companies</span>
<span className="font-semibold">7 funded</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Success Rate</span>
<span className="font-semibold text-green-400">86%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full transition-all duration-500" style={{width: '86%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium">
                  See Fund Portfolio
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-zap w-5 h-5 text-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Pre-Seed</span>
</div>
<span className="text-sm font-bold text-green-400">$6.2B AUM</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-white">Y</span>
</div>
<h3 className="text-3xl font-bold tracking-tight mb-2">Y Combinator</h3>
<p className="text-sm text-white/60 mb-8">Mountain View, CA</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Portfolio Companies</span>
<span className="font-semibold">23 funded</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Success Rate</span>
<span className="font-semibold text-green-400">78%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-500" style={{width: '78%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium">
                  View Accelerator Program
                </button>
</div>
</article>
</section>

<div className="flex space-x-3 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
<button className="w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 scale-125" id="dot-1"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-4"></button>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in text-center mt-16" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}><div className="space-y-6">
<h2 className="text-2xl font-medium text-white">Ready to Join Our Elite Portfolio?</h2>
<p className="text-white/70 max-w-2xl mx-auto">
            Connect with our network of top-tier VCs and secure the funding your startup deserves. 
            Join the ranks of unicorns and industry leaders who trusted us with their growth journey.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply for Funding
            </button>
<button className="px-8 py-3 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium">
              Download Portfolio Guide
            </button>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 mt-24 py-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-md flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<span className="text-white font-medium">Nexus Ventures</span>
</div>
<div className="text-sm text-white/50">
          © 2024 Nexus Ventures. Connecting startups with elite venture capital.
        </div>
<div className="flex space-x-6 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
