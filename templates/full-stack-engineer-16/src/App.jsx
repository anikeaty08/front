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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                                for(let i=0; i<24; i++) document.write('<div class="bg-white/10"></div>');
                            
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
      

<div className="fixed inset-0 z-0 flex justify-center items-start pointer-events-none opacity-40">
<div className="w-[800px] h-[800px] bg-neutral-800 rounded-full blur-[120px] -top-[400px] absolute opacity-30 mix-blend-screen"></div>
</div>

<nav className="sticky lg:absolute top-0 inset-x-0 z-50 w-full flex justify-between items-center p-6 lg:px-8 lg:py-8 text-sm font-normal tracking-wide bg-black/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b lg:border-none border-white/10">

<div className="font-medium text-lg tracking-tight text-white flex items-center gap-2">
<iconify-icon icon="solar:slash-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
            Mohamed Aly
        </div>

<div className="hidden lg:flex gap-8 items-center text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>

<div className="flex gap-6 items-center">
<div className="hidden lg:flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400 relative">
<div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Available</span>
</div>
<a className="hidden lg:block text-white hover:opacity-70 transition-opacity" href="#contact">Contact</a>
<button className="lg:hidden p-2 -mr-2 text-white hover:opacity-70">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-4 pointer-events-none pt-20 lg:pt-0">

<div className="lg:hidden h-[60vh] col-span-1 flex flex-col justify-center pb-12 px-6 pointer-events-auto">
<div className="w-full select-none">
<span className="font-semibold tracking-tighter text-white opacity-90 block" style={{fontSize: '18vw', lineHeight: '0.85', letterSpacing: '-0.04em'}}>FULL</span>
<span className="font-semibold tracking-tighter text-neutral-500 block text-right" style={{fontSize: '18vw', lineHeight: '0.85', letterSpacing: '-0.04em'}}>STACK</span>
</div>
</div>

<div className="h-full border-r border-white/10 flex flex-col justify-between relative pointer-events-auto min-h-0 lg:min-h-screen">

<div className="hidden lg:block absolute top-1/4 left-0 w-[200%] pointer-events-none select-none z-[60] px-8 overflow-visible">
<span className="font-semibold tracking-tighter text-white block whitespace-nowrap" style={{fontSize: '12vw', lineHeight: '0.8', letterSpacing: '-0.04em'}}>FULL STACK</span>
</div>

<div className="relative lg:absolute lg:bottom-12 left-0 w-full px-6 lg:px-8 z-30 flex flex-col gap-6 mb-12 lg:mb-0">
<div className="relative w-full aspect-video bg-neutral-900 overflow-hidden group cursor-pointer border border-white/10 rounded-lg">

<div className="absolute inset-0 bg-[#0A0A0A] p-4 flex flex-col gap-2 font-mono text-xs opacity-50 group-hover:opacity-80 transition-opacity duration-700">
<div className="text-neutral-500">import { Architect } from '@system/core';</div>
<div className="text-neutral-500 mt-2">const build = new Architect({</div>
<div className="text-emerald-400/70 ml-4">scale: 'infinite',</div>
<div className="text-emerald-400/70 ml-4">performance: 'optimal',</div>
<div className="text-neutral-500 ml-4">stack: ['React', 'Node', 'Postgres']</div>
<div className="text-neutral-500">});</div>
<div className="mt-4 w-1/2 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400/50 w-2/3"></div>
</div>
</div>
<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium tracking-wider uppercase rounded text-white">System Architecture</span>
</div>
</div>
<div className="relative flex items-start gap-4">
<p className="text-sm font-normal text-neutral-400 leading-relaxed flex-1">
                        Designing robust backend architectures and highly interactive frontends for scaling enterprises.
                    </p>
<div className="shrink-0 w-10 h-10 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer rounded-full group">
<iconify-icon className="group-hover:-rotate-45 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden lg:block h-full border-r border-white/10 relative"></div>

<div className="hidden lg:block h-full border-r border-white/10 relative"></div>

<div className="h-full relative pointer-events-auto flex flex-col justify-between border-r lg:border-none border-white/10 min-h-0 lg:min-h-screen">

<div className="hidden lg:block absolute top-[40%] right-0 lg:w-[200%] pointer-events-none select-none z-[60] px-8 text-right overflow-visible">
<span className="font-semibold tracking-tighter text-neutral-600 block" style={{fontSize: '12vw', lineHeight: '0.8', letterSpacing: '-0.04em'}}>ENGINEER</span>
</div>

<div className="relative w-full px-6 lg:px-8 text-right z-30 mt-12 lg:mt-32 mb-8 lg:mb-0">
<div className="flex flex-col items-end gap-2">
<span className="text-7xl tracking-tighter flex items-start gap-1 font-medium text-white">
<span className="text-neutral-600 text-4xl mt-2 font-normal">/</span>
                        05
                    </span>
<div className="mt-2 text-xs font-medium tracking-widest uppercase text-neutral-500 w-32 text-right border-t border-white/10 pt-3 ml-auto">
                        Years Experience
                    </div>
<div className="mt-12 flex flex-col items-end gap-2">
<div className="flex items-center gap-3 text-neutral-400">
<iconify-icon icon="simple-icons:react" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:nodedotjs" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:postgresql" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="18"></iconify-icon>
</div>
<span className="text-xs text-neutral-600 uppercase tracking-widest mt-1">Core Stack</span>
</div>
</div>
</div>

<a className="w-full h-24 border-t border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-colors z-30 group relative mt-auto cursor-pointer pointer-events-auto" href="#contact">
<span className="text-sm font-medium tracking-tight mr-3">View Resume</span>
<iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<section className="relative z-20 bg-black text-white w-full border-t border-white/10 pointer-events-auto" id="expertise">
<div className="grid grid-cols-1 lg:grid-cols-4 w-full">

<div className="col-span-1 lg:col-span-4 p-8 lg:p-12 border-b border-white/10 flex flex-col lg:flex-row justify-between items-end gap-8">
<div className="max-w-4xl">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-none">
                        Scalable Systems.<br/>
<span className="text-neutral-600">Pixel-Perfect Interfaces.</span>
</h2>
<p className="text-neutral-400 text-lg max-w-xl leading-relaxed font-normal">
                        Bridging the gap between robust backend architecture and seamless frontend experiences to build complete digital products.
                    </p>
</div>
<div className="mb-2">
<a className="group flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors pb-1 border-b border-white/10 hover:border-white/40" href="#">
                        View methodology
                        <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[450px] flex flex-col justify-between hover:bg-neutral-900/30 transition-colors">
<div className="relative w-full h-40 border border-white/10 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

<div className="w-3/4 h-2/3 border border-white/10 rounded overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-500">
<div className="h-4 border-b border-white/10 flex items-center px-2 gap-1 bg-neutral-900">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>
<div className="flex-1 p-2 flex gap-2">
<div className="w-1/3 h-full bg-white/5 rounded-sm"></div>
<div className="w-2/3 h-full flex flex-col gap-2">
<div className="w-full h-3 bg-white/5 rounded-sm"></div>
<div className="w-1/2 h-3 bg-emerald-500/20 rounded-sm"></div>
</div>
</div>
</div>
</div>
<div>
<div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Frontend Dev</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Building responsive, accessible, and performant user interfaces using React, Next.js, and Tailwind CSS.
                    </p>
</div>
</div>

<div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[450px] flex flex-col justify-between hover:bg-neutral-900/30 transition-colors">
<div className="relative w-full h-40 border border-white/10 bg-[#050505] flex flex-col p-4 overflow-hidden rounded-md">
<div className="font-mono text-xs text-neutral-500 space-y-1.5 leading-tight group-hover:text-neutral-400 transition-colors">
<p><span className="text-purple-400">async function</span> <span className="text-blue-400">initDB</span>() {</p>
<p className="pl-4">const client = await pool.connect();</p>
<p className="pl-4">try {</p>
<p className="pl-8 text-neutral-600">// Execute query</p>
<p className="pl-8">await client.query('BEGIN');</p>
<p className="pl-4">}</p>
<p>}</p>
</div>
</div>
<div>
<div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Backend Architecture</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Designing secure RESTful &amp; GraphQL APIs, database schemas, and microservices using Node.js and PostgreSQL.
                    </p>
</div>
</div>

<div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[450px] flex flex-col justify-between hover:bg-neutral-900/30 transition-colors">
<div className="relative w-full h-40 border border-white/10 bg-black flex items-center justify-center p-4 rounded-md overflow-hidden">
<div className="relative w-24 h-24">
<div className="absolute inset-0 border border-white/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-emerald-500/30 rounded-full border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-neutral-400 group-hover:text-emerald-400 transition-colors" icon="solar:cloud-check-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Cloud &amp; DevOps</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Deploying and scaling applications with AWS, Docker, and setting up automated CI/CD pipelines.
                    </p>
</div>
</div>

<div className="group relative col-span-1 border-b border-white/10 p-0 h-[450px] flex flex-col hover:bg-neutral-900/30 transition-colors">
<div className="w-full h-1/2 relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="grid grid-cols-6 grid-rows-4 w-full h-full gap-0.5 opacity-20">


</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-black/50 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
<div className="p-8 flex flex-col justify-end h-1/2">
<h3 className="text-xl font-medium tracking-tight mb-2">Recent Projects</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        A walkthrough of complex applications built from scratch.
                    </p>
<a className="text-xs font-medium uppercase tracking-widest border-b border-white/20 pb-1 self-start hover:border-white transition-colors text-neutral-300" href="#">View Demos</a>
</div>
</div>
</div>

<div className="w-full border-b border-white/10 py-16 px-8 bg-neutral-950">
<p className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-10 text-center lg:text-left">Technologies &amp; Tools</p>
<div className="flex flex-wrap justify-center lg:justify-start items-center gap-12 lg:gap-20 text-neutral-500">
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:react" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:nextdotjs" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:typescript" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:nodedotjs" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:postgresql" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:docker" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:amazonaws" width="32"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors duration-300" icon="simple-icons:vercel" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="relative z-20 bg-black text-white w-full border-b border-white/10 pointer-events-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-4 w-full">

<div className="col-span-1 lg:border-r border-b lg:border-b-0 border-white/10 flex flex-col bg-[#050505] p-8 lg:p-12 justify-between">
<div className="flex flex-col gap-8">

<div className="aspect-[4/5] overflow-hidden group w-full border border-white/10 rounded-lg relative bg-neutral-900 flex items-center justify-center">
<iconify-icon className="text-neutral-700 group-hover:text-white transition-colors duration-700" icon="solar:user-circle-linear" width="80"></iconify-icon>
<div className="absolute bottom-4 left-4 right-4 flex items-center">
<div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-300">Open to offers</span>
</div>
</div>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Mohamed Aly</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-normal">
                            Full Stack Engineer. Passionate about clean code, scalable architecture, and user-centric design.
                        </p>
</div>

<div className="flex items-center gap-3">
<a className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-neutral-400 hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-neutral-400 hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-neutral-400 hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
</a>
</div>
</div>
<a className="group mt-12 w-full py-4 px-6 border border-white/10 text-white font-medium text-sm tracking-wide rounded flex items-center justify-between hover:bg-white hover:text-black transition-all text-center cursor-pointer" href="#contact">
                    Connect with me
                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="col-span-1 lg:col-span-3 flex flex-col h-full">
<div className="p-8 lg:p-12 border-b border-white/10">
<p className="text-2xl lg:text-3xl font-normal leading-snug text-neutral-200 max-w-3xl tracking-tight">
                        I am an experienced Full Stack Engineer capable of taking an idea from a blank slate to a fully deployed, high-performance web application. I emphasize code quality, automated testing, and seamless user experiences.
                    </p>
<div className="flex flex-wrap gap-2 mt-12">
<span className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium uppercase tracking-wider text-neutral-400 cursor-default">System Design</span>
<span className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium uppercase tracking-wider text-neutral-400 cursor-default">API Development</span>
<span className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium uppercase tracking-wider text-neutral-400 cursor-default">React/Next.js</span>
<span className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium uppercase tracking-wider text-neutral-400 cursor-default">PostgreSQL</span>
<span className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium uppercase tracking-wider text-neutral-400 cursor-default">AWS/Docker</span>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#020202]">

<div className="group flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-24">
<span className="text-sm text-neutral-500 font-mono">2023 - Pr</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-white">Senior Software Engineer</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8 text-neutral-400">
<span className="text-sm">TechCorp Inc.</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-24">
<span className="text-sm text-neutral-500 font-mono">2021 - 23</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-white">Full Stack Developer</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8 text-neutral-400">
<span className="text-sm">StartupHub</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-24">
<span className="text-sm text-neutral-500 font-mono">2019 - 21</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-white">Backend Developer</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8 text-neutral-400">
<span className="text-sm">DataFlow Systems</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 bg-black text-white w-full pointer-events-auto" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-12 border-white/10 border-b">

<div className="col-span-1 lg:col-span-5 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between p-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 mb-8 bg-white/5">
<iconify-icon className="text-white" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wider text-neutral-300 uppercase">Get in touch</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
                        Let's build something <span className="text-neutral-500">exceptional.</span>
</h2>
<p className="text-base text-neutral-400 leading-relaxed max-w-sm">
                        Whether you need a scalable backend infrastructure or a complete full-stack product, I'm ready to bring your vision to life.
                    </p>
</div>
</div>

<div className="col-span-1 lg:col-span-7 p-8 lg:p-16 bg-[#030303]">
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<label className="block uppercase text-xs font-medium text-neutral-500 tracking-wider mb-2">Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-base text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="relative group">
<label className="block uppercase text-xs font-medium text-neutral-500 tracking-wider mb-2">Email</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-base text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="relative group">
<label className="block uppercase text-xs font-medium text-neutral-500 tracking-wider mb-2">Project Details</label>
<textarea className="w-full bg-transparent border-b border-white/10 py-2 text-base text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Briefly describe your requirements..." rows="3"></textarea>
</div>
<div className="flex items-center justify-end pt-4">
<button className="group px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded hover:bg-neutral-200 transition-colors flex items-center gap-2" type="button">
                            Send Message
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>

<div className="p-6 lg:px-12 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-neutral-500 font-normal tracking-wide">
                © 2024 Mohamed Aly. All rights reserved.
            </div>
<button className="group flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-white transition-colors uppercase tracking-wider" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                Back to top
                <iconify-icon className="group-hover:-translate-y-1 transition-transform" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</section>

    </>
  );
}
