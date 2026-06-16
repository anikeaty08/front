import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      


<section className="min-h-screen relative flex items-center justify-center overflow-hidden">
<canvas className="absolute inset-0 w-full h-full" height="959" id="hero-canvas" width="1412"></canvas>
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
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
</div>
</section>







    </>
  );
}
