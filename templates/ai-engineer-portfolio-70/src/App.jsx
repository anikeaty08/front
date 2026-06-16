import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Smooth scroll for anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });

      // Simple Intersection Observer for scroll animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-enter');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.group').forEach(el => {
          el.style.opacity = '0';
          el.classList.add('animate-enter');
          observer.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav h-14">
<div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
<a className="text-white text-sm font-medium tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-white"></span>
          Muhammad Hanan Baloch
        </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#projects">
            Work
          </a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="text-white hover:text-neutral-300 transition-colors ml-2" href="mailto:contact@bereket.ai">
            Contact
          </a>
</div>
</div>
</nav>

<section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-24 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>

<div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">

<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-neutral-400">
            Open to Work
          </span>
</div>

<h1 className="animate-enter delay-100 text-4xl md:text-6xl font-medium text-white tracking-tighter-custom leading-[1.15]">
          Building intelligent agents
          <br className="hidden md:block"/>
          and automation systems that
          <br className="hidden md:block"/>
<span className="text-neutral-500">solve real problems.</span>
</h1>

<p className="animate-enter delay-200 text-base md:text-lg text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
          I am an AI Engineer specializing in computer vision, automation
          pipelines, and practical LLM integration. Turning complex data into
          actionable intelligence.
        </p>

<div className="animate-enter delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="group h-10 px-6 rounded-md bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors" href="#projects">
            View Projects
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-10 px-6 rounded-md border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#about">
            About Me
          </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]" id="stack">
<div className="max-w-5xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">
          Powering My Engineering
        </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="opacity-80 group-hover:opacity-100" icon="logos:python" width="24"></iconify-icon>
<span className="text-xs font-mono">Python</span>
</div>

<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-white opacity-80 group-hover:opacity-100" icon="simple-icons:fastapi" width="24"></iconify-icon>
<span className="text-xs font-mono">FastAPI</span>
</div>

<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-white opacity-80 group-hover:opacity-100" icon="file-icons:nextjs" width="24"></iconify-icon>
<span className="text-xs font-mono">Next.js</span>
</div>

<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="opacity-80 group-hover:opacity-100" icon="logos:docker-icon" width="24"></iconify-icon>
<span className="text-xs font-mono">Docker</span>
</div>

<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-[#FF4B4B] opacity-80 group-hover:opacity-100" icon="simple-icons:streamlit" width="24"></iconify-icon>
<span className="text-xs font-mono">Streamlit</span>
</div>

<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-white opacity-80 group-hover:opacity-100" icon="simple-icons:openai" width="24"></iconify-icon>
<span className="text-xs font-mono">LLMs</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="projects">
<div className="max-w-5xl mx-auto space-y-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight-custom">
              Selected Projects
            </h2>
<p className="text-sm text-neutral-500 mt-2 font-light">
              Technical showcases of AI, automation, and infrastructure.
            </p>
</div>
<div className="text-xs font-mono text-neutral-600">// 2024 - 2025</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-lg bg-[#0A0A0A] border border-white/10 p-1 hover:border-white/20 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden rounded bg-neutral-900 border-b border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:brain-linear" strokeWidth="1" width="48"></iconify-icon>
</div>

<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  EfficientNet-B0
                </span>
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  FastAPI
                </span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                  NeuroScan AI
                </h3>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                My Final Year Project. A brain tumor detection system utilizing
                state-of-the-art Computer Vision. Built a robust API with
                FastAPI and a responsive frontend with Next.js for real-time
                inference.
              </p>
</div>
</div>

<div className="group relative rounded-lg bg-[#0A0A0A] border border-white/10 p-1 hover:border-white/20 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden rounded bg-neutral-900 border-b border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:users-group-rounded-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  LangChain
                </span>
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  GHL Integration
                </span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                  AI Automation Agents
                </h3>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                Deployed autonomous agents for business workflows. Includes a
                <span className="text-white font-normal">
                  Marketing Audit Agent
                </span>
                for SEO/competitor analysis and a
                <span className="text-white font-normal">
                  Freight Qualification Voice Agent
                </span>
                integrated with GoHighLevel.
              </p>
</div>
</div>

<div className="group relative rounded-lg bg-[#0A0A0A] border border-white/10 p-1 hover:border-white/20 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden rounded bg-neutral-900 border-b border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:city-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  Full-Stack
                </span>
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  Automation
                </span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                  Real Estate Property Agent
                </h3>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                A comprehensive full-stack automation tool designed for property
                agents. Streamlines lead management, appointment setting, and
                property data processing into a single unified interface.
              </p>
</div>
</div>

<div className="group relative rounded-lg bg-[#0A0A0A] border border-white/10 p-1 hover:border-white/20 transition-all duration-300">
<div className="relative h-48 w-full overflow-hidden rounded bg-neutral-900 border-b border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors duration-500" icon="solar:server-square-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  Docker
                </span>
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  Pytest
                </span>
<span className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-white rounded font-mono">
                  CI/CD
                </span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                  FastAPI CI/CD Pipeline
                </h3>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                Architected a robust DevOps pipeline for Python applications.
                Implemented containerization with Docker and automated testing
                workflows using Pytest to ensure code reliability and rapid
                deployment.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="about">
<div className="max-w-2xl mx-auto text-center space-y-10">
<div className="space-y-4">
<iconify-icon className="text-neutral-500" icon="solar:user-circle-linear" strokeWidth="1" width="40"></iconify-icon>
<h2 className="text-2xl font-medium text-white tracking-tight-custom">
            About &amp; Inquiries
          </h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
            I am currently finishing my Final Year Project and active in the AI
            engineering space. I am open to discussing roles involving AI
            automation, Machine Learning engineering, and backend systems
            development.
          </p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="h-10 px-8 rounded-full bg-white text-black text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors" href="mailto:muhammadhananbaloch@outlook.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Get in touch
          </a>
<a className="h-10 px-8 rounded-full border border-white/10 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-colors" href="https://drive.google.com/file/d/1FxqXKWAzpl2jAau1EkrCi8JpYJWmjcYz/view?usp=sharing" target="_blank">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Download CV
          </a>
</div>

<div className="flex justify-center gap-6 pt-8">
<a className="text-neutral-500 hover:text-white transition-colors" href="https://github.com/muhammadhananbaloch">
<iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:github-icon" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.linkedin.com/in/muhammadhananbaloch/">
<iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:linkedin-icon" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://x.com/muhammadhanann">
<iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
</section>
<footer className="py-8 border-t border-white/5 text-center">
<p className="text-xs text-neutral-600 font-mono">
        © 2025 Muhammad Hanan Baloch. Crafted with precision.
      </p>
</footer>



    </>
  );
}
