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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['Clash Display', 'sans-serif'],
body: ['Satoshi', 'sans-serif'],
},
colors: {
dark: {
900: '#050505',
800: '#0A0A0A',
700: '#121212',
600: '#1C1C1C'
},
gold: {
light: '#FFE5A0',
DEFAULT: '#D4AF37',
dark: '#A38421'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.style.width = '100%';
            setTimeout(() => {
                loader.style.opacity = '0';
            }, 600);
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Text Reveals
        gsap.utils.toArray('.reveal-text').forEach((element, i) => {
            gsap.fromTo(element, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.2 + (i * 0.1)
                }
            );
        });

        gsap.fromTo('.reveal-text-delay', 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power3.out" }
        );

        // WebGL Particle Background (Three.js)
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 200; // Minimalist
            const posArray = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0xD4AF37, // Gold
                transparent: true,
                opacity: 0.8,
            });
            
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);
            
            camera.position.z = 3;
            
            // Mouse Interaction
            let mouseX = 0;
            let mouseY = 0;
            
            document.addEventListener('mousemove', (event) => {
                mouseX = event.clientX / window.innerWidth - 0.5;
                mouseY = event.clientY / window.innerHeight - 0.5;
            });

            const animate = () => {
                requestAnimationFrame(animate);
                
                particlesMesh.rotation.y += 0.001;
                particlesMesh.rotation.x += 0.001;
                
                // Gentle parallax
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);
                
                renderer.render(scene, camera);
            };
            
            animate();

            // Resize handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        initThreeJS();
    
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
      

<div className="loader-line" id="loader"></div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-40" id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 glass-high transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
<iconify-icon className="text-gold text-lg" icon="solar:crown-star-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-gold transition-colors">ELITECALLAB</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#creators">Creators</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#metrics">Metrics</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#work">Work</a>
<button className="text-sm font-medium text-gray-400 hover:text-white transition-colors" onclick="document.getElementById('contact-modal').classList.remove('hidden')">Contact</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all group">
<span className="text-xs font-semibold tracking-wide text-white">AGENCY LOGIN</span>
<iconify-icon className="text-gray-400 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="md:hidden text-2xl text-white">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Premier Influence Network</span>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-white">
<span className="block reveal-text">CURATING</span>
<span className="block reveal-text text-gray-500 italic font-light pr-4">DIGITAL</span>
<span className="block reveal-text text-gradient-gold">LEGACY</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed reveal-text-delay">
                        We architect connections between elite global brands and the creators who shape culture. Precision targeting, measurable impact.
                    </p>
<div className="flex flex-wrap items-center gap-6 pt-4 reveal-text-delay">
<button className="group relative px-8 py-4 bg-white text-dark-900 rounded-lg overflow-hidden font-semibold text-sm tracking-wide">
<div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative group-hover:text-dark-900 transition-colors">START CAMPAIGN</span>
</button>
<div className="flex items-center gap-3">
<div className="flex -space-x-4">
<img alt="Creator" className="w-10 h-10 rounded-full border-2 border-dark-900 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Creator" className="w-10 h-10 rounded-full border-2 border-dark-900 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Creator" className="w-10 h-10 rounded-full border-2 border-dark-900 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;h=100&amp;fit=crop"/>
</div>
<span className="text-sm text-gray-500 font-medium">350+ Elite Creators</span>
</div>
</div>
</div>

<div className="lg:col-span-4 relative hidden lg:block">
<div className="relative z-10 glass rounded-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-700 ease-out border-white/10 group">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-display text-2xl font-semibold text-white">Viral Impact</h3>
<p className="text-xs text-gray-400">Campaign Analytics</p>
</div>
<iconify-icon className="text-gold text-2xl" icon="solar:chart-2-bold"></iconify-icon>
</div>
<div className="space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-xs text-gray-400">
<span>Engagement Rate</span>
<span className="text-green-400">+12.5%</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gold w-[85%] group-hover:w-[92%] transition-all duration-1000"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="bg-white/5 rounded-lg p-3">
<p className="text-xs text-gray-500">Reach</p>
<p className="text-xl font-display font-semibold text-white">2.4M</p>
</div>
<div className="bg-white/5 rounded-lg p-3">
<p className="text-xs text-gray-500">ROI</p>
<p className="text-xl font-display font-semibold text-white">4.2x</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-dark-900" id="metrics">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="text-center md:text-left pt-8 md:pt-0 md:pl-8 first:pl-0 group cursor-default">
<p className="text-5xl md:text-6xl font-display font-semibold text-white tracking-tight group-hover:text-gold transition-colors duration-300">350<span className="text-2xl text-gray-500 align-top">+</span></p>
<p className="text-sm text-gray-500 font-medium mt-2 uppercase tracking-widest">Vetted Creators</p>
</div>
<div className="text-center md:text-left pt-8 md:pt-0 md:pl-8 group cursor-default">
<p className="text-5xl md:text-6xl font-display font-semibold text-white tracking-tight group-hover:text-gold transition-colors duration-300">200<span className="text-2xl text-gray-500 align-top">+</span></p>
<p className="text-sm text-gray-500 font-medium mt-2 uppercase tracking-widest">Global Brands</p>
</div>
<div className="text-center md:text-left pt-8 md:pt-0 md:pl-8 group cursor-default">
<p className="text-5xl md:text-6xl font-display font-semibold text-white tracking-tight group-hover:text-gold transition-colors duration-300">85<span className="text-2xl text-gray-500 align-top">M</span></p>
<p className="text-sm text-gray-500 font-medium mt-2 uppercase tracking-widest">Total Reach</p>
</div>
<div className="text-center md:text-left pt-8 md:pt-0 md:pl-8 group cursor-default">
<p className="text-5xl md:text-6xl font-display font-semibold text-white tracking-tight group-hover:text-gold transition-colors duration-300">4.8<span className="text-2xl text-gray-500 align-top">/5</span></p>
<p className="text-sm text-gray-500 font-medium mt-2 uppercase tracking-widest">Client Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32" id="creators">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">Curated Talent</h2>
<p className="text-gray-400 font-light max-w-sm">Hand-selected creators who don't just reach audiences—they move them.</p>
</div>
<a className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-medium tracking-wide" href="#">
                    VIEW ALL ROSTER <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-dark-800 cursor-pointer">
<img alt="Model" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&amp;w=1288&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 rounded border border-white/20 bg-white/10 text-[10px] uppercase tracking-wider text-white backdrop-blur-md">Fashion</span>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-1">Elena Rostova</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Luxury fashion editorialist with high conversion across EU markets.</p>
<div className="flex items-center gap-4 text-xs font-medium text-gold">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 2.1M</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 4.8% ER</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-dark-800 cursor-pointer lg:mt-12">
<img alt="Tech" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 rounded border border-white/20 bg-white/10 text-[10px] uppercase tracking-wider text-white backdrop-blur-md">Tech</span>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-1">Marcus Chen</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Hardware reviews and minimalist desk setups. Premium tech demographic.</p>
<div className="flex items-center gap-4 text-xs font-medium text-gold">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 850K</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 8.2% ER</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-dark-800 cursor-pointer">
<img alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 rounded border border-white/20 bg-white/10 text-[10px] uppercase tracking-wider text-white backdrop-blur-md">Lifestyle</span>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-1">Sarah &amp; Tom</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Travel couple focused on sustainable luxury and hidden gems.</p>
<div className="flex items-center gap-4 text-xs font-medium text-gold">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 1.2M</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 5.5% ER</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-dark-800 cursor-pointer lg:mt-12">
<img alt="Streetwear" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 rounded border border-white/20 bg-white/10 text-[10px] uppercase tracking-wider text-white backdrop-blur-md">Streetwear</span>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-1">Javier K.</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Urban aesthetics and sneaker culture authority.</p>
<div className="flex items-center gap-4 text-xs font-medium text-gold">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 620K</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 9.1% ER</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-white/[0.02]" id="work">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-16 text-center">Recent <span className="text-gradient-gold">Collaborations</span></h2>
<div className="space-y-4">

<div className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-gold/20 transition-all duration-300">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-display font-bold text-lg">A</div>
<div>
<h3 className="font-display text-xl font-semibold text-white group-hover:text-gold transition-colors">AudioTechnica Global</h3>
<p className="text-sm text-gray-500">Product Launch • 12 Creators • Pan-Asia</p>
</div>
</div>
<div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
<div className="text-left md:text-right">
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Impressions</p>
<p className="text-lg font-display font-medium text-white">45M+</p>
</div>
<div className="text-left md:text-right">
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
<span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span><span className="text-sm text-white">Completed</span>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-dark-900 group-hover:border-gold transition-all ml-auto md:ml-0">
<iconify-icon className="text-lg -rotate-45 group-hover:rotate-0 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-gold/20 transition-all duration-300">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-display font-bold text-lg">S</div>
<div>
<h3 className="font-display text-xl font-semibold text-white group-hover:text-gold transition-colors">Stripe x Fintech</h3>
<p className="text-sm text-gray-500">Brand Awareness • 8 Creators • North America</p>
</div>
</div>
<div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
<div className="text-left md:text-right">
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Impressions</p>
<p className="text-lg font-display font-medium text-white">12.5M</p>
</div>
<div className="text-left md:text-right">
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
<span className="inline-block w-2 h-2 rounded-full bg-yellow-500 animate-pulse mr-2"></span><span className="text-sm text-white">Active</span>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-dark-900 group-hover:border-gold transition-all ml-auto md:ml-0">
<iconify-icon className="text-lg -rotate-45 group-hover:rotate-0 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-32 pb-8 border-t border-white/5 bg-dark-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-sm">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-gold text-2xl" icon="solar:crown-star-linear"></iconify-icon>
<span className="font-display font-bold text-xl tracking-tight text-white">ELITECALLAB</span>
</a>
<p className="text-gray-500 text-sm leading-relaxed">
                        Redefining influence through data-driven strategy and premium talent curation.
                    </p>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-white font-medium text-sm">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gold transition-colors" href="#">About</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Press</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gold transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-gray-600">© 2023 EliteCallab Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-instagram-linear"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-twitter-linear"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-linkedin-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="contact-modal">
<div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" onclick="document.getElementById('contact-modal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-8 rounded-2xl glass-high border border-white/10 shadow-2xl animate-fade-in-up">
<div className="flex justify-between items-center mb-8">
<h3 className="font-display text-2xl font-semibold text-white">Partner with Elite</h3>
<button className="text-gray-500 hover:text-white transition-colors" onclick="document.getElementById('contact-modal').classList.add('hidden')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-gray-400 font-medium">First Name</label>
<input className="w-full px-4 py-3 rounded-lg custom-input text-white text-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400 font-medium">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg custom-input text-white text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400 font-medium">Work Email</label>
<input className="w-full px-4 py-3 rounded-lg custom-input text-white text-sm" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400 font-medium">Brand Website</label>
<input className="w-full px-4 py-3 rounded-lg custom-input text-white text-sm" placeholder="https://" type="url"/>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400 font-medium">Budget Range</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg custom-input text-white text-sm appearance-none cursor-pointer">
<option className="bg-dark-800">$10k - $50k</option>
<option className="bg-dark-800">$50k - $100k</option>
<option className="bg-dark-800">$100k+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full py-4 mt-4 bg-white hover:bg-gray-100 text-dark-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                    Submit Request <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>



    </>
  );
}
