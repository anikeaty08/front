import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-neutral-950/95');
            } else {
                nav.classList.remove('bg-neutral-950/95');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight" href="#home">dev<span className="text-violet-500">.</span></a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#skills">Skills</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#achievements">Achievements</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#blog">Blog</a>
</div>
<a className="hidden md:block text-sm font-medium bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors" href="#contact">Contact</a>
<button className="md:hidden text-neutral-400" id="mobileMenuBtn">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden md:hidden bg-neutral-900 border-t border-neutral-800" id="mobileMenu">
<div className="px-6 py-4 flex flex-col gap-4">
<a className="text-sm text-neutral-400 hover:text-white" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#skills">Skills</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#projects">Projects</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#achievements">Achievements</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#blog">Blog</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 bg-neutral-800/50 border border-neutral-700/50 rounded-full px-4 py-2 mb-8">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-sm text-neutral-400">Open to opportunities</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
                Building the future,<br/>
<span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">one line at a time</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
                Second year CSE student at Delhi Technological University. Full-stack developer passionate about creating impactful solutions.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors" href="#projects">
                    View Projects
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-neutral-800 border border-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors" href="#contact">
                    Get in touch
                </a>
</div>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<p className="text-sm font-medium text-violet-400 mb-4">ABOUT ME</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Passionate developer with a love for clean code</h2>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        I'm a second-year Computer Science Engineering student at Delhi Technological University, one of India's premier technical institutions. My journey in tech started with curiosity and has evolved into a deep passion for building full-stack applications.
                    </p>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Currently focused on mastering Data Structures &amp; Algorithms while building real-world projects. I believe in continuous learning and pushing the boundaries of what's possible with code.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
<p className="text-2xl font-semibold text-white">5+</p>
<p className="text-sm text-neutral-500">Projects Built</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
<p className="text-2xl font-semibold text-white">500+</p>
<p className="text-sm text-neutral-500">DSA Problems</p>
</div>
</div>
</div>
<div className="relative">
<div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-800">
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<pre className="text-sm text-neutral-300 overflow-x-auto"><code><span className="text-violet-400">const</span> <span className="text-blue-300">developer</span> = {
  <span className="text-green-400">name</span>: <span className="text-amber-300">"CSE Student"</span>,
  <span className="text-green-400">university</span>: <span className="text-amber-300">"DTU Delhi"</span>,
  <span className="text-green-400">year</span>: <span className="text-amber-300">2</span>,
  <span className="text-green-400">passion</span>: <span className="text-amber-300">"Full Stack Dev"</span>,
  <span className="text-green-400">status</span>: <span className="text-amber-300">"Building..."</span>
};</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/50" id="skills">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-sm font-medium text-violet-400 mb-4">SKILLS &amp; EXPERTISE</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Technologies I work with</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
<span className="iconify text-green-500" data-icon="lucide:layers" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">MERN Stack</h3>
<p className="text-sm text-neutral-500">MongoDB, Express, React, Node.js</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
<span className="iconify text-blue-500" data-icon="lucide:file-code-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">TypeScript</h3>
<p className="text-sm text-neutral-500">Type-safe JavaScript development</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
<span className="iconify text-yellow-500" data-icon="lucide:terminal" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Python</h3>
<p className="text-sm text-neutral-500">Scripting &amp; automation</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
<span className="iconify text-violet-500" data-icon="lucide:cpu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">C++</h3>
<p className="text-sm text-neutral-500">DSA &amp; competitive programming</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-500" data-icon="lucide:braces" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">JavaScript</h3>
<p className="text-sm text-neutral-500">ES6+ &amp; modern JS features</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
<span className="iconify text-red-500" data-icon="lucide:binary" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">DSA</h3>
<p className="text-sm text-neutral-500">Data Structures &amp; Algorithms</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<span className="iconify text-orange-500" data-icon="lucide:git-branch" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Git &amp; GitHub</h3>
<p className="text-sm text-neutral-500">Version control &amp; collaboration</p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-500" data-icon="lucide:database" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Databases</h3>
<p className="text-sm text-neutral-500">MongoDB &amp; SQL databases</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="projects">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-sm font-medium text-violet-400 mb-4">FEATURED WORK</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects I've built</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all">
<div className="aspect-video bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
<div className="bg-neutral-800/50 backdrop-blur rounded-xl p-6 border border-neutral-700/50">
<span className="iconify text-violet-400" data-icon="lucide:shopping-cart" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded">Full Stack</span>
<span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded">MERN</span>
</div>
<h3 className="text-xl font-medium mb-2">E-Commerce Platform</h3>
<p className="text-neutral-400 text-sm mb-4">A complete e-commerce solution with user authentication, product management, cart functionality, payment integration, and admin dashboard.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">React</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Node.js</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">MongoDB</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Express</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">TypeScript</span>
</div>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                Code
                            </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:external-link" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                Live Demo
                            </a>
</div>
</div>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all">
<div className="aspect-video bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
<div className="bg-neutral-800/50 backdrop-blur rounded-xl p-6 border border-neutral-700/50">
<span className="iconify text-red-400" data-icon="lucide:play-circle" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Backend</span>
<span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded">API</span>
</div>
<h3 className="text-xl font-medium mb-2">YouTube Backend Clone</h3>
<p className="text-neutral-400 text-sm mb-4">A scalable backend API mimicking YouTube's core functionality including video upload, streaming, user subscriptions, likes, comments, and playlists.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Node.js</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Express</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">MongoDB</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">JWT</span>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Cloudinary</span>
</div>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                Code
                            </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-text" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                API Docs
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/50" id="achievements">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-sm font-medium text-violet-400 mb-4">ACHIEVEMENTS</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Milestones &amp; Recognition</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
<div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-violet-500" data-icon="lucide:graduation-cap" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Delhi Technological University</h3>
<p className="text-sm text-neutral-400">Pursuing B.Tech in Computer Science Engineering from one of India's top engineering institutions.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-green-500/50 transition-colors">
<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-green-500" data-icon="lucide:code-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">500+ DSA Problems</h3>
<p className="text-sm text-neutral-400">Solved 500+ problems on platforms like LeetCode, CodeForces, and GeeksforGeeks.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-blue-500" data-icon="lucide:rocket" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Full Stack Projects</h3>
<p className="text-sm text-neutral-400">Built and deployed multiple full-stack applications using modern technologies.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-amber-500" data-icon="lucide:award" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Continuous Learner</h3>
<p className="text-sm text-neutral-400">Constantly exploring new technologies and frameworks to stay updated with industry trends.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-colors">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-red-500" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Community Contributor</h3>
<p className="text-sm text-neutral-400">Active contributor to open source projects and helping fellow developers in the community.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
<span className="iconify text-cyan-500" data-icon="lucide:target" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Goal-Oriented</h3>
<p className="text-sm text-neutral-400">Focused on becoming a proficient full-stack developer and contributing to impactful projects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="blog">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
<div>
<p className="text-sm font-medium text-violet-400 mb-4">BLOG</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Thoughts &amp; Learnings</h2>
</div>
<a className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
                    View all posts
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="group">
<div className="aspect-video bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
<span className="iconify text-violet-400 opacity-50 group-hover:opacity-100 transition-opacity" data-icon="lucide:book-open" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-xs text-neutral-500 mb-2">Jan 15, 2025 • 5 min read</p>
<h3 className="text-lg font-medium mb-2 group-hover:text-violet-400 transition-colors">My Journey into Full Stack Development</h3>
<p className="text-sm text-neutral-400">How I started my journey as a developer and the lessons I learned along the way...</p>
</article>
<article className="group">
<div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center">
<span className="iconify text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" data-icon="lucide:code" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-xs text-neutral-500 mb-2">Jan 10, 2025 • 8 min read</p>
<h3 className="text-lg font-medium mb-2 group-hover:text-violet-400 transition-colors">Why TypeScript Changed How I Write Code</h3>
<p className="text-sm text-neutral-400">Exploring the benefits of TypeScript and why every JavaScript developer should learn it...</p>
</article>
<article className="group">
<div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-4 flex items-center justify-center">
<span className="iconify text-green-400 opacity-50 group-hover:opacity-100 transition-opacity" data-icon="lucide:lightbulb" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-xs text-neutral-500 mb-2">Jan 5, 2025 • 6 min read</p>
<h3 className="text-lg font-medium mb-2 group-hover:text-violet-400 transition-colors">DSA Tips for College Students</h3>
<p className="text-sm text-neutral-400">Essential strategies for mastering Data Structures and Algorithms during your college years...</p>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/50" id="contact">
<div className="max-w-3xl mx-auto text-center">
<p className="text-sm font-medium text-violet-400 mb-4">GET IN TOUCH</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Let's work together</h2>
<p className="text-neutral-400 mb-10">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors" href="mailto:your.email@example.com">
<span className="iconify" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Send Email
                </a>
<a className="inline-flex items-center justify-center gap-2 bg-neutral-800 border border-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors" href="#">
<span className="iconify" data-icon="lucide:download" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Download Resume
                </a>
</div>
<div className="flex justify-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="24" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="24" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="24" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-neutral-800">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500">© 2025 All rights reserved.</p>
<p className="text-sm text-neutral-500">Built with passion at DTU, Delhi</p>
</div>
</footer>


    </>
  );
}
