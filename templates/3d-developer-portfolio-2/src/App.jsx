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



        // Hero 3D Canvas Animation
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 1000,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                vz: -Math.random() * 2 - 1
            });
        }

        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animate() {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx + (mouseX - canvas.width / 2) * 0.0001;
                p.y += p.vy + (mouseY - canvas.height / 2) * 0.0001;
                p.z += p.vz;

                if (p.z < 1) {
                    p.z = 1000;
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                }

                const scale = 500 / p.z;
                const x2d = (p.x - canvas.width / 2) * scale + canvas.width / 2;
                const y2d = (p.y - canvas.height / 2) * scale + canvas.height / 2;
                const size = scale * 2;

                const alpha = Math.min(1, (1000 - p.z) / 500);
                const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size);
                gradient.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.8})`);
                gradient.addColorStop(0.5, `rgba(59, 130, 246, ${alpha * 0.4})`);
                gradient.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const scale1 = 500 / p1.z;
                    const scale2 = 500 / p2.z;
                    const x1 = (p1.x - canvas.width / 2) * scale1 + canvas.width / 2;
                    const y1 = (p1.y - canvas.height / 2) * scale1 + canvas.height / 2;
                    const x2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
                    const y2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;

                    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / 100) * 0.2})`;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }
        animate();

        // 3D Card Tilt Effect
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-neutral-950/70 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight" href="#">AS</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#skills">Skills</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="px-4 py-2 bg-white text-neutral-950 text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Let's Talk
            </a>
</div>
</nav>

<section className="min-h-screen relative flex items-center justify-center overflow-hidden">
<canvas className="absolute inset-0 w-full h-full" id="hero-canvas"></canvas>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
<span className="text-xs text-neutral-400">Available for work</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
                Aditya Sharma
            </h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light mb-8 max-w-2xl mx-auto">
                Creative Developer &amp; Designer crafting immersive digital experiences
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-6 py-3 bg-white text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-all hover:scale-105" href="#work">
                    View Projects
                </a>
<a className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all flex items-center gap-2" href="#about">
<span>Learn More</span>
<span className="iconify" data-icon="lucide:arrow-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
<span className="iconify text-neutral-600" data-icon="lucide:chevron-down" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section className="py-32 px-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 p-1">
<div className="w-full h-full rounded-3xl bg-neutral-900 flex items-center justify-center overflow-hidden" id="about-3d">
<canvas className="w-full h-full" id="about-canvas"></canvas>
</div>
</div>
<div className="absolute -bottom-6 -right-6 px-6 py-4 bg-neutral-900 border border-white/10 rounded-2xl">
<div className="text-3xl font-semibold tracking-tight">5+</div>
<div className="text-sm text-neutral-500">Years Experience</div>
</div>
</div>
<div>
<p className="text-sm text-violet-400 font-medium mb-4">ABOUT ME</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Turning ideas into reality through code &amp; design
                    </h2>
<p className="text-neutral-400 leading-relaxed mb-6">
                        I'm a full-stack developer and designer based in Mumbai, India. I specialize in creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bring a unique perspective to every project.
                    </p>
<p className="text-neutral-400 leading-relaxed mb-8">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or capturing moments through photography.
                    </p>
<div className="flex items-center gap-4">
<a className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:dribbble" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-900/50" id="work">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-sm text-violet-400 font-medium mb-4">SELECTED WORK</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Featured Projects
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 project-card" style={{transformStyle: 'preserve-3d'}}>
<div className="aspect-video bg-gradient-to-br from-violet-600/30 to-pink-600/30 p-8 flex items-center justify-center">
<div className="w-full h-full rounded-xl bg-neutral-800/50 backdrop-blur flex items-center justify-center">
<span className="text-4xl font-semibold tracking-tight text-white/20">01</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">Web App</span>
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">React</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Nova Dashboard</h3>
<p className="text-sm text-neutral-500 mb-4">Analytics platform with real-time data visualization and AI-powered insights.</p>
<a className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors" href="#">
<span>View Project</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 project-card" style={{transformStyle: 'preserve-3d'}}>
<div className="aspect-video bg-gradient-to-br from-cyan-600/30 to-emerald-600/30 p-8 flex items-center justify-center">
<div className="w-full h-full rounded-xl bg-neutral-800/50 backdrop-blur flex items-center justify-center">
<span className="text-4xl font-semibold tracking-tight text-white/20">02</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">Mobile</span>
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">Flutter</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Mindful App</h3>
<p className="text-sm text-neutral-500 mb-4">Meditation and wellness app with personalized sessions and progress tracking.</p>
<a className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors" href="#">
<span>View Project</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 project-card" style={{transformStyle: 'preserve-3d'}}>
<div className="aspect-video bg-gradient-to-br from-orange-600/30 to-red-600/30 p-8 flex items-center justify-center">
<div className="w-full h-full rounded-xl bg-neutral-800/50 backdrop-blur flex items-center justify-center">
<span className="text-4xl font-semibold tracking-tight text-white/20">03</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">E-commerce</span>
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">Next.js</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Luxe Store</h3>
<p className="text-sm text-neutral-500 mb-4">Premium e-commerce platform with immersive 3D product previews.</p>
<a className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors" href="#">
<span>View Project</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 project-card" style={{transformStyle: 'preserve-3d'}}>
<div className="aspect-video bg-gradient-to-br from-blue-600/30 to-violet-600/30 p-8 flex items-center justify-center">
<div className="w-full h-full rounded-xl bg-neutral-800/50 backdrop-blur flex items-center justify-center">
<span className="text-4xl font-semibold tracking-tight text-white/20">04</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">SaaS</span>
<span className="px-2 py-1 text-xs bg-white/5 rounded-full">Node.js</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">CloudSync</h3>
<p className="text-sm text-neutral-500 mb-4">File collaboration platform with real-time syncing and team management.</p>
<a className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors" href="#">
<span>View Project</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="skills">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-sm text-violet-400 font-medium mb-4">EXPERTISE</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Skills &amp; Technologies
                </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:code-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">React</h3>
<p className="text-xs text-neutral-500">Frontend</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:server" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">Node.js</h3>
<p className="text-xs text-neutral-500">Backend</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:figma" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">Figma</h3>
<p className="text-xs text-neutral-500">Design</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:box" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">Three.js</h3>
<p className="text-xs text-neutral-500">3D Graphics</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:database" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">PostgreSQL</h3>
<p className="text-xs text-neutral-500">Database</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">TypeScript</h3>
<p className="text-xs text-neutral-500">Language</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:cloud" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">AWS</h3>
<p className="text-xs text-neutral-500">Cloud</p>
</div>
<div className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
<div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:git-branch" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium mb-1">Git</h3>
<p className="text-xs text-neutral-500">Version Control</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-900/50" id="contact">
<div className="max-w-4xl mx-auto text-center">
<p className="text-sm text-violet-400 font-medium mb-4">GET IN TOUCH</p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Let's work together
            </h2>
<p className="text-neutral-400 mb-12 max-w-xl mx-auto">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>
<form className="max-w-lg mx-auto space-y-4">
<input className="w-full px-5 py-4 bg-neutral-900 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-sm" placeholder="Your Name" type="text"/>
<input className="w-full px-5 py-4 bg-neutral-900 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-sm" placeholder="Your Email" type="email"/>
<textarea className="w-full px-5 py-4 bg-neutral-900 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors resize-none text-sm" placeholder="Your Message" rows="5"></textarea>
<button className="w-full px-6 py-4 bg-white text-neutral-950 font-medium rounded-xl hover:bg-neutral-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2" type="submit">
<span>Send Message</span>
<span className="iconify" data-icon="lucide:send" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</form>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-500">© 2024 Aditya Sharma. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
