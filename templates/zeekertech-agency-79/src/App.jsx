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



        (function() {
            const canvas = document.getElementById('hero-particles');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];
            
            // Configuration for subtle network effect
            const particleCount = 60; // Low count for cleaner look
            const connectionDistance = 150;
            const moveSpeed = 0.3;

            function resize() {
                width = canvas.width = canvas.parentElement.offsetWidth;
                height = canvas.height = canvas.parentElement.offsetHeight;
                initParticles();
            }

            function initParticles() {
                particles = [];
                for(let i=0; i<particleCount; i++) {
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * moveSpeed,
                        vy: (Math.random() - 0.5) * moveSpeed,
                        size: Math.random() * 1.5 + 0.5
                    });
                }
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                
                // Update and Draw Particles
                particles.forEach((p, index) => {
                    p.x += p.vx;
                    p.y += p.vy;

                    // Bounce off edges
                    if(p.x < 0 || p.x > width) p.vx *= -1;
                    if(p.y < 0 || p.y > height) p.vy *= -1;

                    // Draw dot
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(148, 163, 184, 0.4)'; // zinc-400 subtle
                    ctx.fill();

                    // Draw connections
                    for(let j = index + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if(distance < connectionDistance) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 * (1 - distance/connectionDistance)})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                });

                requestAnimationFrame(animate);
            }

            window.addEventListener('resize', resize);
            resize();
            animate();
        })();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-semibold text-zinc-100">ZT</span>
                ZeekerTech
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-full transition-all group" href="#contact">
                    Start a project
                    <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none hero-glow z-0"></div>

<canvas className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" id="hero-particles"></canvas>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting new enterprise partners
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">Building  <br className="hidden md:block"/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Digital Experiences</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">We build modern, scalable web applications that deliver results. Transform your ideas into powerful digital experiences.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Consult our experts
                    <iconify-icon className="" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="sm:w-auto hover:bg-zinc-800 transition-colors flex items-center justify-center text-sm font-medium text-zinc-300 bg-zinc-900 w-full border-zinc-800 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#work">
                    View case studies
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-6 relative z-10">
<div className="relative rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm aspect-[16/9] md:aspect-[21/9] overflow-hidden flex items-center justify-center group">
<div className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 p-4 bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-700">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-32 bg-zinc-800 rounded"></div>
<div className="h-1.5 w-24 bg-zinc-800 rounded"></div>
<div className="h-1.5 w-28 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="absolute top-1/2 right-1/4 -translate-y-1/2 p-4 bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700 z-10">
<div className="flex items-center justify-between gap-8 mb-3">
<span className="text-xs text-zinc-500 font-mono">Deployment</span>
<span className="text-xs text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">Success</span>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1.5 h-4 bg-blue-500 rounded-t"></div>
<div className="w-1.5 h-6 bg-blue-500 rounded-t"></div>
<div className="w-1.5 h-3 bg-blue-500 rounded-t"></div>
<div className="w-1.5 h-8 bg-blue-500 rounded-t"></div>
<div className="w-1.5 h-5 bg-blue-500 rounded-t"></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-zinc-900 bg-black/20 relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-8">Powering next-gen technologies</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold text-white tracking-tight">Vercel</span>
<span className="text-lg font-bold text-white tracking-tight">Stripe</span>
<span className="text-lg font-bold text-white tracking-tight">Next.js</span>
<span className="text-lg font-bold text-white tracking-tight">AWS</span>
<span className="text-lg font-bold text-white tracking-tight">Tailwind</span>
<span className="text-lg font-bold text-white tracking-tight">Supabase</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 max-w-3xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Comprehensive digital solutions.</h2>
<p className="text-zinc-400 text-lg font-light">We don't just write code. We architect systems that drive business growth, optimize performance, and scale effortlessly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Custom Software Dev</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Tailor-made applications built with modern frameworks like React, Node.js, and Python to fit your specific business logic.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cloud-storage-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cloud Infrastructure</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Scalable architecture design on AWS and Azure. Serverless implementations, microservices, and automated CI/CD pipelines.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Mobile Solutions</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Data Analytics &amp; AI</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Transform raw data into actionable insights using advanced analytics, machine learning models, and BI dashboarding.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 md:col-span-2">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cybersecurity &amp; Compliance</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">Protecting your digital assets with enterprise-grade security protocols, penetration testing, and compliance audits (GDPR, HIPAA).</p>
<a className="text-sm text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors inline-flex items-center gap-1" href="#">
                                Learn about our security audit
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="hidden md:block w-px h-32 bg-gradient-to-b from-zinc-800 to-transparent"></div>
<div className="flex-1">
<h4 className="text-sm font-medium text-zinc-300 mb-4">Security Stack</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon>
                                    End-to-end Encryption
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon>
                                    Real-time Threat Monitoring
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon>
                                    Automated Backup Systems
                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Engineered for speed and reliability.</h2>
<p className="text-zinc-400 font-light mb-8 leading-relaxed">
                        In a fast-paced digital landscape, speed is currency. ZeekerTech leverages cutting-edge technology stacks to ensure your products are not only functional but blaze past the competition.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-white">01</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Agile Methodology</h4>
<p className="text-sm text-zinc-500">Iterative development cycles ensure flexibility and rapid delivery of features.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-white">02</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Clean Code Architecture</h4>
<p className="text-sm text-zinc-500">Maintainable, scalable codebases that reduce technical debt over time.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-white">03</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">24/7 Support</h4>
<p className="text-sm text-zinc-500">Dedicated support teams to ensure maximum uptime and immediate resolution.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-xl"></div>
<div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 p-8">
<div className="flex items-center justify-between mb-8 border-b border-zinc-900 pb-4">
<span className="text-sm font-medium text-zinc-400">System Metrics</span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
</div>
</div>
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<div className="text-3xl font-light text-white mb-1">99.9%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Uptime Guarantee</div>
</div>
<div>
<div className="text-3xl font-light text-white mb-1">2x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Faster Deployment</div>
</div>
</div>

<div className="bg-zinc-900/50 rounded-lg p-4 font-mono text-xs overflow-hidden">
<div className="text-zinc-500 mb-1">// ZeekerTech Optimization</div>
<div className="flex gap-2">
<span className="text-purple-400">const</span>
<span className="text-blue-300">optimize</span>
<span className="text-zinc-300">=</span>
<span className="text-yellow-300">async</span>
<span className="text-zinc-300">()</span>
<span className="text-zinc-300">=&gt;</span>
<span className="text-zinc-300">{</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-purple-400">await</span>
<span className="text-blue-300">deploy</span>
<span className="text-zinc-300">(</span>
<span className="text-green-300">'production'</span>
<span className="text-zinc-300">);</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-purple-400">return</span>
<span className="text-blue-300">success</span>
<span className="text-zinc-300">;</span>
</div>
<div className="text-zinc-300">}</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale your vision?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">Join the forward-thinking companies that trust ZeekerTech to build their mission-critical software.</p>
<form className="max-w-sm mx-auto flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<div className="absolute inset-0 rounded-lg pointer-events-none border border-transparent peer-focus:border-blue-500/10"></div>
</div>
<button className="w-full bg-white text-black font-medium text-sm rounded-lg px-4 py-3 hover:bg-zinc-200 transition-colors" type="button">
                    Get Started
                </button>
<p className="text-xs text-zinc-600">No spam. Unsubscribe at any time.</p>
</form>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<span className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">ZT</span>
                        ZeekerTech
                    </a>
<p className="text-sm text-zinc-500 mb-6 max-w-xs">
                        Empowering businesses through digital transformation, custom software, and strategic innovation.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Services</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Mobile Apps</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cloud Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 ZeekerTech Solutions. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-zinc-500">All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
