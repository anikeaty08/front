import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Custom Cursor Effect (Optional, simple implementation)
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            // Could add a custom cursor div here, but staying minimal with CSS hover states for better performance
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-glow glow-top"></div>
<div className="ambient-glow glow-bottom"></div>
<div className="ambient-glow glow-center"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tighter text-lg">RITHY TEP</span>
<span className="text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 font-mono text-gray-500">v2.0</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#experience">Timeline</a>
</div>
<a className="group flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-white border border-white/10 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                Get In Touch
                <i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
<main className="relative z-10 pt-24">

<section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative pb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

<div className="lg:col-span-7 flex flex-col gap-8 z-20">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
<span className="font-mono text-xs text-amber-500 tracking-widest uppercase">Available for work</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.95] uppercase">
                        Crafting <br/>
<span className="text-gray-600">Digital</span> <br/>
                        Experiences
                    </h1>
<p className="max-w-md text-lg text-gray-400 leading-relaxed font-light border-l border-white/10 pl-6 mt-4">
                        Transforming complex challenges into elegant solutions with modern web technologies and a passion for innovation.
                    </p>
<div className="flex flex-wrap items-center gap-6 mt-8">
<a className="bg-amber-500 text-black px-8 py-4 rounded-sm font-semibold tracking-tight hover:bg-amber-400 transition-all transform hover:-translate-y-1 flex items-center gap-2 group" href="#projects">
                            START CREATING
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="text-white px-6 py-4 rounded-sm border border-white/10 hover:border-white/30 transition-all flex items-center gap-2 text-sm tracking-wide" href="#about">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                            VIEW SHOWREEL
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">

<div className="absolute inset-0 flex items-center justify-center lg:justify-end">
<div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border border-white/5 relative group">
<img alt="Hero Banner" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/alex-knight-v_8xUFwLpE4-unsplash.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>

<div className="absolute top-10 right-0 lg:right-10 glass-card p-6 rounded-lg animate-[float_6s_ease-in-out_infinite]">
<div className="text-3xl font-semibold text-white tracking-tighter">12+</div>
<div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects</div>
</div>
<div className="absolute bottom-20 left-0 lg:left-10 glass-card p-6 rounded-lg animate-[float_8s_ease-in-out_infinite_1s]">
<div className="text-3xl font-semibold text-white tracking-tighter">100%</div>
<div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Satisfaction</div>
</div>
<div className="absolute top-1/2 -right-4 lg:-right-10 glass-card p-4 rounded-lg flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-full">
<i className="w-4 h-4 text-green-500" data-lucide="code-2"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Clean Code</div>
<div className="text-[10px] text-gray-500 font-mono">Architecture</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="relative">
<div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden relative">
<img alt="Rithy Tep" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.khmer24.co/profiles/pictures/21-10-28/rithytep_631992_1635403035_35.jpg"/>
<div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
</div>

<div className="absolute -z-10 top-10 -left-10 w-full h-full border border-dashed border-white/5 rounded-2xl hidden md:block"></div>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-4">About Me</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">
                            Passionate full-stack developer bridging the gap between design and engineering.
                        </h3>
<div className="space-y-6 text-gray-400 font-light leading-relaxed">
<p>
                                I'm a developer who believes in continuous improvement and meaningful innovation. With a foundation in Vue.js, Next.js, and .NET, I specialize in building scalable applications that solve real-world problems.
                            </p>
<p>
                                My approach combines technical excellence with a deep understanding of security and system architecture. I thrive in collaborative environments where I can contribute to ambitious projects while continuously expanding my expertise.
                            </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="flex items-center gap-3">
<i className="text-amber-500 w-5 h-5" data-lucide="zap"></i>
<span className="text-white text-sm">Fast Learner</span>
</div>
<div className="flex items-center gap-3">
<i className="text-amber-500 w-5 h-5" data-lucide="shield-check"></i>
<span className="text-white text-sm">Security Expert</span>
</div>
<div className="flex items-center gap-3">
<i className="text-amber-500 w-5 h-5" data-lucide="layers"></i>
<span className="text-white text-sm">System Architecture</span>
</div>
<div className="flex items-center gap-3">
<i className="text-amber-500 w-5 h-5" data-lucide="users"></i>
<span className="text-white text-sm">Team Player</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0d0d0d]" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-4">Expertise</h2>
<h3 className="text-4xl font-semibold text-white tracking-tight">Technical Arsenal</h3>
</div>
<p className="max-w-md text-sm text-gray-500 leading-relaxed">
                        A curated set of technologies I use to build high-performance, scalable, and secure applications.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-6">
<h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Frontend</h4>
<div className="space-y-3">
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="layout"></i>
<span className="text-gray-300 font-medium">Vue.js / Nuxt</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="triangle"></i>
<span className="text-gray-300 font-medium">Next.js</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="file-code"></i>
<span className="text-gray-300 font-medium">TypeScript</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="palette"></i>
<span className="text-gray-300 font-medium">Tailwind CSS</span>
</div>
</div>
</div>

<div className="space-y-6">
<h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Backend</h4>
<div className="space-y-3">
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="server"></i>
<span className="text-gray-300 font-medium">.NET / C#</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="terminal"></i>
<span className="text-gray-300 font-medium">Node.js</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="database"></i>
<span className="text-gray-300 font-medium">MSSQL</span>
</div>
</div>
</div>

<div className="space-y-6">
<h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Cloud &amp; DevOps</h4>
<div className="space-y-3">
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="cloud"></i>
<span className="text-gray-300 font-medium">Cloudflare</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="cloud-cog"></i>
<span className="text-gray-300 font-medium">Elastic</span>
</div>
<div className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
<i className="text-gray-500 group-hover:text-amber-500 transition-colors w-5 h-5" data-lucide="box"></i>
<span className="text-gray-300 font-medium">Serverless</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="experience">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-12 text-center">Professional Journey</h2>
<div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">

<div className="relative pl-8 md:pl-12 group">

<div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-amber-500 ring-4 ring-black"></div>
<div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
<h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
<span className="hidden sm:block text-gray-600">•</span>
<span className="text-amber-500 font-medium">Techbodia</span>
<span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 ml-auto sm:ml-0">2024 - Present</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">
                            Leading full-stack initiatives using Vue.js, Nuxt, C#, and .NET. Architecting scalable solutions with MSSQL and implementing enterprise search with Elasticsearch. Managing CI/CD pipelines via GitLab.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500 group-hover:text-white transition-colors">Vue.js</span>
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500 group-hover:text-white transition-colors">.NET</span>
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500 group-hover:text-white transition-colors">SQL</span>
</div>
</div>

<div className="relative pl-8 md:pl-12 group">

<div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-gray-700 ring-4 ring-black group-hover:bg-white transition-colors"></div>
<div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
<h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
<span className="hidden sm:block text-gray-600">•</span>
<span className="text-gray-300 font-medium">Private Company</span>
<span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 ml-auto sm:ml-0">2023 - 2024</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">
                            Developed comprehensive full-stack applications leveraging Firebase backend services and Angular framework. Built real-time data synchronization features and secure authentication systems.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500 group-hover:text-white transition-colors">Angular</span>
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500 group-hover:text-white transition-colors">Firebase</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0d0d0d]" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-4">Selected Works</h2>
<h3 className="text-4xl font-semibold text-white tracking-tight">Featured Projects</h3>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group" href="https://github.com/RithyTep" target="_blank">
                        View GitHub <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-lg glass-card border border-white/5 hover:border-amber-500/30 transition-all duration-500 h-[400px]">
<img alt="Kon Khmer AI" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756111312916.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<span className="text-amber-500 font-mono text-xs px-2 py-1 rounded border border-amber-500/20 bg-amber-500/10">Next.js</span>
<span className="text-gray-400 font-mono text-xs">HYPER3D</span>
</div>
<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Kon Khmer AI</h3>
<p className="text-gray-400 line-clamp-2 mb-6 max-w-xl group-hover:text-gray-300 transition-colors">
                                Innovative 3D AI visualization platform showcasing Cambodian cultural elements through interactive 3D models.
                            </p>
<a className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-amber-500 transition-colors" href="https://konkhmerai3d.rithytep.online/" target="_blank">
                                Explore Project <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-lg glass-card border border-white/5 hover:border-white/20 transition-all duration-500 h-[400px] md:h-auto">
<img alt="Portfolio CMS" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/123.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="text-xl font-bold text-white mb-2">Portfolio CMS</h3>
<p className="text-xs text-gray-400 mb-4 font-mono">Neon DB • Lucia Auth</p>
<a className="hover-trigger flex items-center gap-2 text-sm text-white" href="https://portfolio-bodia.vercel.app" target="_blank">
                                Visit Site <i className="w-4 h-4 hover-target" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-lg glass-card border border-white/5 hover:border-white/20 transition-all duration-500 h-[300px]">
<img alt="Alanka Store" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1762330596824.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="text-xl font-bold text-white mb-2">Alanka Store</h3>
<p className="text-xs text-gray-400 mb-4 font-mono">Three.js • WebGI</p>
<a className="hover-trigger flex items-center gap-2 text-sm text-white" href="https://alanka.store" target="_blank">
                                Visit Site <i className="w-4 h-4 hover-target" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-lg glass-card border border-white/5 hover:border-white/20 transition-all duration-500 h-[300px]">
<img alt="HMS System" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756113382312.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="text-xl font-bold text-white mb-2">HMS System</h3>
<p className="text-xs text-gray-400 mb-4 font-mono">React • Vite • Shadcn</p>
<a className="hover-trigger flex items-center gap-2 text-sm text-white" href="https://demo-hms.netlify.app/" target="_blank">
                                Visit Site <i className="w-4 h-4 hover-target" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-lg glass-card border border-white/5 hover:border-white/20 transition-all duration-500 h-[300px]">
<img alt="Key Translator" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756115059380.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="text-xl font-bold text-white mb-2">Key Translator</h3>
<p className="text-xs text-gray-400 mb-4 font-mono">Python • Google API</p>
<a className="hover-trigger flex items-center gap-2 text-sm text-white" href="https://multi-translator-sepia.vercel.app/" target="_blank">
                                Visit Site <i className="w-4 h-4 hover-target" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
<div>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                            Let's Build <br/>
<span className="text-gray-600">Something Amazing.</span>
</h2>
</div>
<div className="flex flex-col justify-center items-start lg:items-end gap-6">
<a className="group flex items-center gap-4 text-2xl md:text-3xl text-gray-300 hover:text-amber-500 transition-colors" href="mailto:contact@rithytep.online">
                            contact@rithytep.online
                            <i className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right"></i>
</a>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="https://github.com/RithyTep">GitHub</a>
<a className="text-gray-500 hover:text-white transition-colors" href="https://www.linkedin.com/in/tep-rithy-7529b7226">LinkedIn</a>
<a className="text-gray-500 hover:text-red-500 transition-colors" href="https://www.youtube.com/@Rithy500">YouTube</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 font-mono">
<div>
                        © 2025 Rithy Tep • Phnom Penh, Cambodia
                    </div>
<div className="mt-4 md:mt-0">
                        SHAPING VOID INTO MATTER
                    </div>
</div>
</div>
</footer>
</main>


    </>
  );
}
