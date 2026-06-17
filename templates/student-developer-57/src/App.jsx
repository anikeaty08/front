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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#EAEAEA]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-base font-medium tracking-tighter uppercase flex items-center gap-1.5" href="#">
<iconify-icon height="20" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    ALEX<span className="text-[#888888]">x</span>DEV
                </a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#about">About Me</a>
<a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#projects">Projects</a>
<a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#skills">Skills</a>
<a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">

<button className="text-[#666666] hover:text-[#111111] transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#F5F5F5]">
<iconify-icon height="18" icon="solar:moon-linear" width="18"></iconify-icon>
</button>
<button className="bg-[#111111] text-white text-xs px-4 py-2 rounded-full font-medium transition-all hover:bg-[#333333] hover:shadow-md flex items-center gap-2">
<iconify-icon height="16" icon="solar:document-download-linear" width="16"></iconify-icon>
                    Resume
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#EAEAEA] mb-8 animate-fade-up">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-normal text-[#666666]">Available for internships &amp; freelance</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-tight animate-fade-up delay-100">
                Crafting digital <br className="hidden md:block"/> experiences with purpose.
            </h1>
<p className="text-base md:text-lg text-[#666666] font-normal max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
                Hi, I'm Alex. A computer science student and frontend developer specializing in building clean, accessible, and user-centric web applications.
            </p>

<div className="max-w-4xl mx-auto bg-white border border-[#EAEAEA] rounded-2xl p-2 shadow-sm flex flex-col md:flex-row items-center gap-2 animate-fade-up delay-200">
<div className="flex-1 w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F9F9F9] rounded-xl transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-[#EAEAEA] transition-all">
<iconify-icon className="text-[#666666]" height="20" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-xs text-[#888888] font-normal mb-0.5">Education</span>
<span className="text-sm font-medium text-[#111111]">BSc Computer Science</span>
</div>
</div>
<div className="hidden md:block w-px h-10 bg-[#EAEAEA]"></div>
<div className="flex-1 w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F9F9F9] rounded-xl transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-[#EAEAEA] transition-all">
<iconify-icon className="text-[#666666]" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-xs text-[#888888] font-normal mb-0.5">Location</span>
<span className="text-sm font-medium text-[#111111]">San Francisco, CA</span>
</div>
</div>
<div className="hidden md:block w-px h-10 bg-[#EAEAEA]"></div>
<div className="flex-1 w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F9F9F9] rounded-xl transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-[#EAEAEA] transition-all">
<iconify-icon className="text-[#666666]" height="20" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-xs text-[#888888] font-normal mb-0.5">Current Focus</span>
<span className="text-sm font-medium text-[#111111]">Frontend Engineering</span>
</div>
</div>
<button className="w-full md:w-auto bg-[#111111] text-white rounded-xl px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#333333] transition-colors">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Connect</span>
</button>
</div>
</div>

<div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#EAEAEA] pt-16" id="skills">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center mb-6">
<iconify-icon className="text-[#111111]" height="24" icon="solar:monitor-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Frontend Development</h3>
<p className="text-sm text-[#666666] font-normal leading-relaxed">
                    Building responsive, accessible, and performant user interfaces using React, Vue, TypeScript, and modern CSS frameworks like Tailwind.
                </p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center mb-6">
<iconify-icon className="text-[#111111]" height="24" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Backend Systems</h3>
<p className="text-sm text-[#666666] font-normal leading-relaxed">
                    Creating robust APIs and database architectures using Node.js, Express, PostgreSQL, and Prisma to power dynamic applications.
                </p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center mb-6">
<iconify-icon className="text-[#111111]" height="24" icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">UI/UX Design</h3>
<p className="text-sm text-[#666666] font-normal leading-relaxed">
                    Translating complex requirements into intuitive, minimalist designs through wireframing, prototyping in Figma, and user research.
                </p>
</div>
</div>

<div className="max-w-7xl mx-auto mt-32" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Selected Work</h2>
<p className="text-sm text-[#666666] font-normal">A collection of my recent academic and personal projects.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:opacity-70 transition-opacity" href="#">
                    View GitHub
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer flex flex-col">
<div className="w-full aspect-[4/3] bg-[#EFEFEF] rounded-2xl overflow-hidden mb-5 relative border border-[#EAEAEA]">
<div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#EBEBEB] group-hover:scale-105 transition-transform duration-700 ease-in-out"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAEAEA]/50 text-[#111111]">
                            Web App
                        </div>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-[#111111]">Inventory Dashboard</h3>
<div className="flex items-center gap-1 text-xs text-[#666666]">
<iconify-icon height="14" icon="solar:code-circle-linear" width="14"></iconify-icon>
                            Next.js
                        </div>
</div>
<p className="text-sm text-[#888888] font-normal mb-4">A full-stack inventory management system featuring real-time data visualization and role-based access control.</p>
<div className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-[#111111] group-hover:text-blue-600 transition-colors">
                        View Project <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="w-full aspect-[4/3] bg-[#EFEFEF] rounded-2xl overflow-hidden mb-5 relative border border-[#EAEAEA]">
<div className="absolute inset-0 bg-gradient-to-bl from-[#F0F0F0] to-[#E5E5E5] group-hover:scale-105 transition-transform duration-700 ease-in-out"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAEAEA]/50 text-[#111111]">
                            Open Source
                        </div>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-[#111111]">Minimal Dev Blog</h3>
<div className="flex items-center gap-1 text-xs text-[#666666]">
<iconify-icon height="14" icon="solar:code-circle-linear" width="14"></iconify-icon>
                            Astro
                        </div>
</div>
<p className="text-sm text-[#888888] font-normal mb-4">A lightweight, highly performant blogging template designed specifically for developers. Full markdown support.</p>
<div className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-[#111111] group-hover:text-blue-600 transition-colors">
                        View Project <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer flex flex-col hidden lg:flex">
<div className="w-full aspect-[4/3] bg-[#EFEFEF] rounded-2xl overflow-hidden mb-5 relative border border-[#EAEAEA]">
<div className="absolute inset-0 bg-gradient-to-t from-[#EDEDED] to-[#F5F5F5] group-hover:scale-105 transition-transform duration-700 ease-in-out"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAEAEA]/50 text-[#111111]">
                            CLI Tool
                        </div>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-[#111111]">TaskRunner CLI</h3>
<div className="flex items-center gap-1 text-xs text-[#666666]">
<iconify-icon height="14" icon="solar:code-circle-linear" width="14"></iconify-icon>
                            Rust
                        </div>
</div>
<p className="text-sm text-[#888888] font-normal mb-4">A blazingly fast command-line task manager written in Rust, designed to streamline daily productivity workflows.</p>
<div className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-[#111111] group-hover:text-blue-600 transition-colors">
                        View Project <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-[#EAEAEA] mt-auto" id="contact">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-sm font-medium tracking-tighter uppercase flex items-center gap-1.5 mb-6" href="#">
<iconify-icon height="18" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        ALEX<span className="text-[#888888]">x</span>DEV
                    </a>
<p className="text-xs text-[#666666] font-normal leading-relaxed max-w-xs">
                        A digital garden and portfolio. Documenting my journey through code, design, and computer science.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-[#111111] mb-4 uppercase tracking-wider">Navigation</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#about">About Me</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#projects">Projects</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#skills">Skills</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">Resume PDF</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-[#111111] mb-4 uppercase tracking-wider">Connect</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">Email</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">LinkedIn</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">GitHub</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">Twitter / X</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-[#111111] mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">Privacy</a></li>
<li><a className="text-sm text-[#666666] hover:text-[#111111] transition-colors font-normal" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#EAEAEA]">
<p className="text-xs text-[#888888] font-normal">© 2024 Alex. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="text-[#888888] hover:text-[#111111] transition-colors" href="#">
<iconify-icon height="18" icon="solar:link-linear" width="18"></iconify-icon>
</a>
<a className="text-[#888888] hover:text-[#111111] transition-colors" href="#">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
