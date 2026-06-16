import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
        
        // Dark mode toggle functionality
        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        }
        
        // Initialize dark mode based on user preference
        if (localStorage.getItem('darkMode') === 'true' || 
            (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
        
        // Component system for easy management
        window.StudioComponents = {
            navigation: document.getElementById('navigation-component'),
            hero: document.getElementById('hero-component'),
            video: document.getElementById('video-component'),
            featuredWork: document.getElementById('featured-work-component'),
            services: document.getElementById('services-component'),
            cta: document.getElementById('cta-component'),
            footer: document.getElementById('footer-component')
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800" id="navigation-component">
<div className="max-w-7xl mx-auto">
<nav className="flex items-center justify-between px-6 lg:px-8 h-16">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-gray-900 dark:bg-white rounded-md"></div>
<span className="text-lg font-medium tracking-tight">Studio</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
<a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Work</a>
<a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Services</a>
<a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onclick="toggleDarkMode()" title="Toggle dark mode">
<i className="w-5 h-5 dark:hidden" data-lucide="sun"></i>
<i className="w-5 h-5 hidden dark:block" data-lucide="moon"></i>
</button>
<button className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                        Get started
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="lg:hidden p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>
</div>
</div>

<div className="relative" id="hero-component">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="pt-20 lg:pt-32 pb-16 lg:pb-24 text-center">
<h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[0.9] text-gray-900 dark:text-white mb-6 lg:mb-8">
                    We craft digital<br/>experiences that<br className="hidden sm:block"/>matter.
                </h1>
<p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 lg:mb-12">
                    A design studio focused on creating meaningful digital products that connect brands with their audiences through exceptional design.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                        View our work
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Get in touch
                    </button>
</div>
</div>
</div>
</div>

<div className="relative mb-20 lg:mb-32" id="video-component">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video shadow-xl dark:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-900 dark:to-black flex items-center justify-center">
<button className="group flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
<i className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" data-lucide="play"></i>
</button>
</div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-medium mb-2">Watch our process</h3>
<p className="text-white/70 text-sm">See how we transform ideas into digital experiences</p>
</div>
</div>
</div>
</div>

<div className="mb-20 lg:mb-32" id="featured-work-component">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 lg:mb-20">
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">
                    Featured work
                </h2>
<p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    A selection of our recent projects that showcase our approach to design and problem-solving.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

<div className="group cursor-pointer">
<div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 aspect-[4/3] mb-6">
<div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="palette"></i>
</div>
<span className="text-sm font-medium text-blue-900 dark:text-blue-100">Brand Identity</span>
</div>
<div className="space-y-3">
<div className="h-3 bg-white/60 dark:bg-white/20 rounded-full"></div>
<div className="h-3 bg-white/40 dark:bg-white/15 rounded-full w-3/4"></div>
<div className="h-3 bg-white/30 dark:bg-white/10 rounded-full w-1/2"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">TechFlow</h3>
<p className="text-gray-500 dark:text-gray-400">Complete brand identity and digital presence for a fintech startup.</p>
</div>

<div className="group cursor-pointer">
<div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 aspect-[4/3] mb-6">
<div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="monitor"></i>
</div>
<span className="text-sm font-medium text-purple-900 dark:text-purple-100">Web Design</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="aspect-square bg-white/60 dark:bg-white/20 rounded-lg"></div>
<div className="aspect-square bg-white/40 dark:bg-white/15 rounded-lg"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Wellness Co</h3>
<p className="text-gray-500 dark:text-gray-400">E-commerce platform design for a sustainable wellness brand.</p>
</div>
</div>
</div>
</div>

<div className="mb-20 lg:mb-32" id="services-component">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 lg:mb-20">
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">
                    What we do
                </h2>
<p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    We help businesses create meaningful connections through thoughtful design and strategic thinking.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
<div className="text-center group">
<div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
<i className="w-8 h-8 text-gray-600 dark:text-gray-400" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Brand Design</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        Creating cohesive visual identities that tell your story and resonate with your audience.
                    </p>
</div>
<div className="text-center group">
<div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
<i className="w-8 h-8 text-gray-600 dark:text-gray-400" data-lucide="monitor"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Digital Products</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        Designing and developing digital experiences that are both beautiful and functional.
                    </p>
</div>
<div className="text-center group">
<div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
<i className="w-8 h-8 text-gray-600 dark:text-gray-400" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Strategy</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        Helping you understand your users and create experiences that drive real business results.
                    </p>
</div>
</div>
</div>
</div>

<div className="mb-20 lg:mb-32" id="cta-component">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 lg:p-20 text-center border border-gray-100 dark:border-gray-800">
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">
                    Ready to start your project?
                </h2>
<p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can help bring your vision to life and create something extraordinary together.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                        Start a project
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        Schedule a call
                    </button>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100 dark:border-gray-800" id="footer-component">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 dark:bg-white rounded"></div>
<span className="font-medium text-gray-900 dark:text-white">Studio</span>
</div>
<div className="flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
<a className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</div>


    </>
  );
}
