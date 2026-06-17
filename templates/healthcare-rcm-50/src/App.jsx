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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
prism: {
dark: '#1A1F3D',
blue: '#2563EB',
teal: '#0D9488',
slate: '#64748B',
light: '#F8FAFC'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero Load Animation
        const tl = gsap.timeline();
        tl.to(".animate-in", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Hero Background Parallax
        gsap.to("#hero-bg", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Scroll Reveal for Sections
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Staggered Reveal for Cards
        ScrollTrigger.batch(".scroll-reveal-stagger", {
            start: "top 85%",
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",
                overwrite: true
            }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 40 })
        });
        
        // Initial set for staggered elements
        gsap.set(".scroll-reveal-stagger", { opacity: 0, y: 40 });

        // Navbar Transition
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-sm', 'py-3');
                navbar.classList.remove('py-5');
                navbar.querySelectorAll('.text-white').forEach(el => el.classList.replace('text-white', 'text-slate-900'));
                navbar.querySelectorAll('.text-white\\/90').forEach(el => el.classList.replace('text-white/90', 'text-slate-600'));
                // Logo handling would go here in a real app (swap white logo for dark)
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-sm', 'py-3');
                navbar.classList.add('py-5');
                navbar.querySelectorAll('.text-slate-900').forEach(el => el.classList.replace('text-slate-900', 'text-white'));
                navbar.querySelectorAll('.text-slate-600').forEach(el => el.classList.replace('text-slate-600', 'text-white/90'));
            }
        });

        // WebGL Setup (Subtle Atmospheric Background)
        const initWebGL = () => {
            const container = document.getElementById('webgl-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Create a subtle gradient mesh
            const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
            
            // Custom Shader Material for soft noise
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uColor1: { value: new THREE.Color('#F8FAFC') }, // Background
                    uColor2: { value: new THREE.Color('#E2E8F0') }  // Subtle variation
                },
                vertexShader: `
                    varying vec2 vUv;
                    uniform float uTime;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        // Gentle wave motion
                        pos.z += sin(pos.x * 2.0 + uTime * 0.5) * 0.2;
                        pos.z += cos(pos.y * 2.0 + uTime * 0.3) * 0.2;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `,
                fragmentShader: `
                    varying vec2 vUv;
                    uniform vec3 uColor1;
                    uniform vec3 uColor2;
                    uniform float uTime;
                    
                    // Simple noise function
                    float random(vec2 st) {
                        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                    }

                    void main() {
                        float noise = random(vUv + uTime * 0.05); 
                        float mixVal = distance(vUv, vec2(0.5)) + noise * 0.1;
                        vec3 color = mix(uColor1, uColor2, mixVal * 0.4);
                        gl_FragColor = vec4(color, 1.0); // Full opacity handled by canvas CSS
                    }
                `,
                transparent: true,
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            camera.position.z = 5;

            // Animation Loop
            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                material.uniforms.uTime.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // Defer WebGL init slightly to prioritize content
        setTimeout(initWebGL, 100);

    
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
      

<div id="webgl-container"></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5" id="navbar">
<div className="max-w-[1400px] mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-lg transform rotate-45 opacity-90"></div>
<div className="absolute inset-2 bg-white/20 rounded-sm transform rotate-45 backdrop-blur-sm"></div>
</div>
<span className="text-white font-semibold text-lg tracking-tight">PRISM RCM</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
<a className="text-white/90 text-sm font-medium hover:text-white transition-colors" href="#">home</a>
<a className="text-white/90 text-sm font-medium hover:text-white transition-colors" href="#">prism rcm</a>
<a className="text-white/90 text-sm font-medium hover:text-white transition-colors" href="#">our services</a>
<a className="text-white/90 text-sm font-medium hover:text-white transition-colors" href="#">track your success</a>
<a className="text-white/90 text-sm font-medium hover:text-white transition-colors" href="#">careers</a>
<a className="text-white/90 text-sm font-medium hover:text-white transition-colors" href="#">contact us</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all transform hover:scale-105" href="#">
                Book Appointment
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Medical Team" className="w-full h-full object-cover object-center scale-105" id="hero-bg" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20">

<div className="lg:col-span-7 flex flex-col justify-center space-y-8 hero-content">

<div className="flex items-center gap-3 animate-in opacity-0 translate-y-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-white/80 text-sm font-medium tracking-wide">Trusted by 150k+ peoples</span>
</div>
<h1 className="text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] animate-in opacity-0 translate-y-4">
                    Smarter <br/>
                    Revenue. Better <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Patient Care.</span>
</h1>
<p className="text-lg text-slate-300 max-w-xl leading-relaxed animate-in opacity-0 translate-y-4">
                    WE OPTIMIZE YOUR REVENUE CYCLE SO YOU CAN FOCUS ON DELIVERING EXCEPTIONAL HEALTHCARE.
                </p>
<div className="flex items-center gap-6 animate-in opacity-0 translate-y-4 pt-4">
<button className="bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-all flex items-center gap-3 group">
                        Book Appointment
                        <div className="bg-slate-200 rounded-full p-1 group-hover:translate-x-1 transition-transform">
<i className="w-4 h-4 text-slate-900" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>

<div className="lg:col-span-5 h-full flex flex-col justify-end pb-20 relative">

<div className="glass-panel p-8 rounded-3xl max-w-md ml-auto transform translate-y-8 animate-in opacity-0">
<div className="flex justify-between items-start mb-4">
<span className="text-white/90 text-sm font-medium">Client Satisfaction Rate</span>
</div>
<div className="text-5xl font-semibold text-white mb-2 tracking-tight">97%</div>
<p className="text-slate-300 text-xs leading-relaxed mb-0">
                        Prism RCM Delivers Compliant, Reliable Revenue Cycle Solutions Trusted By Medical Practices Nationwide.
                    </p>
</div>

<div className="absolute bottom-20 left-0 w-full animate-in opacity-0">
<div className="flex justify-between items-end">
<div className="max-w-xs">
<p className="text-white text-xs leading-relaxed opacity-80">
                                Streamline Your Revenue Cycle With Accurate Billing, Transparent Workflows, And Data-Driven Insights That Improve Cash Flow And Reduce Administrative Burden.
                            </p>
<div className="mt-6 flex items-center gap-4">
<button className="glass-panel px-6 py-3 rounded-full text-white text-sm font-medium flex items-center gap-3 hover:bg-white/20 transition-all">
                                    Explore service
                                    <div className="bg-white rounded-full p-1">
<i className="w-3 h-3 text-slate-900" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-20 left-6 max-w-md animate-in opacity-0">
<h3 className="text-white font-semibold text-lg mb-2">Complete RCM Solutions</h3>
<p className="text-slate-400 text-xs leading-relaxed">
                    End-To-End RCM Services Covering Medical Billing, Coding, Claims Submission, Denial Management, And Payment Posting To Maximize Reimbursements.
                </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
<div className="w-12 h-1 bg-white rounded-full"></div>
<div className="w-12 h-1 bg-white/20 rounded-full"></div>
<div className="w-12 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">

<div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
<img className="w-full h-full object-cover mix-blend-multiply" src="https://img.freepik.com/free-photo/dna-structure-background-science-medical-technology_53876-120037.jpg"/>
</div>
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

<div className="lg:col-span-4 scroll-reveal">
<h2 className="text-7xl font-semibold text-teal-600 mb-6 tracking-tight">50+</h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                    Delivering reliable care and medical expertise to patients across multiple regions worldwide.
                </p>
</div>

<div className="lg:col-span-8">
<div className="mb-12 scroll-reveal">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-800 tracking-tight leading-tight">
                        Access Performance Insights, Book Expert Consultations, And Connect With Our Team Seamlessly. We Provide The Tools, Support, And Guidance You Need To Move Forward With Confidence.
                    </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-500 scroll-reveal-stagger">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-transparent transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-3">Track your Success</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Insights That Drive Growth Visualize your revenue performance and make smarter decisions faster
                        </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-500 scroll-reveal-stagger delay-100">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-transparent transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-3">Schedule an appointment</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Book a Consultation Call us at 307 249 4349 — we’re here to help, anytime
                        </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-500 scroll-reveal-stagger delay-200">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-transparent transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-3">Our location</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            #30 N Gould St Ste R Sheridan, WY 82801
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
<div className="lg:col-span-5 scroll-reveal">
<span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4 block">About Us</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                        What is Revenue Cycle Management?
                    </h2>
</div>
<div className="lg:col-span-7 space-y-6 text-lg text-slate-500 leading-relaxed scroll-reveal delay-100">
<p>
                        Revenue Cycle Management (RCM) is the foundation of financial stability for healthcare organizations. It covers the entire financial journey of a patient from appointment scheduling and registration to billing, collections, and financial reporting. An effective RCM process ensures timely cash flow, minimizes claim denials, and maximizes reimbursements.
                    </p>
<p>
                        At PRISM RCM, we specialize in optimizing healthcare financial operations. Leveraging technology-driven, data-backed solutions, we partner with healthcare providers to manage the full revenue cycle with accuracy and efficiency.
                    </p>
</div>
</div>

<div className="relative flex items-center justify-center py-12 select-none scroll-reveal">
<h1 className="text-[12vw] lg:text-[14vw] font-bold text-slate-100 tracking-tighter leading-none absolute z-0 w-full text-center">
                    PRISM RCM
                </h1>

<div className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 filter drop-shadow-2xl">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#0d9488', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#2563eb', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient id="grad2" x1="100%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#e2e8f0', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#cbd5e1', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M50 20 L80 80 L20 80 Z" fill="none" stroke="url(#grad1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
<path d="M50 28 L72 72 L28 72 Z" fill="url(#grad2)" opacity="0.9"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-[1400px] mx-auto">

<div className="flex flex-col lg:flex-row justify-between items-end mb-16 scroll-reveal">
<div>
<span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4 block">Why Choose Us</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">What We Offer</h2>
<div className="flex items-center gap-3 mt-8">
<button className="px-6 py-2 rounded-full bg-slate-200 text-slate-600 text-sm font-medium hover:bg-white transition-colors">More</button>
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-white transition-colors"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<p className="max-w-md text-slate-500 text-base leading-relaxed mt-6 lg:mt-0">
                    We offer integrated healthcare services focused on accuracy, accessibility, and patient safety. Our solutions connect you with qualified professionals.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[500px]">

<div className="lg:col-span-3 flex flex-col justify-between py-2 space-y-2 scroll-reveal-stagger">
<a className="text-slate-400 font-medium text-lg py-3 hover:text-slate-600 transition-colors border-b border-slate-200" href="#">Compliant Medical Coding</a>
<a className="text-teal-700 font-semibold text-lg py-3 border-b border-teal-600/30" href="#">Billing &amp; Claims Management</a>
<a className="text-slate-400 font-medium text-lg py-3 hover:text-slate-600 transition-colors border-b border-slate-200" href="#">Verification Of Benefits &amp; Prior</a>
<a className="text-slate-400 font-medium text-lg py-3 hover:text-slate-600 transition-colors border-b border-slate-200" href="#">Payment Reconnection</a>
<a className="text-slate-400 font-medium text-lg py-3 hover:text-slate-600 transition-colors border-b border-slate-200" href="#">AR Recovery</a>
<div className="mt-8 pt-4">
<button className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
                            Book Appointment
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="lg:col-span-5 h-full relative rounded-3xl overflow-hidden shadow-2xl scroll-reveal-stagger delay-100 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:col-span-4 bg-gradient-to-br from-[#1A1F3D] to-[#2E3768] rounded-3xl p-10 flex flex-col justify-between shadow-2xl scroll-reveal-stagger delay-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h3 className="text-3xl font-semibold text-white tracking-tight leading-snug mb-6">
                            We deliver healthcare solutions built on trust, accuracy, and patient-first care.
                        </h3>
</div>
<div className="relative z-10 flex flex-wrap gap-3">
<span className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs font-medium border border-white/5">Compassion</span>
<span className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs font-medium border border-white/5">Transparency</span>
<span className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs font-medium border border-white/5">Collaboration</span>
<span className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs font-medium border border-white/5">Excellence</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 scroll-reveal">
<h2 className="text-4xl lg:text-5xl font-semibold text-teal-700 tracking-tight mb-6 lg:mb-0">Why PRISM RCM?</h2>
<p className="max-w-xl text-slate-500 text-sm leading-relaxed">
                    Our unified healthcare platform connects medical experts and care teams to deliver seamless, coordinated services. We support patients and providers through every stage of care, from diagnosis to ongoing management.
                </p>
</div>

<div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group scroll-reveal">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160550-217358c7db81?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<button className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 fill-current ml-1" data-lucide="play"></i>
</button>
</div>

<div className="absolute bottom-10 left-10 max-w-2xl">
<p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                        Our integrated healthcare model connects qualified medical professionals to deliver consistent, high-quality care. From assessment to recovery, we support safe, effective treatment and continuous patient support.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#2E3791] text-white pt-24 pb-8 px-6 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">

<div className="lg:col-span-5 space-y-8">
<div className="flex items-center gap-2">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-white rounded-lg transform rotate-45 opacity-20"></div>
<div className="absolute inset-2 bg-white rounded-sm transform rotate-45"></div>
</div>
<span className="text-white font-semibold text-xl tracking-tight">PRISM RCM</span>
</div>
<p className="text-white/70 text-sm leading-relaxed max-w-md">
                        From patient scheduling and registration to billing, collections, and performance reporting, we manage the entire revenue cycle with precision and care.
                    </p>
</div>

<div className="lg:col-span-7 flex justify-end">
<div className="flex flex-col space-y-4 text-right">
<a className="text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors" href="#">Home</a>
<a className="text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors" href="#">Prism RCM</a>
<a className="text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors" href="#">Our Services</a>
<a className="text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors" href="#">Track Your Success</a>
<a className="text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors" href="#">Careers</a>
<a className="text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>

<div className="relative w-full flex justify-center py-10 overflow-hidden">
<h1 className="text-[15vw] font-bold text-white/10 tracking-tighter leading-none whitespace-nowrap select-none">
                    PRISM RCM
                </h1>
</div>

<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs text-white/50">
<p>2026 Reserved.</p>
<p>Designed by Sphiria Digital</p>
</div>
</div>
</footer>


    </>
  );
}
