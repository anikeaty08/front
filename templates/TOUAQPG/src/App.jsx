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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
'sans': ['Inter', 'system-ui', 'sans-serif']
},
animation: {
'float': 'float 6s ease-in-out infinite',
'glow': 'glow 2s ease-in-out infinite alternate',
'fadeIn': 'fadeIn 0.8s ease-out forwards',
'slideUp': 'slideUp 0.8s ease-out forwards'
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-20px)' }
},
glow: {
'0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
'100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}

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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB" width="100%"></iframe></div>

<div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
<div className="particles">
<div className="particle" style={{left: '10%', animationDelay: '0s'}}></div>
<div className="particle" style={{left: '20%', animationDelay: '2s'}}></div>
<div className="particle" style={{left: '30%', animationDelay: '4s'}}></div>
<div className="particle" style={{left: '40%', animationDelay: '6s'}}></div>
<div className="particle" style={{left: '50%', animationDelay: '8s'}}></div>
<div className="particle" style={{left: '60%', animationDelay: '10s'}}></div>
<div className="particle" style={{left: '70%', animationDelay: '12s'}}></div>
<div className="particle" style={{left: '80%', animationDelay: '14s'}}></div>
<div className="particle" style={{left: '90%', animationDelay: '16s'}}></div>
</div>
</div>

<aside className="fixed left-0 top-0 h-full w-72 z-50 glass-dark p-6 flex flex-col animate-fadeIn">
<div className="gradient-border mb-8">
<div className="glass-dark rounded-2xl p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-cyan-400">
<img alt="John Smith" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;q=80" style={{}}/>
</div>
<div>
<h3 className="font-semibold text-lg tracking-tight">John Smith</h3>
<div className="flex items-center gap-2 mt-1">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm text-neutral-300">Available for Work</span>
</div>
</div>
</div>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl glass hover:bg-white/20 transition-all duration-300 group active animate-delay-100" href="#home">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="home"></i>
<span className="font-medium">Home</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl hover:glass hover:bg-white/20 transition-all duration-300 group animate-delay-200" href="#about">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
<span className="font-medium">About</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl hover:glass hover:bg-white/20 transition-all duration-300 group animate-delay-300" href="#projects">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
<span className="font-medium">Projects</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl hover:glass hover:bg-white/20 transition-all duration-300 group animate-delay-400" href="#services">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="briefcase"></i>
<span className="font-medium">Services</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl hover:glass hover:bg-white/20 transition-all duration-300 group animate-delay-500" href="#templates">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="grid-3x3"></i>
<span className="font-medium">Templates</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl hover:glass hover:bg-white/20 transition-all duration-300 group animate-delay-600" href="#blog">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="pen-tool"></i>
<span className="font-medium">Blog</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl hover:glass hover:bg-white/20 transition-all duration-300 group animate-delay-700" href="#contact">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mail"></i>
<span className="font-medium">Contact</span>
</a>
</nav>
<div className="mt-8 space-y-4">
<div className="flex gap-2">
<a className="p-3 rounded-xl glass hover:bg-white/20 transition-all duration-300 hover:scale-105" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="github"></i>
</a>
<a className="p-3 rounded-xl glass hover:bg-white/20 transition-all duration-300 hover:scale-105" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
<a className="p-3 rounded-xl glass hover:bg-white/20 transition-all duration-300 hover:scale-105" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i>
</a>
</div>
</div>
</aside>

<main className="ml-72 relative z-10">

<section className="min-h-screen flex pt-24 pr-12 pb-24 pl-12 items-center justify-center" id="home">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-slideUp">
<div className="space-y-4">
<p className="text-cyan-400 font-medium tracking-wider uppercase text-sm animate-fadeIn animate-delay-100">Full Stack Developer &amp; UI Designer</p>
<h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-none animate-fadeIn animate-delay-200">
<span className="text-white">JOHN</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SMITH</span>
</h1>
<p className="text-xl text-neutral-300 max-w-lg leading-relaxed animate-fadeIn animate-delay-300">
              I design websites, brand identities, and digital experiences that people love to use.
            </p>
</div>
<div className="flex gap-4 animate-fadeIn animate-delay-500">
<a className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 animate-glow" href="#projects">
              See My Work
            </a>
<a className="px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 font-semibold" href="#contact">
              Contact Me
            </a>
</div>
<div className="flex items-center gap-4 animate-fadeIn animate-delay-700">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm text-neutral-300">I'm Available for Projects</span>
</div>
</div>
<div className="relative animate-fadeIn animate-delay-400">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl animate-pulse"></div>
<div className="glass-dark rounded-3xl p-8 relative">
<img alt="John Smith" className="w-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1635492491273-455af7728453?w=1600&amp;q=80" style={{}}/>
<div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 animate-float">
<div className="text-center">
<div className="text-2xl font-bold text-blue-400">5+</div>
<div className="text-sm text-neutral-300">Years Experience</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-12 py-24" id="about">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl font-bold tracking-tight mb-4">About Me</h2>
<p className="text-xl text-neutral-300 max-w-3xl mx-auto">Let me tell you about my journey</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="glass-dark rounded-3xl p-8">
<h3 className="text-2xl font-semibold mb-6">Hey, I'm John</h3>
<p className="text-neutral-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating digital experiences that matter. I specialize in modern web technologies and have a keen eye for design.
            </p>
<p className="text-neutral-300 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
</div>
<div className="glass-dark rounded-3xl p-8">
<h3 className="text-2xl font-semibold mb-6">Skills</h3>
<div className="space-y-4">
<div className="skill-bar">
<div className="flex justify-between mb-2">
<span className="text-sm font-medium">React/Next.js</span>
<span className="text-sm text-neutral-400">95%</span>
</div>
<div className="w-full bg-neutral-700 rounded-full h-2">
<div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div className="skill-bar">
<div className="flex justify-between mb-2">
<span className="text-sm font-medium">UI/UX Design</span>
<span className="text-sm text-neutral-400">90%</span>
</div>
<div className="w-full bg-neutral-700 rounded-full h-2">
<div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div className="skill-bar">
<div className="flex justify-between mb-2">
<span className="text-sm font-medium">Node.js</span>
<span className="text-sm text-neutral-400">85%</span>
</div>
<div className="w-full bg-neutral-700 rounded-full h-2">
<div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-12 py-24" id="projects">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl font-bold tracking-tight mb-4">Projects</h2>
<p className="text-xl text-neutral-300 max-w-3xl mx-auto">Selected work that showcases my skills and passion</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group">
<div className="relative">
<img alt="Project 1" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-4 py-2 rounded-full glass text-sm font-medium" href="#">View Project</a>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
<p className="text-neutral-300 text-sm mb-4">A modern e-commerce solution built with React and Node.js</p>
<div className="flex gap-2">
<span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">React</span>
<span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">Node.js</span>
</div>
</div>
</div>
<div className="glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group">
<div className="relative">
<img alt="Project 2" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-4 py-2 rounded-full glass text-sm font-medium" href="#">View Project</a>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
<p className="text-neutral-300 text-sm mb-4">UI/UX design for a productivity mobile application</p>
<div className="flex gap-2">
<span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">Figma</span>
<span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">React Native</span>
</div>
</div>
</div>
<div className="glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group">
<div className="relative">
<img alt="Project 3" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-4 py-2 rounded-full glass text-sm font-medium" href="#">View Project</a>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
<p className="text-neutral-300 text-sm mb-4">Complete brand identity design for a tech startup</p>
<div className="flex gap-2">
<span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">Branding</span>
<span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">Design</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-12 py-24" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl font-bold tracking-tight mb-4">Services</h2>
<p className="text-xl text-neutral-300 max-w-3xl mx-auto">How I can help bring your ideas to life</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
<div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-cyan-400 stroke-[1.5]" data-lucide="code"></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Web Development</h3>
<p className="text-neutral-300 mb-6">Custom websites and web applications built with modern technologies</p>
<div className="text-3xl font-bold text-cyan-400 mb-4">$5,000</div>
<ul className="space-y-2 text-sm text-neutral-300 mb-6">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Custom Development
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Responsive Design
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Performance Optimization
              </li>
</ul>
<a className="w-full glass rounded-full py-3 px-6 font-medium hover:bg-white/20 transition-all duration-300 text-center block" href="#contact">
              Start Now
            </a>
</div>
<div className="glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
<div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-purple-400 stroke-[1.5]" data-lucide="palette"></i>
</div>
<h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
<p className="text-neutral-300 mb-6">Beautiful and intuitive user interfaces that users love</p>
<div className="text-3xl font-bold text-purple-400 mb-4">$3,000</div>
<ul className="space-y-2 text-sm text-neutral-300 mb-6">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                User Research
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Wireframing &amp; Prototyping
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Visual Design
              </li>
</ul>
<a className="w-full glass rounded-full py-3 px-6 font-medium hover:bg-white/20 transition-all duration-300 text-center block" href="#contact">
              Start Now
            </a>
</div>
<div className="glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
<div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-cyan-400 stroke-[1.5]" data-lucide="star"></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Branding</h3>
<p className="text-neutral-300 mb-6">Complete brand identity design and development</p>
<div className="text-3xl font-bold text-cyan-400 mb-4">$2,000</div>
<ul className="space-y-2 text-sm text-neutral-300 mb-6">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Logo Design
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Brand Guidelines
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400 stroke-[1.5]" data-lucide="check"></i>
                Marketing Materials
              </li>
</ul>
<a className="w-full glass rounded-full py-3 px-6 font-medium hover:bg-white/20 transition-all duration-300 text-center block" href="#contact">
              Start Now
            </a>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-12 py-24" id="templates">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl font-bold tracking-tight mb-4">Templates</h2>
<p className="text-xl text-neutral-300 max-w-3xl mx-auto">Ready-to-use templates for your next project</p>
</div>
<div className="mb-8">
<div className="relative max-w-md mx-auto">
<i className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 stroke-[1.5]" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-3 glass rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300" placeholder="Search templates..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group">
<div className="relative">
<img alt="Template 1" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute top-4 right-4">
<button className="glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="download"></i>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold">Vilox</h3>
<span className="text-cyan-400 font-bold">$99</span>
</div>
<p className="text-neutral-300 text-sm">Modern dashboard template</p>
</div>
</div>
<div className="glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group">
<div className="relative">
<img alt="Template 2" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div></div></div></div></section></main>
    </>
  );
}
