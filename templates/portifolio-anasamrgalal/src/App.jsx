import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons({
          attrs: {
              "stroke-width": 1.5
          }
      });
    


      const navLinks = document.querySelectorAll('nav a');
      const sections = document.querySelectorAll('header, section, #about');

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const id = entry.target.getAttribute('id');
                  if (!id) return;

                  navLinks.forEach(link => {
                      link.classList.remove('bg-white', 'text-black', 'shadow-lg', 'scale-105');
                      link.classList.add('text-zinc-400', 'hover:text-white', 'hover:bg-white/5');

                      if (link.getAttribute('href') === '#' + id) {
                          link.classList.remove('text-zinc-400', 'hover:text-white', 'hover:bg-white/5');
                          link.classList.add('bg-white', 'text-black', 'shadow-lg', 'scale-105');
                      }
                  });
              }
          });
      }, { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" });

      sections.forEach(section => observer.observe(section));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-glow top-[-200px] left-[-100px] bg-rose-500/10"></div>
<div className="ambient-glow bottom-[-200px] right-[-100px] bg-orange-500/10"></div>
<div className="ambient-glow top-[40%] left-[30%] bg-blue-500/5 w-[800px] h-[800px] animate-pulse"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto">
<div className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<a className="px-5 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300" href="#home">
          Home
        </a>
<a className="px-5 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300" href="#work">
          Work
        </a>
<a className="px-5 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300" href="#about">
          About
        </a>
<a className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300" href="#contact">
          Contact
        </a>
</div>
</nav>
<main className="max-w-6xl mx-auto px-6 pt-32 pb-20">

<header className="flex flex-col items-center justify-center text-center py-16 space-y-8 relative" id="home">

<div className="flex flex-col items-center mb-6">
<div className="w-16 h-16 rounded-2xl glass-panel p-1 flex items-center justify-center overflow-hidden mb-6 hover:scale-105 transition-transform duration-500">
<img alt="Logo" className="w-full h-full object-cover rounded-xl opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="space-y-4 max-w-3xl">
<h1 className="text-6xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 tracking-tight text-glow pb-2">
            Anas Amr Galal
          </h1>
<p className="text-xl md:text-2xl text-zinc-400 font-normal leading-relaxed">
            Crafting
            <span className="text-white">visual identities</span>
            with precision and soul.
            <br/>
            Graphic Design &amp; Art Direction.
          </p>
</div>
<div className="flex items-center gap-4 mt-8">
<a className="group relative px-8 py-3 rounded-full bg-white text-black font-medium overflow-hidden transition-all hover:scale-105" href="#work">
<span className="relative z-10 flex items-center gap-2">
              View Projects
              <i className="w-4 h-4" data-lucide="arrow-down"></i>
</span>
<div className="absolute inset-0 bg-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] mb-20" id="work">

<div className="md:col-span-2 row-span-2 glass-panel rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer border-white/5 hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-8 z-20">
<div className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<i className="w-5 h-5 group-hover:text-black transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<span className="text-xs font-semibold text-rose-400 tracking-wider uppercase mb-3">
              Featured Project
            </span>
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
              Apex Branding
            </h3>
<p className="text-lg text-zinc-400 line-clamp-2">
              A comprehensive visual identity system for a modern architectural
              firm, focusing on minimalism and geometric harmony.
            </p>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-500/5 z-0"></div>
<div className="absolute top-0 right-0 w-full h-full flex items-center justify-center opacity-40 group-hover:scale-105 transition-transform duration-700">

<div className="relative w-[500px] h-[500px]">
<div className="absolute top-10 left-10 w-40 h-40 border-2 border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute bottom-20 right-20 w-60 h-60 border border-white/10 rotate-45"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-rose-500/20 to-transparent rounded-full blur-3xl"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group border-white/5 hover:border-white/10 transition-colors">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
<div>
<i className="w-8 h-8 text-white mb-4" data-lucide="palette"></i>
<h3 className="text-xl font-medium text-white mb-1">Toolkit</h3>
<p className="text-zinc-500 text-sm">Creative Software</p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
              Photoshop
            </span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
              Illustrator
            </span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
              Figma
            </span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
              After Effects
            </span>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group border-white/5 hover:border-white/10 transition-colors" id="about">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<h3 className="text-xl font-medium text-white">Experience</h3>
<span className="text-xs font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded-md">
                2026
              </span>
</div>
<div className="space-y-6 flex-1 overflow-hidden">
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-zinc-300" data-lucide="pen-tool"></i>
</div>
<div>
<h4 className="text-white text-base font-medium">
                    Senior Graphic Designer
                  </h4>
<p className="text-zinc-500 text-sm">Studio Vivid</p>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-zinc-300" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-white text-base font-medium">
                    Visual Artist
                  </h4>
<p className="text-zinc-500 text-sm">Freelance</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity duration-500" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1 tracking-tight">
              Editorial Design
            </h3>
<p className="text-zinc-400 text-base mb-4">
              Magazine layout and typography.
            </p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-rose-300 transition-colors" href="#">
              View Case Study
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden group border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 max-w-lg">
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
              Based in Cairo, Egypt
            </h3>
<p className="text-lg text-zinc-400">
              Available for branding projects and creative direction.
            </p>
</div>
<div className="relative z-10 hidden md:block">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<i className="w-8 h-8 text-white/50" data-lucide="globe"></i>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto text-center py-20 relative" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight relative z-10">
          Let's visualize something
          <br/>
          extraordinary.
        </h2>
<p className="text-xl text-zinc-400 mb-10 relative z-10">
          Reach out for collaborations or just to say hello.
        </p>
<form className="relative z-10 max-w-md mx-auto space-y-4">
<div className="glass-panel rounded-xl p-1 flex items-center border-white/10 focus-within:border-white/20 transition-colors">
<input className="w-full bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-zinc-600 text-base" placeholder="Enter your email..." type="email"/>
<button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors" type="button">
              Send
            </button>
</div>
<p className="text-xs text-zinc-600">No spam. Only good vibes.</p>
</form>

<div className="mt-16 relative z-10">
<div className="flex flex-wrap justify-center gap-6">
<a aria-label="Facebook" className="text-zinc-500 hover:text-[#1877F2] transition-transform hover:scale-125 transition-colors duration-300" href="https://facebook.com" target="_blank">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
<a aria-label="Instagram" className="text-zinc-500 hover:text-[#E4405F] transition-transform hover:scale-125 transition-colors duration-300" href="https://instagram.com/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a aria-label="Threads" className="text-zinc-500 hover:text-white transition-transform hover:scale-125 transition-colors duration-300" href="https://threads.net/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="at-sign"></i>
</a>
<a aria-label="X" className="text-zinc-500 hover:text-white transition-transform hover:scale-125 transition-colors duration-300" href="https://x.com/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
<a aria-label="TikTok" className="text-zinc-500 hover:text-[#ff0050] transition-transform hover:scale-125 transition-colors duration-300" href="https://tiktok.com/@anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="clapperboard"></i>
</a>
<a aria-label="GitHub" className="text-zinc-500 hover:text-white transition-transform hover:scale-125 transition-colors duration-300" href="https://github.com/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="github"></i>
</a>
<a aria-label="Reddit" className="text-zinc-500 hover:text-[#FF4500] transition-transform hover:scale-125 transition-colors duration-300" href="https://reddit.com/user/AnasAmrGalal" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</a>
<a aria-label="Dribbble" className="text-zinc-500 hover:text-[#EA4C89] transition-transform hover:scale-125 transition-colors duration-300" href="https://dribbble.com/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="dribbble"></i>
</a>
<a aria-label="Telegram" className="text-zinc-500 hover:text-[#0088cc] transition-transform hover:scale-125 transition-colors duration-300" href="https://t.me/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="send"></i>
</a>
<a aria-label="YouTube" className="text-zinc-500 hover:text-[#FF0000] transition-transform hover:scale-125 transition-colors duration-300" href="https://youtube.com/channel/UCpr8tL0rV2bgQC8Hg7avFkA" target="_blank">
<i className="w-6 h-6" data-lucide="youtube"></i>
</a>
<a aria-label="LinkedIn" className="text-zinc-500 hover:text-[#0A66C2] transition-transform hover:scale-125 transition-colors duration-300" href="https://linkedin.com/in/anasamrgalal" target="_blank">
<i className="w-6 h-6" data-lucide="linkedin"></i>
</a>
</div>
</div>
</section>
<footer className="text-center py-8 border-t border-white/5 mt-10">
<p className="text-zinc-600 text-sm">
          © 2026 Anas Amr Galal. All rights reserved.
        </p>
</footer>
</main>



    </>
  );
}
