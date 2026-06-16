import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();

      // Simple Intersection Observer to trigger fade-ins
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-slide-up');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('section > div').forEach(section => {
          section.classList.add('opacity-0'); // Initial state
          observer.observe(section);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200 transition-all">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-neutral-900 font-normal tracking-tight text-xl flex items-center gap-2 group" href="#">
<span className="bg-neutral-900 text-white text-sm font-normal px-2 py-1 rounded-md group-hover:scale-105 transition-transform">
            UA
          </span>
<span>Urvashi Agrawal</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#skills">
            Skills
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#projects">
            Projects
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#experience">
            Experience
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">
            Contact
          </a>
</div>

<button className="md:hidden text-neutral-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-lg" id="mobile-menu">
<a className="block text-base text-neutral-600 hover:text-neutral-900" href="#about">
          About
        </a>
<a className="block text-base text-neutral-600 hover:text-neutral-900" href="#skills">
          Skills
        </a>
<a className="block text-base text-neutral-600 hover:text-neutral-900" href="#projects">
          Projects
        </a>
<a className="block text-base text-neutral-600 hover:text-neutral-900" href="#experience">
          Experience
        </a>
<a className="block text-base text-neutral-600 hover:text-neutral-900" href="#contact">
          Contact
        </a>
</div>
</nav>

<section className="min-h-[90vh] flex flex-col justify-center pt-24 px-6 relative">
<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

<div className="animate-slide-up space-y-6 order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-sm font-normal text-green-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Available – Open to internships, freelance, and collaborations
          </div>
<div className="space-y-4">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-tight">
              Hi, I'm Urvashi Agrawal
              <span className="inline-block animate-wave origin-bottom-right">
                👋
              </span>
</h1>
<p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
              I’m a Full Stack Developer and AI/ML Engineer building scalable
              web applications and intelligent systems. I work across the
              stack—from designing responsive frontends to developing backend
              services and deploying machine learning models. My focus is on
              creating real-world solutions that combine strong engineering with
              practical AI.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="px-7 py-3 bg-neutral-900 text-white text-base font-normal rounded-full hover:bg-neutral-800 hover:scale-[1.02] hover:shadow-sm transition-all flex items-center gap-2" href="https://drive.google.com/file/d/1xP2v8KODXqb8C6GuP5aHcRUpCytCgx2y/preview" target="_blank">
              View Resume
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="px-7 py-3 bg-white border border-neutral-200 text-neutral-900 text-base font-normal rounded-full hover:bg-neutral-50 hover:scale-[1.02] transition-all" href="#contact">
              Contact Me
            </a>
</div>
<div className="flex gap-5 pt-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="https://github.com/urvashi-agrawal-dev" target="_blank">
<i className="w-6 h-6" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="https://www.linkedin.com/in/uraviva/" target="_blank">
<i className="w-6 h-6" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="https://x.com/UraViva_" target="_blank">
<i className="w-6 h-6" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="animate-slide-up flex justify-center md:justify-end order-1 md:order-2" style={{animationDelay: '0.1s'}}>
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-lg bg-neutral-50 overflow-hidden relative flex items-center justify-center shrink-0 group">
<img alt="Urvashi Agrawal" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight flex items-center justify-center md:justify-start gap-2">
<i className="w-7 h-7 text-neutral-400" data-lucide="info" strokeWidth="1.5"></i>
          About Me
        </h2>
<p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
          I'm a MERN stack focused Full Stack Developer and AI/ML enthusiast,
          currently building scalable SaaS products and AI automation systems.
          With experience across startups and 5+ hackathon wins, I love turning
          ideas into impactful products that bridge web development and
          artificial intelligence. Beyond coding, I enjoy experimenting, sharing
          knowledge, and contributing to the developer ecosystem.
        </p>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-200" id="skills">
<div className="max-w-4xl mx-auto space-y-10 text-center">
<div className="space-y-3">
<h2 className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight">
            Technical Skills
          </h2>
<p className="text-base text-neutral-600">
            Technologies I work with to build scalable solutions.
          </p>
</div>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            React
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Next.js
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            TypeScript
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Node.js
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Python
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Java
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Express.js
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            PostgreSQL
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            MongoDB
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Docker
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            AWS
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            Machine Learning
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            GenAI
          </span>
<span className="px-5 py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-base font-normal text-neutral-900 hover:border-neutral-400 hover:shadow-sm transition-all cursor-default">
            LLMs
          </span>
</div>
</div>
</section>

<section className="py-24 px-6" id="experience">
<div className="max-w-4xl mx-auto space-y-12">
<h2 className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight">
          Experience
        </h2>
<div className="relative border-l border-neutral-200 ml-4 space-y-12">

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-50 border border-neutral-200 ring-4 ring-neutral-50 group-hover:border-neutral-900 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
<h3 className="text-lg font-normal text-neutral-900">
                Machine Learning Engineer Intern
              </h3>
<span className="text-sm font-mono text-neutral-400 mt-1 sm:mt-0">
                May 2025 – July 2025
              </span>
</div>
<div className="text-base font-normal text-neutral-600 mb-3">
              OkDriver Smart Dashcams Pvt. Ltd.
            </div>
<ul className="text-base text-neutral-600 space-y-2 max-w-2xl list-disc list-inside marker:text-neutral-400">
<li>
                Built lightweight computer vision models (YOLO, Haar Cascades)
              </li>
<li>Optimized for edge devices like Raspberry Pi</li>
<li>Worked on AI-based driver safety system</li>
</ul>
</div>

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-50 border border-neutral-200 ring-4 ring-neutral-50 group-hover:border-neutral-900 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
<h3 className="text-lg font-normal text-neutral-900">AI/ML Mentor</h3>
<span className="text-sm font-mono text-neutral-400 mt-1 sm:mt-0">
                July 2025 – Feb 2026
              </span>
</div>
<div className="text-base font-normal text-neutral-600 mb-3">
              SkillHigh Edu Technologies
            </div>
<ul className="text-base text-neutral-600 space-y-2 max-w-2xl list-disc list-inside marker:text-neutral-400">
<li>Mentored 100+ students in AI/ML and Data Science</li>
<li>Helped build real-world projects</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-200" id="projects">
<div className="max-w-6xl mx-auto space-y-12">
<div className="space-y-3">
<h2 className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight">
            Featured Projects
          </h2>
<p className="text-base text-neutral-600">
            A selection of my recent works and technical explorations.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group flex flex-col p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all">
<div className="mb-4 p-3 w-fit rounded-lg bg-white border border-neutral-200 text-neutral-900">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">
              Deepfake Detection System
            </h3>
<p className="text-base text-neutral-600 mb-6 flex-grow">
              Real-time detection system built using Vision Transformer (ViT).
              Identifies manipulated media with high accuracy.
            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-sm rounded bg-white border border-neutral-200 text-neutral-600">
                Vision Transformer
              </span>
<span className="px-2 py-1 text-sm rounded bg-white border border-neutral-200 text-neutral-600">
                FastAPI
              </span>
<span className="px-2 py-1 text-sm rounded bg-white border border-neutral-200 text-neutral-600">
                Next.js
              </span>
</div>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-200/50">
<a className="flex items-center gap-1.5 text-base font-normal text-neutral-900 hover:text-neutral-600 transition-colors" href="https://deepfake-video-image-detection.vercel.app/" target="_blank">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
                Live Demo
              </a>
<a className="flex items-center gap-1.5 text-base font-normal text-neutral-900 hover:text-neutral-600 transition-colors" href="https://github.com/urvashi-agrawal-dev/Deepfake-video-image-detection" target="_blank">
<i className="w-5 h-5" data-lucide="code" strokeWidth="1.5"></i>
                GitHub
              </a>
</div>
</article>

<article className="group flex flex-col p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all">
<div className="mb-4 p-3 w-fit rounded-lg bg-white border border-neutral-200 text-neutral-900">
<i className="w-6 h-6" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">
              Raj Shamani Website
            </h3>
<p className="text-base text-neutral-600 mb-6 flex-grow">
              A modern, responsive personal brand website featuring optimized
              media loading and clean UX design.
            </p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-200/50">
<a className="flex items-center gap-1.5 text-base font-normal text-neutral-900 hover:text-neutral-600 transition-colors" href="https://rajshamani.page/" target="_blank">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
                Live Demo
              </a>
<a className="flex items-center gap-1.5 text-base font-normal text-neutral-900 hover:text-neutral-600 transition-colors" href="https://github.com/urvashi-agrawal-dev/RajShamaniWebsite" target="_blank">
<i className="w-5 h-5" data-lucide="code" strokeWidth="1.5"></i>
                GitHub
              </a>
</div>
</article>

<article className="group flex flex-col p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all">
<div className="mb-4 p-3 w-fit rounded-lg bg-white border border-neutral-200 text-neutral-900">
<i className="w-6 h-6" data-lucide="ghost" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">
              RetroGhost (Kiroween)
            </h3>
<p className="text-base text-neutral-600 mb-6 flex-grow">
              An interactive web application showcasing creative front-end
              skills with themed UI elements and smooth animations.
            </p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-200/50">
<a className="flex items-center gap-1.5 text-base font-normal text-neutral-900 hover:text-neutral-600 transition-colors" href="https://kiroween.vercel.app/" target="_blank">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
                Live Demo
              </a>
<a className="flex items-center gap-1.5 text-base font-normal text-neutral-900 hover:text-neutral-600 transition-colors" href="https://github.com/urvashi-agrawal-dev/kiroween" target="_blank">
<i className="w-5 h-5" data-lucide="code" strokeWidth="1.5"></i>
                GitHub
              </a>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-200">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

<div className="space-y-6">
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight flex items-center gap-2">
<i className="w-7 h-7 text-neutral-400" data-lucide="trophy" strokeWidth="1.5"></i>
            Achievements
          </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 bg-white hover:shadow-sm transition-shadow">
<div className="mt-0.5 text-neutral-900">
<i className="w-5 h-5" data-lucide="medal" strokeWidth="1.5"></i>
</div>
<span className="text-base text-neutral-600 font-normal">
                Winner of 5+ hackathons
              </span>
</li>
<li className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 bg-white hover:shadow-sm transition-shadow">
<div className="mt-0.5 text-neutral-900">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="text-base text-neutral-600 font-normal">
                SSOC Mentor
              </span>
</li>
<li className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 bg-white hover:shadow-sm transition-shadow">
<div className="mt-0.5 text-neutral-900">
<i className="w-5 h-5" data-lucide="file-code-2" strokeWidth="1.5"></i>
</div>
<span className="text-base text-neutral-600 font-normal">
                Contributor at Hacktoberfest &amp; GSSoC
              </span>
</li>
</ul>
</div>

<div className="space-y-6">
<h2 className="text-2xl font-medium text-neutral-900 tracking-tight flex items-center justify-between">
<span className="flex items-center gap-2">
<i className="w-7 h-7 text-neutral-400" data-lucide="file-text" strokeWidth="1.5"></i>
              Writings
            </span>
<a className="text-base font-normal text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1" href="https://medium.com/@urvashivdjs10b" target="_blank">
              View Medium
              <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</h2>
<div className="p-6 rounded-xl border border-neutral-200 bg-white text-center hover:shadow-sm transition-shadow flex flex-col items-center justify-center min-h-[200px] gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400">
<i className="w-5 h-5" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-normal text-neutral-900 mb-1">
                I write about Tech &amp; AI
              </h3>
<p className="text-sm text-neutral-600">
                Check out my latest technical articles, tutorials, and insights
                on Medium.
              </p>
</div>
<a className="px-4 py-2 mt-2 bg-neutral-50 border border-neutral-200 rounded-full text-sm font-normal text-neutral-900 hover:bg-neutral-100 transition-colors" href="https://medium.com/@urvashivdjs10b" target="_blank">
              Read Articles
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-200" id="contact">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
          Ready to Build Something Great?
        </h2>
<p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          I'm available for freelance projects, internships, and collaborations.
          Whether you need a full-stack application, AI solution, or automation
          system, let's work together to bring your ideas to life.
        </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-900 text-white rounded-full font-normal text-base hover:bg-neutral-800 hover:scale-[1.02] transition-all shadow-sm" href="mailto:urvashiagrawal146@gmail.com">
            👉 Contact Me
          </a>
</div>
</div>
</section>

<footer className="py-10 px-6 border-t border-neutral-200 bg-neutral-50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-base text-neutral-600 font-normal">
          © 2024 Urvashi Agrawal. All rights reserved.
        </p>
<div className="flex items-center gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2 text-base font-normal" href="mailto:urvashiagrawal146@gmail.com">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Email</span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2 text-base font-normal" href="https://github.com/urvashi-agrawal-dev" target="_blank">
<i className="w-5 h-5" data-lucide="code" strokeWidth="1.5"></i>
<span className="hidden sm:inline">GitHub</span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2 text-base font-normal" href="https://www.linkedin.com/in/uraviva/" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
<span className="hidden sm:inline">LinkedIn</span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2 text-base font-normal" href="https://x.com/UraViva_" target="_blank">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Twitter</span>
</a>
</div>
</div>
</footer>


    </>
  );
}
