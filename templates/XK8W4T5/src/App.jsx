import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        base: '#0f0f0f',
                        surface: '#181025',
                    },
                    fontFamily: {
                        'display': ['Manrope', 'system-ui', 'sans-serif'],
                        'body': ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    


        // Initialize Lucide icons
        lucide.createIcons();
        
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<footer className="relative overflow-hidden" style={{background: '#0f0f0f'}}>

<div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-500/30 rounded-full float-animation"></div>
<div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-500/40 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-purple-400/20 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative">

<div className="pt-20 pb-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 fade-in">
<div className="mb-8">
<h3 className="text-2xl font-display font-light tracking-tight text-white/85 mb-4">
                                Australian Web <span className="gradient-text">Experts</span>
</h3>
<p className="text-white/70 text-lg leading-relaxed max-w-md">
                                Crafting exceptional digital experiences for ambitious Australian businesses. Trusted by 350+ business owners nationwide.
                            </p>
</div>

<button className="glass-button rounded-xl px-8 py-4 group focus:outline-2 focus:outline-purple-500">
<span className="text-white font-medium shine-text relative z-10">Start Your Project</span>
</button>

<div className="flex items-center space-x-4 mt-8">
<a aria-label="LinkedIn" className="w-11 h-11 glass-surface rounded-xl flex items-center justify-center hover:border-white/20 transition-all duration-300 focus:outline-2 focus:outline-purple-500" href="#">
<i className="w-5 h-5 text-white/70 hover:text-white/90" data-lucide="linkedin"></i>
</a>
<a aria-label="Twitter" className="w-11 h-11 glass-surface rounded-xl flex items-center justify-center hover:border-white/20 transition-all duration-300 focus:outline-2 focus:outline-purple-500" href="#">
<i className="w-5 h-5 text-white/70 hover:text-white/90" data-lucide="twitter"></i>
</a>
<a aria-label="GitHub" className="w-11 h-11 glass-surface rounded-xl flex items-center justify-center hover:border-white/20 transition-all duration-300 focus:outline-2 focus:outline-purple-500" href="#">
<i className="w-5 h-5 text-white/70 hover:text-white/90" data-lucide="github"></i>
</a>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">

<div className="fade-in fade-in-delay-1">
<h4 className="text-white/85 font-display font-normal text-lg mb-6 tracking-tight">Services</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Web Development</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Mobile Apps</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Digital Strategy</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">SEO Optimisation</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Brand Identity</a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-2">
<h4 className="text-white/85 font-display font-normal text-lg mb-6 tracking-tight">Company</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">About Us</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Our Process</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Case Studies</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Careers</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Contact</a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-3">
<h4 className="text-white/85 font-display font-normal text-lg mb-6 tracking-tight">Resources</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Blog</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Documentation</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Support Centre</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Privacy Policy</a></li>
<li><a className="text-white/70 hover:text-white/90 transition-colors duration-200 focus:outline-2 focus:outline-purple-500" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/12 py-8 fade-in fade-in-delay-4">
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="flex items-center space-x-6">
<p className="text-white/55 text-sm">© 2024 Australian Web Experts. All rights reserved.</p>
<div className="flex items-center space-x-2 text-white/55">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="text-sm">Melbourne, Australia</span>
</div>
</div>
<div className="flex items-center space-x-6">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-white/70 text-sm">All systems operational</span>
</div>
<a className="text-white/70 hover:text-white/90 transition-colors duration-200 text-sm focus:outline-2 focus:outline-purple-500" href="mailto:hello@awe.com.au">
                            hello@awe.com.au
                        </a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
