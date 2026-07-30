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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'vercel-bg': '#000000',
                        'vercel-card': '#111111',
                        'vercel-border': '#333333',
                        'vercel-text': '#888888',
                        'vercel-light': '#ffffff',
                        'vercel-accent': '#0070f3',
                    }
                }
            }
        }
    
}

{

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    
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
      

<nav className="fixed top-0 w-full bg-vercel-bg/80 backdrop-blur-md z-50 border-b border-vercel-border">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-neutral-900 rounded-full"></div>
<span className="font-semibold text-sm">Alex Chen</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-vercel-text hover:text-white transition-colors text-sm" href="#work">Work</a>
<a className="text-vercel-text hover:text-white transition-colors text-sm" href="#about">About</a>
<a className="text-vercel-text hover:text-white transition-colors text-sm" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 relative overflow-hidden" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s, transform 0.6s`}}>
<div className="absolute inset-0 bg-gradient-to-br from-vercel-accent/5 to-purple-500/5"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-6xl mx-auto px-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-vercel-text bg-clip-text text-transparent">
                        Full Stack Developer
                    </h1>
<p className="text-xl text-vercel-text max-w-xl leading-relaxed">
                        I build fast, scalable web applications with modern technologies. Currently based in Toronto.
                    </p>
<div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2">
<span>View My Work</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="border border-vercel-border px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors">
                            Get in Touch
                        </button>
</div>
</div>
<div className="relative">
<div className="bg-vercel-card border border-vercel-border rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-4 left-4 flex space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<div className="mt-8 space-y-3 font-mono text-sm">
<div className="text-purple-400">const developer = {"{"}</div>
<div className="ml-4 text-vercel-text">name: <span className="text-green-400">'Alex Chen'</span>,</div>
<div className="ml-4 text-vercel-text">skills: [<span className="text-blue-400">'React', 'Node.js'</span>],</div>
<div className="ml-4 text-vercel-text">experience: <span className="text-orange-400">5</span>,</div>
<div className="text-purple-400">{"}"};</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-vercel-border" id="about" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s, transform 0.6s`}}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-3xl font-bold mb-6">About Me</h2>
<div className="space-y-4 text-vercel-text leading-relaxed">
<p className="">
                            I'm a full-stack developer with over 5 years of experience building web applications that scale.
                        </p>
<p className="">
                            I specialize in React, Node.js, and cloud architecture, working with startups and established companies.
                        </p>
</div>
</div>
<div className="lg:col-span-2">
<h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 flex bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mr-auto mb-3 ml-auto items-center justify-center">
<span className="text-white font-bold">R</span>
</div>
<div className="text-sm font-medium">React</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<div className="text-sm font-medium">Node.js</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">TS</span>
</div>
<div className="text-sm font-medium">TypeScript</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">AWS</span>
</div>
<div className="text-sm font-medium text-xs">Amazon Web Services</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">▲</span>
</div>
<div className="text-sm font-medium">Next.js</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">P</span>
</div>
<div className="text-sm font-medium">Python</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">PG</span>
</div>
<div className="text-sm font-medium">PostgreSQL</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
<div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
<span className="text-white font-bold">D</span>
</div>
<div className="text-sm font-medium">Docker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-vercel-border" id="work" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s, transform 0.6s`}}>
<div className="max-w-6xl mx-auto px-6">
<div className="space-y-12">
<h2 className="text-3xl font-bold text-center">Featured Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-vercel-card border border-vercel-border rounded-xl overflow-hidden hover:border-vercel-accent transition-all duration-300 hover:transform hover:scale-105">
<div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-vercel-bg/80 backdrop-blur-sm rounded-lg p-3">
<div className="text-xs text-vercel-text">E-commerce Platform</div>
<div className="text-sm font-medium">Next.js + Stripe</div>
</div>
</div>
</div>
<div className="p-6 space-y-4">
<h3 className="text-lg font-semibold">E-commerce Platform</h3>
<p className="text-vercel-text text-sm leading-relaxed">
                                Scalable platform handling 100K+ users with real-time inventory and payment processing.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">React</span>
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">Node.js</span>
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">AWS</span>
</div>
</div>
</div>

<div className="group bg-vercel-card border border-vercel-border rounded-xl overflow-hidden hover:border-vercel-accent transition-all duration-300 hover:transform hover:scale-105">
<div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-vercel-bg/80 backdrop-blur-sm rounded-lg p-3">
<div className="text-xs text-vercel-text">Analytics Dashboard</div>
<div className="text-sm font-medium">React + D3.js</div>
</div>
</div>
</div>
<div className="p-6 space-y-4">
<h3 className="text-lg font-semibold">Analytics Dashboard</h3>
<p className="text-vercel-text text-sm leading-relaxed">
                                Real-time dashboard for SaaS companies with comprehensive business insights.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">Next.js</span>
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">TypeScript</span>
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">D3.js</span>
</div>
</div>
</div>

<div className="group bg-vercel-card border border-vercel-border rounded-xl overflow-hidden hover:border-vercel-accent transition-all duration-300 hover:transform hover:scale-105">
<div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-vercel-bg/80 backdrop-blur-sm rounded-lg p-3">
<div className="text-xs text-vercel-text">API Management</div>
<div className="text-sm font-medium">Express + MongoDB</div>
</div>
</div>
</div>
<div className="p-6 space-y-4">
<h3 className="text-lg font-semibold">API Management Tool</h3>
<p className="text-vercel-text text-sm leading-relaxed">
                                Developer tool for API documentation with automatic generation and testing.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">React</span>
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">Express</span>
<span className="px-2 py-1 bg-vercel-bg text-xs rounded-md">MongoDB</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-vercel-border" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity 0.6s, transform 0.6s`}}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-bold mb-8">Experience</h2>
<div className="space-y-8">
<div className="bg-vercel-card border border-vercel-border rounded-xl p-6">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-lg font-semibold">Senior Full Stack Developer</h3>
<div className="text-vercel-accent">TechFlow Solutions</div>
</div>
<div className="text-sm text-vercel-text">2022 — Present</div>
</div>
<p className="text-vercel-text text-sm leading-relaxed">
                                Leading development of scalable web applications. Built microservices architecture reducing load times by 40%.
                            </p>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-xl p-6">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-lg font-semibold">Full Stack Developer</h3>
<div className="text-vercel-accent">Digital Innovations Inc</div>
</div>
<div className="text-sm text-vercel-text">2020 — 2021</div>
</div>
<p className="text-vercel-text text-sm leading-relaxed">
                                Developed e-commerce platforms handling millions in transactions with modern JavaScript frameworks.
                            </p>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-bold mb-8">Stats</h2>
<div className="grid grid-cols-2 gap-4">
<div className="bg-vercel-card border border-vercel-border rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-vercel-accent mb-2">5+</div>
<div className="text-sm text-vercel-text">Years Experience</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-vercel-accent mb-2">50+</div>
<div className="text-sm text-vercel-text">Projects Completed</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-vercel-accent mb-2">100K+</div>
<div className="text-sm text-vercel-text">Users Served</div>
</div>
<div className="bg-vercel-card border border-vercel-border rounded-xl p-6 text-center">
<div className="text-3xl font-bold text-vercel-accent mb-2">24/7</div>
<div className="text-sm text-vercel-text">Uptime Maintained</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-vercel-border" id="contact" style={{opacity: `0`, transform: `translateY(20px)`, transition: `opacity 0.6s, transform 0.6s`}}>
<div className="max-w-4xl mx-auto px-6">
<div className="bg-vercel-card border border-vercel-border rounded-2xl p-12 text-center">
<h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
<p className="text-xl text-vercel-text max-w-2xl mx-auto mb-8">
                    I'm always interested in hearing about new opportunities and interesting projects.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="bg-white text-black px-8 py-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors" href="mailto:alex.chen@email.com">
                        alex.chen@email.com
                    </a>
<div className="flex items-center space-x-4">
<a className="bg-vercel-bg border border-vercel-border p-3 rounded-lg text-vercel-text hover:text-white hover:border-vercel-accent transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
<a className="bg-vercel-bg border border-vercel-border p-3 rounded-lg text-vercel-text hover:text-white hover:border-vercel-accent transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-vercel-border py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="text-sm text-vercel-text">© 2024 Alex Chen</div>
<div className="text-sm text-vercel-text">Built with Next.js and deployed on Vercel</div>
</div>
</div>
</footer>



    </>
  );
}
