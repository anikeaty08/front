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
      
    lucide.createIcons({strokeWidth:1.5});

    const menuBtn=document.getElementById('menuBtn');
    const mobileMenu=document.getElementById('mobileMenu');
    if(menuBtn){
      menuBtn.addEventListener('click',()=>{
        mobileMenu.classList.toggle('hidden');
        const icon=menuBtn.querySelector('i');
        icon.setAttribute('data-lucide',mobileMenu.classList.contains('hidden')?'menu':'x');
        lucide.createIcons({strokeWidth:1.5});
      });
    }

    const animateOnScroll=()=>{
      document.querySelectorAll('[class*="animate-"]').forEach(el=>{
        const rect=el.getBoundingClientRect();
        if(rect.top<window.innerHeight&&rect.bottom>0){el.classList.add('animate-fade-in');}
      });
    };
    window.addEventListener('scroll',animateOnScroll); animateOnScroll();
  
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/e3863644-82da-4d68-9953-8dce285d1445/0_0.png?w=800&amp'}}></div>

<div className="mx-auto my-4 lg:my-12 max-w-7xl rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br relative from-green-900 via-slate-900 to-black">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -inset-32 bg-[radial-gradient(circle_at_30%_20%,rgba(59,91,204,0.30),transparent_50%)] blur-3xl"></div>
<div className="absolute -inset-32 bg-[radial-gradient(circle_at_70%_80%,rgba(65,185,122,0.20),transparent_50%)] blur-3xl"></div>
</div>

<nav className="relative z-10 flex items-center justify-between px-4 lg:px-8 py-4 lg:py-6 border-b backdrop-blur-xl animate-fade-in border-white/10">

<div className="flex gap-3 text-xl font-bold tracking-tight items-center">
<span className="bg-gradient-to-r bg-clip-text text-transparent uppercase from-[#3B5BCC] to-[#41B97A]">Creator</span>
<span className="px-2 py-1 bg-[#3B5BCC]/20 text-xs rounded-full font-medium text-[#3B5BCC]">BETA</span>
</div>

<ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
<li><a className="px-4 py-2 rounded-lg transition-all duration-200 bg-white/10 hover:bg-white/20" href="#">Studio</a></li>
<li><a className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10" href="#">Templates</a></li>
<li><a className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10" href="#">Pricing</a></li>
<li><a className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10" href="#">Enterprise</a></li>
<li className="relative group">
<button className="flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
            Resources
            <i className="w-4 h-4 transition-transform group-hover:rotate-180 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 mt-2 w-48 backdrop-blur-xl rounded-lg border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-green-900/95 border-white/20">
<a className="block px-3 py-2 rounded-md transition text-sm hover:bg-white/10" href="#">Documentation</a>
<a className="block px-3 py-2 rounded-md transition text-sm hover:bg-white/10" href="#">API Reference</a>
<a className="block px-3 py-2 rounded-md transition text-sm hover:bg-white/10" href="#">Community</a>
</div>
</li>
</ul>

<div className="flex items-center gap-3">
<a className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm border-white/20 hover:bg-white/5 hover:border-white/30" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="user"></i>
          Sign In
        </a>
<a className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B5BCC] to-[#41B97A] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:from-[#344fae] hover:to-[#3aa46e]" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="sparkles"></i>
          Start Creating
        </a>

<button className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-white/10" id="menuBtn">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="lg:hidden relative z-20 hidden px-4 pb-4 border-b backdrop-blur-xl border-white/10" id="mobileMenu">
<ul className="flex flex-col gap-2 text-sm font-medium">
<li><a className="block px-3 py-2 rounded-lg transition bg-white/10 hover:bg-white/20" href="#">Studio</a></li>
<li><a className="block px-3 py-2 rounded-lg transition hover:bg-white/10" href="#">Templates</a></li>
<li><a className="block px-3 py-2 rounded-lg transition hover:bg-white/10" href="#">Pricing</a></li>
<li><a className="block px-3 py-2 rounded-lg transition hover:bg-white/10" href="#">Enterprise</a></li>
<li><a className="block px-3 py-2 rounded-lg transition hover:bg-white/10" href="#">Resources</a></li>
<li><a className="block px-3 py-2 rounded-lg transition hover:bg-white/10" href="#">Sign In</a></li>
</ul>
</div>

<section className="relative z-10 lg:px-12 lg:pt-16 lg:pb-20 pt-8 pr-4 pb-12 pl-4">

<div className="flex items-center justify-between mb-8 lg:mb-12 animate-slide-up delay-100 animate-fade-in">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full text-sm text-amber-300">
<div className="w-2 h-2 rounded-full animate-pulse bg-amber-400"></div>
<span>AI Models Online</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-[#3B5BCC]/20 rounded-full text-sm text-[#3B5BCC]/80">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="zap"></i>
<span>47ms Response</span>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-white/60">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="users"></i>
<span>2.4M+ creators</span>
</div>
</div>

<div className="max-w-5xl animate-slide-up delay-200 animate-fade-in">
<h1 className="sm:text-5xl lg:text-7xl leading-tight text-4xl tracking-tight font-manrope font-medium">
          YOUR ASSISTANT:
          <span className="relative inline-block font-manrope font-medium">
            AI-POWERED
            <span className="absolute inset-x-0 bottom-2 h-4 bg-gradient-to-r from-[#3B5BCC]/60 to-[#41B97A]/60 -z-10 rounded-md blur-sm"></span>
</span>
<span className="bg-gradient-to-r bg-clip-text text-transparent font-manrope font-medium from-[#3B5BCC] to-[#41B97A]">
            EDITING SUITE
          </span>
</h1>
</div>

<p className="mt-6 text-lg lg:text-xl max-w-2xl leading-relaxed animate-slide-up delay-300 animate-fade-in text-white/80">
        Transform your creative workflow with intelligent editing, automated enhancements, and AI-powered insights. From concept to completion in minutes, not hours.
      </p>

<div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 animate-slide-up delay-400 animate-fade-in">

<div className="col-span-1 transition-all duration-300 group hover:bg-white/10 bg-white/5 bg-[url(https://cdn.midjourney.com/65c9daea-11d4-4847-83e3-a5076e5c153f/0_2.png?w=800&amp;q=80)] bg-cover border-white/10 rounded-xl p-6 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-[#3B5BCC]/20 rounded-lg group-hover:bg-[#3B5BCC]/30 transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5] text-[#3B5BCC]" data-lucide="brain"></i>
</div>
<h3 className="font-semibold text-lg">Smart Analysis</h3>
</div>
<p className="text-sm leading-relaxed text-white/70">
            Get real-time feedback on composition, color theory, and visual impact with our advanced AI analysis engine.
          </p>
<div className="mt-4 flex items-center gap-2 text-xs text-[#3B5BCC]">
<span>GPT-4 Vision</span><span>•</span><span>Claude 3</span>
</div>
</div>

<div className="col-span-1 transition-all duration-300 group hover:bg-white/10 bg-white/5 bg-[url(https://cdn.midjourney.com/eb4037ef-c442-45fb-b034-ad344a41b008/0_1.png?w=800&amp;q=80)] bg-cover border-white/10 rounded-xl p-6 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-[#41B97A]/20 rounded-lg group-hover:bg-[#41B97A]/30 transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5] text-[#41B97A]" data-lucide="wand-2"></i>
</div>
<h3 className="font-semibold text-lg">Auto Enhancement</h3>
</div>
<p className="text-sm leading-relaxed text-white/70">
            One-click improvements for lighting, contrast, and color balance using machine learning trained on millions of images.
          </p>
<div className="mt-4 flex items-center gap-2 text-xs text-[#41B97A]/80">
<span>Neural Filters</span><span>•</span><span>Edge Detection</span>
</div>
</div>

<div className="col-span-1 sm:col-span-2 lg:col-span-1 transition-all duration-300 group hover:bg-white/10 bg-white/5 border-white/10 border rounded-xl p-6 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-white/10 rounded-lg">
<i className="w-5 h-5 stroke-[1.5] text-[#3B5BCC]" data-lucide="users"></i>
</div>
<h3 className="font-semibold text-lg">Creator Community</h3>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full ring-2 ring-green-900 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&amp;q=80"/>
<img className="w-8 h-8 rounded-full ring-2 ring-green-900 object-cover" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&amp;q=80"/>
<img className="w-8 h-8 rounded-full ring-2 ring-green-900 object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&amp;q=80"/>
<img className="w-8 h-8 rounded-full ring-2 ring-green-900 object-cover" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=320&amp;q=80"/>
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3B5BCC] to-[#41B97A] ring-2 flex items-center justify-center text-xs font-bold ring-green-900">+2M</div>
</div>
<span className="text-sm text-white/70">active creators</span>
</div>
<p className="text-sm leading-relaxed text-white/70">
            Join millions of creators sharing techniques, templates, and inspiration.
          </p>
</div>
</div>

<div className="mt-12 lg:mt-16 animate-slide-up delay-500 animate-fade-in">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
<a className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B5BCC] to-[#41B97A] font-semibold text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:from-[#344fae] hover:to-[#3aa46e]" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="play"></i>
            Start Creating Now
          </a>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-200 border-white/20 hover:bg-white/5 hover:border-white/30 text-white/90">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="video"></i>
            Watch Demo
          </button>
</div>
<p className="text-sm text-white/60">
          ✨ Free tier includes 100 AI enhancements • No credit card required • Cancel anytime
        </p>
</div>

<div className="mt-12 lg:mt-20 animate-slide-up delay-600 animate-fade-in">
<div className="rounded-xl p-6 backdrop-blur-md border bg-white/5 border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gradient-to-r from-[#3B5BCC]/20 to-[#41B97A]/20 rounded-lg">
<i className="w-5 h-5 stroke-[1.5] text-[#3B5BCC]" data-lucide="message-circle"></i>
</div>
<h3 className="font-semibold">AI Creative Assistant</h3>
<div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 rounded-full text-xs text-amber-300">
<div className="w-1.5 h-1.5 rounded-full animate-pulse bg-amber-400"></div>
<span>Online</span>
</div>
</div>
<div className="space-y-3 mb-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-gradient-to-r from-[#3B5BCC] to-[#41B97A] rounded-full flex items-center justify-center text-xs font-bold">AI</div>
<div className="flex-1 rounded-lg p-3 text-sm bg-white/5">
                I can help you enhance your images, suggest color palettes, analyze compositions, and generate creative ideas. What would you like to work on today?
              </div>
</div>
</div>
<div className="flex items-center rounded-lg px-4 py-3 gap-3 border bg-white/5 border-white/10">
<i className="w-5 h-5 stroke-[1.5] text-[#3B5BCC]" data-lucide="sparkles"></i>
<input className="flex-1 bg-transparent outline-none placeholder:text-white/40 text-sm" placeholder="Enhance this portrait with dramatic lighting and vibrant colors..." type="text"/>
<button className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="paperclip"></i>
</button>
<button className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="mic"></i>
</button>
<button className="p-2 bg-gradient-to-r from-[#3B5BCC] to-[#41B97A] rounded-lg transition-all duration-200 hover:from-[#344fae] hover:to-[#3aa46e]">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</section>

<div className="relative z-10 flex items-center justify-between px-4 lg:px-8 py-4 lg:py-6 border-t backdrop-blur-xl animate-slide-up delay-700 animate-fade-in border-white/10">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-white/60">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="server"></i>
<span>Status: All systems operational</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/60">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="clock"></i>
<span>Last updated: 2 min ago</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 group hover:bg-white/10">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="share"></i>
</button>
<button className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 group hover:bg-white/10">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="bookmark"></i>
</button>
<button className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 group hover:bg-white/10">
<i className="w-5 h-5 stroke-[1.5] group-hover:rotate-90 transition-transform" data-lucide="settings"></i>
</button>
<button className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 group hover:bg-white/10">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="maximize"></i>
</button>
</div>
</div>
</div>



    </>
  );
}
